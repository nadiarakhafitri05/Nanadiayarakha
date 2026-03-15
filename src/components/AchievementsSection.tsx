import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Award } from 'lucide-react';
import { i } from 'node_modules/vite/dist/node/types.d-aGj9QkWt';

// Easy to extend — just add new items to this array
const achievements = [
  {
    title: 'Silver Medalist',
    desc: 'National Language Olympics Festival II (FOBN II) in English, for high school/MA/equivalent levels, organized by the Prisma Cendekia Foundation.',
    year: 'June 29-30, 2024',
    image: 'certificateImg/FOBN.jpg',
  },
  {
    title: 'Gold Medalist',
    desc: 'National High School Economics Competition for High Achieving Students (Top 40), for high school/MA/equivalent students, organized by the X Learning Achievement Institute, HIMHI Binus University Student Association.',
    year: 'July 14, 2024',
    image: 'certificateImg/binus.jpg',
  },
  {
    title: 'Winner of the National Selected Writer (Selected Poetry Published in a Book)',
    desc: '14th National Poetry Competition “Pupus dan Tak Pernah Tumbuh” organized by Detak Pustaka and Halo Penyair.',
    year: 'March 23-30, 2024',
    image: 'certificateImg/detakPustaka.jpg',
  },
  {
    title: 'Winner of the National Best Writer Award (Best Poetry Published)',
    desc: '“Tetaplah Bersamaku” Poetry Writing Competition organized by CV. Lingkar Penulis.',
    year: 'April 2024',
    image: 'certificateImg/lingkarPenulis.jpg',
  },
  {
    title: 'Participant',
    desc: 'National Science Olympiad at the District/City Level (OSN-K) in the Earth Sciences category, representing SMAN 28.',
    year: '2023 & 2024',
  },
  {
    title: 'Semifinalist Accounting Olympic Field',
    desc: 'Jambi Accounting Competition Seminar National (JACSEN) 2026, organized by Himatansi Jambi University.',
    year: '7 March 2026',
  },
  {
    title: 'Best Band Performance',
    desc: 'Welcoming Party MIKART FEB UNJ.',
    year: '2026',
  },
];

const AchievementsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id='achievements' className='py-24 bg-gradient-purple'>
      <div ref={ref} className='max-w-4xl mx-auto px-6'>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-4 text-gradient transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Achievements
        </h2>
        <p
          className={`text-center text-muted-foreground mb-12 transition-all duration-600 delay-100 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Certificates & accomplishments
        </p>

        <div className='space-y-6'>
          {achievements.map((a, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row gap-5 bg-card p-6 rounded-xl shadow-purple-sm border border-border hover:shadow-purple transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className={`flex-shrink-0 rounded-xl bg-accent flex items-center justify-center ${
                  !a.image ? 'w-24 h-24' : 'w-auto h-auto'
                }`}
              >
                {!a.image ? (
                  <Award size={24} className='text-primary' />
                ) : (
                  <img
                    src={a.image}
                    alt='award'
                    className='object-cover w-full h-auto md:h-64 rounded-lg'
                  />
                )}
              </div>
              <div>
                <span className='text-xs font-medium text-primary'>{a.year}</span>
                <h3 className='text-base font-semibold text-foreground mt-0.5'>{a.title}</h3>
                <p className='text-sm text-muted-foreground mt-1'>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
