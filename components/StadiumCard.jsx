import Link from 'next/link'
import Image from 'next/image'


export default function StadiumCard({ stadium }) {
  return (
    <Link href={`/stadiums/${stadium.slug}`}>
      <div className="group relative overflow-hidden cursor-pointer bg-[#111111] border border-[#222222] hover:border-[#c45e1a] transition-all duration-300">
        
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <div className="absolute inset-0 bg-[#1a4a3a] opacity-40 z-10" />
          {stadium.image ? (
            <Image
              src={stadium.image}
              alt={stadium.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-[#1a1a1a]" />
          )}
          {/* Region tag */}
          <div className="absolute top-3 left-3 z-20 bg-[#c45e1a] text-white text-xs uppercase tracking-widest px-2 py-1">
            {stadium.region}
          </div>
        </div>


        {/* Content */}
        <div className="p-5">
          <h2 className="text-lg font-bold text-[#f5f0e8] mb-1 leading-tight">
            {stadium.name}
          </h2>
          <p className="text-[#a09880] text-sm mb-3">
            {stadium.city}, {stadium.country}
          </p>
          <p className="text-[#c45e1a] text-xs uppercase tracking-widest">
            {stadium.pitchType}
          </p>
        </div>


        {/* Bottom geometric accent */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#c45e1a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />


      </div>
    </Link>
  )
}

