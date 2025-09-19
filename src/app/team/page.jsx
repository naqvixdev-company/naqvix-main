// 'use client';
// import GlassmorphismCard from '@/utils/GlassmorphismCard';
// import UHeading from '@/utils/UHeading';
// import { useEffect, useState } from 'react';
// const TeamMemberCard = ({ member }) => {
//   return (
//     <GlassmorphismCard className="w-full">
//       <div className="text-center">
//         {/* Profile Image */}
//         <div className="mb-6 flex justify-center">
//           <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-500/20 dark:to-purple-500/20 border-2 border-white/30 dark:border-white/20 flex items-center justify-center">
//             {member.image ? (
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-full object-cover"
//               />
//             ) : (
//               <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
//                 {member.name.charAt(0)}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Name */}
//         <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400 mb-2">
//           {member.name}
//         </h3>

//         {/* Role */}
//         <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
//           {member.role}
//         </p>

//         {/* Description */}
//         <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
//           {member.description}
//         </p>

//         {/* Skills/Expertise */}
//         <div className="flex flex-wrap gap-2 justify-center">
//           {member.skills?.map((skill, index) => (
//             <span
//               key={index}
//               className="px-3 py-1 text-xs bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full border border-blue-500/20 dark:border-blue-400/30 text-blue-700 dark:text-blue-300"
//             >
//               {skill}
//             </span>
//           ))}
//         </div>
//       </div>
//     </GlassmorphismCard>
//   );
// };

// const Team = () => {
//   const [teamMembers, setTeamMembers] = useState([]);
//   useEffect(() => {
//     const fetchTeam = async () => {
//       const url= "https://naqvix-main-server.vercel.app/api/team";
//       const response = await fetch(url, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//         mode: 'cors',
//         credentials: 'include',
//       });
//       const data= await response.json();
//       setTeamMembers(data);
//     };
//     fetchTeam();
//   }, []);
//   const leadership = [
//     {
//       name: 'Sarah Johnson',
//       role: 'Chief Executive Officer',
//       description:
//         "Visionary leader with 15+ years in technology innovation. Sarah drives Naqvix's strategic direction and ensures we deliver transformative solutions to our clients worldwide.",
//       skills: ['Strategic Planning', 'Business Development', 'AI Strategy'],
//       image: null,
//     },
//     {
//       name: 'Michael Chen',
//       role: 'Chief Technology Officer',
//       description:
//         'Technology architect with expertise in AI, cloud computing, and enterprise solutions. Michael leads our technical innovation and ensures cutting-edge delivery.',
//       skills: ['AI & ML', 'Cloud Architecture', 'System Design'],
//       image: null,
//     },
//     {
//       name: 'Emily Rodriguez',
//       role: 'Chief Operations Officer',
//       description:
//         'Operations expert focused on process optimization and client satisfaction. Emily ensures seamless project delivery and operational excellence across all departments.',
//       skills: [
//         'Process Optimization',
//         'Project Management',
//         'Quality Assurance',
//       ],
//       image: null,
//     },
//   ];

//   const operations = [
//     {
//       name: 'David Thompson',
//       role: 'Operations Manager',
//       description:
//         'Ensures smooth day-to-day operations and process efficiency across all projects and client engagements.',
//       skills: ['Process Management', 'Team Coordination', 'Client Relations'],
//       image: null,
//     },
//     {
//       name: 'Lisa Wang',
//       role: 'Quality Assurance Lead',
//       description:
//         'Maintains the highest standards of quality in all deliverables and ensures client satisfaction through rigorous testing.',
//       skills: ['Quality Control', 'Testing', 'Documentation'],
//       image: null,
//     },
//     {
//       name: 'James Mitchell',
//       role: 'Project Coordinator',
//       description:
//         'Coordinates cross-functional teams and ensures timely delivery of projects while maintaining clear communication.',
//       skills: ['Project Coordination', 'Communication', 'Timeline Management'],
//       image: null,
//     },
//   ];

