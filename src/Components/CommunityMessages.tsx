import React, { useState } from 'react';

interface CommunityMessagesProps {
  setActivePage: (page: string) => void;
}

const CommunityMessages: React.FC<CommunityMessagesProps> = ({ setActivePage }) => {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);

  const communityMessages = [
    {
      id: 1,
      author: 'Draxix',
      role: 'Lead Developer & Dark Summoner',
      avatar: '/bad_guy2-2.gif',
      timestamp: '2 days ago',
      title: 'Building the Future of Web3 Communities',
      preview: 'The vision behind Floaters World goes beyond just NFTs...',
      content: `The vision behind Floaters World goes beyond just NFTs. We're building a platform where digital ownership truly matters, where communities can shape their own experiences, and where creativity flourishes without the constraints of traditional platforms.

Every line of code we write is with the community in mind. This isn't about quick flips or hype cycles - it's about creating something that will stand the test of time. A place where holders don't just own JPEGs, but own pieces of a living, breathing digital universe.

The interactive world we're building with Bueno's engine is just the beginning. Imagine walking through spaces that the community has built, discovering art that fellow holders have created, participating in events that matter to you.

Web3 gives us the tools to build differently. Let's use them wisely.

- Draxix 🧙‍♂️`
    },
    {
      id: 2,
      author: 'Rotebal',
      role: 'Lead Artist & Pixel Mystic',
      avatar: '/good_guy1-2.gif',
      timestamp: '4 days ago',
      title: 'The Art of Pixel Perfection',
      preview: 'Every Floater is hand-crafted with love and attention to detail...',
      content: `Every Floater is hand-crafted with love and attention to detail. In a world increasingly dominated by AI-generated content, we've chosen the path of human creativity and artistic expression.

Each 60x69 pixel canvas tells a story. Every 6-frame animation is carefully crafted to bring these mystical beings to life. No shortcuts, no AI assistance - just pure artistic vision translated into digital form.

Pixel art isn't just nostalgia - it's a discipline that forces you to make every pixel count. When you have limited space, every decision matters. Every color choice, every line, every frame of animation must serve the greater vision.

The Floaters aren't just profile pictures - they're characters with personality, beings with their own mystical energy. When you see your Floater, you should feel that connection, that spark of recognition.

Art is the soul of any great project. We're not just creating collectibles - we're creating digital beings that will live on long after we're gone.

Keep creating, keep believing in the power of human artistry.

- Rotebal 🎨`
    },
    {
      id: 3,
      author: 'Krixis',
      role: 'Community Manager & Soul Keeper',
      avatar: '/4.gif',
      timestamp: '1 week ago',
      title: 'Community First, Always',
      preview: 'Building a strong community is more important than any roadmap...',
      content: `Building a strong community is more important than any roadmap or technical feature. At the end of the day, projects succeed or fail based on the people who believe in them.

I've seen too many projects focus on hype and marketing while neglecting the real foundation - genuine human connections. That's not what we're about here. Every decision we make is filtered through one question: "Is this good for our community?"

The Floaters World isn't just a place for holders - it's a place for builders, creators, dreamers, and believers. Whether you're here for the art, the technology, the community, or the vision of decentralized ownership, you have a place here.

We're not just building a project - we're building a home. A place where people can come together, create together, and grow together. Where your voice matters, where your contributions are valued, where your presence makes a difference.

The future of Web3 isn't about the technology - it's about the communities we build with that technology. Let's build something beautiful together.

Your voice matters. Your ideas matter. You matter.

- Krixis 👻`
    },
    {
      id: 4,
      author: 'The Team',
      role: 'Floaters World Collective',
      avatar: '/Soul_of_Krixis1.gif',
      timestamp: '2 weeks ago',
      title: 'Welcome to the Beginning',
      preview: 'This is just the start of something magical...',
      content: `This is just the start of something magical. Welcome to the Floaters World community - a place where pixel art meets cutting-edge technology, where individual creativity meets collective vision.

We're not here to make promises we can't keep or hype features that don't exist. We're here to build, to create, to push the boundaries of what's possible in Web3.

Every Floater holder is part of this journey. Every community member contributes to the story we're writing together. This isn't just about owning an NFT - it's about being part of something bigger.

The road ahead is full of possibilities. Interactive worlds, cross-chain expansion, community governance, creative tools - all of this and more awaits us. But it all starts with this moment, this community, this shared belief in what we can build together.

Thank you for being here. Thank you for believing. Thank you for being part of the Floaters World family.

The adventure begins now.

- The Floaters World Team 🌟`
    }
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
              <div className="emblem-inner">C</div>
              <div className="emblem-glow"></div>
            </div>
            <div className="logo-text">
              <h1 className="project-title">COMMUNITY MESSAGES</h1>
              <div className="subtitle-container">
                <p className="animated-subtitle">
                  Voices from the Legendary Team
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
          marginBottom: '3rem',
          background: 'linear-gradient(135deg, rgba(0,255,65,0.1), rgba(0,0,0,0.9))'
        }}>
          <div className="relic-header" style={{ flexDirection: 'column', textAlign: 'center' }}>
            <div className="relic-icon">
              <div style={{
                fontSize: '4rem',
                animation: 'heroFloat 3s ease-in-out infinite'
              }}>
                📜
              </div>
            </div>
            <div className="relic-title-section">
              <h2 className="relic-title">
                Messages from the Legendary Team
              </h2>
              <p className="relic-subtitle">
                Personal thoughts, updates, and reflections from the builders of Floaters World
              </p>
            </div>
          </div>
          
          <div className="relic-content">
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.6',
              opacity: 0.8,
              textAlign: 'center'
            }}>
              These aren't press releases or marketing copy - they're genuine messages 
              from the people building this legendary universe with you. Real thoughts, 
              real passion, real commitment to the community.
            </p>
          </div>
        </div>

        {/* Messages List */}
        <section className="navigation-section">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            {communityMessages.map((message) => (
              <div
                key={message.id}
                className="nav-card"
                style={{
                  background: selectedMessage === message.id ? 
                    'linear-gradient(135deg, rgba(0,255,65,0.15), rgba(0,0,0,0.9))' :
                    'linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,255,65,0.05))',
                  border: selectedMessage === message.id ? '3px solid var(--evil-green)' : '2px solid #2F2F2F',
                  transition: 'all 0.3s ease',
                  minHeight: 'auto',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedMessage(selectedMessage === message.id ? null : message.id)}
              >
                {/* Message Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  marginBottom: selectedMessage === message.id ? '2rem' : '1rem'
                }}>
                  <div className="card-icon" style={{ flexShrink: 0 }}>
                    <img
                      src={message.avatar}
                      alt={message.author}
                      className="pixelated"
                      style={{
                        width: '80px',
                        height: '80px',
                        border: '3px solid var(--evil-green)',
                        borderRadius: '10px',
                        animation: 'heroFloat 3s ease-in-out infinite'
                      }}
                    />
                  </div>
                  
                  <div className="card-content" style={{ flex: 1, textAlign: 'left' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '0.5rem',
                      flexWrap: 'wrap'
                    }}>
                      <h3 className="card-title" style={{
                        fontSize: '1.4rem',
                        margin: 0
                      }}>
                        {message.author}
                      </h3>
                      <span style={{
                        padding: '4px 12px',
                        background: 'rgba(0,255,65,0.2)',
                        border: '1px solid var(--evil-green)',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        color: 'var(--evil-green)',
                        fontWeight: 'bold'
                      }}>
                        {message.role}
                      </span>
                      <span style={{
                        fontSize: '0.8rem',
                        opacity: 0.6,
                        color: 'var(--white)'
                      }}>
                        {message.timestamp}
                      </span>
                    </div>
                    
                    <h4 style={{
                      fontSize: '1.2rem',
                      marginBottom: '0.5rem',
                      color: 'var(--white)',
                      fontFamily: 'var(--font-fantasy)'
                    }}>
                      {message.title}
                    </h4>
                    
                    {selectedMessage !== message.id && (
                      <p className="card-description" style={{
                        fontSize: '0.95rem',
                        opacity: 0.7,
                        margin: 0
                      }}>
                        {message.preview}
                      </p>
                    )}
                  </div>
                  
                  <div style={{
                    fontSize: '1.5rem',
                    color: 'var(--evil-green)',
                    transform: selectedMessage === message.id ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    flexShrink: 0
                  }}>
                    ▼
                  </div>
                </div>

                {/* Expanded Content */}
                {selectedMessage === message.id && (
                  <div style={{
                    padding: '2rem',
                    background: 'rgba(0,255,65,0.05)',
                    border: '1px solid rgba(0,255,65,0.2)',
                    borderRadius: '10px',
                    animation: 'fadeIn 0.5s ease'
                  }}>
                    <div style={{
                      fontSize: '1rem',
                      lineHeight: '1.8',
                      whiteSpace: 'pre-line',
                      color: 'rgba(255, 255, 255, 0.9)'
                    }}>
                      {message.content}
                    </div>
                  </div>
                )}
                
                <div className="card-glow"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Links */}
        <div className="portal-teaser" style={{
          marginTop: '4rem',
          background: 'linear-gradient(135deg, rgba(138,43,226,0.1), rgba(0,0,0,0.9))',
          border: '3px solid #8A2BE2'
        }}>
          <div className="portal-content" style={{ gridTemplateColumns: '1fr', textAlign: 'center' }}>
            <div className="portal-text">
              <h3 className="portal-title" style={{ color: '#8A2BE2' }}>
                💬 Join the Legendary Conversation
              </h3>
              <p className="portal-description" style={{ marginBottom: '2rem' }}>
                Connect with fellow Floaters, share your thoughts, and be part of the 
                most legendary Web3 community ever assembled.
              </p>
              
              <div className="nav-grid" style={{ 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem'
              }}>
                <button className="nav-card" style={{
                  background: 'linear-gradient(135deg, rgba(29,161,242,0.2), rgba(0,0,0,0.8))',
                  border: '2px solid #1DA1F2',
                  minHeight: '120px'
                }}>
                  <div className="card-icon" style={{ fontSize: '3rem' }}>🐦</div>
                  <div className="card-content">
                    <h3 className="card-title" style={{ color: '#1DA1F2' }}>TWITTER</h3>
                    <p className="card-description">Latest updates & announcements</p>
                  </div>
                  <div className="card-glow"></div>
                </button>

                <button className="nav-card" style={{
                  background: 'linear-gradient(135deg, rgba(0,136,204,0.2), rgba(0,0,0,0.8))',
                  border: '2px solid #0088CC',
                  minHeight: '120px'
                }}>
                  <div className="card-icon" style={{ fontSize: '3rem' }}>📱</div>
                  <div className="card-content">
                    <h3 className="card-title" style={{ color: '#0088CC' }}>TELEGRAM</h3>
                    <p className="card-description">Real-time community chat</p>
                  </div>
                  <div className="card-glow"></div>
                </button>

                <button className="nav-card" style={{
                  background: 'linear-gradient(135deg, rgba(114,137,218,0.2), rgba(0,0,0,0.8))',
                  border: '2px solid #7289DA',
                  minHeight: '120px'
                }}>
                  <div className="card-icon" style={{ fontSize: '3rem' }}>💬</div>
                  <div className="card-content">
                    <h3 className="card-title" style={{ color: '#7289DA' }}>DISCORD</h3>
                    <p className="card-description">Deep community discussions</p>
                  </div>
                  <div className="card-glow"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityMessages;