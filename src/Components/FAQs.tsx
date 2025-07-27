import React, { useState } from 'react';

const FAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are Floaters NFTs?",
      answer: "Floaters are 7777 unique, hand-drawn pixel art NFTs living in a mystical universe. Each Floater is a 60x69px animated being with 6-frame traits, crafted without AI assistance."
    },
    {
      question: "How do I mint a Floater?",
      answer: "Minting will be available through our Bueno Engine integration on Ethereum. Each Floater will be revealed post-mint, adding to the mystery and excitement."
    },
    {
      question: "What is Floaters World?",
      answer: "Floaters World is an interactive, browser-based pixel universe where holders can walk around, interact with objects, participate in token-gated events, and shape the world."
    },
    {
      question: "What utilities do Floaters provide?",
      answer: "Floaters grant access to the exclusive Floaters World, token-gated AMAs, hidden quests, live voting, and the ability to add/edit world content."
    },
    {
      question: "Will Floaters expand to other blockchains?",
      answer: "Yes! Our roadmap includes expansion to Ape Chain, Solana, and other mysterious chains. Each will offer unique experiences while maintaining the core Floaters mystique."
    },
    {
      question: "What makes Floaters different?",
      answer: "Hand-crafted pixel art with no AI, interactive world experience, deep community involvement, and the ability for holders to actually shape and build the universe."
    },
    {
      question: "How can I join the community?",
      answer: "Join our Discord, Telegram, and follow us on X (Twitter). Engage with fellow Floaters and stay updated on the latest developments in our expanding universe."
    }
  ];

  return (
    <div style={{ minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}>
            <div style={{
              fontSize: '3rem',
              marginRight: '1rem'
            }}>❓</div>
            <h1 className="mystical-title" style={{
              fontSize: 'clamp(3rem, 6vw, 4rem)'
            }}>
              Mystical Knowledge
            </h1>
          </div>
          <p className="mystical-text" style={{
            fontSize: '1.2rem',
            opacity: 0.8
          }}>
            Seek answers to the mysteries of the Floaters realm
          </p>
        </div>

        {/* FAQ Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => (
            <div key={index} className="mystical-card pixel-border" style={{
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}>
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.5rem',
                  background: 'transparent',
                  border: 'none',
                  color: 'inherit',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 255, 65, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <h3 className="mystical-title" style={{
                  fontSize: 'clamp(1rem, 3vw, 1.3rem)',
                  paddingRight: '1rem',
                  margin: 0
                }}>
                  {faq.question}
                </h3>
                <div style={{
                  fontSize: '1.5rem',
                  color: '#00ff41',
                  transform: openFAQ === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  flexShrink: 0
                }}>
                  ▼
                </div>
              </button>

              {openFAQ === index && (
                <div className="pixel-border" style={{
                  margin: '0 1.5rem 1.5rem',
                  padding: '1rem',
                  background: 'rgba(0, 255, 65, 0.05)',
                  animation: 'fadeIn 0.3s ease'
                }}>
                  <p className="mystical-text" style={{
                    lineHeight: '1.6',
                    opacity: 0.9
                  }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem'
        }}>
          <p className="mystical-text" style={{
            fontSize: '1.1rem',
            marginBottom: '2rem'
          }}>
            Still have questions about the mystical realm?
          </p>
          <button className="mystical-button" style={{
            fontSize: '1.1rem',
            padding: '1rem 2rem'
          }}>
            Join Our Discord
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQs;