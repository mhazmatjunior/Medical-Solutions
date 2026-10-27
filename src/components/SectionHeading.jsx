import React from 'react';

export default function SectionHeading({ title, description, align = 'center', light = false }) {
  const isCenter = align === 'center';
  
  return (
    <div className={`mb-8 sm:mb-10 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      <h2 className={`text-3xl sm:text-4xl lg:text-4.5xl font-bold tracking-tight mb-3 ${
        light ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          light ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}
