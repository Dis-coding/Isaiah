import { useState } from 'react';

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

const BookingModal = ({ open, onClose }: BookingModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      {/* Scrim */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[1999] transition-all duration-300 ${open ? 'opacity-100 bg-background/80 backdrop-blur-sm' : 'opacity-0 pointer-events-none'}`}
      />
      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-[2000] transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="h-full bg-card/95 backdrop-blur-xl border-l border-muted-foreground/20 p-8 flex flex-col">
          <button
            onClick={onClose}
            className="absolute top-3 right-4 bg-transparent border-none text-foreground text-2xl hover:text-muted-foreground transition-colors cursor-pointer"
          >
            ×
          </button>

          {!isSubmitted ? (
            <>
              <h3 className="text-xl font-bold text-foreground mb-6">Book a Session</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
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
                <input type="text" name="name" placeholder="Full Name" required className="glass-input" />
                <input type="email" name="email" placeholder="Email Address" required className="glass-input" />
                <input type="tel" name="phone" placeholder="Phone Number" className="glass-input" />
                <input type="date" name="date" required className="glass-input" />
                <textarea name="details" placeholder="Tell us about your event..." rows={3} className="glass-input resize-none" />
                <button
                  type="submit"
                  className="mt-2 bg-accent border-none px-4 py-3 rounded-full text-accent-foreground font-bold text-sm cursor-pointer transition-all duration-300 hover:bg-foreground hover:-translate-y-0.5"
                  style={{ boxShadow: '0 8px 20px rgba(255,255,255,0.15)' }}
                >
                  Submit Booking
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center flex-1 animate-[fadeInScale_0.5s_ease_forwards]">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4 animate-[checkmark_0.5s_ease_forwards]">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
              <p className="text-muted-foreground text-center text-sm mb-5">We'll get back to you as soon as possible.</p>
              <button
                onClick={() => { setIsSubmitted(false); onClose(); }}
                className="bg-transparent border-2 border-muted-foreground text-muted-foreground px-5 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 hover:bg-muted-foreground hover:text-card"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BookingModal;
