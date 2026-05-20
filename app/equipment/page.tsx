'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { withAssetPrefix } from '@/lib/assetPrefix';
import { useState } from 'react';
import OrderForm from '@/components/OrderForm';
import { ShieldCheckIcon, VideoCameraIcon, WifiIcon, BoltIcon, SpeakerWaveIcon, HomeIcon } from '@heroicons/react/24/outline';

interface Equipment {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  features: string[];
  icon: any;
}

const equipment: Equipment[] = [
  {
    id: 20,
    title: 'Яндекс Алиса',
    description: 'Голосовой ассистент для управления умным домом',
    image: '/images/Яндекс Алиса.png',
    category: 'Голосовое управление',
    features: [
      'Голосовое управление',
      'Удаленный доступ',
      'Интеграция с устройствами',
      'Умные сценарии',
      'Мультимедийные функции'
    ],
    icon: SpeakerWaveIcon
  },
  {
    id: 21,
    title: 'Сбер Салют',
    description: 'Голосовой ассистент для управления умным домом',
    image: '/images/Сбер Салют.png',
    category: 'Голосовое управление',
    features: [
      'Голосовое управление',
      'Удаленный доступ',
      'Интеграция с устройствами',
      'Умные сценарии',
      'Мультимедийные функции'
    ],
    icon: SpeakerWaveIcon
  },
  {
    id: 24,
    title: 'HomeKit',
    description: 'Экосистема умного дома от Apple',
    image: '/images/HomeKit.png',
    category: 'Контроллеры',
    features: [
      'Интеграция с устройствами Apple',
      'Безопасная передача данных',
      'Управление через Siri',
      'Автоматизация сценариев',
      'Удаленный доступ'
    ],
    icon: HomeIcon
  },
  {
    id: 7,
    title: 'Wirenboard',
    description: 'Профессиональная платформа для автоматизации зданий и умного дома',
    image: '/images/WirenBoard.png',
    category: 'Контроллеры',
    features: [
      'Модульная архитектура',
      'Поддержка различных протоколов',
      'Масштабируемость',
      'Удаленное управление',
      'Интеграция с другими системами'
    ],
    icon: HomeIcon
  },
  {
    id: 8,
    title: 'Home Assistant',
    description: 'Открытая платформа для умного дома с широкими возможностями кастомизации',
    image: '/images/Home Assistant.png',
    category: 'Контроллеры',
    features: [
      'Открытый исходный код',
      'Большое сообщество',
      'Поддержка множества устройств',
      'Гибкая настройка сценариев',
      'Локальное управление'
    ],
    icon: HomeIcon
  },
  {
    id: 9,
    title: 'Broadlink',
    description: 'Универсальные контроллеры для управления климатом и освещением',
    image: '/images/Broadlink.png',
    category: 'Контроллеры',
    features: [
      'Универсальные пульты',
      'Управление климатом',
      'Контроль освещения',
      'Интеграция с голосовыми ассистентами',
      'Мобильное управление'
    ],
    icon: HomeIcon
  },
  {
    id: 1,
    title: 'Системы безопасности',
    description: 'Комплексные решения для защиты вашего имущества',
    image: '/images/Система безопасности.png',
    category: 'Безопасность',
    features: [
      'Охранная сигнализация',
      'Контроль доступа',
      'Пожарная безопасность',
      'Видеодомофоны'
    ],
    icon: ShieldCheckIcon
  },
  {
    id: 2,
    title: 'Видеонаблюдение',
    description: 'Профессиональные системы видеонаблюдения',
    image: '/images/Видеонаблюдение.png',
    category: 'Безопасность',
    features: [
      'HD и 4K камеры',
      'Облачное хранение',
      'Детекция движения',
      'Ночное видение'
    ],
    icon: VideoCameraIcon
  },
  {
    id: 4,
    title: 'Электрооборудование',
    description: 'Качественное электрооборудование',
    image: '/images/Электросчиток.png',
    category: 'Электрика',
    features: [
      'Щиты управления',
      'Реле и датчики',
      'Умные розетки',
      'Системы защиты'
    ],
    icon: BoltIcon
  },
  {
    id: 10,
    title: 'Умные розетки',
    description: 'Интеллектуальные розетки с дистанционным управлением и мониторингом',
    image: '/images/Умные розетки.png',
    category: 'Управление',
    features: [
      'Удаленное управление',
      'Мониторинг энергопотребления',
      'Расписание работы',
      'Защита от перегрузок',
      'Интеграция с голосовыми ассистентами'
    ],
    icon: BoltIcon
  },
  {
    id: 11,
    title: 'Умные выключатели',
    description: 'Современные выключатели с сенсорным управлением и автоматизацией',
    image: '/images/Умные переключатели.png',
    category: 'Управление',
    features: [
      'Сенсорное управление',
      'Диммирование',
      'Расписание работы',
      'Удаленное управление',
      'Интеграция с системами'
    ],
    icon: BoltIcon
  },
  {
    id: 12,
    title: 'Датчики движения',
    description: 'Интеллектуальные датчики для автоматизации и безопасности',
    image: '/images/Датчик движения.png',
    category: 'Датчики',
    features: [
      'Высокая точность',
      'Настройка чувствительности',
      'Работа в темноте',
      'Интеграция с системами',
      'Автоматизация процессов'
    ],
    icon: ShieldCheckIcon
  },
  {
    id: 13,
    title: 'Датчики температуры',
    description: 'Точные датчики для контроля климата и автоматизации',
    image: '/images/Датчик температуры.png',
    category: 'Датчики',
    features: [
      'Высокая точность',
      'Беспроводная связь',
      'Долгий срок службы',
      'Интеграция с системами',
      'Автоматизация процессов'
    ],
    icon: ShieldCheckIcon
  },
  {
    id: 15,
    title: 'Умные замки',
    description: 'Современные замки с дистанционным управлением и биометрией',
    image: '/images/Умные замки.png',
    category: 'Безопасность',
    features: [
      'Отпечаток пальца',
      'Бесключевой доступ',
      'Временные коды',
      'Удаленное управление',
      'История доступа'
    ],
    icon: ShieldCheckIcon
  },
  {
    id: 16,
    title: 'Умные шторы',
    description: 'Автоматизированные системы управления шторами и жалюзи',
    image: '/images/Умные шторы.png',
    category: 'Комфорт',
    features: [
      'Автоматическое открытие',
      'Расписание работы',
      'Управление голосом',
      'Интеграция с датчиками',
      'Энергосбережение'
    ],
    icon: HomeIcon
  },
  {
    id: 18,
    title: 'Zigbee',
    description: 'Беспроводной протокол для умного дома с низким энергопотреблением',
    image: '/images/Zigbee.png',
    category: 'Контроллеры',
    features: [
      'Низкое энергопотребление',
      'Высокая надежность',
      'Масштабируемая сеть',
      'Широкий выбор устройств',
      'Безопасная передача данных'
    ],
    icon: WifiIcon
  },
  {
    id: 19,
    title: 'Bas IP',
    description: 'Комплексные решения для управления умным домом и системами безопасности',
    image: '/images/Bas IP.png',
    category: 'Управление',
    features: [
      'Сенсорные панели управления',
      'Видеодомофоны',
      'Системы контроля доступа',
      'Интеграция с системами безопасности',
      'Удаленное управление',
      'Мобильные приложения',
      'Голосовое управление'
    ],
    icon: HomeIcon
  },
  {
    id: 22,
    title: 'SprutHub',
    description: 'Универсальный контроллер для управления умным домом',
    image: '/images/SprutHub.png',
    category: 'Контроллеры',
    features: [
      'Универсальное управление',
      'Поддержка различных протоколов',
      'Интеграция с голосовыми ассистентами',
      'Удаленное управление',
      'Автоматизация сценариев'
    ],
    icon: HomeIcon
  },
  {
    id: 23,
    title: 'Умные кондиционеры',
    description: 'Интеллектуальные системы климат-контроля',
    image: '/images/Кондиционер.png',
    category: 'Климат',
    features: [
      'Удаленное управление',
      'Автоматическое поддержание температуры',
      'Энергосберегающие режимы',
      'Интеграция с умным домом',
      'Голосовое управление'
    ],
    icon: HomeIcon
  }
];

