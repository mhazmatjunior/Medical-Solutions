import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  Truck, 
  Activity, 
  Users, 
  Car, 
  ShieldCheck, 
  Clock,
  Home,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { companyDetails } from '../data/servicesData';

export default function Navbar({ onOpenQuote, onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { 
      name: 'Home', 
      path: '/',
      icon: Home,
      desc: 'Corporate overview & capabilities'
    },
    { 
      name: 'Logistics', 
      path: '/logistics',
      badge: 'Cold Chain',
      icon: Truck,
      desc: 'Ocean, Air, Road Freight & GDP Vaults'
    },
    { 
      name: 'Health', 
      path: '/health',
      badge: 'Supplies',
      icon: Activity,
      desc: 'ICU Hardware, Devices & Consumables'
    },
    { 
      name: 'Manpower Solutions', 
      path: '/manpower',
      badge: 'Staffing',
      icon: Users,
      desc: 'Physicians, ICU Nurses & Technicians'
    },
    { 
      name: 'Rental Solutions', 
      path: '/rental',
      badge: 'Fleet & Units',
      icon: Car,
      desc: 'Ambulances, CT Trailers & Mobile Dental'
    },
    { 
      name: 'Contact', 
      path: '/contact',
      icon: Phone,
      desc: '24/7 Operations & Direct RFP Inquiries'
    }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300">
        {/* Top Info Strip (Desktop only) */}
        <div className="bg-navy-950 text-slate-300 text-xs border-b border-navy-800/80 hidden sm:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-primary-400" />
                ISO 13485:2016 & GDP Certified Healthcare Ecosystem
              </span>
              <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                24/7 Rapid Response Dispatch
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a 
                href={`tel:${companyDetails.phone.replace(/[^0-9+]/g, '')}`} 
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-primary-400" />
                <span className="font-semibold text-slate-200">{companyDetails.phone}</span>
              </a>
              <span className="text-navy-800">|</span>
              <a 
                href={`mailto:${companyDetails.email}`} 
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-primary-400" />
                <span>{companyDetails.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className={`${scrolled ? 'glass-header shadow-md border-b border-slate-200/80 py-2.5 sm:py-3' : 'bg-white border-b border-slate-100 py-3 sm:py-4'} transition-all duration-200`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-primary-700 via-primary-600 to-accent-500 flex items-center justify-center text-white shadow-md shadow-primary-500/20 group-hover:scale-105 transition-transform shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                  <path d="M12 5v14"/>
                  <path d="M5 12h14"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg sm:text-2xl tracking-tight text-slate-900 leading-tight">
                  Medical <span className="text-primary-600 font-black">Solutions</span>
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-wider uppercase font-semibold text-slate-500 -mt-0.5 sm:mt-0">
                  Healthcare & Enterprise
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.path}
                  to={link.path} 
                  end={link.path === '/'}
                  className={({ isActive }) => `px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive 
                      ? 'text-primary-700 bg-primary-50/80 shadow-xs' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              <button
                onClick={onOpenSearch}
                aria-label="Open search dialog"
                className="p-2.5 rounded-xl text-slate-500 hover:text-primary-600 hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200"
                title="Search solutions (Ctrl+K)"
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenQuote()}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-primary-600 hover:bg-primary-700 active:bg-primary-800 transition-all shadow-md shadow-primary-600/20 hover:shadow-lg hover:shadow-primary-600/30"
              >
                Request a Quote
              </button>
            </div>

            {/* Mobile Header Actions */}
            <div className="flex lg:hidden items-center gap-1.5">
              <button
                onClick={onOpenSearch}
                className="p-2 text-slate-600 hover:text-slate-900 active:scale-95 transition-transform"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => onOpenQuote()}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary-600 text-white shadow-xs active:scale-95 transition-transform"
              >
                Quote
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 rounded-lg focus:outline-none active:scale-95 transition-transform ml-1"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-primary-600" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-Down Drawer with Full Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-[57px] z-50 lg:hidden flex flex-col bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white flex-1 max-h-[85vh] overflow-y-auto px-4 pt-3 pb-8 shadow-2xl border-b border-slate-200 flex flex-col justify-between">
              
              <div className="space-y-1">
                <div className="px-2 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Menu & Core Departments
                </div>

                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      end={link.path === '/'}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) => `flex items-center justify-between p-3 rounded-xl transition-all ${
                        isActive 
                          ? 'bg-primary-50 text-primary-800 font-bold border border-primary-200/80 shadow-xs' 
                          : 'text-slate-700 hover:bg-slate-50 border border-transparent active:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-slate-100 text-primary-600 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold flex items-center gap-2">
                            <span>{link.name}</span>
                            {link.badge && (
                              <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-primary-100/70 text-primary-700">
                                {link.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-400 line-clamp-1">{link.desc}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
                    </NavLink>
                  );
                })}
              </div>

              {/* Bottom Drawer Actions */}
              <div className="pt-4 mt-4 border-t border-slate-100 space-y-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-primary-600 hover:bg-primary-700 text-center shadow-md active:scale-[0.99] transition-transform flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Instant Solution Proposal</span>
                </button>
                
                <a
                  href={`tel:${companyDetails.phone.replace(/[^0-9+]/g, '')}`}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs text-slate-800 bg-slate-100 hover:bg-slate-200 text-center flex items-center justify-center gap-2 active:bg-slate-200"
                >
                  <Phone className="w-4 h-4 text-primary-600" />
                  <span>Call Operations Desk: {companyDetails.phone}</span>
                </a>

                <div className="text-center text-[11px] text-slate-400 pt-1">
                  ISO 13485:2016 & GDP Certified 24/7 Operations
                </div>
              </div>

            </div>
            
            {/* Backdrop click to close */}
            <div 
              className="flex-1"
              onClick={() => setMobileMenuOpen(false)}
            ></div>
          </div>
        )}
      </header>

      {/* Floating Bottom Quick-Action Bar on Phones (< 640px) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 py-2 px-3 sm:hidden shadow-lg">
        <div className="grid grid-cols-4 items-center gap-1 text-center">
          <Link
            to="/"
            className="flex flex-col items-center justify-center py-1 text-slate-600 active:text-primary-600"
          >
            <Home className="w-5 h-5 mb-0.5 text-slate-500" />
            <span className="text-[10px] font-semibold">Home</span>
          </Link>

          <button
            onClick={onOpenSearch}
            className="flex flex-col items-center justify-center py-1 text-slate-600 active:text-primary-600"
          >
            <Search className="w-5 h-5 mb-0.5 text-slate-500" />
            <span className="text-[10px] font-semibold">Search</span>
          </button>

          <button
            onClick={() => onOpenQuote()}
            className="flex flex-col items-center justify-center py-1 text-primary-600"
          >
            <div className="w-7 h-7 -mt-2 bg-gradient-to-tr from-primary-600 to-accent-500 rounded-full flex items-center justify-center text-white shadow-md shadow-primary-500/30">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <span className="text-[10px] font-bold text-primary-700">Quote</span>
          </button>

          <a
            href={`tel:${companyDetails.phone.replace(/[^0-9+]/g, '')}`}
            className="flex flex-col items-center justify-center py-1 text-slate-600 active:text-primary-600"
          >
            <Phone className="w-5 h-5 mb-0.5 text-emerald-600" />
            <span className="text-[10px] font-semibold">Call 24/7</span>
          </a>
        </div>
      </div>
    </>
  );
}
