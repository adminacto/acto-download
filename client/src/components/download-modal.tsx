import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  platform: string;
}

export default function DownloadModal({ isOpen, onClose, platform }: DownloadModalProps) {
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const downloadMutation = useMutation({
    mutationFn: async (platform: string) => {
      const response = await apiRequest("GET", `/api/download/${platform}`);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/downloads/stats"] });
      toast({
        title: "Скачивание завершено!",
        description: "Файл сохранен в папку \"Загрузки\".",
      });
    },
    onError: (error) => {
      toast({
        title: "Ошибка скачивания",
        description: "Не удалось скачать файл. Попробуйте еще раз.",
        variant: "destructive",
      });
    },
  });

  const startDownload = async () => {
    setIsDownloading(true);
    setProgress(0);
    
    // Simulate download progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setIsDownloading(false);
          downloadMutation.mutate(platform);
          setTimeout(onClose, 1000);
          return 100;
        }
        return newProgress;
      });
    }, 100);
  };

  const handleClose = () => {
    if (!isDownloading) {
      onClose();
    }
  };

  const platformNames = {
    windows: "Windows",
    macos: "macOS",
    linux: "Linux",
    android: "Android",
    universal: "Универсальная версия",
    ios: "iOS"
  };

  useEffect(() => {
    if (isOpen) {
      startDownload();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 max-w-md w-full mx-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {progress === 100 ? "Скачивание завершено!" : "Скачивание началось"}
              </h3>
              <p className="text-gray-600 mb-6">
                Actogeam Messenger для {platformNames[platform as keyof typeof platformNames]}
              </p>
              
              <div className="bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
                <motion.div
                  className="bg-indigo-600 h-full rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              <p className="text-sm text-gray-500 mb-6">
                {Math.round(progress)}% завершено
              </p>
              
              {!isDownloading && (
                <Button 
                  onClick={handleClose}
                  variant="outline"
                  className="w-full"
                >
                  Закрыть
                </Button>
              )}
              
              {isDownloading && (
                <button 
                  onClick={handleClose}
                  className="text-gray-500 hover:text-gray-700 text-sm"
                >
                  Отмена
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