//   const development = [
//     {
//       name: 'Alex Kumar',
//       role: 'Senior Full-Stack Developer',
//       description:
//         'Expert in modern web technologies and cloud solutions. Alex leads the development of scalable applications and AI integrations.',
//       skills: ['React', 'Node.js', 'Python', 'AWS'],
//       image: null,
//     },
//     {
//       name: 'Maria Santos',
//       role: 'AI/ML Engineer',
//       description:
//         'Specializes in machine learning models and AI implementation. Maria develops intelligent solutions that drive business automation.',
//       skills: ['Machine Learning', 'Python', 'TensorFlow', 'Data Science'],
//       image: null,
//     },
//     {
//       name: 'Ryan Foster',
//       role: 'DevOps Engineer',
//       description:
//         'Ensures reliable infrastructure and seamless deployments. Ryan maintains our cloud infrastructure and CI/CD pipelines.',
//       skills: ['Docker', 'Kubernetes', 'CI/CD', 'Cloud Infrastructure'],
//       image: null,
//     },
//   ];

//   const marketing = [
//     {
//       name: 'Jessica Brown',
//       role: 'Marketing Director',
//       description:
//         'Creative strategist who builds brand awareness and drives client engagement through innovative marketing campaigns.',
//       skills: ['Digital Marketing', 'Brand Strategy', 'Content Creation'],
//       image: null,
//     },
//     {
//       name: 'Tom Wilson',
//       role: 'Business Development Manager',
//       description:
//         "Focuses on building strategic partnerships and expanding Naqvix's market presence across different industries.",
//       skills: ['Sales', 'Partnership Development', 'Market Analysis'],
//       image: null,
//     },
//     {
//       name: 'Anna Lee',
//       role: 'Content Strategist',
//       description:
//         'Creates compelling content that communicates our value proposition and establishes thought leadership in the industry.',
//       skills: ['Content Writing', 'SEO', 'Social Media', 'Technical Writing'],
//       image: null,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white dark:bg-[#0F0E0E]">
//       {/* Intro Section */}
//       <section className="w-full pt-20 pb-16 px-8">
//         <div className="max-w-6xl mx-auto text-center">
//           <UHeading text={'OUR TEAM'} />
//           <div className="mt-8 max-w-3xl mx-auto">
//             <GlassmorphismCard>
//               <p className="text-xl text-gray-800/90 dark:text-white/90 leading-relaxed">
//                 Meet the people who make Naqvix possible. Our diverse team of
//                 experts brings together years of experience in technology,
//                 innovation, and business excellence to deliver transformative
//                 solutions that drive your success.
//               </p>
//             </GlassmorphismCard>
//           </div>
//         </div>
//       </section>

