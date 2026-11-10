import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Pill,
  Ship,
  Plane,
  FileCheck,
  Warehouse,
  CheckCircle2, 
  Clock, 
  Globe2, 
  ChevronRight,
  ChevronLeft,
  Building2,
  Award,
  Layers,
  HeartHandshake,
  TrendingUp,
  MapPin,
  PackageCheck,
  ShoppingBag
} from 'lucide-react';
import { 
  companyDetails,
  logisticsServices, 
  pharmacyServices,
  clientStats, 
  corporateValues 
} from '../data/servicesData';

export default function Home({ onOpenQuote }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero carousel emphasizing the 2 primary pillars: Logistics (primary) and Pharmacy/Healthcare
  const heroSlides = [
    {
      title: "Comprehensive Logistics & Global Supply Chain Solutions",
      subtitle: "Delivering full-scale freight forwarding across Ocean, Air, Land transportation, specialized Customs Clearance, and extensive Warehousing & Storage facilities.",
      tag: "CORE PILLAR: LOGISTICS DIVISION",
      cta: "Explore Logistics Services",
      targetLink: "/logistics",
      bgImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80",
      accent: "primary"
    },
    {
      title: "Trusted Pharmacy Network & Healthcare Distribution",
      subtitle: "Powering community wellness through modern retail pharmacies, authentic consumer healthcare products, and high-volume wholesale pharmacy distribution.",
      tag: "CORE PILLAR: PHARMACY & HEALTHCARE",
      cta: "Explore Pharmacy Division",
      targetLink: "/pharmacy",
      bgImage: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1920&q=80",
      accent: "teal"
    },
    {
      title: "Multimodal Freight Forwarding: Ocean, Air & Road",
      subtitle: "Scalable commercial shipping with global maritime line connectivity, express international air cargo allocations, and dedicated domestic trucking fleets.",
      tag: "WORLDWIDE FREIGHT INFRASTRUCTURE",
      cta: "Request Freight Quote",
      targetLink: "/logistics",
      bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80",
      accent: "primary"
    }
  ];

  // Auto advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="space-y-12 sm:space-y-20 lg:space-y-24 pb-12 sm:pb-20">
      
      {/* 1. HERO SLIDER */}
      <section className="relative h-[500px] sm:h-[600px] lg:h-[660px] w-full overflow-hidden bg-navy-950">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with dark corporate gradient overlay */}
            <img
              src={slide.bgImage}
              alt={slide.title}
              className="w-full h-full object-cover object-center scale-105 transform animate-fadeSlide"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-900/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>

            {/* Slide Content */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-20">
              <div className="max-w-3xl space-y-3 sm:space-y-5 pt-4 sm:pt-8">
                
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-sky-300 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-sky-400"></span>
                  {slide.tag}
                </div>

                <h1 className="text-2xl sm:text-4xl lg:text-5.5xl font-extrabold text-white tracking-tight leading-[1.15]">
                  {slide.title}
                </h1>

                <p className="text-xs sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal line-clamp-3 sm:line-clamp-none">
                  {slide.subtitle}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5">
                  <Link
                    to={slide.targetLink}
                    className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-primary-600 hover:bg-primary-500 active:bg-primary-700 transition-all shadow-lg shadow-primary-600/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{slide.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

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

      {/* 2. STATS & CAPACITY BAR */}
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

      {/* 3. GROUP OVERVIEW (Who We Are) */}
      <section id="who-we-are" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <span className="text-xs font-bold text-primary-600 uppercase tracking-widest block">
              CORPORATE OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight">
              Afra National Co. — Building Critical Commercial Infrastructure Across Logistics & Healthcare
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm sm:text-base leading-relaxed">
              Afra National Co. operates as a dynamic multi-industry group dedicated to accelerating regional trade and consumer health. Our strategic enterprise model brings together two complementary business pillars: a full-service, global logistics infrastructure and an extensive retail pharmacy and healthcare product distribution network.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm sm:text-base leading-relaxed">
              By combining international freight forwarding capabilities with licensed pharmaceutical supply chains, we provide commercial enterprises, manufacturers, and consumers with seamless access to world-class supply lines and trusted health essentials.
            </p>

            {/* Two Pillars Summary Cards */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <Link 
                to="/logistics"
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-primary-300 hover:bg-primary-50/40 transition-all group"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-8 h-8 rounded-lg bg-primary-600 text-white flex items-center justify-center shrink-0">
                    <Truck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 group-hover:text-primary-700 uppercase tracking-wider">
                    Pillar 1: Logistics
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ocean & Air Freight, Customs Clearance, Fleet Transport & Warehousing.
                </p>
              </Link>

              <Link 
                to="/pharmacy"
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-teal-300 hover:bg-teal-50/40 transition-all group"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0">
                    <Pill className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 group-hover:text-teal-700 uppercase tracking-wider">
                    Pillar 2: Pharmacy
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Retail Pharmacies, Wellness Products & B2B Wholesale Distribution.
                </p>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
                alt="Afra National Co. Logistics Center"
                className="w-full h-64 sm:h-80 lg:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/30 to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white space-y-1">
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary-300">CORE OBJECTIVE</div>
                <h3 className="text-base sm:text-xl font-bold">Reliable Supply Chains & Community Health</h3>
                <p className="text-[11px] sm:text-xs text-slate-200">Delivering commercial value through integrated transport and quality healthcare distribution.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. PRIMARY PILLAR 1: COMPREHENSIVE LOGISTICS DIVISION (STRONGEST EMPHASIS) */}
      <section id="logistics-division" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8">
        
        {/* Pillar Header with Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 pb-4 border-b border-slate-200">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-extrabold uppercase tracking-widest">
              <Truck className="w-3.5 h-3.5" />
              <span>PRIMARY CORE PILLAR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-950 tracking-tight">
              Logistics Division — Full-Range Supply Chain Solutions
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm sm:text-base leading-relaxed">
              Afra National Co. operates as a comprehensive, end-to-end logistics partner. We provide complete commercial freight forwarding, regulatory customs brokerage, inland haulage, and scalable warehousing solutions designed for high efficiency and total reliability.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/logistics"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-primary-700 hover:bg-primary-800 text-white shadow-sm transition-all"
            >
              <span>Explore All Logistics Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 5 Core Logistics Service Lines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {logisticsServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/30 to-transparent"></div>
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white text-navy-950 shadow-md">
                    {service.badge}
                  </span>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-1.5 border-t border-slate-100 pt-3">
                    <span className="text-[10px] font-bold text-slate-900 uppercase tracking-wider block">
                      Service Highlights:
                    </span>
                    {service.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-100">
                  <Link
                    to="/logistics"
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary-600 hover:text-primary-700 transition-colors group-hover:underline"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button
                    onClick={() => onOpenQuote(`Logistics: ${service.title}`)}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Request Rate
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* 6th Card: Custom Multimodal Logistics Proposal */}
          <div className="bg-gradient-to-br from-primary-900 to-navy-950 rounded-2xl p-6 sm:p-7 text-white flex flex-col justify-between border border-primary-800 shadow-soft">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary-300">
                <Ship className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Need a Tailored Commercial Freight Plan?</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We design integrated multi-service contracts combining ocean containers, air charters, customs clearance, and warehouse staging under a single SLA.
              </p>
              <div className="space-y-1.5 text-xs text-primary-200 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Single-Point Account Director</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Competitive Volume Tariff Agreements</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>24/7 Shipment Telematics & Tracking</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onOpenQuote('Comprehensive Logistics')}
                className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-white text-navy-950 hover:bg-slate-100 transition-colors shadow-sm text-center cursor-pointer"
              >
                Inquire For Dedicated Contract
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRIMARY PILLAR 2: PHARMACY & HEALTHCARE PRODUCTS DIVISION */}
      <section id="pharmacy-division" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8">
        
        {/* Pillar Header with Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 pb-4 border-b border-slate-200">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-extrabold uppercase tracking-widest">
              <Pill className="w-3.5 h-3.5" />
              <span>CORE PILLAR: PHARMACY & DISTRIBUTION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-950 tracking-tight">
              Pharmacy & Healthcare Division — Commercial Distribution & Retail Operations
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm sm:text-base leading-relaxed">
              Our healthcare division is structured around trusted pharmacy operations, consumer health and wellness product lines, and an extensive wholesale distribution network delivering genuine medicines and medical supplies to retailers, pharmacies, and clinics.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/pharmacy"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-teal-700 hover:bg-teal-800 text-white shadow-sm transition-all"
            >
              <span>Explore Pharmacy Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4 Core Pharmacy Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pharmacyServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/30 to-transparent"></div>
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white text-navy-950 shadow-md">
                    {service.badge}
                  </span>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-base sm:text-lg font-bold tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 space-y-2.5">
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-1 border-t border-slate-100 pt-2.5">
                    {service.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                        <CheckCircle2 className="w-3 h-3 text-teal-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-100">
                  <Link
                    to="/pharmacy"
                    className="text-xs font-bold text-teal-700 hover:text-teal-800 transition-colors group-hover:underline"
                  >
                    View Details &rarr;
                  </Link>
                  <button
                    onClick={() => onOpenQuote(`Pharmacy: ${service.title}`)}
                    className="px-2.5 py-1 rounded-md text-[11px] font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. GROUP PRINCIPLES & OPERATIONAL EXCELLENCE */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
            <span className="text-[11px] sm:text-xs font-bold text-primary-400 uppercase tracking-widest block">
              OPERATIONAL EXCELLENCE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Why Industry Leaders Partner With Afra National Co.
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Our business operations are grounded in reliability, speed, and strict adherence to international commercial and pharmaceutical standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {corporateValues.map((val, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-xl bg-slate-800/70 border border-slate-700/80 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-primary-500/20 text-primary-400 flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <div className="font-bold text-white text-sm sm:text-base">{val.title}</div>
                <div className="text-xs text-slate-300 leading-relaxed">{val.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INSTITUTIONAL CALLOUT & RFP BANNER */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-950 via-primary-900 to-navy-950 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 border border-navy-800">
          <div className="max-w-2xl space-y-2.5 sm:space-y-3 text-center lg:text-left">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-primary-400">
              COMMERCIAL PARTNERSHIPS & PROPOSALS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Ready to Accelerate Your Logistics or Pharmacy Operations?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm sm:text-base leading-relaxed">
              Connect directly with our logistics route managers or pharmacy wholesale procurement directors. We offer customized corporate quotes, transparent SLAs, and fast response times.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={() => onOpenQuote()}
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-primary-600 hover:bg-primary-500 text-white transition-colors shadow-md text-center cursor-pointer"
            >
              Request Commercial Proposal
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
