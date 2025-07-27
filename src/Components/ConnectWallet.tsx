import React, { useState } from 'react';

interface ConnectWalletProps {
  setActivePage: (page: string) => void;
  setIsConnected: (connected: boolean) => void;
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({ setActivePage, setIsConnected }) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [ownedNFTs, setOwnedNFTs] = useState<any[]>([]);

  const connectWallet = async () => {
    setIsConnecting(true);
    
    // Simulate wallet connection
    setTimeout(() => {
      setWalletAddress('0x1234...5678');
      setIsConnected(true);
      setOwnedNFTs([
        { id: 1, name: 'Floater #0001', image: '/good_guy1-2.gif', rarity: 'Legendary' },
        { id: 2, name: 'Floater #0042', image: '/bad_guy2-2.gif', rarity: 'Epic' }
      ]);
      setIsConnecting(false);
    }, 2000);
  };

  return (
    <div className="legendary-homepage">
      {/* Mystical Particles */}
      <div className="mystical-particles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="mystical-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="homepage-container">
        {/* Legendary Header */}
        <header className="legendary-header">
          <div className="logo-section">
            <div className="logo-emblem">
              <div className="emblem-inner">F</div>
              <div className="emblem-glow"></div>
            </div>
            <div className="logo-text">
              <h1 className="project-title">FLOATERS WORLD</h1>
              <div className="subtitle-container">
                <p className="animated-subtitle">
                  Secure Your Digital Identity
                </p>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => setActivePage('home')}
            className="legendary-wallet-btn"
          >
            <span className="btn-icon">🏠</span>
            <span className="btn-text">RETURN HOME</span>
            <div className="btn-glow"></div>
          </button>
        </header>

        {!walletAddress ? (
          /* Legendary Wallet Connection */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* Hero Section */}
            <section className="hero-section">
              <div className="hero-content" style={{ gridTemplateColumns: '1fr', textAlign: 'center' }}>
                <div className="hero-text">
                  <h2 className="hero-title">
                    Connect Your Ethereum Wallet
                  </h2>
                  <p className="hero-description">
                    Enter the mystical realm of Floaters World. Connect your wallet to unlock 
                    exclusive areas, view your collection, and participate in the legendary 
                    community that's reshaping Web3.
                  </p>
                  
                  <div className="hero-stats">
                    <div className="stat-item">
                      <div className="stat-number">🔐</div>
                      <div className="stat-label">Secure Access</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                      <div className="stat-number">👻</div>
                      <div className="stat-label">NFT Gated</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                      <div className="stat-number">🌐</div>
                      <div className="stat-label">World Access</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Wallet Options */}
            <section className="navigation-section">
              <div className="nav-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                <button 
                  className="nav-card"
                  onClick={connectWallet}
                  disabled={isConnecting}
                  style={{ opacity: isConnecting ? 0.6 : 1 }}
                >
                  <div className="card-icon" style={{ fontSize: '4rem' }}>🦊</div>
                  <div className="card-content">
                    <h3 className="card-title">
                      {isConnecting ? 'CONNECTING...' : 'METAMASK'}
                    </h3>
                    <p className="card-description">Most popular Ethereum wallet</p>
                  </div>
                  <div className="card-glow"></div>
                </button>
                
                <button className="nav-card">
                  <div className="card-icon" style={{ fontSize: '4rem' }}>🔗</div>
                  <div className="card-content">
                    <h3 className="card-title">WALLETCONNECT</h3>
                    <p className="card-description">Connect with mobile wallets</p>
                  </div>
                  <div className="card-glow"></div>
                </button>
                
                <button className="nav-card">
                  <div className="card-icon" style={{ fontSize: '4rem' }}>💎</div>
                  <div className="card-content">
                    <h3 className="card-title">COINBASE WALLET</h3>
                    <p className="card-description">Secure institutional grade</p>
                  </div>
                  <div className="card-glow"></div>
                </button>
                
                <button className="nav-card">
                  <div className="card-icon" style={{ fontSize: '4rem' }}>🏦</div>
                  <div className="card-content">
                    <h3 className="card-title">LEDGER</h3>
                    <p className="card-description">Hardware wallet security</p>
                  </div>
                  <div className="card-glow"></div>
                </button>
              </div>
            </section>

