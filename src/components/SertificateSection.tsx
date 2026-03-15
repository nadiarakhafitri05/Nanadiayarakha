import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// Extract certificates with images from achievements
const certificates = [
  'certificateImg/certif-1.png',
  'certificateImg/certif-2.jpg',
  'certificateImg/certif-3.jpg',
  'certificateImg/certif-4.png',
  'certificateImg/certif-5.png',
  'certificateImg/certif-6.png',
  'certificateImg/certif-7.png',
  'certificateImg/certif-8.png',
  'certificateImg/certif-9.jpg',
  'certificateImg/certif-10.jpg',
];

const Sertificate = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id='sertificate' className='py-24 bg-gradient-purple'>
      <div ref={ref} className='max-w-4xl mx-auto px-6'>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-4 text-gradient transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Certificates
        </h2>
        <p
          className={`text-center text-muted-foreground mb-12 transition-all duration-600 delay-100 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Showcase of my certificates
        </p>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className={`w-full max-w-3xl mx-auto transition-all duration-600 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <CarouselContent>
            {certificates.map((cert, index) => (
              <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/1'>
                <div className='p-1'>
                  <img
                    src={cert}
                    alt={`Certificate ${index + 1}`}
                    className='w-full h-auto rounded-lg shadow-lg'
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Sertificate;
