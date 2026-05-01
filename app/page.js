import Link from 'next/link'
import { StarFour, StarSix, Droplet, Diamond, FlowerCross } from '@/components/WorldCupShapes'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1e1245] text-white relative flex flex-col overflow-hidden">

      {/* Top accent bar */}
      <div className="w-full h-1 bg-gradient-to-r from-[#e91e8c] via-[#f5c518] to-[#00b4d8] flex-shrink-0" />

      {/* Decorative World Cup shapes */}
      <div className="absolute top-10 left-32 pointer-events-none">
        <StarSix color="#e91e8c" size={110} opacity={0.15} rotate={10} />
      </div>
      <div className="absolute top-12 right-16 pointer-events-none">
        <StarFour color="#e91e8c" size={120} opacity={0.15} rotate={15} />
      </div>
      <div className="absolute top-8 right-64 pointer-events-none">
        <Diamond color="#f5c518" size={40} opacity={0.25} rotate={20} />
      </div>
      <div className="absolute top-1/3 right-8 pointer-events-none">
        <Droplet color="#00b4d8" size={80} opacity={0.15} rotate={-20} />
      </div>
      <div className="absolute bottom-24 right-32 pointer-events-none">
        <StarSix color="#f5c518" size={70} opacity={0.15} rotate={10} />
      </div>
      <div className="absolute bottom-16 left-16 pointer-events-none">
        <FlowerCross color="#e91e8c" size={100} opacity={0.12} rotate={15} />
      </div>
      <div className="absolute top-1/2 left-8 pointer-events-none">
        <Diamond color="#00b4d8" size={30} opacity={0.2} rotate={45} />
      </div>
      <div className="absolute top-1/3 left-48 pointer-events-none">
        <StarFour color="#00b4d8" size={100} opacity={0.12} rotate={30} />
      </div>
      <div className="absolute bottom-1/3 right-48 pointer-events-none">
        <StarFour color="#f5c518" size={50} opacity={0.12} rotate={30} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center items-center px-16 md:px-24 py-24 relative z-10 text-center">
        <div className="max-w-3xl w-full flex flex-col items-center">

          {/* Badge */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2 h-2 bg-[#f5c518] rotate-45 transform flex-shrink-0" />
            <p
              className="text-[#f5c518] uppercase tracking-widest text-xs font-semibold"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              A Study of Pitch Science & Stadium Aesthetics
            </p>
            <div className="w-2 h-2 bg-[#f5c518] rotate-45 transform flex-shrink-0" />
          </div>

          {/* Title */}
          <h1
            className="font-black leading-none mb-10 tracking-relaxed"
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: 'clamp(5rem, 12vw, 10rem)',
            }}
            /* 5, 12, 10*/
          >
            <span className="text-white">PR</span>
            <span className="text-[#f5c518]">'</span>
            <span className="text-white">23</span>
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
          <div style={{ display: 'flex', gap: '60px', marginTop: '5px', flexWrap: 'wrap', justifyContent: 'center' }}>

            {/* Explore Stadiums */}
            <Link href="/stadiums" style={{textDecoration: 'none'}}>
              <div
                style={{
                  fontFamily: 'var(--font-montserrat)',
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
                  fontFamily: 'var(--font-montserrat)',
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