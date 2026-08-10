import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const clients = [
  { name: 'Vodafone', style: 'tracking-widest' },
  { name: 'CIB',      style: 'tracking-widest' },
  { name: 'STC',      style: 'tracking-widest' },
  { name: 'taager',   style: 'tracking-wide' },
]

export default function Hero() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[#0b0b0b]">
      <div className="flex flex-col items-center gap-6 max-w-sm w-full">

        <h1 className="text-5xl md:text-[3.5rem] font-semibold text-[#f0f0f0] tracking-tight leading-tight">
          Ahmed Ashref
        </h1>

        <p className="text-[17px] text-[#2dd4bf] font-normal">
          Senior Software Engineer · 4+ yrs
        </p>

        <p className="text-[14.5px] text-[#4a4a4a] leading-[1.75] -mt-1">
          Engineer who thinks in products. I care about the problem as much as the code — building things that feel right and ship.
        </p>

        {/* Worked with */}
        <div className="flex flex-col items-center gap-4 w-full mt-1">
          <span className="text-[11px] tracking-[0.08em] uppercase text-[#252525]">
            Worked with
          </span>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {clients.map(({ name, style }) => (
              <span
                key={name}
                className={`text-[12px] font-semibold uppercase text-[#2e2e2e] ${style} transition-colors duration-200 hover:text-[#666666]`}
              >
                {name}
              </span>
            ))}
          </div>
          <div className="w-full h-px bg-[#141414] mt-1" />
        </div>

        {/* Reach me on */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-[11px] tracking-[0.08em] uppercase text-[#2a2a2a]">
            Reach me on
          </span>
          <div className="flex flex-wrap justify-center gap-2.5">
            <a
              href="https://wa.me/201022644578"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] text-[#888888] border border-[#222222] rounded-[7px] px-4 py-2 transition-all duration-150 hover:border-[#444444] hover:text-[#e0e0e0] hover:bg-white/[0.03]"
            >
              <FaWhatsapp size={15} color="#25d366" />
              WhatsApp
            </a>
            <a
              href="https://x.com/xaaksw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] text-[#888888] border border-[#222222] rounded-[7px] px-4 py-2 transition-all duration-150 hover:border-[#444444] hover:text-[#e0e0e0] hover:bg-white/[0.03]"
            >
              <FaXTwitter size={14} color="#888888" />
              @xaaksw
            </a>
            <a
              href="https://www.linkedin.com/in/ahmedashrefsw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] text-[#888888] border border-[#222222] rounded-[7px] px-4 py-2 transition-all duration-150 hover:border-[#444444] hover:text-[#e0e0e0] hover:bg-white/[0.03]"
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
