import { useState } from 'react'

const pieces = [
  {
    src: '/media/ifonlyicouldfly_nospiral.jpg',
    title: 'If Only I Could Fly',
    medium: 'Pencil & Digital',
    description:
      'A silhouette of an individual attempting to catapult from a tree tied to a stump, the scene and its reflection together forming the shape of an aircraft.',
  },
  {
    src: '/media/PB_tee_shirt_mountain_design_sunset.png',
    title: 'Above and Beyond',
    medium: 'Pencil & Digital',
    description:
      'A T-shirt design submission for my employer, Octo Consulting Group — featuring the company logo with a person standing on hand-drawn mountains beneath octagon-shaped clouds.',
  },
  {
    src: '/media/autumn_street.jpg',
    title: 'Autumn Street',
    medium: 'Pencil & Digital',
    description:
      'A suburban street during autumn, with leaves blanketing the ground and a dusty twilight produced by a setting sun casting long shadows across the landscape.',
  },
  {
    src: '/media/guitar_moody.jpg',
    title: 'OK With You / Me ~ Guitar',
    medium: 'Pencil & Digital',
    description:
      'A person playing guitar and contemplating the experiences and circumstances presently in his life. The quote represents his thoughts in the moment.',
  },
  {
    src: '/media/heart_gelada.jpg',
    title: 'Gelada ~ Heart on Sleeve',
    medium: 'Pencil & Digital',
    description:
      'The Gelada, a species of monkey famous for the vivid red patch on its chest, chosen here to represent the idea of wearing your heart on your sleeve.',
  },
  {
    src: '/media/bike_neighborhood.jpg',
    title: 'Inspirational Bicycle',
    medium: 'Pencil & Digital',
    description:
      'An illustration of a bicycle in a suburban neighborhood, paired with a quote designed to inspire change and forward momentum.',
  },
]

export default function Artwork() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="section-heading">Artwork Gallery</h1>
      <p className="section-sub">
        A selection of my original pieces — pencil sketches brought to life with digital rendering in
        Adobe Photoshop. Click any image for details.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pieces.map((piece, i) => (
          <button
            key={i}
            className={`card group text-left focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 ${
              selected === i ? 'ring-2 ring-orange-500' : 'hover:border-orange-400'
            }`}
            onClick={() => setSelected(selected === i ? null : i)}
          >
            <div className="overflow-hidden aspect-[4/3]">
              <img
                src={piece.src}
                alt={piece.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-neutral-900 font-semibold">{piece.title}</h3>
              <span className="text-orange-500 text-xs font-medium">{piece.medium}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Detail panel */}
      {selected !== null && (
        <div className="mt-8 card p-6 flex flex-col md:flex-row gap-6 border-orange-500/30">
          <img
            src={pieces[selected].src}
            alt={pieces[selected].title}
            className="w-full md:w-64 h-48 md:h-64 object-cover rounded-lg flex-shrink-0"
          />
          <div className="flex-1">
            <h2 className="text-neutral-900 text-xl font-bold mb-1">{pieces[selected].title}</h2>
            <span className="text-orange-500 text-sm font-medium block mb-4">
              {pieces[selected].medium}
            </span>
            <p className="text-neutral-500 leading-relaxed">{pieces[selected].description}</p>
            <button
              className="mt-4 text-sm text-neutral-400 hover:text-neutral-700 transition-colors"
              onClick={() => setSelected(null)}
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
