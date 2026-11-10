import React, { useState } from 'react';
import { 
  Pill, 
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
  Filter,
  ShoppingBag,
  Heart,
  Thermometer,
  Sparkles
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { pharmacyServices } from '../data/servicesData';

export default function Health({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    'All',
    'Pharmacy & OTC Medicines',
    'Vitamins & Supplements',
    'Home Diagnostics & Care',
    'Medical Consumables'
  ];

  // Practical consumer healthcare & pharmacy catalog
  const pharmacyProducts = [
    {
      id: "pharma-01",
      name: "Essential Multivitamins & Minerals Complex",
      category: "Vitamins & Supplements",
      tagline: "High-absorption daily immune & energy formula",
      desc: "Authorized distribution of daily wellness vitamins, formulated with Vitamin C, D3, Zinc, and B-complex for daily vitality.",
      packaging: "Box of 60 Capsules (Child-Proof Cap)",
      compliance: "GMP Certified, Ministry Approved",
      availability: "In Stock - Wholesale & Retail"
    },
    {
      id: "pharma-02",
      name: "Digital Arm Blood Pressure Monitor",
      category: "Home Diagnostics & Care",
      tagline: "Clinically validated oscillometric blood pressure monitor",
      desc: "Compact home diagnostic unit with large LCD backlit display, irregular heartbeat detector, and 120-reading dual memory.",
      packaging: "Individual Box with Universal Cuff (22-42cm)",
      compliance: "CE 0123 / FDA Cleared",
      availability: "Immediate Delivery"
    },
    {
      id: "pharma-03",
      name: "Nitrile Examination Medical Gloves",
      category: "Medical Consumables",
      tagline: "Powder-free, textured fingertips for non-sterile and exam use",
      desc: "Tear-resistant medical grade nitrile gloves providing barrier protection for clinics, pharmacies, and food handling.",
      packaging: "Dispenser Box of 100 Gloves (Cases of 10 Boxes)",
      compliance: "EN 455 Parts 1-4, ASTM D6319",
      availability: "High Volume Stock"
    },
    {
      id: "pharma-04",
      name: "Infrared No-Touch Forehead Thermometer",
      category: "Home Diagnostics & Care",
      tagline: "1-second hygienic non-contact temperature measurement",
      desc: "Accurate clinical infrared sensor with color-coded fever alarm, mute mode for night checks, and memory recall.",
      packaging: "Retail Packaged Unit with Batteries Included",
      compliance: "ISO 13485 / CE Approved",
      availability: "In Stock"
    },
    {
      id: "pharma-05",
      name: "Advanced OTC Pain Relief & Antipyretic Tablets",
      category: "Pharmacy & OTC Medicines",
      tagline: "Fast-acting paracetamol 500mg formulation",
      desc: "Licensed commercial pharmacy supply of essential antipyretic tablets for mild to moderate pain relief and fever reduction.",
      packaging: "Blister Pack of 24 Tablets (Cartons of 48 Packs)",
      compliance: "National Drug Authority Registered",
      availability: "Licensed Pharmacy Wholesale"
    },
    {
      id: "pharma-06",
      name: "Sterile Adhesive Wound Dressing & Island Pads",
      category: "Medical Consumables",
      tagline: "Breathable post-surgical and acute wound protection",
      desc: "Gentle hypo-allergenic adhesive with non-stick absorbent central pad, promoting undisturbed healing.",
      packaging: "Box of 50 Individually Wrapped Dressings",
      compliance: "CE Marked Sterile EO",
      availability: "In Stock"
    },
    {
      id: "pharma-07",
      name: "Omega-3 Pure Deep Sea Fish Oil 1000mg",
      category: "Vitamins & Supplements",
      tagline: "Cardiovascular and cognitive health support softgels",
      desc: "Purified molecularly distilled fish oil rich in EPA and DHA fatty acids with natural lemon flavor to prevent aftertaste.",
      packaging: "Bottle of 120 Softgels",
      compliance: "Heavy Metal Tested, Halal Certified",
      availability: "In Stock"
    },
    {
      id: "pharma-08",
      name: "Antiseptic Povidone Iodine 10% Solution",
      category: "Pharmacy & OTC Medicines",
      tagline: "Broad-spectrum topical microbicidal skin preparation",
      desc: "Essential first-aid antiseptic for wound cleaning, minor cuts, burns, and general pre-operative skin prep.",
      packaging: "500ml Bottle with Precision Pour Cap",
      compliance: "BP / USP Grade Formulation",
      availability: "Bulk Wholesale Supply"
    }
  ];

  const filteredProducts = pharmacyProducts.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* PAGE HERO */}
      <section className="relative pt-8 pb-14 bg-gradient-to-b from-navy-950 via-teal-950 to-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold tracking-widest uppercase border border-teal-500/30">
              <Pill className="w-3.5 h-3.5" />
              <span>AFRA NATIONAL PHARMACY & HEALTHCARE DIVISION</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Pharmacy Operations, Healthcare Products & Wholesale Distribution
            </h1>

            <p className="text-xs sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal">
              A trusted commercial healthcare partner operating licensed community pharmacies, distributing authentic consumer wellness brands, and providing wholesale pharmaceutical supplies to retailers and clinics.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-4">
              <button
                onClick={() => onOpenQuote('Pharmacy & Healthcare')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-teal-600 hover:bg-teal-500 active:bg-teal-700 transition-colors shadow-lg shadow-teal-600/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Wholesale Catalog & Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#catalog"
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-colors text-center"
              >
                Browse Product Lines
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 CORE PHARMACY PILLARS */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Division Capabilities"
          title="Our Pharmacy & Distribution Services"
          description="Connecting global healthcare manufacturers with local pharmacies, retailers, and end consumers through authentic, licensed channels."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pharmacyServices.map((v, i) => (
            <div 
              key={i}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-premium transition-all hover:border-teal-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                    <Pill className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {v.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{v.shortDesc}</p>

                <div className="space-y-1.5 border-t border-slate-100 pt-3">
                  {v.features.slice(0, 2).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                      <CheckCircle2 className="w-3 h-3 text-teal-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <button
                  onClick={() => onOpenQuote(`Pharmacy Inquiry: ${v.title}`)}
                  className="text-xs font-semibold text-teal-700 hover:text-teal-800 flex items-center gap-1 cursor-pointer"
                >
                  Inquire this service &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT CATALOG & INVENTORY PORTFOLIO */}
      <section id="catalog" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Product Catalog"
          title="Authentic Healthcare & Pharmacy Inventory"
          description="Browse sample items from our active distribution portfolio. Contact our commercial team for full bulk order lists and wholesale accounts."
        />

        {/* Filter & Search Bar */}
        <div className="bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-soft mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products by name or type..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-soft hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {prod.category}
                  </span>
                  <span className="text-[10px] font-medium text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">{prod.tagline}</p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {prod.desc}
                </p>

                <div className="space-y-1 text-[11px] text-slate-500 border-t border-slate-100 pt-3">
                  <div><strong>Packaging:</strong> {prod.packaging}</div>
                  <div><strong>Standard:</strong> {prod.compliance}</div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => onOpenQuote(`Product Inquiry: ${prod.name}`)}
                  className="w-full py-2 rounded-xl text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors cursor-pointer"
                >
                  Inquire Wholesale Pricing
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PHARMACY DISTRIBUTION GUARANTEE BANNER */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-teal-800">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-300">
              COMMERCIAL PHARMACY PARTNERSHIPS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Looking to Expand Your Product Reach or Source Authentic Supplies?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              We partner with global healthcare brand owners seeking regional distribution and independent pharmacies seeking dependable wholesale fulfillment.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote('Pharmacy Distribution Partnership')}
            className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow-sm shrink-0 cursor-pointer"
          >
            Contact Pharmacy Desk
          </button>
        </div>
      </section>

    </div>
  );
}
