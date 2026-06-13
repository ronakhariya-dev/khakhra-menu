'use client'

export default function Hero() {
  return (
    <header style={{
      background: 'linear-gradient(160deg, #2C1810 0%, #5C3A1E 50%, #8B5E3C 100%)',
      padding: '3rem 1.5rem 5rem',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
    }}>
      {/* Decorative mandala rings */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '320px', height: '320px', borderRadius: '50%',
        border: '1px solid rgba(232,130,26,0.12)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '-40px', right: '-40px',
        width: '240px', height: '240px', borderRadius: '50%',
        border: '1px solid rgba(232,130,26,0.18)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-60px', left: '-60px',
        width: '280px', height: '280px', borderRadius: '50%',
        border: '1px solid rgba(232,130,26,0.1)',
        pointerEvents: 'none',
      }} />
      {/* Warm glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 0%, rgba(232,130,26,0.15) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: '680px', margin: '0 auto' }}>
        {/* Top ornament */}
        <div style={{ marginBottom: '1.25rem' }}>
          <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.25rem' }}>🪔</span>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <div style={{ height: '1px', width: '48px', background: 'rgba(232,130,26,0.5)' }} />
            <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.7rem', color: 'rgba(245,163,71,0.8)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
              Nashik, Maharashtra
            </span>
            <div style={{ height: '1px', width: '48px', background: 'rgba(232,130,26,0.5)' }} />
          </div>
        </div>

        {/* Brand name */}
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 800,
          fontSize: 'clamp(2.8rem, 8vw, 5rem)',
          color: '#FFF9F0',
          letterSpacing: '-0.01em',
          lineHeight: 0.95,
          marginBottom: '0.4rem',
        }}>
          Priti
        </h1>
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 400,
          fontStyle: 'italic',
          fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
          color: '#F5A347',
          lineHeight: 1,
          marginBottom: '1.25rem',
        }}>
          Gruh Udyog
        </h1>

        {/* Gujarati subtitle */}
        <p style={{
          fontFamily: 'Nunito, sans-serif',
          fontSize: '1rem',
          color: 'rgba(245,163,71,0.75)',
          letterSpacing: '0.04em',
          marginBottom: '1.5rem',
        }}>
          ખાખરા • નાસ્તો • ઘરનો સ્વાદ
        </p>

        <p style={{
          fontFamily: 'Nunito, sans-serif',
          fontSize: '0.95rem',
          color: 'rgba(255,249,240,0.55)',
          lineHeight: 1.7,
          maxWidth: '440px',
          margin: '0 auto 2rem',
          fontWeight: 300,
        }}>
          Handcrafted whole wheat khakhras made with authentic spices and traditional recipes.
          Crispy, wholesome, and loved by Gujarati & Marwadi families.
        </p>

        {/* Badges */}
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
  {[
    ['🌾', 'Whole Wheat'],
    ['🚫', 'No Preservatives'],
    ['🔥', 'Roasted, Not Fried'],
    ['🥬', '100% Vegetarian'],
    ['❤️', 'Homemade'],
  ].map(([icon, label]) => (
    <span
      key={label}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        fontFamily: 'Nunito, sans-serif',
        fontSize: '0.75rem',
        fontWeight: 600,
        padding: '5px 14px',
        background: 'rgba(232,130,26,0.15)',
        border: '1px solid rgba(232,130,26,0.3)',
        borderRadius: '20px',
        color: 'rgba(245,163,71,0.9)',
        letterSpacing: '0.02em',
      }}
    >
      <span>{icon}</span> {label}
    </span>
  ))}
</div>
      </div>

      {/* Bottom wave */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '40px',
        background: 'var(--cream)',
        clipPath: 'ellipse(55% 100% at 50% 100%)',
      }} />
    </header>
  )
}
