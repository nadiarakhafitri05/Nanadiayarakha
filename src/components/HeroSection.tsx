import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, GraduationCap, Heart } from 'lucide-react';

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id='about' className='min-h-screen flex items-center bg-gradient-purple pt-16'>
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Text */}
        <div className='order-2 md:order-1 space-y-6'>
          <p className='text-primary font-medium'>Hello, I'm</p>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight'>
            Nadia <span className='text-gradient'>Rakha Fitri</span>
          </h1>
          <p className='text-lg text-muted-foreground leading-relaxed'>
            A passionate creative, aspiring graphic designer, and musician with a keen eye and
            performing for detail. Currently pursuing a degree in Finance and Accounting, I bridge
            the gap between analytical thinking and visual storytelling. While actively building my
            skills in Graphic Design, UI/UX, and Social Media Management.
          </p>

          <div className='flex flex-col gap-3 text-sm text-muted-foreground'>
            <span className='flex items-center gap-2'>
              <MapPin size={16} className='text-primary' /> Jakarta, Indonesia
            </span>
            <span className='flex items-center gap-2'>
              <GraduationCap size={16} className='text-primary' /> State University of Jakarta —
              Accounting Education Education
            </span>
            <span className='flex items-center gap-2'>
              <Heart size={16} className='text-primary' /> Graphic design, accounting, and music
              playing
            </span>
          </div>
        </div>

        {/* Photo */}
        <div className='order-1 md:order-2 flex justify-center'>
          <img
            src='/profile.webp'
            alt='Profile'
            className='w-[350px] h-[350px] rounded-full object-cover shadow-purple'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
