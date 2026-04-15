import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { MenuDelDiaSection } from '../components/MenuDelDiaSection';
import { ViandasSection } from '../components/ViandasSection';
import { ProductosSection } from '../components/ProductosSection';
import { NosotrosSection } from '../components/NosotrosSection';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <HeroSection />
      <ProductosSection />
      <MenuDelDiaSection />
      <ViandasSection />
      <NosotrosSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
