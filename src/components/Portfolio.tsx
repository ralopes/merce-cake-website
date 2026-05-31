import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

interface PortfolioItem {
  id: number;
  name: string;
  category: 'infantil' | 'casamento' | 'especial';
  gradient: string;
}

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [activeFilter, setActiveFilter] = useState<string>('todos');

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'infantil', label: 'Festa Infantil' },
    { id: 'casamento', label: 'Casamento' },
    { id: 'especial', label: 'Datas Especiais' },
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      name: 'Bolo Princesa Encantada',
      category: 'infantil',
      gradient: 'from-pink-200 via-pink-100 to-rose-200',
    },
    {
      id: 2,
      name: 'Bolo Romântico Branco',
      category: 'casamento',
      gradient: 'from-white via-cream-white to-light-blush',
    },
    {
      id: 3,
      name: 'Bolo Unicorn Magic',
      category: 'infantil',
      gradient: 'from-purple-200 via-pink-200 to-blue-200',
    },
    {
      id: 4,
      name: 'Bolo Dourado Elegante',
      category: 'casamento',
      gradient: 'from-soft-gold/60 via-peach-rose/40 to-cream-white',
    },
    {
      id: 5,
      name: 'Bolo Super Heróis',
      category: 'infantil',
      gradient: 'from-blue-300 via-red-200 to-yellow-200',
    },
    {
      id: 6,
      name: 'Bolo Floral Primavera',
      category: 'especial',
      gradient: 'from-peach-rose/60 via-light-blush to-cream-white',
    },
  ];

  const filteredItems =
    activeFilter === 'todos'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-warm-white">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-4">
            Nossos Bolos
          </h2>
          <p className="font-lato text-gray-600 text-lg max-w-2xl mx-auto mb-6">
            Cada criação é única, feita especialmente para você
          </p>
          <div className="w-24 h-1 bg-soft-gold mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2.5 rounded-full font-lato text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-peach-rose text-white shadow-clay'
                  : 'bg-white text-gray-600 hover:bg-light-blush hover:text-peach-rose shadow-clay-sm'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              layout
              className="group rounded-3xl shadow-clay hover:shadow-clay-lg transition-all duration-300 transform hover:-translate-y-1 bg-warm-white"
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${item.gradient} relative rounded-t-3xl overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center shadow-clay-sm">
                    <svg
                      className="w-10 h-10 text-gray-700/60"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 4.74 13.6 5.39 13 5.73V7H14C15.1 7 16 7.9 16 9V10H17C18.1 10 19 10.9 19 12V14H20C21.1 14 22 14.9 22 16C22 17.1 21.1 18 20 18H19V20C19 21.1 18.1 22 17 22H7C5.9 22 5 21.1 5 20V18H4C2.9 18 2 17.1 2 16C2 14.9 2.9 14 4 14H5V12C5 10.9 5.9 10 7 10H8V9C8 7.9 8.9 7 10 7H11V5.73C10.4 5.39 10 4.74 10 4C10 2.9 10.9 2 12 2Z" />
                    </svg>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
                  <button className="px-6 py-3 bg-white/90 text-gray-800 font-lato font-medium text-sm rounded-2xl shadow-clay hover:bg-soft-gold hover:text-white transition-all duration-300">
                    Ver mais
                  </button>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-playfair text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-lato font-medium shadow-clay-sm ${
                      item.category === 'infantil'
                        ? 'bg-pink-100 text-pink-600'
                        : item.category === 'casamento'
                          ? 'bg-amber-50 text-amber-600'
                          : 'bg-light-blush text-peach-rose'
                    }`}
                  >
                    {item.category === 'infantil'
                      ? 'Infantil'
                      : item.category === 'casamento'
                        ? 'Casamento'
                        : 'Especial'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
