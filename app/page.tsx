'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: 'SOLARA',
  description: 'Dubai-based electronic music producer and DJ specializing in deep house, melodic techno, and Afro-house fusion.',
  url: 'https://solara-music.vercel.app',
  genre: ['Deep House', 'Melodic Techno', 'Afro House'],
  foundingLocation: {
    '@type': 'Place',
    name: 'Dubai, UAE',
  },
  image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=80',
  sameAs: [
    'https://soundcloud.com/solara',
    'https://instagram.com/solara.music',
    'https://open.spotify.com/artist/solara',
  ],
}

const releases = [
  {
    title: 'MIRAGE',
    type: 'EP',
    year: '2026',
    label: 'Afterlife Records',
    image: 'https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=600&q=80',
    tracks: ['Sahara Pulse', 'Golden Hour', 'Desert Mirage', 'Neon Oasis'],
  },
  {
    title: 'NOCTURNE',
    type: 'Single',
    year: '2025',
    label: 'Anjunadeep',
    image: 'https://images.unsplash.com/photo-1508854710579-5cecc3a9ff17?w=600&q=80',
    tracks: ['Nocturne (Original Mix)', 'Nocturne (Club Edit)'],
  },
  {
    title: 'DUSK TO DAWN',
    type: 'Album',
    year: '2025',
    label: 'Afterlife Records',
    image: 'https://images.unsplash.com/photo-1563841930606-67e2bce48b78?w=600&q=80',
    tracks: ['Overture', 'First Light', 'Meridian', 'Sirens of Al Fahidi', 'Eclipse', 'Dawn Chorus'],
  },
]

