import React, { useState } from 'react';
import { 
  Truck, 
  Ship, 
  Plane, 
  Warehouse, 
  FileCheck, 
  Pill, 
  Thermometer, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  AlertCircle,
  Activity,
  Maximize2
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { logisticsServices } from '../data/servicesData';

export default function Logistics({ onOpenQuote }) {
  const [selectedZone, setSelectedZone] = useState('refrigerated');
  const [calcTransport, setCalcTransport] = useState('air');
  const [calcTemp, setCalcTemp] = useState('2-8');
  const [calcWeight, setCalcWeight] = useState('500');
  const [estimatedTransit, setEstimatedTransit] = useState('24 - 48 Hours');

  const tempZones = [
    {
      id: 'ultra-low',
      title: 'Ultra-Low Cryo (-80°C to -60°C)',
      badge: 'Active Dry-Ice & Nitrogen',
      desc: 'Validated shippers for mRNA vaccines, cellular therapies, biological viral vectors, and clinical trial specimens.',
      safeguards: ['Continuous dry-ice telemetry', 'Dual temperature probes', 'Expedited tarmac priority']
    },
    {
      id: 'frozen',
      title: 'Standard Frozen (-25°C to -15°C)',
      badge: 'Sub-Zero Controlled',
      desc: 'Refrigerated containerized transport for human blood plasma, tissue grafts, diagnostic reagents, and enzyme preparations.',
      safeguards: ['Automated defrost cycle lockout', 'Backup liquid CO2 injection', 'Pre-conditioned packaging']
    },
    {
      id: 'refrigerated',
      title: 'Cold Chain (+2°C to +8°C)',
      badge: 'Core Pharmaceutical',
      desc: 'Strictly monitored cold corridors for insulins, monoclonal antibodies, oncological infusions, and standard vaccines.',
      safeguards: ['Real-time excursion alerts', 'Calibrated thermistors', 'GDP-certified handling']
    },
    {
      id: 'ambient',
      title: 'Controlled Ambient (+15°C to +25°C)',
      badge: 'CRT Distribution',
      desc: 'Insulated climate-controlled transport preventing summer heat spikes and winter freezing for tablets, capsules, and medical devices.',
      safeguards: ['Insulated container thermal blankets', 'Continuous HVAC airflow', 'Humidity regulation']
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* PAGE HERO */}
      <section className="relative pt-8 pb-14 bg-gradient-to-b from-primary-950 via-navy-900 to-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <h1 className="text-3xl sm:text-5xl lg:text-5.5xl font-extrabold tracking-tight leading-tight">
              End-to-End Cold Chain & Pharmaceutical Freight Logistics
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed font-normal">
              From oceanic reefer containers and chartered air cargo to priority customs clearance, GDP-validated cold storage, and direct pharmacy replenishment.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-4">
              <button
                onClick={() => onOpenQuote('Logistics')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm bg-primary-600 hover:bg-primary-500 active:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30 flex items-center justify-center gap-2"
              >
                <span>Request Freight Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#services-breakdown"
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-colors text-center"
              >
                View 6 Core Logistics Capabilities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6 CORE LOGISTICS SERVICES (Derived from note & prompt) */}
      <section id="services-breakdown" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Global Transport Network"
          title="Integrated Logistics Capabilities"
          description="Six specialized operational branches engineered to preserve pharmaceutical integrity and deliver medical hardware on schedule."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {logisticsServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/95 text-slate-900 backdrop-blur-md shadow-xs">
                    {service.badge}
                  </span>
                  <div className="absolute bottom-3 left-4 text-white">
                    <span className="text-xs text-primary-300 font-semibold block uppercase tracking-wider">
                      {service.category}
                    </span>
                    <h3 className="text-lg font-bold">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 border-t border-slate-100 pt-3">
                    <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block">
                      Operational Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenQuote(`Logistics: ${service.title}`)}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100/80 border border-primary-200/60 transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Request Route & Rate Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COLD CHAIN TEMPERATURE ZONES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden border border-slate-800">
          <SectionHeading
            light
            badge="Precision Temperature Control"
            title="Validated Multi-Zone Cold Chain Parameters"
            description="Our fleets and terminals support strict thermal validation from sub-zero cryogenics to controlled room temperatures."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {tempZones.map((zone) => (
              <div
                key={zone.id}
                onClick={() => setSelectedZone(zone.id)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                  selectedZone === zone.id
                    ? 'bg-primary-900/40 border-primary-500 shadow-lg'
                    : 'bg-slate-800/60 border-slate-700 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/20 text-primary-300 flex items-center justify-center">
                    <Thermometer className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                    {zone.badge}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{zone.title}</h4>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">{zone.desc}</p>
                <div className="space-y-1 text-[11px] text-slate-400 border-t border-slate-700/80 pt-3">
                  {zone.safeguards.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-primary-400"></span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE FREIGHT & TRANSIT CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-soft p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Form Left */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Freight Transit & Compliance Estimator
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Configure your cargo requirements to preview standard routing transit times and compliance documentation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Mode of Transport</label>
                  <select
                    value={calcTransport}
                    onChange={(e) => {
                      setCalcTransport(e.target.value);
                      if (e.target.value === 'air') setEstimatedTransit('24 - 48 Hours');
                      if (e.target.value === 'road') setEstimatedTransit('3 - 5 Days Continental');
                      if (e.target.value === 'sea') setEstimatedTransit('14 - 24 Days Maritime');
                    }}
                    className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="air">Air Freight (Express Critical)</option>
                    <option value="road">Land / Road (Climate Fleet)</option>
                    <option value="sea">Ocean / Sea (FCL/LCL Reefer)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Thermal Zone Target</label>
                  <select
                    value={calcTemp}
                    onChange={(e) => setCalcTemp(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="2-8">+2°C to +8°C Cold Chain</option>
                    <option value="15-25">+15°C to +25°C Controlled Ambient</option>
                    <option value="sub20">-20°C Frozen Goods</option>
                    <option value="sub80">-80°C Ultra-Low Cryo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Estimated Consignment Weight</label>
                  <select
                    value={calcWeight}
                    onChange={(e) => setCalcWeight(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="100">Under 100 kg (Clinical Sample / Small Batch)</option>
                    <option value="500">100 kg - 1,000 kg (Standard Pallet / Clinic)</option>
                    <option value="5000">1,000 kg - 10,000 kg (Multi-Pallet / Bulk Hospital)</option>
                    <option value="container">Full 20ft / 40ft Reefer Container</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Regulatory Filing</label>
                  <input
                    type="text"
                    disabled
                    value="Expedited Green Customs Included"
                    className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-100 text-slate-500 cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Preview Card Right */}
            <div className="lg:col-span-5 bg-navy-950 text-white rounded-2xl p-6 sm:p-7 border border-navy-800 space-y-5">
              <div className="flex items-center justify-between border-b border-navy-800 pb-4">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Projected Logistics SLA</span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Guaranteed Cold Chain
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Estimated Door-to-Door:</span>
                  <span className="text-lg font-bold text-white">{estimatedTransit}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Active Temperature Range:</span>
                  <span className="font-semibold text-primary-300">
                    {calcTemp === '2-8' ? '+2°C to +8°C' : calcTemp === '15-25' ? '+15°C to +25°C' : calcTemp === 'sub20' ? '-20°C Frozen' : '-80°C Cryo'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Data Logger Telematics:</span>
                  <span className="font-semibold text-white">Continuous GPS & Thermal Sync</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Customs Clearance Lane:</span>
                  <span className="font-semibold text-emerald-400">Direct Medical Priority</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenQuote(`Logistics Quote: ${calcTransport.toUpperCase()} Freight (${calcTemp})`)}
                  className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-white bg-primary-600 hover:bg-primary-500 active:bg-primary-700 transition-colors shadow-md text-center block"
                >
                  Book Priority Shipment Review
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PHARMACY & MEDICINE DISTRIBUTION NETWORK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 sm:p-12 border border-blue-200/60">
          <div className="max-w-3xl space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Medicines & Pharmacy Dispensing Logistics Network
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We connect pharmaceutical manufacturers and institutional buyers directly with local hospital pharmacies and retail chains. Our specialized track-and-trace system prevents counterfeit medications while enabling automated daily stock replenishment with guaranteed shelf-life validity.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary-600" /> Daily hospital formulary restocking</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary-600" /> Controlled narcotics security protocol</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary-600" /> Automated ERP API integration</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
