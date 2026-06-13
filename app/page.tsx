import Hero from './components/Hero'
import MenuGrid from './components/MenuGrid'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--cream)' }}>
      <Hero />
      <MenuGrid />
      <Footer />
    </main>
  )
}
