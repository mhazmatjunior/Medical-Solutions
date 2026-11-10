import React, { useState } from 'react';
import { 
  Truck, 
  Ship, 
  Plane, 
  Warehouse, 
  FileCheck, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Globe2,
  Box,
  Layers,
  MapPin
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { logisticsServices } from '../data/servicesData';

export default function Logistics({ onOpenQuote }) {
  const [calcTransport, setCalcTransport] = useState('ocean');
  const [cargoType, setCargoType] = useState('fcl');
  const [calcWeight, setCalcWeight] = useState('container');
  const [estimatedTransit, setEstimatedTransit] = useState('14 - 24 Days Maritime');

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* PAGE HERO */}
      <section className="relative pt-8 pb-14 bg-gradient-to-b from-primary-950 via-navy-900 to-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-bold tracking-widest uppercase border border-primary-500/30">
              <Truck className="w-3.5 h-3.5" />
              <span>AFRA NATIONAL LOGISTICS DIVISION</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Comprehensive Logistics & Global Supply Chain Solutions
            </h1>

            <p className="text-xs sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal">
              A full-spectrum logistics solution provider: from maritime containerized Ocean Freight and express Air Cargo to border Customs Clearance, domestic Road Haulage, and scalable modern Warehousing.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-4">
              <button
                onClick={() => onOpenQuote('Comprehensive Logistics')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-primary-600 hover:bg-primary-500 active:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Freight & Logistics Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#services-breakdown"
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-colors text-center"
              >
                Explore 5 Core Service Lines
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5 CORE LOGISTICS SERVICES */}
      <section id="services-breakdown" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Global Transport Network"
          title="Integrated Logistics Capabilities"
          description="Five dedicated operational branches engineered to move commercial cargo safely, optimize tariffs, and deliver on schedule."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100/80 border border-primary-200/60 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Request Route & Rate Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* 6th Card: Customs & Brokerage Guarantee */}
          <div className="bg-gradient-to-br from-primary-900 to-navy-950 rounded-2xl p-6 sm:p-7 text-white flex flex-col justify-between border border-primary-800 shadow-soft">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary-300">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Licensed In-House Customs Brokerage</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our licensed customs team operates across primary sea, air, and border customs gates, accelerating cargo release and ensuring absolute regulatory compliance.
              </p>
              <div className="space-y-1.5 text-xs text-primary-200 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Pre-clearance documentation filing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Customs duty & tariff optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Elimination of port demurrage costs</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onOpenQuote('Logistics: Customs Clearance')}
                className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-white text-navy-950 hover:bg-slate-100 transition-colors shadow-sm text-center cursor-pointer"
              >
                Consult With Customs Broker
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE FREIGHT & TRANSIT ESTIMATOR */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-soft p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Form Left */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Freight Transit & Route Estimator
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">
                  Configure your consignment profile to review projected routing schedules, handling modes, and customs support.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Mode of Transport</label>
                  <select
                    value={calcTransport}
                    onChange={(e) => {
                      setCalcTransport(e.target.value);
                      if (e.target.value === 'air') setEstimatedTransit('24 - 72 Hours Air Cargo');
                      if (e.target.value === 'road') setEstimatedTransit('2 - 5 Days Interstate Haulage');
                      if (e.target.value === 'ocean') setEstimatedTransit('14 - 24 Days Maritime Vessel');
                      if (e.target.value === 'storage') setEstimatedTransit('Immediate Staging & Dispatch');
                    }}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="ocean">Ocean Freight (FCL / LCL Container)</option>
                    <option value="air">Air Freight (Express Scheduled Cargo)</option>
                    <option value="road">Road Transport (FTL / LTL Trucking)</option>
                    <option value="storage">Warehousing & Storage Fulfillment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Cargo Classification</label>
                  <select
                    value={cargoType}
                    onChange={(e) => setCargoType(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="fcl">Standard Commercial Goods & Dry Cargo</option>
                    <option value="consumer">Consumer Packaged Goods & Retail Stock</option>
                    <option value="machinery">Heavy Industrial Machinery & Equipment</option>
                    <option value="pharma">Pharmaceutical & Healthcare Products</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Consignment Volume / Size</label>
                  <select
                    value={calcWeight}
                    onChange={(e) => setCalcWeight(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="pallet">LCL / Less-than-Truckload (1 - 10 Pallets)</option>
                    <option value="ftl">Full Truckload (FTL 24-Ton Trailer)</option>
                    <option value="container">Full 20ft / 40ft Standard Shipping Container</option>
                    <option value="multicontainer">Multiple Containers / Bulk Project Cargo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Customs Brokerage</label>
                  <input
                    type="text"
                    disabled
                    value="Licensed Border Clearance Included"
                    className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-100 text-slate-500 cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Preview Card Right */}
            <div className="lg:col-span-5 bg-navy-950 text-white rounded-2xl p-6 sm:p-7 border border-navy-800 space-y-4">
              <div className="flex items-center justify-between border-b border-navy-800 pb-3">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Projected Logistics SLA</span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-500/20 text-primary-300 border border-primary-500/30">
                  Confirmed SLA
                </span>
              </div>

              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-slate-400">Estimated Transit Schedule:</span>
                  <span className="text-base sm:text-lg font-bold text-white">{estimatedTransit}</span>
                </div>
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-slate-400">Cargo Management:</span>
                  <span className="font-semibold text-primary-300 capitalize">
                    {cargoType === 'fcl' ? 'General Commercial' : cargoType === 'consumer' ? 'Packaged Retail' : cargoType === 'machinery' ? 'Heavy Machinery' : 'Healthcare Supply'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-slate-400">Tracking & Telematics:</span>
                  <span className="font-semibold text-white">Full Vessel / GPS Satellite Sync</span>
                </div>
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-slate-400">Customs Channel:</span>
                  <span className="font-semibold text-emerald-400">Fast-Track Green Channel</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenQuote(`Logistics Quote: ${calcTransport.toUpperCase()} Freight (${cargoType})`)}
                  className="w-full py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm text-white bg-primary-600 hover:bg-primary-500 active:bg-primary-700 transition-colors shadow-md text-center block cursor-pointer"
                >
                  Book Commercial Route Review
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WAREHOUSING & STORAGE CAPABILITIES */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 to-navy-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800">
          <div className="max-w-3xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-primary-500/20 text-primary-400 flex items-center justify-center">
              <Warehouse className="w-5 h-5" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              120,000+ Sq. Meters of Strategic Warehousing & Distribution Hubs
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm sm:text-base leading-relaxed">
              Our modern warehousing hubs feature heavy-duty racking, dedicated cross-docking loading bays, electronic inventory WMS integration, and 24/7 security. We provide commercial storage buffers for manufacturers, importers, and regional distributors.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary-400" /> High-bay pallet racking</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary-400" /> Real-time WMS inventory portal</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary-400" /> Order pick, pack & labeling</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary-400" /> 24/7 fire suppression & surveillance</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
