
'use client';

import dynamic from 'next/dynamic';


const Hero = dynamic(() => import('@/app/home/components/Hero'), {
  ssr: true, 
});


const About = dynamic(() => import('./components/About'), {
  ssr: true,
});


const Service = dynamic(() => import('./components/Service'), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" aria-label="Loading services" />,
});

const WhyUs = dynamic(() => import('./components/WhyUs'), {
  loading: () => <div className="min-h-[300px] animate-pulse bg-gray-100" aria-label="Loading why choose us section" />,
});

const Industry = dynamic(() => import('./components/Industry'), {
  loading: () => <div className="min-h-[350px] animate-pulse bg-gray-100" aria-label="Loading industry information" />,
});

const CallToAction = dynamic(() => import('./components/CallToAction'), {
  loading: () => <div className="min-h-[200px] animate-pulse bg-gray-100" aria-label="Loading call to action" />,
});

const Home = () => {
  return (
    <>

      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      
      {/* Main semantic container for primary page content */}
      <main 
        id="main-content" 
        role="main"
        aria-label="Home page content"
      >
        {/* Hero section - primary banner/introduction */}
        <section aria-labelledby="hero-section">
          <Hero />
        </section>

        {/* About section */}
        <section aria-labelledby="about-section">
          <About />
        </section>

        {/* Services section */}
        <section id='services-section' aria-labelledby="services-section">
          <Service />
        </section>

        {/* Why choose us section */}
        <section aria-labelledby="why-us-section">
          <WhyUs />
        </section>

        {/* Industry expertise section */}
        <section aria-labelledby="industry-section">
          <Industry />
        </section>



        {/* Call to action section */}
        <section aria-labelledby="cta-section">
          <CallToAction />
        </section>
      </main>
    </>
  );
};

export default Home;