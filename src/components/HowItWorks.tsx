import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Eye, MessageCircle, Gift } from 'lucide-react';

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '01',
      icon: Eye,
      title: 'Escolha o seu bolo',
      description: 'Navegue pelo nosso portfólio e encontre inspiração para o bolo perfeito para sua ocasião especial.',
    },
    {
      number: '02',
      icon: MessageCircle,
      title: 'Personalize os detalhes',
      description: 'Entre em contato para discutir o tema, cores, sabores e todos os detalhes que farão seu bolo único.',
    },
    {
      number: '03',
      icon: Gift,
      title: 'Receba com amor',
      description: 'Seu bolo será preparado com todo carinho e entregue ou estará pronto para retirada no dia combinado.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      id="como-funciona"
      className="py-20 md:py-28 relative"
      style={{
        background: 'linear-gradient(180deg, #FFF3E8 0%, #FCD0D7 50%, #FFF3E8 100%)',
      }}
    >
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-4">
            Como Funciona
          </h2>
          <p className="font-lato text-gray-600 text-lg max-w-2xl mx-auto mb-6">
            Três passos simples para ter o bolo dos seus sonhos
          </p>
          <div className="w-24 h-1 bg-soft-gold mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12 relative"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-soft-gold to-peach-rose opacity-30"></div>
              )}

              <div className="relative z-10 text-center">
                <div className="relative inline-block mb-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-soft-gold flex items-center justify-center shadow-clay mx-auto">
                    <span className="font-playfair text-xl md:text-2xl font-semibold text-white">
                      {step.number}
                    </span>
                  </div>

                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-light-blush flex items-center justify-center shadow-clay-sm">
                    <step.icon className="w-6 h-6 md:w-7 md:h-7 text-peach-rose" />
                  </div>
                </div>

                <div className="bg-warm-white rounded-3xl p-6 md:p-8 shadow-clay mt-8 hover:shadow-clay-lg transition-all duration-300">
                  <h3 className="font-playfair text-xl md:text-2xl font-semibold text-gray-800 mb-3 mt-2">
                    {step.title}
                  </h3>
                  <p className="font-lato text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
