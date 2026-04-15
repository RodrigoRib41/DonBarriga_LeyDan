import { Outlet } from 'react-router';
import { Footer } from './Footer';
import { Header } from './Header';
import { WhatsAppButton } from './WhatsAppButton';

export function SiteLayout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8rem] top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute right-[-6rem] top-[28rem] h-72 w-72 rounded-full bg-accent/70 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute bottom-[-7rem] left-1/3 h-72 w-72 rounded-full bg-secondary/70 blur-3xl sm:h-[26rem] sm:w-[26rem]" />
      </div>
      <Header />
      <main className="pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
