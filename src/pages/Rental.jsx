import React, { useState } from 'react';
import { 
  Car, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Wrench, 
  Sparkles, 
  ArrowRight, 
  FileCheck, 
  Activity,
  AlertTriangle,
  Smile
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { rentalFleet } from '../data/servicesData';

export default function Rental({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('monthly');
  const [selectedUnit, setSelectedUnit] = useState(rentalFleet[0]);

  const categories = [
    'All',
    'Ambulances & Emergency Vehicles',
    'Heavy Medical Equipments',
    'Dental & Mobile Clinics'
  ];

  const filteredFleet = activeCategory === 'All'
    ? rentalFleet
    : rentalFleet.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* PAGE HERO */}
      <section className="relative pt-8 pb-14 bg-gradient-to-b from-navy-950 via-slate-900 to-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <h1 className="text-3xl sm:text-5xl lg:text-5.5xl font-extrabold tracking-tight leading-tight">
              Ambulance Fleet, Heavy Equipment & Mobile Dental Clinics
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed font-normal">
              On-demand institutional leasing of Advanced Life Support (ALS) ambulances, mobile CT/MRI scanning trailers, containerized oxygen plants, industrial sterilizers, and mobile dental operatory vans.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-4">
              <button
                onClick={() => onOpenQuote('Rental & Fleet')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm bg-sky-600 hover:bg-sky-500 active:bg-sky-700 transition-colors shadow-lg shadow-sky-600/30 flex items-center justify-center gap-2"
              >
                <span>Reserve Fleet or Equipment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#fleet-catalog"
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-colors text-center"
              >
                View Available Units
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS OF RENTAL (Ambulances + Heavy Equipment + Dental) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Leasing Portfolio"
          title="Specialized Fleets & Heavy Medical Hardware"
          description="Engineered to meet emergency surge capacity, facility renovations, and mobile healthcare outreach missions."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-premium transition-all hover:border-sky-200 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Ambulances & Patient Transport</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Type I, II, and III Advanced Life Support (ALS) and Basic Life Support (BLS) units with transport ventilators, cardiac monitors, and emergency lighting.
              </p>
              <div className="pt-2 space-y-1.5 text-xs text-slate-500">
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-sky-500" /> Stryker Power-LOAD Cot System</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-sky-500" /> Fully stocked ALS pharmaceutical vault</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-sky-500" /> 24/7 roadside assist & replacement vehicle</div>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setActiveCategory('Ambulances & Emergency Vehicles');
                  const el = document.getElementById('fleet-catalog');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1"
              >
                View ambulance fleet &rarr;
              </button>
            </div>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-premium transition-all hover:border-sky-200 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Heavy Medical & Industrial Equipment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mobile CT and MRI diagnostic scanner trailers, containerized medical oxygen generation plants, and 800L hospital autoclaves.
              </p>
              <div className="pt-2 space-y-1.5 text-xs text-slate-500">
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-500" /> On-site OEM engineer installation</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-500" /> Integrated medical HVAC & DICOM links</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-500" /> 99.5% uptime SLA guarantee</div>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setActiveCategory('Heavy Medical Equipments');
                  const el = document.getElementById('fleet-catalog');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-teal-600 hover:text-teal-700 flex items-center gap-1"
              >
                View heavy equipment &rarr;
              </button>
            </div>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-premium transition-all hover:border-sky-200 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Smile className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Dental & Mobile Operatory Clinics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fully self-sufficient mobile dental operatories with patient chair, digital intraoral X-ray sensors, clean water tanks, and surgical lighting.
              </p>
              <div className="pt-2 space-y-1.5 text-xs text-slate-500">
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Turnkey operatory delivery cart</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Lead-lined radiographic enclosure</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Ideal for corporate & rural health drives</div>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setActiveCategory('Dental & Mobile Clinics');
                  const el = document.getElementById('fleet-catalog');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
              >
                View dental mobile clinics &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FLEET & EQUIPMENT CATALOG */}
      <section id="fleet-catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Inventory Ready"
          title="Explore Available Units for Lease"
          description="All units are certified, sterilized, pre-calibrated, and accompanied by comprehensive maintenance service level agreements."
        />

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 sm:justify-center no-scrollbar mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold shrink-0 whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFleet.map((unit) => (
            <div
              key={unit.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={unit.image}
                    alt={unit.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500 text-white shadow-xs">
                    {unit.status}
                  </span>
                  <div className="absolute bottom-3 left-4 text-white">
                    <span className="text-[10px] font-semibold text-sky-300 uppercase block tracking-wider">
                      {unit.category}
                    </span>
                    <h3 className="text-base font-bold">
                      {unit.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {unit.description}
                  </p>

                  <div className="space-y-2 border-t border-slate-100 pt-3">
                    <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block">
                      Standard Configurations:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {unit.specs.map((sp, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                          <span>{sp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Lease Terms:</span>
                    {unit.terms}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenQuote(`Rental Inquiry: ${unit.title}`)}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-sm"
                >
                  Reserve Unit / Request Lease Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAINTENANCE & SLA ASSURANCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800">
          <SectionHeading
            light
            badge="Institutional SLA"
            title="Complete Maintenance & Operational Peace of Mind"
            description="Every leased vehicle and equipment unit includes comprehensive servicing, rapid replacement guarantees, and preventive calibration."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center mb-3">
                <Wrench className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Preventive Scheduled Calibration</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Biomedical technicians perform scheduled monthly calibrations and safety testing according to manufacturer and hospital accreditation protocols.
              </p>
            </div>

            <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Full Mechanical & Insurance Coverage</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                All ambulance units carry comprehensive institutional fleet insurance, EVOC certified safety checks, and zero-deductible commercial coverage.
              </p>
            </div>

            <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Emergency Swap Guarantee</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                In the rare event of mechanical or diagnostic sensor interruption, our contingency reserve delivers an equivalent replacement unit within 12 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
