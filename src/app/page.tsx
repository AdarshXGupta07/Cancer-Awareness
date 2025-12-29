
import Hero from "../components/Hero";
import BannerSection from "../components/Banner";
import { AwarenessSection } from "../components/AwarenessSection";
import QuotesSection from "../components/Quotes";
import { ContactSection } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <BannerSection />
      <AwarenessSection />
      <QuotesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
