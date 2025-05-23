import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Функция для плавной прокрутки к секции
  const scrollToSection = (id: string) => {
    // Если мы не на главной странице, сначала переходим на неё
    if (location.pathname !== "/") {
      navigate("/");
      // Задержка, чтобы дать время для загрузки главной страницы
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Если мы уже на главной, просто прокручиваем к нужной секции
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Функция для перехода на страницу генерации
  const goToOrderPage = () => {
    navigate("/order");
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 mx-auto w-full flex justify-center">
      <div className="w-full max-w-[66rem] px-4 md:px-0">
        <div className="rounded-full bg-[#1a1a1d] glass-dark shadow-md">
          <div className="flex items-center justify-between px-4 py-2">
            {/* Логотип */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <Icon name="Mic2" size={24} className="text-[#0070F3]" />
              <span className="text-lg font-semibold text-white">ГолосОК</span>
            </div>

            {/* Навигация по центру */}
            <nav className="hidden md:flex gap-8 items-center">
              <button
                onClick={() => scrollToSection("home")}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Цена
              </button>
            </nav>

            {/* Кнопка CTA */}
            <Button
              onClick={goToOrderPage}
              className="bg-[#0070F3] hover:bg-[#0060d3] text-white rounded-full px-5 h-8 text-sm"
            >
              Попробовать
            </Button>

            {/* Меню мобильное */}
            <Button
              variant="ghost"
              className="md:hidden p-1 text-white rounded-full"
            >
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
