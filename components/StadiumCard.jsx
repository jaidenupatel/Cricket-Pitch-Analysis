import Link from 'next/link'
import Image from 'next/image'

export default function StadiumCard({ stadium }) {
  return (
    <Link href={`/stadiums/${stadium.slug}`}>
      <div className="group relative overflow-hidden cursor-pointer bg-[#2d1b69] border border-[#3d2b79] hover:border-[#e91e8c] transition-all duration-300">

        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <div className="absolute inset-0 bg-[#1e1245] opacity-40 z-10" />
          {stadium.image ? (
            <Image
              src={stadium.image}
              alt={stadium.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-[#2d1b69] flex items-center justify-center">
              <div className="w-16 h-16 bg-[#e91e8c] opacity-30 rotate-45 transform" />
            </div>
          )}
          {/* Region tag */}
          <div className="absolute top-3 left-3 z-20 bg-[#e91e8c] text-white text-xs uppercase tracking-widest px-2 py-1 font-bold">
            {stadium.region}
          </div>
          {/* Decorative corner diamond */}
          <div className="absolute top-3 right-3 z-20 w-3 h-3 bg-[#f5c518] rotate-45 transform" />
        </div>

        {/* Content */}
        <div className="p-5">
          <h2 className="text-lg font-black text-white mb-1 leading-tight">
            {stadium.name}
          </h2>
          <p className="text-white/50 text-sm mb-3">
            {stadium.city}, {stadium.country}
          </p>
          <p className="text-[#f5c518] text-xs uppercase tracking-widest font-bold">
            {stadium.pitchType}
          </p>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#e91e8c] to-[#f5c518] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

      </div>
    </Link>
  )
}