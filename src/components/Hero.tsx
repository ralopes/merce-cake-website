import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: 'linear-gradient(135deg, #FCD0D7 0%, #FFF3E8 50%, #FFE8CC 100%)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Blob rosa top-left */}
        <svg
          className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 opacity-30 transform -translate-x-1/4 -translate-y-1/4"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#F08BAA"
            d="M50,-28.5C63.4,-16.3,72.7,3.8,68.6,22.8C64.5,41.8,47.1,59.7,27.8,65.8C8.5,71.9,-12.6,66.2,-29.2,54.8C-45.8,43.4,-57.9,26.3,-60.3,7.5C-62.7,-11.3,-55.4,-31.8,-42.1,-43.8C-28.8,-55.8,-9.4,-59.3,5.3,-63.6C20,-67.9,36.7,-40.7,50,-28.5Z"
            transform="translate(100 100)"
          />
        </svg>

        {/* Blob dourado bottom-right */}
        <svg
          className="absolute bottom-0 right-0 w-72 h-72 md:w-[500px] md:h-[500px] opacity-25 transform translate-x-1/4 translate-y-1/4"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#CC9520"
            d="M44.3,-16.7C55.8,-8.3,63.6,12.2,57.8,28.8C52,45.4,32.6,58.2,11.6,63.3C-9.4,68.4,-32.1,65.8,-48.1,54.3C-64.1,42.8,-73.4,22.5,-69.4,3.7C-65.4,-15,-48.1,-32.5,-29.1,-43.1C-10.2,-53.7,10.3,-57.4,27.8,-53.8C45.3,-50.2,64.6,-39.3,44.3,-16.7Z"
            transform="translate(100 100)"
          />
        </svg>

        {/* Marca d'água do logo (bolo) — centralizada atrás do título */}
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-72 h-[360px] md:w-[420px] md:h-[520px] opacity-[0.06]"
          viewBox="0 0 38 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 10.5C19 10.5 15.5 6 11.5 7.5C8.5 8.8 8 12.5 10 15L19 22L28 15C30 12.5 29.5 8.8 26.5 7.5C22.5 6 19 10.5 19 10.5Z"
            fill="#5C3D2E"
          />
          <rect x="12" y="22" width="14" height="7" rx="1.5" fill="#5C3D2E" />
          <rect x="7" y="29" width="24" height="8" rx="1.5" fill="#5C3D2E" />
          <rect x="2" y="37" width="34" height="10" rx="2" fill="#5C3D2E" />
        </svg>

        {/* Círculos concêntricos — na frente da marca d'água */}
        <svg
          className="absolute top-20 right-10 w-32 h-32 md:w-48 md:h-48 opacity-20"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="80" fill="none" stroke="#CC9520" strokeWidth="2" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#F08BAA" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-gray-800 mb-6 leading-tight"
          >
            Cada bolo conta uma história
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="font-lato text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Bolos personalizados feitos com amor para os momentos mais especiais da sua vida
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#portfolio"
              className="px-8 py-4 bg-peach-rose text-white font-lato font-semibold text-sm tracking-wide rounded-2xl shadow-clay hover:shadow-clay-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Ver Portfólio
            </a>
            <a
              href="#contato"
              className="px-8 py-4 border-2 border-peach-rose text-peach-rose font-lato font-semibold text-sm tracking-wide rounded-2xl glass-card hover:bg-peach-rose hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              Fazer Pedido
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="mt-16 md:mt-20 max-w-3xl mx-auto"
        >
          <div
            className="relative w-full rounded-3xl overflow-hidden shadow-clay-lg"
            style={{
              maxHeight: '400px',
              height: 'min(400px, 75vw)',
              background: 'linear-gradient(135deg, #FCD0D7 0%, #FFF3E8 30%, #F08BAA 60%, #CC9520 100%)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.5)',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-16 h-16 md:w-20 md:h-20 text-soft-gold" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 4.74 13.6 5.39 13 5.73V7H14C15.1 7 16 7.9 16 9V10H17C18.1 10 19 10.9 19 12V14H20C21.1 14 22 14.9 22 16C22 17.1 21.1 18 20 18H19V20C19 21.1 18.1 22 17 22H7C5.9 22 5 21.1 5 20V18H4C2.9 18 2 17.1 2 16C2 14.9 2.9 14 4 14H5V12C5 10.9 5.9 10 7 10H8V9C8 7.9 8.9 7 10 7H11V5.73C10.4 5.39 10 4.74 10 4C10 2.9 10.9 2 12 2Z" />
                  </svg>
                </div>
                <p className="font-playfair text-white text-lg md:text-xl font-medium">Bolo Decorativo</p>
              </div>
            </div>

            <div className="absolute top-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-6 right-6 w-24 h-24 bg-peach-rose/30 rounded-full blur-2xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
