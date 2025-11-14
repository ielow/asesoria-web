import HeroBanner from '@/components/HeroBanner';
import FlipCards from '@/components/FlipCards';
import FourCards from '@/components/FourCards';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroBanner />
      <FlipCards />
      <FourCards />
      <ContactForm />
    </main>
  );
}
