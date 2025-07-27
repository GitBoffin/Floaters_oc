import React, { useState } from 'react';

interface NavigationProps {
  activePage: string;
  setActivePage: (page: any) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activePage, setActivePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'mint', label: '🧬 Mint', icon: '⚡' },
    { id: 'lore', label: '📖 Lore Book', icon: '📚' },
    { id: 'world', label: '🌐 Floaters World', icon: '🌍' },
    { id: 'gallery', label: '🖼️ Gallery', icon: '🎨' },
    { id: 'faqs', label: '❓ FAQs', icon: '❓' },
  ];

  const socialLinks = [
    { name: 'X (Twitter)', url: '#', icon: '🐦' },
    { name: 'Telegram', url: '#', icon: '📱' },
    { name: 'Discord', url: '#', icon: '💬' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(0, 0, 0, 0.9)',
      backdropFilter: 'blur(10px)',
      borderBottom: '2px solid #00ff41',
      padding: '1rem 2rem'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Logo */}
        <div 
          onClick={() => setActivePage('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#00ff41',
            fontFamily: 'Cinzel, serif'
          }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #00ff41, #00cc33)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black',
            fontWeight: 'bold'
          }}>
            F
          </div>
          FLOATERS WORLD
        </div>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {menuItems.slice(1).map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              style={{
                padding: '0.5rem 1rem',
                background: activePage === item.id ? '#00ff41' : 'transparent',
                color: activePage === item.id ? 'black' : 'white',
                border: '1px solid #00ff41',
                borderRadius: '6px',
                cursor: 'pointer',
                fontFamily: 'Orbitron, monospace',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (activePage !== item.id) {
                  e.currentTarget.style.background = 'rgba(0, 255, 65, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (activePage !== item.id) {
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              {item.label}
            </button>
          ))}

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '0.5rem', marginLeft: '1rem' }}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                style={{
                  padding: '0.5rem',
                  background: 'rgba(0, 255, 65, 0.1)',
                  border: '1px solid rgba(0, 255, 65, 0.3)',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 255, 65, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 255, 65, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;