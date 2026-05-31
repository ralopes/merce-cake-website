import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  occasion: string;
  rating: number;
}

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Maria Clara',
      quote:
        'O bolo da festa de aniversário da minha filha ficou simplesmente perfeito! Além de lindo, estava delicioso. Todos os convidados elogiaram. A Mercê Cake superou todas as expectativas.',
      occasion: 'Festa Infantil',
      rating: 5,
    },
    {
      id: 2,
      name: 'Ana Paula',
      quote:
        'Escolhi a Mercê Cake para meu casamento e foi a melhor decisão. O bolo era uma verdadeira obra de arte, exatamente como eu sonhei. Sabor impecável e apresentação impecável.',
      occasion: 'Casamento',
      rating: 5,
    },
    {
      id: 3,
      name: 'Juliana Santos',
      quote:
        'Comuniquei minha formatura com um bolo incrível da Mercê Cake. A atenção aos detalhes e a qualidade foram excepcionais. Recomendo de olhos fechados para qualquer ocasião especial.',
      occasion: 'Formatura',
      rating: 5,
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
    <section id="depoimentos" className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FCD0D7 0%, #FFF3E8 45%, #FFE4C0 100%)' }}
    >
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-4">
            O que nossas clientes dizem
          </h2>
          <div className="w-24 h-1 bg-soft-gold mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="glass-card border border-white/40 p-8 hover:shadow-glass transition-all duration-300 relative transform hover:-translate-y-1"
            >
              <Quote className="absolute top-4 left-4 w-10 h-10 text-soft-gold/20" />

              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-soft-gold fill-current"
                    />
                  ))}
                </div>

                <p className="font-lato text-gray-600 leading-relaxed italic pt-2">
                  "{testimonial.quote}"
                </p>

                <div className="pt-4 border-t border-white/50">
                  <h4 className="font-playfair text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="font-lato text-sm text-peach-rose">
                    {testimonial.occasion}
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

export default Testimonials;
