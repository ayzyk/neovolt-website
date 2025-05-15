'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: 'Системная интеграция',
    description: 'Комплексные решения для объединения разрозненных систем в единую экосистему',
    icon: '🔄',
    features: [
      'Анализ существующей инфраструктуры',
      'Разработка архитектуры решения',
      'Внедрение и настройка систем',
      'Техническая поддержка',
    ],
  },
  {
    id: 2,
    title: 'Разработка ПО',
    description: 'Создание современного программного обеспечения для вашего бизнеса',
    icon: '💻',
    features: [
      'Веб-приложения',
      'Мобильные приложения',
      'Корпоративные системы',
      'API и интеграции',
    ],
  },
  {
    id: 3,
    title: 'Облачные решения',
    description: 'Миграция и развертывание сервисов в облачной инфраструктуре',
    icon: '☁️',
    features: [
      'Облачная миграция',
      'Оптимизация инфраструктуры',
      'Масштабирование систем',
      'Мониторинг и безопасность',
    ],
  },
  {
    id: 4,
    title: 'Консалтинг',
    description: 'Профессиональные консультации по цифровой трансформации бизнеса',
    icon: '📊',
    features: [
      'Аудит IT-инфраструктуры',
      'Разработка IT-стратегии',
      'Оптимизация процессов',
      'Обучение персонала',
    ],
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
          onMouseEnter={() => setActiveService(service.id)}
          onMouseLeave={() => setActiveService(null)}
        >
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-bold mb-3">{service.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {service.description}
          </p>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: activeService === service.id ? 'auto' : 0,
              opacity: activeService === service.id ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                >
                  <span className="mr-2">•</span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Services; 