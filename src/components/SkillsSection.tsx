import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Palette,
  Code,
  Figma,
  PenTool,
  Users,
  Lightbulb,
  MessageSquare,
  Clock,
} from 'lucide-react';

const hardSkills = [
  { name: 'Graphic Desain ( Canva & Alight Motion )', icon: Palette, level: 94 },
  { name: 'Video Editing ( Capcut & Alight Motion )', icon: Figma, level: 85 },
  { name: 'Photography', icon: Code, level: 75 },
  { name: 'Microsoft Office', icon: PenTool, level: 80 },
  { name: 'HTML/CSS', icon: PenTool, level: 70 },
  { name: 'Drummer, Guitarist, Vocalist', icon: PenTool, level: 85 },
];

const softSkills = [
  { name: 'Teamwork', icon: Users, level: 95 },
  { name: 'Creativity', icon: Lightbulb, level: 86 },
  { name: 'Communication', icon: MessageSquare, level: 90 },
  { name: 'Analytic Skill', icon: MessageSquare, level: 80 },
  { name: 'Public Speaking', icon: MessageSquare, level: 78 },
  { name: 'Time Management', icon: Clock, level: 80 },
];

interface SkillCardProps {
  name: string;
  icon: React.ElementType;
  level: number;
  visible: boolean;
  delay: number;
}

const SkillCard = ({ name, icon: Icon, level, visible, delay }: SkillCardProps) => (
  <div
    className={`bg-card rounded-xl p-5 shadow-purple-sm border border-border transition-all duration-500 hover:shadow-purple hover:-translate-y-1`}
    style={{
      transitionDelay: `${delay}ms`,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(20px)',
    }}
  >
    <div className='flex items-center gap-3 mb-4'>
      <div className='w-10 h-10 rounded-lg bg-accent flex items-center justify-center'>
        <Icon size={20} className='text-primary' />
      </div>
      <span className='font-medium text-foreground'>{name}</span>
    </div>
    <div className='w-full h-2 bg-secondary rounded-full overflow-hidden'>
      <div
        className='h-full bg-primary rounded-full transition-all duration-1000 ease-out'
        style={{ width: visible ? `${level}%` : '0%' }}
      />
    </div>
    <span className='text-xs text-muted-foreground mt-1 block text-right'>{level}%</span>
  </div>
);

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id='skills' className='py-24 bg-background'>
      <div ref={ref} className='max-w-6xl mx-auto px-6'>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-4 text-gradient transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Skills
        </h2>
        <p
          className={`text-center text-muted-foreground mb-12 transition-all duration-600 delay-100 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          What I bring to the table
        </p>

        <div className='grid md:grid-cols-2 gap-12'>
          <div>
            <h3 className='text-lg font-semibold text-foreground mb-6'>Hard Skills</h3>
            <div className='grid gap-4'>
              {hardSkills.map((s, i) => (
                <SkillCard key={s.name} {...s} visible={isVisible} delay={i * 100} />
              ))}
            </div>
          </div>
          <div>
            <h3 className='text-lg font-semibold text-foreground mb-6'>Soft Skills</h3>
            <div className='grid gap-4'>
              {softSkills.map((s, i) => (
                <SkillCard key={s.name} {...s} visible={isVisible} delay={i * 100 + 50} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
