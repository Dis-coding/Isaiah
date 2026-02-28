import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Users, Award, Star, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import DomeGallery from '@/components/DomeGallery';
import TestimonialMarquee from '@/components/TestimonialMarquee';
import EventCard from '@/components/EventCard';
import ContactModal from '@/components/ContactModal';

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

const events = [
  { id: 1, date: 'Mar 15, 2026', title: 'Night Concert', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800' },
  { id: 2, date: 'Apr 2, 2026', title: 'Wedding Shoot', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800' },
  { id: 3, date: 'Apr 20, 2026', title: 'Club Event', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800' },
  { id: 4, date: 'May 5, 2026', title: 'Corporate Event', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800' },
  { id: 5, date: 'May 18, 2026', title: 'Music Festival', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800' },
  { id: 6, date: 'Jun 1, 2026', title: 'Fashion Show', image: 'https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=800' },
];

const stats = [
  { icon: Camera, value: '2,500+', label: 'Photos Delivered' },
  { icon: Users, value: '350+', label: 'Happy Clients' },
  { icon: Award, value: '12', label: 'Awards Won' },
  { icon: Star, value: '4.9', label: 'Average Rating' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card">
        <div className="flex items-center justify-between px-6 py-4 md:px-12">
          <a href="#" className="font-display text-xl font-semibold tracking-wider text-foreground">
            LENS<span className="gold-text">CRAFT</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'Portfolio', 'Events', 'Testimonials'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-body tracking-wide text-muted-foreground hover:text-foreground transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <button onClick={() => setIsModalOpen(true)} className="px-5 py-2 text-sm font-body font-medium rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
            Book Now
          </button>
        </div>
      </header>

      {/* Hero with DomeGallery */}
      <section id="home" className="relative h-screen overflow-hidden">
        <DomeGallery
          images={galleryImages}
          fit={0.55}
          grayscale
          imageBorderRadius="16px"
          openedImageBorderRadius="20px"
          openedImageWidth="320px"
          openedImageHeight="450px"
        />
        {/* Hero overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center px-6">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
              Capturing <span className="gold-text italic">Moments</span>
            </h1>
            <p className="font-body text-muted-foreground text-lg md:text-xl max-w-lg mx-auto mb-8">
              Event & portrait photography that tells your story
            </p>
            <button onClick={() => setIsModalOpen(true)} className="pointer-events-auto px-8 py-3 rounded-full bg-primary text-primary-foreground font-body font-medium text-sm tracking-wide hover:opacity-90 transition-opacity shadow-lg">
              Get in Touch
            </button>
          </motion.div>
        </div>
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.1 } } }} className="text-center">
              <stat.icon className="mx-auto mb-3 text-primary" size={28} strokeWidth={1.5} />
              <p className="font-display text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section id="events" className="section-padding">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-2">Upcoming</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Events</h2>
        </motion.div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.div key={event.id} initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.08 } } }}>
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 overflow-hidden">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12 px-6">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-2">Reviews</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Client Love</h2>
        </motion.div>
        <TestimonialMarquee />
      </section>

      {/* CTA */}
      <section className="section-padding">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="max-w-3xl mx-auto text-center glass-card rounded-2xl p-12 md:p-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Let's Create Together</h2>
          <p className="font-body text-muted-foreground mb-8 max-w-md mx-auto">Ready to capture your next moment? Let's discuss your vision.</p>
          <button onClick={() => setIsModalOpen(true)} className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-body font-medium text-sm tracking-wide hover:opacity-90 transition-opacity">
            Book a Session
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-display text-lg font-semibold tracking-wider">LENS<span className="gold-text">CRAFT</span></p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Mail size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Phone size={20} /></a>
          </div>
          <p className="font-body text-sm text-muted-foreground">© 2026 LensCraft. All rights reserved.</p>
        </div>
      </footer>

      <ContactModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Index;
