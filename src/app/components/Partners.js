const partners = [
  'Tongole Wilderness Retreat',
  'Mvuu Lodge — Liwonde',
  'Mkulumadzi Lodge — Majete',
  'Blue Zebra Lodge — Lake Malawi',
  'Kaya Mawa — Likoma Island',
  'Mumbo Island Lodge',
  'Chilinda Lodge — Nyika',
  'Zomba Forest Lodge',
  'Africa Wild Truck — Mulanje',
  'Nyasa Air Express',
  'Malawi Tourism Board',
]

export default function Partners() {
  return (
    <section className="py-16 bg-midnight border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <span className="font-body text-white/40 text-xs tracking-widest uppercase">
          Trusted Partners &amp; Lodges
        </span>
      </div>

      <div className="marquee-wrapper">
        {/* Double the list so the loop is seamless */}
        <div className="marquee-content">
          {[...partners, ...partners].map((p, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <span className="font-accent text-earth-300/60 text-sm italic whitespace-nowrap">
                {p}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-earth-500/40 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}