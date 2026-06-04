import { motion } from 'framer-motion';
import { Heart, Gem, Gift, Star } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Categories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const categories = [
    {
      icon: Heart,
      title: 'Festa Infantil',
      description: 'Bolos mágicos e coloridos que encantam os pequenos. Personagens, temas divertidos e sabores irresistíveis para celebrar cada ano de vida.',
    },
    {
      icon: Gem,
      title: 'Casamento',
      description: 'Criações elegantes e sofisticadas para o dia mais especial. Design exclusivo, flores delicadas e sabores que marcam o início de uma história de amor.',
    },
    {
      icon: Gift,
      title: 'Datas Especiais',
      description: 'Aniversários, formaturas, batizados e celebrações únicas. Cada ocasião merece um bolo feito especialmente para ela.',
    },
    {
      icon: Star,
      title: 'Tradicionais',
      description: 'Bolo de cenoura, ChocolaTudo, laranja com calda... As gostosuras de todo dia, feitas com o mesmo carinho dos nossos bolos de festa.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section className="py-20 md:py-28" style={{ background: 'linear-gradient(160deg, #FFF3E8 0%, #FCD0D7 50%, #FFF3E8 100%)' }}>
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-4">
            Criado para cada momento
          </h2>
          <div className="w-24 h-1 bg-soft-gold mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-warm-white rounded-3xl p-8 shadow-clay hover:shadow-clay-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-light-blush rounded-2xl flex items-center justify-center mb-6 shadow-clay-sm group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-8 h-8 text-peach-rose" />
                </div>

                <h3 className="font-playfair text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                  {category.title}
                </h3>

                <p className="font-lato text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
