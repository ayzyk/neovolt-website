'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Шаймярдянов Эмиль Рамилевич',
      position: 'Генеральный директор',
      description: 'Более 10 лет опыта в сфере системной интеграции',
      image: '/team/ceo.jpg'
    },
    {
      name: 'Мария Иванова',
      position: 'Технический директор',
      description: 'Эксперт в области разработки программного обеспечения',
      image: '/team/cto.jpg'
    },
    {
      name: 'Дмитрий Сидоров',
      position: 'Руководитель отдела разработки',
      description: 'Специалист по современным технологиям и инновациям',
      image: '/team/lead-dev.jpg'
    }
  ];

  return (
    <div className="pt-20">
      {/* История компании */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              О компании NeoVolt
            </h1>
            <p className="text-lg text-gray-300 mb-12">
              NEOVOLT - ведущая компания в области системной интеграции и разработки программного обеспечения. 
              Основанная в 2019 году, мы стремимся помогать бизнесу развиваться, внедряя современные технологические решения.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Миссия и ценности */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white">Наша миссия</h2>
              <p className="text-gray-300">
                Помогать компаниям достигать максимальной эффективности через внедрение 
                инновационных технологических решений и оптимизацию бизнес-процессов.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white">Наши ценности</h2>
              <ul className="space-y-4 text-gray-300">
                <li>• Инновации и постоянное развитие</li>
                <li>• Качество и надежность решений</li>
                <li>• Прозрачность в работе с клиентами</li>
                <li>• Профессионализм команды</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Достижения */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Наши достижения
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '100+', text: 'Реализованных проектов' },
              { number: '50+', text: 'Постоянных клиентов' },
              { number: '30+', text: 'Экспертов в команде' },
              { number: '5+', text: 'Лет на рынке' }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-800 rounded-lg"
              >
                <h3 className="text-4xl font-bold text-blue-500 mb-2">{achievement.number}</h3>
                <p className="text-gray-300">{achievement.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Сертификаты */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Сертификаты и партнерства
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'Microsoft Gold Partner',
              'ISO 9001:2015',
              'AWS Advanced Partner',
              'Google Cloud Partner'
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="p-6 bg-gray-900 rounded-lg text-center shadow-lg"
              >
                <p className="font-semibold text-white">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 