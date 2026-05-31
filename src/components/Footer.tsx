import { MessageCircle } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm-white border-t border-light-blush/50">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-peach-rose mb-2">
              Mercê Cake
            </h3>
            <p className="font-lato text-gray-600 text-sm">
              Criando momentos doceiros desde 2020
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/mercecake"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-light-blush flex items-center justify-center text-peach-rose hover:bg-peach-rose hover:text-white transition-all duration-300 shadow-clay-sm hover:shadow-clay"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>

            <a
              href="https://wa.me/5541989003180"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-light-blush flex items-center justify-center text-peach-rose hover:bg-peach-rose hover:text-white transition-all duration-300 shadow-clay-sm hover:shadow-clay"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center pt-4 border-t border-light-blush/50 w-full max-w-md">
            <p className="font-lato text-gray-500 text-sm">
              &copy; {currentYear} Mercê Cake. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
