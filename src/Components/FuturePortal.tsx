import React, { useState, useEffect } from 'react';

interface FuturePortalProps {
  setActivePage: (page: string) => void;
}

const FuturePortal: React.FC<FuturePortalProps> = ({ setActivePage }) => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const portalScenes = [
    {
      title: "Draxix prepares the legendary ritual...",
      description: "The dark summoner gathers his mystical energy from the void"
    },
    {
      title: "The vortex begins to form reality...",
      description: "Space and time bend as portals start to manifest"
    },
    {
      title: "Ape Chain portal flickers to life...",
      description: "The primal realm calls out through the dimensional void"
    },
    {
      title: "Solana gateway opens with lightning...",
      description: "Ultra-fast magic flows through crystal spires"
    },
    {
      title: "The unknown realm stirs mysteriously...",
      description: "Something beyond imagination awaits discovery"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentScene((prev) => {
          if (prev >= portalScenes.length - 1) {
            return 0; // Loop back to beginning
          }
          return prev + 1;
        });
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [isPlaying, portalScenes.length]);

  return (
    <div className="legendary-homepage">
      {/* Enhanced Mystical Particles */}
      <div className="mystical-particles">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="mystical-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              background: i % 4 === 0 ? '#8A2BE2' : 
                         i % 4 === 1 ? '#FFA500' : 
                         i % 4 === 2 ? '#9945FF' : '#00FF41'
            }}
          />
        ))}
      </div>

      <div className="homepage-container">
        {/* Legendary Header */}
        <header className="legendary-header">
          <div className="logo-section">
            <div className="logo-emblem">
              <div className="emblem-inner">P</div>
              <div className="emblem-glow"></div>
            </div>
            <div className="logo-text">
              <h1 className="project-title">FUTURE PORTAL</h1>
              <div className="subtitle-container">
                <p className="animated-subtitle">
                  Witness the Multiverse Expansion
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

        {/* Main Portal Scene */}
        <div className="relic-container" style={{
          height: '600px',
          marginBottom: '4rem',
          background: `
            linear-gradient(135deg, rgba(0,0,0,0.9), rgba(138,43,226,0.3)),
            url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238A2BE2' fill-opacity='0.1'%3E%3Cpath d='M50 50m-20 0a20,20 0 1,1 40,0a20,20 0 1,1 -40,0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
          `,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Draxix */}
          <div style={{
            position: 'absolute',
            left: '10%',
            top: '50%',
            transform: 'translateY(-50%)',
            animation: 'heroFloat 2s ease-in-out infinite'
          }}>
            <div style={{
              width: '180px',
              height: '180px',
              background: 'radial-gradient(circle, rgba(138,43,226,0.3), transparent)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '3px solid #8A2BE2'
            }}>
              <img
                src="/bad_guy2-2.gif"
                alt="Draxix"
                className="pixelated"
                style={{ 
                  width: '140px', 
                  height: '140px',
                  filter: currentScene >= 1 ? 'brightness(1.8) drop-shadow(0 0 30px #8A2BE2)' : 'brightness(1.2)'
                }}
              />
            </div>
          </div>

          {/* Central Vortex */}
          {currentScene >= 1 && (
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '250px',
              height: '250px',
              background: 'radial-gradient(circle, rgba(138,43,226,0.8), rgba(0,255,65,0.4), transparent)',
              borderRadius: '50%',
              animation: 'ringRotate 3s linear infinite',
              border: '4px solid #8A2BE2'
            }}>
              <div style={{
                position: 'absolute',
                inset: '30px',
                background: 'radial-gradient(circle, rgba(0,0,0,0.8), transparent)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem'
              }}>
                🌀
              </div>
              
              {/* Inner Rings */}
              <div style={{
                position: 'absolute',
                inset: '50px',
                border: '2px solid rgba(0,255,65,0.6)',
                borderRadius: '50%',
                animation: 'ringRotate 2s linear infinite reverse'
              }} />
            </div>
          )}

          {/* Portal Destinations */}
          <div style={{
            position: 'absolute',
            right: '10%',
            top: '15%',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            {/* Ape Chain Portal */}
            {currentScene >= 2 && (
              <div style={{
                width: '140px',
                height: '140px',
                background: currentScene >= 2 ? 
                  'radial-gradient(circle, rgba(255,165,0,0.9), rgba(255,165,0,0.3), transparent)' : 
                  'radial-gradient(circle, rgba(255,165,0,0.3), transparent)',
                borderRadius: '50%',
                animation: 'emblemPulse 1.5s infinite',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                border: '4px solid #FFA500',
                position: 'relative',
                boxShadow: '0 0 40px rgba(255,165,0,0.6)'
              }}>
                🦍
                {currentScene >= 2 && (
                  <div style={{
                    position: 'absolute',
                    inset: '-15px',
                    border: '3px solid #FFA500',
                    borderRadius: '50%',
                    animation: 'auraRotate 3s linear infinite'
                  }} />
                )}
              </div>
            )}

            {/* Solana Portal */}
            {currentScene >= 3 && (
              <div style={{
                width: '140px',
                height: '140px',
                background: currentScene >= 3 ? 
                  'radial-gradient(circle, rgba(153,69,255,0.9), rgba(153,69,255,0.3), transparent)' : 
                  'radial-gradient(circle, rgba(153,69,255,0.3), transparent)',
                borderRadius: '50%',
                animation: 'emblemPulse 2s infinite',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                border: '4px solid #9945FF',
                position: 'relative',
                boxShadow: '0 0 40px rgba(153,69,255,0.6)'
              }}>
                ⚡
                {currentScene >= 3 && (
                  <div style={{
                    position: 'absolute',
                    inset: '-15px',
                    border: '3px solid #9945FF',
                    borderRadius: '50%',
                    animation: 'auraRotate 2s linear infinite reverse'
                  }} />
                )}
              </div>
            )}

            {/* Unknown Portal */}
            {currentScene >= 4 && (
              <div style={{
                width: '140px',
                height: '140px',
                background: 'radial-gradient(circle, rgba(138,43,226,0.9), rgba(138,43,226,0.3), transparent)',
                borderRadius: '50%',
                animation: 'emblemPulse 2.5s infinite',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                border: '4px solid #8A2BE2',
                position: 'relative',
                boxShadow: '0 0 40px rgba(138,43,226,0.8)'
              }}>
                ❓
                <div style={{
                  position: 'absolute',
                  inset: '-15px',
                  border: '3px solid #8A2BE2',
                  borderRadius: '50%',
                  animation: 'auraRotate 4s linear infinite'
                }} />
              </div>
            )}
          </div>

          {/* Energy Beams */}
          {currentScene >= 2 && (
            <>
              <div style={{
                position: 'absolute',
                left: '30%',
                top: '30%',
                width: '30%',
                height: '6px',
                background: 'linear-gradient(90deg, #8A2BE2, #FFA500)',
                animation: 'pixelShimmer 2s infinite',
                transform: 'rotate(-20deg)',
                boxShadow: '0 0 20px rgba(255,165,0,0.8)'
              }} />
              {currentScene >= 3 && (
                <div style={{
                  position: 'absolute',
                  left: '30%',
                  top: '50%',
                  width: '30%',
                  height: '6px',
                  background: 'linear-gradient(90deg, #8A2BE2, #9945FF)',
                  animation: 'pixelShimmer 2.5s infinite',
                  boxShadow: '0 0 20px rgba(153,69,255,0.8)'
                }} />
              )}
              {currentScene >= 4 && (
                <div style={{
                  position: 'absolute',
                  left: '30%',
                  top: '70%',
                  width: '30%',
                  height: '6px',
                  background: 'linear-gradient(90deg, #8A2BE2, #8A2BE2)',
                  animation: 'pixelShimmer 3s infinite',
                  transform: 'rotate(20deg)',
                  boxShadow: '0 0 20px rgba(138,43,226,0.8)'
                }} />
              )}
            </>
          )}

          {/* Scene Description */}
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            background: 'rgba(0,0,0,0.9)',
            padding: '1.5rem 2rem',
            border: '3px solid #8A2BE2',
            borderRadius: '15px',
            maxWidth: '600px',
            width: '90%'
          }}>
            <h3 style={{
              fontSize: '1.4rem',
              marginBottom: '0.5rem',
              color: '#8A2BE2',
              fontFamily: 'var(--font-fantasy)'
            }}>
              {portalScenes[currentScene]?.title}
            </h3>
            <p style={{
              fontSize: '1rem',
              opacity: 0.8,
              margin: 0,
              lineHeight: '1.5'
            }}>
              {portalScenes[currentScene]?.description}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginBottom: '4rem',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="portal-btn"
            style={{
              fontSize: '1.2rem',
              padding: '1rem 2rem',
              background: isPlaying ? 
                'linear-gradient(135deg, #ff4444, #cc0000)' : 
                'linear-gradient(135deg, var(--evil-green), var(--evil-green-dark))'
            }}
          >
            <span>{isPlaying ? '⏸️ PAUSE RITUAL' : '▶️ RESUME RITUAL'}</span>
            <div className="btn-shimmer"></div>
          </button>
          
          <button
            onClick={() => {
              setCurrentScene(0);
              setIsPlaying(true);
            }}
            className="portal-btn"
            style={{
              fontSize: '1.2rem',
              padding: '1rem 2rem'
            }}
          >
            <span>🔄 RESTART RITUAL</span>
            <div className="btn-shimmer"></div>
          </button>
        </div>

        {/* Portal Information */}
        <section className="navigation-section">
          <div className="faq-header">
            <h2 className="faq-title">🌌 Legendary Realms Await</h2>
            <p className="faq-subtitle">Discover the mystical kingdoms that will expand the Floaters multiverse</p>
          </div>
          
          <div className="nav-grid">
            <div className="nav-card" style={{
              background: 'linear-gradient(135deg, rgba(255,165,0,0.2), rgba(0,0,0,0.9))',
              border: '3px solid #FFA500'
            }}>
              <div className="card-icon" style={{ fontSize: '4rem' }}>🦍</div>
              <div className="card-content">
                <h3 className="card-title" style={{ color: '#FFA500' }}>
                  Ape Chain Kingdom
                </h3>
                <p className="card-description">
                  A realm of primal power where ancient apes guard mystical secrets and forbidden knowledge. 
                  The first legendary expansion beyond Ethereum, bringing revolutionary new gameplay mechanics 
                  and exclusive experiences for cross-chain holders who dare to explore.
                </p>
              </div>
              <div className="card-glow"></div>
            </div>

            <div className="nav-card" style={{
              background: 'linear-gradient(135deg, rgba(153,69,255,0.2), rgba(0,0,0,0.9))',
              border: '3px solid #9945FF'
            }}>
              <div className="card-icon" style={{ fontSize: '4rem' }}>⚡</div>
              <div className="card-content">
                <h3 className="card-title" style={{ color: '#9945FF' }}>
                  Solana Kingdom
                </h3>
                <p className="card-description">
                  The speed realm where lightning-fast magic flows through crystal spires and ancient towers. 
                  Ultra-fast transactions meet mystical gameplay in this high-performance dimension 
                  of the legendary Floaters multiverse experience.
                </p>
              </div>
              <div className="card-glow"></div>
            </div>

            <div className="nav-card" style={{
              background: 'linear-gradient(135deg, rgba(138,43,226,0.2), rgba(0,0,0,0.9))',
              border: '3px solid #8A2BE2'
            }}>
              <div className="card-icon" style={{ fontSize: '4rem' }}>❓</div>
              <div className="card-content">
                <h3 className="card-title" style={{ color: '#8A2BE2' }}>
                  Unknown Realm
                </h3>
                <p className="card-description">
                  A mysterious dimension shrouded in absolute secrecy and ancient magic. What blockchain will host 
                  this enigmatic realm? What legendary powers await discovery? Only time will reveal 
                  the secrets of the Unknown Realm and its mystical inhabitants...
                </p>
              </div>
              <div className="card-glow"></div>
            </div>
          </div>
        </section>

        {/* Bottom Epic Message */}
        <div className="portal-teaser" style={{
          background: 'linear-gradient(135deg, rgba(0,255,65,0.1), rgba(0,0,0,0.9))',
          border: '3px solid var(--evil-green)'
        }}>
          <div className="portal-content" style={{ gridTemplateColumns: '1fr', textAlign: 'center' }}>
            <div className="portal-text">
              <h3 className="portal-title" style={{ fontSize: '2.5rem' }}>
                🌐 The Multiverse Expands Soon...
              </h3>
              <p className="portal-description" style={{ fontSize: '1.2rem', lineHeight: '1.7' }}>
                The portals are stirring with ancient energy. New realms await brave explorers. 
                The Floaters multiverse grows stronger with each passing day, and legendary adventures 
                beyond imagination are about to unfold across multiple blockchains.
              </p>
              <p style={{ 
                fontSize: '1.1rem', 
                fontStyle: 'italic', 
                opacity: 0.8,
                marginTop: '1rem',
                color: 'var(--evil-green)'
              }}>
                Are you ready to witness the most epic expansion in NFT history?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturePortal;