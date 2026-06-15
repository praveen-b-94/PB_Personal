import { Link } from 'react-router-dom'

const highlights = [
  { emoji: '💻', label: 'Technologist', detail: 'Software Quality and DevOps' },
  { emoji: '🎨', label: 'Digital Artist', detail: 'Pencil sketching + Photoshop' },
  { emoji: '🎵', label: 'Music Producer', detail: 'Synth & electronic beats' },
  { emoji: '🏋️', label: 'Gym Rat', detail: 'Heavy lifting to hard beats' },
]

const sections = [
  {
    heading: 'Who I Am',
    body: `A dreamer turned doer — an innovator, a seeker of wisdom, and a navigator of life's endless
    possibilities. I sharpen my mind each day, honing my skills and expanding my perspective, continuously
    building upon my foundation, brick by brick. Every day is an opportunity to push my boundaries,
    refine my craft, and make life more meaningful than the last.`,
  },
  {
    heading: 'What I Do',
    body: `My work is about delivering solutions, optimizing workflows, and building systems that drive
    efficiency and innovation. I thrive at the intersection of logic and creativity — whether it's designing
    elegant interfaces or tackling intricate puzzles, I approach every problem with growth, curiosity, and
    a drive to make an impact.`,
  },
  {
    heading: 'In the Moonlight',
    body: `I live in the vibrant DC area, where I explore its diverse food scene — sushi, baklava, bubble tea,
    burritos, paneer tikka masala. I embody rhythm through Bachata and Salsa. I create works of art that
    capture expression of emotion and passion, and experiment with production of electronic music beats.
    No matter what I'm doing, I go all in.`,
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-100 via-orange-50 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 py-28 md:py-36 flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-orange-500 font-semibold tracking-widest text-sm uppercase mb-4">
              Welcome
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 leading-tight mb-6">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                Praveen
              </span>
              .
            </h1>
            <p className="text-neutral-500 text-lg max-w-lg mb-8">
              Creative, aficionado, and lifelong learner based in the DC area.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Link to="/resume" className="btn-primary">
                View Resume
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-neutral-300 hover:border-neutral-400 text-neutral-600 hover:text-neutral-900 font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative w-52 h-52 md:w-64 md:h-64">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 to-orange-300 blur-2xl opacity-25" />
              <img
                src="/media/pb_the_creator_downscaled.png"
                alt="Praveen Bachoti"
                className="relative w-full h-full rounded-full object-cover border-2 border-orange-400/50 shadow-xl"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {highlights.map(({ emoji, label, detail }) => (
            <div
              key={label}
              className="card p-4 text-center hover:border-orange-400 transition-colors duration-200"
            >
              <div className="text-3xl mb-2">{emoji}</div>
              <div className="text-neutral-900 text-sm font-semibold mb-1">{label}</div>
              <div className="text-neutral-400 text-xs">{detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About sections */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-8">
        {sections.map(({ heading, body }) => (
          <div key={heading} className="card p-6 hover:border-orange-300 transition-colors duration-200">
            <h2 className="text-neutral-900 font-semibold text-lg mb-3">{heading}</h2>
            <p className="text-neutral-500 text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </section>
    </>
  )
}
