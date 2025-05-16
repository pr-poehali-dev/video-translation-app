import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

// Типы данных
interface SelectLanguageStepProps {
  videoFile: File | null;
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
}

interface Language {
  code: string;
  name: string;
  flag: string;
  popular: boolean;
}

// Хук для работы с превью видео
const useVideoPreview = (videoFile: File | null) => {
  const [videoPreviewUrl, setVideoPreviewUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Создаем превью видео при монтировании компонента
  useEffect(() => {
    if (videoFile) {
      const url = URL.createObjectURL(videoFile);
      setVideoPreviewUrl(url);

      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [videoFile]);

  // Остановить видео после 5 секунд
  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        const videoElement = document.getElementById(
          "preview-video",
        ) as HTMLVideoElement;
        if (videoElement) {
          videoElement.pause();
          setIsPlaying(false);
        }
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  const togglePlayback = () => {
    const videoElement = document.getElementById(
      "preview-video",
    ) as HTMLVideoElement;
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.currentTime = 0; // Начинаем с начала
        videoElement
          .play()
          .catch((e) => console.error("Ошибка воспроизведения:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return { videoPreviewUrl, isPlaying, togglePlayback };
};

// Хук для работы с языками
const useLanguages = (searchTerm: string) => {
  // Список всех языков
  const allLanguages: Language[] = [
    { code: "en", name: "Английский", flag: "🇬🇧", popular: true },
    { code: "es", name: "Испанский", flag: "🇪🇸", popular: true },
    { code: "fr", name: "Французский", flag: "🇫🇷", popular: true },
    { code: "de", name: "Немецкий", flag: "🇩🇪", popular: true },
    { code: "it", name: "Итальянский", flag: "🇮🇹", popular: true },
    { code: "pt", name: "Португальский", flag: "🇵🇹", popular: true },
    { code: "ru", name: "Русский", flag: "🇷🇺", popular: true },
    { code: "zh", name: "Китайский", flag: "🇨🇳", popular: true },
    { code: "ja", name: "Японский", flag: "🇯🇵", popular: true },
    { code: "ko", name: "Корейский", flag: "🇰🇷", popular: true },
    { code: "ar", name: "Арабский", flag: "🇸🇦", popular: false },
    { code: "hi", name: "Хинди", flag: "🇮🇳", popular: false },
    { code: "bn", name: "Бенгальский", flag: "🇧🇩", popular: false },
    { code: "id", name: "Индонезийский", flag: "🇮🇩", popular: false },
    { code: "tr", name: "Турецкий", flag: "🇹🇷", popular: false },
    { code: "nl", name: "Голландский", flag: "🇳🇱", popular: false },
    { code: "pl", name: "Польский", flag: "🇵🇱", popular: false },
    { code: "sv", name: "Шведский", flag: "🇸🇪", popular: false },
    { code: "da", name: "Датский", flag: "🇩🇰", popular: false },
  ];

  // Фильтруем языки по поисковому запросу
  const filteredLanguages = allLanguages.filter((lang) =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Разделяем на популярные и остальные
  const popularLanguages = filteredLanguages.filter((lang) => lang.popular);
  const otherLanguages = filteredLanguages.filter((lang) => !lang.popular);

  return {
    allLanguages,
    filteredLanguages,
    popularLanguages,
    otherLanguages,
  };
};

// Вспомогательные компоненты
const LanguageSearchInput: React.FC<{
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}> = ({ searchTerm, setSearchTerm }) => (
  <div className="relative mb-4">
    <Icon
      name="Search"
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
      size={16}
    />
    <Input
      placeholder="Поиск языка..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="pl-9"
    />
  </div>
);

const LanguageOption: React.FC<{
  language: Language;
  isSelected: boolean;
  onSelect: () => void;
}> = ({ language, isSelected, onSelect }) => (
  <button
    className={`
      flex items-center p-2 rounded-md hover:bg-muted text-left transition-colors
      ${isSelected ? "bg-primary/10 text-primary" : ""}
    `}
    onClick={onSelect}
  >
    <span className="mr-2 text-lg">{language.flag}</span>
    <span>{language.name}</span>
    {isSelected && (
      <Icon name="Check" className="ml-auto text-primary" size={16} />
    )}
  </button>
);

const LanguageList: React.FC<{
  popularLanguages: Language[];
  otherLanguages: Language[];
  filteredLanguages: Language[];
  searchTerm: string;
  selectedLanguage: string;
  setSelectedLanguage: (code: string) => void;
}> = ({
  popularLanguages,
  otherLanguages,
  filteredLanguages,
  searchTerm,
  selectedLanguage,
  setSelectedLanguage,
}) => (
  <ScrollArea className="h-[300px] border rounded-md">
    {popularLanguages.length > 0 && !searchTerm && (
      <div className="p-4 border-b">
        <h4 className="text-sm font-medium mb-3">Популярные языки</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {popularLanguages.map((lang) => (
            <LanguageOption
              key={lang.code}
              language={lang}
              isSelected={selectedLanguage === lang.code}
              onSelect={() => setSelectedLanguage(lang.code)}
            />
          ))}
        </div>
      </div>
    )}

    <div className="p-4">
      {searchTerm ? (
        <h4 className="text-sm font-medium mb-3">Результаты поиска</h4>
      ) : (
        <h4 className="text-sm font-medium mb-3">Все языки</h4>
      )}

      {filteredLanguages.length === 0 ? (
        <div className="text-center py-4 text-muted-foreground">
          Языки не найдены
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {(searchTerm ? filteredLanguages : otherLanguages).map((lang) => (
            <LanguageOption
              key={lang.code}
              language={lang}
              isSelected={selectedLanguage === lang.code}
              onSelect={() => setSelectedLanguage(lang.code)}
            />
          ))}
        </div>
      )}
    </div>
  </ScrollArea>
);

const VideoPreview: React.FC<{
  videoPreviewUrl: string | null;
  isPlaying: boolean;
  togglePlayback: () => void;
  selectedLanguage: string;
  allLanguages: Language[];
}> = ({
  videoPreviewUrl,
  isPlaying,
  togglePlayback,
  selectedLanguage,
  allLanguages,
}) => (
  <div className="relative w-full aspect-video rounded-lg overflow-hidden border bg-gray-100">
    {videoPreviewUrl ? (
      <>
        <video
          id="preview-video"
          src={videoPreviewUrl}
          className="w-full h-full object-contain"
        />
        <button
          className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/30 transition-opacity hover:bg-black/40"
          onClick={togglePlayback}
        >
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Icon
              name={isPlaying ? "Pause" : "Play"}
              size={30}
              className="text-white ml-1"
            />
          </div>
        </button>
      </>
    ) : (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        <span>Видео не загружено</span>
      </div>
    )}

    {/* Бейдж с демкой */}
    <Badge
      variant="secondary"
      className="absolute top-2 right-2 bg-black/70 text-white"
    >
      5-сек. демо
    </Badge>

    {selectedLanguage && (
      <div className="absolute bottom-2 left-2 flex items-center bg-black/70 text-white px-2 py-1 rounded-md text-sm">
        <span className="mr-1">Язык перевода:</span>
        {allLanguages.find((l) => l.code === selectedLanguage)?.flag}{" "}
        {allLanguages.find((l) => l.code === selectedLanguage)?.name}
      </div>
    )}
  </div>
);

const InfoMessage: React.FC = () => (
  <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-800">
    <div className="flex items-start">
      <Icon name="Info" size={20} className="mr-2 mt-0.5 text-blue-600" />
      <div>
        <p className="font-medium">Доступна 5-секундная демонстрация</p>
        <p className="text-sm mt-1">
          После выбора языка вы можете просмотреть 5-секундную демонстрацию
          перевода. После оплаты вы получите полное видео.
        </p>
      </div>
    </div>
  </div>
);

// Основной компонент
const SelectLanguageStep: React.FC<SelectLanguageStepProps> = ({
  videoFile,
  selectedLanguage,
  setSelectedLanguage,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Используем хуки
  const { videoPreviewUrl, isPlaying, togglePlayback } =
    useVideoPreview(videoFile);
  const { allLanguages, filteredLanguages, popularLanguages, otherLanguages } =
    useLanguages(searchTerm);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Левая колонка - выбор языка */}
      <div>
        <h3 className="text-xl font-medium mb-2">Выберите язык перевода</h3>
        <p className="text-muted-foreground mb-4">
          Выберите язык, на который хотите перевести ваше видео. Доступно 175
          языков.
        </p>

        <LanguageSearchInput
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <LanguageList
          popularLanguages={popularLanguages}
          otherLanguages={otherLanguages}
          filteredLanguages={filteredLanguages}
          searchTerm={searchTerm}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />
      </div>

      {/* Правая колонка - превью видео */}
      <div>
        <h3 className="text-xl font-medium mb-2">Превью</h3>
        <p className="text-muted-foreground mb-4">
          Нажмите на видео, чтобы посмотреть 5-секундное превью перевода.
        </p>

        <VideoPreview
          videoPreviewUrl={videoPreviewUrl}
          isPlaying={isPlaying}
          togglePlayback={togglePlayback}
          selectedLanguage={selectedLanguage}
          allLanguages={allLanguages}
        />

        <InfoMessage />
      </div>
    </div>
  );
};

export default SelectLanguageStep;
