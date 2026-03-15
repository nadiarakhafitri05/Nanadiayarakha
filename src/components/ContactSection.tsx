import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, Phone, Instagram, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

/*
 * EmailJS Setup Instructions:
 * 1. Go to https://www.emailjs.com/ and create an account
 * 2. Create an email service (Gmail, Outlook, etc.)
 * 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{message}}, {{to_email}}
 * 4. Replace the placeholder values in handleSubmit with your actual:
 *    - Service ID (from Email Services)
 *    - Template ID (from Email Templates)
 *    - Public Key (from Account > General)
 */

const socials = [
  { icon: Mail, label: 'nadiarakhafitri@gmail.com', href: 'mailto:nadiarakhafitri@gmail.com' },
  { icon: Phone, label: '+62 628 1806 048191', href: 'https://wa.me/+6281806048191' },
  { icon: Instagram, label: '@nadiarakhaf', href: 'https://instagram.com/nadiarakhaf' },
  { icon: Linkedin, label: '@nadiarakha05', href: 'https://linkedin.com/in/nadiarakha05' },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // EmailJS configuration - Replace with your actual service details
      const serviceId = 'your_service_id'; // Get from EmailJS dashboard
      const templateId = 'your_template_id'; // Create email template in EmailJS
      const publicKey = 'your_public_key'; // Get from EmailJS dashboard

      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_email: 'nadiarakhafitri@gmail.com', // Your email address
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: 'Message sent successfully!',
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      toast({
        title: 'Failed to send message',
        description: 'Please try again later or contact me directly via email.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id='contact' className='py-24 bg-background'>
      <div ref={ref} className='max-w-6xl mx-auto px-6'>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-4 text-gradient transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Contact
        </h2>
        <p
          className={`text-center text-muted-foreground mb-12 transition-all duration-600 delay-100 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Let's work together
        </p>

        <div
          className={`grid md:grid-cols-2 gap-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Contact info */}
          <div className='space-y-5'>
            <h3 className='text-lg font-semibold text-foreground mb-6'>Get in Touch</h3>
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-purple-sm hover:border-primary/30 transition-all group'
              >
                <div className='w-10 h-10 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                  <s.icon size={18} className='text-primary' />
                </div>
                <span className='text-sm text-muted-foreground group-hover:text-foreground transition-colors'>
                  {s.label}
                </span>
              </a>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className='space-y-5'>
            <h3 className='text-lg font-semibold text-foreground mb-6'>Send a Message</h3>
            <Input
              placeholder='Your Name'
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className='bg-card border-border focus:border-primary'
            />
            <Input
              type='email'
              placeholder='Your Email'
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className='bg-card border-border focus:border-primary'
            />
            <Textarea
              placeholder='Your Message'
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className='bg-card border-border focus:border-primary'
            />
            <Button
              type='submit'
              disabled={isLoading}
              className='w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-purple-sm hover:shadow-purple transition-all disabled:opacity-50'
            >
              {isLoading ? (
                <>
                  <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2'></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} className='mr-2' /> Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
