import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1e1245] text-white overflow-hidden">

      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#e91e8c] opacity-20 rotate-45 transform translate-x-32 -translate-y-16" />
      <div className="absolute top-20 right-40 w-24 h-24 bg-[#f5c518] opacity-30 rotate-12 transform" style={{clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'}} />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#00b4d8] opacity-20 transform -rotate-12" style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}} />
      <div className="absolute bottom-40 right-20 w-20 h-20 bg-[#e91e8c] opacity-25 rotate-45 transform" />
      <div className="absolute top-1/2 right-8 w-16 h-16 bg-[#f5c518] opacity-20 transform rotate-12" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}} />

      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col justify-center px-8 md:px-16">

        {/* Top accent bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e91e8c] via-[#f5c518] to-[#00b4d8]" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl">

          {/* ICC style badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-[#f5c518] rotate-45 transform" />
            <p className="text-[#f5c518] uppercase tracking-widest text-xs font-bold">
              A Study in Pitch Science & Stadium Aesthetics
            </p>
            <div className="w-2 h-2 bg-[#f5c518] rotate-45 transform" />
          </div>

          <h1 className="text-6xl md:text-9xl font-black leading-none mb-6 tracking-tight">
            <span className="text-white">PITCH</span>
            <span className="text-[#f5c518]"> &</span>
            <br />
            <span className="text-white">PLACE</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed">
            Exploring how geography, conditions, and architecture
            shape the game of cricket across eleven unique grounds.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/stadiums">
              <button className="bg-[#e91e8c] text-white px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-[#c4177a] transition-colors duration-200">
                Explore Stadiums →
              </button>
            </Link>
            <Link href="/tool">
              <button className="border-2 border-[#f5c518] text-[#f5c518] px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-[#f5c518] hover:text-[#1e1245] transition-colors duration-200">
                Pitch Tool →
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center">
          <div className="flex gap-3">
            <div className="w-3 h-3 bg-[#e91e8c] rotate-45 transform" />
            <div className="w-3 h-3 bg-[#f5c518] rotate-45 transform" />
            <div className="w-3 h-3 bg-[#00b4d8] rotate-45 transform" />
          </div>
          <p className="text-white/40 text-xs uppercase tracking-widest">
            11 Grounds · 4 Continents · 3 Formats
          </p>
        </div>

      </div>
    </main>
  )
}