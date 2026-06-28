import { useState } from 'react'

const genres = [
  { name: 'Pop-Punk', desc: 'High-energy, emotionally charged anthems with catchy hooks.' },
  { name: 'Post-Hardcore', desc: 'Intense, layered sound blending aggression with melody.' },
  { name: 'Synth-Rock', desc: 'Electronic textures fused with rock instrumentation.' },
  { name: 'Power Pop', desc: 'Big choruses, tight harmonies, and irresistible energy.' },
  { name: 'Alternative Rock', desc: 'Broad, eclectic — the genre that keeps reinventing itself.' },
]

const bands = [
  {
    name: 'All Time Low',
    genre: 'Pop-Punk',
    description:
      'A Baltimore staple. All Time Low have been crafting anthemic pop-punk since the mid-2000s, with an uncanny ability to make every song feel like a stadium moment. Their blend of humor, heart, and hooks is unmatched in the genre.',
    link: 'https://www.iheartradio.com/artist/all-time-low-60666',
  },
  {
    name: 'One OK Rock',
    genre: 'Post-Hardcore / Alternative Rock',
    description:
      'A Japanese rock band with a genuinely global sound. Their evolution from J-rock to arena-scale alternative rock is remarkable, and vocalist Taka\'s range is jaw-dropping. Ambitions, 35xxxv, and Ambitions are essential listens.',
    link: 'https://soundcloud.com/one_ok_rock',
  },
  {
    name: 'Against the Current',
    genre: 'Pop-Rock',
    description:
      'Chrissy Costanza\'s vocals are the centrepiece — expressive, powerful, and perfectly balanced against the band\'s polished production. Against the Current sits at the sweet spot between pop accessibility and rock edge.',
    link: 'https://www.againstthecurrent.com',
  },
  {
    name: 'Set It Off',
    genre: 'Pop-Punk / Synth-Pop',
    description:
      'Florida\'s finest. Set It Off blend theatrical flair with infectious pop-punk energy. Cody Carson\'s versatility as a vocalist keeps every album feeling fresh, from the raw early records to the synth-forward later era.',
    link: 'https://www.youtube.com/user/setitoffband',
  },
  {
    name: 'The Material',
    genre: 'Alternative Rock',
    description:
      'A more under-the-radar pick — tight songwriting, atmospheric production, and a sound that rewards close listening. The kind of band you discover and immediately wonder why they aren\'t bigger.',
    link: null,
  },
]

export default function Music() {
  const [activeBand, setActiveBand] = useState(bands[0])

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="section-heading">Music</h1>
      <p className="section-sub">
        Genres I live in, and the bands that define them for me.
      </p>

      {/* Genre pills */}
      <section className="mb-16">
        <h2 className="text-lg font-semibold text-neutral-900 mb-4">Favorite Genres</h2>
        <div className="flex flex-wrap gap-3">
          {genres.map(({ name, desc }) => (
            <div key={name} className="group relative">
              <span className="inline-block bg-white border border-neutral-200 hover:border-orange-500 text-neutral-700 text-sm font-medium px-4 py-2 rounded-full cursor-default transition-colors duration-200 shadow-sm">
                {name}
              </span>
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 bg-white border border-neutral-200 rounded-lg px-3 py-2 text-xs text-neutral-500 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-10 text-center shadow-xl">
                {desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bands */}
      <section>
        <h2 className="text-lg font-semibold text-neutral-900 mb-6">Favorite Bands</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Band selector */}
          <div className="flex flex-col gap-2">
            {bands.map((band) => (
              <button
                key={band.name}
                onClick={() => setActiveBand(band)}
                className={`text-left px-4 py-3 rounded-lg border transition-all duration-200 ${
                  activeBand.name === band.name
                    ? 'bg-orange-50 border-orange-400 text-neutral-900'
                    : 'bg-white border-neutral-200 text-neutral-500 hover:border-neutral-300 hover:text-neutral-800'
                }`}
              >
                <div className="font-medium text-sm">{band.name}</div>
                <div className="text-xs text-neutral-400 mt-0.5">{band.genre}</div>
              </button>
            ))}
          </div>

          {/* Band detail */}
          <div className="md:col-span-2 card p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-neutral-900 text-xl font-bold">{activeBand.name}</h3>
                <span className="text-orange-500 text-sm">{activeBand.genre}</span>
              </div>
              {activeBand.link && (
                <a
                  href={activeBand.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-neutral-400 hover:text-orange-500 transition-colors border border-neutral-200 hover:border-orange-400 px-3 py-1.5 rounded-lg"
                >
                  Listen ↗
                </a>
              )}
            </div>
            <p className="text-neutral-500 leading-relaxed">{activeBand.description}</p>
          </div>
        </div>
      </section>
      </div>
  )
}
