'use client'
import { useState } from 'react'
import { MenuItem } from '../data/menu'
import SpiceMeter from './SpiceMeter'

export default function MenuCard({ item }: { item: MenuItem }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      style={{
        cursor: 'pointer',
        perspective: '1000px',
        height: '280px',
        userSelect: 'none',
      }}
    >
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        transition: 'transform 0.55s cubic-bezier(0.23,1,0.32,1)',
        transformStyle: 'preserve-3d',
        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
      }}>

        {/* FRONT */}
        <div style={{
          position: 'absolute', inset: 0,
          background: item.color,
          border: `1.5px solid ${item.accentColor}22`,
          borderRadius: '16px',
          padding: '1.5rem',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: `0 4px 24px ${item.accentColor}18, 0 1px 4px rgba(0,0,0,0.06)`,
          overflow: 'hidden',
        }}>
          {/* Background pattern */}
          <div style={{
            position: 'absolute', bottom: '-20px', right: '-20px',
            width: '120px', height: '120px', borderRadius: '50%',
            background: `${item.accentColor}10`,
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '10px', right: '10px',
            width: '80px', height: '80px', borderRadius: '50%',
            border: `1px solid ${item.accentColor}15`,
            pointerEvents: 'none',
          }} />

          <div>
            {/* Badges row */}
            <div style={{ display: 'flex', gap: '6px', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
              {item.isBestseller && (
                <span style={{
                  fontFamily: 'Nunito, sans-serif', fontSize: '0.6rem', fontWeight: 700,
                  padding: '2px 8px', borderRadius: '20px',
                  background: item.accentColor, color: 'white',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                }}>★ Bestseller</span>
              )}
              {item.isNew && (
                <span style={{
                  fontFamily: 'Nunito, sans-serif', fontSize: '0.6rem', fontWeight: 700,
                  padding: '2px 8px', borderRadius: '20px',
                  background: '#2E7D4F', color: 'white',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                }}>✦ New</span>
              )}
            </div>

            {/* Emoji + Name */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '4px' }}>
              <span style={{ fontSize: '2rem', lineHeight: 1, flexShrink: 0 }}>{item.emoji}</span>
              <div>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700, fontSize: '1.15rem',
                  color: item.accentColor, lineHeight: 1.15,
                  marginBottom: '1px',
                }}>{item.name}</h3>
                {item.nameGuj && (
                  <div style={{
                    fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem',
                    color: `${item.accentColor}99`, fontWeight: 500,
                  }}>{item.nameGuj}</div>
                )}
              </div>
            </div>

            {/* Tagline */}
            <p style={{
              fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem',
              color: '#6B4226', fontStyle: 'italic', marginTop: '4px',
              fontWeight: 400,
            }}>{item.tagline}</p>
          </div>

          <div>
            {/* Ingredients pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '0.9rem' }}>
              {item.ingredients.slice(0, 4).map(ing => (
                <span key={ing} style={{
                  fontFamily: 'Nunito, sans-serif', fontSize: '0.65rem', fontWeight: 600,
                  padding: '3px 9px', borderRadius: '20px',
                  background: `${item.accentColor}14`,
                  border: `1px solid ${item.accentColor}25`,
                  color: item.accentColor,
                }}>{ing}</span>
              ))}
              {item.ingredients.length > 4 && (
                <span style={{
                  fontFamily: 'Nunito, sans-serif', fontSize: '0.65rem', fontWeight: 600,
                  padding: '3px 9px', borderRadius: '20px',
                  background: 'rgba(0,0,0,0.05)',
                  color: '#999',
                }}>+{item.ingredients.length - 4} more</span>
              )}
            </div>

            {/* Bottom row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <SpiceMeter level={item.spiceLevel} />
              <span style={{
                fontFamily: 'Nunito, sans-serif', fontSize: '0.65rem',
                color: `${item.accentColor}80`, fontWeight: 500,
              }}>Tap for details →</span>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(145deg, ${item.accentColor} 0%, ${item.accentColor}cc 100%)`,
          borderRadius: '16px',
          padding: '1.5rem',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: `0 8px 32px ${item.accentColor}40`,
          overflow: 'hidden',
        }}>
          {/* Decorative circle */}
          <div style={{
            position: 'absolute', top: '-30px', right: '-30px',
            width: '140px', height: '140px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
            pointerEvents: 'none',
          }} />

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '1.5rem' }}>{item.emoji}</span>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700, fontSize: '1.1rem', color: 'white',
              }}>{item.name}</h3>
            </div>
            <p style={{
              fontFamily: 'Nunito, sans-serif', fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.85)', lineHeight: 1.65,
              fontWeight: 300,
            }}>{item.description}</p>
          </div>

          <div>
            {/* All ingredients */}
            <div style={{ marginBottom: '0.75rem' }}>
              <div style={{
                fontFamily: 'Nunito, sans-serif', fontSize: '0.65rem', fontWeight: 700,
                color: 'rgba(255,255,255,0.6)', letterSpacing: '0.12em',
                textTransform: 'uppercase', marginBottom: '6px',
              }}>Ingredients</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {item.ingredients.map(ing => (
                  <span key={ing} style={{
                    fontFamily: 'Nunito, sans-serif', fontSize: '0.65rem', fontWeight: 600,
                    padding: '2px 9px', borderRadius: '20px',
                    background: 'rgba(255,255,255,0.18)',
                    color: 'white',
                  }}>{ing}</span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
                {[1, 2, 3].map(i => (
                  <div key={i} style={{
                    width: '7px', height: '7px', borderRadius: '50%',
                    background: i <= (item.spiceLevel === 'mild' ? 1 : item.spiceLevel === 'medium' ? 2 : 3)
                      ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.25)',
                  }} />
                ))}
                <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)', marginLeft: '4px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {item.spiceLevel === 'mild' ? 'Mild' : item.spiceLevel === 'medium' ? 'Medium' : 'Hot'}
                </span>
              </div>
              <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)' }}>
                {item.weight} · Whole Wheat
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
