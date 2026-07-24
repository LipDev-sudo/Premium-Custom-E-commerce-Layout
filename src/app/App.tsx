import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PurchaseJourney } from './components/PurchaseJourney';
import { Differentials } from './components/Differentials';
import { DashboardMockup } from './components/DashboardMockup';
import { Comparison } from './components/Comparison';
import { Highlights } from './components/Highlights';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-white overflow-x-hidden">
      <Header />
      <Hero />
      <PurchaseJourney />
      <Differentials />
      <DashboardMockup />
      <Comparison />
      <Highlights />
      <Footer />
    </div>
  );
}
