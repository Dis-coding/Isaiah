interface EventCardProps {
  event: { id: number; date: string; title: string; image: string };
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border cursor-pointer transition-all duration-300 hover:border-primary/30">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <p className="font-body text-xs uppercase tracking-widest text-primary mb-1">{event.date}</p>
        <h3 className="font-display text-lg font-semibold text-foreground">{event.title}</h3>
      </div>
    </div>
  );
};

export default EventCard;
