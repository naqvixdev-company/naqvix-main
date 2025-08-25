

// const Hero = () => {
//   return (
//     <section className="w-full  h-[50vh]  lg:h-[90vh]  flex flex-col-reverse lg:flex-row items-center lg:justify-between justify-center transition-colors duration-1000 dark:bg-[#0F0E0E] mb-5 px-6 md:px-12">
      
//       {/* LEFT CONTENT */}
//       <div className="w-full   lg:w-[60%] flex flex-col items-start text-left space-y-4">
//         <h1
//           className="text-[7vw]  text-center lg:text-left md:text-[3.5vw] font-extrabold leading-tight 
//             bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 
//             bg-clip-text text-transparent
//             dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400"
//         >
//           Empowering Businesses with Technology, Intelligence, and Innovation
//         </h1>
//         <p
//           className="w-full text-center m-auto lg:m-0 lg:text-left md:w-3/4 text-base md:text-lg
//             bg-gradient-to-r from-gray-700 via-gray-800 to-black 
//             bg-clip-text text-transparent
//             dark:bg-gradient-to-r dark:from-zinc-300 dark:via-zinc-400 dark:to-zinc-500"
//         >
//           From outsourcing to AI, development, automation, and analytics —
//           Naqvix delivers end-to-end solutions that help you grow faster and
//           work smarter.
//         </p>
//         <button
//           className="px-6 py-3 m-auto mt-5 lg:m-0 cursor-pointer lg:mt-3 rounded-xl font-semibold text-sm
//             transition-all duration-500 ease-in-out
//             shadow-md 
//             bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 
//             text-white
//             hover:scale-105 hover:shadow-lg hover:brightness-110
//             dark:bg-gradient-to-r dark:from-zinc-200 dark:via-zinc-300 dark:to-zinc-400
//             dark:text-zinc-900
//             dark:hover:scale-105 dark:hover:shadow-lg dark:hover:brightness-110"
//         >
//           Start Exploring
//         </button>
//       </div>

//       {/* RIGHT SPLINE */}
//       <div className="w-full hidden lg:flex  md:w-[40%]   h-[100vh] md:h-full relative">
//         <iframe
//          src='https://my.spline.design/weirdbubblecopy-j6f6lPUO9Qy2fL8zOTcsfCnb/'
//           frameBorder="0"
//           className="absolute z-10 lg:top-0 left-0  inset-0 w-full h-full"
//           allow="autoplay; fullscreen"
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;

'use client';

import { useState} from 'react';

const Hero = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  const handleIframeError = () => {
    setIframeError(true);
    setIframeLoaded(true);
  };

  return (
    <div className="w-full h-[50vh]  lg:h-[90vh] flex flex-col-reverse lg:flex-row items-center lg:justify-between justify-center transition-colors duration-1000 dark:bg-[#0F0E0E] mb-5 px-6 md:px-12">
      
      {/* PRIMARY CONTENT AREA */}
      <header className="w-full  lg:w-[60%] flex flex-col items-start text-left space-y-4">
        {/* Main heading */}
        <h1 
          id="hero-section"
          className="text-[7vw] text-center lg:text-left md:text-[3.5vw] font-extrabold leading-tight 
            bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400"
        >
            Empowering Businesses with Technology, Intelligence, and Innovation
        </h1>
        
        {/* Supporting subheading for better content hierarchy */}
        <h2 className="sr-only">
          Comprehensive Technology Solutions for Business Growth
        </h2>
        
        {/* Descriptive content */}
        <p
          className="w-full text-center m-auto lg:m-0 lg:text-left md:w-3/4 text-base md:text-lg
            bg-gradient-to-r from-gray-700 via-gray-800 to-black 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-zinc-300 dark:via-zinc-400 dark:to-zinc-500"
        >
          From outsourcing to AI, development, automation, and analytics — 
          Naqvix delivers end-to-end solutions that help you grow faster and 
          work smarter.
        </p>

        {/* Call-to-action with proper semantics */}
        <div className="w-full flex justify-center lg:justify-start">
          <a
            href="#services-section"
            role="button"
            aria-label="Explore our technology services and solutions"
            className="px-6 py-3 mt-5 lg:mt-3 rounded-xl font-semibold text-sm
              transition-all duration-500 ease-in-out
              shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 
              text-white
              hover:scale-105 hover:shadow-lg hover:brightness-110
              dark:bg-gradient-to-r dark:from-zinc-200 dark:via-zinc-300 dark:to-zinc-400
              dark:text-zinc-900
              dark:hover:scale-105 dark:hover:shadow-lg dark:hover:brightness-110
              dark:focus:ring-zinc-300"
          >
            Start Exploring
          </a>
        </div>

        {/* Structured data for SEO (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Naqvix",
              "description": "Empowering businesses with technology, intelligence, and innovation. End-to-end solutions including AI, development, automation, and analytics.",
              "url": typeof window !== 'undefined' ? window.location.origin : '',
              "sameAs": [],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service"
              }
            })
          }}
        />
      </header>

      {/* INTERACTIVE VISUAL ELEMENT */}
      <aside 
        className="w-fit hidden lg:flex md:w-[40%]  h-fit md:h-full relative"
        aria-label="Interactive 3D animation showcasing technology innovation"
      >
       
         <iframe
          src='https://my.spline.design/weirdbubblecopy-j6f6lPUO9Qy2fL8zOTcsfCnb/'
           frameBorder="0"
           className="absolute z-10 lg:top-0 left-0  inset-0 w-full h-full"
           allow="autoplay; fullscreen"
         />

      </aside>
    </div>
  );
};

export default Hero;
