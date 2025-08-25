// import GlassmorphismCard from '@/utils/GlassmorphismCard';
// import UHeading from '@/utils/UHeading';
// import Image from 'next/image';
// import * as Icons from 'lucide-react';

// const WhyUs = () => {
//   const whyChooseUs = [
//     {
//       heading: 'End-to-End Solutions',
//       description:
//         'We deliver complete solutions tailored to your business needs.',
//       icon: 'Box', // example from lucide-react
//     },
//     {
//       heading: 'Global Expertise',
//       description: 'Our team brings worldwide experience to every project.',
//       icon: 'Globe',
//     },
//     {
//       heading: 'Customized Approach',
//       description:
//         'Solutions designed specifically for your unique challenges.',
//       icon: 'Settings',
//     },
//     {
//       heading: '24/7 Support',
//       description: 'Always available to assist you whenever you need.',
//       icon: 'Headphones',
//     },
//   ];

//   return (
//     <section className="w-full mt-10 md:mt-30 p-4 mb-5 text-center flex lg:flex-row flex-col  items-center justify-center gap-5">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center ">
//         {/* Left column */}
//         <div className="flex justify-center">
//           <Image
//             src="/assets/why1.png"
//             alt="Handshake"
//             width={300}
//             height={600}
//             className="rounded-xl object-cover h-[50vh]  md:h-[70vh]"
//           />
//         </div>

//         {/* Right column */}
//         <div className="flex flex-col md:gap-35">
//           <Image
//             src="/assets/why2.png"
//             alt="Brain"
//             width={300}
//             height={200}
//             className="rounded-xl object-cover"
//           />
//           <Image
//             src="/assets/why3.png"
//             alt="Headphone"
//             width={300}
//             height={100}
//             className="rounded-xl object-cover"
//           />
//         </div>
//       </div>
//       <div className=" w-full mt-20 lg:mt-0 lg:w-[55%] flex flex-col gap-5 justify-center items-center">
//         <UHeading text={'Why We Stand Out'} />

//         <div className="flex flex-wrap gap-6 justify-center">
//           {whyChooseUs.map((item, idx) => {
//             const IconComponent = Icons[item.icon];
//             return (
//               <GlassmorphismCard
//                 key={idx}
//                 className="w-full sm:w-[48%] md:w-[45%] lg:w-[45%]"
//                 textSize='text-sm'
//               >
//                 <div className="flex items-center gap-3 mb-3">
//                   <IconComponent
//                     size={32}
//                     className="text-blue-500 dark:text-cyan-400"
//                   />
//                   <h1 className="text-md font-bold dark:text-white">
//                     {item.heading}
//                   </h1>
//                 </div>
//                 <p className="text-sm text-gray-600 dark:text-zinc-400">
//                   {item.description}
//                 </p>
//               </GlassmorphismCard>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyUs;
'use client';

import GlassmorphismCard from '@/utils/GlassmorphismCard';
import UHeading from '@/utils/UHeading';
import Image from 'next/image';
import { useState } from 'react';

// Import only needed icons for better performance
import { Box, Globe, Settings, Headphones } from 'lucide-react';

