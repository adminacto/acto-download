import { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <MessageCircle className="text-white" size={16} />
            </div>
            <span className="text-xl font-bold text-gray-900">Actogeam</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Возможности
            </button>
            <button 
              onClick={() => scrollToSection('download')}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Скачать
            </button>
            <button 
              onClick={() => scrollToSection('support')}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Поддержка
            </button>
            <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
              Войти
            </Button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="text-gray-600" size={24} /> : <Menu className="text-gray-600" size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-600 hover:text-indigo-600 transition-colors text-left"
              >
                Возможности
              </button>
              <button 
                onClick={() => scrollToSection('download')}
                className="text-gray-600 hover:text-indigo-600 transition-colors text-left"
              >
                Скачать
              </button>
              <button 
                onClick={() => scrollToSection('support')}
                className="text-gray-600 hover:text-indigo-600 transition-colors text-left"
              >
                Поддержка
              </button>
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700 w-full">
                Войти
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
