import GlassButton from '@/utils/GlassButton';
import GlassmorphismCard from '@/utils/GlassmorphismCard';
import UHeading from '@/utils/UHeading';

const AboutUs = () => {
  const coreValues = [
    {
      title: 'Innovation',
      description:
        'We embrace creativity and forward-thinking to craft solutions that shape the future and keep businesses ahead of change.',
    },
    {
      title: 'Integrity',
      description:
        'We practice honesty, transparency, and fairness in every action, ensuring trust and long-term respect in all relationships.',
    },
    {
      title: 'Collaboration',
      description:
        'We value  open communication, and shared goals, working together with partners and clients to achieve lasting success.',
    },
    {
      title: 'Excellence',
      description:
        'We strive for the highest standards in quality and delivery, going beyond expectations to create  measurable impact.',
    },
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed' },
    { number: '100+', label: 'Happy Clients' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '5+', label: 'Years of Excellence' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0F0E0E] overflow-x-hidden text-sm">
      {/* Our Story Section - reduced padding and improved mobile layout */}
      <section className="w-full pt-6 sm:pt-8 md:pt-12 lg:pt-20 pb-4 sm:pb-6 md:pb-8 lg:pb-16 flex flex-col lg:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-10 px-2 sm:px-3 md:px-4 lg:px-8">
        <div className="w-full lg:w-1/3 flex items-center justify-center order-1 lg:order-none">
          <img
            src="/assets/about.webp"
            width="300"
            height="300"
            alt="About Naqvix"
            className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[350px] h-auto object-cover rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl"
          />
        </div>
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-full lg:w-1/2 order-2 lg:order-none">
          <UHeading text={'OUR STORY'} />
          <GlassmorphismCard className="w-full" textSize="text-sm">
            <p className="break-words hyphens-auto">
              Naqvix was born from a vision to revolutionize how businesses
              embrace technology. Founded by passionate technologists, we
              recognized the growing need for businesses to seamlessly integrate
              cutting-edge solutions while maintaining operational excellence.
              Our journey began with a simple belief: every business deserves
              access to world-class IT, AI, and business process solutions that
              drive meaningful transformation and sustainable growth.
            </p>
          </GlassmorphismCard>
        </div>
      </section>

      {/* Mission & Vision Section - reduced padding and improved spacing */}
      <section className="w-full py-4 sm:py-6 md:py-8 lg:py-16 px-2 sm:px-3 md:px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <UHeading text={'OUR MISSION'} />
              <GlassmorphismCard className="w-full h-full" textSize="text-sm">
                <p className="break-words hyphens-auto">
                  To deliver innovative, reliable, and cost-effective solutions
                  for businesses worldwide. We strive to be the catalyst that
                  transforms challenges into opportunities, enabling our clients
                  to achieve sustainable growth through strategic technology
                  implementation.
                </p>
              </GlassmorphismCard>
            </div>
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <UHeading text={'OUR VISION'} />
              <GlassmorphismCard className="w-full h-full" textSize="text-sm">
                <p className="break-words hyphens-auto">
                  To be a global leader in IT, AI, and business process
                  solutions, recognized for our innovation, integrity, and
                  impact. We envision a future where every business can harness
                  the power of technology to create meaningful value for their
                  stakeholders and communities.
                </p>
              </GlassmorphismCard>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - improved mobile grid and spacing */}
      <section className="w-full py-4 sm:py-6 md:py-8 lg:py-16 px-2 sm:px-3 md:px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            <UHeading text={'CORE VALUES'} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {coreValues.map((value, index) => (
              <GlassmorphismCard
                key={index}
                className="text-center h-full"
                textSize="text-sm"
              >
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400 mb-1 sm:mb-2 md:mb-3 break-words">
                  {value.title}
                </h3>
                <p className="leading-relaxed text-sm break-words hyphens-auto">
                  {value.description}
                </p>
              </GlassmorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Milestones - improved mobile layout and text sizing */}
      <section className="w-full py-4 sm:py-6 md:py-8 lg:py-16 px-2 sm:px-3 md:px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            <UHeading text={'ACHIEVEMENTS & MILESTONES'} />
          </div>

          {/* Statistics - better mobile grid with proper spacing */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            {achievements.map((achievement, index) => (
              <GlassmorphismCard
                key={index}
                className="text-center"
                textSize="text-sm"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400 mb-1 break-words">
                  {achievement.number}
                </h3>
                <p className="text-sm break-words hyphens-auto">
                  {achievement.label}
                </p>
              </GlassmorphismCard>
            ))}
          </div>

          {/* Milestones Timeline - improved mobile text sizing and spacing */}
          <GlassmorphismCard className="w-full" textSize="text-sm">
            <div className="text-center">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400 mb-3 sm:mb-4 md:mb-6 break-words">
                Key Milestones
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between border-b border-white/20 pb-1 sm:pb-2 gap-2 sm:gap-3 md:gap-4">
                  <span className="text-sm text-right break-words hyphens-auto">
                    Company Founded with a Vision
                  </span>
                  <span className="font-semibold text-sm flex-shrink-0">
                    2019
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-1 sm:pb-2 gap-2 sm:gap-3 md:gap-4">
                  <span className="text-sm text-right break-words hyphens-auto">
                    First Major Client Partnership
                  </span>
                  <span className="font-semibold text-sm flex-shrink-0">
                    2020
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-1 sm:pb-2 gap-2 sm:gap-3 md:gap-4">
                  <span className="text-sm text-right break-words hyphens-auto">
                    AI Solutions Division Launch
                  </span>
                  <span className="font-semibold text-sm flex-shrink-0">
                    2021
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-1 sm:pb-2 gap-2 sm:gap-3 md:gap-4">
                  <span className="text-sm text-right break-words hyphens-auto">
                    International Expansion
                  </span>
                  <span className="font-semibold text-sm flex-shrink-0">
                    2022
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-1 sm:pb-2 gap-2 sm:gap-3 md:gap-4">
                  <span className="text-sm text-right break-words hyphens-auto">
                    100+ Successful Projects Delivered
                  </span>
                  <span className="font-semibold text-sm flex-shrink-0">
                    2023
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4">
                  <span className="text-sm text-right break-words hyphens-auto">
                    Industry Recognition & Awards
                  </span>
                  <span className="font-semibold text-sm flex-shrink-0">
                    2024
                  </span>
                </div>
              </div>
            </div>
          </GlassmorphismCard>
        </div>
      </section>

      {/* Call to Action - improved mobile layout and image sizing */}
      <section className="w-full py-4 sm:py-6 md:py-8 lg:py-16 px-2 sm:px-3 md:px-4 lg:px-8 mb-3 sm:mb-4 md:mb-6 lg:mb-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-10">
          <div className="flex flex-col w-full lg:w-1/2 gap-2 sm:gap-3 md:gap-4 lg:gap-5 order-2 lg:order-1">
            <h3
              id="hero-section"
              className="text-[3.5vw] text-center lg:text-left md:text-[3.5vw] font-extrabold leading-tight 
            bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400"
            >
              Ready To Transform Your Business?
            </h3>
            <p className="w-full text-sm text-gray-800/90 dark:text-white/90 leading-relaxed break-words hyphens-auto">
              Join hundreds of satisfied clients who have chosen Naqvix as their
              trusted technology partner. Let's discuss how we can help you
              achieve your goals and build something extraordinary together.
            </p>
            <div className="w-full max-w-[230px]">
              <GlassButton text="Start a Conversation" />
            </div>
          </div>
          <div className="w-full lg:w-auto flex justify-center order-1 lg:order-2">
            <img
              src="/assets/callToaction.webp"
              width="300"
              height="300"
              alt="Get in touch"
              className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[350px] h-auto object-cover rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
