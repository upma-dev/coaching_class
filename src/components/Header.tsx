import { useState, useEffect } from "react";
import { GraduationCap, Phone, Menu, X, ClipboardCheck, MessageSquare } from "lucide-react";

interface HeaderProps {
  onOpenAdmissionModal: () => void;
  onOpenEnquiryModal: () => void;
}

export default function Header({ onOpenAdmissionModal, onOpenEnquiryModal }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#hero" },
    { label: "About Features", href: "#features" },
    { label: "Our Courses", href: "#courses" },
    { label: "Toppers & Results", href: "#toppers" },
    { label: "Student Gallery", href: "#gallery" },
    { label: "Updates & Notices", href: "#notices" },
    { label: "Find Us / Map", href: "#contact" },
  ];

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-3"
          : "bg-white/40 backdrop-blur-xs py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Branding */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleScrollTo("#hero")}
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-blue-600 text-white font-bold text-lg custom-shadow-md group-hover:scale-105 transition-transform duration-300">
              <span className="z-10 tracking-tight text-base font-extrabold">SCC</span>
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/60 animate-spin-slow"></div>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-800 group-hover:text-blue-600 transition-colors">
                  Safalta
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 uppercase tracking-wider">
                  Coaching
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium font-mono leading-none tracking-tight">
                ★ 32+ Years of Trusted Academic Success ★
              </p>
            </div>
          </div>

          {/* Desktop Navigation Link Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleScrollTo(item.href)}
                className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Call to Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenEnquiryModal}
              className="px-4 py-2 text-xs lg:text-sm font-semibold text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors border border-blue-200 cursor-pointer"
            >
              Fees Enquiry
            </button>
            <button
              onClick={onOpenAdmissionModal}
              className="flex items-center gap-2 px-4.5 py-2.5 text-xs lg:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <ClipboardCheck className="w-4 h-4" />
              Admission Open 2026
            </button>
          </div>

          {/* Menu triggers for tablet and mobile */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenAdmissionModal}
              className="sm:hidden flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-blue-600 active:bg-blue-700 rounded-md shadow-xs cursor-pointer"
            >
              <ClipboardCheck className="w-3.5 h-3.5" />
              Apply
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-lg animate-fade-in z-45">
          <div className="px-4 py-4 space-y-1.5 bg-slate-50/40">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleScrollTo(item.href)}
                className="block w-full text-left px-4 py-3 rounded-lg text-sm font-bold text-slate-700 hover:text-blue-600 hover:bg-white transition-all cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenEnquiryModal();
                }}
                className="flex items-center justify-center gap-1.5 w-full py-3 text-xs font-bold text-blue-600 border border-blue-200 bg-white rounded-lg active:bg-slate-50 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                Fees Enquiry
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAdmissionModal();
                }}
                className="flex items-center justify-center gap-1.5 w-full py-3 text-xs font-bold text-white bg-blue-600 rounded-lg active:bg-blue-700 cursor-pointer shadow-xs"
              >
                <ClipboardCheck className="w-4 h-4" />
                Admission 2026
              </button>
            </div>
            
            {/* Quick Click Numbers inside Drawer */}
            <div className="p-3 bg-blue-50/50 rounded-lg mt-3 flex items-center justify-between text-xs text-slate-600">
              <span className="font-medium">Direct Admission helpline:</span>
              <a href="tel:+919098816538" className="font-extrabold text-blue-600 hover:underline">
                9098816538
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
