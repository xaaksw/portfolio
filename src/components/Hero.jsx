const TEAL = 'oklch(0.72 0.11 178)'

const logos = [
  { name: 'Vodafone', src: '/logos/vodafone.svg', h: 26 },
  { name: 'CIB',      src: '/logos/cib.svg',      h: 24 },
  { name: 'STC',      src: '/logos/stc.svg',      h: 24 },
  { name: 'taager',   src: '/logos/taager.svg',   h: 22 },
]

export default function Hero() {
  return (
    <div style={{ minHeight: '100vh', background: '#0c0c0d', color: '#ededec', fontFamily: "'Space Grotesk', sans-serif", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: 940, padding: '0 40px', display: 'flex', flexDirection: 'column' }}>

        {/* Header */}
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '28px 0', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5f6664' }}>
          <span style={{ fontSize: 15 }}>Ahmed Ashref</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 7, color: TEAL, fontSize: 11 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: TEAL, flexShrink: 0 }} />
            Open for new ideas
          </span>
        </header>

        <div style={{ height: 1, background: '#1c1d1f' }} />

        {/* Main */}
        <main style={{ display: 'flex', flexDirection: 'column', gap: 34, padding: '96px 0 104px' }}>
          <h1 style={{ margin: 0, fontSize: 'clamp(42px, 7vw, 76px)', fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 1.05 }}>
            Senior Software<br />
            Engineer who<br />
            thinks in <span style={{ color: TEAL }}>products</span>.
          </h1>

          <p style={{ margin: 0, maxWidth: '52ch', fontSize: 17, lineHeight: 1.8, color: '#8b918f' }}>
            Engineer who thinks in products. I care about the problem as much as the code — building things that feel right and ship.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
            <a
              href="https://wa.me/201022644578"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, padding: '14px 22px', borderRadius: 8, background: TEAL, color: '#08211f', fontWeight: 500, transition: 'opacity 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              WhatsApp me
            </a>
            <a
              href="https://x.com/xaaksw"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, padding: '14px 22px', borderRadius: 8, border: '1px solid #24262a', color: '#a8aeac', transition: 'border-color 0.15s, color 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#3d4045'; e.currentTarget.style.color = '#ededec' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#24262a'; e.currentTarget.style.color = '#a8aeac' }}
            >
              @xaaksw
            </a>
            <a
              href="https://www.linkedin.com/in/ahmedashrefsw"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, padding: '14px 22px', borderRadius: 8, border: '1px solid #24262a', color: '#a8aeac', transition: 'border-color 0.15s, color 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#3d4045'; e.currentTarget.style.color = '#ededec' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#24262a'; e.currentTarget.style.color = '#a8aeac' }}
            >
              LinkedIn
            </a>
            <button
              data-cal-link="xaaksw"
              data-cal-origin="https://cal.com"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, padding: '14px 22px', borderRadius: 8, border: '1px solid #24262a', color: '#a8aeac', background: 'transparent', cursor: 'pointer', transition: 'border-color 0.15s, color 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#3d4045'; e.currentTarget.style.color = '#ededec' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#24262a'; e.currentTarget.style.color = '#a8aeac' }}
            >
              Book a call
            </button>
          </div>
        </main>

        {/* Worked with */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 20, paddingBottom: 96 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#4a4f4d' }}>
            Worked with
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', border: '1px solid #17181a', borderRadius: 10, overflow: 'hidden' }}>
            {logos.map(({ name, src, h }, i) => (
              <div
                key={name}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 0', borderRight: i < logos.length - 1 ? '1px solid #17181a' : 'none' }}
              >
                <img src={src} alt={name} style={{ height: h, opacity: 0.3 }} />
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer style={{ marginTop: 'auto', borderTop: '1px solid #17181a', padding: '22px 0 40px', fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.06em', color: '#3a3d3f' }}>
          <span>© 2026 Ahmed Ashref</span>
        </footer>

      </div>
    </div>
  )
}
