'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function CalculatorPage() {
  const [area, setArea] = useState('');
  const [type, setType] = useState('apartment');
  const [smartHome, setSmartHome] = useState(false);
  const [result, setResult] = useState<number | null>(null);

  const prices = {
    apartment: 2000,
    house: 2500,
    office: 2800,
    complex: 3500
  };

  const calculate = () => {
    if (!area) return;
    const basePrice = prices[type as keyof typeof prices];
    const areaNum = parseFloat(area);
    let total = basePrice * areaNum;
    
    if (smartHome) {
      total *= 1.3; // 30% наценка за умный дом
    }

    setResult(Math.round(total));
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
              Калькулятор стоимости
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Рассчитайте примерную стоимость работ для вашего объекта
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Тип объекта
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="apartment">Квартира</option>
                  <option value="house">Частный дом</option>
                  <option value="office">Офис/Бизнес-центр</option>
                  <option value="complex">Жилой комплекс</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Площадь (м²)
                </label>
                <input
                  type="number"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Введите площадь"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="smartHome"
                  checked={smartHome}
                  onChange={(e) => setSmartHome(e.target.checked)}
                  className="h-5 w-5 text-accent rounded border-gray-300 dark:border-gray-600"
                />
                <label htmlFor="smartHome" className="ml-2 text-gray-700 dark:text-gray-300">
                  Умный дом
                </label>
              </div>

              <button
                onClick={calculate}
                className="w-full bg-accent text-white py-3 rounded-lg hover:bg-accent-dark transition-colors"
              >
                Рассчитать
              </button>

              {result !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <h3 className="text-xl font-bold mb-2 dark:text-white">
                    Примерная стоимость
                  </h3>
                  <p className="text-3xl font-bold text-accent">
                    {result.toLocaleString()} ₽
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    * Цена является ориентировочной. Для точного расчета свяжитесь с нами
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 