import { m } from 'framer-motion'
interface HeroProps {
  currentColor: 'amber' | 'indigo' | 'pink' | 'teal' | 'purple'
}

export default function Hero({ currentColor }: HeroProps) {
  const colorVariants = {
    indigo: 'from-indigo-500 to-purple-500',
    pink: 'from-pink-500 to-rose-500',
    teal: 'from-teal-500 to-emerald-500',
    amber: 'from-amber-500 to-orange-500',
    purple: 'from-purple-500 to-violet-500',
  }

  const imageMapping = {
    indigo: '/indigo.png',
    pink: '/pink.png',
    teal: '/teal.png',
    amber: '/amber.png',
    purple: '/purple.png',
  }

  return (
    <section
      className={`flex relative min-h-screen items-center justify-center overflow-hidden transition-colors duration-300 ${currentColor}`}
    >
      {/* Particles Background */}
      <div
        id="particles-js"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      />

      <div className="container flex relative z-10 mx-auto flex-col items-center justify-between px-4 py-16 md:flex-row">
        {/* Text content */}
        <div className="ml-0 md:ml-12 pb-11 pt-0 md:mb-0 md:w-1/2">
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="z-50 mb-6 text-3xl font-berkshire md:text-5xl lg:text-6xl"
          >
            Hi, I'm{' '}
            <span
              className={`bg-gradient-to-r ${colorVariants[currentColor]} animate-pulse bg-clip-text font-chocolate text-transparent`}
            >
              Mayar youness
            </span>
          </m.h1>

          <m.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="z-50 mb-6 font-berkshire text-mdmd:text-xl">
             our Vision, My Code – Let’s Build Something Extraordinary Together.
          </m.p>

          {/* CTA buttons */}
        </div>

        {/* Image/Graphic section */}
        <m.div
          animate={{ opacity: 1, x: 0 }}
          className="flex relative justify-center md:w-1/2"
        >
          <div
            className={`relative size-280 overflow-hidden md:size-[30rem] ${currentColor}-100 group`}
          >
            <img
              src={imageMapping[currentColor]}
              alt="Profile of Mayar Youness"
              className="z-50 size-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div
              className={`bg- absolute inset-0 ${currentColor}-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20`}
            />
          </div>

          {/* Floating elements */}
          <m.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity }}
            className={`absolute left-0 top-0 size-16 ${currentColor}-500 opacity-20 blur-xl`}
          />
        </m.div>
      </div>
    </section>
  )
}