const WhyUs = () => {
  const [imageLoadStates, setImageLoadStates] = useState({
    why1: false,
    why2: false,
    why3: false,
  });

  const handleImageLoad = (imageName) => {
    setImageLoadStates((prev) => ({
      ...prev,
      [imageName]: true,
    }));
  };

  // Icon mapping for better performance
  const iconMap = {
    Box,
    Globe,
    Settings,
    Headphones,
  };

  const whyChooseUs = [
    {
      heading: 'End-to-End Solutions',
      description:
        'We deliver complete solutions tailored to your business needs.',
      icon: 'Box',
    },
    {
      heading: 'Global Expertise',
      description: 'Our team brings worldwide experience to every project.',
      icon: 'Globe',
    },
    {
      heading: 'Customized Approach',
      description:
        'Solutions designed specifically for your unique challenges.',
      icon: 'Settings',
    },
    {
      heading: '24/7 Support',
      description: 'Always available to assist you whenever you need.',
      icon: 'Headphones',
    },
  ];

  return (
    // Remove section wrapper since parent Home.jsx already provides it
    <div className="w-full mt-10 md:mt-30 p-4 mb-5 text-center flex lg:flex-row flex-col items-center justify-center gap-5">
      {/* Visual Content Area */}
      <aside
        className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center"
        aria-label="Why choose Naqvix visual showcase"
      >
        {/* Left column */}
        <figure className="flex justify-center relative">
          {/* Loading placeholder for first image */}
          {!imageLoadStates.why1 && (
            <div
              className="absolute inset-0 bg-gray-200 dark:bg-zinc-700 rounded-xl animate-pulse flex items-center justify-center"
              aria-label="Loading partnership image"
            >
              <div className="text-gray-400 dark:text-zinc-500">
                <Box size={48} />
              </div>
            </div>
          )}
          <Image
            src="/assets/why-section-image-1.webp"
            alt="Professional handshake representing Naqvix's partnership approach and collaborative business relationships"
            width={300}
            height={600}
            className="rounded-xl object-cover h-[50vh] md:h-[70vh]"
            onLoad={() => handleImageLoad('why1')}
            priority={false}
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </figure>

        {/* Right column */}
        <div className="flex flex-col md:gap-35">
          <figure className="relative">
            {!imageLoadStates.why2 && (
              <div
                className="absolute inset-0 bg-gray-200 dark:bg-zinc-700 rounded-xl animate-pulse flex items-center justify-center"
                aria-label="Loading innovation image"
              >
                <div className="text-gray-400 dark:text-zinc-500">
                  <Globe size={32} />
                </div>
              </div>
            )}
            <Image
              src="/assets/why-section-image-2.webp"
              alt="Digital brain illustration representing Naqvix's AI and intelligent technology solutions"
              width={300}
              height={200}
              className="rounded-xl object-cover"
              onLoad={() => handleImageLoad('why2')}
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </figure>

          <figure className="relative">
            {!imageLoadStates.why3 && (
              <div
                className="absolute inset-0 bg-gray-200 dark:bg-zinc-700 rounded-xl animate-pulse flex items-center justify-center"
                aria-label="Loading support image"
              >
                <div className="text-gray-400 dark:text-zinc-500">
                  <Headphones size={32} />
                </div>
              </div>
            )}
            <Image
              src="/assets/why-section-image-3.webp"
              alt="Customer support headphones representing Naqvix's 24/7 dedicated support services"
              width={300}
              height={100}
              className="rounded-xl object-cover"
              onLoad={() => handleImageLoad('why3')}
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </figure>
        </div>
      </aside>

      {/* Main Content Area */}
      <article className="w-full mt-20 lg:mt-0 lg:w-[55%] flex flex-col gap-5 justify-center items-center">
        {/* Section Header */}
        <header>
          <UHeading text={'Why We Stand Out'} />
        </header>

        {/* Competitive Advantages Grid */}
        <div
          className="flex flex-wrap gap-6 justify-center "
          role="list"
          aria-label="Our competitive advantages"
        >
          {whyChooseUs.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Box;

            return (
              <div
                key={item.heading}
                role="listitem"
                className="w-full sm:w-[48%] md:w-[45%] lg:w-[45%]"
                aria-labelledby={`advantage-${idx + 1}-title`}
                aria-describedby={`advantage-${idx + 1}-description`}
              >
                <GlassmorphismCard
                  className="w-full "
                  textSize="text-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <IconComponent
                      size={32}
                      className="text-blue-500 dark:text-cyan-400"
                      aria-hidden="true"
                    />
                    <h3
                      id={`advantage-${idx + 1}-title`}
                      className="text-md font-bold dark:text-white"
                    >
                      {item.heading}
                    </h3>
                  </div>
                  <p
                    id={`advantage-${idx + 1}-description`}
                    className="text-sm text-gray-600 dark:text-zinc-400"
                  >
                    {item.description}
                  </p>

                  {/* Screen reader context */}
                  <span className="sr-only">
                    Advantage {idx + 1} of {whyChooseUs.length}: {item.heading}
                  </span>
                </GlassmorphismCard>
              </div>
            );
          })}
        </div>
      </article>
    </div>
  );
};

export default WhyUs;
