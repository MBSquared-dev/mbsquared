import { CheckCircle2 } from 'lucide-react';
import { useRef, useState } from 'react';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!form.current) return false;

    const formData = new FormData(form.current);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name?.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!message?.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm() || !form.current) return;

    setIsSubmitting(true);

    console.log('Sending email...');

    // emailjs
    //   .sendForm(
    //     "service_ll03g2m",
    //     "template_bv3c2xf",
    //     form.current,
    //     {
    //       publicKey: "e-ZqJKO5QKO7CdmXn",
    //     }
    //   )
    //   .then(
    //     () => {
    //       setIsSubmitting(false);
    //       setIsSubmitted(true);
    //       form.current?.reset();

    //       setTimeout(() => {
    //         setIsSubmitted(false);
    //       }, 5000);
    //     },
    //     (error) => {
    //       console.error('FAILED...', error.text);
    //       setIsSubmitting(false);
    //       setErrors({
    //         submit: 'Failed to send message. Please try again later.'
    //       });
    //     }
    //   );
  };

  return (
    <div className="w-full glass-card rounded-xl p-6 md:p-8">
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center text-center py-8">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
          <p className="text-muted-foreground">
            Thank you for reaching out. We'll get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full px-4 py-3 bg-background border ${errors.name ? 'border-destructive' : 'border-input'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors`}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full px-4 py-3 bg-background border ${errors.email ? 'border-destructive' : 'border-input'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="title" className="block text-sm font-medium text-foreground mb-2">
              Subject (Optional)
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              placeholder="What is this regarding?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className={`w-full px-4 py-3 bg-background border ${errors.message ? 'border-destructive' : 'border-input'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors`}
              placeholder="Tell us about your project..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-destructive">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-4 py-3 bg-primary text-white font-medium rounded-lg transition-all 
              hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50
              ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
            `}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
