import React, { useState } from 'react';

interface RoadmapProps {
  setActivePage: (page: string) => void;
}

const Roadmap: React.FC<RoadmapProps> = ({ setActivePage }) => {
  const [showPortalScene, setShowPortalScene] = useState(false);

  const roadmapPhases = [
    {
      phase: "PRE-MINT",
      title: "The Genesis",
      icon: "🎨",
      status: "active",
      items: [
        "7777 unique Floaters - Hand-crafted pixel art mastery",
        "60x69 pixels, 6-frame animated traits perfection",
        "Zero AI generation - Pure artistic vision and soul",
        "Bueno NFT platform integration for seamless experience",
        "ETH blockchain summoning ritual preparation"
      ]
    },
    {
      phase: "MINT",
      title: "The Summoning",
      icon: "⚡",
      status: "coming-soon",
      items: [
        "7777 Floaters summoned to ETH realm simultaneously",
        "Post-mint reveal system with mystical unveiling",
        "Bueno Engine no-code platform deployment",
        "Unique perks through revolutionary minting process",
        "Community formation and legendary bond creation"
      ]
    },
    {
      phase: "POST-MINT",
      title: "World Building",
      icon: "🌐",
      status: "planned",
      items: [
        "Interactive Bueno World engine launches globally",
        "Token-gated areas and exclusive mystical access",
        "Holder-only events and legendary giveaways",
        "Community voting and decentralized governance",
        "World editing privileges for active legendary members"
      ]
    },
    {
      phase: "EXPANSION",
      title: "Portal Opening",
      icon: "🌀",
      status: "planned",
      items: [
        "Ape Chain Kingdom portal activation sequence",
        "Solana realm gateway opens to new dimensions",
        "Cross-chain Floater experiences and adventures",
        "Multi-realm governance system implementation",
        "Expanded world-building tools for creators"
      ]
    },
    {
      phase: "EVOLUTION",
      title: "Community Power",
      icon: "👑",
      status: "planned",
      items: [
        "Full community world editing capabilities",
        "Mod and admin building privileges unlocked",
        "Custom NPC and quest creation systems",
        "Voice message integration for immersion",
        "Advanced permissioned tracking system"
      ]
    },
    {
      phase: "MYSTERY",
      title: "Unknown Realm",
      icon: "❓",
      status: "mystery",
      items: [
        "Secret chain integration awaiting discovery",
        "Hidden portal activation by community",
        "Mysterious new features beyond imagination",
        "Community-driven discoveries and exploration",
        "The legend continues into the unknown..."
      ]
    }
  ];

  return (
    <div className="legendary-homepage">
      {/* Mystical Particles */}
      <div className="mystical-particles">
        {[...Array(25)].map((_, i) => (
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
              <div className="emblem-inner">R</div>
              <div className="emblem-glow"></div>
            </div>
            <div className="logo-text">
              <h1 className="project-title">ROADMAP & WHITEPAPER</h1>
              <div className="subtitle-container">
                <p className="animated-subtitle">
                  The Path to Legendary Expansion
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

        {/* Introduction */}
        <div className="relic-container" style={{
          marginBottom: '4rem',
          background: 'linear-gradient(135deg, rgba(139,69,19,0.3), rgba(0,0,0,0.9))',
          border: '3px solid #8B4513'
        }}>
          <div className="relic-header">
            <div className="relic-icon">
              <img
                src="/Soul_of_Krixis1.gif"
                alt="Roadmap Relic"
                className="relic-image pixelated"
                style={{ filter: 'drop-shadow(0 0 20px #8B4513)' }}
              />
              <div className="relic-aura" style={{ background: 'radial-gradient(circle, rgba(139, 69, 19, 0.3), transparent)' }}></div>
            </div>
            <div className="relic-title-section">
              <h2 className="relic-title" style={{ color: '#8B4513' }}>
                The Floaters Manifesto
              </h2>
              <p className="relic-subtitle">
                "What do you plan to do after mint?"
              </p>
            </div>
          </div>
          
          <div className="relic-content">
            <div style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              <p style={{ marginBottom: '1.5rem' }}>
                <strong>First off, let's start with pre-mint.</strong> The project starts with our love for animation and pixel art. 
                First and foremost, we take pride in the art we make - each trait is 6 frames, 60x69 pixels, 
                <strong> non-AI generated masterpieces</strong>.
              </p>
              
              <p style={{ marginBottom: '1.5rem' }}>
                We plan to summon <strong>7777 Floaters</strong> onto the ETH blockchain through 
                <strong> Bueno NFT</strong> - a revolutionary no-coding platform for artists 
                and NFT creators that offers unique perks through an advanced minting experience.
              </p>
              
              <p style={{ marginBottom: '1.5rem' }}>
                Once mint is complete, we're not vanishing or sitting around — we're building out 
                a <strong>fully interactive world</strong> using Bueno's cutting-edge no-code world engine. 
                This isn't some gimmick or weak metaverse copy. This is going to be a browser-based, 
                drag-and-drop universe where holders can log in, explore realms, access areas based on 
                their NFTs, and interact with elements that actually matter.
              </p>
              
              <p>
                <strong>Bottom line:</strong> this world is the project's core after mint. 
                It's where we\'ll drop updates, host legendary events, and give real value to holders. 
                No roadmap hype, just pure execution. If you're holding, you\'re part of the legend.
              </p>
            </div>
          </div>
        </div>

        {/* Roadmap Phases */}
        <section className="navigation-section">
          <div className="faq-header">
            <h2 className="faq-title">🗺️ The Legendary Journey</h2>
            <p className="faq-subtitle">Six phases of world-building excellence</p>
          </div>
          
          <div className="nav-grid">
            {roadmapPhases.map((phase, index) => (
              <div
                key={index}
                className="nav-card"
                style={{
                  background: phase.status === 'active' ? 
                    'linear-gradient(135deg, rgba(0,255,65,0.2), rgba(0,0,0,0.9))' :
                    phase.status === 'mystery' ?
                    'linear-gradient(135deg, rgba(138,43,226,0.2), rgba(0,0,0,0.9))' :
                    'linear-gradient(135deg, rgba(0,0,0,0.9), rgba(47,47,47,0.3))',
                  border: `3px solid ${
                    phase.status === 'active' ? 'var(--evil-green)' :
                    phase.status === 'mystery' ? '#8A2BE2' :
                    '#2F2F2F'
                  }`,
                  opacity: phase.status === 'active' ? 1 : 0.9,
                  minHeight: '400px'
                }}
              >
                <div className="card-icon" style={{
                  fontSize: '4rem',
                  animation: phase.status === 'active' ? 'heroFloat 2s ease-in-out infinite' : 'none'
                }}>
                  {phase.icon}
                </div>
                
                <div className="card-content">
                  <div style={{
                    fontSize: '0.9rem',
                    color: phase.status === 'active' ? 'var(--evil-green)' :
                           phase.status === 'mystery' ? '#8A2BE2' : '#666',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    textAlign: 'center'
                  }}>
                    {phase.phase}
                  </div>
                  
                  <h3 className="card-title" style={{
                    fontSize: '1.4rem',
                    color: phase.status === 'active' ? 'var(--evil-green)' :
                           phase.status === 'mystery' ? '#8A2BE2' : '#FFF',
                    marginBottom: '1rem'
                  }}>
                    {phase.title}
                  </h3>
                  
                  <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        marginBottom: '0.75rem',
                        fontSize: '0.9rem',
                        lineHeight: '1.5'
                      }}>
                        <span style={{ 
                          color: phase.status === 'active' ? 'var(--evil-green)' :
                                 phase.status === 'mystery' ? '#8A2BE2' : '#666',
                          flexShrink: 0,
                          fontWeight: 'bold'
                        }}>
                          •
                        </span>
                        <span style={{
                          opacity: phase.status === 'active' ? 1 : 0.8
                        }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {phase.status !== 'active' && (
                    <div style={{
                      marginTop: '1rem',
                      padding: '0.5rem 1rem',
                      background: phase.status === 'mystery' ? 
                        'rgba(138,43,226,0.2)' : 'rgba(255,165,0,0.2)',
                      border: `1px solid ${phase.status === 'mystery' ? '#8A2BE2' : '#FFA500'}`,
                      borderRadius: '6px',
                      textAlign: 'center',
                      fontSize: '0.8rem',
                      color: phase.status === 'mystery' ? '#8A2BE2' : '#FFA500',
                      fontWeight: 'bold'
                    }}>
                      {phase.status === 'mystery' ? 'MYSTERY AWAITS' : 'COMING SOON'}
                    </div>
                  )}
                </div>
                <div className="card-glow"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Portal Animation Section */}
        <div className="portal-teaser" style={{ marginBottom: '3rem' }}>
          <div className="portal-content">
            <div className="portal-visual">
              <div className="portal-ring">
                <div className="portal-inner"></div>
                <div className="portal-particles">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="portal-particle"
                      style={{
                        transform: `rotate(${i * 45}deg) translateX(60px)`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="portal-text">
              <h3 className="portal-title">🌀 Future Portal Animation</h3>
              <p className="portal-description">
                Watch as Draxix opens mystical portals to new realms. Each chain expansion 
                will be accompanied by epic pixel animations showing the legendary journey 
                between worlds and dimensions.
              </p>
              <button
                onClick={() => setShowPortalScene(true)}
                className="portal-btn"
              >
                <span>🌀 PREVIEW PORTAL SCENE</span>
                <div className="btn-shimmer"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Portal Scene Modal */}
        {showPortalScene && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}>
            <div className="relic-container" style={{
              maxWidth: '900px',
              width: '100%',
              position: 'relative',
              background: 'linear-gradient(135deg, rgba(138,43,226,0.3), rgba(0,0,0,0.9))'
            }}>
              <button
                onClick={() => setShowPortalScene(false)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(255, 0, 0, 0.2)',
                  border: '2px solid #ff4444',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  color: '#ff4444',
                  cursor: 'pointer',
                  fontSize: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ✕
              </button>

              <div className="relic-header" style={{ marginBottom: '2rem' }}>
                <div className="relic-title-section" style={{ textAlign: 'center' }}>
                  <h2 className="relic-title" style={{ color: '#8A2BE2' }}>
                    🌀 Legendary Portal Scene
                  </h2>
                  <p className="relic-subtitle">
                    Witness the expansion of the Floaters multiverse
                  </p>
                </div>
              </div>

              <div style={{
                width: '100%',
                height: '400px',
                background: 'linear-gradient(135deg, rgba(0,0,0,0.9), rgba(138,43,226,0.3))',
                border: '3px solid #8A2BE2',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Draxix */}
                <div style={{
                  position: 'absolute',
                  left: '10%',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  animation: 'heroFloat 2s ease-in-out infinite'
                }}>
                  <img
                    src="/bad_guy2-2.gif"
                    alt="Draxix"
                    className="pixelated"
                    style={{ 
                      width: '150px', 
                      height: '150px',
                      filter: 'brightness(1.5) drop-shadow(0 0 30px #8A2BE2)'
                    }}
                  />
                </div>

                {/* Central Vortex */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(138,43,226,0.8), rgba(0,255,65,0.4), transparent)',
                  borderRadius: '50%',
                  animation: 'ringRotate 3s linear infinite'
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: '20px',
                    background: 'radial-gradient(circle, rgba(0,0,0,0.8), transparent)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem'
                  }}>
                    🌀
                  </div>
                </div>

                {/* Portals */}
                <div style={{
                  position: 'absolute',
                  right: '15%',
                  top: '20%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem'
                }}>
                  {/* Ape Chain Portal */}
                  <div style={{
                    width: '100px',
                    height: '100px',
                    background: 'radial-gradient(circle, rgba(255,165,0,0.8), transparent)',
                    borderRadius: '50%',
                    animation: 'emblemPulse 1.5s infinite',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    border: '3px solid #FFA500'
                  }}>
                    🦍
                  </div>
                  
                  {/* Solana Portal */}
                  <div style={{
                    width: '100px',
                    height: '100px',
                    background: 'radial-gradient(circle, rgba(153,69,255,0.8), transparent)',
                    borderRadius: '50%',
                    animation: 'emblemPulse 2s infinite',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    border: '3px solid #9945FF'
                  }}>
                    ⚡
                  </div>
                </div>

                {/* Energy Beams */}
                <div style={{
                  position: 'absolute',
                  left: '35%',
                  top: '35%',
                  width: '25%',
                  height: '4px',
                  background: 'linear-gradient(90deg, #8A2BE2, #FFA500)',
                  animation: 'pixelShimmer 2s infinite',
                  transform: 'rotate(-15deg)'
                }} />
                <div style={{
                  position: 'absolute',
                  left: '35%',
                  top: '65%',
                  width: '25%',
                  height: '4px',
                  background: 'linear-gradient(90deg, #8A2BE2, #9945FF)',
                  animation: 'pixelShimmer 2.5s infinite',
                  transform: 'rotate(15deg)'
                }} />
              </div>

              <div className="relic-content">
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  textAlign: 'center'
                }}>
                  Draxix channels his dark magic to open portals between realms. 
                  Watch as the Ape Chain and Solana kingdoms flicker into existence, 
                  ready to welcome new Floaters to their mystical domains.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <button 
                    className="portal-btn"
                    onClick={() => setShowPortalScene(false)}
                  >
                    <span>Close Scene</span>
                    <div className="btn-shimmer"></div>
                  </button>
                  <button 
                    className="portal-btn"
                    onClick={() => setActivePage('portal')}
                    style={{
                      background: 'linear-gradient(135deg, #8A2BE2, #4B0082)'
                    }}
                  >
                    <span>🌐 Enter Portal World</span>
                    <div className="btn-shimmer"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '2rem',
            opacity: 0.9,
            fontFamily: 'var(--font-fantasy)'
          }}>
            Ready to join the legendary realm and shape the future?
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setActivePage('gallery')}
              className="portal-btn"
              style={{ fontSize: '1.1rem' }}
            >
              <span>🖼️ VIEW GALLERY</span>
              <div className="btn-shimmer"></div>
            </button>
            <button 
              onClick={() => setActivePage('lore')}
              className="portal-btn"
              style={{ fontSize: '1.1rem' }}
            >
              <span>📖 READ LORE</span>
              <div className="btn-shimmer"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;