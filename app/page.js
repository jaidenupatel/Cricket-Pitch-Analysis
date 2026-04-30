import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1e1245] text-white relative flex flex-col overflow-hidden">

      {/* Top accent bar */}
      <div className="w-full h-1 bg-gradient-to-r from-[#e91e8c] via-[#f5c518] to-[#00b4d8] flex-shrink-0" />

      {/* Decorative shapes */}
      <div className="absolute top-16 right-0 w-72 h-72 bg-[#e91e8c] opacity-10 rotate-45 transform translate-x-36 pointer-events-none" />
      <div
        className="absolute top-24 right-24 w-16 h-16 bg-[#f5c518] opacity-20 pointer-events-none"
        style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}
      />
      <div
        className="absolute bottom-32 left-8 w-24 h-24 bg-[#00b4d8] opacity-15 pointer-events-none"
        style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
      />
      <div className="absolute bottom-16 right-16 w-14 h-14 bg-[#e91e8c] opacity-20 rotate-45 transform pointer-events-none" />

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center items-center px-16 md:px-24 py-24 relative z-10 text-center">
        <div className="max-w-3xl w-full flex flex-col items-center">

          {/* Badge */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2 h-2 bg-[#f5c518] rotate-45 transform flex-shrink-0" />
            <p
              className="text-[#f5c518] uppercase tracking-widest text-xs font-semibold"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              A Study of Pitch Science & Stadium Aesthetics
            </p>
            <div className="w-2 h-2 bg-[#f5c518] rotate-45 transform flex-shrink-0" />
          </div>

          {/* Title */}
          <h1
            className="font-black leading-none mb-10 tracking-tight"
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: 'clamp(5rem, 12vw, 10rem)',
            }}
          >
            <span className="text-white">PITCH</span>
            <span className="text-[#f5c518]"> &</span>
            <br />
            <span className="text-white">PLACE</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-white/60 max-w-lg mb-14 leading-relaxed"
            style={{
              fontFamily: 'var(--font-nunito)',
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
            }}
          >
            Exploring how geography, conditions, and architecture
            shape the game of cricket across 11 unique grounds around the world.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '60px', marginTop: '80px', flexWrap: 'wrap', justifyContent: 'center' }}>

            {/* Explore Stadiums */}
            <Link href="/stadiums" style={{textDecoration: 'none'}}>
              <div
                style={{
                  fontFamily: 'var(--font-poppins)',
                  clipPath: 'polygon(30px 0%, calc(100% - 30px) 0%, 100% 50%, calc(100% - 30px) 100%, 30px 100%, 0% 50%)',
                  backgroundColor: '#e91e8c',
                  color: 'white',
                  padding: '28px 80px',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  cursor: 'pointer',
                }}
              >
                Explore Stadiums
              </div>
            </Link>

            {/* Pitch Tool */}
            <Link href="/tool" style={{textDecoration: 'none'}}>
              <div
                style={{
                  fontFamily: 'var(--font-poppins)',
                  clipPath: 'polygon(30px 0%, calc(100% - 30px) 0%, 100% 50%, calc(100% - 30px) 100%, 30px 100%, 0% 50%)',
                  backgroundColor: '#00b4d8',
                  color: 'white',
                  padding: '28px 80px',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  cursor: 'pointer',
                }}
              >
                Pitch Tool
              </div>
            </Link>

          </div>

        </div>
              </div>

    </main>
  )
}