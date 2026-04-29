import { stadiums } from '@/data/stadiums'
import Image from 'next/image'
import Link from 'next/link'

export function generateStaticParams() {
  return stadiums.map((s) => ({ slug: s.slug }))
}

function StatBar({ label, value }) {
  const qualitativeLabels = { 1: 'Low', 3: 'Moderate', 5: 'High' }
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs uppercase tracking-widest text-white/60">
          {label}
        </span>
        <span className="text-xs text-[#f5c518] font-bold">
          {value}/5
        </span>
      </div>
      <div className="flex gap-1 mb-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`h-3 flex-1 ${
              i <= value ? 'bg-[#e91e8c]' : 'bg-[#3d2b79]'
            }`}
          />
        ))}
      </div>
      <div className="flex justify-between">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex-1 text-center">
            {qualitativeLabels[i] && (
              <span className="text-white/30 text-xs">
                {qualitativeLabels[i]}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function InningsRow({ format, first, second }) {
  if (!first && !second) return null
  return (
    <div className="mb-3">
      <p className="text-xs uppercase tracking-widest text-white/60 mb-2">
        {format}
      </p>
      <div className="flex gap-4">
        <div className="flex-1 bg-[#2d1b69] p-3 border border-[#3d2b79]">
          <p className="text-xs text-white/60 mb-1">1st Inn</p>
          <p className="text-2xl font-bold text-white">{first}</p>
        </div>
        <div className="flex-1 bg-[#2d1b69] p-3 border border-[#3d2b79]">
          <p className="text-xs text-white/60 mb-1">2nd Inn</p>
          <p className="text-2xl font-bold text-[#f5c518]">{second}</p>
        </div>
      </div>
    </div>
  )
}

export default async function StadiumPage({params}) {
  const {slug} = await params
  const stadium = stadiums.find((s) => s.slug === slug)

  if (!stadium) {
    return (
      <main className="min-h-screen bg- text-white flex items-center justify-center">
        <p>Stadium not found.</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg- text-white">

      {/* Hero */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg- opacity-60 z-10" />
        {stadium.image ? (
          <Image
            src={stadium.image}
            alt={stadium.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#1a1a1a]" />
        )}
        {/* Angled color band */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          <div className="relative bg-[#e91e8c] px-8 md:px-16 py-6 skew-y-1 transform -mb-2">
            <div className="-skew-y-1 transform">
              <p className="text-white/70 text-xs uppercase tracking-widest mb-1">
                {stadium.city}, {stadium.country}
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                {stadium.name}
              </h1>
            </div>
          </div>
        </div>
        {/* Back link */}
        <Link href="/stadiums">
          <p className="absolute top-6 left-8 z-30 text-white text-xs uppercase tracking-widest hover:text-[#c45e1a] transition-colors">
            ← All Grounds
          </p>
        </Link>
      </div>

      {/* Body */}
      <div className="px-8 md:px-16 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left — Description & Aesthetic */}
        <div>
          <div className="mb-8">
            <p className="text-[#f5c518] text-xs uppercase tracking-widest mb-3">
              About this Ground
            </p>
            <p className="text-white/60 leading-relaxed">
              {stadium.description}
            </p>
          </div>
          <div className="bg-[#2d1b69] border border-[#3d2b79] p-6">
            <p className="text-[#f5c518] text-xs uppercase tracking-widest mb-2">
              Aesthetic Identity
            </p>
            <p className="text-white leading-relaxed">
              {stadium.aestheticHook}
            </p>
          </div>
        </div>

        {/* Right — Stats */}
        <div>

          {/* Pitch Conditions */}
          <div className="mb-10">
            <p className="text-[#f5c518] text-xs uppercase tracking-widest mb-6">
              Pitch Conditions
            </p>
            <StatBar label="Grass Cover" value={stadium.grassCover} />
            <StatBar label="Moisture" value={stadium.moisture} />
            <StatBar label="Cracks" value={stadium.cracks} />
            <StatBar label="Dew Factor" value={stadium.dew} />
          </div>

          {/* Innings Averages */}
          <div>
            <p className="text-[#f5c518] text-xs uppercase tracking-widest mb-6">
              Innings Averages (Recent)
            </p>
            <InningsRow
              format="Test"
              first={stadium.testAvg1st}
              second={stadium.testAvg2nd}
            />
            <InningsRow
              format="ODI"
              first={stadium.odiAvg1st}
              second={stadium.odiAvg2nd}
            />
            <InningsRow
              format={stadium.t20League || 'Domestic T20'}
              first={stadium.t20Avg1st}
              second={stadium.t20Avg2nd}
            />
          </div>

        </div>
      </div>

    </main>
  )
}
