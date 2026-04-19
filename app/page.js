import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8]">

      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 overflow-hidden">

        {/* Background geometric shape */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#c45e1a] opacity-10 skew-x-6 transform origin-top-right" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#1a4a3a] opacity-20 -skew-x-6 transform" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          <p className="text-[#c45e1a] uppercase tracking-widest text-sm mb-4 font-medium">
            A Study in Pitch Science & Stadium Aesthetics
          </p>
          <h1 className="text-6xl md:text-8xl font-bold leading-none mb-6 tracking-tight">
            PITCH &<br />PLACE
          </h1>
          <p className="text-lg md:text-xl text-[#a09880] max-w-xl mb-10 leading-relaxed">
            Eleven grounds. Every climate. One sport.
            Exploring how geography, conditions, and architecture
            shape the game of cricket.
          </p>
          <Link href="/stadiums">
            <button className="bg-[#c45e1a] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#e06b1f] transition-colors duration-200">
              Explore Stadiums →
            </button>
          </Link>
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-8 right-8 text-[#a09880] text-xs uppercase tracking-widest">
          11 Grounds · 4 Continents · 3 Formats
        </div>
      </div>

    </main>
  )
}
