/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CourseDetails from "./components/CourseDetails";
import ResultsSection from "./components/ResultsSection";
import Gallery from "./components/Gallery";
import NoticeBoard from "./components/NoticeBoard";
import Footer from "./components/Footer";

import AdmissionFormModal from "./components/AdmissionFormModal";
import FeeEnquiryModal from "./components/FeeEnquiryModal";

export default function App() {
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans select-none antialiased">
      {/* Dynamic Navigation sticky Header bar */}
      <Header 
        onOpenAdmissionModal={() => setIsAdmissionOpen(true)}
        onOpenEnquiryModal={() => setIsEnquiryOpen(true)}
      />

      {/* Main Body */}
      <main className="flex-grow">
        {/* Hero Section containing slide displays */}
        <Hero 
          onOpenAdmissionModal={() => setIsAdmissionOpen(true)}
          onOpenEnquiryModal={() => setIsEnquiryOpen(true)}
        />

        {/* Available Streams, features & "हमारी विशेषताएँ" list */}
        <CourseDetails 
          onOpenAdmissionModal={() => setIsAdmissionOpen(true)}
        />

        {/* Results, Class 10th landmark success & topper certificate dashboards */}
        <ResultsSection />

        {/* Stories, Highlights folders mimicking IG highlights */}
        <Gallery />

        {/* Dynamic Alerts / Bulletin notice lists + urgent crawling tickers */}
        <NoticeBoard />
      </main>

      {/* Dual branch cards, Google maps, active dials, and floating Whatsapp trigger */}
      <Footer />

      {/* ONLINE ADMISSION REGISTER MODAL PANEL (Multi-step form) */}
      <AdmissionFormModal 
        isOpen={isAdmissionOpen} 
        onClose={() => setIsAdmissionOpen(false)} 
      />

      {/* PRICE ESTIMATES FEE ENQUIRY WIDGET (Tuition calculator) */}
      <FeeEnquiryModal 
        isOpen={isEnquiryOpen} 
        onClose={() => setIsEnquiryOpen(false)} 
      />
    </div>
  );
}
