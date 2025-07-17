import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <MessageCircle className="text-white" size={16} />
              </div>
              <span className="text-xl font-bold">Actogeam</span>
            </div>
            <p className="text-gray-400 text-sm">
              Современное решение для безопасного общения и совместной работы.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Возможности</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Безопасность</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Цены</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Статус</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Пресса</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Actogeam. Все права защищены.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <div className="w-5 h-5 bg-current rounded"></div>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Facebook</span>
              <div className="w-5 h-5 bg-current rounded"></div>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <div className="w-5 h-5 bg-current rounded"></div>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <div className="w-5 h-5 bg-current rounded"></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
