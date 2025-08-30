
'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useTheme } from '@/context/AppContext';

const Footer = () => {
  const {theme}=useTheme();
  const icons = [
    { Icon: Facebook, color: '#3b5998', label: 'Facebook' },
    { Icon: Instagram, color: '#E1306C', label: 'Instagram' },
    { Icon: Linkedin, color: '#0A66C2', label: 'LinkedIn' },
    { Icon: Twitter, color: '#1DA1F2', label: 'Twitter' },
  ];

  const iconStyle =
    'w-6 h-6 text-blue-500 dark:text-blue-400 transition-all duration-500 group-hover:animate-pulse';

  return (
    <footer className="relative rounded-2xl w-full p-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 rounded-3xl blur-xl opacity-30 dark:opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-white/20 dark:bg-zinc-900/30 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10 pointer-events-none"></div>

      <div className="relative flex flex-col gap-8">
        {/* Main 3-column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {/* Left - Logo */}
          <div className="flex items-start justify-center md:justify-start">
            <Image
              src={theme==='dark'?"/assets/whiteLogo.png":"/assets/logo.png"}
              width={200}
              height={200}
              alt="Naqvix Logo"
              className="relative z-10"
            />
          </div>

          {/* Middle - Links */}
          <div className="flex flex-col items-center md:items-start">
            <h5 className="text-xl font-bold mb-2 dark:text-white text-purple-400">
              Links
            </h5>
            {['HOME', 'ABOUT', 'SERVICES', 'COMMUNITY', 'BLOGS', 'CONTACT'].map(
              (link, i) => (
                <Link
                  key={i}
                  href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 dark:text-white  transition-colors"
                >
                  {link}
                </Link>
              )
            )}
          </div>

          {/* Right - Contacts */}
          <div className="flex flex-col gap-4 text-gray-800 dark:text-gray-200">
            <h5 className="text-xl font-bold mb-2 dark:text-white text-purple-400">
              Contacts
            </h5>
            <div className="flex items-center gap-3 group">
              <Mail className={iconStyle} />
              <span>info@naqvix.com</span>
            </div>
            <div className="flex items-center gap-3 group">
              <Phone className={iconStyle} />
              <span>+92 123 4567890</span>
            </div>
            <div className="flex items-center gap-3 group">
              <MapPin className={iconStyle} />
              <span>Lahore, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Separate Social Icons Row */}
        <div className="flex gap-4 justify-center mt-4 relative z-10">
          {icons.map(({ Icon, color, label }, idx) => (
            <div
              key={idx}
              className="relative group w-10 h-10 flex items-center justify-center"
            >
              <span
                className="absolute w-12 h-12 rounded-full opacity-0 group-hover:opacity-30 blur-3xl transition-all duration-1000"
                style={{
                  background: `radial-gradient(circle, ${color}55 0%, transparent 70%)`,
                }}
              ></span>
              <Icon
                size={24}
                color={color}
                aria-label={label}
                className="relative z-10"
              />
            </div>
          ))}
        </div>

        <hr className="w-full border-t border-white/20 dark:border-white/10" />

        <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-4 relative z-10">
          © {new Date().getFullYear()} Naqvix. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
