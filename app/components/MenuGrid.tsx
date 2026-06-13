'use client'
import { useState } from 'react'
import { menuItems, categories, Category } from '../data/menu'
import MenuCard from './MenuCard'

export default function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState<'all' | Category>('all')
  const [search, setSearch] = useState('')

  const filtered = menuItems.filter(item => {
    const matchCat = activeCategory === 'all' || item.category === activeCategory
    const matchSearch = search === '' ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.ingredients.some(i => i.toLowerCase().includes(search.toLowerCase()))
    return matchCat && matchSearch
  })

  return (
    <section style={{ padding: '2.5rem 1.5rem 4rem', maxWidth: '1100px', margin: '0 auto' }}>

      {/* Section heading */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '0.5rem' }}>
          <div style={{ height: '1px', width: '40px', background: 'rgba(232,130,26,0.3)' }} />
          <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.7rem', fontWeight: 700, color: '#E8821A', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Our Menu
          </span>
          <div style={{ height: '1px', width: '40px', background: 'rgba(232,130,26,0.3)' }} />
        </div>
        <h2 style={{
          fontFamily: 'Playfair Display, serif', fontWeight: 700,
          fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: '#2C1810',
          lineHeight: 1.2,
        }}>
          Crispy Khakhras, <span style={{ color: '#E8821A', fontStyle: 'italic' }}>7 Varieties</span>
        </h2>
        <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.85rem', color: '#A07850', marginTop: '8px', fontWeight: 300 }}>
          Tap any card to see full details & ingredients ✦
        </p>
      </div>

      {/* Search bar */}
      <div style={{ maxWidth: '360px', margin: '0 auto 1.75rem', position: 'relative' }}>
        <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', fontSize: '0.9rem', pointerEvents: 'none' }}>🔍</span>
        <input
          type="text"
          placeholder="Search by name or ingredient..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: '100%', padding: '10px 14px 10px 38px',
            fontFamily: 'Nunito, sans-serif', fontSize: '0.85rem',
            border: '1.5px solid rgba(232,130,26,0.25)',
            borderRadius: '30px', outline: 'none',
            background: 'white', color: '#2C1810',
            boxShadow: '0 2px 8px rgba(232,130,26,0.08)',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
          onFocus={e => {
            e.currentTarget.style.borderColor = '#E8821A'
            e.currentTarget.style.boxShadow = '0 2px 12px rgba(232,130,26,0.2)'
          }}
          onBlur={e => {
            e.currentTarget.style.borderColor = 'rgba(232,130,26,0.25)'
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(232,130,26,0.08)'
          }}
        />
      </div>

      {/* Category filter tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
        {categories.map(cat => {
          const isActive = activeCategory === cat.id
          return (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id as 'all' | Category)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                fontFamily: 'Nunito, sans-serif', fontSize: '0.8rem', fontWeight: 700,
                padding: '7px 18px', borderRadius: '30px', cursor: 'pointer',
                border: isActive ? '1.5px solid #E8821A' : '1.5px solid rgba(232,130,26,0.2)',
                background: isActive ? '#E8821A' : 'white',
                color: isActive ? 'white' : '#A07850',
                transition: 'all 0.2s',
                boxShadow: isActive ? '0 4px 12px rgba(232,130,26,0.3)' : 'none',
              }}
              onMouseEnter={e => { if (!isActive) { (e.currentTarget as HTMLElement).style.borderColor = '#E8821A'; (e.currentTarget as HTMLElement).style.color = '#E8821A' } }}
              onMouseLeave={e => { if (!isActive) { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(232,130,26,0.2)'; (e.currentTarget as HTMLElement).style.color = '#A07850' } }}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          )
        })}
      </div>

      {/* Results count */}
      {(search || activeCategory !== 'all') && (
        <p style={{ textAlign: 'center', fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', color: '#A07850', marginBottom: '1.25rem' }}>
          Showing {filtered.length} of {menuItems.length} items
        </p>
      )}

      {/* Cards grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.25rem',
      }}>
        {filtered.map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '3rem', color: '#A07850' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🔍</div>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem' }}>No items found</p>
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.8rem', marginTop: '4px' }}>Try a different search or category</p>
        </div>
      )}
    </section>
  )
}
