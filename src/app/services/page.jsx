import ServiceCard from '@/utils/ServiceCard';

const SERVICES_DATA = [
  {
    title: 'BPO / KPO Services',
    description:
      'Streamline operations with expert outsourcing and knowledge-driven solutions.',
    icon: 'Headset',
    color: '#3B82F6',
    link: '/services/bpo-kpo',
    schema: {
      '@type': 'Service',
      name: 'BPO / KPO Services',
      description:
        'Streamline operations with expert outsourcing and knowledge-driven solutions.',
      provider: {
        '@type': 'Organization',
        name: 'Naqvix',
      },
    },
  },
  {
    title: 'Marketing Solutions',
    description:
      'Boost your brand with data-driven campaigns and creative strategies.',
    icon: 'Megaphone',
    color: '#EC4899',
    link: '/services/marketing',
    schema: {
      '@type': 'Service',
      name: 'Marketing Solutions',
      description:
        'Boost your brand with data-driven campaigns and creative strategies.',
      provider: {
        '@type': 'Organization',
        name: 'Naqvix',
      },
    },
  },
  {
    title: 'Artificial Intelligence Solutions',
    description: 'Leverage AI to automate, predict, and innovate at scale.',
    icon: 'Brain',
    color: '#8B5CF6',
    link: '/services/artificial-intelligence',
    schema: {
      '@type': 'Service',
      name: 'Artificial Intelligence Solutions',
      description: 'Leverage AI to automate, predict, and innovate at scale.',
      provider: {
        '@type': 'Organization',
        name: 'Naqvix',
      },
    },
  },
  {
    title: 'Development Services',
    description:
      'Build scalable apps, websites, and systems tailored to your business.',
    icon: 'Code2',
    color: '#10B981',
    link: '/services/development',
    schema: {
      '@type': 'Service',
      name: 'Development Services',
      description:
        'Build scalable apps, websites, and systems tailored to your business.',
      provider: {
        '@type': 'Organization',
        name: 'Naqvix',
      },
    },
  },
  {
    title: 'Finance & Accounting',
    description:
      'Ensure accuracy and efficiency with our smart financial solutions.',
    icon: 'Wallet',
    color: '#F59E0B',
    link: '/services/finance',
    schema: {
      '@type': 'Service',
      name: 'Finance & Accounting',
      description:
        'Ensure accuracy and efficiency with our smart financial solutions.',
      provider: {
        '@type': 'Organization',
        name: 'Naqvix',
      },
    },
  },
  {
    title: 'Data & Analytics',
    description: 'Transform raw data into actionable insights for growth.',
    icon: 'BarChart3',
    color: '#06B6D4',
    link: '/services/data-analytics',
    schema: {
      '@type': 'Service',
      name: 'Data & Analytics',
      description: 'Transform raw data into actionable insights for growth.',
      provider: {
        '@type': 'Organization',
        name: 'Naqvix',
      },
    },
  },
  {
    title: 'Automation & RPA',
    description:
      'Enhance efficiency with robotic process automation and workflow optimization.',
    icon: 'Bot',
    color: '#EF4444',
    link: '/services/automation',
    schema: {
      '@type': 'Service',
      name: 'Automation & RPA',
      description:
        'Enhance efficiency with robotic process automation and workflow optimization.',
      provider: {
        '@type': 'Organization',
        name: 'Naqvix',
      },
    },
  },
  {
    title: 'Consulting & Strategy',
    description:
      'Navigate complex challenges with expert consulting and business strategy.',
    icon: 'Lightbulb',
    color: '#A855F7',
    link: '/services/strategy',
    schema: {
      '@type': 'Service',
      name: 'Consulting & Strategy',
      description:
        'Navigate complex challenges with expert consulting and business strategy.',
      provider: {
        '@type': 'Organization',
        name: 'Naqvix',
      },
    },
  },
];
export const metadata = {
  // Basic Meta Tags
  title: {
    default: 'Our Services - Cutting-Edge Business Solutions | Naqvix',
  },
  description:
    'Discover our comprehensive business services: BPO/KPO, AI solutions, marketing, development, finance, data analytics, automation, and strategic consulting. Drive growth and efficiency with expert solutions tailored for your success.',

  // Keywords for SEO
  keywords: [
    'BPO services',
    'KPO solutions',
    'AI automation',
    'artificial intelligence solutions',
    'digital marketing',
    'web development',
    'mobile app development',
    'finance and accounting',
    'data analytics',
    'business intelligence',
    'robotic process automation',
    'RPA solutions',
    'business consulting',
    'strategic consulting',
    'business process outsourcing',
    'knowledge process outsourcing',
    'business solutions',
    'enterprise solutions',
    'workflow automation',
    'business transformation',
  ],
};
const ServicesPage = () => {
  return (
    <>
      <main
        className="w-full px-5 lg:px-10 my-10 lg:my-15 flex flex-col"
        role="main"
        aria-labelledby="services-heading"
      >
        {/* Skip Navigation Link for Accessibility */}
        <a
          href="#services-grid"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50"
        >
          Skip to services
        </a>

        {/* Page Header Section */}
        <header className="flex flex-col items-center justify-center gap-5 mb-10">
          <h1
            id="services-heading"
            className="text-[8vw] md:text-[5vw] lg:text-[3.25vw] md:w-2/3 text-center font-extrabold leading-tight 
              bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 
              bg-clip-text text-transparent
              dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400"
          >
            Empowering Your Business with Cutting Edge Solutions
          </h1>

          <p
            className="w-full text-center md:w-2/3 text-base md:text-md
              bg-gradient-to-r from-gray-700 via-gray-800 to-black 
              bg-clip-text text-transparent
              dark:bg-gradient-to-r dark:from-zinc-300 dark:via-zinc-400 dark:to-zinc-500"
            role="doc-subtitle"
          >
            From BPO and marketing to AI-driven innovations, we deliver services
            that drive growth, efficiency, and impact. Explore our expertise and
            discover solutions tailored for your success.
          </p>
        </header>

        {/* Services Grid Section */}
        <section
          id="services-grid"
          className="mt-10"
          aria-labelledby="services-grid-heading"
        >
          <h2 id="services-grid-heading" className="sr-only">
            Our Service Offerings
          </h2>

          <div
            className="flex flex-wrap justify-center gap-6 p-4"
            role="grid"
            aria-label="Services grid"
          >
            {SERVICES_DATA.map((service, idx) => (
              <article
                key={`service-${service.title
                  .toLowerCase()
                  .replace(/\s+/g, '-')}`}
                className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]"
                role="gridcell"
                aria-labelledby={`service-title-${idx}`}
              >
                <ServiceCard
                  {...service}
                  titleId={`service-title-${idx}`}
                  index={idx}
                />
              </article>
            ))}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section
          className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-8"
          aria-labelledby="cta-heading"
        >
          <h2
            id="cta-heading"
            className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss how our services can drive your business forward.
            Contact our experts today for a personalized consultation.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-describedby="cta-description"
          >
            Get Started Today
          </a>
          <p id="cta-description" className="sr-only">
            Contact us to discuss your business needs and get started with our
            services
          </p>
        </section>
      </main>
    </>
  );
};

export default ServicesPage;
