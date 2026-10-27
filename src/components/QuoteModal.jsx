import React, { useState } from 'react';
import { X, CheckCircle2, Send, Building2, User, Mail, Phone, Calendar, FileText } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, initialDepartment = 'Logistics' }) {
  const [department, setDepartment] = useState(initialDepartment);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    department: initialDepartment,
    urgency: 'Standard (Within 1-2 weeks)',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3s or user clicks close
    }, 4000);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-2.5 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full border border-slate-100 overflow-hidden transform transition-all max-h-[96vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-navy-900 to-primary-950 px-5 sm:px-6 py-4 sm:py-6 text-white relative shrink-0">
          <button 
            onClick={resetAndClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 sm:py-1 rounded-full bg-primary-500/20 text-primary-300 text-[10px] sm:text-xs font-semibold mb-1.5 sm:mb-2 border border-primary-500/30">
            Enterprise Solutions Inquiries
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Request a Solution Proposal</h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-0.5 sm:mt-1">
            Connect with our logistics, procurement, clinical staffing, or fleet team within 2 hours.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 sm:p-8 text-center space-y-4 overflow-y-auto">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900">Inquiry Received Successfully</h4>
            <p className="text-slate-600 max-w-md mx-auto text-xs sm:text-sm leading-relaxed">
              Thank you, <span className="font-semibold text-slate-800">{formData.name || 'Valued Partner'}</span>. Your inquiry for <span className="font-semibold text-primary-600">{department}</span> has been routed to our specialized corporate desk. A dedicated project director will contact you shortly.
            </p>
            <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-200/80 text-[11px] sm:text-xs text-slate-500 text-left space-y-1">
              <div><strong>Reference ID:</strong> MED-{Math.floor(100000 + Math.random() * 900000)}</div>
              <div><strong>Selected Vertical:</strong> {department}</div>
              <div><strong>Response SLA:</strong> Under 2 business hours (24/7 for urgent clinical dispatch)</div>
            </div>
            <button
              onClick={resetAndClose}
              className="mt-4 px-6 py-2.5 bg-primary-600 text-white rounded-xl font-medium text-xs sm:text-sm hover:bg-primary-700 transition-colors shadow-sm"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-4 sm:p-7 space-y-3.5 sm:space-y-4 overflow-y-auto">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Select Vertical / Service Department
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                {[
                  { id: 'Logistics', label: '1. Logistics & Cold Chain' },
                  { id: 'Health Supplies', label: '2. Health & Medical Devices' },
                  { id: 'Manpower Solutions', label: '3. Manpower & Staffing' },
                  { id: 'Rental & Fleet', label: '4. Rental Fleet & Equipment' },
                ].map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => {
                      setDepartment(item.id);
                      setFormData({ ...formData, department: item.id });
                    }}
                    className={`py-2 px-3 rounded-lg border text-left transition-all ${
                      department === item.id
                        ? 'border-primary-600 bg-primary-50 text-primary-800 font-semibold shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Arthur Pendelton"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Organization / Hospital *</label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    required
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Metro Health System"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Corporate Email *</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@hospital.org"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / WhatsApp *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Deployment Timeline / Urgency</label>
              <select
                value={formData.urgency}
                onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option>Emergency / Immediate (Within 24-48 hours)</option>
                <option>Standard Priority (1-2 weeks)</option>
                <option>Quarterly Contract / Scheduled Project</option>
                <option>Annual Strategic RFP / Tender</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Project Details or Requirements</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mention specifics: temperature requirements for cargo, medical equipment models, number of ICU doctors/nurses needed, or ambulance lease duration..."
                className="w-full p-3 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-white bg-primary-600 hover:bg-primary-700 active:bg-primary-800 transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Submit Proposal Request
              </button>
              <p className="text-center text-xs text-slate-400 mt-2">
                Strict NDA & Patient Data Protection. No unsolicited marketing.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
