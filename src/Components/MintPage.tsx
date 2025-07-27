import React, { useState } from 'react';

const MintPage: React.FC = () => {
  const [mintAmount, setMintAmount] = useState(1);
  const [isConnected, setIsConnected] = useState(false);

  const mintStats = {
    totalSupply: 7777,
    minted: 0,
    price: '0.069',
    maxPerWallet: 10
  };

  return (
    <div style={{ minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="mystical-title" style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            marginBottom: '2rem'
          }}>
            🧬 Summon Your Floater
          </h1>
          <p className="mystical-text" style={{
            fontSize: '1.2rem',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Join the mystical realm and claim your place among the 7777 chosen ones. 
            Each Floater is a unique gateway to the Floaters World universe.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem'
        }}>
          {/* Mint Interface */}
          <div>
            {/* Mint Stats */}
            <div className="mystical-card" style={{ marginBottom: '2rem' }}>
              <h2 className="mystical-title" style={{
                fontSize: '1.8rem',
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                ⚡ Summoning Statistics
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem',
                marginBottom: '2rem'
              }}>
                <div className="pixel-border" style={{
                  textAlign: 'center',
                  padding: '1rem',
                  background: 'rgba(0, 255, 65, 0.1)'
                }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#00ff41',
                    marginBottom: '0.5rem',
                    fontFamily: 'Orbitron, monospace'
                  }}>
                    {mintStats.minted.toLocaleString()}
                  </div>
                  <div className="mystical-text" style={{ fontSize: '0.9rem' }}>
                    Summoned
                  </div>
                </div>
                <div className="pixel-border" style={{
                  textAlign: 'center',
                  padding: '1rem',
                  background: 'rgba(0, 255, 65, 0.1)'
                }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#00ff41',
                    marginBottom: '0.5rem',
                    fontFamily: 'Orbitron, monospace'
                  }}>
                    {mintStats.totalSupply.toLocaleString()}
                  </div>
                  <div className="mystical-text" style={{ fontSize: '0.9rem' }}>
                    Total Supply
                  </div>
                </div>
                <div className="pixel-border" style={{
                  textAlign: 'center',
                  padding: '1rem',
                  background: 'rgba(0, 255, 65, 0.1)'
                }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#00ff41',
                    marginBottom: '0.5rem',
                    fontFamily: 'Orbitron, monospace'
                  }}>
                    {mintStats.price}
                  </div>
                  <div className="mystical-text" style={{ fontSize: '0.9rem' }}>
                    ETH Price
                  </div>
                </div>
                <div className="pixel-border" style={{
                  textAlign: 'center',
                  padding: '1rem',
                  background: 'rgba(0, 255, 65, 0.1)'
                }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#00ff41',
                    marginBottom: '0.5rem',
                    fontFamily: 'Orbitron, monospace'
                  }}>
                    {mintStats.maxPerWallet}
                  </div>
                  <div className="mystical-text" style={{ fontSize: '0.9rem' }}>
                    Max Per Wallet
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem'
                }}>
                  <span className="mystical-text" style={{ fontSize: '0.9rem' }}>
                    Summoning Progress
                  </span>
                  <span className="mystical-text" style={{ fontSize: '0.9rem' }}>
                    {((mintStats.minted / mintStats.totalSupply) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="pixel-border" style={{
                  width: '100%',
                  height: '20px',
                  background: '#333',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${(mintStats.minted / mintStats.totalSupply) * 100}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #00ff41, #00cc33)',
                    transition: 'width 1s ease'
                  }} />
                </div>
              </div>
            </div>

            {/* Mint Controls */}
            <div className="mystical-card">
              <h3 className="mystical-title" style={{
                fontSize: '1.5rem',
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                🎯 Select Amount
              </h3>

              {/* Amount Selector */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem',
                marginBottom: '2rem'
              }}>
                <button
                  onClick={() => setMintAmount(Math.max(1, mintAmount - 1))}
                  disabled={mintAmount <= 1}
                  className="pixel-border"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'rgba(0, 255, 65, 0.2)',
                    color: '#00ff41',
                    fontSize: '2rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Orbitron, monospace'
                  }}
                >
                  -
                </button>
                
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '4rem',
                    fontWeight: 'bold',
                    color: '#00ff41',
                    marginBottom: '0.5rem',
                    fontFamily: 'Orbitron, monospace'
                  }}>
                    {mintAmount}
                  </div>
                  <div className="mystical-text" style={{ fontSize: '0.9rem' }}>
                    Floater{mintAmount > 1 ? 's' : ''}
                  </div>
                </div>
                
                <button
                  onClick={() => setMintAmount(Math.min(mintStats.maxPerWallet, mintAmount + 1))}
                  disabled={mintAmount >= mintStats.maxPerWallet}
                  className="pixel-border"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'rgba(0, 255, 65, 0.2)',
                    color: '#00ff41',
                    fontSize: '2rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Orbitron, monospace'
                  }}
                >
                  +
                </button>
              </div>

              {/* Total Cost */}
              <div className="pixel-border" style={{
                background: 'rgba(0, 255, 65, 0.1)',
                padding: '1.5rem',
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                <div className="mystical-text" style={{
                  fontSize: '0.9rem',
                  marginBottom: '0.5rem'
                }}>
                  Total Summoning Cost
                </div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: '#00ff41',
                  fontFamily: 'Orbitron, monospace'
                }}>
                  {(parseFloat(mintStats.price) * mintAmount).toFixed(3)} ETH
                </div>
                <div className="mystical-text" style={{
                  fontSize: '0.8rem',
                  opacity: 0.7,
                  marginTop: '0.5rem'
                }}>
                  + gas fees
                </div>
              </div>

              {/* Mint Button */}
              {!isConnected ? (
                <button
                  onClick={() => setIsConnected(true)}
                  className="mystical-button"
                  style={{
                    width: '100%',
                    padding: '1.5rem',
                    fontSize: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  💳 Connect Wallet
                </button>
              ) : (
                <button
                  className="mystical-button"
                  style={{
                    width: '100%',
                    padding: '1.5rem',
                    fontSize: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  ⚡ Summon {mintAmount} Floater{mintAmount > 1 ? 's' : ''}
                </button>
              )}

              {/* Status */}
              <div style={{
                textAlign: 'center',
                marginTop: '1rem'
              }}>
                <p className="mystical-text" style={{
                  fontSize: '0.9rem',
                  opacity: 0.7
                }}>
                  🔮 Summoning ritual is currently paused - Coming Soon!
                </p>
              </div>
            </div>
          </div>

          {/* Preview & Features */}
          <div>
            {/* Preview */}
            <div className="mystical-card" style={{
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              <h3 className="mystical-title" style={{
                fontSize: '1.5rem',
                marginBottom: '2rem'
              }}>
                👁️ Preview Gallery
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                {['/2nd_draft_5-1.gif', '/2nd_draft_211-1.gif', '/2nd_draft_7-1.gif', '/2nd_draft_3-1.gif'].map((image, index) => (
                  <div
                    key={index}
                    className="pixel-border"
                    style={{
                      aspectRatio: '1',
                      background: 'linear-gradient(135deg, rgba(0,255,65,0.1), rgba(45,27,105,0.1))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <img
                      src={image}
                      alt={`Floater Preview ${index + 1}`}
                      className="pixelated"
                      style={{ width: '80%', height: '80%', objectFit: 'contain' }}
                    />
                  </div>
                ))}
              </div>
              
              <p className="mystical-text" style={{
                fontSize: '0.9rem',
                opacity: 0.8
              }}>
                Your actual Floater will be revealed after summoning completion
              </p>
            </div>

            {/* Features */}
            <div className="mystical-card">
              <h3 className="mystical-title" style={{
                fontSize: '1.5rem',
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                ✨ What You Receive
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  {
                    icon: '🎨',
                    title: 'Hand-Crafted Art',
                    description: 'No AI generation - pure artistic vision'
                  },
                  {
                    icon: '⚡',
                    title: '6-Frame Animation',
                    description: '60x69px animated pixel perfection'
                  },
                  {
                    icon: '👥',
                    title: 'Exclusive Access',
                    description: 'Token-gated Floaters World entry'
                  },
                  {
                    icon: '🔮',
                    title: 'Post-Summon Reveal',
                    description: 'Discover your mystical being after summoning'
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="pixel-border"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      padding: '1rem',
                      background: 'rgba(0, 255, 65, 0.05)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 255, 65, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 255, 65, 0.05)';
                    }}
                  >
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'rgba(0, 255, 65, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      flexShrink: 0
                    }}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="mystical-title" style={{
                        fontSize: '1.1rem',
                        marginBottom: '0.5rem'
                      }}>
                        {feature.title}
                      </h4>
                      <p className="mystical-text" style={{
                        fontSize: '0.9rem',
                        opacity: 0.8
                      }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintPage;