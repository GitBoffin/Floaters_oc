import React, { useState } from 'react';

interface LoreBookProps {
  setActivePage: (page: string) => void;
}

const LoreBook: React.FC<LoreBookProps> = ({ setActivePage }) => {
  const [activeTab, setActiveTab] = useState('traits');
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [mapZoomed, setMapZoomed] = useState(false);

  const traits = [
    {
      name: 'Spectral Guardian',
      rarity: 'Legendary',
      description: 'A mystical protector woven from the essence of ancient magic, granting its bearer the ability to guard the mystical realms.',
      lore: 'Forged by the Guardian Spirits of the Ethereal Realm, this form has protected countless souls through the darkest of times.',
      image: '/good_guy1-2.gif'
    },
    {
      name: 'Dark Summoner',
      rarity: 'Epic',
      description: 'The haunting presence of Vhar\'zhul, bearing the marks of ancient corruption and otherworldly power.',
      lore: 'Those who encounter this dark entity risk losing themselves to the whispers of the void and eternal darkness.',
      image: '/bad_guy2-2.gif'
    },
    {
      name: 'Soul Vessel',
      rarity: 'Mythic',
      description: 'A container for the essence of fallen warriors, pulsing with trapped souls seeking release.',
      lore: 'Each vessel holds the memories and power of those who came before, waiting to be unleashed upon the world.',
      image: '/4.gif'
    },
    {
      name: 'Cursed Relic',
      rarity: 'Legendary',
      description: 'The Soul of Krixis - a blade that radiates foul will and whispers to the desperate.',
      lore: 'Once wielded by Krixis, harbinger of chaos. The blade cannot be wielded without cost to one\'s very soul.',
      image: '/Soul_of_Krixis1.gif'
    }
  ];

  const kingdoms = [
    {
      name: 'ETH Kingdom',
      status: 'active',
      description: 'The birthplace of Floaters, where 7777 souls first awakened to their mystical destiny.',
      color: '#00FF41'
    },
    {
      name: 'Solana Kingdom',
      status: 'coming-soon',
      description: 'The speed realm, where lightning-fast magic flows through crystal spires and ancient towers.',
      color: '#9945FF'
    },
    {
      name: 'ApeChain Kingdom',
      status: 'coming-soon',
      description: 'A realm of primal power, where ancient apes guard mystical secrets and forbidden knowledge.',
      color: '#FFA500'
    },
    {
      name: '??? Kingdom',
      status: 'mystery',
      description: 'Unknown realm shrouded in mystery, waiting to be discovered by the brave...',
      color: '#8A2BE2'
    }
  ];

  const characters = [
    {
      name: 'Draxix',
      role: 'Lead Developer & Dark Summoner',
      avatar: '/bad_guy2-2.gif',
      message: "Building in Web3 isn't just about code—it's about creating worlds where communities can truly own their digital experiences. Every line of code in Floaters World is written with the belief that decentralization empowers creators and collectors alike. We're not just building an NFT project; we're crafting a living universe where your ownership means something real and lasting."
    },
    {
      name: 'Rotebal',
      role: 'Lead Artist & Pixel Mystic',
      avatar: '/good_guy1-2.gif',
      message: "Pixel art is more than nostalgia—it's pure artistic expression distilled to its essence. Each Floater is hand-crafted with love, no AI shortcuts. In a world of generated content, we choose the human touch. Every 60x69 pixel canvas tells a story, every 6-frame animation breathes life into these mystical beings. Art is the soul of any great project, and we pour our souls into every pixel."
    },
    {
      name: 'Krixis',
      role: 'Community Manager & Soul Keeper',
      avatar: '/4.gif',
      message: "Web3 communities are the heart of every successful project. I believe in transparent communication, genuine engagement, and building something that lasts beyond market cycles. Together, we're not just holders—we're world builders. Your voice matters, your ideas shape our realm, and your presence makes this universe stronger. The future belongs to communities that build together."
    }
  ];

  const storyPages = [
    {
      left: "In the beginning, there was only void...",
      right: "A darkness so complete that even the concept of light had not yet been born into existence."
    },
    {
      left: "Draxix discovered the ancient portal...",
      right: "Hidden beneath layers of forgotten magic, pulsing with otherworldly energy that called to him."
    },
    {
      left: "The first Floaters emerged from shadow...",
      right: "7777 souls awakened, each carrying a fragment of the eternal darkness within their essence."
    },
    {
      left: "An undead army began to rise...",
      right: "Bound by ancient pacts and driven by purposes beyond mortal understanding or comprehension."
    },
    {
      left: "Magic flowed through digital realms...",
      right: "Bridging the gap between the mystical and the technological, creating something entirely new."
    }
  ];

  const renderTraitsTab = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div className="faq-header">
        <h2 className="faq-title">⚔️ Traits & Ancient Lore</h2>
        <p className="faq-subtitle">Discover the mystical beings and their legendary powers</p>
      </div>
      
      <div className="nav-grid">
        {traits.map((trait, index) => (
          <div key={index} className="nav-card" style={{
            background: `linear-gradient(135deg, rgba(0,0,0,0.9), ${
              trait.rarity === 'Legendary' ? 'rgba(255,215,0,0.1)' :
              trait.rarity === 'Mythic' ? 'rgba(138,43,226,0.1)' :
              trait.rarity === 'Epic' ? 'rgba(128,0,128,0.1)' :
              'rgba(0,100,255,0.1)'
            })`
          }}>
            <div className="card-icon">
              <img
                src={trait.image}
                alt={trait.name}
                className="pixelated"
                style={{
                  width: '120px',
                  height: '120px',
                  border: '3px solid var(--evil-green)',
                  borderRadius: '10px',
                  animation: 'heroFloat 3s ease-in-out infinite'
                }}
              />
            </div>
            <div className="card-content">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <h3 className="card-title" style={{ fontSize: '1.3rem' }}>
                  {trait.name}
                </h3>
                <span style={{
                  padding: '4px 12px',
                  background: trait.rarity === 'Legendary' ? '#FFD700' :
                            trait.rarity === 'Mythic' ? '#8A2BE2' :
                            trait.rarity === 'Epic' ? '#800080' : '#0064FF',
                  color: '#000',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  borderRadius: '4px'
                }}>
                  {trait.rarity}
                </span>
              </div>
              <p className="card-description" style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                {trait.description}
              </p>
              <div style={{
                padding: '1rem',
                background: 'rgba(0,255,65,0.05)',
                border: '1px solid rgba(0,255,65,0.2)',
                borderRadius: '8px'
              }}>
                <h4 style={{ 
                  color: 'var(--evil-green)', 
                  fontSize: '1rem', 
                  marginBottom: '0.5rem',
                  fontFamily: 'var(--font-fantasy)'
                }}>
                  Ancient Lore:
                </h4>
                <p style={{ 
                  fontSize: '0.9rem', 
                  opacity: 0.8, 
                  lineHeight: '1.5',
                  fontStyle: 'italic'
                }}>
                  {trait.lore}
                </p>
              </div>
            </div>
            <div className="card-glow"></div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMapTab = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div className="faq-header">
        <h2 className="faq-title">🗺️ Mystical Realm Map</h2>
        <p className="faq-subtitle">Explore the interconnected kingdoms of the Floaters multiverse</p>
      </div>
      
      <div className="relic-container" style={{
        height: mapZoomed ? '700px' : '500px',
        background: `
          linear-gradient(135deg, rgba(139,69,19,0.3), rgba(0,0,0,0.9)),
          url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L20,0 L20,20 L0,20 Z M40,40 L60,40 L60,60 L40,60 Z' fill='%238B4513' opacity='0.1'/%3E%3C/svg%3E")
        `,
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.5s ease',
        cursor: 'pointer'
      }}
      onClick={() => setMapZoomed(!mapZoomed)}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          height: '100%',
          gap: '2rem',
          padding: '2rem',
          transform: mapZoomed ? 'scale(1.2)' : 'scale(1)',
          transition: 'transform 0.5s ease'
        }}>
          {kingdoms.map((kingdom, index) => (
            <div
              key={index}
              style={{
                background: kingdom.status === 'active' ? 
                  `linear-gradient(135deg, ${kingdom.color}20, rgba(0,0,0,0.8))` :
                  'linear-gradient(135deg, rgba(128,128,128,0.2), rgba(0,0,0,0.8))',
                border: `3px solid ${kingdom.status === 'active' ? kingdom.color : '#666'}`,
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                opacity: kingdom.status === 'active' ? 1 : 0.7,
                padding: '1rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = `0 0 30px ${kingdom.color}50`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '1rem',
                color: kingdom.status === 'active' ? kingdom.color : '#666',
                fontFamily: 'var(--font-fantasy)',
                textAlign: 'center'
              }}>
                {kingdom.name}
              </h3>
              <p style={{
                fontSize: '0.9rem',
                textAlign: 'center',
                opacity: 0.8,
                lineHeight: '1.4',
                color: 'var(--white)'
              }}>
                {kingdom.description}
              </p>
              {kingdom.status !== 'active' && (
                <span style={{
                  marginTop: '1rem',
                  padding: '4px 8px',
                  background: kingdom.status === 'mystery' ? 'rgba(138,43,226,0.2)' : 'rgba(255,165,0,0.2)',
                  border: `1px solid ${kingdom.status === 'mystery' ? '#8A2BE2' : '#FFA500'}`,
                  color: kingdom.status === 'mystery' ? '#8A2BE2' : '#FFA500',
                  fontSize: '0.8rem',
                  borderRadius: '4px',
                  fontWeight: 'bold'
                }}>
                  {kingdom.status === 'mystery' ? 'MYSTERY' : 'COMING SOON'}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button 
          onClick={() => setMapZoomed(!mapZoomed)}
          className="portal-btn"
          style={{ fontSize: '1.1rem' }}
        >
          <span>{mapZoomed ? '🔍 ZOOM OUT' : '🔍 ZOOM MAP'}</span>
          <div className="btn-shimmer"></div>
        </button>
      </div>
    </div>
  );

  const renderCharactersTab = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div className="faq-header">
        <h2 className="faq-title">👥 Team Legends</h2>
        <p className="faq-subtitle">Meet the masterminds behind the Floaters World universe</p>
      </div>
      
      <div className="nav-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
        {characters.map((character, index) => (
          <div key={index} className="nav-card" style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,255,65,0.05))',
            minHeight: '300px'
          }}>
            <div className="card-icon">
              <img
                src={character.avatar}
                alt={character.name}
                className="pixelated"
                style={{
                  width: '100px',
                  height: '100px',
                  border: '3px solid var(--evil-green)',
                  borderRadius: '10px',
                  animation: 'heroFloat 3s ease-in-out infinite'
                }}
              />
            </div>
            <div className="card-content">
              <h3 className="card-title" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                {character.name}
              </h3>
              <p style={{ 
                fontSize: '0.9rem', 
                opacity: 0.8, 
                marginBottom: '1rem',
                color: 'var(--evil-green)'
              }}>
                {character.role}
              </p>
              <div style={{
                padding: '1.5rem',
                background: 'rgba(0,255,65,0.05)',
                border: '1px solid rgba(0,255,65,0.2)',
                borderRadius: '8px'
              }}>
                <p style={{
                  lineHeight: '1.7',
                  fontStyle: 'italic',
                  fontSize: '0.95rem'
                }}>
                  "{character.message}"
                </p>
              </div>
            </div>
            <div className="card-glow"></div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStorybookTab = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div className="faq-header">
        <h2 className="faq-title">📕 Ancient Chronicles</h2>
        <p className="faq-subtitle">The legendary tales of the Floaters World</p>
      </div>
      
      {!isBookOpen ? (
        <div
          onClick={() => setIsBookOpen(true)}
          className="relic-container"
          style={{
            width: '100%',
            maxWidth: '500px',
            height: '400px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, #8B4513, #A0522D)',
            border: '4px solid var(--evil-green)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 0 40px rgba(0,255,65,0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <img
            src="/Soul_of_Krixis1.gif"
            alt="Lore Book Cover"
            className="pixelated"
            style={{
              width: '150px',
              height: '150px',
              marginBottom: '2rem',
              animation: 'heroFloat 3s ease-in-out infinite'
            }}
          />
          <h3 style={{ 
            fontSize: '1.8rem', 
            color: 'var(--evil-green)',
            fontFamily: 'var(--font-fantasy)',
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
            The Chronicles of Floaters
          </h3>
          <p style={{ 
            marginTop: '1rem', 
            opacity: 0.8,
            textAlign: 'center',
            fontSize: '1.1rem'
          }}>
            Click to open the ancient tome
          </p>
        </div>
      ) : (
        <div className="relic-container" style={{
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto',
          background: 'linear-gradient(135deg, #F5F5DC, #DDBF94)',
          border: '4px solid #8B4513',
          color: '#000',
          minHeight: '600px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            height: '500px',
            gap: '2rem'
          }}>
            {/* Left Page */}
            <div style={{
              padding: '2rem',
              borderRight: '2px solid #8B4513',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <h4 style={{
                fontFamily: 'var(--font-fantasy)',
                fontSize: '1.2rem',
                marginBottom: '1rem',
                color: '#8B4513'
              }}>
                Chapter {currentPage + 1}
              </h4>
              <p style={{
                fontFamily: 'var(--font-fantasy)',
                lineHeight: '1.8',
                fontSize: '1.1rem',
                color: '#2F2F2F'
              }}>
                {storyPages[currentPage]?.left}
              </p>
            </div>
            
            {/* Right Page */}
            <div style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <h4 style={{
                fontFamily: 'var(--font-fantasy)',
                fontSize: '1.2rem',
                marginBottom: '1rem',
                color: '#8B4513'
              }}>
                Chapter {currentPage + 2}
              </h4>
              <p style={{
                fontFamily: 'var(--font-fantasy)',
                lineHeight: '1.8',
                fontSize: '1.1rem',
                color: '#2F2F2F'
              }}>
                {storyPages[currentPage]?.right || "The story continues..."}
              </p>
            </div>
          </div>
          
          {/* Page Controls */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
            borderTop: '2px solid #8B4513'
          }}>
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              style={{
                padding: '8px 16px',
                background: currentPage === 0 ? '#666' : 'linear-gradient(135deg, #8B4513, #A0522D)',
                color: '#FFF',
                border: 'none',
                borderRadius: '4px',
                cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
                fontSize: '0.9rem'
              }}
            >
              ← Previous
            </button>
            
            <span style={{ 
              color: '#8B4513', 
              fontFamily: 'var(--font-fantasy)',
              fontSize: '1rem'
            }}>
              Page {currentPage + 1} / {storyPages.length}
            </span>
            
            <button
              onClick={() => setCurrentPage(Math.min(storyPages.length - 1, currentPage + 1))}
              disabled={currentPage >= storyPages.length - 1}
              style={{
                padding: '8px 16px',
                background: currentPage >= storyPages.length - 1 ? '#666' : 'linear-gradient(135deg, #8B4513, #A0522D)',
                color: '#FFF',
                border: 'none',
                borderRadius: '4px',
                cursor: currentPage >= storyPages.length - 1 ? 'not-allowed' : 'pointer',
                fontSize: '0.9rem'
              }}
            >
              Next →
            </button>
          </div>
        </div>
      )}
      
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        {isBookOpen && (
          <button
            onClick={() => setIsBookOpen(false)}
            className="portal-btn"
            style={{ fontSize: '1rem' }}
          >
            <span>📖 CLOSE BOOK</span>
            <div className="btn-shimmer"></div>
          </button>
        )}
      </div>
    </div>
  );

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
              <div className="emblem-inner">L</div>
              <div className="emblem-glow"></div>
            </div>
            <div className="logo-text">
              <h1 className="project-title">LORE BOOK</h1>
              <div className="subtitle-container">
                <p className="animated-subtitle">
                  Ancient Knowledge Awaits
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

        {/* Legendary Tabs */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '3rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {[
            { id: 'traits', label: 'TRAITS & LORE', icon: '⚔️' },
            { id: 'map', label: 'REALM MAP', icon: '🗺️' },
            { id: 'characters', label: 'TEAM LEGENDS', icon: '👥' },
            { id: 'storybook', label: 'CHRONICLES', icon: '📕' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="legendary-wallet-btn"
              style={{
                background: activeTab === tab.id ? 
                  'linear-gradient(135deg, var(--evil-green), var(--evil-green-dark))' : 
                  'linear-gradient(135deg, rgba(0,255,65,0.2), rgba(0,0,0,0.8))',
                color: activeTab === tab.id ? '#000' : 'var(--evil-green)',
                fontSize: '1rem',
                padding: '12px 20px'
              }}
            >
              <span className="btn-icon">{tab.icon}</span>
              <span className="btn-text">{tab.label}</span>
              <div className="btn-glow"></div>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'traits' && renderTraitsTab()}
          {activeTab === 'map' && renderMapTab()}
          {activeTab === 'characters' && renderCharactersTab()}
          {activeTab === 'storybook' && renderStorybookTab()}
        </div>
      </div>
    </div>
  );
};

export default LoreBook;