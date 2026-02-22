import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Differentials } from './components/Differentials';
import { DashboardMockup } from './components/DashboardMockup';
import { Comparison } from './components/Comparison';
import { Highlights } from './components/Highlights';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      <Header />
      <Hero />
      <Differentials />
      <DashboardMockup />
      <Comparison />
      <Highlights />
      <Footer />
    </div>
  );
}
