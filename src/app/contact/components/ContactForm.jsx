// 'use client';
// import { useState } from 'react';

// export default function ContactForm() {
//   const [focused, setFocused] = useState(null);

//   const services = [
//     "BPO / KPO Services",
//     "Marketing Solutions",
//     "Artificial Intelligence Solutions",
//     "Development Services",
//     "Finance & Accounting",
//     "Data & Analytics",
//     "Automation & RPA",
//     "Consulting & Strategy",
//   ];

//   return (
//     <div className="relative  flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:bg-none p-6">
//       {/* Radiant Glow Top Left */}
//       <div className="absolute top-0 left-1/2 w-72 h-72 bg-gradient-to-tr from-blue-400 via-purple-500 to-cyan-400 opacity-40 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

//       {/* Form Container */}
//       <form className="relative  bg-white/20 dark:bg-gray-900/20 backdrop-blur-md rounded-3xl p-8 md:max-w-lg w-full shadow-xl border border-white/20 dark:border-gray-700/40">
//         <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Contact Us</h2>

//         {/* Input Fields */}
//         {["Name", "Email", "Phone", "Company"].map((field, idx) => (
//           <div key={idx} className="mb-4 relative">
//             <input
//               type={field === "Email" ? "email" : "text"}
//               placeholder={field}
//               onFocus={() => setFocused(idx)}
//               onBlur={() => setFocused(null)}
//               className={`w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-gray-800/30 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none transition-all duration-300 ${
//                 focused === idx ? 'shadow-[0_0_10px_2px_rgba(0,255,255,0.5)] dark:shadow-[0_0_10px_2px_rgba(0,255,255,0.7)]' : ''
//               }`}
//             />
//             {/* Left Glow for Focus */}
//             {focused === idx && (
//               <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-cyan-400 rounded-l-xl"></span>
//             )}
//           </div>
//         ))}

//         {/* Service Dropdown */}
//         <div className="mb-4 relative">
//           <select
//             onFocus={() => setFocused("service")}
//             onBlur={() => setFocused(null)}
//             className={`w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-gray-800/30 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none transition-all duration-300 appearance-none ${
//               focused === "service" ? 'shadow-[0_0_10px_2px_rgba(0,255,255,0.5)] dark:shadow-[0_0_10px_2px_rgba(0,255,255,0.7)]' : ''
//             }`}
//           >
//             <option value="">Service Interested In</option>
//             {services.map((service, idx) => (
//               <option key={idx} value={service}>{service}</option>
//             ))}
//           </select>
//           {focused === "service" && (
//             <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-cyan-400 rounded-l-xl"></span>
//           )}
//         </div>

//         {/* Message */}
//         <div className="mb-4 relative">
//           <textarea
//             placeholder="Message"
//             rows={4}
//             onFocus={() => setFocused("message")}
//             onBlur={() => setFocused(null)}
//             className={`w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-gray-800/30 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none ${
//               focused === "message" ? 'shadow-[0_0_10px_2px_rgba(0,255,255,0.5)] dark:shadow-[0_0_10px_2px_rgba(0,255,255,0.7)]' : ''
//             }`}
//           />
//           {focused === "message" && (
//             <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-cyan-400 rounded-l-xl"></span>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-white font-semibold hover:scale-105 transition-transform"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// }
"use client"
import { useState } from 'react';

function ContactForm() {
  const [focused, setFocused] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const services = [
    "BPO / KPO Services",
    "Marketing Solutions", 
    "Artificial Intelligence Solutions",
    "Development Services",
    "Finance & Accounting",
    "Data & Analytics",
    "Automation & RPA",
    "Consulting & Strategy",
  ];

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email' : '';
      case 'phone':
        return value.trim().length < 10 ? 'Please enter a valid phone number' : '';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
    setFocused(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'service' && key !== 'company') {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // simulate API
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:bg-none p-6">
        <div className="relative bg-white/20 dark:bg-gray-900/20 backdrop-blur-md rounded-3xl p-8 md:max-w-lg w-full shadow-xl border border-white/20 dark:border-gray-700/40 text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Thank You!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Your message has been sent successfully. Our team will get back to you within 24 hours.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-white font-semibold hover:scale-105 transition-transform"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:bg-none p-6">


      <form 
        className="relative md:max-w-lg w-full bg-white/20 dark:bg-gray-900/20 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/40"
        onSubmit={handleSubmit}
        noValidate
        role="form"
        aria-labelledby="contact-form-title"
      >
        <header>
          <h2 id="contact-form-title" className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Contact Us
          </h2>
        </header>

        {/* Inputs */}
        {[{ name: 'name', label: 'Name', type: 'text', required: true },
          { name: 'email', label: 'Email', type: 'email', required: true },
          { name: 'phone', label: 'Phone', type: 'tel', required: true },
          { name: 'company', label: 'Company', type: 'text', required: false }
        ].map((field, idx) => (
          <div key={field.name} className="mb-4 relative">
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.label}
              value={formData[field.name]}
              onChange={handleChange}
              onFocus={() => setFocused(idx)}
              onBlur={handleBlur}
              required={field.required}
              className={`w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-gray-800/30 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                focused === idx ? 'shadow-[0_0_10px_2px_rgba(0,255,255,0.5)]' : ''
              } ${errors[field.name] ? 'border-2 border-red-400' : ''}`}
            />
            {errors[field.name] && (
              <p className="text-red-400 text-sm mt-1">{errors[field.name]}</p>
            )}
          </div>
        ))}

        {/* Service Dropdown */}
        <div className="mb-4 relative">
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            onFocus={() => setFocused("service")}
            onBlur={() => setFocused(null)}
            className="w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-gray-800/30 text-gray-900 dark:text-gray-100"
          >
            <option value="">Service Interested In</option>
            {services.map((service, idx) => (
              <option key={idx} value={service}>{service}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="mb-4 relative">
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocused("message")}
            onBlur={handleBlur}
            required
            className={`w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-gray-800/30 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none ${
              errors.message ? 'border-2 border-red-400' : ''
            }`}
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-white font-semibold hover:scale-105 transition-transform disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

