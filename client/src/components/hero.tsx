import { motion } from "framer-motion";
import { Download, Play, Shield, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import DownloadModal from "./download-modal";

export default function Hero() {
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Общайтесь
              <span className="text-indigo-600"> быстрее</span>
              <br />и безопаснее
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Actogeam Messenger - современное решение для мгновенного обмена сообщениями с расширенными возможностями шифрования и групповой работы.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                onClick={() => setShowDownloadModal(true)}
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105"
                size="lg"
              >
                <Download className="mr-2" size={20} />
                Скачать для Windows
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-50 transition-colors"
                size="lg"
              >
                <Play className="mr-2" size={20} />
                Посмотреть демо
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-6 text-sm text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center space-x-2">
                <Shield className="text-green-500" size={16} />
                <span>Безопасность</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="text-yellow-500" size={16} />
                <span>Быстрота</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="text-blue-500" size={16} />
                <span>Групповые чаты</span>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Phone mockup with app interface */}
              <motion.div 
                className="mx-auto w-64 h-128 bg-gray-900 rounded-3xl p-2 shadow-2xl"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  {/* App interface mockup */}
                  <div className="bg-indigo-600 p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">Анна Иванова</div>
                        <div className="text-indigo-200 text-xs">в сети</div>
                      </div>
                    </div>
                    <div className="w-1 h-4 bg-white/30 rounded-full"></div>
                  </div>
                  
                  {/* Messages */}
                  <div className="p-4 space-y-4 h-80 overflow-hidden">
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-2xl px-4 py-2 max-w-xs">
                        <p className="text-sm">Привет! Как дела?</p>
                        <p className="text-xs text-gray-500 mt-1">14:30</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-indigo-600 text-white rounded-2xl px-4 py-2 max-w-xs">
                        <p className="text-sm">Отлично! Работаю над новым проектом</p>
                        <p className="text-xs text-indigo-200 mt-1">14:32</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-2xl px-4 py-2 max-w-xs">
                        <p className="text-sm">Звучит интересно! Расскажешь?</p>
                        <p className="text-xs text-gray-500 mt-1">14:33</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Input */}
                  <div className="absolute bottom-4 left-4 right-4 bg-gray-100 rounded-2xl flex items-center p-2">
                    <input 
                      type="text" 
                      placeholder="Написать сообщение..." 
                      className="flex-1 bg-transparent outline-none text-sm px-2"
                      disabled
                    />
                    <button className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-sm transform rotate-45"></div>
                    </button>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Shield className="text-indigo-600" size={20} />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              >
                <Zap className="text-yellow-500" size={20} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {showDownloadModal && (
        <DownloadModal 
          isOpen={showDownloadModal}
          onClose={() => setShowDownloadModal(false)}
          platform="windows"
        />
      )}
    </section>
  );
}
