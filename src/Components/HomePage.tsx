import React, { useState, useEffect } from 'react';

interface HomePageProps {
  setActivePage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setActivePage }) => {
  const [isRelicExpanded, setIsRelicExpanded] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const heroTexts = [
    "Enter the Mystical Blockchain Universe",
    "7777 Hand-Crafted Pixel Spirits Await",
    "Where Ancient Magic Meets Web3 Technology",
    "Build Your Legend in the Floaters World"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroTexts.length]);

  const faqs = [
    {
      question: "What are Floaters?",
      answer: "Floaters are 7777 unique pixel art ghosts, each hand-drawn with 6 frames of animation at 60x69 pixels. No AI generation - pure artistic craftsmanship."
    },
    {
      question: "What is the First Relic?",
      answer: "The Soul of Krixis is a cursed blade that serves as the foundation of the Floaters universe, binding all spirits to the ethereal realm."
    },
    {
      question: "Do I need an NFT to access lore?",
      answer: "Basic lore is accessible to all visitors. However, NFT holders will gain access to exclusive areas and interactive features in the post-mint world."
    },
    {
      question: "What is Bueno NFT?",
      answer: "Bueno is a no-code platform for artists and NFT creators that offers unique perks through minting and world-building capabilities."
    },
    {
      question: "Why Evil Green?",
      answer: "Evil Green (#00FF41) represents the otherworldly energy that flows through the Floaters realm - a signature color of spectral power."
    },
    {
      question: "Will more chains be added?",
      answer: "Yes! The roadmap includes expansion to Solana, Ape Chain, and mysterious unknown realms through mystical portals."
    }
  ];

  return (
    <div className="legendary-homepage">
      {/* Mystical Particles */}
      <div className="mystical-particles">
        {[...Array(12)].map((_, i) => (
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
                <p className="animated-subtitle" key={currentTextIndex}>
                  {heroTexts[currentTextIndex]}
                </p>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => setActivePage('wallet')}
            className="legendary-wallet-btn"
          >
            <span className="btn-icon">💳</span>
            <span className="btn-text">CONNECT WALLET</span>
            <div className="btn-glow"></div>
          </button>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-character">
              <div className="character-frame">
                <img
                  src="/bad_guy2-2.gif"
                  alt="Vhar'zhul"
                  className="hero-image pixelated"
                />
                <div className="character-aura"></div>
                <div className="character-ring"></div>
              </div>
            </div>
            
            <div className="hero-text">
              <h2 className="hero-title">
                The Dark Summoner Awaits
              </h2>
              <p className="hero-description">
                Vhar'zhul has opened the portals between realms. 7777 mystical beings 
                now float between dimensions, each carrying ancient powers and untold stories. 
                Will you claim your place among the chosen?
              </p>
              
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">7777</div>
                  <div className="stat-label">Unique Spirits</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">60×69</div>
                  <div className="stat-label">Pixel Art</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">6</div>
                  <div className="stat-label">Frame Animation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Grid */}
        <section className="navigation-section">
          <div className="nav-grid">
            <button 
              className="nav-card gallery-card"
              onClick={() => setActivePage('gallery')}
            >
              <div className="card-icon">🖼️</div>
              <div className="card-content">
                <h3 className="card-title">GALLERY</h3>
                <p className="card-description">Discover the mystical collection</p>
              </div>
              <div className="card-glow"></div>
            </button>
            
            <button 
              className="nav-card lore-card"
              onClick={() => setActivePage('lore')}
            >
              <div className="card-icon">📖</div>
              <div className="card-content">
                <h3 className="card-title">LORE BOOK</h3>
                <p className="card-description">Uncover ancient secrets</p>
              </div>
              <div className="card-glow"></div>
            </button>
            
            <button 
              className="nav-card roadmap-card"
              onClick={() => setActivePage('roadmap')}
            >
              <div className="card-icon">📜</div>
              <div className="card-content">
                <h3 className="card-title">WHITEPAPER</h3>
                <p className="card-description">The path to expansion</p>
              </div>
              <div className="card-glow"></div>
            </button>
            
            <button 
              className="nav-card community-card"
              onClick={() => setActivePage('community')}
            >
              <div className="card-icon">💬</div>
              <div className="card-content">
                <h3 className="card-title">COMMUNITY</h3>
                <p className="card-description">Join the mystical realm</p>
              </div>
              <div className="card-glow"></div>
            </button>
          </div>
        </section>

        {/* First Relic Section */}
        <section className="relic-section">
          <div className="relic-container">
            <div className="relic-header">
              <div className="relic-icon">
                <img
                  src="/Soul_of_Krixis1.gif"
                  alt="Soul of Krixis"
                  className="relic-image pixelated"
                />
                <div className="relic-aura"></div>
              </div>
              <div className="relic-title-section">
                <h2 className="relic-title">The First Relic</h2>
                <p className="relic-subtitle">"His body fell. His will never did."</p>
              </div>
            </div>
            
            <div className="relic-content">
              <div className="relic-preview">
                <p className="relic-text">
                  The Soul of Krixis is a cursed blade, forged in an age of betrayal and sealed away by the Old Ones to contain a darkness that could not be destroyed...
                </p>
                
                <button
                  onClick={() => setIsRelicExpanded(!isRelicExpanded)}
                  className="expand-btn"
                >
                  <span>{isRelicExpanded ? 'COLLAPSE' : 'READ MORE'}</span>
                  <div className="expand-arrow" style={{
                    transform: isRelicExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>▼</div>
                </button>
              </div>
              
              {isRelicExpanded && (
                <div className="relic-expanded">
                  <div className="expanded-content">
                    <p className="expanded-text">
                      Once wielded by Krixis — harbinger of chaos and living corruption — the sword was left behind when he was entombed within the Stone of Echoes. Not as a trophy, but as a shackle — the final anchor binding his spirit to this realm.
                    </p>
                    <p className="expanded-text">
                      It radiates a foul will, whispering to the desperate, the broken, the ambitious. The blade cannot be wielded without cost. Those who grasp it risk more than death — they risk becoming the vessel through which Krixis walks the realms again.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="faq-header">
            <h2 className="faq-title">Mystical Knowledge</h2>
            <p className="faq-subtitle">Seek answers to the mysteries of the realm</p>
          </div>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="faq-question"
                >
                  <span className="question-text">{faq.question}</span>
                  <div className="question-arrow" style={{
                    transform: openFAQ === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>▼</div>
                </button>
                
                {openFAQ === index && (
                  <div className="faq-answer">
                    <p className="answer-text">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Future Portal Teaser */}
        <section className="portal-teaser">
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
              <h3 className="portal-title">World Expands Soon...</h3>
              <p className="portal-description">
                New realms await discovery. Portals to Solana, Ape Chain, and mysterious unknown dimensions are stirring with ancient energy.
              </p>
              <button
                onClick={() => setActivePage('portal')}
                className="portal-btn"
              >
                <span>VIEW FUTURE PORTALS</span>
                <div className="btn-shimmer"></div>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;