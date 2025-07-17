import { motion } from "framer-motion";
import { Download, Play, Shield, Zap, Users, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import DownloadModal from "./download-modal";
import phoneInterfaceImage from "@assets/image_1752747325706.png";

export default function Hero() {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("windows");

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
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  onClick={() => {
                    setSelectedPlatform("windows");
                    setShowDownloadModal(true);
                  }}
                  className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl btn-hover-lift"
                  size="lg"
                >
                  <Download className="mr-2" size={20} />
                  Скачать для Windows
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  onClick={() => {
                    setSelectedPlatform("android");
                    setShowDownloadModal(true);
                  }}
                  variant="outline"
                  className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-50 transition-all duration-200 shadow-lg hover:shadow-xl btn-hover-lift"
                  size="lg"
                >
                  <Smartphone className="mr-2" size={20} />
                  Скачать для Android
                </Button>
              </motion.div>
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
              {/* Phone mockup with real app interface */}
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
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img 
                    src={phoneInterfaceImage} 
                    alt="Actogeam Messenger Interface" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
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
          platform={selectedPlatform}
        />
      )}
    </section>
  );
}
