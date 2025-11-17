import HeroBanner from '@/components/HeroBanner';
import FlipCards from '@/components/FlipCards';
import ServicesSection from '@/components/ServicesSection';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroBanner />
      <ServicesSection />
      <FlipCards />
      <ContactForm />
    </main>
  );
}
