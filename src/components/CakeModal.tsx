import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Users, MessageCircle } from 'lucide-react';

export interface CakeDetails {
  massa: string;
  cobertura: string;
  porcoes: string;
  prazo: string;
}

export interface CakeModalData {
  name: string;
  category: 'infantil' | 'casamento' | 'especial';
  image: string;
  details: CakeDetails;
}

interface CakeModalProps {
  cake: CakeModalData | null;
  onClose: () => void;
}

const CATEGORY_LABEL: Record<CakeModalData['category'], string> = {
  infantil: 'Infantil',
  casamento: 'Casamento',
  especial: 'Especial',
};

const CATEGORY_CLASS: Record<CakeModalData['category'], string> = {
  infantil: 'bg-pink-100 text-pink-600',
  casamento: 'bg-amber-50 text-amber-600',
  especial: 'bg-light-blush text-peach-rose',
};

const CakeModal = ({ cake, onClose }: CakeModalProps) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const whatsappUrl = cake
    ? `https://wa.me/5541989003180?text=${encodeURIComponent(`Olá! Tenho interesse no ${cake.name}. Pode me dar mais informações?`)}`
    : '#';

  return (
    <AnimatePresence>
      {cake && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            className="absolute inset-0 bg-black/50"
            style={{ backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="relative z-10 w-full max-w-md bg-warm-white rounded-3xl shadow-clay-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="relative h-56 overflow-hidden bg-light-blush">
              <img src={cake.image} alt={cake.name} className="w-full h-full object-cover" />

              <button
                onClick={onClose}
                className="absolute top-3 right-3 w-9 h-9 bg-white/80 rounded-full flex items-center justify-center shadow-clay-sm hover:bg-white transition-colors duration-200"
                aria-label="Fechar"
              >
                <X size={16} className="text-gray-700" />
              </button>

              <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-lato font-medium shadow-clay-sm ${CATEGORY_CLASS[cake.category]}`}>
                {CATEGORY_LABEL[cake.category]}
              </span>
            </div>

            <div className="p-6">
              <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-5">
                {cake.name}
              </h3>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="glass-card border border-white/40 p-3 flex items-start gap-2">
                  <Users className="w-4 h-4 text-peach-rose mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-lato text-xs text-soft-gold uppercase tracking-wide">Porções</p>
                    <p className="font-lato text-sm text-gray-700 mt-0.5">{cake.details.porcoes}</p>
                  </div>
                </div>

                <div className="glass-card border border-white/40 p-3 flex items-start gap-2">
                  <Clock className="w-4 h-4 text-peach-rose mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-lato text-xs text-soft-gold uppercase tracking-wide">Encomenda</p>
                    <p className="font-lato text-sm text-gray-700 mt-0.5">{cake.details.prazo}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="glass-card border border-white/40 p-3">
                  <p className="font-lato text-xs text-soft-gold uppercase tracking-wide mb-1">Massa</p>
                  <p className="font-lato text-sm text-gray-700">{cake.details.massa}</p>
                </div>

                <div className="glass-card border border-white/40 p-3">
                  <p className="font-lato text-xs text-soft-gold uppercase tracking-wide mb-1">Cobertura</p>
                  <p className="font-lato text-sm text-gray-700">{cake.details.cobertura}</p>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-green-500 text-white font-lato font-semibold text-sm rounded-2xl shadow-clay hover:shadow-clay-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                Pedir esse bolo
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CakeModal;
