// import UHeading from '@/utils/UHeading';
// import * as Icons from 'lucide-react';
// import GlassmorphismCard from '@/utils/GlassmorphismCard';

// const Industry = () => {
//   const industries = [
//     {
//       heading: 'Healthcare',
//       description:
//         'AI-driven solutions and analytics to optimize patient care.',
//       icon: 'Activity', // Lucide icon example
//     },
//     {
//       heading: 'Retail',
//       description: 'Automation and insights to enhance customer experience.',
//       icon: 'ShoppingCart',
//     },
//     {
//       heading: 'E-Commerce',
//       description:
//         'End-to-end solutions to scale online businesses effectively.',
//       icon: 'Package',
//     },
//     {
//       heading: 'Real Estate',
//       description:
//         'Data and automation tools to streamline property management.',
//       icon: 'Home',
//     },
//     {
//       heading: 'Education',
//       description: 'Smart learning solutions, LMS, and AI-powered tutoring.',
//       icon: 'BookOpen',
//     },
//     {
//       heading: 'Finance',
//       description:
//         'Automation, analytics, and intelligent solutions for banking and accounting.',
//       icon: 'CreditCard',
//     },
//   ];
//   return (
//     <section className="w-full mt-10 md:mt-30 p-4 mb-5 text-center flex flex-col items-center justify-center gap-5">
//       <div className="w-full flex flex-col items-center justify-center gap-7">
//         <UHeading text="Your Industry, Our Expertise" />
//         <p
//           className="w-full md:w-2/3 text-base md:text-md
//             bg-gradient-to-r from-gray-700 via-gray-800 to-black
//             bg-clip-text text-transparent
//             dark:bg-gradient-to-r dark:from-zinc-300 dark:via-zinc-400 dark:to-zinc-500"
//         >
//           From finance to healthcare, retail to technology, Naqvix delivers
//           innovative solutions that help businesses thrive in every industry.
//         </p>
//       </div>
//       <div className="flex flex-wrap gap-6 justify-center">
//         {industries.map((industry, idx) => {
//           const IconComponent = Icons[industry.icon];
//           return (
//             <GlassmorphismCard
//               key={idx}
//               className="w-full sm:w-[48%] md:w-[45%] lg:w-[30%]"
//               textSize='text-sm' // responsive
//             >
//               <div className="flex items-center gap-3 mb-3">
//                 <IconComponent
//                   size={32}
//                   className="text-blue-500 dark:text-cyan-400"
//                 />
//                 <h1 className="text-lg font-bold dark:text-white">
//                   {industry.heading}
//                 </h1>
//               </div>
//               <p className="text-sm text-gray-600 dark:text-zinc-400">
//                 {industry.description}
//               </p>
//             </GlassmorphismCard>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Industry;

'use client';

import UHeading from '@/utils/UHeading';
import GlassmorphismCard from '@/utils/GlassmorphismCard';

// Import only needed icons for better performance
import {
  Activity,
  ShoppingCart,
  Package,
  Home,
  BookOpen,
  CreditCard,
} from 'lucide-react';

const Industry = () => {
  // Icon mapping for better performance and safety
  const iconMap = {
    Activity,
    ShoppingCart,
    Package,
    Home,
    BookOpen,
    CreditCard,
  };

  const industries = [
    {
      heading: 'Healthcare',
      description:
        'AI-driven solutions and analytics to optimize patient care.',
      icon: 'Activity',
      sector: 'Medical & Health',
    },
    {
      heading: 'Retail',
      description: 'Automation and insights to enhance customer experience.',
      icon: 'ShoppingCart',
      sector: 'Commerce & Trade',
    },
    {
      heading: 'E-Commerce',
      description:
        'End-to-end solutions to scale online businesses effectively.',
      icon: 'Package',
      sector: 'Digital Commerce',
    },
    {
      heading: 'Real Estate',
      description:
        'Data and automation tools to streamline property management.',
      icon: 'Home',
      sector: 'Property & Construction',
    },
    {
      heading: 'Education',
      description: 'Smart learning solutions, LMS, and AI-powered tutoring.',
      icon: 'BookOpen',
      sector: 'Learning & Development',
    },
    {
      heading: 'Finance',
      description:
        'Automation, analytics, and intelligent solutions for banking and accounting.',
      icon: 'CreditCard',
      sector: 'Financial Services',
    },
  ];

  return (
    // Remove section wrapper since parent Home.jsx already provides it
    <div className="w-full mt-10 md:mt-30 p-4 mb-5 text-center flex flex-col items-center justify-center gap-5">
      {/* Section Header */}
      <header className="w-full flex flex-col items-center justify-center gap-7">
        <UHeading text="Your Industry, Our Expertise" />

        <p
          className="w-full md:w-2/3 text-base md:text-md
          bg-gradient-to-r from-gray-700 via-gray-800 to-black 
          bg-clip-text text-transparent
          dark:bg-gradient-to-r dark:from-zinc-300 dark:via-zinc-400 dark:to-zinc-500"
        >
          From finance to healthcare, retail to technology, Naqvix delivers
          innovative solutions that help businesses thrive in every industry.
        </p>
      </header>

      {/* Industries Grid */}
      <main>
        <div
          className="flex flex-wrap gap-6 justify-center"
          role="list"
          aria-label="Industries we serve with specialized expertise"
        >
          {industries.map((industry, idx) => {
            const IconComponent = iconMap[industry.icon] || Activity;

            return (
              <article
                key={industry.heading}
                role="listitem"
                className="w-full sm:w-[48%] md:w-[45%] lg:w-[30%]"
                aria-labelledby={`industry-${idx + 1}-title`}
                aria-describedby={`industry-${idx + 1}-description`}
              >
                <GlassmorphismCard className="w-full" textSize="text-sm">
                  <header className="flex items-center gap-3 mb-3">
                    <IconComponent
                      size={32}
                      className="text-blue-500 dark:text-cyan-400"
                      aria-hidden="true"
                    />
                    <div>
                      <h3
                        id={`industry-${idx + 1}-title`}
                        className="text-lg font-bold dark:text-white"
                      >
                        {industry.heading}
                      </h3>
                      {/* Hidden sector classification for screen readers and SEO */}
                      <span className="sr-only">Sector: {industry.sector}</span>
                    </div>
                  </header>

                  <div>
                    <p
                      id={`industry-${idx + 1}-description`}
                      className="text-sm text-gray-600 dark:text-zinc-400"
                    >
                      {industry.description}
                    </p>

                    {/* Screen reader context */}
                    <span className="sr-only">
                      Industry expertise {idx + 1} of {industries.length}:{' '}
                      {industry.heading} in {industry.sector}
                    </span>
                  </div>
                </GlassmorphismCard>
              </article>
            );
          })}
        </div>

        {/* Additional SEO context - hidden but crawlable */}
        <div className="sr-only">
          <h4>Industries We Serve:</h4>
          <ul>
            {industries.map((industry, idx) => (
              <li key={idx}>
                <strong>{industry.heading}</strong> ({industry.sector}):{' '}
                {industry.description}
              </li>
            ))}
          </ul>
          <p>
            Naqvix provides specialized technology solutions across{' '}
            {industries.length} major industry sectors, delivering tailored
            automation, AI, analytics, and development services to meet unique
            sector requirements.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Industry;
