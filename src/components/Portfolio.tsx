import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import CakeModal, { type CakeModalData } from './CakeModal';

interface PortfolioItem extends CakeModalData {
  id: number;
}

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [activeFilter, setActiveFilter] = useState<string>('todos');
  const [selectedCake, setSelectedCake] = useState<CakeModalData | null>(null);

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'infantil', label: 'Festa Infantil' },
    { id: 'casamento', label: 'Casamento' },
    { id: 'tradicional', label: 'Tradicionais' },
    { id: 'especial', label: 'Datas Especiais' },
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      name: 'Bolo Dinossauros',
      category: 'infantil',
      image: '/fotos/bolo-dinossauros.png',
      details: {
        massa: 'Bolo de baunilha com recheio de brigadeiro branco',
        cobertura: 'Chantilly texturizado com dinossauros e vegetação em açúcar artesanal',
        porcoes: '20 a 30 fatias',
        prazo: '7 dias de antecedência',
      },
    },
    {
      id: 2,
      name: 'Bolo Safari',
      category: 'infantil',
      image: '/fotos/bolo-safari.png',
      details: {
        massa: 'Bolo de chocolate com recheio de mousse de maracujá',
        cobertura: 'Chantilly com decorações de bichinhos da selva em pasta americana',
        porcoes: '25 a 35 fatias',
        prazo: '7 dias de antecedência',
      },
    },
    {
      id: 3,
      name: 'Bolo Super-Heróis',
      category: 'infantil',
      image: '/fotos/bolo-super-herois.png',
      details: {
        massa: 'Bolo de chocolate com recheio de brigadeiro tradicional',
        cobertura: 'Pasta americana decorada com personagens em papel arroz comestível',
        porcoes: '20 a 30 fatias',
        prazo: '7 dias de antecedência',
      },
    },
    {
      id: 4,
      name: 'Bolo Laço Rosa',
      category: 'especial',
      image: '/fotos/bolo-laco-rosa.png',
      details: {
        massa: 'Bolo de baunilha com recheio de morango fresco com chantilly',
        cobertura: 'Buttercream com laços decorativos e acabamento delicado',
        porcoes: '15 a 20 fatias',
        prazo: '5 dias de antecedência',
      },
    },
    {
      id: 5,
      name: 'Bolo de Morango',
      category: 'especial',
      image: '/fotos/bolo-morango.png',
      details: {
        massa: 'Bolo de baunilha com recheio de morango fresco e chantilly',
        cobertura: 'Farofa crocante de nozes com morangos frescos no topo',
        porcoes: '15 a 25 fatias',
        prazo: '5 dias de antecedência',
      },
    },
  ];

  const filteredItems =
    activeFilter === 'todos'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  };

  return (
    <>
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

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="font-playfair text-2xl text-gray-400 mb-3">Em breve</p>
              <p className="font-lato text-gray-400 text-sm">
                Novas criações chegando em breve. Fale conosco para saber mais.
              </p>
            </motion.div>
          )}

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
                <div className="aspect-[4/3] relative rounded-t-3xl overflow-hidden bg-light-blush">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
                  >
                    <button
                      onClick={() => setSelectedCake(item)}
                      className="px-6 py-3 bg-white/90 text-gray-800 font-lato font-medium text-sm rounded-2xl shadow-clay hover:bg-soft-gold hover:text-white transition-all duration-300"
                    >
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
                        item.category === 'infantil' ? 'bg-pink-100 text-pink-600'
                        : item.category === 'casamento' ? 'bg-amber-50 text-amber-600'
                        : item.category === 'tradicional' ? 'bg-orange-50 text-orange-500'
                        : 'bg-light-blush text-peach-rose'
                      }`}
                    >
                      {item.category === 'infantil' ? 'Infantil'
                        : item.category === 'casamento' ? 'Casamento'
                        : item.category === 'tradicional' ? 'Tradicional'
                        : 'Especial'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CakeModal cake={selectedCake} onClose={() => setSelectedCake(null)} />
    </>
  );
};

export default Portfolio;
