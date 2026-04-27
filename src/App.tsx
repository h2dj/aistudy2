import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StrategySection from './components/StrategySection';
import ResourceHub from './components/ResourceHub';
import LearningCenter from './components/LearningCenter';
import CollaborationLab from './components/CollaborationLab';
import ImpactBoard from './components/ImpactBoard';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <StrategySection />
        <ResourceHub />
        <LearningCenter />
        <CollaborationLab />
        <ImpactBoard />
      </main>
      <Footer />
    </div>
  );
}

