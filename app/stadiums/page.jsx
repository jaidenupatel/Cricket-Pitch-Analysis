import { stadiums } from '@/data/stadiums'
import StadiumCard from '@/components/StadiumCard'
import Link from 'next/link'
import { StarFour, StarSix, Droplet, Diamond, FlowerCross } from '@/components/WorldCupShapes'

export default function StadiumsPage() {
  return (
    <main className="min-h-screen bg-[#1e1245] text-white">

      {/* Decorative World Cup shapes */}
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
        <FlowerCross color="#e91e8c" size={60} opacity={0.12} rotate={0} />
      </div>
      <div className="absolute top-1/2 left-8 pointer-events-none">
        <Diamond color="#00b4d8" size={30} opacity={0.2} rotate={45} />
      </div>
      <div className="absolute bottom-1/3 right-48 pointer-events-none">
        <StarFour color="#f5c518" size={50} opacity={0.12} rotate={30} />
      </div>

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