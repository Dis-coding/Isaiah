import { useState } from 'react';
import { X } from 'lucide-react';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal = ({ open, onClose }: ContactModalProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative glass-card rounded-2xl p-8 w-full max-w-md z-10">
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <h3 className="font-display text-2xl font-bold mb-2">Thank You!</h3>
            <p className="font-body text-muted-foreground">We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <>
            <h3 className="font-display text-2xl font-bold mb-1">Book a Session</h3>
            <p className="font-body text-sm text-muted-foreground mb-6">Tell us about your event or project.</p>
            <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <input type="text" placeholder="Your Name" required
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              <input type="email" placeholder="Email Address" required
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              <textarea placeholder="Tell us about your event..." rows={3} required
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
              <button type="submit"
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-body font-medium text-sm hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
