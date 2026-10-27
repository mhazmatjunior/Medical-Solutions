import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Truck, Activity, Users, Car, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { logisticsServices, healthProducts, manpowerRoles, rentalFleet } from '../data/servicesData';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  // Flatten searchable entries
  const allItems = [
    ...logisticsServices.map(item => ({
      type: 'Logistics',
      title: item.title,
      desc: item.shortDesc,
      path: '/logistics',
      icon: Truck,
      badge: item.badge
    })),
    ...healthProducts.map(item => ({
      type: 'Health',
      title: item.name,
      desc: item.tagline,
      path: '/health',
      icon: Activity,
      badge: item.category
    })),
    ...manpowerRoles.map(item => ({
      type: 'Manpower',
      title: item.title,
      desc: item.subtitle,
      path: '/manpower',
      icon: Users,
      badge: item.category
    })),
    ...rentalFleet.map(item => ({
      type: 'Rental',
      title: item.title,
      desc: item.description,
      path: '/rental',
      icon: Car,
      badge: item.category
    }))
  ];

  const filtered = query.trim() === '' 
    ? allItems.slice(0, 6) 
    : allItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase()) ||
        item.badge.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-start justify-center pt-8 sm:pt-20 p-2.5 sm:p-4 animate-fadeIn">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-3.5 sm:p-4 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-primary-600 shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search logistics, equipment, staff, fleet..."
            className="w-full text-sm sm:text-base bg-transparent border-none outline-none text-slate-800 placeholder:text-slate-400"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto p-3 space-y-1">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <p className="text-sm">No solutions found matching "{query}"</p>
              <p className="text-xs text-slate-400 mt-1">Try keywords like "air freight", "icu", "nurse", "ambulance", or "sterilizer"</p>
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  onClick={() => handleSelect(item.path)}
                  className="p-3 rounded-xl hover:bg-slate-50 cursor-pointer border border-transparent hover:border-slate-200/80 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-slate-800 group-hover:text-primary-700 transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                          {item.type}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary-600 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                </div>
              );
            })
          )}
        </div>

        <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-100 text-[11px] text-slate-400 flex justify-between items-center">
          <span>Navigate with click &bull; Press <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-slate-600 font-mono">ESC</kbd> to close</span>
          <span className="flex items-center gap-1 font-medium text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> ISO 13485 & GDP Verified
          </span>
        </div>
      </div>
    </div>
  );
}
