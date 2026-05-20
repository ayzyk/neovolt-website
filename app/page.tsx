'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { withAssetPrefix } from '@/lib/assetPrefix';

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src={withAssetPrefix('/images/hero-bg.jpg')}
            alt="Профессиональный электромонтаж"
            fill
            className="object-cover"
            priority
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </motion.div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative z-10 mt-8"
            >
              <span className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-lg">
                NEOVOLT
              </span>
              <motion.span 
                className="block text-2xl font-light text-white mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Интеллектуальные системы для вашего дома и бизнеса
              </motion.span>
            </motion.h1>
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Заказать консультацию
              </Link>
              {/* <Link
                href="/portfolio"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Наши работы
              </Link> */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="relative py-20">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={withAssetPrefix('/images/NeoVolt.png')}
            alt="NEOVOLT Background"
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              О компании
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Наша история и достижения
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 text-gray-600 dark:text-gray-300"
            >
              <motion.p 
                className="text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Компания NEOVOLT была основана в 2020 году Шаймярдяновым Эмилем Рамилевичем. 
                С самого начала мы поставили перед собой цель - предоставлять качественные 
                и надежные решения в области электромонтажа и автоматизации.
              </motion.p>
              
              <motion.p 
                className="text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                За годы работы мы зарекомендовали себя как надежный партнер, способный 
                решать самые сложные задачи. Наша команда состоит из высококвалифицированных 
                специалистов, которые постоянно совершенствуют свои навыки и следят за 
                новейшими технологиями в отрасли.
              </motion.p>

              <motion.p 
                className="text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Мы специализируемся на комплексных решениях для жилых и коммерческих объектов, 
                включая электромонтаж, системы автоматизации, безопасность и энергоэффективность. 
                Каждый наш проект - это индивидуальный подход и внимание к деталям.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {[
                  {
                    title: 'Опыт',
                    description: 'Более 3 лет успешной работы на рынке'
                  },
                  {
                    title: 'Профессионализм',
                    description: 'Квалифицированные специалисты с большим опытом'
                  },
                  {
                    title: 'Качество',
                    description: 'Гарантия на все выполненные работы'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
                  >
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 