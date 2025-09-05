// // app/contact/page.tsx (server component by default)
// import LeafletMap from "./components/LeafletMap";
// import ContactForm from "./components/ContactForm";

// export default function Contact() {
//   return (
//     <main className="w-full px-10 my-10">
//       <h1
//         className="text-[7vw] text-center w-[90%] m-auto md:text-[3.25vw] font-extrabold leading-tight 
//           bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 
//           bg-clip-text text-transparent
//           dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400"
//       >
//         Empowering Businesses with Technology, Intelligence, and Innovation
//       </h1>
//       <LeafletMap />

//       <ContactForm />
//     </main>
//   );
// }


import LeafletMap from "./components/LeafletMap";
import ContactForm from "./components/ContactForm";


export const metadata = {
  title: "Contact Naqvix - Get Your Free Technology Consultation",
  description: "Contact Naqvix for expert technology solutions. Get your free consultation for AI, automation, development, BPO services, and more. Available 24/7 worldwide.",
  keywords: "contact naqvix, technology consultation, AI solutions, BPO services, automation, development services",
  openGraph: {
    title: "Contact Naqvix - Free Technology Consultation",
    description: "Ready to transform your business? Contact our expert team for personalized technology solutions.",
    type: "website",
  },
};

export default function Contact() {
  return (
    <main className="w-full px-10 my-10">
      {/* Page Header */}
      <header className="mb-12">
        <h1
          className="text-[7vw] text-center w-[90%] m-auto md:text-[3.25vw] font-extrabold leading-tight 
            bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400"
        >
          Ready to Transform Your Business? Let's Connect
        </h1>
        
        {/* Supporting description for context */}
        <p className="text-center text-lg md:text-xl mt-6 w-[80%] m-auto text-gray-600 dark:text-zinc-400">
          Get your free consultation and discover how our technology solutions can accelerate your business growth.
        </p>

        {/* Hidden SEO content */}
        <div className="sr-only">
          <h2>Contact Information</h2>
          <p>
            Naqvix provides comprehensive technology solutions including BPO/KPO services, 
            AI solutions, development services, automation, data analytics, and strategic consulting. 
            Contact us for a free consultation to discuss your specific business needs.
          </p>
        </div>
      </header>

      {/* Contact Methods Section */}
      <section aria-labelledby="contact-methods" className="mb-12">
        <h2 id="contact-methods" className="sr-only">How to Reach Us</h2>
        
        {/* Location/Map */}
        {/* <div className="w-[90%] mx-auto" role="region" aria-labelledby="office-location">
          <h3 id="office-location" className="sr-only">Our Location</h3>
          <LeafletMap />
        </div> */}

        {/* Contact Form */}
        <div role="region" aria-labelledby="contact-form">
          <h3 id="contact-form" className="sr-only">Send Us a Message</h3>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}