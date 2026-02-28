import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Users, Star, Instagram } from 'lucide-react';
import DomeGallery from '@/components/DomeGallery';
import FloatingPaths from '@/components/FloatingPaths';
import BookingModal from '@/components/BookingModal';
import TikTokIcon from '@/components/TikTokIcon';

interface Event {
  id: number;
  date: string;
  title: string;
  image: string;
  gallery?: string[];
}

interface Testimonial {
  author: { name: string; handle: string; avatar: string };
  text: string;
}

const events: Event[] = [
  { id: 1, date: 'Feb 25th, 2026', title: 'Night Concert', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
    gallery: ['https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800','https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800','https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800','https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800','https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800','https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800'] },
  { id: 2, date: 'Feb 25th, 2026', title: 'Wedding Shoot', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
    gallery: ['https://images.unsplash.com/photo-1519741497674-611481863552?w=800','https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800','https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800','https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800','https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800','https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?w=800'] },
  { id: 3, date: 'Feb 25th, 2026', title: 'Club Event', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800',
    gallery: ['https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800','https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800','https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=800','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800','https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800','https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800'] },
  { id: 4, date: 'Feb 25th, 2026', title: 'Corporate Event', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800',
    gallery: ['https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800','https://images.unsplash.com/photo-1511578314322-379afb476865?w=800','https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800','https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800','https://images.unsplash.com/photo-1560439514-4e9645039924?w=800','https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800'] },
  { id: 5, date: 'Feb 25th, 2026', title: 'Music Festival', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
    gallery: ['https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800','https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800','https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800','https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800','https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800','https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=800'] },
  { id: 6, date: 'Feb 25th, 2026', title: 'Fashion Show', image: 'https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=800',
    gallery: ['https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=800','https://images.unsplash.com/photo-1558769132-cb1aea8f82ca?w=800','https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800','https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800','https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800','https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800'] },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400',
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=400',
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400',
  'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400',
  'https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=400',
  'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400',
  'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400',
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
  'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400',
  'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400',
  'https://images.unsplash.com/photo-1415886541506-6efc5e4b1786?w=400',
  'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=400',
];

