const testimonials = [
  {
    quote:
      'Tongole Tours gave us the most authentic Malawi experience. Every detail felt thoughtful and personal.',
    name: 'Sarah M.',
    location: 'United States',
  },
  {
    quote:
      'From Liwonde to Lake Malawi, the team was professional, warm, and deeply knowledgeable about every place.',
    name: 'David K.',
    location: 'United Kingdom',
  },
  {
    quote:
      'We asked for a custom family itinerary and they delivered beyond our expectations. Highly recommended.',
    name: 'Aisha T.',
    location: 'Kenya',
  },
]

export default function CustomersSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="font-body text-earth-500 text-xs tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="font-display text-midnight text-4xl md:text-5xl font-bold mt-3">
            What Says Our Customers
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <article
              key={i}
              className="p-8 border border-earth-100 bg-earth-50 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <p className="font-accent text-earth-500 italic text-lg leading-relaxed mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="font-display text-midnight text-base font-semibold">{item.name}</div>
              <div className="font-body text-gray-500 text-sm">{item.location}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
