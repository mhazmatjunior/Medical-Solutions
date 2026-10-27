import React, { useState } from 'react';
import { 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Download, 
  X, 
  Search, 
  Layers, 
  Building2, 
  Package, 
  ArrowRight,
  Filter
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { healthProducts } from '../data/servicesData';

export default function Health({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    'All',
    'Medical Equipments',
    'Medical Devices',
    'Consumable + Disposable',
    'Pharmacies / Corporate'
  ];

  const filteredProducts = healthProducts.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.application.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* PAGE HERO */}
      <section className="relative pt-8 pb-14 bg-gradient-to-b from-navy-950 via-teal-950 to-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <h1 className="text-3xl sm:text-5xl lg:text-5.5xl font-extrabold tracking-tight leading-tight">
              Hospital Equipments, Medical Devices & Clinical Consumables
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed font-normal">
              Direct institutional procurement for hospital networks, surgical theaters, and corporate enterprises: from ICU life-support hardware to high-volume sterile consumables and pharmacy contracts.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-4">
              <button
                onClick={() => onOpenQuote('Health Supplies')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm bg-teal-600 hover:bg-teal-500 active:bg-teal-700 transition-colors shadow-lg shadow-teal-600/30 flex items-center justify-center gap-2"
              >
                <span>Request Equipment & Consumable Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#catalog"
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-colors text-center"
              >
                Browse Product Catalog
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 CORE HEALTHCARE VERTICALS (Derived directly from note) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Complete Healthcare Supplies"
          title="The Four Healthcare Supply Verticals"
          description="Everything your facility requires from certified capital machinery to daily patient care disposables."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Medical Equipments",
              desc: "Diagnostic imaging, ICU patient monitors, surgical suites, and life support systems.",
              icon: Activity,
              badge: "Capital Hardware"
            },
            {
              title: "Medical Devices",
              desc: "Infusion pumps, syringe drivers, biphasic AED defibrillators, and point-of-care telemetry.",
              icon: Package,
              badge: "Precision Tech"
            },
            {
              title: "Consumable + Disposable",
              desc: "Sterile surgical kits, gowns, nitrile gloves, IV sets, syringes, and clinical wound dressings.",
              icon: Layers,
              badge: "High Volume"
            },
            {
              title: "Pharmacies / Corporate",
              desc: "Wholesale hospital formulary replenishment, corporate occupational health, and first aid.",
              icon: Building2,
              badge: "Enterprise Supply"
            }
          ].map((v, i) => {
            const Icon = v.icon;
            return (
              <div 
                key={i}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-premium transition-all hover:border-teal-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {v.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setActiveCategory(v.title);
                      const el = document.getElementById('catalog');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-teal-600 hover:text-teal-700 flex items-center gap-1"
                  >
                    Filter this category &rarr;
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* INTERACTIVE PRODUCT CATALOG */}
      <section id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Product Catalog"
          title="Certified Medical Hardware & Supply Items"
          description="Browse our primary healthcare inventory. Contact our procurement desk for bulk volume pricing and institutional tenders."
        />

        {/* Filter & Search Bar */}
        <div className="bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-soft mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-semibold shrink-0 whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search catalog..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/95 text-slate-800 backdrop-blur-md">
                    {prod.category}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-2">
                    {prod.name}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {prod.tagline}
                  </p>
                  <div className="text-[11px] font-medium text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Primary Use:</span>
                    {prod.application}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 space-y-2">
                <button
                  onClick={() => setSelectedProduct(prod)}
                  className="w-full py-2 rounded-xl text-xs font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200/60 transition-colors"
                >
                  View Datasheet & Specs
                </button>
                <button
                  onClick={() => onOpenQuote(`Procurement Quote: ${prod.name}`)}
                  className="w-full py-2 rounded-xl text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors"
                >
                  Request Batch Pricing
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNICAL SPECIFICATION MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full border border-slate-200 overflow-hidden animate-fadeIn">
            <div className="relative h-48 overflow-hidden">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-4 text-white">
                <span className="text-xs font-semibold text-teal-300 uppercase block">
                  {selectedProduct.category}
                </span>
                <h3 className="text-lg font-bold">{selectedProduct.name}</h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Technical Specifications:</h4>
                <div className="space-y-1.5 text-xs text-slate-600">
                  {selectedProduct.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-600 space-y-1">
                <div><strong>Clinical Application:</strong> {selectedProduct.application}</div>
                <div><strong>Compliance:</strong> ISO 13485:2016, CE Medical Device Regulation (MDR)</div>
                <div><strong>Standard Packaging:</strong> Hospital bulk cartons / Individual sterile peel packs</div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => {
                    const prodName = selectedProduct.name;
                    setSelectedProduct(null);
                    onOpenQuote(`Quote Request: ${prodName}`);
                  }}
                  className="flex-1 py-2.5 rounded-xl font-semibold text-xs text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm text-center"
                >
                  Request Official Quotation
                </button>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CORPORATE PHARMACY & INSTITUTIONAL SUPPLY BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-900 to-navy-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-teal-800 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Direct Wholesale Formulary Supply for Pharmacy Networks
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Medical Solutions manages direct manufacturer pricing contracts for hospital networks, corporate wellness initiatives, and large pharmacy groups. We ensure guaranteed expiry buffers, batch trace authenticity, and integrated warehouse replenishment.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenQuote('Health Supplies: Corporate Pharmacy Contract')}
                className="px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-teal-500 hover:bg-teal-400 text-slate-950 transition-colors font-bold shadow-md"
              >
                Inquire About Wholesale Contracts
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