//       {/* Leadership Section */}
//       <section className="w-full py-16 px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="mb-12">
//             <UHeading text={'LEADERSHIP'} />
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {leadership.map((member, index) => (
//               <TeamMemberCard key={index} member={member} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Operations Team */}
//       <section className="w-full py-16 px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="mb-12">
//             <UHeading text={'OPERATIONS'} />
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {operations.map((member, index) => (
//               <TeamMemberCard key={index} member={member} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Development Team */}
//       <section className="w-full py-16 px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="mb-12">
//             <UHeading text={'DEVELOPMENT'} />
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {development.map((member, index) => (
//               <TeamMemberCard key={index} member={member} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Marketing Team */}
//       <section className="w-full py-16 px-8 mb-10">
//         <div className="max-w-6xl mx-auto">
//           <div className="mb-12">
//             <UHeading text={'MARKETING'} />
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {marketing.map((member, index) => (
//               <TeamMemberCard key={index} member={member} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Team;
'use client';
import GlassmorphismCard from '@/utils/GlassmorphismCard';
import UHeading from '@/utils/UHeading';
import { useEffect, useState } from 'react';

const TeamMemberCard = ({ member }) => {
  return (
    <GlassmorphismCard className="w-full">
      <div className="text-center">
        {/* Profile Image */}
        <div className="mb-6 flex justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-500/20 dark:to-purple-500/20 border-2 border-white/30 dark:border-white/20 flex items-center justify-center">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                {member.name.charAt(0)}
              </div>
            )}
          </div>
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400 mb-2">
          {member.name}
        </h3>

        {/* Role */}
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
          {member.role || member.designation}
        </p>

        {/* Description */}
        {member.description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            {member.description}
          </p>
        )}

        {/* Skills/Expertise */}
        {member.skills && (
          <div className="flex flex-wrap gap-2 justify-center">
            {member.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full border border-blue-500/20 dark:border-blue-400/30 text-blue-700 dark:text-blue-300"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </GlassmorphismCard>
  );
};

const CarouselTeamMemberCard = ({ member }) => {
  return (
    <div className="flex-shrink-0 w-80 mx-4">
      <GlassmorphismCard className="w-full h-full">
        <div className="text-center p-6">
          {/* Profile Image */}
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-500/20 dark:to-purple-500/20 border-2 border-white/30 dark:border-white/20 flex items-center justify-center">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                  {member.name.charAt(0)}
                </div>
              )}
            </div>
          </div>

          {/* Name */}
          <h3 className="text-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400 mb-2">
            {member.name}
          </h3>

          {/* Designation */}
          <p className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-3">
            {member.designation}
          </p>
        </div>
      </GlassmorphismCard>
    </div>
  );
};

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const url = "https://naqvix-main-server.vercel.app/api/team";
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          mode: 'cors',
          credentials: 'include',
        });
        const data = await response.json();
        setTeamMembers(data);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };
    fetchTeam();
  }, []);

  // Calculate how many cards can fit in the viewport (assuming 320px card + 32px margin = 352px per card)
  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      const containerWidth = Math.min(window.innerWidth - 64, 1152); // max-width minus padding
      return Math.floor(containerWidth / 352);
    }
    return 3; // default fallback
  };

  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(getVisibleCards());
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const maxIndex = Math.max(0, teamMembers.length - visibleCards);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  // Calculate the translation and centering
  const getTransform = () => {
    if (teamMembers.length <= visibleCards) {
      // Center the cards when there are fewer cards than visible slots
      const totalWidth = teamMembers.length * 352;
      const containerWidth = visibleCards * 352;
      const offset = (containerWidth - totalWidth) / 2;
      return `translateX(${offset}px)`;
    } else {
      // Normal sliding behavior
      return `translateX(-${currentIndex * 352}px)`;
    }
  };

  const leadership = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      description:
        "Visionary leader with 15+ years in technology innovation. Sarah drives Naqvix's strategic direction and ensures we deliver transformative solutions to our clients worldwide.",
      skills: ['Strategic Planning', 'Business Development', 'AI Strategy'],
      image: null,
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      description:
        'Technology architect with expertise in AI, cloud computing, and enterprise solutions. Michael leads our technical innovation and ensures cutting-edge delivery.',
      skills: ['AI & ML', 'Cloud Architecture', 'System Design'],
      image: null,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Chief Operations Officer',
      description:
        'Operations expert focused on process optimization and client satisfaction. Emily ensures seamless project delivery and operational excellence across all departments.',
      skills: [
        'Process Optimization',
        'Project Management',
        'Quality Assurance',
      ],
      image: null,
    },
  ];

  const operations = [
    {
      name: 'David Thompson',
      role: 'Operations Manager',
      description:
        'Ensures smooth day-to-day operations and process efficiency across all projects and client engagements.',
      skills: ['Process Management', 'Team Coordination', 'Client Relations'],
      image: null,
    },
    {
      name: 'Lisa Wang',
      role: 'Quality Assurance Lead',
      description:
        'Maintains the highest standards of quality in all deliverables and ensures client satisfaction through rigorous testing.',
      skills: ['Quality Control', 'Testing', 'Documentation'],
      image: null,
    },
    {
      name: 'James Mitchell',
      role: 'Project Coordinator',
      description:
        'Coordinates cross-functional teams and ensures timely delivery of projects while maintaining clear communication.',
      skills: ['Project Coordination', 'Communication', 'Timeline Management'],
      image: null,
    },
  ];

  const development = [
    {
      name: 'Alex Kumar',
      role: 'Senior Full-Stack Developer',
      description:
        'Expert in modern web technologies and cloud solutions. Alex leads the development of scalable applications and AI integrations.',
      skills: ['React', 'Node.js', 'Python', 'AWS'],
      image: null,
    },
    {
      name: 'Maria Santos',
      role: 'AI/ML Engineer',
      description:
        'Specializes in machine learning models and AI implementation. Maria develops intelligent solutions that drive business automation.',
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'Data Science'],
      image: null,
    },
    {
      name: 'Ryan Foster',
      role: 'DevOps Engineer',
      description:
        'Ensures reliable infrastructure and seamless deployments. Ryan maintains our cloud infrastructure and CI/CD pipelines.',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'Cloud Infrastructure'],
      image: null,
    },
  ];

  const marketing = [
    {
      name: 'Jessica Brown',
      role: 'Marketing Director',
      description:
        'Creative strategist who builds brand awareness and drives client engagement through innovative marketing campaigns.',
      skills: ['Digital Marketing', 'Brand Strategy', 'Content Creation'],
      image: null,
    },
    {
      name: 'Tom Wilson',
      role: 'Business Development Manager',
      description:
        "Focuses on building strategic partnerships and expanding Naqvix's market presence across different industries.",
      skills: ['Sales', 'Partnership Development', 'Market Analysis'],
      image: null,
    },
    {
      name: 'Anna Lee',
      role: 'Content Strategist',
      description:
        'Creates compelling content that communicates our value proposition and establishes thought leadership in the industry.',
      skills: ['Content Writing', 'SEO', 'Social Media', 'Technical Writing'],
      image: null,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0F0E0E]">
      {/* Intro Section */}
      <section className="w-full pt-20 pb-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <UHeading text={'OUR TEAM'} />
          <div className="mt-8 max-w-3xl mx-auto">
            <GlassmorphismCard>
              <p className="text-xl text-gray-800/90 dark:text-white/90 leading-relaxed">
                Meet the people who make Naqvix possible. Our diverse team of
                experts brings together years of experience in technology,
                innovation, and business excellence to deliver transformative
                solutions that drive your success.
              </p>
            </GlassmorphismCard>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="w-full py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <UHeading text={'LEADERSHIP'} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Operations Team */}
      <section className="w-full py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <UHeading text={'OPERATIONS'} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {operations.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Development Team */}
      <section className="w-full py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <UHeading text={'DEVELOPMENT'} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {development.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Team */}
      <section className="w-full py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <UHeading text={'MARKETING'} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketing.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Fetched Team Members Carousel Section */}
      {teamMembers.length > 0 && (
        <section className="w-full py-16 px-8 mb-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 text-center">
              <UHeading text={'OUR EXTENDED FAMILY'} />
              <div className="mt-6 max-w-2xl mx-auto">
                <GlassmorphismCard>
                  <p className="text-lg text-gray-700/90 dark:text-gray-300/90 leading-relaxed">
                    Discover more talented individuals who contribute to our success and help us deliver exceptional results for our clients.
                  </p>
                </GlassmorphismCard>
              </div>
            </div>

            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: getTransform()
                }}
              >
                {teamMembers.map((member, index) => (
                  <CarouselTeamMemberCard key={index} member={member} />
                ))}
              </div>

              {/* Navigation Buttons - only show if there are more cards than visible */}
              {teamMembers.length > visibleCards && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-800/30 rounded-full p-3 transition-all duration-200 border border-white/30 dark:border-gray-600/30"
                    aria-label="Previous team member"
                  >
                    <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-800/30 rounded-full p-3 transition-all duration-200 border border-white/30 dark:border-gray-600/30"
                    aria-label="Next team member"
                  >
                    <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Dots Indicator - only show if there are more cards than visible */}
            {teamMembers.length > visibleCards && maxIndex > 0 && (
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                        : 'bg-gray-300/50 dark:bg-gray-600/50 hover:bg-gray-400/70 dark:hover:bg-gray-500/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default Team;