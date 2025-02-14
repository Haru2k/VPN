import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gray-800">
        <h1 className="text-2xl font-bold">Ryuko VPN</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#pricing" className="hover:text-gray-400">Тарифы</a></li>
            <li><a href="#how-it-works" className="hover:text-gray-400">Как работает</a></li>
            <li><a href="#faq" className="hover:text-gray-400">FAQ</a></li>
            <li><a href="#support" className="hover:text-gray-400">Поддержка</a></li>
          </ul>
        </nav>
        <div>
          <button className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600">Вход</button>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold">Быстро, Безопасно, Без Ограничений</h2>
        <p className="mt-4 text-lg">Максимальная скорость, полный контроль, обход блокировок</p>
        <button className="mt-6 px-6 py-3 bg-green-500 rounded-md hover:bg-green-600 text-xl font-semibold">
          Подключиться
        </button>
      </section>
      
      {/* Placeholder for more sections */}
      <section id="pricing" className="py-20 text-center">
        <h3 className="text-3xl font-semibold">Тарифы</h3>
        <p className="mt-4">Выберите подходящий тарифный план</p>
        {/* TODO: Добавить таблицу тарифов */}
      </section>
      
      {/* Footer */}
      <footer className="text-center p-6 bg-gray-800">
        <p>&copy; 2025 Ryuko VPN. Все права защищены.</p>
      </footer>
    </div>
  );
}