const upcomingShows = [
  { date: 'APR 04', venue: 'WHITE Dubai', city: 'Dubai', status: 'On Sale' },
  { date: 'APR 18', venue: 'Hï Ibiza', city: 'Ibiza', status: 'On Sale' },
  { date: 'MAY 02', venue: 'Fabric London', city: 'London', status: 'Almost Sold Out' },
  { date: 'MAY 16', venue: 'Soho Garden DXB', city: 'Dubai', status: 'On Sale' },
  { date: 'JUN 07', venue: 'Tomorrowland', city: 'Boom, Belgium', status: 'Invite Only' },
  { date: 'JUN 21', venue: 'Base Dubai', city: 'Dubai', status: 'Coming Soon' },
]

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7', alt: 'SOLARA live at WHITE Dubai' },
  { url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec', alt: 'Festival main stage performance' },
  { url: 'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1', alt: 'Studio session' },
  { url: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea', alt: 'Crowd energy at live show' },
  { url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a', alt: 'Festival crowd aerial' },
  { url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819', alt: 'Neon lights DJ booth' },
]

const testimonials = [
  {
    name: 'DJ Mag Middle East',
    role: 'Publication',
    text: 'SOLARA is redefining the sound of Dubai\'s electronic scene. The Dusk to Dawn album is a masterclass in blending Middle Eastern textures with contemporary house.',
  },
  {
    name: 'Rami Hassan',
    role: 'A&R Director, Afterlife Records',
    text: 'We signed SOLARA after hearing one demo. That kind of instant conviction is rare — the production quality and artistic vision were already world-class.',
  },
  {
    name: 'Leila Khouri',
    role: 'Events Director, WHITE Dubai',
    text: 'Every SOLARA night sells out. The energy, the crowd connection, the music selection — it\'s consistently one of our highest-demand bookings of the year.',
  },
  {
    name: 'Marcus Schulz',
    role: 'Resident Advisor Contributor',
    text: 'SOLARA brings something fresh to the melodic techno space. Nocturne was one of the most-played tracks in Ibiza last summer. Watch this one closely.',
  },
]

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#FF3366]/10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-display font-bold text-2xl tracking-[0.3em] text-white glitch-text cursor-default">SOLARA</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase text-[#888]"
        >
          <a href="#releases" className="hover:text-[#FF3366] transition-colors">Releases</a>
          <a href="#shows" className="hover:text-[#FF3366] transition-colors">Shows</a>
          <a href="#gallery" className="hover:text-[#FF3366] transition-colors">Gallery</a>
          <a href="#contact" className="border border-[#FF3366] text-[#FF3366] px-5 py-2 hover:bg-[#FF3366] hover:text-black transition-all">Book Now</a>
        </motion.div>
      </nav>

      {/* HERO — Full bleed, massive typography */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden flex items-end">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1600&q=85"
            alt="SOLARA DJ performance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
          <div className="absolute inset-0 bg-[#0A0A0A]/30" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 w-full px-6 md:px-12 pb-20 md:pb-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#FF3366] text-xs tracking-[0.5em] uppercase mb-4 font-display"
          >
            Deep House · Melodic Techno · Afro House · Dubai
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display font-bold text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.85] tracking-tight text-white mb-6"
          >
            SOL<span className="text-[#FF3366]">A</span>RA
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <span className="text-[#888] text-sm tracking-wider">Deep House</span>
            <span className="w-1 h-1 bg-[#FF3366] rounded-full" />
            <span className="text-[#888] text-sm tracking-wider">Melodic Techno</span>
            <span className="w-1 h-1 bg-[#FF3366] rounded-full" />
            <span className="text-[#888] text-sm tracking-wider">Afro House</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 flex gap-4"
          >
            <a href="#shows" className="bg-[#FF3366] text-black px-8 py-4 font-display font-bold text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors">
              Tour Dates
            </a>
            <a href="#contact" className="border border-[#333] text-white px-8 py-4 font-display font-bold text-xs tracking-[0.2em] uppercase hover:border-[#FF3366] transition-colors">
              Booking Enquiry
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <div className="bg-[#FF3366] py-3 overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="font-display font-bold text-sm tracking-[0.3em] uppercase text-black mx-8">
              NOW BOOKING 2026 · MIRAGE EP OUT NOW · TOMORROWLAND CONFIRMED · RESIDENT AT WHITE DUBAI · NOW BOOKING 2026 · MIRAGE EP OUT NOW ·
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="section-pad bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#FF3366] text-xs tracking-[0.4em] uppercase mb-6 font-display">The Artist</p>
              <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-8 leading-[0.95]">
                The desert<br />
                <span className="text-[#FF3366]">in the bass.</span><br />
                The Gulf<br />
                <span className="text-[#FF3366]">in the groove.</span>
              </h2>
              <p className="text-[#888] mb-5 leading-relaxed text-lg">
                SOLARA fuses oud textures, desert field recordings, and Arabic vocal fragments with deep house and melodic techno. The result: a sound that belongs nowhere — and everywhere crowds move.
              </p>
              <p className="text-[#888] mb-8 leading-relaxed">
                Resident at WHITE Dubai. Signed to Afterlife Records. &quot;Dusk to Dawn&quot; charted on Resident Advisor&apos;s most-played list. Tomorrowland 2026 confirmed. MIRAGE EP: out now on Anjunadeep.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { val: '2M+', label: 'Monthly listeners' },
                  { val: '180+', label: 'Shows played' },
                  { val: '28', label: 'Countries' },
                ].map((item) => (
                  <div key={item.label} className="border-t border-[#FF3366]/30 pt-4">
                    <p className="font-display font-bold text-3xl text-[#FF3366]">{item.val}</p>
                    <p className="text-[#888] text-xs tracking-wider uppercase mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80"
                alt="SOLARA performing"
                width={600}
                height={750}
                className="object-cover w-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-4 -left-4 bg-[#FF3366] px-6 py-3">
                <span className="font-display font-bold text-black text-xs tracking-[0.3em] uppercase">Dubai · Est. 2019</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RELEASES */}
      <section id="releases" className="section-pad bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[#FF3366] text-xs tracking-[0.4em] uppercase mb-4 font-display">Discography</p>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white">
              Latest <span className="text-[#FF3366]">Releases</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {releases.map((release, i) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-6 bg-[#151515] border border-[#222] hover:border-[#FF3366]/30 transition-all glow-hover"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={release.image}
                    alt={release.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#FF3366] text-xs tracking-[0.2em] uppercase font-display">{release.type}</span>
                    <span className="text-[#333]">·</span>
                    <span className="text-[#888] text-xs">{release.year}</span>
                    <span className="text-[#333]">·</span>
                    <span className="text-[#888] text-xs">{release.label}</span>
                  </div>
                  <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 tracking-wider">{release.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {release.tracks.map((track) => (
                      <span key={track} className="text-xs text-[#888] border border-[#333] px-3 py-1 hover:border-[#FF3366] hover:text-[#FF3366] transition-colors cursor-default">
                        {track}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING SHOWS */}
      <section id="shows" className="section-pad bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[#FF3366] text-xs tracking-[0.4em] uppercase mb-4 font-display">Tour Dates</p>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white">
              Upcoming <span className="text-[#FF3366]">Shows</span>
            </h2>
          </motion.div>

          <div className="border-t border-[#222]">
            {upcomingShows.map((show, i) => (
              <motion.div
                key={`${show.date}-${show.venue}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group grid grid-cols-[80px_1fr_auto] md:grid-cols-[100px_1fr_200px_auto] items-center gap-4 py-6 border-b border-[#222] hover:border-[#FF3366]/30 transition-colors cursor-default"
              >
                <span className="font-display font-bold text-xl md:text-2xl text-[#FF3366]">{show.date}</span>
                <div>
                  <p className="font-display font-bold text-lg md:text-xl text-white group-hover:text-[#FF3366] transition-colors">{show.venue}</p>
                  <p className="text-[#888] text-sm">{show.city}</p>
                </div>
                <span className={`hidden md:block text-xs tracking-wider uppercase font-display ${show.status === 'Almost Sold Out' ? 'text-[#FF3366]' : show.status === 'Invite Only' ? 'text-[#888]' : 'text-[#888]'}`}>
                  {show.status}
                </span>
                <span className="text-[#888] group-hover:text-[#FF3366] transition-colors text-lg">→</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section-pad bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="text-[#FF3366] text-xs tracking-[0.4em] uppercase mb-4 font-display">Visuals</p>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white">
              On <span className="text-[#FF3366]">Stage</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative overflow-hidden group ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
                style={{ aspectRatio: i === 0 ? '1/1' : '1/1' }}
              >
                <Image
                  src={`${img.url}?w=800&q=80`}
                  alt={img.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[#FF3366]/0 group-hover:bg-[#FF3366]/10 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[#FF3366] text-xs tracking-[0.4em] uppercase mb-4 font-display">Press & Industry</p>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white">
              What They <span className="text-[#FF3366]">Say</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-[#151515] border border-[#222] hover:border-[#FF3366]/20 transition-colors"
              >
                <p className="text-[#888] leading-relaxed mb-6 text-lg italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#FF3366] flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-sm font-display">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-sm">{t.name}</p>
                    <p className="text-[#FF3366] text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / BOOKING */}
      <section id="contact" className="section-pad bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[#FF3366] text-xs tracking-[0.4em] uppercase mb-6 font-display">Booking · Worldwide</p>
              <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-8 leading-[0.95]">
                Booking<br />
                <span className="text-[#FF3366]">is selective.</span><br />
                Apply below.
              </h2>
              <p className="text-[#888] mb-10 leading-relaxed text-lg">
                Festival main stages, club residencies, private events (minimum AED 50,000). Brand partnerships by invitation. Worldwide.
              </p>
              <div className="space-y-6">
                {[
                  { icon: '📧', label: 'Booking', val: 'booking@solara-music.com' },
                  { icon: '📧', label: 'Press', val: 'press@solara-music.com' },
                  { icon: '🎵', label: 'Management', val: 'Nour Collective, Dubai' },
                  { icon: '📍', label: 'Based in', val: 'Dubai, UAE · Available Worldwide' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="text-xl mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-[#FF3366] text-xs tracking-wider uppercase mb-1 font-display">{item.label}</p>
                      <p className="text-[#888]">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <form
                action="https://formspree.io/f/placeholder"
                method="POST"
                className="space-y-5"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#888] text-xs uppercase tracking-wider mb-2 block font-display">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-[#151515] border border-[#222] text-white px-4 py-3 focus:outline-none focus:border-[#FF3366] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-[#888] text-xs uppercase tracking-wider mb-2 block font-display">Company</label>
                    <input
                      type="text"
                      name="company"
                      className="w-full bg-[#151515] border border-[#222] text-white px-4 py-3 focus:outline-none focus:border-[#FF3366] transition-colors"
                      placeholder="Venue / Agency"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[#888] text-xs uppercase tracking-wider mb-2 block font-display">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-[#151515] border border-[#222] text-white px-4 py-3 focus:outline-none focus:border-[#FF3366] transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="text-[#888] text-xs uppercase tracking-wider mb-2 block font-display">Enquiry Type</label>
                  <select
                    name="type"
                    className="w-full bg-[#151515] border border-[#222] text-white px-4 py-3 focus:outline-none focus:border-[#FF3366] transition-colors"
                  >
                    <option>Festival Booking</option>
                    <option>Club Residency</option>
                    <option>Private Event</option>
                    <option>Brand Partnership</option>
                    <option>Studio Collaboration</option>
                    <option>Press / Interview</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#888] text-xs uppercase tracking-wider mb-2 block font-display">Event Date</label>
                    <input
                      type="date"
                      name="date"
                      className="w-full bg-[#151515] border border-[#222] text-white px-4 py-3 focus:outline-none focus:border-[#FF3366] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[#888] text-xs uppercase tracking-wider mb-2 block font-display">Budget Range</label>
                    <select
                      name="budget"
                      className="w-full bg-[#151515] border border-[#222] text-white px-4 py-3 focus:outline-none focus:border-[#FF3366] transition-colors"
                    >
                      <option>Under $5,000</option>
                      <option>$5,000 – $15,000</option>
                      <option>$15,000 – $30,000</option>
                      <option>$30,000+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[#888] text-xs uppercase tracking-wider mb-2 block font-display">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-[#151515] border border-[#222] text-white px-4 py-3 focus:outline-none focus:border-[#FF3366] transition-colors resize-none"
                    placeholder="Tell us about the event, location, expected attendance..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FF3366] text-black py-4 font-display font-bold text-sm tracking-[0.2em] uppercase hover:bg-white transition-colors"
                >
                  Submit Booking Request
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0A0A] border-t border-[#222] py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="font-display font-bold text-3xl tracking-[0.3em] text-white">SOLARA</span>
              <p className="text-[#888] text-xs mt-1">Dubai · Worldwide</p>
            </div>
            <div className="flex gap-8 text-xs text-[#888] tracking-wider uppercase">
              <a href="#releases" className="hover:text-[#FF3366] transition-colors">Releases</a>
              <a href="#shows" className="hover:text-[#FF3366] transition-colors">Shows</a>
              <a href="#gallery" className="hover:text-[#FF3366] transition-colors">Gallery</a>
              <a href="#contact" className="hover:text-[#FF3366] transition-colors">Booking</a>
            </div>
            <p className="text-[#333] text-xs">© 2026 SOLARA. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/971585324519?text=Hi%20SOLARA%2C%20I%20have%20a%20booking%20enquiry."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] flex items-center justify-center shadow-xl hover:bg-[#1EBE5D] transition-colors"
        aria-label="Contact via WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  )
}
