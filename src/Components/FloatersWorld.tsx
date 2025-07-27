import React from 'react';

const FloatersWorld: React.FC = () => {
  const worldFeatures = [
    {
      id: 'exploration',
      title: 'Walkable Universe',
      icon: '🌐',
      description: 'Explore vast pixel realms with hidden secrets and mystical locations',
      details: 'Navigate through interconnected worlds, discover hidden portals, and uncover ancient mysteries.'
    },
    {
      id: 'interaction',
      title: 'Interactive Objects',
      icon: '👁️',
      description: 'Touch, move, and interact with magical items scattered throughout the world',
      details: 'Every object has a purpose. Collect mystical artifacts and activate ancient mechanisms.'
    },
    {
      id: 'community',
      title: 'Community Spaces',
      icon: '👥',
      description: 'Meet other Floaters holders in shared social areas and events',
      details: 'Gather in the Great Hall, attend exclusive AMAs, and build lasting friendships.'
    },
    {
      id: 'games',
      title: 'Mini Games',
      icon: '🎮',
      description: 'Play exclusive games and compete for rare rewards and recognition',
      details: 'Challenge other holders in pixel battles, solve ancient puzzles, and earn unique rewards.'
    },
    {
      id: 'messaging',
      title: 'Voice Messages',
      icon: '💬',
      description: 'Leave voice messages and communicate with the community in new ways',
      details: 'Record mystical messages, share stories, and create an ever-evolving audio landscape.'
    },
    {
      id: 'voting',
      title: 'Live Voting',
      icon: '🗳️',
      description: 'Participate in governance by walking to voting locations in-world',
      details: 'Democracy in action! Walk to the Council Chambers to cast your vote on important decisions.'
    }
  ];

  const accessLevels = [
    {
      level: 'Holder Access',
      requirements: 'Own a Floater NFT',
      permissions: ['Explore all areas', 'Participate in games', 'Join community events', 'Vote on proposals'],
      color: '#00ff41'
    },
    {
      level: 'Active Member',
      requirements: 'Regular participation + Holder status',
      permissions: ['Leave voice messages', 'Interact with all objects', 'Access exclusive areas', 'Receive special rewards'],
      color: '#0099ff'
    },
    {
      level: 'Community Builder',
      requirements: 'Consistent contribution + Active status',
      permissions: ['Add art to the world', 'Create simple NPCs', 'Design mini-quests', 'Moderate community spaces'],
      color: '#9d4edd'
    },
    {
      level: 'World Architect',
      requirements: 'Exceptional contribution + Builder status',
      permissions: ['Build structures', 'Create complex quests', 'Design new areas', 'Full world editing access'],
      color: '#ffaa00'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="mystical-title" style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            marginBottom: '2rem'
          }}>
            🌐 Floaters World
          </h1>
          <p className="mystical-text" style={{
            fontSize: '1.2rem',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Step into a living, breathing pixel universe where every interaction matters, 
            every holder has a voice, and every visit reveals new mysteries.
          </p>
        </div>

        {/* World Preview */}
        <div className="mystical-card" style={{
          marginBottom: '4rem',
          height: '400px',
          position: 'relative',
          overflow: 'hidden',
          background: `
            linear-gradient(135deg, rgba(0,255,65,0.1), rgba(45,27,105,0.1)),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff41' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
          `
        }}>
          {/* Floating Floaters */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: `${15 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                width: '80px',
                height: '80px',
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`
              }}
            >
              <img
                src={`/2nd_draft_${[5, 211, 7, 3][i % 4]}-1.gif`}
                alt="Floater"
                className="pixelated"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          ))}

          {/* Interactive Elements */}
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center'
          }}>
            <button className="mystical-button" style={{
              fontSize: '1.2rem',
              padding: '1rem 2rem',
              marginBottom: '1rem'
            }}>
              🚀 Enter World (Coming Soon)
            </button>
            <p className="mystical-text" style={{
              fontSize: '0.9rem',
              opacity: 0.7
            }}>
              Experience the magic of a living pixel universe
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 className="mystical-title" style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            ✨ World Features
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {worldFeatures.map((feature) => (
              <div key={feature.id} className="mystical-card" style={{
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}>
                <div className="pixel-border" style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  background: 'linear-gradient(135deg, #00ff41, #00cc33)',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  boxShadow: '0 0 30px rgba(0, 255, 65, 0.5)'
                }}>
                  {feature.icon}
                </div>
                
                <h3 className="mystical-title" style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem'
                }}>
                  {feature.title}
                </h3>
                
                <p className="mystical-text" style={{
                  marginBottom: '1rem',
                  opacity: 0.9
                }}>
                  {feature.description}
                </p>

                <p className="mystical-text" style={{
                  fontSize: '0.9rem',
                  opacity: 0.7,
                  lineHeight: '1.5'
                }}>
                  {feature.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Access Levels */}
        <div>
          <h2 className="mystical-title" style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            🎭 Access Levels & Permissions
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {accessLevels.map((level, index) => (
              <div
                key={index}
                className="mystical-card pixel-border"
                style={{
                  background: `linear-gradient(135deg, rgba(0,0,0,0.8), ${level.color}10)`
                }}
              >
                <h3 className="mystical-title" style={{
                  fontSize: '1.3rem',
                  marginBottom: '1rem',
                  color: level.color
                }}>
                  {level.level}
                </h3>
                
                <p style={{
                  color: level.color,
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  fontSize: '0.9rem'
                }}>
                  Requirements: {level.requirements}
                </p>
                
                <div>
                  <h4 className="mystical-text" style={{
                    fontWeight: 'bold',
                    marginBottom: '0.5rem'
                  }}>
                    Permissions:
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {level.permissions.map((permission, permIndex) => (
                      <li key={permIndex} className="mystical-text" style={{
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.25rem'
                      }}>
                        <span style={{ color: level.color }}>•</span>
                        <span>{permission}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Warning */}
          <div className="pixel-border" style={{
            marginTop: '3rem',
            background: 'rgba(255, 0, 0, 0.1)',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <h3 style={{
              color: '#ff4444',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              marginBottom: '1rem'
            }}>
              ⚠️ Activity Requirement
            </h3>
            <p className="mystical-text">
              Inactivity removes access privileges. All actions are tracked to ensure 
              only engaged community members can shape the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatersWorld;