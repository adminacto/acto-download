import { motion } from "framer-motion";
import { Download, Apple, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import DownloadModal from "./download-modal";

const platforms = [
  {
    name: "Android",
    icon: "🤖",
    requirement: "Android 6.0 или новее",
    size: "45 МБ",
    platform: "android"
  },
  {
    name: "Windows",
    icon: "🪟",
    requirement: "Windows 10/11 (любое железо)",
    size: "85 МБ",
    platform: "windows"
  },
  {
    name: "Универсальная версия",
    icon: "🌐",
    requirement: "Работает на любом устройстве",
    size: "12 МБ",
    platform: "universal"
  }
];

export default function DownloadSection() {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("");

  const handleDownload = (platform: string) => {
    setSelectedPlatform(platform);
    setShowDownloadModal(true);
  };

  return (
    <section id="download" className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Скачайте Actogeam прямо сейчас</h2>
          <p className="text-xl text-indigo-100 mb-12">Доступно для всех популярных платформ</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {platforms.map((platform, index) => (
            <motion.div 
              key={platform.platform}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{platform.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{platform.name}</h3>
              <p className="text-sm text-indigo-100 mb-6">{platform.requirement}</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  onClick={() => handleDownload(platform.platform)}
                  className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl btn-hover-lift w-full"
                >
                  <Download className="mr-2" size={16} />
                  Скачать ({platform.size})
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-indigo-100 mb-4">Также доступно для мобильных устройств</p>
          <div className="flex justify-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                onClick={() => handleDownload("ios")}
                variant="outline"
                className="bg-black text-white border-black hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Apple className="mr-2" size={20} />
                <div className="text-left">
                  <div className="text-xs">Скачать в</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                onClick={() => handleDownload("android")}
                variant="outline"
                className="bg-black text-white border-black hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Smartphone className="mr-2" size={20} />
                <div className="text-left">
                  <div className="text-xs">Скачать в</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {showDownloadModal && (
        <DownloadModal 
          isOpen={showDownloadModal}
          onClose={() => setShowDownloadModal(false)}
          platform={selectedPlatform}
        />
      )}
    </section>
  );
}
