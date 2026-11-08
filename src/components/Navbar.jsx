import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Search, 
  Menu, 
  X, 
  ChevronDown,
  ChevronRight, 
  Truck, 
  Activity, 
  Users, 
  Car, 
  ShieldCheck, 
  Clock,
  Home,
  Building2,
  Globe,
  ArrowRight
} from 'lucide-react';
import { companyDetails } from '../data/servicesData';

export default function Navbar({ onOpenQuote, onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSectorsOpen(false);
  }, [location.pathname]);

  // Click outside to close sectors dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setSectorsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll on mobile menu
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

  const sectors = [
    {
      title: 'Healthcare Solutions',
      path: '/health',
      desc: 'Hospital ICU monitors, fluoroscopy, surgical devices, and corporate pharmacy formularies',
      icon: Activity,
      badge: 'AFMS Standard'
    },
    {
      title: 'Supply Chain & Logistics',
      path: '/logistics',
      desc: 'Ocean reefer, air charter, cold chain warehousing (-80°C to +25°C), and customs clearance',
      icon: Truck,
      badge: 'GDP Certified'
    },
    {
      title: 'Manpower Solutions',
      path: '/manpower',
      desc: 'Specialist physicians, ICU registered nurses, certified EMT paramedics, and biomedical techs',
      icon: Users,
      badge: '100% Vetted'
    },
    {
      title: 'Rental & Fleet Services',
      path: '/rental',
      desc: 'Type I, II, III ALS ambulances, mobile CT/MRI trailers, and mobile dental clinics',
      icon: Car,
      badge: 'Immediate Dispatch'
    }
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full transition-all duration-200 bg-white border-b border-slate-200/90 shadow-xs">
        
        {/* Top Corporate Strip (Abdulla Fouad style thin metadata bar) */}
        <div className="bg-slate-900 text-slate-300 text-[11px] border-b border-slate-800 hidden sm:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex justify-between items-center">
            
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                ISO 13485:2016 & GDP Certified Healthcare & Supply Chain Ecosystem
              </span>
              <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                24/7 Operations Desk
              </span>
            </div>

            <div className="flex items-center gap-5">
              <a 
                href={`tel:${companyDetails.phone.replace(/[^0-9+]/g, '')}`} 
                className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
              >
                <Phone className="w-3 h-3 text-sky-400" />
                <span className="font-semibold">{companyDetails.phone}</span>
              </a>

              <span className="text-slate-700">|</span>

              <a 
                href={`mailto:${companyDetails.email}`} 
                className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3 h-3 text-sky-400" />
                <span>{companyDetails.email}</span>
              </a>

              <span className="text-slate-700">|</span>

              {/* Language Switcher Badge (En / العربية as in Abdulla Fouad site) */}
              <div className="flex items-center gap-1.5 text-slate-300 font-semibold cursor-pointer hover:text-white">
                <Globe className="w-3 h-3 text-sky-400" />
                <span className="text-white">EN</span>
                <span className="text-slate-500">/</span>
                <span className="text-slate-400 hover:text-sky-300 transition-colors font-normal">العربية</span>
              </div>
            </div>

          </div>
        </div>

        {/* Main Enterprise Navigation Bar (Abdulla Fouad Group clean, crisp layout) */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between">
            
            {/* Enterprise Logo: Clean, typographic, professional without rounded box */}
            <Link to="/" className="flex items-center gap-3.5 group shrink-0">
              <div className="flex items-center justify-center text-primary-700">
                <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4L4 12V28L20 36L36 28V12L20 4Z" stroke="#0369A1" strokeWidth="2.5" strokeLinejoin="round"/>
                  <path d="M20 14V26" stroke="#0284C7" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M14 20H26" stroke="#0284C7" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="20" cy="8" r="2" fill="#0D9488" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 leading-none">
                    MEDICAL <span className="text-primary-700">SOLUTIONS</span>
                  </span>
                  <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase hidden md:inline">
                    GROUP
                  </span>
                </div>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 mt-1">
                  Healthcare & Enterprise Infrastructure
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Abdulla Fouad Group exact typography: uppercase, clean, elegant text) */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
              <NavLink 
                to="/" 
                end
                className={({ isActive }) => `text-[13px] font-bold uppercase tracking-wider transition-colors py-2 border-b-2 ${
                  isActive 
                    ? 'text-primary-700 border-primary-600' 
                    : 'text-slate-700 hover:text-primary-700 border-transparent'
                }`}
              >
                HOME
              </NavLink>

              <a 
                href="#who-we-are"
                onClick={(e) => {
                  if (location.pathname !== '/') {
                    e.preventDefault();
                    navigate('/#who-we-are');
                  }
                }}
                className="text-[13px] font-bold uppercase tracking-wider text-slate-700 hover:text-primary-700 transition-colors py-2 border-b-2 border-transparent hover:border-primary-600 cursor-pointer"
              >
                WHO WE ARE
              </a>

              {/* OUR SECTORS Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setSectorsOpen(!sectorsOpen)}
                  onMouseEnter={() => setSectorsOpen(true)}
                  className={`text-[13px] font-bold uppercase tracking-wider transition-colors py-2 border-b-2 inline-flex items-center gap-1.5 ${
                    sectorsOpen || ['/health', '/logistics', '/manpower', '/rental'].includes(location.pathname)
                      ? 'text-primary-700 border-primary-600'
                      : 'text-slate-700 hover:text-primary-700 border-transparent'
                  }`}
                >
                  <span>OUR SECTORS</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${sectorsOpen ? 'rotate-180 text-primary-700' : 'text-slate-400'}`} />
                </button>

                {/* Dropdown Menu */}
                {sectorsOpen && (
                  <div 
                    onMouseLeave={() => setSectorsOpen(false)}
                    className="absolute top-full left-0 mt-3 w-[460px] bg-white rounded-xl shadow-2xl border border-slate-200 p-3 grid grid-cols-1 gap-1.5 z-50 animate-fadeIn"
                  >
                    <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                        Operating Business Sectors
                      </span>
                      <span className="text-[10px] font-bold text-primary-700">
                        4 Primary Divisions
                      </span>
                    </div>

                    {sectors.map((sec) => {
                      const Icon = sec.icon;
                      return (
                        <Link
                          key={sec.path}
                          to={sec.path}
                          onClick={() => setSectorsOpen(false)}
                          className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary-700 group-hover:text-white transition-colors">
                            <Icon className="w-4.5 h-4.5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-bold text-slate-900 group-hover:text-primary-700 transition-colors">
                                {sec.title}
                              </span>
                              <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                                {sec.badge}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                              {sec.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}

                    <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between text-xs text-slate-600">
                      <span>View full multi-sector capabilities</span>
                      <Link 
                        to="/#our-sectors"
                        onClick={() => setSectorsOpen(false)}
                        className="text-primary-700 font-bold hover:underline inline-flex items-center gap-1"
                      >
                        All Sectors <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <a 
                href="#partners"
                onClick={(e) => {
                  if (location.pathname !== '/') {
                    e.preventDefault();
                    navigate('/#partners');
                  }
                }}
                className="text-[13px] font-bold uppercase tracking-wider text-slate-700 hover:text-primary-700 transition-colors py-2 border-b-2 border-transparent hover:border-primary-600 cursor-pointer"
              >
                PARTNERS & ALLIANCES
              </a>

              <a 
                href="#media-center"
                onClick={(e) => {
                  if (location.pathname !== '/') {
                    e.preventDefault();
                    navigate('/#media-center');
                  }
                }}
                className="text-[13px] font-bold uppercase tracking-wider text-slate-700 hover:text-primary-700 transition-colors py-2 border-b-2 border-transparent hover:border-primary-600 cursor-pointer"
              >
                MEDIA CENTER
              </a>

              <NavLink 
                to="/contact" 
                className={({ isActive }) => `text-[13px] font-bold uppercase tracking-wider transition-colors py-2 border-b-2 ${
                  isActive 
                    ? 'text-primary-700 border-primary-600' 
                    : 'text-slate-700 hover:text-primary-700 border-transparent'
                }`}
              >
                CONTACT US
              </NavLink>
            </nav>

            {/* Desktop Action Right (Search icon + Clean Blue CTA Button) */}
            <div className="hidden sm:flex items-center gap-4">
              <button
                onClick={onOpenSearch}
                aria-label="Search"
                className="p-2 text-slate-500 hover:text-primary-700 transition-colors cursor-pointer"
                title="Search website (Ctrl+K)"
              >
                <Search className="w-4.5 h-4.5" />
              </button>

              <button
                onClick={() => onOpenQuote()}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider text-white bg-primary-700 hover:bg-primary-800 active:bg-primary-900 transition-all shadow-sm"
              >
                Request a Quote
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenSearch}
                className="p-2 text-slate-600 hover:text-slate-900"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => onOpenQuote()}
                className="px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider bg-primary-700 text-white"
              >
                Quote
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none ml-1"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-primary-700" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide-Down Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-[56px] sm:top-[90px] z-50 lg:hidden flex flex-col bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white flex-1 max-h-[85vh] overflow-y-auto px-4 pt-3 pb-8 shadow-2xl border-b border-slate-200 flex flex-col justify-between">
              
              <div className="space-y-1">
                <div className="px-2 py-1.5 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                  Main Navigation
                </div>

                <NavLink
                  to="/"
                  end
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => `flex items-center justify-between p-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                    isActive ? 'bg-primary-50 text-primary-700' : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>HOME</span>
                </NavLink>

                <div className="pt-2 pb-1 px-2 text-[10px] font-extrabold text-primary-700 uppercase tracking-widest">
                  Our Sectors
                </div>

                {sectors.map((sec) => {
                  const Icon = sec.icon;
                  return (
                    <NavLink
                      key={sec.path}
                      to={sec.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) => `flex items-center justify-between p-2.5 rounded-lg transition-colors ${
                        isActive ? 'bg-primary-50 text-primary-700 font-bold border border-primary-200' : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-primary-700 shrink-0" />
                        <div>
                          <div className="text-xs font-bold">{sec.title}</div>
                          <div className="text-[10px] text-slate-400 line-clamp-1">{sec.desc}</div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
                    </NavLink>
                  );
                })}

                <div className="pt-2 border-t border-slate-100"></div>

                <a
                  href="#who-we-are"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (location.pathname !== '/') navigate('/#who-we-are');
                  }}
                  className="flex items-center gap-3 p-3 rounded-lg text-slate-800 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider"
                >
                  <span>WHO WE ARE</span>
                </a>

                <a
                  href="#partners"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (location.pathname !== '/') navigate('/#partners');
                  }}
                  className="flex items-center gap-3 p-3 rounded-lg text-slate-800 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider"
                >
                  <span>PARTNERS & ALLIANCES</span>
                </a>

                <a
                  href="#media-center"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (location.pathname !== '/') navigate('/#media-center');
                  }}
                  className="flex items-center gap-3 p-3 rounded-lg text-slate-800 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider"
                >
                  <span>MEDIA CENTER</span>
                </a>

                <NavLink
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-lg text-slate-800 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider"
                >
                  <span>CONTACT US</span>
                </NavLink>
              </div>

              {/* Bottom Drawer Actions */}
              <div className="pt-4 mt-4 border-t border-slate-100 space-y-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full py-3.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider text-white bg-primary-700 hover:bg-primary-800 text-center shadow-sm"
                >
                  Request a Quote
                </button>
                
                <a
                  href={`tel:${companyDetails.phone.replace(/[^0-9+]/g, '')}`}
                  className="w-full py-3 px-4 rounded-lg font-bold text-xs text-slate-800 bg-slate-100 text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-primary-700" />
                  <span>Call Operations: {companyDetails.phone}</span>
                </a>
              </div>

            </div>
            
            <div 
              className="flex-1"
              onClick={() => setMobileMenuOpen(false)}
            ></div>
          </div>
        )}
      </header>

      {/* Floating Bottom Quick-Action Bar on Phones (< 640px) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2 px-3 sm:hidden shadow-lg">
        <div className="grid grid-cols-4 items-center gap-1 text-center">
          <Link
            to="/"
            className="flex flex-col items-center justify-center py-1 text-slate-600 active:text-primary-700"
          >
            <Home className="w-5 h-5 mb-0.5 text-slate-500" />
            <span className="text-[10px] font-semibold">Home</span>
          </Link>

          <button
            onClick={onOpenSearch}
            className="flex flex-col items-center justify-center py-1 text-slate-600 active:text-primary-700"
          >
            <Search className="w-5 h-5 mb-0.5 text-slate-500" />
            <span className="text-[10px] font-semibold">Search</span>
          </button>

          <button
            onClick={() => onOpenQuote()}
            className="flex flex-col items-center justify-center py-1 text-primary-700"
          >
            <div className="w-7 h-7 -mt-2 bg-primary-700 rounded-full flex items-center justify-center text-white shadow-md">
              <span className="text-xs font-bold">+</span>
            </div>
            <span className="text-[10px] font-bold text-primary-700">Quote</span>
          </button>

          <a
            href={`tel:${companyDetails.phone.replace(/[^0-9+]/g, '')}`}
            className="flex flex-col items-center justify-center py-1 text-slate-600 active:text-primary-700"
          >
            <Phone className="w-5 h-5 mb-0.5 text-emerald-600" />
            <span className="text-[10px] font-semibold">Call 24/7</span>
          </a>
        </div>
      </div>
    </>
  );
}
