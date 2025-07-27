import React, { useState, useEffect } from 'react';

interface LandingPageProps {
  onEnter: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showEnterButton, setShowEnterButton] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [sceneProgress, setSceneProgress] = useState(0);

  const cinematicScenes = [
    {
      title: "In the depths of the digital void...",
      subtitle: "Ancient powers stir",
      character: null,
      atmosphere: "void",
      duration: 4000
    },
    {
      title: "Vhar'zhul, the Dark Summoner",
      subtitle: "Channels forbidden magic through the blockchain",
      character: "/bad_guy2-2.gif",
      atmosphere: "summoning",
      duration: 5000
    },
    {
      title: "7777 Souls Awaken",
      subtitle: "The Floaters World comes alive",
      character: "/good_guy1-2.gif",
      atmosphere: "awakening",
      duration: 4000
    }
  ];

  useEffect(() => {
    if (isPlaying && currentScene < cinematicScenes.length) {
      const scene = cinematicScenes[currentScene];
      
      // Progress bar animation
      const progressInterval = setInterval(() => {
        setSceneProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + (100 / (scene.duration / 50));
        });
      }, 50);

      // Scene transition
      const sceneTimer = setTimeout(() => {
        if (currentScene >= cinematicScenes.length - 1) {
          setShowEnterButton(true);
          setIsPlaying(false);
        } else {
          setCurrentScene(prev => prev + 1);
          setSceneProgress(0);
        }
      }, scene.duration);

      return () => {
        clearTimeout(sceneTimer);
        clearInterval(progressInterval);
      };
    }
  }, [currentScene, isPlaying, cinematicScenes]);

  const restartCinematic = () => {
    setCurrentScene(0);
    setSceneProgress(0);
    setIsPlaying(true);
    setShowEnterButton(false);
  };

  const skipToEnd = () => {
    setCurrentScene(cinematicScenes.length - 1);
    setSceneProgress(100);
    setShowEnterButton(true);
    setIsPlaying(false);
  };

  const currentSceneData = cinematicScenes[currentScene];

  return (
    <div style={{
      minHeight: '100vh',
      background: currentSceneData?.atmosphere === 'void' ? 
        'radial-gradient(circle at center, #000000 0%, #0a0a0a 50%, #000000 100%)' :
        currentSceneData?.atmosphere === 'summoning' ?
        `radial-gradient(circle at 30% 70%, rgba(138, 43, 226, 0.4) 0%, transparent 50%),
         radial-gradient(circle at 70% 30%, rgba(0, 255, 65, 0.3) 0%, transparent 50%),
         linear-gradient(135deg, rgba(0, 0, 0, 0.98), rgba(26, 0, 51, 0.9))` :
        `radial-gradient(circle at center, rgba(0, 255, 65, 0.2) 0%, transparent 50%),
         linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(0, 51, 0, 0.8))`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      color: '#FFFFFF'
    }}>
      {/* Cinematic Particles */}
      <div className="floating-particles">
        {[...Array(currentSceneData?.atmosphere === 'void' ? 8 : 20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              background: currentSceneData?.atmosphere === 'summoning' ? '#8A2BE2' : '#00FF41',
              width: currentSceneData?.atmosphere === 'void' ? '2px' : '4px',
              height: currentSceneData?.atmosphere === 'void' ? '2px' : '4px',
              opacity: currentSceneData?.atmosphere === 'void' ? 0.3 : 0.7
            }}
          />
        ))}
      </div>

      {/* Controls */}
      <div style={{
        position: 'absolute',
        top: '2rem',
        right: '2rem',
        display: 'flex',
        gap: '1rem',
        zIndex: 1000
      }}>
        <button
          onClick={() => setMusicEnabled(!musicEnabled)}
          className="pixel-button"
          style={{
            fontSize: '0.9rem',
            padding: '8px 16px',
            background: musicEnabled ? 
              'linear-gradient(135deg, #00FF41, #33FF66)' : 
              'linear-gradient(135deg, rgba(0,255,65,0.3), rgba(0,0,0,0.8))',
            color: musicEnabled ? '#000' : '#00FF41'
          }}
        >
          {musicEnabled ? '🔊' : '🔇'}
        </button>
        
        {!showEnterButton && (
          <button
            onClick={skipToEnd}
            className="pixel-button"
            style={{
              fontSize: '0.9rem',
              padding: '8px 16px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(0,0,0,0.8))',
              color: '#FFF'
            }}
          >
            SKIP
          </button>
        )}
      </div>

      {/* Main Cinematic Content */}
      <div style={{
        textAlign: 'center',
        maxWidth: '900px',
        width: '100%',
        padding: '0 2rem',
        zIndex: 2
      }}>
        {/* Project Title - Always Visible */}
        <div style={{
          marginBottom: '4rem',
          opacity: currentScene === 0 ? 1 : 0.3,
          transition: 'opacity 1s ease'
        }}>
          <h1 className="pixel-title" style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            marginBottom: '1rem',
            animation: currentScene === 0 ? 'pixelGlow 3s ease-in-out infinite alternate' : 'none',
            textShadow: currentScene === 0 ? 
              '0 0 20px #00FF41, 0 0 40px #00FF41, 0 0 60px #00FF41' :
              '0 0 10px #00FF41'
          }}>
            FLOATERS WORLD
          </h1>
          <p className="pixel-text" style={{
            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
            opacity: 0.8,
            fontFamily: 'Cinzel, serif',
            letterSpacing: '2px'
          }}>
            Enter the Mystical Blockchain Universe
          </p>
        </div>

        {/* Cinematic Scene Display */}
        <div style={{
          minHeight: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '3rem'
        }}>
          {/* Scene Character */}
          {currentSceneData?.character && (
            <div style={{
              marginBottom: '3rem',
              position: 'relative'
            }}>
              <div style={{
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(0,255,65,0.2), transparent)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'pixelPulse 2s infinite',
                border: '3px solid #00FF41',
                boxShadow: '0 0 40px rgba(0,255,65,0.5)'
              }}>
                <img
                  src={currentSceneData.character}
                  alt="Character"
                  className="pixelated"
                  style={{
                    width: '150px',
                    height: '150px',
                    animation: 'pixelFloat 3s ease-in-out infinite',
                    filter: 'brightness(1.2) drop-shadow(0 0 20px #00FF41)'
                  }}
                />
              </div>
              
              {/* Mystical Aura */}
              <div style={{
                position: 'absolute',
                inset: '-20px',
                border: '2px solid rgba(0,255,65,0.3)',
                borderRadius: '50%',
                animation: 'pixelPulse 3s infinite reverse'
              }} />
            </div>
          )}

          {/* Scene Text */}
          <div style={{
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <h2 className="pixel-title" style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              marginBottom: '1rem',
              color: '#00FF41',
              animation: 'pixelGlow 2s ease-in-out infinite alternate',
              fontFamily: 'Cinzel, serif'
            }}>
              {currentSceneData?.title}
            </h2>
            <p className="pixel-text" style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              opacity: 0.9,
              fontStyle: 'italic',
              letterSpacing: '1px'
            }}>
              {currentSceneData?.subtitle}
            </p>
          </div>

          {/* Progress Indicator */}
          {!showEnterButton && (
            <div style={{
              width: '100%',
              maxWidth: '600px',
              marginBottom: '2rem'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0.5rem',
                fontSize: '0.9rem',
                opacity: 0.7
              }}>
                <span>Scene {currentScene + 1} of {cinematicScenes.length}</span>
                <span>{Math.round(sceneProgress)}%</span>
              </div>
              <div style={{
                width: '100%',
                height: '4px',
                background: 'rgba(0,255,65,0.2)',
                border: '1px solid #00FF41',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${sceneProgress}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #00FF41, #33FF66)',
                  transition: 'width 0.1s ease',
                  boxShadow: '0 0 10px #00FF41'
                }} />
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {showEnterButton ? (
            <button
              onClick={onEnter}
              className="pixel-button"
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                padding: 'clamp(1rem, 2vw, 1.5rem) clamp(2rem, 4vw, 3rem)',
                animation: 'pixelGlow 2s ease-in-out infinite alternate',
                background: 'linear-gradient(135deg, #00FF41, #33FF66)',
                color: '#000',
                boxShadow: '0 0 40px rgba(0,255,65,0.8)',
                border: '3px solid #00FF41',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontWeight: 'bold'
              }}
            >
              ⚡ ENTER THE REALM
            </button>
          ) : (
            <div style={{
              fontSize: '1rem',
              opacity: 0.6,
              animation: 'pixelPulse 2s infinite'
            }}>
              Preparing the mystical gateway...
            </div>
          )}

          <button
            onClick={restartCinematic}
            className="pixel-button"
            style={{
              fontSize: '1rem',
              padding: '12px 24px',
              background: 'linear-gradient(135deg, rgba(0,255,65,0.3), rgba(0,0,0,0.8))',
              color: '#00FF41'
            }}
          >
            🔄 REPLAY
          </button>
        </div>

        {/* Subtitle */}
        <p className="pixel-text" style={{
          marginTop: '3rem',
          fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
          opacity: 0.7,
          textAlign: 'center',
          maxWidth: '700px',
          margin: '3rem auto 0',
          lineHeight: '1.6',
          fontFamily: 'Cinzel, serif'
        }}>
          Where 7777 hand-crafted pixel spirits await your command in the most advanced Web3 universe ever created
        </p>
      </div>

      {/* Atmospheric Effects */}
      {currentSceneData?.atmosphere === 'summoning' && (
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '100px',
          background: 'radial-gradient(ellipse, rgba(138,43,226,0.3), transparent)',
          animation: 'pixelPulse 4s infinite',
          zIndex: 1
        }} />
      )}
    </div>
  );
};

export default LandingPage;