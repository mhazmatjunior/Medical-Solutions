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

  // Bulletproof body scroll lock for mobile menu: pauses all background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    };
  }, [mobileMenuOpen]);

  const sectors = [
    {
      title: 'Healthcare Solutions',
      path: '/health',
      desc: 'Hospital ICU monitors, surgical devices, and pharmacy formularies',
      icon: Activity,
      badge: 'AFMS Standard'
    },
    {
      title: 'Supply Chain & Logistics',
      path: '/logistics',
      desc: 'Ocean reefer, air cargo, and -80°C to +25°C cold storage vaults',
      icon: Truck,
      badge: 'GDP Certified'
    },
    {
      title: 'Manpower Solutions',
      path: '/manpower',
      desc: 'Credentialed physicians, ICU registered nurses, and paramedics',
      icon: Users,
      badge: '100% Vetted'
    },
    {
      title: 'Rental & Fleet Services',
      path: '/rental',
      desc: 'Type I, II, III ALS ambulances and mobile diagnostic trailers',
      icon: Car,
      badge: 'Immediate Dispatch'
    }
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${scrolled ? 'shadow-md border-b border-slate-200' : 'border-b border-slate-200/90'}`}>
        
        {/* Top Corporate Strip (Hidden on mobile phones, visible on sm+) */}
        <div className="bg-slate-900 text-slate-300 text-[11px] border-b border-slate-800 hidden sm:block">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex justify-between items-center">
            
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
            </div>

          </div>
        </div>

        {/* Main Enterprise Navigation Bar (Responsive height: h-16 mobile, h-20 desktop) */}
        <div className="bg-white">
          <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
            
            {/* Zone 1: Brand Logo (Left) */}
            <div className="flex items-center shrink-0">
              <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary-700 flex items-center justify-center text-white shadow-xs group-hover:bg-primary-800 transition-colors shrink-0">
                  <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M2 12h20"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-sm sm:text-lg tracking-tight text-slate-900 leading-tight">
                    AFRA <span className="text-primary-700">NATIONAL CO.</span>
                  </span>
                  <span className="text-[8px] sm:text-[9px] tracking-wider uppercase font-semibold text-slate-400 leading-none mt-0.5">
                    Healthcare & Enterprise
                  </span>
                </div>
              </Link>
            </div>

            {/* Zone 2: Navigation Links — Centered on Desktop (hidden on mobile/tablet < 1024px) */}
            <nav className="hidden lg:flex items-center justify-center flex-1 h-16 sm:h-20 gap-3 xl:gap-6 2xl:gap-7 text-xs xl:text-[13px] mx-3 xl:mx-6">
              <NavLink 
                to="/" 
                end
                className={({ isActive }) => `h-full flex items-center font-bold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap px-1 ${
                  isActive 
                    ? 'text-primary-700 border-primary-600 font-extrabold' 
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
                className="h-full flex items-center font-bold uppercase tracking-wider text-slate-700 hover:text-primary-700 transition-all border-b-2 border-transparent hover:border-primary-600 cursor-pointer whitespace-nowrap px-1"
              >
                WHO WE ARE
              </a>

              {/* OUR SECTORS Dropdown */}
              <div className="relative h-full flex items-center" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setSectorsOpen(!sectorsOpen)}
                  onMouseEnter={() => setSectorsOpen(true)}
                  className={`h-full flex items-center gap-1 font-bold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap px-1 cursor-pointer ${
                    sectorsOpen || ['/health', '/logistics', '/manpower', '/rental'].includes(location.pathname)
                      ? 'text-primary-700 border-primary-600 font-extrabold'
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
                    className="absolute top-full left-0 w-[440px] bg-white rounded-b-xl shadow-2xl border border-slate-200 p-3 grid grid-cols-1 gap-1.5 z-50 animate-fadeIn -mt-px"
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
                      <span>Explore all 4 core business verticals</span>
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
                className="h-full flex items-center font-bold uppercase tracking-wider text-slate-700 hover:text-primary-700 transition-all border-b-2 border-transparent hover:border-primary-600 cursor-pointer whitespace-nowrap px-1"
              >
                <span className="xl:hidden">PARTNERS</span>
                <span className="hidden xl:inline">PARTNERS & ALLIANCES</span>
              </a>

              <a 
                href="#media-center"
                onClick={(e) => {
                  if (location.pathname !== '/') {
                    e.preventDefault();
                    navigate('/#media-center');
                  }
                }}
                className="h-full flex items-center font-bold uppercase tracking-wider text-slate-700 hover:text-primary-700 transition-all border-b-2 border-transparent hover:border-primary-600 cursor-pointer whitespace-nowrap px-1"
              >
                MEDIA CENTER
              </a>

              <NavLink 
                to="/contact" 
                className={({ isActive }) => `h-full flex items-center font-bold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap px-1 ${
                  isActive 
                    ? 'text-primary-700 border-primary-600 font-extrabold' 
                    : 'text-slate-700 hover:text-primary-700 border-transparent'
                }`}
              >
                CONTACT US
              </NavLink>
            </nav>

            {/* Zone 3: Desktop Actions (Right) */}
            <div className="hidden lg:flex items-center justify-end shrink-0 gap-2.5 xl:gap-3 pl-3 border-l border-slate-200">
              <button
                onClick={onOpenSearch}
                aria-label="Search"
                className="p-2 text-slate-500 hover:text-primary-700 transition-colors cursor-pointer"
                title="Search website (Ctrl+K)"
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenQuote()}
                className="inline-flex items-center justify-center px-3.5 xl:px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider text-white bg-primary-700 hover:bg-primary-800 active:bg-primary-900 transition-all shadow-xs whitespace-nowrap cursor-pointer"
              >
                <span className="xl:hidden">Request Quote</span>
                <span className="hidden xl:inline">Request a Quote</span>
              </button>
            </div>

            {/* Mobile Actions Header Bar (< 1024px) */}
            <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
              <button
                onClick={onOpenSearch}
                className="p-2 text-slate-600 hover:text-slate-900 rounded-lg"
                aria-label="Search"
              >
                <Search className="w-4.5 h-4.5" />
              </button>
              
              <button
                onClick={() => onOpenQuote()}
                className="px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-primary-700 text-white shadow-xs"
              >
                Quote
              </button>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-slate-700 hover:text-slate-900 rounded-lg focus:outline-none cursor-pointer"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6 text-slate-800" />
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide-Over Menu (Height equals 100% dynamic viewport, pauses background scroll) */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex justify-end h-[100dvh] max-h-[100dvh] overflow-hidden">
            
            {/* Backdrop: Touching dim backdrop closes menu and prevents touch-move scroll */}
            <div 
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
              onTouchMove={(e) => e.preventDefault()}
            />

            {/* Slide-over Drawer Panel: Height equals exact viewport height (100dvh), but NOT full width so backdrop is visible */}
            <div className="relative w-[82%] sm:w-[360px] max-w-[360px] bg-white h-[100dvh] max-h-[100dvh] shadow-2xl flex flex-col justify-between z-10 overflow-hidden">
              
              {/* Drawer Top Header (Pinned at top) */}
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/90 shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary-700 flex items-center justify-center text-white shrink-0">
                    <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v20M2 12h20"/>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-extrabold text-sm text-slate-900 leading-tight">
                      AFRA <span className="text-primary-700">NATIONAL CO.</span>
                    </span>
                    <span className="text-[8px] uppercase tracking-wider font-semibold text-slate-400">
                      Healthcare & Enterprise
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Middle: Scrollable navigation links (overscroll-contain pauses background chaining) */}
              <div className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-1">
                
                <div className="px-2 py-1 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                  Quick Navigation
                </div>

                <NavLink
                  to="/"
                  end
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => `flex items-center justify-between p-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                    isActive ? 'bg-primary-50 text-primary-700 font-extrabold' : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Home className="w-4 h-4 text-slate-500" />
                    <span>HOME</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </NavLink>

                <div className="pt-3 pb-1 px-2 text-[10px] font-extrabold text-primary-700 uppercase tracking-widest flex items-center justify-between">
                  <span>Our 4 Core Sectors</span>
                  <span className="text-[9px] font-normal lowercase bg-primary-50 text-primary-700 px-1.5 py-0.5 rounded">divisions</span>
                </div>

                {sectors.map((sec) => {
                  const Icon = sec.icon;
                  return (
                    <NavLink
                      key={sec.path}
                      to={sec.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) => `flex items-center justify-between p-2.5 rounded-xl transition-colors ${
                        isActive ? 'bg-primary-50 text-primary-700 font-bold border border-primary-200' : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-slate-900 truncate">{sec.title}</div>
                          <div className="text-[10px] text-slate-400 truncate">{sec.desc}</div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300 shrink-0 ml-2" />
                    </NavLink>
                  );
                })}

                <div className="pt-3 border-t border-slate-100"></div>

                <div className="px-2 py-1 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                  Corporate Links
                </div>

                <a
                  href="#who-we-are"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (location.pathname !== '/') navigate('/#who-we-are');
                  }}
                  className="flex items-center justify-between p-2.5 rounded-xl text-slate-800 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider"
                >
                  <span>WHO WE ARE</span>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </a>

                <a
                  href="#partners"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (location.pathname !== '/') navigate('/#partners');
                  }}
                  className="flex items-center justify-between p-2.5 rounded-xl text-slate-800 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider"
                >
                  <span>PARTNERS & ALLIANCES</span>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </a>

                <a
                  href="#media-center"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (location.pathname !== '/') navigate('/#media-center');
                  }}
                  className="flex items-center justify-between p-2.5 rounded-xl text-slate-800 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider"
                >
                  <span>MEDIA CENTER</span>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </a>

                <NavLink
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-xl text-slate-800 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider"
                >
                  <span>CONTACT US</span>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </NavLink>
              </div>

              {/* Drawer Bottom Actions (Pinned at bottom of viewport) */}
              <div className="p-4 border-t border-slate-100 bg-slate-50/80 shrink-0 space-y-2 pb-6 sm:pb-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-primary-700 hover:bg-primary-800 text-center shadow-xs cursor-pointer"
                >
                  Request a Quote
                </button>
                
                <a
                  href={`tel:${companyDetails.phone.replace(/[^0-9+]/g, '')}`}
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-slate-800 bg-white border border-slate-200 text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-primary-700" />
                  <span>Call Operations: {companyDetails.phone}</span>
                </a>
              </div>

            </div>
          </div>
        )}
      </header>

      {/* Floating Bottom Quick-Action Bar on Phones (< 640px) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-1.5 px-3 sm:hidden shadow-lg">
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
