import React, { useState, useEffect } from 'react';

interface GalleryProps {
  setActivePage: (page: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ setActivePage }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Mock reveal date (set to future date)
  const revealDate = new Date('2025-03-01T00:00:00Z');
  const isRevealed = false; // This would be true after mint completion

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = revealDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const previewFloaters = [
    { id: 1, image: '/4.gif', rarity: 'Legendary' },
    { id: 2, image: '/bad_guy2-2.gif', rarity: 'Epic' },
    { id: 3, image: '/good_guy1-2.gif', rarity: 'Rare' },
    { id: 4, image: '/Soul_of_Krixis1.gif', rarity: 'Mythic' }
  ];

  return (
    <div className="legendary-homepage">
      {/* Mystical Particles */}
      <div className="mystical-particles">
        {[...Array(20)].map((_, i) => (
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
              <div className="emblem-inner">G</div>
              <div className="emblem-glow"></div>
            </div>
            <div className="logo-text">
              <h1 className="project-title">MYSTICAL GALLERY</h1>
              <div className="subtitle-container">
                <p className="animated-subtitle">
                  7777 Souls Await Discovery
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

        {!isRevealed ? (
          /* Pre-Reveal: Chain Locked Gallery */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* Hero Section - Chain Locked */}
            <section className="hero-section">
              <div className="hero-content">
                <div className="hero-character">
                  <div className="character-frame">
                    <div style={{
                      fontSize: '8rem',
                      animation: 'heroFloat 4s ease-in-out infinite',
                      filter: 'drop-shadow(0 0 30px #ff4444)'
                    }}>
                      ⛓️
                    </div>
                    <div className="character-aura" style={{ background: 'radial-gradient(circle, rgba(255,68,68,0.3), transparent)' }}></div>
                    <div className="character-ring" style={{ borderTopColor: '#ff4444' }}></div>
                  </div>
                </div>
                
                <div className="hero-text">
                  <h2 className="hero-title" style={{ color: '#ff4444' }}>
                    Gallery Chain Locked
                  </h2>
                  <p className="hero-description">
                    The mystical gallery remains sealed until all 7777 Floaters find their holders.
                    Only when the summoning ritual is complete will the chains break and reveal 
                    the full collection in all its legendary glory.
                  </p>
                  
                  <div className="hero-stats">
                    <div className="stat-item">
                      <div className="stat-number" style={{ color: '#ff4444' }}>0</div>
                      <div className="stat-label">Summoned</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                      <div className="stat-number">7777</div>
                      <div className="stat-label">Total Supply</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                      <div className="stat-number" style={{ color: '#ff4444' }}>🔒</div>
                      <div className="stat-label">Status</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Countdown Timer */}
            <div className="relic-container" style={{
              background: 'linear-gradient(135deg, rgba(255,68,68,0.1), rgba(0,0,0,0.9))',
              border: '2px solid #ff4444'
            }}>
              <div className="relic-header" style={{ flexDirection: 'column', textAlign: 'center' }}>
                <div className="relic-icon">
                  <div style={{
                    fontSize: '4rem',
                    animation: 'emblemPulse 2s ease-in-out infinite'
                  }}>
                    ⏰
                  </div>
                </div>
                <div className="relic-title-section">
                  <h2 className="relic-title" style={{ color: '#ff4444' }}>
                    Countdown to Reveal
                  </h2>
                  <p className="relic-subtitle">
                    The veil will be lifted once the minting ritual is complete
                  </p>
                </div>
              </div>
              
              <div className="relic-content">
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                  gap: '1.5rem',
                  marginBottom: '2rem'
                }}>
                  {[
                    { label: 'DAYS', value: timeLeft.days },
                    { label: 'HOURS', value: timeLeft.hours },
                    { label: 'MINUTES', value: timeLeft.minutes },
                    { label: 'SECONDS', value: timeLeft.seconds }
                  ].map((unit) => (
                    <div
                      key={unit.label}
                      className="nav-card"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,68,68,0.1), rgba(0,0,0,0.8))',
                        border: '2px solid #ff4444',
                        minHeight: '100px'
                      }}
                    >
                      <div className="card-content" style={{ textAlign: 'center' }}>
                        <div style={{
                          fontSize: 'clamp(2rem, 5vw, 3rem)',
                          fontWeight: 'bold',
                          color: '#ff4444',
                          marginBottom: '0.5rem',
                          fontFamily: 'var(--font-pixel)',
                          animation: 'pixelPulse 1s infinite'
                        }}>
                          {unit.value.toString().padStart(2, '0')}
                        </div>
                        <div style={{
                          fontSize: '0.9rem',
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          color: '#ff4444'
                        }}>
                          {unit.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Preview Section */}
            <section className="navigation-section">
              <div className="faq-header">
                <h2 className="faq-title">👁️ Mystical Preview</h2>
                <p className="faq-subtitle">A glimpse of the legendary beings that await discovery</p>
              </div>
              
              <div className="nav-grid">
                {previewFloaters.map((floater) => (
                  <div key={floater.id} className="nav-card">
                    <div className="card-icon">
                      <div style={{
                        width: '120px',
                        height: '120px',
                        background: 'radial-gradient(circle, rgba(0,255,65,0.2), transparent)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid var(--evil-green)',
                        position: 'relative',
                        overflow: 'hidden'
                      }}>
                        <img
                          src={floater.image}
                          alt={`Floater ${floater.id}`}
                          className="pixelated"
                          style={{ 
                            width: '80%', 
                            height: '80%', 
                            objectFit: 'contain',
                            animation: 'heroFloat 3s ease-in-out infinite'
                          }}
                        />
                        <div style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'radial-gradient(circle, rgba(0,255,65,0.1), transparent)',
                          animation: 'auraRotate 4s linear infinite'
                        }} />
                      </div>
                    </div>
                    <div className="card-content">
                      <h3 className="card-title">
                        #{floater.id.toString().padStart(4, '0')}
                      </h3>
                      <p className="card-description" style={{
                        color: floater.rarity === 'Legendary' ? '#FFD700' :
                              floater.rarity === 'Mythic' ? '#8A2BE2' :
                              floater.rarity === 'Epic' ? '#800080' :
                              '#0064FF',
                        fontWeight: 'bold'
                      }}>
                        {floater.rarity}
                      </p>
                    </div>
                    <div className="card-glow"></div>
                  </div>
                ))}
              </div>
            </section>

            {/* Mint Progress */}
            <div className="portal-teaser">
              <div className="portal-content" style={{ gridTemplateColumns: '1fr', textAlign: 'center' }}>
                <div className="portal-text">
                  <h3 className="portal-title">🧬 Summoning Progress</h3>
                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '1rem',
                      fontSize: '1.1rem'
                    }}>
                      <span>Summoned</span>
                      <span style={{ fontWeight: 'bold' }}>0 / 7777</span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '20px',
                      background: 'rgba(0,0,0,0.5)',
                      border: '2px solid var(--evil-green)',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      position: 'relative'
                    }}>
                      <div style={{
                        width: '0%',
                        height: '100%',
                        background: 'linear-gradient(90deg, var(--evil-green), var(--evil-green-light))',
                        transition: 'width 1s ease',
                        borderRadius: '8px'
                      }} />
                    </div>
                  </div>
                  <p className="portal-description">
                    Gallery will unlock automatically once summoning is complete. 
                    The chains will break and reveal the full legendary collection.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div style={{ textAlign: 'center' }}>
              <button 
                onClick={() => setActivePage('roadmap')}
                className="portal-btn"
                style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}
              >
                <span>🧬 VIEW ROADMAP</span>
                <div className="btn-shimmer"></div>
              </button>
            </div>
          </div>
        ) : (
          /* Post-Reveal: Full Gallery */
          <div>
            <p style={{
              textAlign: 'center',
              fontSize: '1.2rem',
              opacity: 0.8,
              color: 'var(--white)'
            }}>
              Gallery will be revealed after mint completion...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;