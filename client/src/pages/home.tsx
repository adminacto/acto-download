import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import DownloadSection from "@/components/download-section";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      {/* Download Statistics */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">2.4М+</div>
              <div className="text-gray-600">Активных пользователей</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">15М+</div>
              <div className="text-gray-600">Скачиваний</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">99.9%</div>
              <div className="text-gray-600">Время работы</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">4.8★</div>
              <div className="text-gray-600">Рейтинг</div>
            </div>
          </div>
        </div>
      </section>

      <Features />
      
      {/* Screenshots Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Посмотрите на интерфейс</h2>
            <p className="text-xl text-gray-600">Современный и интуитивно понятный дизайн</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-2xl p-4 aspect-square flex items-center justify-center">
              <div className="text-gray-500 text-center">
                <div className="text-4xl mb-2">💬</div>
                <div className="text-sm">Интерфейс чата</div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-4 aspect-square flex items-center justify-center">
              <div className="text-gray-500 text-center">
                <div className="text-4xl mb-2">📹</div>
                <div className="text-sm">Видеозвонки</div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-4 aspect-square flex items-center justify-center">
              <div className="text-gray-500 text-center">
                <div className="text-4xl mb-2">⚙️</div>
                <div className="text-sm">Настройки</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DownloadSection />
      
      {/* System Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Системные требования</h2>
            <p className="text-xl text-gray-600">Убедитесь, что ваше устройство соответствует минимальным требованиям</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-blue-600 text-sm">🪟</span>
                </div>
                <h3 className="text-xl font-semibold">Windows</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Windows 10 64-bit или новее</li>
                <li>• 4 ГБ RAM (рекомендуется 8 ГБ)</li>
                <li>• 200 МБ свободного места</li>
                <li>• Интернет-соединение</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-gray-600 text-sm">🍎</span>
                </div>
                <h3 className="text-xl font-semibold">macOS</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• macOS 10.15 или новее</li>
                <li>• 4 ГБ RAM (рекомендуется 8 ГБ)</li>
                <li>• 250 МБ свободного места</li>
                <li>• Интернет-соединение</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-yellow-600 text-sm">🐧</span>
                </div>
                <h3 className="text-xl font-semibold">Linux</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Ubuntu 18.04+, Debian 10+</li>
                <li>• 4 ГБ RAM (рекомендуется 8 ГБ)</li>
                <li>• 180 МБ свободного места</li>
                <li>• Интернет-соединение</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      
      {/* Support Section */}
      <section id="support" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Поддержка и помощь</h2>
            <p className="text-xl text-gray-600">Мы всегда готовы помочь вам</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-lg font-semibold mb-2">База знаний</h3>
              <p className="text-gray-600 text-sm mb-4">Ответы на часто задаваемые вопросы</p>
              <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">Перейти →</a>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-lg font-semibold mb-2">Чат поддержки</h3>
              <p className="text-gray-600 text-sm mb-4">Онлайн-чат 24/7</p>
              <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">Написать →</a>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600 text-sm mb-4">support@actogeam.com</p>
              <a href="mailto:support@actogeam.com" className="text-indigo-600 hover:text-indigo-700 font-medium">Написать →</a>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-lg font-semibold mb-2">Телефон</h3>
              <p className="text-gray-600 text-sm mb-4">+7 (800) 555-0123</p>
              <a href="tel:+78005550123" className="text-indigo-600 hover:text-indigo-700 font-medium">Позвонить →</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
