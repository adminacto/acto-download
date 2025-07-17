import { motion } from "framer-motion";
import { Shield, Zap, Users, FileText, Video, Bot } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "End-to-End шифрование",
    description: "Все сообщения защищены современными алгоритмами шифрования. Только вы и получатель можете их прочитать.",
    color: "indigo"
  },
  {
    icon: Zap,
    title: "Молниеносная скорость",
    description: "Оптимизированная архитектура обеспечивает мгновенную доставку сообщений в любую точку мира.",
    color: "green"
  },
  {
    icon: Users,
    title: "Групповые чаты",
    description: "Создавайте группы до 100,000 участников с расширенными возможностями модерации.",
    color: "blue"
  },
  {
    icon: FileText,
    title: "Обмен файлами",
    description: "Отправляйте файлы любого формата размером до 2 ГБ с возможностью предпросмотра.",
    color: "purple"
  },
  {
    icon: Video,
    title: "Видеозвонки",
    description: "Качественные видеозвонки и конференции с поддержкой до 1000 участников.",
    color: "red"
  },
  {
    icon: Bot,
    title: "Умные боты",
    description: "Интегрируйте полезных ботов для автоматизации задач и повышения продуктивности.",
    color: "yellow"
  }
];

const colorClasses = {
  indigo: "bg-indigo-100 text-indigo-600",
  green: "bg-green-100 text-green-600",
  blue: "bg-blue-100 text-blue-600",
  purple: "bg-purple-100 text-purple-600",
  red: "bg-red-100 text-red-600",
  yellow: "bg-yellow-100 text-yellow-600"
};

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Почему выбирают Actogeam?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Передовые технологии для комфортного общения и продуктивной работы
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${colorClasses[feature.color]}`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
