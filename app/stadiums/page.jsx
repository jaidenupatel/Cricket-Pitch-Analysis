import { stadiums } from '@/data/stadiums'
import StadiumCard from '@/components/StadiumCard'
import Link from 'next/link'

export default function StadiumsPage() {
  return (
    <main className="min-h-screen bg-[#1e1245] text-white">

      {/* Decorative shapes */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-[#f5c518] opacity-20 rotate-45 transform" />
      <div className="absolute top-32 right-32 w-12 h-12 bg-[#e91e8c] opacity-30 transform" style={{clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'}} />

      {/* Top accent bar */}
      <div className="w-full h-1 bg-gradient-to-r from-[#e91e8c] via-[#f5c518] to-[#00b4d8]" />

      {/* Header */}
      <div className="relative px-8 md:px-16 pt-16 pb-12">
        <Link href="/">
          <p className="text-[#f5c518] text-xs uppercase tracking-widest mb-6 hover:text-white transition-colors inline-flex items-center gap-2">
            <span>←</span> Back
          </p>
        </Link>

        <div className="flex items-end gap-4 mb-4">
          <div className="w-1 h-16 bg-[#e91e8c]" />
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            THE GROUNDS
          </h1>
        </div>

        <p className="text-white/60 text-lg max-w-xl ml-5">
          Eleven venues across four continents. Each one a unique
          intersection of climate, geography, and architectural identity.
        </p>
      </div>

      {/* Grid */}
      <div className="px-8 md:px-16 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stadiums.map((stadium) => (
            <StadiumCard key={stadium.slug} stadium={stadium} />
          ))}
        </div>
      </div>

    </main>
  )
}