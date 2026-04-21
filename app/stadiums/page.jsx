import { stadiums } from '@/data/stadiums'
import StadiumCard from '@/components/StadiumCard'
import Link from 'next/link'

export default function StadiumsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8]">

      {/* Header */}
      <div className="relative px-8 md:px-16 pt-20 pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#c45e1a] opacity-5 skew-x-6 transform" />
        <Link href="/">
          <p className="text-[#c45e1a] text-xs uppercase tracking-widest mb-6 hover:text-[#e06b1f] transition-colors">
            ← Back
          </p>
        </Link>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          THE GROUNDS
        </h1>
        <p className="text-[#a09880] text-lg max-w-xl">
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