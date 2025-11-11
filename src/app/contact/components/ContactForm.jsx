'use client';
import { useState } from 'react';

function ContactForm() {
  const [focused, setFocused] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    company: '',
    country: '',
    subject: '',
    message: '',
    files: [],
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Korea',
    'North Macedonia',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Korea',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe',
  ];

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2
          ? 'Name must be at least 2 characters'
          : '';
      case 'contact':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!emailRegex.test(value) && !phoneRegex.test(value)) {
          return 'Please enter a valid email or phone number';
        }
        return '';
      case 'subject':
        return value.trim().length < 3
          ? 'Subject must be at least 3 characters'
          : '';
      case 'message':
        return value.trim().length < 10
          ? 'Message must be at least 10 characters'
          : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
    setFocused(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFormData((prev) => ({
      ...prev,
      files: [...prev.files, ...droppedFiles].slice(0, 5),
    }));
  };

  const handleFileInput = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      files: [...prev.files, ...selectedFiles].slice(0, 5),
    }));
  };

  const removeFile = (index) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
  };

 


const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const newErrors = {};
  ['name', 'contact', 'subject', 'message'].forEach((key) => {
    const error = validateField(key, formData[key]);
    if (error) newErrors[key] = error;
  });

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    setIsSubmitting(false);
    return;
  }

  try {
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'files') {
        formData.files.forEach((file) => formDataToSend.append('files', file));
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    const res = await fetch('https://formspree.io/f/xdkyopvg', {
      method: 'POST',
      body: formDataToSend,
      headers: { Accept: 'application/json' },
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      alert('Error sending message. Please try again.');
    }
  } catch (error) {
    console.error(error);
    alert('Something went wrong.');
  } finally {
    setIsSubmitting(false);
  }
};




  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      contact: '',
      company: '',
      country: '',
      subject: '',
      message: '',
      files: [],
    });
    setErrors({});
  };

  if (submitted) {
    return (
      <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:bg-none p-6">
        <div className="relative bg-white/20 dark:bg-gray-900/20 backdrop-blur-md rounded-3xl p-8 md:max-w-lg w-full shadow-xl border border-white/20 dark:border-gray-700/40 text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Thank You!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Your message has been sent successfully. Our team will get back to
            you within 24 hours.
          </p>
          <button
            onClick={resetForm}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-white font-semibold hover:scale-105 transition-transform"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:bg-none p-6"
    >
      <div className="relative md:max-w-2xl w-full bg-white/20 dark:bg-gray-900/20 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/40">
        <header className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center">
            Contact Us
          </h2>
        </header>

        {/* Row 1: Name and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocused('name')}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-gray-800/30 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                focused === 'name'
                  ? 'shadow-[0_0_10px_2px_rgba(0,255,255,0.5)]'
                  : ''
              } ${errors.name ? 'border-2 border-red-400' : ''}`}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="relative">
            <input
              id="contact"
              name="contact"
              type="text"
              placeholder="Email or Phone Number"
              value={formData.contact}
              onChange={handleChange}
              onFocus={() => setFocused('contact')}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-gray-800/30 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                focused === 'contact'
                  ? 'shadow-[0_0_10px_2px_rgba(0,255,255,0.5)]'
                  : ''
              } ${errors.contact ? 'border-2 border-red-400' : ''}`}
            />
            {errors.contact && (
              <p className="text-red-400 text-sm mt-1">{errors.contact}</p>
            )}
          </div>
        </div>

        {/* Row 2: Company and Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="relative">
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              onFocus={() => setFocused('company')}
              onBlur={() => setFocused(null)}
              className={`w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-gray-800/30 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                focused === 'company'
                  ? 'shadow-[0_0_10px_2px_rgba(0,255,255,0.5)]'
                  : ''
              }`}
            />
          </div>

          <div className="relative">
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              onFocus={() => setFocused('country')}
              onBlur={() => setFocused(null)}
              className={`w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-gray-800/30 text-gray-900 dark:text-gray-100 focus:outline-none transition-all duration-300 ${
                focused === 'country'
                  ? 'shadow-[0_0_10px_2px_rgba(0,255,255,0.5)]'
                  : ''
              }`}
            >
              <option value="">Select Country</option>
              {countries.map((country, idx) => (
                <option key={idx} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 3: Subject */}
        <div className="mb-4 relative">
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            onFocus={() => setFocused('subject')}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-gray-800/30 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none transition-all duration-300 ${
              focused === 'subject'
                ? 'shadow-[0_0_10px_2px_rgba(0,255,255,0.5)]'
                : ''
            } ${errors.subject ? 'border-2 border-red-400' : ''}`}
          />
          {errors.subject && (
            <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
          )}
        </div>

        {/* Row 4: Message */}
        <div className="mb-4 relative">
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocused('message')}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-gray-800/30 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none ${
              focused === 'message'
                ? 'shadow-[0_0_10px_2px_rgba(0,255,255,0.5)]'
                : ''
            } ${errors.message ? 'border-2 border-red-400' : ''}`}
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* File Drop Area */}
        <div className="mb-6">
          <div
            className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all duration-300 cursor-pointer ${
              isDragOver
                ? 'border-cyan-400 bg-cyan-50/20 dark:bg-cyan-900/20'
                : 'border-gray-300 dark:border-gray-600 bg-white/20 dark:bg-gray-800/20'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById('file-input').click()}
          >
            <input
              id="file-input"
              type="file"
              multiple
              onChange={handleFileInput}
              className="hidden"
              accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif"
            />
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">📁</div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Drag and drop files here or click to browse
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Supported: PDF, DOC, DOCX, TXT, JPG, PNG, GIF (Max 5 files)
              </p>
            </div>
          </div>

          {/* File List */}
          {formData.files.length > 0 && (
            <div className="mt-3 space-y-2">
              {formData.files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white/30 dark:bg-gray-800/30 rounded-lg p-2"
                >
                  <span className="text-sm text-gray-700 dark:text-gray-300 truncate">
                    {file.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="text-red-500 hover:text-red-700 ml-2 text-xl font-bold"
                    aria-label={`Remove ${file.name}`}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          onClick={handleSubmit}
          className="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-white font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
