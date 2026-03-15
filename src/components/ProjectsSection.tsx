import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { link } from 'fs';
import { ExternalLink } from 'lucide-react';
import { i } from 'node_modules/vite/dist/node/types.d-aGj9QkWt';

const projects = [
  {
    title: 'KAI Twibboon and Posters',
    image: '/projectImg/Poster.jpg',
    category: 'Graphic Design',
    desc: 'Making some posters and twibboon for some events at KAI Intership on 2023.',
    color: 'from-primary/20 to-accent/40',
  },
  {
    title: 'Link PDF Canva Portofolio',
    image: '/projectImg/PORTOFOLIO-EDITING.jpg',
    category: 'Portfolio Design',
    desc: 'Recaps and more about my portfolio on design photography, and videography. Since 2023-2025',
    color: 'from-primary/20 to-accent/40',
    link: 'https://www.canva.com/design/DAG9dWDssOo/9MR-p94l_G3uWJnVfDB3TA/edit?utm_content=DAG9dWDssOo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
  },
  {
    title: 'Observation Video of SMAN 28 Jakarta Curriculum',
    image: '/projectImg/Observasi.jpg',
    category: 'Curriculum Studies',
    desc: 'Projects of Curriculum Studies at Accounting Education at 1st Semester. and already published on HKI. ( Hak Atas Kekayaan Intelektual ) on 2025',
    color: 'from-primary/20 to-accent/40',
    link: 'https://youtu.be/2fLRZ6jcakI',
  },
  {
    title: 'MV making inspired by NIKI - Take A Chance With Me',
    image: '/projectImg/MV.jpg',
    category: 'Music Video',
    desc: 'Make, take, and shoot a MV concept with NIKI-Take A Chance With Me as a backsound On 2024',
    color: 'from-primary/20 to-accent/40',
    link: 'https://youtu.be/p34bS4dys-o?si=TVmpLSFJuUt7dVXC',
  },
  {
    title: 'Al Marjan Twibboon ramadhan 1447 H',
    image: '/projectImg/Twiboon-Al.jpg',
    category: 'Music Video',
    desc: 'Designing a Twibboon for Commander, Superwarrior, and Warrior of Digital Presention Al-Marjan Mosque.',
    color: 'from-primary/20 to-accent/40',
    link: 'https://twb.nz/superwarrioralmarjan',
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id='projects' className='py-24 bg-background'>
      <div ref={ref} className='max-w-6xl mx-auto px-6'>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-4 text-gradient transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Projects
        </h2>
        <p
          className={`text-center text-muted-foreground mb-12 transition-all duration-600 delay-100 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Selected works and designs
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((p, i) => (
            <div
              key={i}
              className={`group relative rounded-xl overflow-hidden border border-border bg-card shadow-purple-sm hover:shadow-purple transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Placeholder image area */}
              <div className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                <img src={p.image} alt={p.title} className='object-cover w-full h-full' />
              </div>

              {/* Info */}
              <div className='p-5'>
                <span className='text-xs font-medium text-primary'>{p.category}</span>
                <h3 className='text-base font-semibold text-foreground mt-1'>{p.title}</h3>
              </div>

              {/* Hover overlay */}
              <div className='absolute inset-0 bg-primary/90 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <h3 className='text-lg font-bold text-primary-foreground mb-2'>{p.title}</h3>
                <p className='text-sm text-primary-foreground/80 mb-4'>{p.desc}</p>
                <a href={p.link} target='_blank' rel='noopener noreferrer'>
                  <span className='inline-flex items-center gap-1 text-xs font-medium text-primary-foreground border border-primary-foreground/30 px-3 py-1 rounded-full'>
                    View <ExternalLink size={12} />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
