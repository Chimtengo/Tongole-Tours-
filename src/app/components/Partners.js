const partners = [
  { name: 'Tongole Wilderness Retreat', logo: '/images/partners/tongole-wilderness-retreat.png' },
  { name: 'Mvuu Lodge - Liwonde', logo: '/images/partners/mvuu-lodge-liwonde.png' },
  { name: 'Mkulumadzi Lodge - Majete', logo: '/images/partners/mkulumadzi-lodge-majete.png' },
  { name: 'Blue Zebra Lodge - Lake Malawi', logo: '/images/partners/blue-zebra-lodge-lake-malawi.png' },
  { name: 'Kaya Mawa - Likoma Island', logo: '/images/partners/kaya-mawa-likoma-island.png' },
  { name: 'Mumbo Island Lodge', logo: '/images/partners/mumbo-island-lodge.png' },
  { name: 'Chilinda Lodge - Nyika', logo: '/images/partners/chilinda-lodge-nyika.png' },
  { name: 'Zomba Forest Lodge', logo: '/images/partners/zomba-forest-lodge.png' },
  { name: 'Africa Wild Truck - Mulanje', logo: '/images/partners/africa-wild-truck-mulanje.png' },
  { name: 'Nyasa Air Express', logo: '/images/partners/nyasa-air-express.png' },
  { name: 'Malawi Tourism Board', logo: '/images/partners/malawi-tourism-board.png' },
]

export default function Partners() {
  return (
    <section className="py-16 bg-midnight border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <span className="font-body text-white/40 text-xs tracking-widest uppercase">
          Trusted Partners
        </span>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-content">
          {[...partners, ...partners].map((partner, i) => (
            <div key={`${partner.name}-${i}`} className="mx-8 min-w-[170px] flex flex-col items-center text-center">
              <div className="h-14 w-32 flex items-center justify-center mb-3">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-14 max-w-[120px] object-contain"
                />
              </div>
              <span className="font-accent text-earth-300/70 text-sm italic leading-snug">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
