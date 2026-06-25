import { useState, FormEvent } from "react";
import { X, MessageSquare, ClipboardCheck, Calculator, Sparkles, HelpCircle } from "lucide-react";

interface FeeEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FeeEnquiryModal({ isOpen, onClose }: FeeEnquiryModalProps) {
  const [studentName, setStudentName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("10th");
  const [isCalculated, setIsCalculated] = useState(false);

  if (!isOpen) return null;

  // Real academic estimates
  const getFeeEstimate = (grade: string) => {
    switch (grade) {
      case "1st to 5th":
        return { baseCost: 450, frequency: "Monthly", totalYear: "₹5,400", features: ["Basic conceptual worksheets", "Handwriting correction", "Monthly test review cards"] };
      case "6th to 8th":
        return { baseCost: 600, frequency: "Monthly", totalYear: "₹7,200", features: ["Mathematics & Science labs preparation", "Regular subjective logs", "Parent meetings monthly"] };
      case "9th":
        return { baseCost: 800, frequency: "Monthly", totalYear: "₹9,600", features: ["Board layout preparations", "Detailed study files", "Weekly evaluation tests"] };
      case "10th":
        return { baseCost: 1000, frequency: "Monthly", totalYear: "₹12,000", features: ["Full State/CBSE Board Mock files", "100% Passing guarantee program", "Previous 10 years papers solved"] };
      case "11th Arts":
      case "12th Arts":
        return { baseCost: 1200, frequency: "Monthly", totalYear: "₹14,400", features: ["Arts Streams Special Syllabus Notes", "Advanced English writing seminars", "Special doubt hours under Jivesh Sir"] };
      case "Spoken English":
        return { baseCost: 1500, frequency: "Full Course (3 Months)", totalYear: "₹3,500 One-time", features: ["Public talking rounds on weekends", "Personality grooming workshops", "Spoken certification slip"] };
      default:
        return { baseCost: 1000, frequency: "Monthly", totalYear: "₹12,000", features: ["All syllabus files included", "Experienced teachers guidance", "Weekly reports"] };
    }
  };

  const estimate = getFeeEstimate(selectedGrade);

  const handleCalculate = (e: FormEvent) => {
    e.preventDefault();
    if (studentName.trim() && mobileNumber.length === 10) {
      setIsCalculated(true);
    } else {
      alert("Please enter both Student Name and valid 10-Digit Mobile Number.");
    }
  };

  const handleWhatsAppEnquiry = () => {
    const message = `Hello Safalta Coaching Classes! I submitted an enquiry for student: *${studentName}* for *Class ${selectedGrade}*. Please share detailed discount slabs, scholarship structures, and batch timings. Contact: ${mobileNumber}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/7354126134?text=${encoded}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-100 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden custom-shadow-lg transform transition-all duration-300">
        
        {/* Banner header */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-4.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calculator className="w-5.5 h-5.5 text-amber-100" />
            <div>
              <h3 className="font-extrabold text-lg sm:text-xl">Enquire Tuition Fees</h3>
              <p className="text-[11px] text-amber-100 font-medium">Quick academic fee plans & schedules</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content body */}
        {!isCalculated ? (
          <form onSubmit={handleCalculate} className="p-6 space-y-4 text-left">
            <div className="p-3 bg-amber-50 border border-amber-100 text-amber-800 text-xs rounded-xl flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold block">No hidden charges:</strong>
                Our programs are reasonably priced with transparent monthly or yearly cards.
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600 block">Student Name*</label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="E.g. Jayant Malviya"
                required
                className="w-full px-4 py-2.5 rounded-lg text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600 block">Active Mobile Number* (WhatsApp-ready)</label>
              <input
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ""))}
                placeholder="10-digit primary number"
                maxLength={10}
                required
                className="w-full px-4 py-2.5 rounded-lg text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600 block">Select standard Class / Course</label>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg text-sm border border-slate-200 focus:outline-none"
              >
                <option value="1st to 5th">Primary Section (1st - 5th)</option>
                <option value="6th to 8th">Middle Section (6th - 8th)</option>
                <option value="9th">9th Standard Regular</option>
                <option value="10th">10th Board Regular</option>
                <option value="11th Arts">11th Arts Special</option>
                <option value="12th Arts">12th Arts Board Spec</option>
                <option value="Spoken English">Spoken English Certification</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-bold py-3 rounded-lg text-sm transition-all cursor-pointer shadow-md mt-2 flex items-center justify-center gap-1"
            >
              Calculate Fee Plan
            </button>
          </form>
        ) : (
          /* Estimate calculations */
          <div className="p-6 text-center space-y-5 animate-scale-up">
            <div className="bg-slate-50 border border-slate-150 rounded-2xl p-4.5 text-left space-y-3.5">
              <div className="flex items-center justify-between border-b pb-2 border-slate-200">
                <div>
                  <h4 className="font-extrabold text-sm text-slate-800">Fee Profile: {selectedGrade}</h4>
                  <p className="text-[10px] text-slate-500">Applicant Name: {studentName}</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full font-extrabold border border-amber-150">
                    Est. Plan
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 text-slate-700">
                <p className="flex justify-between text-xs">
                  <span>Standard Cost:</span>
                  <strong className="text-slate-800 font-bold">₹{estimate.baseCost} / {estimate.frequency}</strong>
                </p>
                <p className="flex justify-between text-xs">
                  <span>Yearly Sub-Plan:</span>
                  <strong className="text-slate-800 font-bold">{estimate.totalYear}</strong>
                </p>
                <p className="flex justify-between text-xs">
                  <span>Admission Registration Fee:</span>
                  <strong className="text-slate-800 font-bold bg-green-50 text-green-700 px-1.5 rounded">FREE (For June Registrations)</strong>
                </p>
              </div>

              <div className="border-t pt-2.5 border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider mb-1.5">What is included in this tier:</span>
                <ul className="space-y-1 text-slate-600 text-xs">
                  {estimate.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-1.5">
                      <span className="text-amber-500 font-extrabold flex-shrink-0">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-3 bg-blue-50/70 border border-blue-100 text-blue-800 text-xs rounded-xl text-left flex items-start gap-2 leading-relaxed">
              <HelpCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Need custom installments or twin siblings concessions?</strong> Click below to directly submit a detailed enquiry over WhatsApp to Jivesh Sir.
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pb-1">
              <button
                onClick={() => {
                  setIsCalculated(false);
                  setStudentName("");
                  setMobileNumber("");
                }}
                className="py-3 text-slate-700 border border-slate-200 hover:bg-slate-50 font-bold text-xs rounded-lg transition-colors cursor-pointer"
              >
                Recalculate
              </button>
              <button
                onClick={handleWhatsAppEnquiry}
                className="py-3 text-white bg-green-600 hover:bg-green-700 font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Sir
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
