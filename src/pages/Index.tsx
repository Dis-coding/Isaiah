import { useEffect, useRef, useState } from 'react';
import { Camera, Users, Star, Instagram, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DomeGallery from '@/components/DomeGallery';
import TikTokIcon from '@/components/TikTokIcon';

interface Event {
  id: number;
  date: string;
  title: string;
  image: string;
  gallery?: string[];
}

interface Testimonial {
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  text: string;
}

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const bookingFormRef = useRef<HTMLFormElement | null>(null);

  const events: Event[] = [
    { id: 1, date: 'Feb 25th, 2026', title: 'Night Concert', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
      gallery: ['https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800','https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800','https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800','https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800','https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800','https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800','https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800','https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800','https://images.unsplash.com/photo-1415886541506-6efc5e4b1786?w=800','https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=800'] },
    { id: 2, date: 'Feb 25th, 2026', title: 'Wedding Shoot', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
      gallery: ['https://images.unsplash.com/photo-1519741497674-611481863552?w=800','https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800','https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800','https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800','https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800','https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?w=800','https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800','https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800','https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800','https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800'] },
    { id: 3, date: 'Feb 25th, 2026', title: 'Club Event', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800',
      gallery: ['https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800','https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800','https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=800','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800','https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800','https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800','https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800','https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800','https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800','https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800'] },
    { id: 4, date: 'Feb 25th, 2026', title: 'Corporate Event', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800',
      gallery: ['https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800','https://images.unsplash.com/photo-1511578314322-379afb476865?w=800','https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800','https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800','https://images.unsplash.com/photo-1560439514-4e9645039924?w=800','https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800','https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800','https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800','https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800','https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800'] },
    { id: 5, date: 'Feb 25th, 2026', title: 'Music Festival', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
      gallery: ['https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800','https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800','https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800','https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800','https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800','https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=800','https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800','https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800','https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800','https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800'] },
    { id: 6, date: 'Feb 25th, 2026', title: 'Fashion Show', image: 'https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=800',
      gallery: ['https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=800','https://images.unsplash.com/photo-1558769132-cb1aea8f82ca?w=800','https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800','https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800','https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800','https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800','https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800','https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800','https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800','https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800'] },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
    'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800',
    'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
    'https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=800',
    'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800',
    'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
    'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800',
    'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800',
    'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800',
    'https://images.unsplash.com/photo-1415886541506-6efc5e4b1786?w=800',
    'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=800',
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
    { author: { name: 'Jamal Anderson', handle: '', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face' }, text: "Best photographer I've worked with. The results speak for themselves!" },
    { author: { name: 'Gabriela Santos', handle: '', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face' }, text: 'Captured our special day with such artistry and emotion. Forever grateful!' },
  ];

  const closeModal = () => {
    bookingFormRef.current?.reset();
    setIsModalOpen(false);
    setIsSubmitted(false);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#f5f6f7] font-['Inter',sans-serif]">

      {/* Glass Header Navigation with Logo - no bubble on mobile */}
      <header className="fixed top-7 md:top-5 left-1/2 -translate-x-1/2 z-[1000] px-7 py-2.5 w-fit max-w-[90%] transition-all duration-300 md:rounded-full md:bg-[rgba(43,46,51,0.6)] md:backdrop-blur-[20px] md:border md:border-[rgba(193,196,200,0.25)] md:hover:backdrop-blur-[25px] md:[box-shadow:0_8px_32px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(193,196,200,0.05)]">
        <nav className="flex items-center gap-8 relative z-[1]">
          {/* Desktop nav links - left */}
          <a href="#hero" className="hidden md:inline no-underline text-[#f5f6f7] font-semibold tracking-wider transition-all duration-300 relative hover:text-[#c1c4c8] group">
            Home
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#c1c4c8] scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100 group-hover:origin-left"></span>
          </a>
          <a href="#about" className="hidden md:inline no-underline text-[#f5f6f7] font-semibold tracking-wider transition-all duration-300 relative hover:text-[#c1c4c8] group">
            About
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#c1c4c8] scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100 group-hover:origin-left"></span>
          </a>
          
          {/* Logo in navbar */}
          <a href="#hero" className="no-underline">
            <h1 className="font-['Montserrat'] text-[1.8rem] font-[600] tracking-wider uppercase transition-all duration-300 cursor-pointer hover:text-[#c1c4c8] px-4" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)' }}>
              SV
            </h1>
          </a>
          
          {/* Desktop nav links - right */}
          <a href="#services" className="hidden md:inline no-underline text-[#f5f6f7] font-semibold tracking-wider transition-all duration-300 relative hover:text-[#c1c4c8] group">
            Services
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#c1c4c8] scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100 group-hover:origin-left"></span>
          </a>
          <button onClick={() => setIsModalOpen(true)} className="hidden md:inline no-underline text-[#f5f6f7] font-semibold tracking-wider transition-all duration-300 relative hover:text-[#c1c4c8] group bg-transparent border-none cursor-pointer">
            Contact
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#c1c4c8] scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100 group-hover:origin-left"></span>
          </button>
        </nav>
      </header>

      {/* Mobile hamburger - pinned top-right, standalone */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-7 right-5 z-[1001] md:hidden text-[#f5f6f7] bg-transparent border-none cursor-pointer p-1"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 right-5 z-[999] w-[200px] rounded-2xl bg-[rgba(43,46,51,0.95)] backdrop-blur-[20px] border border-[rgba(193,196,200,0.25)] p-6 flex flex-col gap-5 md:hidden"
            style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.6)' }}
          >
            <a href="#hero" onClick={() => setIsMobileMenuOpen(false)} className="no-underline text-[#f5f6f7] font-semibold tracking-wider text-lg">Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="no-underline text-[#f5f6f7] font-semibold tracking-wider text-lg">About</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="no-underline text-[#f5f6f7] font-semibold tracking-wider text-lg">Services</a>
            <button onClick={() => { setIsMobileMenuOpen(false); setIsModalOpen(true); }} className="no-underline text-[#f5f6f7] font-semibold tracking-wider text-lg bg-transparent border-none cursor-pointer text-left p-0">Contact</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden h-screen flex justify-center items-center text-center bg-[#2b2e33]">
        {/* Floating Paths Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full text-[#f5f6f7]" viewBox="0 0 696 316" fill="none">
            {Array.from({ length: 36 }, (_, i) => {
              const position = 1;
              return (
                <motion.path
                  key={i}
                  d={`M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`}
                  stroke="currentColor"
                  strokeWidth={0.5 + i * 0.03}
                  strokeOpacity={0.1 + i * 0.03}
                  initial={{ pathLength: 0.3, opacity: 0.6 }}
                  animate={{
                    pathLength: 1,
                    opacity: [0.3, 0.6, 0.3],
                    pathOffset: [0, 1, 0],
                  }}
                  transition={{
                    duration: 20 + Math.random() * 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              );
            })}
            {Array.from({ length: 36 }, (_, i) => {
              const position = -1;
              return (
                <motion.path
                  key={`neg-${i}`}
                  d={`M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`}
                  stroke="currentColor"
                  strokeWidth={0.5 + i * 0.03}
                  strokeOpacity={0.1 + i * 0.03}
                  initial={{ pathLength: 0.3, opacity: 0.6 }}
                  animate={{
                    pathLength: 1,
                    opacity: [0.3, 0.6, 0.3],
                    pathOffset: [0, 1, 0],
                  }}
                  transition={{
                    duration: 20 + Math.random() * 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              );
            })}
          </svg>
        </div>

        <div className="relative z-[2]">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-black mb-5 uppercase"
          >
            <span className="bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff8c42] bg-clip-text text-transparent">Capture</span>{' '}
            Moments That Last Forever
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#c1c4c8] mb-8"
          >
            Event & Creative Visuals
          </motion.p>
        </div>
      </section>

      {/* Events Covered Section */}
      <section className="bg-gradient-to-t from-[#2b2e33] to-[#7b7f85] py-32 w-full relative z-[1]">
        <h2 className="text-3xl font-semibold tracking-wider -mt-16 pl-[3vw] text-[#f5f5f5] uppercase relative">Events Covered</h2>
        <div className="flex gap-8 px-[5vw] py-12 overflow-x-auto -ml-[4vw] scrollbar-hide card-container">
          {events.map((event, index) => (
            <article 
              key={event.id} 
              onClick={() => setSelectedEvent(event)}
              className="event-card relative flex flex-col justify-end w-[420px] min-w-[260px] aspect-[4/5] rounded-[20px] overflow-hidden bg-[#2b2e33] isolate cursor-pointer" 
              style={{ 
                boxShadow: '0 8px 20px rgba(255, 255, 255, 0.15)',
                marginLeft: index > 0 ? '-130px' : '0'
              }}
            >
              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${event.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] to-transparent to-65%"></div>
              </div>
              <div className="relative z-[10] p-6">
                <h3 className="text-2xl font-bold text-white mb-1">{event.title}</h3>
                <p className="text-sm text-[#bfbfbf]">{event.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Event Gallery Modal */}
      {selectedEvent && (
        <div 
          onClick={() => setSelectedEvent(null)} 
          className="fixed inset-0 bg-[rgba(0,0,0,0.9)] backdrop-blur-sm flex justify-center items-center z-[2001] opacity-100 visible transition-all duration-300 overflow-y-auto p-8"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[rgba(43,46,51,0.95)] backdrop-blur-xl border border-[rgba(193,196,200,0.3)] p-8 rounded-[20px] w-full max-w-[1200px] max-h-[90vh] overflow-y-auto"
            style={{ boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255,255,255,0.1)' }}
          >
            <button 
              onClick={() => setSelectedEvent(null)} 
              className="absolute top-4 right-5 bg-none border-none text-[#f5f5f5] text-3xl hover:text-[#c1c4c8] transition-colors cursor-pointer z-10"
            >
              &times;
            </button>
            
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#f5f6f7] mb-2">{selectedEvent.title}</h2>
              <p className="text-[#c1c4c8]">{selectedEvent.date}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedEvent.gallery?.map((img, i) => (
                <div key={i} className="aspect-[4/3] rounded-[15px] overflow-hidden group">
                  <img 
                    src={img} 
                    alt={`${selectedEvent.title} ${i + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="relative flex min-h-[600px] overflow-hidden bg-[#2b2e33] text-[#f5f6f7]">
        <div className="flex-1 px-[10%] py-32 flex flex-col justify-center z-[2]">
          <h2 className="text-5xl mb-8">About Me</h2>
          <p className="text-lg leading-relaxed max-w-[500px] text-[#c1c4c8]">
            From intimate gatherings to large-scale productions, SV focuses on
            emotion, movement, and atmosphere — delivering imagery that feels
            alive long after the moment has passed.
          </p>
        </div>
        <div className="flex-1 relative" style={{ clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0% 100%)' }}>
          <img src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1200" alt="SV Portrait" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Dome Gallery Section */}
      <section className="relative h-[80vh] md:h-screen">
        <DomeGallery
          images={galleryImages}
          fit={0.55}
          grayscale={false}
          imageBorderRadius="16px"
          openedImageBorderRadius="20px"
          openedImageWidth="250px"
          openedImageHeight="350px"
        />
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-[#2b2e33]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-center text-4xl font-bold mb-20 text-[#f5f6f7]">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[rgba(245,246,247,0.05)] border border-[rgba(193,196,200,0.25)] rounded-[20px] p-10 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-6 text-[#f5f6f7]">What We Do</h3>
              <p className="text-[#c1c4c8] mb-4 leading-relaxed">
                Thoughtful photography for brands and people who want more than just a photo.
              </p>
              <p className="text-[#c1c4c8] leading-relaxed">
                A feeling, a story, and a lasting impression.
              </p>
            </div>
            
            <div className="bg-[rgba(245,246,247,0.05)] border border-[rgba(193,196,200,0.25)] rounded-[20px] p-10 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-6 text-[#f5f6f7]">How It Feels</h3>
              <p className="text-[#c1c4c8] mb-4 leading-relaxed">
                Calm. Effortless. Confidence-building.
              </p>
              <p className="text-[#c1c4c8] leading-relaxed">
                The process is just as important as the final image — and it should feel good from start to finish.
              </p>
            </div>
            
            <div className="bg-[rgba(245,246,247,0.05)] border border-[rgba(193,196,200,0.25)] rounded-[20px] p-10 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-6 text-[#f5f6f7]">Where we're Headed</h3>
              <p className="text-[#c1c4c8] mb-4 leading-relaxed">
                Always evolving. Always refining.
              </p>
              <p className="text-[#c1c4c8] leading-relaxed">
                The goal isn't trends — it's timeless work that grows with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Stats Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f5f6f7] mb-12">Trusted by Hundreds</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { icon: <Users size={28} strokeWidth={1.5} />, value: '80+', label: 'Happy Clients' },
              { icon: <Camera size={28} strokeWidth={1.5} />, value: '100+', label: 'Projects Completed' },
              { icon: <Star size={28} strokeWidth={1.5} />, value: '4.0', label: 'Average Rating' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-[#c1c4c8] mb-3 flex justify-center">{stat.icon}</div>
                <p className="text-3xl md:text-4xl font-bold text-[#f5f6f7]">{stat.value}</p>
                <p className="text-sm text-[#c1c4c8] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#2b2e33] text-[#f5f6f7] py-24 px-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 text-center">
          <div className="flex flex-col items-center gap-8 px-4">
            <h2 className="max-w-[720px] text-5xl font-semibold leading-tight">
              What Clients Say
            </h2>
            <p className="text-xl max-w-[600px] font-medium text-[#c1c4c8]">
              Real feedback from real people who trusted me with their precious moments
            </p>
          </div>

          {/* First Row - Moving Right to Left */}
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <div className="group flex overflow-hidden p-2 gap-4 mb-4">
              <div className="flex shrink-0 justify-around gap-4 animate-marquee-left group-hover:pause-animation">
                {[...Array(3)].map((_, setIndex) => (
                  testimonials.map((testimonial, i) => (
                    <div
                      key={`row1-${setIndex}-${i}`}
                      className="flex flex-col rounded-lg border border-[rgba(193,196,200,0.25)] bg-gradient-to-b from-[rgba(245,246,247,0.08)] to-[rgba(245,246,247,0.02)] p-6 text-start max-w-[320px] hover:from-[rgba(245,246,247,0.12)] hover:to-[rgba(245,246,247,0.04)] transition-colors duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <img 
                          src={testimonial.author.avatar} 
                          alt={testimonial.author.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <div className="flex flex-col items-start">
                          <h3 className="text-md font-semibold leading-none">
                            {testimonial.author.name}
                          </h3>
                          {testimonial.author.handle && (
                            <p className="text-sm text-[#c1c4c8]">
                              {testimonial.author.handle}
                            </p>
                          )}
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-[#c1c4c8]">
                        {testimonial.text}
                      </p>
                    </div>
                  ))
                ))}
              </div>
            </div>

            {/* Second Row - Moving Left to Right */}
            <div className="group flex overflow-hidden p-2 gap-4">
              <div className="flex shrink-0 justify-around gap-4 animate-marquee-right group-hover:pause-animation">
                {[...Array(3)].map((_, setIndex) => (
                  testimonials2.map((testimonial, i) => (
                    <div
                      key={`row2-${setIndex}-${i}`}
                      className="flex flex-col rounded-lg border border-[rgba(193,196,200,0.25)] bg-gradient-to-b from-[rgba(245,246,247,0.08)] to-[rgba(245,246,247,0.02)] p-6 text-start max-w-[320px] hover:from-[rgba(245,246,247,0.12)] hover:to-[rgba(245,246,247,0.04)] transition-colors duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <img 
                          src={testimonial.author.avatar} 
                          alt={testimonial.author.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <div className="flex flex-col items-start">
                          <h3 className="text-md font-semibold leading-none">
                            {testimonial.author.name}
                          </h3>
                          {testimonial.author.handle && (
                            <p className="text-sm text-[#c1c4c8]">
                              {testimonial.author.handle}
                            </p>
                          )}
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-[#c1c4c8]">
                        {testimonial.text}
                      </p>
                    </div>
                  ))
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#2b2e33]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#2b2e33]" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center">
        <div className="flex items-center justify-center gap-6 mb-4">
          <a
            href="https://www.instagram.com/s8iah.visuals/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c1c4c8] hover:text-[#f5f6f7] transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.tiktok.com/@s8iah.visuals"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c1c4c8] hover:text-[#f5f6f7] transition-colors duration-300"
            aria-label="TikTok"
          >
            <TikTokIcon />
          </a>
        </div>
        <p className="text-sm text-[#c1c4c8]">© {new Date().getFullYear()} SV</p>
      </footer>

      {/* Floating Book Button */}
      <button
        onClick={() => {
          bookingFormRef.current?.reset();
          setIsModalOpen(true);
          setIsSubmitted(false);
        }}
        className="fixed bottom-8 right-8 bg-[rgba(245,246,247,0.1)] backdrop-blur-md border-2 border-[rgba(245,246,247,0.3)] text-[#f5f6f7] px-7 py-4 rounded-full font-bold tracking-wider cursor-pointer z-[999] transition-all duration-300 hover:-translate-y-1 hover:bg-[rgba(245,246,247,0.2)] hover:border-[rgba(245,246,247,0.5)] hover:shadow-[0_12px_30px_rgba(255,255,255,0.3)] animate-[fadeInUp_0.8s_ease_forwards]"
        style={{ boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)' }}
      >
        Book
      </button>

      {/* Booking Modal */}
      <div
        onClick={closeModal}
        className={`fixed inset-0 z-[1999] transition-all duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />
      <div
        className={`fixed bottom-24 right-8 z-[2000] w-[380px] max-h-[520px] rounded-2xl overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] origin-bottom-right ${isModalOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
        style={{
          background: 'rgba(43,46,51,0.95)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          boxShadow: '0 16px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(193,196,200,0.15)',
        }}
      >
        <div className="p-6 flex flex-col max-h-[520px] overflow-y-auto">
          <button
            onClick={closeModal}
            className="absolute top-3 right-4 bg-none border-none text-[#f5f5f5] text-2xl hover:text-[#c1c4c8] transition-colors cursor-pointer"
          >
            ×
          </button>

          {!isSubmitted ? (
            <>
              <h3 className="text-xl font-bold text-[#f5f6f7] mb-6">Book a Session</h3>
              <form
                ref={bookingFormRef}
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = bookingFormRef.current ?? (e.target as HTMLFormElement);
                  const formData = new FormData(form);

                  fetch('https://formsubmit.co/discoding02@gmail.com', {
                    method: 'POST',
                    body: formData,
                  }).then(() => {
                    setIsSubmitted(true);
                    form.reset();
                  });
                }}
                className="flex flex-col gap-3"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Booking Request" />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="bg-[rgba(11,11,11,0.6)] backdrop-blur-md border border-[rgba(193,196,200,0.25)] px-3 py-2.5 rounded-[10px] text-[#f5f5f5] text-sm font-[inherit] focus:outline-none focus:border-[#c1c4c8] focus:shadow-[0_0_10px_rgba(193,196,200,0.3)] transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="bg-[rgba(11,11,11,0.6)] backdrop-blur-md border border-[rgba(193,196,200,0.25)] px-3 py-2.5 rounded-[10px] text-[#f5f5f5] text-sm font-[inherit] focus:outline-none focus:border-[#c1c4c8] focus:shadow-[0_0_10px_rgba(193,196,200,0.3)] transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="bg-[rgba(11,11,11,0.6)] backdrop-blur-md border border-[rgba(193,196,200,0.25)] px-3 py-2.5 rounded-[10px] text-[#f5f5f5] text-sm font-[inherit] focus:outline-none focus:border-[#c1c4c8] focus:shadow-[0_0_10px_rgba(193,196,200,0.3)] transition-all"
                />
                <input
                  type="date"
                  name="date"
                  required
                  className="bg-[rgba(11,11,11,0.6)] backdrop-blur-md border border-[rgba(193,196,200,0.25)] px-3 py-2.5 rounded-[10px] text-[#f5f5f5] text-sm font-[inherit] focus:outline-none focus:border-[#c1c4c8] focus:shadow-[0_0_10px_rgba(193,196,200,0.3)] transition-all"
                />
                <textarea
                  name="details"
                  placeholder="Tell us about your event..."
                  rows={3}
                  className="bg-[rgba(11,11,11,0.6)] backdrop-blur-md border border-[rgba(193,196,200,0.25)] px-3 py-2.5 rounded-[10px] text-[#f5f5f5] text-sm font-[inherit] focus:outline-none focus:border-[#c1c4c8] focus:shadow-[0_0_10px_rgba(193,196,200,0.3)] transition-all resize-none"
                />
                <button
                  type="submit"
                  className="mt-2 bg-[#c1c4c8] border-none px-4 py-3 rounded-full text-[#2b2e33] font-bold text-sm cursor-pointer transition-all duration-300 hover:bg-[#f5f6f7] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,255,255,0.4)]"
                >
                  Submit Booking
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 animate-[fadeInScale_0.5s_ease_forwards]">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4 animate-[checkmark_0.5s_ease_forwards]">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#f5f6f7] mb-2">Thank You!</h3>
              <p className="text-[#c1c4c8] text-center text-sm mb-5">We'll get back to you as soon as possible.</p>
              <button
                onClick={closeModal}
                className="bg-transparent border-2 border-[#c1c4c8] text-[#c1c4c8] px-5 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 hover:bg-[#c1c4c8] hover:text-[#2b2e33]"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes checkmark {
          0% { transform: scale(0); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        html { scroll-behavior: smooth; }
        .event-card {
          transition: transform 0.35s cubic-bezier(0.22, 0.61, 0.36, 1);
        }
        .event-card:hover {
          transform: translateY(-14px) scale(1.02);
        }
        .event-card:hover ~ .event-card {
          transform: translateX(130px);
        }
      `}</style>
    </div>
  );
};

export default Index;