export default function EquipmentPage() {
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(equipment.map(item => item.category)))];
  const filteredEquipment = selectedCategory === 'all' 
    ? equipment 
    : equipment.filter(item => item.category === selectedCategory);

  const handleOrder = () => {
    setShowOrderForm(true);
  };

  const handleCloseOrderForm = () => {
    setShowOrderForm(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 relative pt-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 rounded-full blur-3xl"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 mt-8"
          >
            <span className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 drop-shadow-lg">
              Оборудование
            </span>
          </motion.h1>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "200px", opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 mx-auto my-8 rounded-full shadow-lg"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto relative z-10 font-medium"
          >
            Качественное оборудование для реализации любых проектов
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEquipment.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white dark:bg-[#0a0a0a] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <motion.div 
                className="relative h-64 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={withAssetPrefix(item.image)}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300"
                />
              </motion.div>
              <div className="p-6">
                <motion.div 
                  className="flex items-center mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <item.icon className="h-8 w-8 text-blue-500 dark:text-blue-400 mr-3" />
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    {item.title}
                  </h2>
                </motion.div>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {item.description}
                </motion.p>
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {item.features.map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                    >
                      <svg className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedEquipment && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedEquipment(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-[#0a0a0a] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div 
              className="relative h-64 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Image
                src={withAssetPrefix(selectedEquipment.image)}
                alt={selectedEquipment.title}
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <motion.h2 
                  className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {selectedEquipment.title}
                </motion.h2>
              </div>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {selectedEquipment.description}
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                    Основные возможности
                  </h3>
                  <ul className="space-y-2">
                    {selectedEquipment.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-center text-gray-600 dark:text-gray-300"
                      >
                        <span className="text-blue-500 dark:text-blue-400 mr-2">✓</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="mt-8 flex justify-between items-center"
              >
               {/*
                <motion.button
                  onClick={handleOrder}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Заказать
                </motion.button>
                */}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {showOrderForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={handleCloseOrderForm}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-[#0a0a0a] rounded-xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <OrderForm
              equipmentTitle={selectedEquipment?.title || ''}
              onClose={handleCloseOrderForm}
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
} 