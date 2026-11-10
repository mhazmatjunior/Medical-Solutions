// Comprehensive data models for Afra National Co.

export const companyDetails = {
  name: "Afra National Co.",
  tagline: "Integrated Logistics Solutions & Pharmacy Healthcare Distribution",
  phone: "+1 (800) 482-9012",
  emergencyHotline: "+1 (800) 911-AFRA",
  email: "inquiries@afranational.com",
  procurementEmail: "supply@afranational.com",
  headquarters: "Afra National Tower, Business Bay, Commercial District",
  operatingHours: "24/7 Operations & Distribution Center",
  certifications: [
    "ISO 9001:2015 Quality Management Systems",
    "Licensed Customs Brokerage & Port Clearance",
    "GDP (Good Distribution Practice) Certified Storage",
    "National Ministry of Health Pharmacy Wholesale License"
  ]
};

// 1. COMPREHENSIVE LOGISTICS SERVICES (Core Pillar 1: Full-range commercial logistics)
export const logisticsServices = [
  {
    id: "ocean-freight",
    title: "Ocean Freight",
    category: "Maritime Shipping",
    shortDesc: "End-to-end maritime container shipping connecting major global shipping lines with regional seaports.",
    features: [
      "Full Container Load (FCL) and Less than Container Load (LCL) consolidation",
      "Standard dry containers, high-cube, open-top, and flat-rack equipment",
      "Port-to-port and door-to-door multimodal freight management",
      "Real-time vessel tracking and automated documentation processing"
    ],
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    badge: "Global Ocean Lines"
  },
  {
    id: "air-freight",
    title: "Air Freight",
    category: "Air Cargo & Express",
    shortDesc: "Fast, reliable international air cargo services with dedicated commercial airline allocations and charter solutions.",
    features: [
      "Express air shipping for high-value and time-sensitive cargo",
      "Scheduled consolidation services across international airport hubs",
      "Airport-to-airport and door-to-door priority delivery",
      "IATA certified handling, dangerous goods (DG) compliance, and cargo security"
    ],
    image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=80",
    badge: "Express Air Cargo"
  },
  {
    id: "customs-clearance",
    title: "Customs Clearance",
    category: "Regulatory Brokerage",
    shortDesc: "Licensed customs brokerage ensuring fast border clearance, tariff optimization, and regulatory compliance.",
    features: [
      "Licensed in-house customs brokers operating at air, sea, and land borders",
      "Accurate HS code classification and duty calculation",
      "Pre-clearance documentation processing to eliminate demurrage fees",
      "Import/export permit handling and governmental agency coordination"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    badge: "Zero-Delay Customs"
  },
  {
    id: "road-transportation",
    title: "Road Transportation",
    category: "Domestic & Cross-Border",
    shortDesc: "Modern fleet of commercial trucks and haulage vehicles delivering flexible domestic distribution and cross-border transport.",
    features: [
      "Full truckload (FTL) and less-than-truckload (LTL) scheduled routes",
      "Heavy haulage, flatbeds, box trailers, and curtain-siders",
      "GPS-monitored fleet with real-time transit visibility and route optimization",
      "Last-mile distribution to retail hubs, commercial warehouses, and ports"
    ],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    badge: "Extensive Fleet"
  },
  {
    id: "warehousing-storage",
    title: "Warehousing & Storage",
    category: "Storage Solutions",
    shortDesc: "Secure, scalable warehouse facilities offering palletized storage, inventory management, and pick-and-pack fulfillment.",
    features: [
      "Modern racked storage space, ambient warehousing, and secure storage yards",
      "Advanced Warehouse Management System (WMS) with live inventory visibility",
      "Order fulfillment, cross-docking, palletizing, and labeling services",
      "24/7 CCTV surveillance, fire suppression, and strict access controls"
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    badge: "Scalable Warehousing"
  }
];

// 2. PHARMACY & HEALTHCARE PRODUCTS DIVISION (Core Pillar 2)
export const pharmacyServices = [
  {
    id: "pharmacy-retail",
    title: "Retail & Commercial Pharmacy",
    category: "Pharmacy Operations",
    shortDesc: "Professional retail pharmacy stores and commercial dispensary operations delivering prescription medications and OTC wellness.",
    features: [
      "Licensed community pharmacy outlets with computerized dispensing systems",
      "Comprehensive prescription medicine dispensing and pharmacist consultation",
      "Over-the-counter (OTC) health, wellness, and personal care sections",
      "Digital prescription management and automated patient refill programs"
    ],
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=80",
    badge: "Retail Outlets"
  },
  {
    id: "healthcare-products",
    title: "Healthcare & Wellness Products",
    category: "Consumer Healthcare",
    shortDesc: "Extensive portfolio of vitamins, nutritional supplements, personal diagnostics, and daily healthcare essentials.",
    features: [
      "Certified vitamins, dietary supplements, and immune wellness formulations",
      "Home diagnostic devices: digital blood pressure monitors, glucometers, and oximeters",
      "Mother & baby care, skin health, and therapeutic personal hygiene lines",
      "Strict manufacturer origin verification and regulatory compliance testing"
    ],
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80",
    badge: "Consumer Health"
  },
  {
    id: "pharmacy-distribution",
    title: "Wholesale Pharmacy Distribution",
    category: "B2B Supply Network",
    shortDesc: "Direct wholesale distribution pipeline supplying licensed community pharmacies, polyclinics, and healthcare retailers.",
    features: [
      "Direct manufacturer sourcing partnerships with verified authenticity",
      "Batch-tracked delivery ensuring consistent stock availability and expiry management",
      "Bulk institutional purchasing agreements and wholesale commercial credit terms",
      "Rapid replenishment network with temperature-controlled local distribution"
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    badge: "B2B Wholesale"
  },
  {
    id: "medical-consumables",
    title: "Medical Consumables & Supplies",
    category: "Essential Supplies",
    shortDesc: "High-volume sterile disposables, PPE, wound care dressings, and clinical essentials for clinics and healthcare providers.",
    features: [
      "Surgical gloves, masks, sterile gauze, syringes, and medical tape",
      "CE & ISO certified wound management and antiseptic supplies",
      "Reliable bulk inventory buffering against market shortages",
      "Quality certified supplies for clinics, dental centers, and commercial facilities"
    ],
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=1000&q=80",
    badge: "Sterile Supplies"
  }
];

// Product catalog for Pharmacy & Healthcare
export const healthProducts = [
  {
    id: "pharma-01",
    name: "Essential Multivitamins & Minerals Complex",
    category: "Vitamins & Supplements",
    tagline: "High-absorption daily immune & energy formula",
    specs: ["Box of 60 Capsules", "GMP Certified", "Ministry of Health Approved", "Contains Vit C, D3, Zinc, B-Complex"],
    application: "Daily wellness & preventive health",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80",
    inStock: true
  },
  {
    id: "pharma-02",
    name: "Digital Arm Blood Pressure Monitor",
    category: "Home Diagnostics & Care",
    tagline: "Clinical accuracy with one-touch automated measurement",
    specs: ["Dual-user 120-reading memory", "Irregular heartbeat detector", "Wide-range cuff (22-42 cm)", "FDA & CE Approved"],
    application: "Hypertension management & home vital tracking",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
    inStock: true
  },
  {
    id: "pharma-03",
    name: "Medical Grade Nitrile Examination Gloves",
    category: "Medical Consumables",
    tagline: "Powder-free, chemical chemotherapy tested examination gloves",
    specs: ["Box of 200 gloves", "AQL 1.5 medical grade standard", "Sizes: S, M, L, XL", "Puncture resistant synthetic polymer"],
    application: "Pharmacies, clinics, and diagnostic labs",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    inStock: true
  },
  {
    id: "pharma-04",
    name: "Community Pharmacy Wholesale Supply Contract",
    category: "Pharmacy Operations",
    tagline: "Tier-1 direct wholesale replenishment for retail pharmacy networks",
    specs: ["Direct manufacturer pricing", "Guaranteed 18+ month batch expiry", "Daily local replenishment delivery", "Full Certificate of Analysis"],
    application: "Independent pharmacies & retail drugstore chains",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80",
    inStock: true
  }
];

// Manpower roles (retained for auxiliary support & references)
export const manpowerRoles = [
  {
    id: "healthcare-pharmacists",
    category: "Pharmacy & Healthcare",
    title: "Licensed Pharmacists & Dispensers",
    subtitle: "Registered pharmacists qualified for commercial dispensaries, patient counseling, and inventory custody.",
    qualifications: ["Bachelor of Pharmacy (B.Pharm / Pharm.D)", "Active state pharmacy practice license", "Drug interaction screening expertise", "Inventory ERP software proficiency"],
    rolesAvailable: ["Community Dispensary Pharmacists", "Wholesale Distribution Supervisors", "Clinical Hospital Dispensers", "Pharmacy Technicians"],
    deploymentTypes: ["Permanent Placement", "Turnkey Pharmacy Staffing", "Contract Rotations"],
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "logistics-specialists",
    category: "Logistics Operations",
    title: "Logistics & Warehouse Operations Crew",
    subtitle: "Certified forklift operators, customs expediters, and warehouse distribution specialists.",
    qualifications: ["Certified material handling equipment operators", "Customs declaration documentation experience", "WMS barcode system fluency", "Occupational safety compliant"],
    rolesAvailable: ["Warehouse Supervisors", "Licensed Customs Document Handlers", "Forklift & Reach-Truck Drivers", "Distribution Dispatchers"],
    deploymentTypes: ["Facility Annual Operations", "Seasonal Volume Surge Crew", "Direct Placement"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
  }
];

// Rental fleet (retained for auxiliary support & references)
export const rentalFleet = [
  {
    id: "logistics-fleet-dry",
    title: "Commercial Box Trucks & Haulage Trailers",
    category: "Commercial Transport",
    description: "Modern commercial transport vehicles available on flexible short and long-term lease terms.",
    specs: ["Payloads: 3.5-ton, 7.5-ton, and 40-foot articulated trailers", "Hydraulic tail-lifts for rapid curbside pallet loading", "GPS telematics with live route tracking", "Comprehensive vehicle maintenance included"],
    terms: "Daily, Monthly, or Multi-Year Corporate Lease",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=80",
    status: "Available for Dispatch"
  },
  {
    id: "logistics-fleet-temp",
    title: "Refrigerated & Climate-Controlled Trucks",
    category: "Commercial Transport",
    description: "Calibrated temperature-controlled vehicles certified for pharmaceutical and perishable cargo.",
    specs: ["Carrier / Thermo King cooling units (2°C to 8°C & 15°C to 25°C)", "Live telematics temperature logging with automated alerts", "Multi-zone temperature dividers", "Pharma GDP compliant insulation"],
    terms: "Dedicated Route Contracts & Fleet Leasing",
    image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1000&q=80",
    status: "Ready for Deployment"
  }
];

export const clientStats = [
  { label: "Annual Freight Shipments", value: "85K+", sub: "Air, ocean & road shipments" },
  { label: "Storage Capacity", value: "120,000+", sub: "Sq. meters of warehousing" },
  { label: "Pharmacy Network Outlets", value: "450+", sub: "Pharmacies & retailers served" },
  { label: "Healthcare Product Lines", value: "3,200+", sub: "Authentic SKUs in distribution" },
];

export const corporateValues = [
  {
    title: "End-to-End Reliability",
    desc: "From port-side vessel unloading to retail pharmacy shelf delivery, we manage every step with strict accountability."
  },
  {
    title: "Regulatory Compliance",
    desc: "Licensed customs brokerage and certified pharmaceutical wholesale distribution adhering to national standards."
  },
  {
    title: "Commercial Scalability",
    desc: "Flexible freight capacity, modern warehousing, and high-volume product distribution tailored to your business growth."
  },
  {
    title: "Customer-First Execution",
    desc: "Dedicated account managers, real-time shipment visibility, and responsive commercial terms."
  }
];

export const testimonials = [
  {
    quote: "Afra National Co. handled our international ocean container shipments and customs clearance with zero delays. Their freight transparency and warehousing standards are outstanding.",
    author: "Omar Al-Khatib",
    role: "Supply Chain Director",
    org: "Trans-Regional Trade Group"
  },
  {
    quote: "As an independent community pharmacy chain, their wholesale distribution network keeps our shelves stocked with certified medications and wellness brands without inventory stockouts.",
    author: "Nadia Farooq",
    role: "Head of Procurement",
    org: "Apex Retail Pharmacies"
  },
  {
    quote: "Their express air cargo and licensed customs brokers navigated urgent commercial cargo through the border smoothly. Reliable partners who deliver on their commitments.",
    author: "David Miller",
    role: "Operations VP",
    org: "Global Logistics Alliance"
  }
];
