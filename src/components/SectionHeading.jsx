import React from 'react';

export default function SectionHeading({ badge, title, description, align = 'center', light = false }) {
  const isCenter = align === 'center';
  
  return (
    <div className={`mb-8 sm:mb-10 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2.5 border ${
          light 
            ? 'bg-white/10 text-primary-200 border-white/20' 
            : 'bg-primary-50 text-primary-700 border-primary-200/60'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></span>
          {badge}
        </div>
      )}
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
