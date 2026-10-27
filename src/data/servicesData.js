// Comprehensive data models for Medical Solutions services

export const companyDetails = {
  name: "Medical Solutions",
  tagline: "Integrated Healthcare, Supply Chain & Workforce Infrastructure",
  phone: "+1 (800) 482-9012",
  emergencyHotline: "+1 (800) 911-MEDS",
  email: "inquiries@medicalsolutions-global.com",
  procurementEmail: "supply@medicalsolutions-global.com",
  headquarters: "450 Medical Center Boulevard, Suite 1200, Innovation District",
  operatingHours: "24/7/365 Rapid Response Operations",
  certifications: [
    "ISO 13485:2016 Medical Devices Quality Management",
    "GDP (Good Distribution Practice) Certified Cold Chain",
    "WHO-Compliant Emergency Response Protocols",
    "JCI (Joint Commission International) Partner Standards"
  ]
};

export const logisticsServices = [
  {
    id: "ocean-freight",
    title: "Ocean / Sea Freight",
    category: "Maritime Logistics",
    shortDesc: "Temperature-controlled maritime container logistics engineered for bulk pharmaceutical shipments, hospital furniture, and heavy diagnostic machinery.",
    features: [
      "Reefer temperature control (-25°C to +25°C) with dual redundant compressors",
      "Real-time IoT satellite telematics monitoring humidity, temperature, and shock",
      "Full Container Load (FCL) and Less than Container Load (LCL) pharma consolidation",
      "Dedicated port-side cold corridors at major international shipping terminals"
    ],
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    badge: "Bulk & Global"
  },
  {
    id: "air-freight",
    title: "Air Freight & Charter",
    category: "Express Clinical Transit",
    shortDesc: "Time-critical and urgent air transit for high-potency biologics, emergency medical aid, vaccines, and fragile diagnostic systems.",
    features: [
      "Priority tarmac transfer and expedited runway clearance",
      "Active dry-ice (-80°C) and cryogenic liquid nitrogen shipper capabilities",
      "Dedicated full charter flights for crisis deployment and bulk hospital supply",
      "IATA CEIV Pharma certified handling protocols from departure to landing"
    ],
    image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=80",
    badge: "Time-Critical"
  },
  {
    id: "road-freight",
    title: "Land / Road Freight",
    category: "Continental Distribution",
    shortDesc: "Fleet of validated climate-controlled multi-zone vehicles providing safe inter-facility hospital logistics and nationwide pharmacy delivery.",
    features: [
      "Multi-compartment temperature trucks (+2°C to +8°C & +15°C to +25°C simultaneously)",
      "Continuous GPS route optimization with automated deviation alerts",
      "Hydraulic tail-lifts and specialized air-ride suspension for sensitive electronics",
      "Direct-to-clinic and hospital loading dock scheduled delivery networks"
    ],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    badge: "Nationwide Fleet"
  },
  {
    id: "customs-clearance",
    title: "Customs Clearance & Regulatory",
    category: "Regulatory Compliance",
    shortDesc: "Specialized pharmaceutical customs brokerage handling narcotics, restricted active ingredients, biological specimens, and medical device tariffs.",
    features: [
      "Pre-arrival document verification and priority green-channel processing",
      "FDA, CE, and national health ministry regulatory compliance management",
      "Bonded port transfers preventing customs hold temperature disruptions",
      "Comprehensive import/export duty mitigation and tariff classification"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    badge: "Zero-Delay Customs"
  },
  {
    id: "storage-terminal",
    title: "Terminal & Cold Storage Warehousing",
    category: "GDP Storage Facilities",
    shortDesc: "Strategically positioned multi-temperature warehousing hubs with continuous validation, backup generators, and cleanroom handling zones.",
    features: [
      "Multi-zone temperature vaults: Ambient, Cold (+2°C to +8°C), Frozen (-20°C), Deep Ultra (-80°C)",
      "Automated automated storage & retrieval systems (ASRS) minimizing exposure time",
      "24/7 uninterrupted power supply with dual backup diesel generators",
      "Strict serial-number tracking, GS1 barcode logging, and batch expiry surveillance"
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    badge: "GDP Validated"
  },
  {
    id: "pharmacy-distribution",
    title: "Medicine & Pharmacy Logistics",
    category: "Dispensing Logistics",
    shortDesc: "End-to-end supply chain integration connecting pharmaceutical manufacturers directly with hospital pharmacies, retail chains, and clinics.",
    features: [
      "Daily replenishment schedules for retail and institutional pharmacy chains",
      "Serialised track-and-trace compliance preventing counterfeit intrusion",
      "Reverse logistics for safe pharmaceutical recalls and disposal management",
      "Direct urgent replenishment for emergency and trauma departments"
    ],
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80",
    badge: "Direct Distribution"
  }
];

export const healthProducts = [
  {
    id: "med-equip-1",
    name: "Multi-Parameter ICU Patient Monitor Pro-X9",
    category: "Medical Equipments",
    tagline: "Continuous vital signs tracking with arrhythmia detection and cloud telemetry",
    specs: ["15.6-inch high-def anti-glare touch screen", "ECG, SpO2, NIBP, TEMP, Resp, 2-IBP", "120-hour trend review & alarms", "CE & FDA Certified"],
    application: "Intensive Care Units, Emergency Departments, Operating Suites",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
    inStock: true
  },
  {
    id: "med-equip-2",
    name: "Digital Mobile C-Arm Imaging System",
    category: "Medical Equipments",
    tagline: "High-resolution fluoroscopy for orthopedic, vascular, and spinal surgical guidance",
    specs: ["High-frequency 5kW generator", "1K x 1K digital image processor", "Ultra-low radiation dosage control", "Dual 19-inch medical grade monitors"],
    application: "Operating Theaters, Orthopedic Surgery, Trauma Centers",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
    inStock: true
  },
  {
    id: "med-device-1",
    name: "Precision Volumetric Infusion & Syringe Pump",
    category: "Medical Devices",
    tagline: "Micro-dosing intravenous medication delivery with smart dose error reduction",
    specs: ["Flow rate: 0.1 to 1500 ml/h", "Dual CPU real-time safety cross-check", "Dynamic pressure sensing & air-in-line alarm", "Drug library with 2,000+ formulations"],
    application: "Neonatal Care, Chemotherapy, Post-Operative Infusion",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80",
    inStock: true
  },
  {
    id: "med-device-2",
    name: "Automated External & Clinical Defibrillator AED-700",
    category: "Medical Devices",
    tagline: "Biphasic life-saving defibrillation with voice prompts and manual clinical override",
    specs: ["Biphasic truncated exponential waveform", "Under 7-second charging time", "Daily automated self-test diagnostics", "Integrated pediatric mode switch"],
    application: "Ambulance Units, Public Facilities, Clinical Wards",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1000&q=80",
    inStock: true
  },
  {
    id: "consumable-1",
    name: "Sterile Surgical Kits & Disposable Drape Packs",
    category: "Consumable + Disposable",
    tagline: "Impervious barrier protection designed for major orthopedic and general surgeries",
    specs: ["High-grade non-woven SMS/SMMS fabric", "Fluid collection pouches with suction ports", "100% EO gas sterilized", "Latex-free & lint-free"],
    application: "General Surgery, C-Sections, Cardiac Theaters",
    image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=1000&q=80",
    inStock: true
  },
  {
    id: "consumable-2",
    name: "Medical Grade Nitrile Examination Gloves (Box of 200)",
    category: "Consumable + Disposable",
    tagline: "Micro-textured fingertips for exceptional tactile sensitivity and chemical resistance",
    specs: ["Powder-free, chemical chemotherapy tested", "AQL 1.5 medical grade standard", "Sizes: XS, S, M, L, XL", "Puncture resistant synthetic polymer"],
    application: "Diagnostic Laboratories, Clinical Examination, ICU",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    inStock: true
  },
  {
    id: "corporate-1",
    name: "Institutional Pharmacy Formulary Supply Contract",
    category: "Pharmacies / Corporate",
    tagline: "Streamlined wholesale medicine procurement contracts for hospitals & corporate healthcare networks",
    specs: ["Direct manufacturer tier-1 pricing", "Guaranteed 18+ month expiry dates on all bulk batches", "Automated reorder triggers via ERP API", "Full Certificate of Analysis (CoA) with each lot"],
    application: "Hospital Networks, Retail Pharmacy Chains, Government Clinics",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80",
    inStock: true
  },
  {
    id: "corporate-2",
    name: "Corporate Occupational Health & Emergency First-Aid Systems",
    category: "Pharmacies / Corporate",
    tagline: "Comprehensive industrial site medical kits, first responder packs, and wellness replenishment",
    specs: ["OSHA / ANSI 2021 Class A & B compliant", "Tamper-evident waterproof industrial cases", "Quarterly scheduled restocking audits", "Included automated tele-nurse support hotline"],
    application: "Manufacturing Plants, Mining Sites, Construction, Corporate Offices",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
    inStock: true
  }
];

export const manpowerRoles = [
  {
    id: "healthcare-doctors",
    category: "Healthcare Skilled",
    title: "Specialist Physicians & Surgeons",
    subtitle: "Board-certified medical specialists, general physicians, emergency doctors, and anesthesiologists.",
    qualifications: ["MD / MBBS + Board Certification / Fellowship", "Active unrestricted practicing license", "ACLS, ATLS, BLS credentialed", "Minimum 5+ years post-residency clinical experience"],
    rolesAvailable: ["ER & Trauma Physicians", "Intensivists / Critical Care Specialists", "Anesthesiologists", "General Surgeons", "Cardiologists & Hospitalists"],
    deploymentTypes: ["Permanent Institutional Hire", "Emergency Surge Contracts", "Locum Tenens"],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "healthcare-nurses",
    category: "Healthcare Skilled",
    title: "Registered Nurses (RN & BSN)",
    subtitle: "Highly trained nursing professionals for intensive care, emergency response, surgical suites, and ward management.",
    qualifications: ["Bachelor of Science in Nursing (BSN)", "Certified in critical care nursing (CCRN/CEN)", "Proven bedside patient management", "Multilingual communication capabilities"],
    rolesAvailable: ["ICU & CCU Specialized Nurses", "Operating Room (OR) Scrub & Circulating Nurses", "Emergency Room (ER) Nurses", "Pediatric & Neonatal Nurses", "Oncology & Dialysis Nurses"],
    deploymentTypes: ["Direct Hospital Staffing", "Rotational 12-Hour Shifts", "Travel Nursing Programs"],
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "healthcare-paramedics",
    category: "Healthcare Skilled",
    title: "Paramedics & Emergency EMTs",
    subtitle: "First-response medical specialists trained in pre-hospital trauma life support and emergency ambulance dispatch.",
    qualifications: ["National Emergency Medical Technician (NREMT-P) Certified", "Advanced Pre-Hospital Trauma Life Support (PHTLS)", "EVOC certified high-speed emergency driving", "Rapid airway and cardiac management"],
    rolesAvailable: ["Flight & Critical Care Paramedics", "Advanced Life Support (ALS) Leads", "Disaster Response EMT Units", "Industrial Site Emergency Responders"],
    deploymentTypes: ["24/7 Ambulance Crewing", "Remote Industrial Sites", "Event & Mass Gathering Standby"],
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "skilled-technicians",
    category: "Skilled Labour",
    title: "Biomedical Engineers & Lab Technicians",
    subtitle: "Technical professionals ensuring hospital equipment uptime, medical laboratory diagnostics, and clinical calibration.",
    qualifications: ["Degree in Biomedical Engineering / Medical Laboratory Science", "OEM-certified for equipment servicing and troubleshooting", "ISO 17025 laboratory compliance familiarity", "Strict safety & biohazard protocol adherence"],
    rolesAvailable: ["Biomedical Equipment Technicians (BMET)", "Clinical Pathology & Diagnostic Lab Techs", "Pharmacy Technicians & Dispensers", "Hospital HVAC & Medical Gas Technicians"],
    deploymentTypes: ["Facility Annual Maintenance Contracts", "Laboratory Staff Augmentation", "Turnkey Department Setup"],
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "unskilled-labour",
    category: "Unskilled & Operational Workforce",
    title: "Hospital Orderlies, Sanitization & Support Crews",
    subtitle: "Dedicated, vetted auxiliary staff maintaining pristine hygiene, patient transit, and warehouse logistics.",
    qualifications: ["Thorough criminal background checks & drug screening", "Infection control and hazardous waste handling trained", "Patient dignity & HIPAA confidentiality trained", "Physical stamina & teamwork verified"],
    rolesAvailable: ["Hospital Patient Transport Orderlies", "Cleanroom & Sterile Processing Aides", "Biohazard Waste & Sanitization Crews", "Medical Warehouse Material Handlers & Drivers"],
    deploymentTypes: ["Turnkey Hospital Facility Staffing", "Shift-Based Workforce Contracts", "Temporary Surge Deployment"],
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=80"
  }
];

export const rentalFleet = [
  {
    id: "ambulance-als",
    title: "Advanced Life Support (ALS) Type III Ambulance",
    category: "Ambulances & Emergency Vehicles",
    description: "Fully configured mobile intensive care units equipped with cutting-edge telemetry, ventilators, defibrillators, and multi-station oxygen.",
    specs: [
      "Custom medical compartment with ducted climate control",
      "Integrated Stryker Power-LOAD cot retention system",
      "Built-in 2000W true-sine inverter & dual shore-power inlets",
      "Equipped with transport ventilator, monitor, and ALS medications safe"
    ],
    terms: "Daily, Weekly, Monthly, or Multi-Year Wet/Dry Lease",
    image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1000&q=80",
    status: "Ready for Dispatch"
  },
  {
    id: "ambulance-bls",
    title: "Basic Life Support (BLS) Patient Transport Vehicle",
    category: "Ambulances & Emergency Vehicles",
    description: "Reliable, high-efficiency transport vehicles designed for non-emergency patient transfers, inter-hospital moves, and clinic runs.",
    specs: [
      "Ergonomic cabin with easy-clean antimicrobial surfaces",
      "Secondary seating for attending paramedic or family",
      "Fixed and portable medical oxygen delivery systems",
      "Integrated emergency warning lightbars & PA sirens"
    ],
    terms: "Flexible short-term and contract leasing",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80",
    status: "Available Immediately"
  },
  {
    id: "heavy-mobile-imaging",
    title: "Mobile Diagnostic Scanning Trailer (CT / MRI)",
    category: "Heavy Medical Equipments",
    description: "Expansive self-contained mobile scanning suites allowing hospitals to maintain diagnostic continuity during facility renovations or volume surges.",
    specs: [
      "Shielded scan room with integrated climate and chiller units",
      "Hydraulic leveling systems and medical air suspension",
      "Patient lift for wheelchair and gurney accessibility",
      "High-speed DICOM PACS connectivity infrastructure"
    ],
    terms: "Monthly and Long-Term Institutional Lease with Full Engineering Maintenance",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
    status: "Scheduled Deployment"
  },
  {
    id: "heavy-oxygen-plant",
    title: "Mobile PSA Medical Oxygen Generation Plant",
    category: "Heavy Medical Equipments",
    description: "Containerized, high-capacity Pressure Swing Adsorption (PSA) oxygen generator delivering 93% ± 3% purity directly to hospital pipelines.",
    specs: [
      "Capacity: 50 to 250 Nm³/h uninterrupted flow",
      "Integrated cylinder filling booster manifold (up to 150 bar)",
      "Zero-downtime dual compressor architecture",
      "Automated purity sensor with purity-divert safety valve"
    ],
    terms: "Emergency Surge Lease & Seasonal Hospital Contracts",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    status: "Ready for Deployment"
  },
  {
    id: "dental-mobile-clinic",
    title: "Mobile Dental & Oral Surgery Operatory Van",
    category: "Dental & Mobile Clinics",
    description: "Complete turnkey mobile dental clinic equipped for community outreach, corporate dental screenings, and remote military/industrial operations.",
    specs: [
      "Full ergonomic dental operatory chair with LED surgical light",
      "Integrated high/low-speed handpiece delivery unit & suction",
      "Digital intraoral dental X-ray sensor & lead-lined compartment",
      "Self-contained clean water and wastewater reservoir tanks"
    ],
    terms: "Per-Day Outreach Rental, Monthly Corporate Leases",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    status: "Available"
  },
  {
    id: "dental-heavy-autoclave",
    title: "High-Capacity Hospital Autoclave & Sterilizer Units",
    category: "Heavy Medical Equipments",
    description: "Industrial steam sterilizers for hospital central sterile supply departments (CSSD) and large-scale dental clinics.",
    specs: [
      "Volume capacity: 400 to 800 Liters chamber",
      "Pre- and post-vacuum cycle for porous and hollow instruments",
      "Integrated thermal printer and digital cycle record logging",
      "Complies with EN 285 standard for large steam sterilizers"
    ],
    terms: "Monthly & Annual Lease with SLA Calibration Included",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    status: "In Stock"
  }
];

export const clientStats = [
  { label: "Global Shipments Delivered", value: "99.8%", sub: "On-time cold chain rate" },
  { label: "Medical Devices & Supplies", value: "250K+", sub: "Distributed worldwide" },
  { label: "Healthcare Specialists Deployed", value: "3,500+", sub: "Doctors, nurses & staff" },
  { label: "Active Mobile Fleet Units", value: "180+", sub: "Ambulances & mobile clinics" },
];

export const testimonials = [
  {
    quote: "Medical Solutions provided our regional hospital network with uninterrupted cold-chain pharmaceutical freight and 45 ICU nurses within 72 hours of our expansion. Their speed and compliance are unmatched.",
    author: "Dr. Marcus Vance",
    role: "Chief Medical Officer",
    org: "St. Jude Metropolitan Health System"
  },
  {
    quote: "When we upgraded our diagnostic imaging wing, their mobile CT scanner trailer bridged the 6-month gap seamlessly. Outstanding maintenance uptime and seamless DICOM integration.",
    author: "Elena Rostova",
    role: "Director of Clinical Operations",
    org: "Pan-Euro Healthcare Partners"
  },
  {
    quote: "Their logistics team navigated difficult customs clearance for sensitive temperature-sensitive vaccines without losing a single degree of temperature excursion. Absolute lifesavers.",
    author: "Tariq Al-Mansoor",
    role: "Global Supply Chain Director",
    org: "BioPharma Alliance"
  }
];
