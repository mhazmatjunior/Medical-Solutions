import React, { useState } from 'react';
import { 
  Users, 
  UserCheck, 
  ShieldCheck, 
  CheckCircle2, 
  Stethoscope, 
  Briefcase, 
  Clock, 
  Award, 
  ArrowRight, 
  UserPlus, 
  FileCheck2,
  Building2
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { manpowerRoles } from '../data/servicesData';

export default function Manpower({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedRole, setSelectedRole] = useState(null);

  // Filter roles
  const filteredRoles = activeTab === 'all'
    ? manpowerRoles
    : activeTab === 'healthcare'
    ? manpowerRoles.filter(r => r.category === 'Healthcare Skilled')
    : manpowerRoles.filter(r => r.category.includes('Labour') || r.category.includes('Workforce'));

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* PAGE HERO */}
      <section className="relative pt-8 pb-14 bg-gradient-to-b from-navy-950 via-indigo-950 to-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <h1 className="text-3xl sm:text-5xl lg:text-5.5xl font-extrabold tracking-tight leading-tight">
              Medical Staffing & Healthcare Workforce Solutions
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed font-normal">
              Supplying verified healthcare professionals—from specialist physicians and ICU registered nurses to certified paramedics, biomedical technicians, and operational hospital support staff.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-4">
              <button
                onClick={() => onOpenQuote('Manpower Solutions')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2"
              >
                <span>Request Staffing Roster</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#roles-directory"
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-colors text-center"
              >
                Explore Specialized Roles
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TWO CORE TRACKS (Exact mapping to user's handwritten note) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Healthcare Skilled Track */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50/50 p-8 rounded-3xl border border-indigo-200/80 shadow-soft space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider block">
                  Track 1 &bull; Clinical Excellence
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Healthcare Skilled Personnel
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              Fully vetted clinicians with verified primary-source credentials, clean licensing records, and extensive hospital experience.
            </p>

            <div className="space-y-3">
              <div className="bg-white p-4 rounded-xl border border-indigo-100/80">
                <div className="font-bold text-slate-900 text-sm">Doctors (Specialists & Surgeons)</div>
                <div className="text-xs text-slate-500 mt-1">Intensivists, ER Physicians, Anesthesiologists, Trauma Surgeons, and Hospitalists.</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-indigo-100/80">
                <div className="font-bold text-slate-900 text-sm">Registered Nurses (RN & BSN)</div>
                <div className="text-xs text-slate-500 mt-1">ICU, CCU, Emergency Room (ER), Operating Theater (OR), and Pediatric units.</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-indigo-100/80">
                <div className="font-bold text-slate-900 text-sm">Paramedics & Emergency EMTs</div>
                <div className="text-xs text-slate-500 mt-1">Advanced Life Support (ALS) crews, flight paramedics, and rapid disaster response teams.</div>
              </div>
            </div>

            <button
              onClick={() => onOpenQuote('Manpower: Healthcare Skilled (Doctors/Nurses/Paramedics)')}
              className="w-full py-3 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <span>Request Clinical Staffing Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Skilled & Unskilled Labour Track */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 p-8 rounded-3xl border border-slate-200/80 shadow-soft space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 text-white flex items-center justify-center shadow-md">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Track 2 &bull; Technical & Operational
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Skilled & Unskilled Labour
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              Essential auxiliary teams ensuring hospital facility uptime, diagnostic laboratory accuracy, pristine sanitization, and supply flow.
            </p>

            <div className="space-y-3">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                <div className="font-bold text-slate-900 text-sm">Skilled Biomedical & Lab Technicians</div>
                <div className="text-xs text-slate-500 mt-1">Medical equipment calibration specialists, pharmacy dispensers, and diagnostic pathology lab staff.</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                <div className="font-bold text-slate-900 text-sm">Hospital Orderlies & Patient Handlers</div>
                <div className="text-xs text-slate-500 mt-1">Compassionate, physical-stamina tested aides for internal patient transit and ward logistics.</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                <div className="font-bold text-slate-900 text-sm">Cleanroom Sanitization & Warehouse Staff</div>
                <div className="text-xs text-slate-500 mt-1">Hazardous waste handling, sterile processing department technicians, and cold-chain warehouse drivers.</div>
              </div>
            </div>

            <button
              onClick={() => onOpenQuote('Manpower: Skilled & Unskilled Labour')}
              className="w-full py-3 rounded-xl text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 transition-colors shadow-xs flex items-center justify-center gap-2"
            >
              <span>Request Operational Workforce Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* DETAILED ROLES DIRECTORY */}
      <section id="roles-directory" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Role Profiles"
          title="Browse Available Healthcare Professionals"
          description="Detailed qualifications, available clinical sub-specialties, and flexible deployment models."
        />

        {/* Tab Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 sm:justify-center no-scrollbar mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold shrink-0 whitespace-nowrap transition-all ${
              activeTab === 'all'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Roles ({manpowerRoles.length})
          </button>
          <button
            onClick={() => setActiveTab('healthcare')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold shrink-0 whitespace-nowrap transition-all ${
              activeTab === 'healthcare'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Healthcare Skilled (Dr, Nurse, Paramedic)
          </button>
          <button
            onClick={() => setActiveTab('labour')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold shrink-0 whitespace-nowrap transition-all ${
              activeTab === 'labour'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Skilled & Unskilled Labour
          </button>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRoles.map((role) => (
            <div
              key={role.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={role.image}
                    alt={role.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent"></div>
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white text-slate-900 shadow-xs">
                    {role.category}
                  </span>
                  <div className="absolute bottom-3 left-4 text-white">
                    <h3 className="text-lg font-bold">
                      {role.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {role.subtitle}
                  </p>

                  <div className="space-y-2 border-t border-slate-100 pt-3">
                    <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block">
                      Vetted Qualifications:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {role.qualifications.map((q, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 border-t border-slate-100 pt-3">
                    <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block">
                      Specialized Positions:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {role.rolesAvailable.map((pos, pIdx) => (
                        <span key={pIdx} className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                          {pos}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenQuote(`Staffing Request: ${role.title}`)}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm"
                >
                  Request Candidates in This Role
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5-STEP RIGOROUS CREDENTIALING ASSURANCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800">
          <SectionHeading
            light
            badge="Quality Assurance"
            title="The 5-Stage Clinical Credentialing Protocol"
            description="We eliminate institutional liability through exhaustive verification before any clinician or technician sets foot in your hospital."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
            {[
              {
                step: "01",
                title: "Primary Verification",
                desc: "Direct confirmation with state medical boards, nursing councils, and university registrars."
              },
              {
                step: "02",
                title: "Background Screening",
                desc: "Comprehensive criminal records check, sanctions registry scan, and rigorous drug screening."
              },
              {
                step: "03",
                title: "Clinical Competency",
                desc: "Simulation assessment, ACLS/BLS validation, and peer reference reviews."
              },
              {
                step: "04",
                title: "Facility Induction",
                desc: "Hospital protocol alignment, infection control briefing, and HIPAA confidentiality pledge."
              },
              {
                step: "05",
                title: "On-Site Supervision",
                desc: "Ongoing performance audits, attendance tracking, and 24/7 supervisor support."
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700 flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-black text-indigo-400 font-mono block mb-2">{step.step}</span>
                  <h4 className="text-sm font-bold text-white mb-1.5">{step.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOSPITAL URGENCY STAFFING CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-50 border border-indigo-200/80 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Experiencing an Emergency Clinical Staff Shortage?
            </h3>
            <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
              Our rapid deployment strike teams can mobilize certified ICU nurses, ER physicians, and paramedics to your healthcare facility within 48 to 72 hours.
            </p>
          </div>
          <button
            onClick={() => onOpenQuote('Manpower: Urgent Hospital Staffing Surge')}
            className="px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-indigo-600 hover:bg-indigo-700 text-white shrink-0 transition-colors shadow-md"
          >
            Deploy Emergency Personnel
          </button>
        </div>
      </section>

    </div>
  );
}
