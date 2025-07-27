import React, { useState, useEffect } from 'react';
import './App.css';
import LandingPage from './components/LandingPage.tsx';
import HomePage from './components/HomePage.tsx';
import LoreBook from './components/LoreBook.tsx';
import Gallery from './components/Gallery.tsx';
import Roadmap from './components/Roadmap.tsx';
import ConnectWallet from './components/ConnectWallet.tsx';
import CommunityMessages from './components/CommunityMessages.tsx';
import FuturePortal from './components/FuturePortal.tsx';

type ActivePage = 'landing' | 'home' | 'lore' | 'gallery' | 'roadmap' | 'wallet' | 'community' | 'portal';

function App() {
  const [activePage, setActivePage] = useState<ActivePage>('landing');
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case 'landing':
        return <LandingPage onEnter={() => setActivePage('home')} />;
      case 'home':
        return <HomePage setActivePage={setActivePage} />;
      case 'lore':
        return <LoreBook setActivePage={setActivePage} />;
      case 'gallery':
        return <Gallery setActivePage={setActivePage} />;
      case 'roadmap':
        return <Roadmap setActivePage={setActivePage} />;
      case 'wallet':
        return <ConnectWallet setActivePage={setActivePage} setIsConnected={setIsWalletConnected} />;
      case 'community':
        return <CommunityMessages setActivePage={setActivePage} />;
      case 'portal':
        return <FuturePortal setActivePage={setActivePage} />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="app">
      {renderPage()}
    </div>
  );
}

export default App;