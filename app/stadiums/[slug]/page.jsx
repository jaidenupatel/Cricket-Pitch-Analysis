import { stadiums } from '@/data/stadiums'
import Image from 'next/image'
import Link from 'next/link'

export async function generateStaticParams() {
  return stadiums.map((s) => ({ slug: s.slug }))
}

function StatBar({ label, value }) {
  const qualitativeLabels = { 1: 'Low', 3: 'Moderate', 5: 'High' }
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span
          className="text-xs uppercase tracking-widest text-white/60"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          {label}
        </span>
        <span
          className="text-xs text-[#f5c518] font-bold"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
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
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex-1 text-center">
            {qualitativeLabels[i] && (
              <span
                className="text-white/30 text-xs"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
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
    <div className="mb-5">
      <p
        className="text-xs uppercase tracking-widest text-white/50 mb-3"
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        {format}
      </p>
      <div className="flex gap-4">
        <div className="flex-1 bg-[#2d1b69] p-4 border border-[#3d2b79]">
          <p
            className="text-xs text-white/50 mb-1"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            1st Inn
          </p>
          <p
            className="text-3xl font-black text-white"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {first}
          </p>
        </div>
        <div className="flex-1 bg-[#2d1b69] p-4 border border-[#3d2b79]">
          <p
            className="text-xs text-white/50 mb-1"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            2nd Inn
          </p>
          <p
            className="text-3xl font-black text-[#f5c518]"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {second}
          </p>
        </div>
      </div>
    </div>
  )
}

export default async function StadiumPage({ params }) {
  const { slug } = await params
  const stadium = stadiums.find((s) => s.slug === slug)

  if (!stadium) {
    return (
      <main className="min-h-screen bg-[#1e1245] text-white flex items-center justify-center">
        <p>Stadium not found.</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#1e1245] text-white">

      {/* Top accent bar */}
      <div className="w-full h-1 bg-gradient-to-r from-[#e91e8c] via-[#f5c518] to-[#00b4d8]" />

      {/* Hero image */}
      <div className="relative h-[55vh] w-full overflow-hidden">
        {stadium.image ? (
          <Image
            src={stadium.image}
            alt={stadium.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#2d1b69] flex items-center justify-center">
            <div className="w-24 h-24 bg-[#e91e8c] opacity-30 rotate-45 transform" />
          </div>
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1245] via-[#1e1245]/40 to-transparent" />

        {/* Back link — top left with proper padding */}
        <div className="absolute top-6 left-8 z-20">
          <Link href="/stadiums">
            <p
              className="text-white/70 text-xs uppercase tracking-widest hover:text-[#f5c518] transition-colors"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              ← All Grounds
            </p>
          </Link>
        </div>

        {/* Stadium name — bottom of hero, no overlap */}
        <div className="absolute bottom-0 left-0 w-full px-10 md:px-16 pb-8 z-20">
          <p
            className="text-white/50 text-xs uppercase tracking-widest mb-2"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {stadium.city}, {stadium.country}
          </p>
          <h1
            className="font-black text-white leading-tight"
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
            }}
          >
            {stadium.name}
          </h1>
          {/* Pink underline accent */}
          <div className="mt-3 w-16 h-1 bg-[#e91e8c]" />
        </div>
      </div>

      {/* Body */}
      <div className="px-10 md:px-16 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">

        {/* Left — Description & Aesthetic */}
        <div>
          <p
            className="text-[#f5c518] text-xs uppercase tracking-widest mb-4"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            About this Ground
          </p>
          <p
            className="text-white/70 leading-relaxed mb-10"
            style={{ fontFamily: 'var(--font-nunito)', fontSize: '1rem' }}
          >
            {stadium.description}
          </p>

          <div className="bg-[#2d1b69] border border-[#3d2b79] p-6">
            <p
              className="text-[#f5c518] text-xs uppercase tracking-widest mb-3"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Aesthetic Identity
            </p>
            <p
              className="text-white/80 leading-relaxed"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              {stadium.aestheticHook}
            </p>
          </div>
        </div>

        {/* Right — Stats */}
        <div>
          {/* Pitch Conditions */}
          <p
            className="text-[#f5c518] text-xs uppercase tracking-widest mb-6"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Pitch Conditions
          </p>
          <div className="mb-12">
            <StatBar label="Grass Cover" value={stadium.grassCover} />
            <StatBar label="Moisture" value={stadium.moisture} />
            <StatBar label="Cracks" value={stadium.cracks} />
            <StatBar label="Dew Factor" value={stadium.dew} />
          </div>

          {/* Innings Averages */}
          <p
            className="text-[#f5c518] text-xs uppercase tracking-widest mb-6"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
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

    </main>
  )
}
