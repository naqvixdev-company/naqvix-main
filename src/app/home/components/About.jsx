// import Image from 'next/image';
// import React from 'react';
// import UHeading from '../../../utils/UHeading';
// import GlassmorphismCard from '@/utils/GlassmorphismCard';
// import GlassButton from '@/utils/GlassButton';

// const About = () => {
//   return (
//     <section className="w-full mt-10 mb-5 flex md:flex-row flex-col  items-center justify-center  gap-10 p-5 ">
//       <div className=" w-full md:w-1/3 flex  items-center justify-center">
//         <Image
//           src="/assets/about1.png"
//           width={400}
//           height={400}
//           alt="about"
//           className="rounded-2xl"
//         />
//       </div>
//       <div className="flex flex-col gap-5 w-full md:w-[50%] ">
//         <UHeading text={'ABOUT US'} />
//         <GlassmorphismCard className="w-full" textSize="text-sm">
//           <p>
//             We are a technology-driven agency helping businesses scale smarter
//             through tailored solutions. From BPO/KPO services, marketing,
//             finance, and consulting to AI, automation, development, and data
//             analytics, we deliver end-to-end expertise that drives efficiency
//             and innovation. Our mission is to empower organizations with the
//             right mix of strategy, intelligence, and technology to achieve
//             sustainable growth.
//           </p>
//         </GlassmorphismCard>
//         <div className="w-50 m-auto">
//           <GlassButton />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import UHeading from '../../../utils/UHeading';
import GlassmorphismCard from '@/utils/GlassmorphismCard';
import GlassButton from '@/utils/GlassButton';

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    // Remove section wrapper since parent Home.jsx already provides it
    <div className="w-full mt-10 mb-5 flex md:flex-row flex-col items-center justify-center gap-10 p-5">
      {/* Visual Content Area */}
      <aside
        className="w-full md:w-1/3 flex items-center justify-center"
        aria-label="About Naqvix visual representation"
      >
        <figure className="relative">
          {/* Loading placeholder */}
          {!imageLoaded && (
            <div
              className="absolute inset-0 w-[400px] h-[400px] bg-gray-200 dark:bg-zinc-700 rounded-2xl animate-pulse flex items-center justify-center"
              aria-label="Loading about image"
            >
              <div className="text-gray-400 dark:text-zinc-500">
                <svg
                  className="w-16 h-16"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          )}

          <Image
            src="/assets/about.webp"
            width={400}
            height={400}
            alt="Naqvix team collaborating on technology solutions, representing our expertise in BPO, AI, automation, and development services"
            className={`rounded-2xl transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            priority={false}
            sizes="(max-width: 768px) 100vw, 33vw"
            onLoad={() => setImageLoaded(true)}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Ss6zqLSVHM4uvufu2+un6UMUV6eVqc6Zz4vfwHx+HXWKR5Dw1C2/VBVPfEyc6sWoTx7SYV7cIIyq5xgYRxPWlrwgJD8A9S6"
          />

          <figcaption className="sr-only">
            Team members at Naqvix working together on innovative technology
            solutions
          </figcaption>
        </figure>
      </aside>

      {/* Main Content Area */}
      <article className="flex flex-col gap-5 w-full md:w-[50%]">
        {/* Section Heading */}
        <header>
          <UHeading text={'ABOUT US'} />
        </header>

        {/* Main Content */}
        <div className="space-y-4">
          <GlassmorphismCard className="w-full" textSize="text-sm">
            <div className="space-y-3">
              <p className="leading-relaxed">
                We started NAQVIX with a simple belief: businesses deserve
                smarter support. Whether you’re a start-up chasing growth or an
                enterprise managing scale, we step in as your reliable partner.
                From BPO and KPO services to AI-driven automation, data
                analytics, finance, and consulting, we bring together the right
                mix of people, process, and technology to help you save time,
                cut costs, and deliver better results to your customers.
              </p>

              <p className="leading-relaxed font-semibold">
                We don’t just ‘provide services. ’ We build long-term
                relationships. Because when you grow, we grow too. ”
              </p>
            </div>
          </GlassmorphismCard>
        </div>

        {/* Call to Action */}
        <footer className="flex justify-center md:justify-start mt-6">
          <div className="w-auto">
            <GlassButton />
          </div>
        </footer>

        {/* Structured Data for SEO */}
      </article>
    </div>
  );
};

export default About;
