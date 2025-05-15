'use client';

import { motion } from 'framer-motion';
import { useState, FormEvent, ChangeEvent } from 'react';
import Image from 'next/image';
import { HomeIcon, VideoCameraIcon, WifiIcon, BoltIcon, ShieldCheckIcon, SpeakerWaveIcon, BuildingOfficeIcon, BuildingStorefrontIcon, HomeModernIcon } from '@heroicons/react/24/outline';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Квартиры',
    description: 'Электромонтаж и умный дом',
    icon: '🏠',
    features: [
      'Прокладка электрики',
      'Установка розеток и выключателей',
      'Интеграция умного дома',
      'Настройка голосового управления',
      'Управление освещением'
    ],
    price: 'от 2000 ₽/м²'
  },
  {
    id: 2,
    title: 'Частные дома',
    description: 'Полный комплекс работ',
    icon: '🏡',
    features: [
      'Электромонтаж',
      'Умный дом Wirenboard',
      'Управление климатом',
      'Системы безопасности',
      'Интеграция с HomeKit'
    ],
    price: 'от 2500 ₽/м²'
  },
  {
    id: 3,
    title: 'Офисы и бизнес-центры',
    description: 'Коммерческие решения',
    icon: '🏢',
    features: [
      'Электромонтаж',
      'Умный офис',
      'Управление освещением',
      'Системы контроля доступа',
      'Мониторинг энергопотребления'
    ],
    price: 'от 2800 ₽/м²'
  },
  {
    id: 4,
    title: 'Жилые комплексы',
    description: 'Комплексная электрификация',
    icon: '🏘️',
    features: [
      'Полная электрификация ЖК',
      'Умный дом Wirenboard',
      'Системы безопасности',
      'Управление климатом',
      'Интеграция с Алисой'
    ],
    price: 'от 3500 ₽/м²'
  }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleOrder = (service: Service) => {
    setSelectedService(service);
    setShowOrderForm(true);
  };

  const handleCloseOrderForm = () => {
    setShowOrderForm(false);
    setSelectedService(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedService) {
      console.log('Отправка формы:', { ...formData, service: selectedService.title });
      handleCloseOrderForm();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
              Услуги
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
            Комплексные решения для вашего дома и бизнеса
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white dark:bg-[#0a0a0a] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <motion.div 
                  className="flex items-center mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-4xl mr-3">{service.icon}</span>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    {service.title}
                  </h2>
                </motion.div>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {service.description}
                </motion.p>
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {service.features.map((feature, idx) => (
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 flex justify-between items-center"
                >
                  <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    {service.price}
                  </span>
                  {/*
                  <motion.button
                    onClick={() => handleOrder(service)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    
                  </motion.button>
                  */}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/*
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
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
            >
               услугу
            </motion.h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              ...
            </form>
          </motion.div>
        </motion.div>
      )}
      */}
    </div>
  );
} 