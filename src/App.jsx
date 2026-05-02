import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ModelExplorer from './components/ModelExplorer';
import ScatterSection from './components/ScatterSection';
import CompareModels from './components/CompareModels';
import StabilizersSection from './components/StabilizersSection';
import DarkDivider from './components/DarkDivider';
import Findings from './components/Findings';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#07070f' }}>
      <Header />
      <main>
        <HeroSection />
        <ModelExplorer />
        <ScatterSection />
        <CompareModels />
        <StabilizersSection />
        <DarkDivider />
        <Findings />
      </main>
      <Footer />
    </div>
  );
}
