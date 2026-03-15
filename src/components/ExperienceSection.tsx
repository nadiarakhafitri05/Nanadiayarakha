import { title } from 'process';

const experiences = [
  {
    title: 'National Anthem Conductor',
    org: 'ASEAN Robotic Day 2023',
    date: '2023',
    desc: "Served as the Lead Conductor for the National Anthem 'Indonesia Raya' and ASEAN Anthem during the events.",
    image: 'experienceImg/exp-1.jpg',
  },
  {
    title: 'Member of First Aid',
    org: 'ASEAN Robotic Day 2023',
    date: '2023',
    desc: 'Being a member of first aid at the ASEAN Robotic Day Event with collaboration with the Department of Education of Jakarta and SMA Negeri 28 Jakarta.',
    image: 'experienceImg/exp-2.1.jpg',
    imageSec: 'experienceImg/exp-2.2.jpg',
  },
  {
    title: 'Publication and Documentation Division',
    org: 'KERIS 2024 Event',
    date: '2023 — 2024',
    desc: 'KERIS 2024 is a musical drama event held by SMAN 28 Jakarta arts unit extracurricular. Being one of the members in publication and documentation, capturing moments of each drama scene, rehearsal sessions, editing social media feeds and operating camera tools and editing applications.',
    image: 'experienceImg/exp-3.1.jpg',
    imageSec: 'experienceImg/exp-3.2.jpg',
  },
  {
    title: 'Secretary',
    org: 'Visual Arts Extracurricular',
    date: '2024 — 2025',
    desc: "I'm one of the 1st year team building Visual Arts Extracurricular at SMAN 28 Jakarta. Organized and maintained comprehensive records of meeting minutes, member attendance, and organizational documents for all weekly workshops and events.",
    image: 'experienceImg/exp-4.jpg',
  },
  {
    title: 'Editing division',
    org: 'OAB Sigma TV UNJ',
    date: '2025',
    desc: 'Being an assistant editor/loader for choosing the scene of the short movie and making the trailer of short movie “Penopang”.',
    image: 'experienceImg/exp-5.1.jpg',
    imageSec: 'experienceImg/exp-5.2.jpg',
  },
  {
    title: 'Music Staff - Band Department',
    org: 'MIKART FEB UNJ',
    date: '2026 — Present',
    desc: 'Being a staff on band departement in Mikart FEB UNJ as a drummer. Collaborated closely with band members during intensive rehearsals to arrange songs and refine live performances for faculty-level events and external competitions.',
    image: 'experienceImg/exp-6.1.jpg',
    imageSec: 'experienceImg/exp-6.2.jpg',
  },
  {
    title: 'Documentation Staff',
    org: 'Al-Marjan Ramadan Volunteer Committee',
    date: '2026 — Present',
    desc: 'Captured high-quality photos and videos of various Ramadan activities in Al-Marjan mosque. Produced digital content for social media platforms to increase community engagement. Also managed and organized a digital database of all event documentation.',
  },
  {
    title: 'Commander of Digital Presention',
    org: 'Al-Marjan Ramadan Volunteer Committee',
    date: '2026 — Present',
    desc: 'Handling the registration of warriors who wish to enroll, taking attendance of registered children, coordinating superwarriors, managing registration fees, and preparing financial reports.',
    image: 'experienceImg/exp-8.jpg',
  },
  {
    title: 'Marketing, Content Creator, and One of the Speaker',
    org: '“Sharing Session with Alumni” SG Jati Padang X SMAN 28 Jakarta',
    date: '2026',
    desc: 'Sharing session as a grad student with SMAN 28 Jakarta Students and Bimbel SG Jati padang. Also making some feeds for social media posts and promotion during the event.',
    image: 'experienceImg/exp-9.1.jpg',
    imageSec: 'experienceImg/exp-9.2.jpg',
  },
];

const ExperienceSection = () => {
  return (
    <section id='experience' className='py-24 bg-gradient-purple'>
      <div className='max-w-4xl mx-auto px-6'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-4 text-gradient'>
          Experience
        </h2>
        <p className='text-center text-muted-foreground mb-16'>My journey so far</p>

        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/30' />

          {experiences.map((exp, i) => (
            <div key={i} className='relative mb-12 md:mb-16'>
              {/* Dot */}
              <div className='absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-[5px] md:-translate-x-1.5 top-1.5 ring-4 ring-background z-10' />

              <div
                className={`ml-12 md:ml-0 md:w-[45%] ${
                  i % 2 === 0 ? 'md:mr-auto md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'
                }`}
              >
                <div className='bg-card p-4 md:p-5 rounded-xl shadow-purple-sm border border-border hover:shadow-purple transition-shadow'>
                  {exp.image && (
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className='object-cover w-full h-48 md:h-64 rounded-lg mb-3'
                    />
                  )}
                  {exp.imageSec && (
                    <img
                      src={exp.imageSec}
                      alt={exp.title}
                      className='object-cover w-full h-32 md:h-40 rounded-lg mb-3'
                    />
                  )}
                  <h3 className='text-lg font-semibold text-foreground mb-1'>{exp.title}</h3>
                  <p className='text-sm text-muted-foreground mb-1'>{exp.org}</p>
                  <span className='text-xs font-medium text-primary block mb-2'>{exp.date}</span>
                  <p className='text-sm text-muted-foreground leading-relaxed'>{exp.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