            {/* Connection Status */}
            {isConnecting && (
              <div className="relic-container" style={{ 
                background: 'linear-gradient(135deg, rgba(0,255,65,0.1), rgba(0,0,0,0.9))',
                border: '2px solid var(--evil-green)',
                textAlign: 'center'
              }}>
                <div className="relic-header" style={{ flexDirection: 'column', gap: '1rem' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    border: '4px solid var(--evil-green)',
                    borderTop: '4px solid transparent',
                    borderRadius: '50%',
                    animation: 'ringRotate 1s linear infinite',
                    margin: '0 auto'
                  }}></div>
                  <div className="relic-title-section">
                    <h2 className="relic-title" style={{ color: 'var(--evil-green)' }}>
                      Establishing Connection
                    </h2>
                    <p className="relic-subtitle">
                      Please approve the connection in your wallet
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Security Notice */}
            <div className="portal-teaser">
              <div className="portal-content" style={{ gridTemplateColumns: '1fr', textAlign: 'center' }}>
                <div className="portal-text">
                  <h3 className="portal-title" style={{ color: '#FFA500' }}>
                    🛡️ Security First
                  </h3>
                  <p className="portal-description">
                    We will never ask for your seed phrase or private keys. Only connect to 
                    trusted wallet providers and always verify the URL. Your security is our priority 
                    in the mystical realm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Connected Dashboard */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* Connection Success */}
            <div className="relic-container" style={{
              background: 'linear-gradient(135deg, rgba(0,255,65,0.2), rgba(0,0,0,0.9))',
              border: '2px solid var(--evil-green)'
            }}>
              <div className="relic-header">
                <div className="relic-icon">
                  <div style={{
                    width: '100px',
                    height: '100px',
                    background: 'linear-gradient(135deg, var(--evil-green), var(--evil-green-dark))',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    animation: 'emblemPulse 2s ease-in-out infinite'
                  }}>
                    ✅
                  </div>
                </div>
                <div className="relic-title-section">
                  <h2 className="relic-title" style={{ color: 'var(--evil-green)' }}>
                    Wallet Connected
                  </h2>
                  <p className="relic-subtitle">
                    {walletAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* Owned NFTs */}
            {ownedNFTs.length > 0 && (
              <section className="navigation-section">
                <h2 className="faq-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  👻 Your Floaters Collection
                </h2>
                <div className="nav-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                  {ownedNFTs.map((nft) => (
                    <div key={nft.id} className="nav-card">
                      <div className="card-icon">
                        <img
                          src={nft.image}
                          alt={nft.name}
                          className="pixelated"
                          style={{
                            width: '100px',
                            height: '100px',
                            animation: 'heroFloat 3s ease-in-out infinite'
                          }}
                        />
                      </div>
                      <div className="card-content">
                        <h3 className="card-title">{nft.name}</h3>
                        <p className="card-description" style={{
                          color: nft.rarity === 'Legendary' ? '#FFD700' : '#800080'
                        }}>
                          {nft.rarity}
                        </p>
                      </div>
                      <div className="card-glow"></div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Unlocked Features */}
            <section className="faq-section">
              <div className="faq-header">
                <h2 className="faq-title">🔓 Unlocked Features</h2>
                <p className="faq-subtitle">Your wallet grants access to these mystical powers</p>
              </div>
              
              <div className="nav-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                <div className="nav-card">
                  <div className="card-icon">🌐</div>
                  <div className="card-content">
                    <h3 className="card-title">World Access</h3>
                    <p className="card-description">Enter token-gated areas and exclusive zones</p>
                  </div>
                  <div className="card-glow"></div>
                </div>
                
                <div className="nav-card">
                  <div className="card-icon">🎁</div>
                  <div className="card-content">
                    <h3 className="card-title">Exclusive Events</h3>
                    <p className="card-description">Holder-only giveaways and special drops</p>
                  </div>
                  <div className="card-glow"></div>
                </div>
                
                <div className="nav-card">
                  <div className="card-icon">🗳️</div>
                  <div className="card-content">
                    <h3 className="card-title">Governance Power</h3>
                    <p className="card-description">Vote on proposals and shape the future</p>
                  </div>
                  <div className="card-glow"></div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnectWallet;