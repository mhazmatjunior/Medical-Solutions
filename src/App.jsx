import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import SearchModal from './components/SearchModal';
import Home from './pages/Home';
import Logistics from './pages/Logistics';
import Health from './pages/Health';
import Manpower from './pages/Manpower';
import Rental from './pages/Rental';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteDepartment, setQuoteDepartment] = useState('Logistics');
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const handleOpenQuote = (dept = 'Logistics') => {
    // If dept contains a colon or description, normalize to the category
    let cleanedDept = dept;
    if (dept.toLowerCase().includes('logistics')) cleanedDept = 'Logistics';
    else if (dept.toLowerCase().includes('health') || dept.toLowerCase().includes('supply') || dept.toLowerCase().includes('procurement')) cleanedDept = 'Health Supplies';
    else if (dept.toLowerCase().includes('manpower') || dept.toLowerCase().includes('staffing')) cleanedDept = 'Manpower Solutions';
    else if (dept.toLowerCase().includes('rental') || dept.toLowerCase().includes('fleet')) cleanedDept = 'Rental & Fleet';
    
    setQuoteDepartment(cleanedDept);
    setQuoteModalOpen(true);
  };

  const handleOpenSearch = () => {
    setSearchModalOpen(true);
  };

  // Keyboard shortcut Ctrl+K / Cmd+K to open search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-primary-500 selection:text-white">
        
        {/* Global Navigation */}
        <Navbar 
          onOpenQuote={handleOpenQuote} 
          onOpenSearch={handleOpenSearch} 
        />

        {/* Page Content */}
        <main className="flex-1 pb-16 sm:pb-0">
          <Routes>
            <Route path="/" element={<Home onOpenQuote={handleOpenQuote} />} />
            <Route path="/logistics" element={<Logistics onOpenQuote={handleOpenQuote} />} />
            <Route path="/health" element={<Health onOpenQuote={handleOpenQuote} />} />
            <Route path="/manpower" element={<Manpower onOpenQuote={handleOpenQuote} />} />
            <Route path="/rental" element={<Rental onOpenQuote={handleOpenQuote} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home onOpenQuote={handleOpenQuote} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenQuote={handleOpenQuote} />

        {/* Global Modals */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          initialDepartment={quoteDepartment}
        />

        <SearchModal
          isOpen={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
