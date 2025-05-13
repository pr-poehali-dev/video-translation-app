import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const VideoTranslator = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Верхний баннер */}
      <div className="bg-[#7c4dff] text-white py-2 px-4 flex justify-center items-center gap-2 relative">
        <p className="text-sm sm:text-base">
          2025 Keynote: Новая эра видео с переводом ИИ
        </p>
        <Button
          variant="link"
          className="text-white p-0 flex items-center gap-1 hover:underline"
        >
          Зарегистрироваться
          <Icon name="ArrowRight" size={16} />
        </Button>
        <Button
          variant="ghost"
          className="p-1 absolute right-2 top-1/2 -translate-y-1/2 h-auto"
        >
          <Icon name="X" size={16} className="text-white" />
        </Button>
      </div>

      {/* Навигационное меню */}
      <header className="border-b py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">ВидеоПолиглот</span>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-[#7c4dff]"
            >
              Платформа
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-[#7c4dff]"
            >
              Решения
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-[#7c4dff]"
            >
              Ресурсы
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-[#7c4dff]"
            >
              Цены
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-[#7c4dff]"
            >
              Компания
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden md:inline-flex">
              Войти
            </Button>
            <Button className="bg-[#7c4dff] hover:bg-[#6c3ce9]">
              Регистрация
            </Button>
            <Button variant="ghost" className="md:hidden p-1">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Основная секция */}
      <main className="flex-grow">
        {/* Герой-секция с анимированным фоном */}
        <section className="py-16 md:py-20 px-4 relative overflow-hidden">
          {/* Анимированный фон */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9ff] to-white"></div>
            {/* Анимированные круги */}
            <div className="circle-animation absolute -top-20 -left-20 w-60 h-60 rounded-full bg-[#7c4dff]/5 animate-float-slow"></div>
            <div className="circle-animation absolute top-40 -right-40 w-80 h-80 rounded-full bg-[#7c4dff]/10 animate-float-medium"></div>
            <div className="circle-animation absolute bottom-20 -left-40 w-96 h-96 rounded-full bg-[#6c3ce9]/5 animate-float"></div>
            {/* Анимированные волны */}
            <svg
              className="absolute bottom-0 left-0 w-full opacity-30"
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#7c4dff"
                fillOpacity="0.2"
                d="M0,192L48,170.7C96,149,192,107,288,112C384,117,480,171,576,197.3C672,224,768,224,864,192C960,160,1056,96,1152,74.7C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                className="animate-wave-slow"
              ></path>
              <path
                fill="#7c4dff"
                fillOpacity="0.1"
                d="M0,256L48,261.3C96,267,192,277,288,245.3C384,213,480,139,576,128C672,117,768,171,864,208C960,245,1056,267,1152,240C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                className="animate-wave-medium"
              ></path>
            </svg>
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-flex items-center gap-1.5 bg-[#7c4dff]/10 text-[#7c4dff] px-3 py-1.5 rounded-full text-sm font-medium mb-6">
              <Icon name="Video" size={18} />
              ИИ Переводчик Видео
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat">
              Ваш Голос, Понятный Везде
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-opensans">
              Загрузите видео и получите профессиональный перевод на любой язык
              с идеальной синхронизацией губ за считанные минуты.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Попробуйте примеры перевода
            </p>
            {/* Кнопки языков */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Button className="bg-[#7c4dff] hover:bg-[#6c3ce9] rounded-full px-6">
                <span className="mr-2">🇷🇺</span> Русский
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 hover:bg-[#7c4dff]/10"
              >
                <span className="mr-2">🇬🇧</span> English
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 hover:bg-[#7c4dff]/10"
              >
                <span className="mr-2">🇨🇳</span> 中文
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 hover:bg-[#7c4dff]/10"
              >
                <span className="mr-2">🇪🇸</span> Español
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 hover:bg-[#7c4dff]/10"
              >
                <span className="mr-2">🇩🇪</span> Deutsch
              </Button>
            </div>
            {/* Информационный блок */}
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
              <div className="text-left max-w-md">
                <p className="text-gray-700 mb-3">
                  Превратите одно видео в контент на{" "}
                  <span className="text-[#7c4dff] font-bold">
                    более 70+ языков и 175+ диалектов
                  </span>{" "}
                  с помощью ИИ - настолько естественно, что кажется, будто вы
                  всегда говорили на них. Без актеров озвучивания, без дубляжа.
                  Ваш голос, идеально синхронизированный с губами для любой
                  аудитории.
                </p>
              </div>
              <div className="flex items-center justify-center gap-6">
                <div className="text-center">
                  <p className="text-5xl font-bold text-[#7c4dff]">70+</p>
                  <p className="text-sm text-gray-600">языков</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-[#7c4dff]">175+</p>
                  <p className="text-sm text-gray-600">диалектов</p>
                </div>
              </div>
            </div>
            {/* Кнопка действия */}
            <Button className="bg-[#7c4dff] hover:bg-[#6c3ce9] rounded-full px-8 py-6 text-lg font-medium animate-pulse">
              <Icon name="Play" size={20} className="mr-2" />
              Начать Бесплатно
            </Button>
          </div>
        </section>

        {/* Функциональные карточки */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 font-montserrat">
              Как это работает
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 text-[#7c4dff]">
                    <Icon name="Upload" size={36} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Загрузите видео</h3>
                  <p className="text-gray-600">
                    Просто загрузите ваше видео в любом популярном формате
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 text-[#7c4dff]">
                    <Icon name="Languages" size={36} fallback="Globe" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Выберите язык</h3>
                  <p className="text-gray-600">
                    Выберите один из 70+ языков для перевода вашего контента
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 text-[#7c4dff]">
                    <Icon name="Download" size={36} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Скачайте результат</h3>
                  <p className="text-gray-600">
                    Получите видео с идеальной синхронизацией губ на выбранном
                    языке
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Подвал */}
      <footer className="bg-gray-50 py-8 px-4 border-t">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>© 2025 ВидеоПолиглот. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default VideoTranslator;
