'use client'
import { spiceConfig, SpiceLevel } from '../data/menu'

export default function SpiceMeter({ level }: { level: SpiceLevel }) {
  const config = spiceConfig[level]
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      <div style={{ display: 'flex', gap: '3px' }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{
            width: '7px', height: '7px', borderRadius: '50%',
            background: i <= config.dots ? config.color : 'rgba(0,0,0,0.1)',
            transition: 'background 0.2s',
          }} />
        ))}
      </div>
      <span style={{
        fontFamily: 'Nunito, sans-serif', fontSize: '0.68rem', fontWeight: 600,
        color: config.color, letterSpacing: '0.06em', textTransform: 'uppercase',
      }}>
        {config.label}
      </span>
    </div>
  )
}