const testimonials: Testimonial[] = [
  { author: { name: 'Keisha Williams', handle: '', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face' }, text: 'Absolutely stunning work! The photographer captured our wedding day perfectly. Every moment was beautifully preserved.' },
  { author: { name: 'Marcus Thompson', handle: '', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face' }, text: 'Professional, creative, and a joy to work with. The photos exceeded all our expectations!' },
  { author: { name: 'Maria Garcia', handle: '', avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face' }, text: 'The attention to detail is incredible. These photos will be treasured for generations.' },
  { author: { name: 'DeAndre Williams', handle: '', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face' }, text: 'Amazing experience from start to finish. Highly recommend for any special occasion!' },
  { author: { name: 'Jasmine Carter', handle: '', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face' }, text: 'The quality and creativity in every shot is exceptional. Worth every penny!' },
  { author: { name: 'Carlos Mendez', handle: '', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face' }, text: 'Made us feel comfortable and captured our personalities perfectly. Highly recommended!' },
];

const testimonials2: Testimonial[] = [
  { author: { name: 'Aaliyah Brooks', handle: '', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face' }, text: 'Incredible eye for composition and lighting. The photos turned out even better than I imagined!' },
  { author: { name: 'Isabella Rodriguez', handle: '', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face' }, text: 'Captured the energy of our event perfectly. Everyone at the party loved the final shots!' },
  { author: { name: 'Tyrone Jackson', handle: '', avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop&crop=face' }, text: 'A true professional who made the entire photoshoot experience effortless and fun.' },
  { author: { name: 'Sophia Chen', handle: '', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face' }, text: 'The creativity and attention to detail exceeded expectations. Truly exceptional work!' },
  { author: { name: 'Jamal Anderson', handle: '', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face' }, text: 'Best photographer I\'ve worked with. The results speak for themselves!' },
  { author: { name: 'Gabriela Santos', handle: '', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face' }, text: 'Captured our special day with such artistry and emotion. Forever grateful!' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">

      {/* Glass Header Navigation - pill shape */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-[1000]">
        <nav className="flex items-center gap-6 md:gap-8 px-8 py-3 rounded-full bg-card/80 backdrop-blur-xl border border-muted-foreground/15" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
          <a href="#home" className="nav-link text-sm font-semibold">Home</a>
          <a href="#about" className="nav-link text-sm font-semibold">About</a>

          {/* Logo */}
          <span className="text-foreground font-bold text-2xl tracking-wider mx-2 select-none">SV</span>

          <a href="#services" className="nav-link text-sm font-semibold">Services</a>
          <button onClick={() => setIsModalOpen(true)} className="nav-link text-sm font-semibold bg-transparent border-none cursor-pointer">
            Contact
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <FloatingPaths />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background pointer-events-none z-[1]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-[2] text-center px-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-[1.1] mb-4">
            <span style={{ color: 'hsl(var(--brand-orange))' }}>Capture</span>{' '}
            <span className="text-foreground">Moments That Last Forever</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl tracking-wider italic">
            Event & Creative Visuals
          </p>
        </motion.div>
      </section>

      {/* Events Covered Section */}
      <section className="section-padding">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Events Covered
        </motion.h2>

        <div className="flex items-center justify-center overflow-x-auto scrollbar-hide pb-4 px-4">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.7, ease: 'easeOut' as const, delay: index * 0.08 } } }}
              onClick={() => setSelectedEvent(event)}
              className="event-card relative flex flex-col justify-end w-[420px] min-w-[260px] aspect-[4/5] rounded-[20px] overflow-hidden bg-card isolate cursor-pointer"
              style={{
                boxShadow: '0 8px 20px rgba(255, 255, 255, 0.15)',
                marginLeft: index > 0 ? '-130px' : '0',
              }}
            >
              <div className="absolute inset-0">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="relative z-[2] p-6 bg-gradient-to-t from-background/90 via-background/40 to-transparent">
                <h3 className="text-xl font-bold text-foreground">{event.title}</h3>
                <p className="text-sm text-muted-foreground">{event.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Event Gallery Modal */}
      {selectedEvent && (
        <div
          onClick={() => setSelectedEvent(null)}
          className="fixed inset-0 bg-background/90 backdrop-blur-sm flex justify-center items-center z-[2001] transition-all duration-300 overflow-y-auto p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-card/95 backdrop-blur-xl border border-muted-foreground/20 p-8 rounded-[20px] w-full max-w-[1200px] max-h-[90vh] overflow-y-auto"
            style={{ boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255,255,255,0.1)' }}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-5 bg-transparent border-none text-foreground text-3xl hover:text-muted-foreground transition-colors cursor-pointer z-10"
            >
              ×
            </button>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground">{selectedEvent.title}</h3>
              <p className="text-sm text-muted-foreground">{selectedEvent.date}</p>
            </div>
            <div className="columns-2 md:columns-3 gap-4">
              {selectedEvent.gallery?.map((img, i) => (
                <div key={i} className="mb-4 break-inside-avoid">
                  <img src={img} alt={`${selectedEvent.title} ${i + 1}`} className="w-full rounded-xl" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              From intimate gatherings to large-scale productions, SV focuses on
              emotion, movement, and atmosphere — delivering imagery that feels
              alive long after the moment has passed.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <img
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800"
              alt="Photographer at work"
              className="w-full rounded-[20px] object-cover aspect-[4/5]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Dome Gallery Section */}
      <section className="relative h-[80vh] md:h-screen">
        <DomeGallery
          images={galleryImages}
          fit={0.55}
          grayscale
          imageBorderRadius="16px"
          openedImageBorderRadius="20px"
          openedImageWidth="320px"
          openedImageHeight="450px"
        />
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'What We Do', lines: ['Thoughtful photography for brands and people who want more than just a photo.', 'A feeling, a story, and a lasting impression.'] },
              { title: 'How It Feels', lines: ['Calm. Effortless. Confidence-building.', 'The process is just as important as the final image — and it should feel good from start to finish.'] },
              { title: "Where We're Headed", lines: ['Always evolving. Always refining.', "The goal isn't trends — it's timeless work that grows with you."] },
            ].map((svc, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.7, ease: 'easeOut' as const, delay: i * 0.15 } } }}
                className="bg-card border border-muted-foreground/10 rounded-[20px] p-8 hover:border-muted-foreground/25 transition-colors"
              >
                <h3 className="text-lg font-bold text-foreground mb-4">{svc.title}</h3>
                {svc.lines.map((line, j) => (
                  <p key={j} className="text-muted-foreground text-sm leading-relaxed mb-2">{line}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Trusted by Hundreds</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { icon: <Users size={28} strokeWidth={1.5} />, value: '80+', label: 'Happy Clients' },
              { icon: <Camera size={28} strokeWidth={1.5} />, value: '100+', label: 'Projects Completed' },
              { icon: <Star size={28} strokeWidth={1.5} />, value: '4.0', label: 'Average Rating' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.7, ease: 'easeOut' as const, delay: i * 0.1 } } }}
              >
                <div className="text-muted-foreground mb-3 flex justify-center">{stat.icon}</div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 overflow-hidden">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">What Clients Say</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Real feedback from real people who trusted me with their precious moments
          </p>
        </motion.div>

        {/* Row 1 - left */}
        <div className="relative overflow-hidden mb-4">
          <div className="flex animate-marquee-left" style={{ width: 'max-content' }}>
            {[...Array(3)].flatMap((_, setIdx) =>
              testimonials.map((t, i) => (
                <div key={`r1-${setIdx}-${i}`} className="glass-card rounded-xl p-5 w-[340px] shrink-0 mx-2">
                  <div className="flex items-center gap-3 mb-3">
                    <img src={t.author.avatar} alt={t.author.name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.author.name}</p>
                      {t.author.handle && <p className="text-xs text-muted-foreground">{t.author.handle}</p>}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Row 2 - right */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-right" style={{ width: 'max-content' }}>
            {[...Array(3)].flatMap((_, setIdx) =>
              testimonials2.map((t, i) => (
                <div key={`r2-${setIdx}-${i}`} className="glass-card rounded-xl p-5 w-[340px] shrink-0 mx-2">
                  <div className="flex items-center gap-3 mb-3">
                    <img src={t.author.avatar} alt={t.author.name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.author.name}</p>
                      {t.author.handle && <p className="text-xs text-muted-foreground">{t.author.handle}</p>}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-muted-foreground/10 px-6 py-8 text-center">
        <div className="flex items-center justify-center gap-6 mb-4">
          <a href="https://www.instagram.com/s8iah.visuals/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="https://www.tiktok.com/@s8iah.visuals" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="TikTok">
            <TikTokIcon />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} SV</p>
      </footer>

      {/* Floating Book Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 glass-card border-2 border-foreground/30 text-foreground px-7 py-4 rounded-full font-bold tracking-wider cursor-pointer z-[999] transition-all duration-300 hover:-translate-y-1 hover:border-foreground/50 animate-[fadeInUp_0.8s_ease_forwards]"
        style={{ boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)' }}
      >
        Book
      </button>

      <BookingModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Index;
