import React, { useEffect, useState } from 'react';
import GlassContainer from './components/GlassContainer';
import ProfileHeader from './components/ProfileHeader';
import ActionGrid from './components/ActionGrid';
import SaveContactButton from './components/SaveContactButton';
import FeaturedProperty from './components/FeaturedProperty';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden flex justify-center items-start md:items-center py-4 sm:py-10">
      
      {/* Background Layer with Dark Overlay */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105"
          style={{ 
            backgroundImage: "url('assets/fotofundo.jpg')",
            filter: 'blur(4px)' 
          }} 
        />
        <div className="absolute inset-0 bg-black/70" /> {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* Main Content Card */}
      <div className={`
        relative z-10 w-full max-w-[400px] px-4
        transition-all duration-1000 ease-out transform
        ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}>
        <GlassContainer className="w-full flex flex-col items-center min-h-[80vh]">
          <ProfileHeader />
          <ActionGrid />
          <SaveContactButton />
          <FeaturedProperty />
          <div className="flex-grow" />
          <Footer />
        </GlassContainer>
      </div>

    </div>
  );
};

export default App;
