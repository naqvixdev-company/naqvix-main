
'use client';

import { useState } from 'react';
import * as Icons from 'lucide-react';
import Link from 'next/link';

const ServiceCard = ({
  title,
  description,
  icon,
  color,
  link,
  category,
  index,
  totalServices,
}) => {
  const [isHovered, setHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Safely get icon component with proper fallback
  const IconComponent = Icons[icon] || Icons.Circle;

  const isActive = isHovered || isFocused;

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setTimeout(() => setHovered(false), 5000)} // 5s fade
      className="p-3 rounded-2xl  group h-full dark:border-zinc-700 
                 bg-zinc-100 dark:bg-zinc-900 
                 shadow-xk transition-all duration-500 hover:shadow-xl"
      role="article"
      aria-labelledby={`service-${index}-title`}
      aria-describedby={`service-${index}-description`}
    >
      {/* <div
        className="p-6 rounded-2xl 
                     shadow-md transition-all duration-300 hover:shadow-xl
                     h-full flex flex-col"
      > */}
        {/* Service Header */}
        <header className="flex items-center gap-3 mb-4">
          <div
          className="p-3 rounded-xl transition-all duration-[5000ms] ease-in-out"
          style={{
            background: isHovered
              ? `radial-gradient(circle, ${color}66 0%, transparent 90%)`
              : 'transparent',
            transform: isHovered ? 'scale(1.15)' : 'scale(1)', // small pulse on hover
          }}
            
            aria-hidden="true"
          >
            <IconComponent size={36} color={color} aria-hidden="true" />
          </div>

          <div className="flex-grow">
            <h3
              id={`service-${index}-title`}
              className="text-lg font-bold text-gray-900 dark:text-white text-left"
            >
              {title}
            </h3>
          </div>
        </header>

        {/* Service Description */}
        <div className="flex-grow">
          <p
            id={`service-${index}-description`}
            className="text-sm text-gray-600 dark:text-zinc-400 leading-relaxed text-left"
          >
            {description}
          </p>
        </div>

        {/* Service Link */}
        {link && (
          <footer className="mt-6 pt-4 border-t border-gray-200 dark:border-zinc-700">
            <Link
              href={link}
              className="inline-flex items-center gap-2 text-sm font-medium 
                       text-blue-600 dark:text-blue-400 
                       hover:text-blue-700 dark:hover:text-blue-300
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                       transition-all duration-200 group-hover:gap-3"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              aria-label={`Learn more about ${title} services`}
            >
              <span>Explore More</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </footer>
        )}

        {/* Screen reader only service position info */}
        <div className="sr-only">
          Service {index} of {totalServices}
        </div>
      {/* </div> */}
    </article>
  );
};

export default ServiceCard;