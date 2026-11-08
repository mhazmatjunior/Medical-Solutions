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
  ArrowRight,
  Sparkles
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
      desc: 'Medical equipment, diagnostic devices, consumables & corporate pharmacy supply',
      icon: Activity,
      badge: 'AFMS Standard'
    },
    {
      title: 'Supply Chain & Logistics',
      path: '/logistics',
      desc: 'Air, ocean & road freight, cold-chain storage vaults & pharma replenishment',
      icon: Truck,
      badge: 'GDP Validated'
    },
    {
      title: 'Manpower Solutions',
      path: '/manpower',
      desc: 'Specialist physicians, ICU nurses, certified paramedics & technical staff',
      icon: Users,
      badge: 'Verified Staff'
    },
    {
      title: 'Rental & Fleet Services',
      path: '/rental',
      desc: 'Type I, II, III ALS ambulances, mobile CT/MRI trailers & mobile dental operatories',
      icon: Car,
      badge: 'Turnkey Units'
    }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300">
        
        {/* Top Corporate Utility Bar (Abdulla Fouad Group style) */}
        <div className="bg-navy-950 text-slate-300 text-xs border-b border-navy-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
            
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-slate-300 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-primary-400" />
                <span className="hidden sm:inline">ISO 13485:2016 & GDP Certified Healthcare & Supply Chain Conglomerate</span>
                <span className="sm:hidden text-[11px]">ISO & GDP Certified Healthcare</span>
              </span>
              <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                24/7 Operations Desk
              </span>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs">
              <a 
                href={`tel:${companyDetails.phone.replace(/[^0-9+]/g, '')}`} 
                className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-primary-400" />
                <span className="font-semibold">{companyDetails.phone}</span>
              </a>

              <span className="text-navy-700 hidden sm:inline">|</span>

              <a 
                href={`mailto:${companyDetails.email}`} 
                className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-primary-400" />
                <span>{companyDetails.email}</span>
              </a>

              <span className="text-navy-700">|</span>

              {/* Language Switcher Badge (En / العربية as in Abdulla Fouad site) */}
              <div className="flex items-center gap-1.5 text-slate-300 font-semibold cursor-pointer hover:text-white">
                <Globe className="w-3.5 h-3.5 text-primary-400" />
                <span className="text-white">EN</span>
                <span className="text-slate-500">/</span>
                <span className="text-slate-400 hover:text-primary-300 transition-colors font-normal">العربية</span>
              </div>
            </div>

          </div>
        </div>

        {/* Main Enterprise Navigation Bar (White, Clean, High-Contrast) */}
        <div className={`${scrolled ? 'bg-white shadow-md border-b border-slate-200 py-3' : 'bg-white border-b border-slate-200 py-4'} transition-all duration-200`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            
            {/* Enterprise Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-navy-950 via-primary-700 to-primary-600 flex items-center justify-center text-white shadow-md shadow-navy-950/20 group-hover:scale-105 transition-transform shrink-0">
                <svg className="w-6 h-6 sm:w-6.5 sm:h-6.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                  <path d="M12 5v14"/>
                  <path d="M5 12h14"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-navy-950 leading-none">
                    Medical <span className="text-primary-600">Solutions</span>
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden sm:inline">GROUP</span>
                </div>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 mt-1">
                  Healthcare & Enterprise Infrastructure
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Abdulla Fouad Group structure) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <NavLink 
                to="/" 
                end
                className={({ isActive }) => `px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive 
                    ? 'text-primary-700 font-bold bg-primary-50/80 shadow-xs' 
                    : 'text-slate-700 hover:text-primary-600 hover:bg-slate-50'
                }`}
              >
                Home
              </NavLink>

              <a 
                href="#who-we-are"
                onClick={(e) => {
                  if (location.pathname !== '/') {
                    e.preventDefault();
                    navigate('/#who-we-are');
                  }
                }}
                className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-primary-600 hover:bg-slate-50 transition-all cursor-pointer"
              >
                Who We Are
              </a>

              {/* Sectors Mega Dropdown (The heart of Abdulla Fouad structure) */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setSectorsOpen(!sectorsOpen)}
                  onMouseEnter={() => setSectorsOpen(true)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all inline-flex items-center gap-1.5 ${
                    sectorsOpen || ['/health', '/logistics', '/manpower', '/rental'].includes(location.pathname)
                      ? 'text-primary-700 bg-primary-50/80 font-bold'
                      : 'text-slate-700 hover:text-primary-600 hover:bg-slate-50'
                  }`}
                >
                  <span>Our Sectors</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${sectorsOpen ? 'rotate-180 text-primary-600' : 'text-slate-400'}`} />
                </button>

                {/* Dropdown Menu */}
                {sectorsOpen && (
                  <div 
                    onMouseLeave={() => setSectorsOpen(false)}
                    className="absolute top-full left-0 mt-2 w-[480px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3 grid grid-cols-1 gap-2 z-50 animate-fadeIn"
                  >
                    <div className="px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Core Business Units & Sectors
                      </span>
                      <span className="text-[10px] font-semibold text-primary-600">
                        4 Operating Divisions
                      </span>
                    </div>

                    {sectors.map((sec) => {
                      const Icon = sec.icon;
                      return (
                        <Link
                          key={sec.path}
                          to={sec.path}
                          onClick={() => setSectorsOpen(false)}
                          className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                            <Icon className="w-5 h-5" />
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

                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs text-slate-600">
                      <span>Explore complete portfolio capabilities</span>
                      <Link 
                        to="/#our-sectors"
                        onClick={() => setSectorsOpen(false)}
                        className="text-primary-600 font-bold hover:underline inline-flex items-center gap-1"
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
                className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-primary-600 hover:bg-slate-50 transition-all cursor-pointer"
              >
                Partners & Alliances
              </a>

              <a 
                href="#media-center"
                onClick={(e) => {
                  if (location.pathname !== '/') {
                    e.preventDefault();
                    navigate('/#media-center');
                  }
                }}
                className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-primary-600 hover:bg-slate-50 transition-all cursor-pointer"
              >
                Media Center
              </a>

              <NavLink 
                to="/contact" 
                className={({ isActive }) => `px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive 
                    ? 'text-primary-700 font-bold bg-primary-50/80 shadow-xs' 
                    : 'text-slate-700 hover:text-primary-600 hover:bg-slate-50'
                }`}
              >
                Contact Us
              </NavLink>
            </nav>

            {/* Desktop Action Buttons (Search & Quote) */}
            <div className="hidden sm:flex items-center gap-2.5">
              <button
                onClick={onOpenSearch}
                aria-label="Open search dialog"
                className="p-2.5 rounded-xl text-slate-500 hover:text-primary-600 hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200"
                title="Search (Ctrl+K)"
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenQuote()}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-primary-600 hover:bg-primary-700 active:bg-primary-800 transition-all shadow-md shadow-primary-600/20 hover:shadow-lg hover:shadow-primary-600/30"
              >
                Request a Quote
              </button>
            </div>

            {/* Mobile Actions */}
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
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-primary-600 text-white shadow-xs active:scale-95 transition-transform"
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

        {/* Mobile Slide-Down Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-[57px] sm:top-[68px] z-50 lg:hidden flex flex-col bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white flex-1 max-h-[85vh] overflow-y-auto px-4 pt-3 pb-8 shadow-2xl border-b border-slate-200 flex flex-col justify-between">
              
              <div className="space-y-1">
                <div className="px-2 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Menu & Business Sectors
                </div>

                <NavLink
                  to="/"
                  end
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => `flex items-center justify-between p-3 rounded-xl transition-all ${
                    isActive ? 'bg-primary-50 text-primary-800 font-bold' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Home className="w-5 h-5 text-primary-600" />
                    <span className="text-sm font-bold">Home</span>
                  </div>
                </NavLink>

                <div className="pt-2 pb-1 px-2 text-[10px] font-bold text-primary-700 uppercase tracking-wider">
                  Our Sectors:
                </div>

                {sectors.map((sec) => {
                  const Icon = sec.icon;
                  return (
                    <NavLink
                      key={sec.path}
                      to={sec.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) => `flex items-center justify-between p-2.5 rounded-xl transition-all ${
                        isActive ? 'bg-primary-50 text-primary-800 font-bold border border-primary-200/80' : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-primary-600 shrink-0" />
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
                  className="flex items-center gap-3 p-3 rounded-xl text-slate-700 hover:bg-slate-50 text-sm font-bold"
                >
                  <Building2 className="w-5 h-5 text-primary-600" />
                  <span>Who We Are</span>
                </a>

                <a
                  href="#partners"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (location.pathname !== '/') navigate('/#partners');
                  }}
                  className="flex items-center gap-3 p-3 rounded-xl text-slate-700 hover:bg-slate-50 text-sm font-bold"
                >
                  <ShieldCheck className="w-5 h-5 text-primary-600" />
                  <span>Partners & Alliances</span>
                </a>

                <NavLink
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl text-slate-700 hover:bg-slate-50 text-sm font-bold"
                >
                  <Phone className="w-5 h-5 text-primary-600" />
                  <span>Contact Us</span>
                </NavLink>
              </div>

              {/* Bottom Drawer Actions */}
              <div className="pt-4 mt-4 border-t border-slate-100 space-y-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-primary-600 hover:bg-primary-700 text-center shadow-md flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Solution Proposal</span>
                </button>
                
                <a
                  href={`tel:${companyDetails.phone.replace(/[^0-9+]/g, '')}`}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs text-slate-800 bg-slate-100 text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-primary-600" />
                  <span>Operations Hotline: {companyDetails.phone}</span>
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
