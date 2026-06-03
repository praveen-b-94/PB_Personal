const novels = [
  {
    title: 'Radiant Black',
    authors: 'Higgins, Costa, Carey',
    publisher: 'Image Comics',
    started: 'October 2021',
    rating: 5.0,
    blurb:
      'A fresh take on the superhero genre — grounded, emotionally honest, and visually stunning. Radiant Black treats the genre as a lens for exploring debt, purpose, and growing up. One of the best ongoing series in comics.',
  },
  {
    title: 'Reborn',
    authors: 'Millar, Capullo',
    publisher: 'Image Comics',
    started: 'April 2022',
    rating: 4.9,
    blurb:
      'What happens after death? Millar and Capullo answer that question with an epic, visually spectacular adventure. Greg Capullo\'s art alone is worth the price of admission.',
  },
  {
    title: 'The Old Guard',
    authors: 'Rucka, Fernandez, Miwa, Wynne',
    publisher: 'Image Comics',
    started: 'December 2021',
    rating: 4.6,
    blurb:
      'Immortal mercenaries, moral weight, and brutal action. Greg Rucka writes characters with real emotional depth, and Leandro Fernandez\'s gritty art is the perfect match.',
  },
  {
    title: 'God Country',
    authors: 'Cates, Shaw, Wordie, Hill',
    publisher: 'Image Comics',
    started: 'February 2022',
    rating: 4.6,
    blurb:
      'A gut-punch of a story about family, legacy, and a god-slaying sword in Texas. Donny Cates in peak form — big ideas wrapped in genuine heart.',
  },
]

function Stars({ rating }) {
  const full = Math.floor(rating)
  const partial = rating % 1
  return (
    <div className="flex items-center gap-1" title={`${rating}/5`}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="none">
          {i < full ? (
            <path
              fill="#f97316"
              d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27 5.23 15.71l.91-5.32L2.27 6.62l5.34-.78z"
            />
          ) : i === full && partial >= 0.5 ? (
            <>
              <defs>
                <linearGradient id={`half-${i}`}>
                  <stop offset="50%" stopColor="#f97316" />
                  <stop offset="50%" stopColor="#d1d5db" />
                </linearGradient>
              </defs>
              <path
                fill={`url(#half-${i})`}
                d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27 5.23 15.71l.91-5.32L2.27 6.62l5.34-.78z"
              />
            </>
          ) : (
            <path
              fill="#d1d5db"
              d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27 5.23 15.71l.91-5.32L2.27 6.62l5.34-.78z"
            />
          )}
        </svg>
      ))}
      <span className="text-neutral-400 text-xs ml-1">{rating}/5</span>
    </div>
  )
}

export default function Novels() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="section-heading">Graphic Novels</h1>
      <p className="section-sub">
        My favorite reads from Image Comics — ranked, reviewed, and annotated.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {novels.map((novel) => (
          <div key={novel.title} className="card p-6 hover:border-orange-300 transition-colors duration-200">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h2 className="text-neutral-900 font-bold text-lg leading-tight">{novel.title}</h2>
                <p className="text-neutral-400 text-sm mt-0.5">{novel.authors}</p>
              </div>
              <span className="text-xs text-orange-600 font-medium bg-orange-50 border border-orange-200 px-2 py-1 rounded-md whitespace-nowrap ml-3">
                {novel.publisher}
              </span>
            </div>
            <Stars rating={novel.rating} />
            <p className="text-neutral-500 text-sm leading-relaxed mt-4">{novel.blurb}</p>
            <p className="text-neutral-300 text-xs mt-4">Started {novel.started}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
