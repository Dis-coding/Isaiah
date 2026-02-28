const testimonials = [
  { name: 'Keisha Williams', text: 'Absolutely stunning work! Every moment was beautifully preserved.', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face' },
  { name: 'Marcus Thompson', text: 'Professional, creative, and a joy to work with. Photos exceeded expectations!', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face' },
  { name: 'Maria Garcia', text: 'The attention to detail is incredible. These photos will be treasured.', avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face' },
  { name: 'DeAndre Williams', text: 'Amazing experience from start to finish. Highly recommend!', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face' },
  { name: 'Jasmine Carter', text: 'The quality and creativity in every shot is exceptional.', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face' },
  { name: 'Carlos Mendez', text: 'Made us feel comfortable and captured our personalities perfectly.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face' },
  { name: 'Aaliyah Brooks', text: 'Incredible eye for composition and lighting. Better than imagined!', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face' },
  { name: 'Sophia Chen', text: 'Creativity and attention to detail exceeded expectations. Truly exceptional!', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face' },
];

const TestimonialCard = ({ name, text, avatar }: { name: string; text: string; avatar: string }) => (
  <div className="glass-card rounded-xl p-6 w-[320px] shrink-0 mx-3">
    <div className="flex items-center gap-3 mb-4">
      <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
      <p className="font-body text-sm font-medium text-foreground">{name}</p>
    </div>
    <p className="font-body text-sm text-muted-foreground leading-relaxed">{text}</p>
  </div>
);

const TestimonialMarquee = () => {
  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4);

  return (
    <div className="space-y-4">
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee">
          {[...row1, ...row1].map((t, i) => <TestimonialCard key={i} {...t} />)}
        </div>
      </div>
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee-slow" style={{ animationDirection: 'reverse' }}>
          {[...row2, ...row2].map((t, i) => <TestimonialCard key={i} {...t} />)}
        </div>
      </div>
    </div>
  );
};

export default TestimonialMarquee;
