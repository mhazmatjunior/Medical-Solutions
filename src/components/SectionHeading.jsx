import React from 'react';

export default function SectionHeading({ title, description, align = 'center', light = false }) {
  const isCenter = align === 'center';
  
  return (
    <div className={`mb-6 sm:mb-10 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-2 sm:mb-3 leading-tight ${
        light ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-xs sm:text-base leading-relaxed ${
          light ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}
