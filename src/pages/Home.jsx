import React, { useState } from 'react';
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
  Thermometer, 
  HeartHandshake, 
  Building2, 
  Search,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { 
  logisticsServices, 
  healthProducts, 
  manpowerRoles, 
  rentalFleet, 
  clientStats, 
  testimonials 
} from '../data/servicesData';

export default function Home({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedSolution, setSelectedSolution] = useState('logistics');

  const pillars = [
    {
      id: 'logistics',
      title: '1. Logistics & Cold Chain',
      shortTitle: 'Logistics',
      tagline: 'Ocean, Air, Road Freight & GDP Terminal Storage',
      desc: 'Certified pharmaceutical and medical logistics with continuous temperature telemetry (-80°C to +25°C), expedited customs clearance, and direct pharmacy delivery networks.',
      icon: Truck,
      color: 'from-blue-600 to-cyan-600',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      link: '/logistics',
      highlights: [
        'Ocean / Sea Freight (Reefer Containers)',
        'Time-Critical Air Freight & Express Charter',
        'Land / Road Climate-Controlled Fleets',
        'Customs Clearance & Regulatory Brokerage',
        'Terminal GDP Multi-Zone Storage',
        'Direct Medicine & Pharmacy Supply'
      ],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'health',
      title: '2. Health & Supplies',
      shortTitle: 'Health',
      tagline: 'Equipments, Precision Devices & Sterile Consumables',
      desc: 'End-to-end procurement and supply of hospital-grade ICU machinery, diagnostic imaging systems, surgical devices, sterile disposables, and corporate pharmacy packages.',
      icon: Activity,
      color: 'from-teal-600 to-emerald-600',
      textColor: 'text-teal-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      link: '/health',
      highlights: [
        'Pharmacies & Corporate Bulk Contracts',
        'ICU & Diagnostic Medical Equipments',
        'Specialized Medical Devices & Infusion Systems',
        'Sterile Consumables & Surgical Disposables',
        'Tier-1 Direct Manufacturer Pricing',
        'Full ISO 13485 & CE Compliance'
      ],
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'manpower',
      title: '3. Manpower Solutions',
      shortTitle: 'Manpower',
      tagline: 'Specialist Doctors, ICU Nurses, Paramedics & Technicians',
      desc: 'Rapid placement of credentialed clinical personnel, biomedical technicians, and reliable healthcare support staff for permanent placement or emergency hospital surge demands.',
      icon: Users,
      color: 'from-indigo-600 to-blue-600',
      textColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      link: '/manpower',
      highlights: [
        'Healthcare Skilled: MD Physicians & Surgeons',
        'Registered Nurses (ICU, ER, Surgical, Wards)',
        'Certified Paramedics & Emergency EMTs',
        'Skilled Labour: Biomedical & Lab Technicians',
        'Unskilled & Operational Hospital Orderlies',
        'Comprehensive Credential & License Verification'
      ],
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'rental',
      title: '4. Rental & Fleet Solutions',
      shortTitle: 'Rental',
      tagline: 'ALS Ambulances, Heavy Equipment & Mobile Dental Clinics',
      desc: 'Institutional leasing and on-demand dispatch of fully equipped emergency ambulances, mobile CT/MRI trailers, heavy oxygen generation plants, and turnkey mobile dental units.',
      icon: Car,
      color: 'from-sky-600 to-teal-600',
      textColor: 'text-sky-600',
      bgColor: 'bg-sky-50',
      borderColor: 'border-sky-200',
      link: '/rental',
      highlights: [
        'Type I, II, III ALS & BLS Ambulance Rentals',
        'Mobile Diagnostic CT / MRI Scanner Trailers',
        'High-Output Mobile Medical Oxygen Plants',
        'Turnkey Mobile Dental Operatory Units',
        'Industrial Hospital Steam Autoclaves',
        'Full Maintenance & Calibration Service Included'
      ],
      image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative pt-4 sm:pt-6 pb-8 sm:pb-10 overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-slate-100/40 border-b border-slate-200/60">
        {/* Subtle grid background and gradient glows */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-primary-400/10 via-sky-300/10 to-teal-300/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-3.5 sm:space-y-4">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-primary-50 border border-primary-200/80 text-primary-700 text-[11px] sm:text-sm font-semibold tracking-tight shadow-xs max-w-full">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-ping shrink-0"></span>
              <span className="truncate sm:overflow-visible">Integrated B2B Healthcare Infrastructure & Global Supply Chain</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] sm:leading-[1.12]">
              Precision Logistics. Certified Healthcare. Empowered Staffing. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600">Agile Fleet.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
              Medical Solutions provides high-reliability integrated services for hospitals, pharmaceutical corporations, and health ministries: 
              from cold-chain freight and certified clinical hardware to doctors, nurses, and ambulance fleet leasing.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4">
              <button
                onClick={() => onOpenQuote()}
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-primary-600 hover:bg-primary-700 active:bg-primary-800 transition-all shadow-md shadow-primary-600/25 flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                <span>Request Enterprise Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#four-pillars"
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-all shadow-xs flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                <span>Explore 4 Core Verticals</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-xs font-semibold text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>GDP Cold-Chain (-80°C to +25°C)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>ISO 13485:2016 Certified Supplies</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary-500 shrink-0" />
                <span>24/7 Rapid Emergency Response</span>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-6 bg-white p-4 sm:p-8 rounded-2xl border border-slate-200/80 shadow-soft">
            {clientStats.map((stat, idx) => (
              <div key={idx} className="text-center p-2.5 sm:p-3 border-r even:border-r-0 md:even:border-r md:last:border-r-0 border-slate-100">
                <div className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-500">
                  {stat.value}
                </div>
                <div className="font-semibold text-slate-800 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  {stat.label}
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUR CORE VERTICALS OVERVIEW */}
      <section id="four-pillars" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Complete Service Ecosystem"
          title="The Four Strategic Pillars of Medical Solutions"
          description="Designed to eliminate operational friction across clinical procurement, supply chains, medical personnel staffing, and emergency vehicle fleet management."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.id}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image header with category pill */}
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img 
                      src={pillar.image} 
                      alt={pillar.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/95 text-slate-900 backdrop-blur-md shadow-sm">
                        {pillar.shortTitle}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-8 h-8 rounded-lg bg-primary-500/80 backdrop-blur-md flex items-center justify-center text-white">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200">
                        {pillar.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Body description & highlights */}
                  <div className="p-6 sm:p-7 space-y-5">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {pillar.desc}
                    </p>

                    <div className="space-y-2 border-t border-slate-100 pt-4">
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                        Included Services & Capabilities:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                        {pillar.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary-500 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card footer CTA */}
                <div className="p-6 pt-0 sm:p-7 sm:pt-0">
                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
                    <Link
                      to={pillar.link}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group-hover:underline"
                    >
                      <span>Explore Department Details</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button
                      onClick={() => onOpenQuote(pillar.shortTitle)}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      Instant Quote
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* INTERACTIVE SOLUTION SELECTOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden border border-navy-800 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl mb-8">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary-500/20 text-primary-300 border border-primary-500/30 mb-3">
              Interactive Needs Navigator
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              What does your healthcare organization require today?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Select an area below to view operational protocols, standard turnarounds, and compliance parameters.
            </p>
          </div>

          {/* Solution Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-8">
            {[
              { id: 'logistics', label: 'Logistics & Cold Chain', icon: Truck },
              { id: 'health', label: 'Medical Supplies & Devices', icon: Activity },
              { id: 'manpower', label: 'Physicians & Staffing', icon: Users },
              { id: 'rental', label: 'Ambulances & Fleet', icon: Car },
            ].map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedSolution(tab.id)}
                  className={`p-3.5 sm:p-4 rounded-xl text-left border transition-all flex flex-col justify-between gap-3 ${
                    selectedSolution === tab.id
                      ? 'bg-primary-600/20 border-primary-500 text-white shadow-lg'
                      : 'bg-navy-900/60 border-navy-800 text-slate-400 hover:text-slate-200 hover:border-navy-700'
                  }`}
                >
                  <TabIcon className={`w-5 h-5 ${selectedSolution === tab.id ? 'text-primary-400' : 'text-slate-500'}`} />
                  <span className="text-xs sm:text-sm font-semibold">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Details Box */}
          <div className="bg-navy-900/90 rounded-2xl p-6 sm:p-8 border border-navy-800">
            {selectedSolution === 'logistics' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-bold text-white mb-2">Validated Freight Network</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Ocean reefer, air freight charters, and nationwide temperature trucks monitored via active satellite telemetry 24/7.
                  </p>
                  <div className="mt-4 text-xs font-semibold text-primary-400 flex items-center gap-1">
                    <Thermometer className="w-3.5 h-3.5" /> -80°C to +25°C Active Range
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-2">Customs & Terminal Hubs</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Zero-delay green customs clearance for narcotics, emergency vaccines, and medical diagnostic machinery.
                  </p>
                  <div className="mt-4 text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> GDP Certified Storage Vaults
                  </div>
                </div>
                <div className="flex flex-col justify-between bg-navy-950 p-4 rounded-xl border border-navy-800/80">
                  <div className="text-xs text-slate-300">
                    Need a custom freight lane or cold-chain quote?
                  </div>
                  <div className="space-y-2 mt-4">
                    <button
                      onClick={() => onOpenQuote('Logistics')}
                      className="w-full py-2 px-3 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-xs font-semibold transition-colors"
                    >
                      Calculate Freight Quote
                    </button>
                    <Link
                      to="/logistics"
                      className="block text-center text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      View all logistics capabilities &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {selectedSolution === 'health' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-bold text-white mb-2">Hospital Hardware & Devices</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    ICU monitors, digital C-arms, mobile fluoroscopy, infusion syringe pumps, and defibrillators with full calibration certs.
                  </p>
                  <div className="mt-4 text-xs font-semibold text-primary-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> ISO 13485:2016 Compliant
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-2">Consumables & Corporate Supply</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Sterile surgical drape kits, nitrile gloves (box of 200), and bulk formulary medicine contracts for retail/corporate chains.
                  </p>
                  <div className="mt-4 text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Direct Tier-1 Wholesale Pricing
                  </div>
                </div>
                <div className="flex flex-col justify-between bg-navy-950 p-4 rounded-xl border border-navy-800/80">
                  <div className="text-xs text-slate-300">
                    Procuring bulk equipment or annual hospital consumables?
                  </div>
                  <div className="space-y-2 mt-4">
                    <button
                      onClick={() => onOpenQuote('Health Supplies')}
                      className="w-full py-2 px-3 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-xs font-semibold transition-colors"
                    >
                      Request Product Catalog RFP
                    </button>
                    <Link
                      to="/health"
                      className="block text-center text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      Explore healthcare catalog &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {selectedSolution === 'manpower' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-bold text-white mb-2">Specialist Clinical Personnel</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Board-certified emergency physicians, ICU intensivists, scrub/circulating nurses, and advanced flight paramedics.
                  </p>
                  <div className="mt-4 text-xs font-semibold text-primary-400 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" /> 100% License & Credential Vetted
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-2">Technical & Support Labour</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Biomedical equipment repair technicians, cleanroom sanitization crews, hospital orderlies, and pharma warehouse handlers.
                  </p>
                  <div className="mt-4 text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 48-Hour Rapid Surge Deployment
                  </div>
                </div>
                <div className="flex flex-col justify-between bg-navy-950 p-4 rounded-xl border border-navy-800/80">
                  <div className="text-xs text-slate-300">
                    Facing a nursing or physician staffing shortage?
                  </div>
                  <div className="space-y-2 mt-4">
                    <button
                      onClick={() => onOpenQuote('Manpower Solutions')}
                      className="w-full py-2 px-3 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-xs font-semibold transition-colors"
                    >
                      Request Staffing Roster
                    </button>
                    <Link
                      to="/manpower"
                      className="block text-center text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      Browse credentialed roles &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {selectedSolution === 'rental' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-bold text-white mb-2">Ambulances & Mobile Clinics</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Type III Advanced Life Support (ALS) ambulances, basic patient transports, and turnkey mobile dental screening vans.
                  </p>
                  <div className="mt-4 text-xs font-semibold text-primary-400 flex items-center gap-1">
                    <Car className="w-3.5 h-3.5" /> Ready for Immediate Dispatch
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-2">Heavy Hospital Equipment</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Mobile CT/MRI imaging trailers, containerized hospital PSA oxygen generation plants, and high-capacity steam autoclaves.
                  </p>
                  <div className="mt-4 text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Comprehensive SLA & Maintenance
                  </div>
                </div>
                <div className="flex flex-col justify-between bg-navy-950 p-4 rounded-xl border border-navy-800/80">
                  <div className="text-xs text-slate-300">
                    Need emergency fleet or temporary scan capacity?
                  </div>
                  <div className="space-y-2 mt-4">
                    <button
                      onClick={() => onOpenQuote('Rental & Fleet')}
                      className="w-full py-2 px-3 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-xs font-semibold transition-colors"
                    >
                      Check Fleet Availability
                    </button>
                    <Link
                      to="/rental"
                      className="block text-center text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      Explore rental specifications &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* WHY MEDICAL SOLUTIONS - VALUE PROPOSITION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Enterprise Reliability"
          title="Why Leading Healthcare Institutions Trust Us"
          description="Built on uncompromising compliance, precision engineering, and round-the-clock emergency mobilization."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-soft hover:border-primary-200 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-5">
              <Thermometer className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Validated Cold Chain & Zero Excursion</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every shipment is backed by continuous IoT data-loggers, multi-redundant reefer cooling, and pre-cleared customs corridors that protect critical drug viability.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-soft hover:border-primary-200 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Rigorous Institutional Quality Standards</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              From CE & FDA-cleared surgical devices to JCI-compliant medical credentialing, our workflows satisfy the strictest audit benchmarks globally.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-soft hover:border-primary-200 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">24/7/365 Rapid Response Operations</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our dispatch centers maintain live readiness around the clock for sudden hospital surges, emergency ambulance call-outs, and urgent pharma replenishments.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Institutional Endorsements"
            title="Trusted by Healthcare Leaders & Global Networks"
            description="Proven execution across hospital networks, international pharmaceutical enterprises, and emergency response bodies."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-7 rounded-2xl border border-slate-200 shadow-soft flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-base">&#9733;</span>
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <div className="font-bold text-sm text-slate-900">{item.author}</div>
                  <div className="text-xs text-primary-600 font-medium">{item.role}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{item.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3 text-center lg:text-left">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/20 text-white backdrop-blur-md">
              Immediate Consultations Available
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Upgrade Your Healthcare Supply Chain & Operations?
            </h2>
            <p className="text-primary-100 text-sm sm:text-base leading-relaxed">
              Connect with our solutions directors. We provide comprehensive SLAs, technical datasheets, and expedited onboarding for corporate partners.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={() => onOpenQuote()}
              className="px-7 py-3.5 rounded-xl font-semibold text-sm bg-white text-primary-700 hover:bg-primary-50 transition-colors shadow-md text-center"
            >
              Request Custom Quote
            </button>
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-xl font-semibold text-sm bg-primary-800/60 hover:bg-primary-800 text-white border border-white/20 transition-colors text-center"
            >
              Contact Operations Desk
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
