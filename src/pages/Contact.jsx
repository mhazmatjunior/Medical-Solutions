import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  Truck, 
  Activity, 
  Users, 
  Car 
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { companyDetails } from '../data/servicesData';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [department, setDepartment] = useState('Logistics & Cold Chain');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    department: 'Logistics & Cold Chain',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* PAGE HERO */}
      <section className="relative pt-8 pb-14 bg-gradient-to-b from-navy-950 via-slate-900 to-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-semibold border border-primary-500/30">
              <Clock className="w-3.5 h-3.5 text-primary-400" /> 24/7 Global Operations Desk
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Connect With Our Corporate Solutions Team
            </h1>
            <p className="text-slate-300 text-sm sm:text-lg leading-relaxed">
              Whether you are scheduling bulk international cold-chain freight, procuring medical devices, staffing an entire ICU wing, or reserving an ambulance fleet—our project directors are available 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Corporate Headquarters & Operations</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Reach out directly to our dedicated departmental teams or visit our central logistics hub and clinical testing facilities.
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-soft">
                <MapPin className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold">Headquarters & Terminal Hub:</strong>
                  <span>{companyDetails.headquarters}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-soft">
                <Phone className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold">General Corporate Inquiries:</strong>
                  <span>{companyDetails.phone}</span>
                  <span className="block text-xs text-slate-400 mt-0.5">Mon - Fri: 8:00 AM - 6:00 PM EST</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-red-50/70 border border-red-200/70 shadow-soft">
                <Clock className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-900 block font-semibold">24/7 Emergency Crisis & Ambulance Dispatch:</strong>
                  <span className="text-red-700 font-bold text-base">{companyDetails.emergencyHotline}</span>
                  <span className="block text-xs text-red-500 mt-0.5">Continuous 365-day rapid medical response</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-soft">
                <Mail className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold">Institutional RFP & Tender Submissions:</strong>
                  <span>{companyDetails.procurementEmail}</span>
                </div>
              </div>
            </div>

            {/* Department Direct Desks */}
            <div className="border-t border-slate-200 pt-6 space-y-3">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                Direct Departmental Routing:
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                  <div className="font-semibold text-slate-800 flex items-center gap-1.5"><Truck className="w-3.5 h-3.5 text-primary-600" /> Logistics Desk</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">freight@medicalsolutions.com</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                  <div className="font-semibold text-slate-800 flex items-center gap-1.5"><Activity className="w-3.5 h-3.5 text-teal-600" /> Health Supplies</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">supply@medicalsolutions.com</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                  <div className="font-semibold text-slate-800 flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-indigo-600" /> Clinical Staffing</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">staffing@medicalsolutions.com</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                  <div className="font-semibold text-slate-800 flex items-center gap-1.5"><Car className="w-3.5 h-3.5 text-sky-600" /> Fleet Rentals</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">fleet@medicalsolutions.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-soft">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Dispatched Successfully</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you for contacting Medical Solutions. Your inquiry regarding <span className="font-semibold text-primary-600">{department}</span> has been logged with highest priority. A dedicated account director will review your specifications and contact you promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-primary-600 text-white rounded-xl text-xs font-semibold hover:bg-primary-700 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-primary-600 uppercase tracking-wider block mb-1">
                    Direct Inquiry Form
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Submit Project Specifications
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in your organization details to receive an official proposal, pricing schedule, and compliance datasheet.
                  </p>
                </div>

                <div className="pt-2">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Select Relevant Vertical *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-medium">
                    {[
                      'Logistics & Cold Chain',
                      'Health & Supplies',
                      'Manpower Staffing',
                      'Rental Fleet & Units'
                    ].map((dep) => (
                      <button
                        type="button"
                        key={dep}
                        onClick={() => {
                          setDepartment(dep);
                          setFormData({ ...formData, department: dep });
                        }}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          department === dep
                            ? 'border-primary-600 bg-primary-50 text-primary-800 font-semibold'
                            : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        {dep}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Arthur Pendelton"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Hospital / Enterprise *</label>
                    <input
                      required
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Metro Health Network"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Corporate Email Address *</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@hospital.org"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Direct Phone / WhatsApp *</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Inquiry Details or Scope of Work *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your requirements: specific destination/temperature zone for freight, device quantities, number of medical staff required, or ambulance lease term..."
                    className="w-full p-3.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl font-semibold text-sm text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Proposal Request
                  </button>
                  <p className="text-center text-[11px] text-slate-400 mt-2">
                    Confidential medical data handling. Complies with global clinical privacy and NDA standards.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
