import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const clients = [
  { name: 'Vodafone', logo: '/logos/vodafone.svg', h: 28 },
  { name: 'CIB',      logo: '/logos/cib.svg',      h: 24 },
  { name: 'STC',      logo: '/logos/stc.svg',      h: 24 },
  { name: 'taager',   logo: '/logos/taager.svg',   h: 22 },
]

export default function Hero() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[#0b0b0b]">
      <div className="flex flex-col items-center gap-8 w-full max-w-2xl">

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-[#f0f0f0] tracking-tight leading-tight">
          Ahmed Ashref
        </h1>

        <p className="text-lg md:text-xl text-[#2dd4bf] font-normal -mt-2">
          Senior Software Engineer · 4+ yrs
        </p>

        <p className="text-[15px] md:text-[16px] text-[#4a4a4a] leading-[1.8] max-w-md -mt-2">
          Engineer who thinks in products. I care about the problem as much as the code — building things that feel right and ship.
        </p>

        {/* Worked with */}
        <div className="flex flex-col items-center gap-5 w-full">
          <span className="text-[11px] tracking-[0.1em] uppercase text-[#252525]">
            Worked with
          </span>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {clients.map(({ name, logo, h }) => (
              <img
                key={name}
                src={logo}
                alt={name}
                style={{ height: h, width: 'auto', opacity: 0.2, transition: 'opacity 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.2'}
              />
            ))}
          </div>
          <div className="w-full h-px bg-[#141414]" />
        </div>

        {/* Reach me on */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-[11px] tracking-[0.1em] uppercase text-[#2a2a2a]">
            Reach me on
          </span>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/201022644578"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] text-[#888888] border border-[#222222] rounded-[7px] px-5 py-2.5 transition-all duration-150 hover:border-[#444444] hover:text-[#e0e0e0] hover:bg-white/[0.03]"
            >
              <FaWhatsapp size={15} color="#25d366" />
              WhatsApp
            </a>
            <a
              href="https://x.com/xaaksw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] text-[#888888] border border-[#222222] rounded-[7px] px-5 py-2.5 transition-all duration-150 hover:border-[#444444] hover:text-[#e0e0e0] hover:bg-white/[0.03]"
            >
              <FaXTwitter size={14} color="#888888" />
              @xaaksw
            </a>
            <a
              href="https://www.linkedin.com/in/ahmedashrefsw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] text-[#888888] border border-[#222222] rounded-[7px] px-5 py-2.5 transition-all duration-150 hover:border-[#444444] hover:text-[#e0e0e0] hover:bg-white/[0.03]"
            >
              <FaLinkedinIn size={14} color="#0a66c2" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <p className="absolute bottom-8 text-[11px] text-[#202020] tracking-[0.04em]">
        © 2026 Ahmed Ashref
      </p>
    </main>
  )
}
