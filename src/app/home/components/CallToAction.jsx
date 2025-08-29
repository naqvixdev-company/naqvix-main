// import GlassButton from '@/utils/GlassButton';
// import UHeading from '@/utils/UHeading';
// import Image from 'next/image';

// const CallToAction = () => {
//   return (
//     <div className="relative gap-5 w-full mb-10 p-5 flex md:flex-row flex-col items-center justify-center rounded-2xl overflow-hidden">
//       {/* Radiant Glow */}
//       <div
//         className="absolute top-0 left-0 w-94 h-94 rounded-full blur-3xl opacity-70"
//         style={{
//           background:
//             'radial-gradient(circle, rgba(66,153,225,0.5) 0%, rgba(139,92,246,0.4) 40%, rgba(236,72,153,0.3) 80%)',
//           zIndex: 0,
//         }}
//       ></div>

//       <div className="relative items-start flex flex-col w-full md:w-1/2 gap-5 z-10">
//         <h1
//           className="text-[7vw] text-center lg:text-left md:text-[3.5vw] font-extrabold leading-tight
//             bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700
//             bg-clip-text text-transparent
//             dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400"
//         >
//          Let's Build the Future of Your Business
//         </h1>
//         <p
//           className="w-full md:w-3/4 text-base md:text-sm
//             bg-gradient-to-r from-gray-700 via-gray-800 to-black
//             bg-clip-text text-transparent
//             dark:bg-gradient-to-r dark:from-zinc-300 dark:via-zinc-400 dark:to-zinc-500"
//         >
//           Have an idea, a project, or a challenge? Reach out to us and let’s
//           build something extraordinary together.
//         </p>
//         <div className="w-[250px]">
//           <GlassButton text="Start a Conversation" href='/contact' />
//         </div>
//       </div>

//       <div className="relative z-10">
//         <Image
//           src="/assets/callToaction.png"
//           width={400}
//           height={400}
//           alt="touch"
//           className="rounded-2xl"
//         />
//       </div>
//     </div>
//   );
// };

// export default CallToAction;
'use client';

import GlassButton from '@/utils/GlassButton';
import UHeading from '@/utils/UHeading';
import Image from 'next/image';
import { useState } from 'react';

const CallToAction = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    // Using section since this is the final CTA section
    <section
      className="relative gap-5 w-full mb-10 p-5 flex md:flex-row flex-col items-center justify-center rounded-2xl overflow-hidden"
      aria-labelledby="cta-section-title"
      role="banner"
    >
      {/* Decorative Radiant Glow */}
      {/* <div
        className="absolute top-0 left-0 w-94 h-94 rounded-full blur-3xl opacity-70"
        style={{
          background:
            'radial-gradient(circle, rgba(66,153,225,0.5) 0%, rgba(139,92,246,0.4) 40%, rgba(236,72,153,0.3) 80%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      ></div> */}

      {/* Main CTA Content */}
      <article className="relative items-start flex flex-col w-full md:w-1/2 gap-5 z-10">
        <header>
          <h2
            id="cta-section-title"
            className="text-[7vw] text-center lg:text-left md:text-[3.5vw] font-extrabold leading-tight 
              bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 
              bg-clip-text text-transparent
              dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400"
          >
            Let's Build the Future of Your Business
          </h2>
        </header>

        <div>
          <p
            className="w-full md:w-3/4 text-base md:text-sm
            bg-gradient-to-r from-gray-700 via-gray-800 to-black 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-zinc-300 dark:via-zinc-400 dark:to-zinc-500"
          >
            Have an idea, a project, or a challenge? Reach out to us and let's
            build something extraordinary together.
          </p>
        </div>

        {/* Call-to-Action Button */}
        <footer>
          <div
            className="w-[250px]"
            role="group"
            aria-label="Contact us to start your project"
          >
            <GlassButton text="Start a Conversation" href="/contact" />
           
          </div>
        </footer>

        {/* Hidden content for SEO and screen readers */}
        <div className="sr-only">
          <h3>Ready to Transform Your Business?</h3>
          <p>
            Contact Naqvix today to discuss your technology needs, from AI and
            automation to development and analytics. Our expert team is ready to
            help you scale smarter and achieve sustainable growth.
          </p>
          <ul>
            <li>Free initial consultation</li>
            <li>Tailored solution recommendations</li>
            <li>Expert guidance across all industries</li>
            <li>End-to-end project support</li>
          </ul>
        </div>
      </article>

      {/* Supporting Visual Element */}
      <aside
        className="relative z-10"
        aria-label="Visual representation of business collaboration and innovation"
      >
        <figure className="relative">
          {/* Loading placeholder */}
          {!imageLoaded && (
            <div
              className="absolute inset-0 w-[400px] h-[400px] bg-gray-200 dark:bg-zinc-700 rounded-2xl animate-pulse flex items-center justify-center"
              aria-label="Loading collaboration image"
            >
              <div className="text-gray-400 dark:text-zinc-500">
                <svg
                  className="w-16 h-16"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          )}

          <Image
            src="/assets/callToaction.webp"
            width={400}
            height={400}
            alt="Professional team collaboration representing Naqvix's partnership approach to building innovative business solutions together"
            className={`rounded-2xl transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
            priority={false}
            sizes="(max-width: 768px) 100vw, 400px"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Ss6zqLSVHM4uvufu2+un6UMUV6eVqc6Zz4vfwHx+HXWKR5Dw1C2/VBVPfEyc6sWoTx7SYV7cIIyq5xgYRxPWlrwgJD8A9S6"
          />

          <figcaption className="sr-only">
            Team members collaborating on innovative technology solutions,
            representing Naqvix's commitment to building the future of business
            together with clients
          </figcaption>
        </figure>
      </aside>
    </section>
  );
};

export default CallToAction;
