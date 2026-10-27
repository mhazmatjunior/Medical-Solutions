import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUp, 
  CheckCircle2, 
  Send,
  Truck,
  Activity,
  Users,
  Car
} from 'lucide-react';
import { companyDetails } from '../data/servicesData';

export default function Footer({ onOpenQuote }) {
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-300 relative border-t border-navy-800/80 pt-12 sm:pt-16 pb-24 sm:pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-navy-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 to-accent-500 flex items-center justify-center text-white shadow-md">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                  <path d="M12 5v14"/>
                  <path d="M5 12h14"/>
                </svg>
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                Medical <span className="text-primary-400">Solutions</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Delivering mission-critical enterprise solutions across pharmaceutical logistics, healthcare equipment & consumables, certified clinical manpower, and specialized medical vehicle rentals worldwide.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>GDP Compliant Cold-Chain Distribution</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ISO 13485:2016 Certified Equipment & Quality Control</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-3">
              <span className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Enterprise Industry Insights
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-medium bg-emerald-950/40 border border-emerald-800/50 p-2.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed! You will receive our monthly supply chain briefings.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter institutional email..."
                    className="bg-navy-900 border border-navy-700/80 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 w-full"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="bg-primary-600 hover:bg-primary-500 text-white px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Logistics & Health */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-primary-400" /> Logistics Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/logistics" className="hover:text-white transition-colors">Ocean & Sea Freight</Link></li>
              <li><Link to="/logistics" className="hover:text-white transition-colors">Express Air Freight & Charters</Link></li>
              <li><Link to="/logistics" className="hover:text-white transition-colors">Land Freight & Temperature Trucks</Link></li>
              <li><Link to="/logistics" className="hover:text-white transition-colors">Customs Clearance & Brokerage</Link></li>
              <li><Link to="/logistics" className="hover:text-white transition-colors">Cold Storage & Warehousing</Link></li>
              <li><Link to="/logistics" className="hover:text-white transition-colors">Medicine & Pharmacy Restocking</Link></li>
            </ul>

            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 pt-2">
              <Activity className="w-3.5 h-3.5 text-primary-400" /> Health Supplies
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/health" className="hover:text-white transition-colors">ICU & Diagnostic Equipment</Link></li>
              <li><Link to="/health" className="hover:text-white transition-colors">Precision Medical Devices</Link></li>
              <li><Link to="/health" className="hover:text-white transition-colors">Consumables & Sterile Disposables</Link></li>
              <li><Link to="/health" className="hover:text-white transition-colors">Corporate Pharmacy Contracts</Link></li>
            </ul>
          </div>

          {/* Col 3: Manpower & Rentals */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-primary-400" /> Manpower Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/manpower" className="hover:text-white transition-colors">Specialist Physicians & Surgeons</Link></li>
              <li><Link to="/manpower" className="hover:text-white transition-colors">ICU & Emergency Registered Nurses</Link></li>
              <li><Link to="/manpower" className="hover:text-white transition-colors">Emergency Paramedics & EMTs</Link></li>
              <li><Link to="/manpower" className="hover:text-white transition-colors">Biomedical Engineers & Lab Techs</Link></li>
              <li><Link to="/manpower" className="hover:text-white transition-colors">Hospital Support & Orderlies</Link></li>
            </ul>

            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 pt-2">
              <Car className="w-3.5 h-3.5 text-primary-400" /> Rental & Fleet
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/rental" className="hover:text-white transition-colors">Advanced Life Support Ambulances</Link></li>
              <li><Link to="/rental" className="hover:text-white transition-colors">Mobile CT & MRI Scan Trailers</Link></li>
              <li><Link to="/rental" className="hover:text-white transition-colors">Mobile Medical Oxygen Plants</Link></li>
              <li><Link to="/rental" className="hover:text-white transition-colors">Mobile Dental Operatory Clinics</Link></li>
              <li><Link to="/rental" className="hover:text-white transition-colors">Hospital Industrial Autoclaves</Link></li>
            </ul>
          </div>

          {/* Col 4: Corporate Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Corporate Headquarters
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <span>{companyDetails.headquarters}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                <span className="text-white font-medium">{companyDetails.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                <span>{companyDetails.email}</span>
              </div>
              <div className="p-3 rounded-xl bg-navy-900 border border-navy-800 space-y-1">
                <span className="text-[11px] font-semibold text-primary-300 block">24/7 Crisis Hotline:</span>
                <span className="text-sm font-bold text-white block">{companyDetails.emergencyHotline}</span>
              </div>
            </div>

            <button
              onClick={() => onOpenQuote()}
              className="w-full mt-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-primary-600 hover:bg-primary-500 text-white transition-colors text-center"
            >
              Request Custom RFP
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {companyDetails.name}. All global rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-200 cursor-pointer transition-colors">Privacy Governance</span>
            <span className="hover:text-slate-200 cursor-pointer transition-colors">Terms of Supply</span>
            <span className="hover:text-slate-200 cursor-pointer transition-colors">Quality Manual</span>
            <button 
              onClick={scrollToTop} 
              aria-label="Scroll to top"
              className="p-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
