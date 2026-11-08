import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Activity, 
  Users, 
  Car, 
  CheckCircle2, 
  Clock, 
  Globe2, 
  FileCheck, 
  ChevronRight,
  ChevronLeft,
  Building2,
  Award,
  Layers,
  HeartHandshake,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { 
  clientStats, 
  testimonials 
} from '../data/servicesData';

export default function Home({ onOpenQuote }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Abdulla Fouad style hero slider slides with photography & messaging
  const heroSlides = [
    {
      title: "Pioneering Integrated Healthcare & Enterprise Solutions",
      subtitle: "Delivering world-class pharmaceutical cold-chain logistics, diagnostic medical equipment, certified hospital workforce, and specialized emergency fleet operations.",
      tag: "OVER 25 YEARS OF EXCELLENCE",
      cta: "Explore Our Sectors",
      targetId: "our-sectors",
      bgImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1920&q=80"
    },
    {
      title: "Towards Better Patient Care & Clinical Excellence",
      subtitle: "Direct Tier-1 supply of hospital ICU machinery, precision medical devices, sterile surgical consumables, and corporate pharmacy formulary contracts.",
      tag: "ISO 13485:2016 & CE / FDA CERTIFIED",
      cta: "Discover Healthcare Sector",
      targetId: "healthcare-division",
      bgImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1920&q=80"
    },
    {
      title: "Global Cold-Chain Freight & Terminal Storage",
      subtitle: "Oceanic reefer containers, express air charters, and multi-zone GDP validated vaults maintaining unbroken thermal integrity from -80°C to +25°C.",
      tag: "GDP VALIDATED COLD CHAIN",
      cta: "Explore Supply Chain & Logistics",
      targetId: "supply-chain-division",
      bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80"
    },
    {
      title: "Specialist Medical Staffing & Emergency Fleet Rentals",
      subtitle: "Rapid placement of primary-source vetted ICU physicians, nurses, and technicians, alongside turnkey Type III ALS ambulances and mobile dental clinics.",
      tag: "24/7 RAPID DISPATCH OPERATIONS",
      cta: "Explore Workforce & Fleet",
      targetId: "manpower-division",
      bgImage: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1920&q=80"
    }
  ];

  // Auto advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const sectors = [
    {
      id: 'healthcare-division',
      title: 'Healthcare Solutions',
      category: 'Medical Supplies & Devices',
      desc: 'Supplying hospital-grade ICU monitors, mobile C-arm fluoroscopy, syringe infusion devices, and wholesale corporate pharmacy formularies.',
      icon: Activity,
      link: '/health',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80',
      highlights: [
        'ICU & Diagnostic Medical Equipments',
        'Precision Infusion & Defibrillator Devices',
        'Sterile Consumables & Surgical Disposables',
        'Direct Corporate Pharmacy Wholesale Contracts'
      ]
    },
    {
      id: 'supply-chain-division',
      title: 'Supply Chain & Logistics',
      category: 'Global Freight & Cold Storage',
      desc: 'Validated multi-zone cold chain (-80°C to +25°C), ocean reefer containers, air freight charters, expedited customs, and hospital replenishment.',
      icon: Truck,
      link: '/logistics',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
      highlights: [
        'Ocean / Sea Freight (Reefer Containers)',
        'Express Air Cargo & Emergency Charters',
        'Nationwide Climate-Controlled Road Fleets',
        'GDP Multi-Zone Terminal Storage Vaults'
      ]
    },
    {
      id: 'manpower-division',
      title: 'Manpower Solutions',
      category: 'Clinical & Operational Staffing',
      desc: 'Primary-source credentialed healthcare workforce: specialist physicians, ICU nurses, EMT paramedics, biomedical engineers, and sanitization teams.',
      icon: Users,
      link: '/manpower',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80',
      highlights: [
        'Specialist Physicians & Surgeons',
        'ICU & ER Registered Nurses (RN/BSN)',
        'Certified Paramedics & Emergency EMTs',
        'Biomedical Engineers & Support Orderlies'
      ]
    },
    {
      id: 'rental-division',
      title: 'Rental & Fleet Services',
      category: 'Specialized Vehicles & Heavy Units',
      desc: 'Turnkey institutional leasing of Type III ALS emergency ambulances, mobile CT/MRI scanning trailers, medical oxygen plants, and mobile dental vans.',
      icon: Car,
      link: '/rental',
      image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1000&q=80',
      highlights: [
        'Type I, II, III ALS & BLS Ambulance Units',
        'Mobile Diagnostic CT / MRI Scanner Trailers',
        'Mobile PSA Medical Oxygen Generation Plants',
        'Turnkey Mobile Dental Operatory Clinics'
      ]
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-20 lg:space-y-24 pb-12 sm:pb-20">
      
      {/* 1. ABDULLA FOUAD STYLE HERO SLIDER (High-Impact Photographic Carousel) */}
      <section className="relative h-[500px] sm:h-[620px] lg:h-[680px] w-full overflow-hidden bg-navy-950">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background image with enterprise dark gradient overlay */}
            <img
              src={slide.bgImage}
              alt={slide.title}
              className="w-full h-full object-cover object-center scale-105 transform animate-fadeSlide"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-900/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>

            {/* Slide Text Content */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-20">
              <div className="max-w-3xl space-y-3 sm:space-y-5 pt-4 sm:pt-8">
                
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded bg-white/10 backdrop-blur-md border border-white/20 text-primary-300 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary-400"></span>
                  {slide.tag}
                </div>

                <h1 className="text-2xl sm:text-4xl lg:text-5.5xl font-extrabold text-white tracking-tight leading-[1.15]">
                  {slide.title}
                </h1>

                <p className="text-xs sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal line-clamp-3 sm:line-clamp-none">
                  {slide.subtitle}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5">
                  <button
                    onClick={() => {
                      const el = document.getElementById(slide.targetId) || document.getElementById('our-sectors');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-primary-600 hover:bg-primary-500 active:bg-primary-700 transition-all shadow-lg shadow-primary-600/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{slide.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenQuote()}
                    className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Proposal</span>
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}

        {/* Carousel Arrow Controls */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all hidden sm:flex cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all hidden sm:flex cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 sm:gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 sm:h-2 rounded-full transition-all cursor-pointer ${
                currentSlide === idx ? 'w-6 sm:w-8 bg-primary-500' : 'w-1.5 sm:w-2 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. STATS & REPUTATION STRIP (Abdulla Fouad Group metrics bar) */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-14 relative z-30">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 bg-white p-3.5 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xl">
          {clientStats.map((stat, idx) => (
            <div key={idx} className="p-2 sm:p-3 text-center border-r last:border-r-0 even:border-r-0 lg:even:border-r border-slate-100">
              <div className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-navy-950 tracking-tight">
                {stat.value}
              </div>
              <div className="font-bold text-slate-800 text-[11px] sm:text-sm mt-0.5 sm:mt-1">
                {stat.label}
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHO WE ARE (Corporate Overview as in Abdulla Fouad structure) */}
      <section id="who-we-are" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <span className="text-xs font-bold text-primary-600 uppercase tracking-widest block">
              CORPORATE OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight">
              A Premier Conglomerate Driving Regional Healthcare & Supply Chain Excellence
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm sm:text-base leading-relaxed">
              Medical Solutions Group stands at the forefront of integrated healthcare provision, pharmaceutical cold-chain transport, clinical manpower augmentation, and emergency fleet leasing. Inspired by industry pioneers, our enterprise serves health ministries, tertiary hospital networks, research laboratories, and corporate partners across the region.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm sm:text-base leading-relaxed hidden sm:block">
              Our multidisciplinary divisions operate under strict global governance—from ISO 13485:2016 quality management for medical hardware to Good Distribution Practice (GDP) cold corridors—ensuring unwavering compliance and life-saving reliability.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xl sm:text-2xl font-bold text-primary-600">25+ Years</div>
                <div className="text-[11px] sm:text-xs font-medium text-slate-600 mt-0.5">Operational Legacy & Trust</div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xl sm:text-2xl font-bold text-primary-600">100%</div>
                <div className="text-[11px] sm:text-xs font-medium text-slate-600 mt-0.5">Primary-Source Credentialed</div>
              </div>
            </div>

            <div className="pt-1 sm:pt-2">
              <button
                onClick={() => onOpenQuote()}
                className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold text-primary-600 hover:text-primary-700 group cursor-pointer"
              >
                <span>Read our institutional capabilities statement</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
                alt="Medical Solutions Laboratory & Diagnostic Architecture"
                className="w-full h-56 sm:h-80 lg:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white space-y-1">
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary-300">VISION STATEMENT</div>
                <h3 className="text-base sm:text-xl font-bold">Enhancing Patient Health & Enterprise Continuity</h3>
                <p className="text-[11px] sm:text-xs text-slate-200 line-clamp-2 sm:line-clamp-none">Creating long-term clinical and supply chain value through sustainable innovation.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. OUR SECTORS / BUSINESS UNITS (Abdulla Fouad Group Core Section) */}
      <section id="our-sectors" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs font-bold text-primary-600 uppercase tracking-widest block mb-1 sm:mb-2">
            BUSINESS DIVISIONS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-950 tracking-tight">
            Our Core Operating Sectors
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm sm:text-base mt-2 sm:mt-3 leading-relaxed">
            Delivering specialized excellence across four distinct industry verticals, structured to eliminate operational friction for public and private healthcare entities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {sectors.map((sec) => {
            const Icon = sec.icon;
            return (
              <div
                key={sec.id}
                id={sec.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 sm:h-56 overflow-hidden">
                    <img
                      src={sec.image}
                      alt={sec.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/30 to-transparent"></div>
                    <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-white text-navy-950 shadow-md">
                      {sec.category}
                    </span>
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white">
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight">
                          {sec.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-7 space-y-3 sm:space-y-4">
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {sec.desc}
                    </p>

                    <div className="space-y-2 border-t border-slate-100 pt-3 sm:pt-4">
                      <span className="text-[11px] sm:text-xs font-bold text-slate-900 uppercase tracking-wider block">
                        Core Capabilities & Scope:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-600">
                        {sec.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0 sm:p-7 sm:pt-0">
                  <div className="flex items-center justify-between gap-3 pt-3 sm:pt-4 border-t border-slate-100">
                    <Link
                      to={sec.link}
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors group-hover:underline"
                    >
                      <span>Explore Catalog</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button
                      onClick={() => onOpenQuote(sec.title)}
                      className="px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      Instant RFP
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. STRATEGIC ALLIANCES & PARTNERS (As in Abdulla Fouad site) */}
      <section id="partners" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        <div className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-12 border border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 space-y-1 sm:space-y-2">
            <span className="text-[11px] sm:text-xs font-bold text-primary-400 uppercase tracking-widest block">
              GLOBAL ALLIANCES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Trusted by Premier Healthcare Institutions & Ministries
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              We collaborate with multinational medical manufacturers, accredited pharmaceutical bodies, and sovereign healthcare providers.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 text-center">
            {[
              { name: 'Ministry of Health', label: 'Governmental Partner' },
              { name: 'Teaching Hospitals', label: 'ICU & Diagnostics' },
              { name: 'Multinational Pharma', label: 'GDP Cold-Chain' },
              { name: 'National EMS Response', label: 'Emergency Fleets' }
            ].map((p, idx) => (
              <div key={idx} className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-800/70 border border-slate-700/80">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary-500/20 text-primary-400 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="font-bold text-white text-xs sm:text-sm">{p.name}</div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">{p.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MEDIA CENTER & INDUSTRY INSIGHTS (Abdulla Fouad structure) */}
      <section id="media-center" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
          <div>
            <span className="text-[11px] sm:text-xs font-bold text-primary-600 uppercase tracking-widest block mb-1">
              MEDIA CENTER
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
              Latest News & Institutional Announcements
            </h2>
          </div>
          <Link
            to="/contact"
            className="text-xs font-bold text-primary-600 hover:underline inline-flex items-center gap-1 shrink-0"
          >
            Media Inquiries & Press Desk &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              date: "October 2026",
              title: "Expansion of GDP-Validated Cold-Chain Terminals",
              desc: "Addition of deep-freeze (-80°C) cryogenic vaults supporting nationwide biologic and cellular therapy distribution.",
              category: "Supply Chain"
            },
            {
              date: "September 2026",
              title: "Clinical Staffing Deployment for Regional ICU Wing",
              desc: "Mobilization of 45 board-certified intensivists and critical care nurses under 72-hour turnaround SLA.",
              category: "Manpower"
            },
            {
              date: "August 2026",
              title: "New Fleet Delivery of Type III ALS Ambulances",
              desc: "Deployment of custom Stryker cot-equipped mobile intensive care units for municipal emergency response services.",
              category: "Fleet Leasing"
            }
          ].map((item, idx) => (
            <div key={idx} className="p-4 sm:p-6 bg-white rounded-2xl border border-slate-200/90 shadow-soft flex flex-col justify-between">
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-400">
                  <span>{item.date}</span>
                  <span className="font-semibold text-primary-600 uppercase tracking-wider">{item.category}</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-navy-950">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
              <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenQuote()}
                  className="text-xs font-bold text-primary-600 hover:text-primary-700 flex items-center gap-1 cursor-pointer"
                >
                  Read announcement details &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. INSTITUTIONAL CALLOUT & RFP BANNER */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-950 via-primary-900 to-navy-950 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 border border-navy-800">
          <div className="max-w-2xl space-y-2.5 sm:space-y-3 text-center lg:text-left">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-primary-400">
              STRATEGIC PARTNERSHIPS & TENDERS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Ready to Partner With Medical Solutions Group?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm sm:text-base leading-relaxed">
              Connect with our corporate procurement, supply chain, and clinical staffing directors. We provide comprehensive SLAs, compliance data, and priority onboarding.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={() => onOpenQuote()}
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-primary-600 hover:bg-primary-500 text-white transition-colors shadow-md text-center cursor-pointer"
            >
              Request Custom Proposal
            </button>
            <Link
              to="/contact"
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors text-center cursor-pointer"
            >
              Contact Operations Desk
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
