import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Portfolio from './components/Portfolio';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream-white">
      <Navigation />
      <Hero />
      <Categories />
      <Portfolio />
      <HowItWorks />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default App;
