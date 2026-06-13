'use client'

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #2C1810 0%, #1a0f08 100%)',
      padding: '3rem 1.5rem 2rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top curve */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '40px',
        background: 'var(--cream)',
        clipPath: 'ellipse(55% 100% at 50% 0%)',
      }} />

      {/* Decorative ring */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '300px', height: '300px', borderRadius: '50%',
        border: '1px solid rgba(232,130,26,0.08)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>🪔</div>
        <h3 style={{
          fontFamily: 'Playfair Display, serif', fontWeight: 700,
          fontSize: '1.5rem', color: '#FFF9F0', marginBottom: '0.25rem',
        }}>Priti Gruh Udyog</h3>
        <p style={{
          fontFamily: 'Nunito, sans-serif', fontSize: '0.75rem',
          color: 'rgba(245,163,71,0.6)', letterSpacing: '0.12em',
          marginBottom: '1.5rem',
        }}>ખાખરા • નાસ્તો • ઘરનો સ્વાદ</p>

        <div style={{
          display: 'flex', justifyContent: 'center', gap: '1rem',
          marginBottom: '2rem', flexWrap: 'wrap',
        }}>
          {[['🌾', 'Whole Wheat'], ['✨', 'Natural Spices'], ['🏠', 'Made in Nashik']].map(([icon, label]) => (
            <div key={label} style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem',
              color: 'rgba(245,163,71,0.7)', fontWeight: 600,
            }}>
              <span>{icon}</span> {label}
            </div>
          ))}
        </div>

        <div style={{
          height: '1px', background: 'rgba(232,130,26,0.15)',
          marginBottom: '1.25rem',
        }} />

        <p style={{
          fontFamily: 'Nunito, sans-serif', fontSize: '0.7rem',
          color: 'rgba(255,249,240,0.25)', fontWeight: 300, 
        }}>
          © {new Date().getFullYear()} Priti Gruh Udyog · Nashik, Maharashtra · All rights reserved
        </p>
      </div>
    </footer>
  )
}
