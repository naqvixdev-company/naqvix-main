// "use client"
import React, { useState } from 'react';

const CategorySelector = ({ onCategoryChange, selectedCategory = 'All', isLoading }) => {
  const categories = [
    'All',
    'Technology',
    'Artificial Intelligence', 
    'Business',
    'Finance',
    'Marketing',
    'Data Automation'
  ];

  const handleCategoryClick = (category) => {
    if (isLoading) return;
    onCategoryChange(category);
  };

  return (
    <div className="flex items-center justify-center flex-wrap gap-3 p-4">
      {categories.map((category) => (
        <div
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`
            relative px-6 py-3 rounded-lg font-medium transition-all duration-200
            ${isLoading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
            ${selectedCategory === category
              ? 'text-white bg-gradient-to-r from-blue-600 from-[0%] via-blue-600 via-[80%] to-purple-600 to-[100%]'
              : 'dark:text-gray-400 text-gray-700 bg-gray-100 dark:bg-neutral-700 hover:bg-gray-200 dark:hover:bg-gray-600'
            }
          `}
        >
          {/* Glow effect for selected category */}
          {selectedCategory === category && (
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 from-[0%] via-blue-500 via-[80%] to-purple-600 to-[100%] rounded-lg blur opacity-40 -z-10"></div>
          )}
                     
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategorySelector;
