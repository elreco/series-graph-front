import Header from './home/Header';
import HeroSection from './home/HeroSection';
import FeaturesSection from './home/FeaturesSection';
import ScreenshotsSection from './home/ScreenshotsSection';
import StatsSection from './home/StatsSection';
import CTASection from './home/CTASection';
import Footer from './home/Footer';
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B1D] text-white">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <FeaturesSection />
        <ScreenshotsSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}