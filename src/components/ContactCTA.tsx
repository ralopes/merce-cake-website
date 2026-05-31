import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';

const ContactCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contato"
      className="py-20 md:py-28 relative"
      style={{
        background: 'linear-gradient(135deg, #FCD0D7 0%, #FFF3E8 50%, #FCD0D7 100%)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute top-0 right-0 w-72 h-72 opacity-20 transform translate-x-1/3 -translate-y-1/3"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#CC9520"
            d="M50,-28.5C63.4,-16.3,72.7,3.8,68.6,22.8C64.5,41.8,47.1,59.7,27.8,65.8C8.5,71.9,-12.6,66.2,-29.2,54.8C-45.8,43.4,-57.9,26.3,-60.3,7.5C-62.7,-11.3,-55.4,-31.8,-42.1,-43.8C-28.8,-55.8,-9.4,-59.3,5.3,-63.6C20,-67.9,36.7,-40.7,50,-28.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-4">
            Vamos criar algo especial juntos?
          </h2>
          <p className="font-lato text-gray-600 text-lg mb-12">
            Entre em contato e conte-nos sobre o seu sonho
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="https://wa.me/5541989003180?text=Olá! Gostaria de fazer um pedido de bolo personalizado."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-green-500 text-white font-lato font-semibold text-sm tracking-wide rounded-2xl shadow-clay hover:shadow-clay-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              Fazer Pedido pelo WhatsApp
            </a>

            <a
              href="https://www.instagram.com/mercecake"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 border-2 border-peach-rose text-peach-rose font-lato font-semibold text-sm tracking-wide rounded-2xl glass-card hover:bg-peach-rose hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              <InstagramIcon className="w-5 h-5" />
              Ver mais no Instagram
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto"
          >
            <div className="glass-card border border-white/40 flex items-center gap-3 px-5 py-4 justify-center">
              <Phone className="w-5 h-5 text-peach-rose flex-shrink-0" />
              <span className="font-lato text-gray-700">(41) 98900-3180</span>
            </div>

            <div className="glass-card border border-white/40 flex items-center gap-3 px-5 py-4 justify-center">
              <Mail className="w-5 h-5 text-peach-rose flex-shrink-0" />
              <span className="font-lato text-gray-700">marcela.ign@gmail.com</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
