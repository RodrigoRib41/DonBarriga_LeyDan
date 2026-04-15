import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MenuDelDiaSection } from './components/MenuDelDiaSection';
import { ProductosSection } from './components/ProductosSection';
import { DestacadosSection } from './components/DestacadosSection';
import { NosotrosSection } from './components/NosotrosSection';
import { ViandasSection } from './components/ViandasSection';
import { TestimoniosSection } from './components/TestimoniosSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MenuDelDiaSection />
        <ProductosSection />
        <DestacadosSection />
        <NosotrosSection />
        <ViandasSection />
        <TestimoniosSection />
        <Footer />
      </main>
      <WhatsAppButton />
    </div>
  );
}