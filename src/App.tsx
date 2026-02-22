import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import OpeningScene from './components/OpeningScene';
import PortalEffect from './components/PortalEffect';
import TensionBuild from './components/TensionBuild';
import EventInfo from './components/EventInfo';
import FinalCTA from './components/FinalCTA';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [portalEntered, setPortalEntered] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'auto';
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)',
          boxShadow: 'inset 0 0 200px rgba(0, 0, 0, 0.9)'
        }}
      />

      <motion.div
        className="fixed inset-0 pointer-events-none z-10"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(153, 0, 0, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(153, 0, 0, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(153, 0, 0, 0.1) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <ParticleBackground />

      <div className="relative z-20">
        <OpeningScene />
        {!portalEntered ? (
          <PortalEffect onEnter={() => setPortalEntered(true)} />
        ) : (
          <>
            <TensionBuild />
            <EventInfo />
            <FinalCTA />
          </>
        )}
      </div>

      <div
        className="fixed inset-0 pointer-events-none z-30"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.3) 100%)'
        }}
      />
      <MusicPlayer />
    </div>
  );
}

export default App;
