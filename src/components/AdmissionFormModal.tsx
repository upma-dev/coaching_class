import { useState, ChangeEvent, FormEvent } from "react";
import { X, CheckCircle, ClipboardCheck, ArrowRight, ArrowLeft, Printer, AlertCircle } from "lucide-react";
import { COURSES } from "../data";

interface AdmissionFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdmissionFormModal({ isOpen, onClose }: AdmissionFormModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    gender: "Male",
    parentName: "",
    mobileNumber: "",
    alternateNumber: "",
    activeGrade: "10th",
    courseId: "primary-secondary",
    selectedBranch: "Branch 1: Jamuniya Road Head Office",
    address: "",
    lastScoredPercent: "",
    previousSchool: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};
    if (currentStep === 1) {
      if (!formData.studentName.trim()) newErrors.studentName = "Student Name is required";
      if (!formData.dob) newErrors.dob = "Date of Birth is required";
    } else if (currentStep === 2) {
      if (!formData.parentName.trim()) newErrors.parentName = "Parent/Guardian Name is required";
      if (!formData.mobileNumber.trim()) {
        newErrors.mobileNumber = "Mobile Number is required";
      } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
        newErrors.mobileNumber = "Enter a valid 10-digit mobile number";
      }
    } else if (currentStep === 3) {
      if (!formData.address.trim()) newErrors.address = "Residential address is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      // Create provisional receipt
      setIsSubmitted(true);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const registrationNo = "SCC-" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="fixed inset-0 z-100 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className={`bg-white rounded-2xl w-full max-w-lg overflow-hidden custom-shadow-lg transform transition-all duration-300 ${
          isSubmitted ? "max-w-xl" : ""
        }`}
      >
        {/* Header Block */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-4.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ClipboardCheck className="w-5.5 h-5.5 text-blue-150" />
            <div>
              <h3 className="font-extrabold text-lg sm:text-xl">Online Admission Registration</h3>
              <p className="text-[11px] text-blue-100 font-medium">Session Batch 2026-2027 • Safalta Academy</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Body */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Steps indicator Progress bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-105">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div 
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      step === s 
                        ? "bg-blue-600 text-white" 
                        : step > s 
                          ? "bg-emerald-500 text-white" 
                          : "bg-slate-150 text-slate-500"
                    }`}
                  >
                    {s}
                  </div>
                  <span className={`text-xs font-bold hidden sm:inline ${step === s ? "text-slate-800" : "text-slate-400"}`}>
                    {s === 1 ? "Student Info" : s === 2 ? "Parent Info" : "Course Prefs"}
                  </span>
                  {s < 3 && <div className="w-6 sm:w-10 h-0.5 bg-slate-150"></div>}
                </div>
              ))}
            </div>

            {/* Step 1: Student Information */}
            {step === 1 && (
              <div className="space-y-4 animate-fade-in text-left">
                <h4 className="font-extrabold text-slate-800 text-sm tracking-wide uppercase">Step 1: Student Demographics</h4>
                
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 block">Student Name (as per School Record)*</label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    placeholder="E.g. Varsha Prajapati"
                    className={`w-full px-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-2 ${
                      errors.studentName ? "border-red-500 focus:ring-red-200" : "border-slate-200 focus:ring-blue-150 focus:border-blue-500"
                    }`}
                  />
                  {errors.studentName && (
                    <p className="text-red-500 text-[11px] font-semibold flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.studentName}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 block">Date of Birth*</label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-2 ${
                        errors.dob ? "border-red-500 focus:ring-red-200" : "border-slate-200 focus:ring-blue-150 focus:border-blue-500"
                      }`}
                    />
                    {errors.dob && <p className="text-red-500 text-[11px] font-semibold mt-0.5">{errors.dob}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 block">Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-150 focus:border-blue-500"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 block">Last Class Score (%)</label>
                    <input
                      type="text"
                      name="lastScoredPercent"
                      value={formData.lastScoredPercent}
                      onChange={handleInputChange}
                      placeholder="E.g. 78% or 8.2 CGPA"
                      className="w-full px-4 py-2.5 rounded-lg text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-150 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 block">Current School Name</label>
                    <input
                      type="text"
                      name="previousSchool"
                      value={formData.previousSchool}
                      onChange={handleInputChange}
                      placeholder="School name in Susner"
                      className="w-full px-4 py-2.5 rounded-lg text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-150 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Parent/Guardian Information */}
            {step === 2 && (
              <div className="space-y-4 animate-fade-in text-left">
                <h4 className="font-extrabold text-slate-800 text-sm tracking-wide uppercase">Step 2: Guardian Details</h4>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 block">Father's or Guardian's Name*</label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    placeholder="E.g. Rajesh Kumar Prajapati"
                    className={`w-full px-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-2 ${
                      errors.parentName ? "border-red-500 focus:ring-red-200" : "border-slate-200 focus:ring-blue-150 focus:border-blue-500"
                    }`}
                  />
                  {errors.parentName && (
                    <p className="text-red-500 text-[11px] font-semibold flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.parentName}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 block">Active Mobile Number* (WhatsApp-ready)</label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      placeholder="10-digit number"
                      maxLength={10}
                      className={`w-full px-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-2 ${
                        errors.mobileNumber ? "border-red-500 focus:ring-red-200" : "border-slate-200 focus:ring-blue-150 focus:border-blue-500"
                      }`}
                    />
                    {errors.mobileNumber && <p className="text-red-500 text-[11px] font-semibold mt-0.5">{errors.mobileNumber}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 block">Alternate Contact No.</label>
                    <input
                      type="tel"
                      name="alternateNumber"
                      value={formData.alternateNumber}
                      onChange={handleInputChange}
                      placeholder="Optional backup details"
                      maxLength={10}
                      className="w-full px-4 py-2.5 rounded-lg text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-150 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Course Preference & Batch Selection */}
            {step === 3 && (
              <div className="space-y-4 animate-fade-in text-left">
                <h4 className="font-extrabold text-slate-800 text-sm tracking-wide uppercase">Step 3: Registration Preferences</h4>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 block">Target Grade/Standard</label>
                    <select
                      name="activeGrade"
                      value={formData.activeGrade}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg text-sm border border-slate-200 focus:outline-none"
                    >
                      <option value="1st to 5th">Primary Section (1st - 5th)</option>
                      <option value="6th to 8th">Middle Section (6th - 8th)</option>
                      <option value="9th">9th Standard</option>
                      <option value="10th">10th Board</option>
                      <option value="11th Arts">11th Arts Literature</option>
                      <option value="12th Arts">12th Arts board</option>
                      <option value="Spoken English">Only Spoken English program</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 block">Selected Stream Batch</label>
                    <select
                      name="courseId"
                      value={formData.courseId}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg text-sm border border-slate-200 focus:outline-none"
                    >
                      {COURSES.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 block">Choose Nearest Branch</label>
                  <select
                    name="selectedBranch"
                    value={formData.selectedBranch}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-lg text-sm border border-slate-200 focus:outline-none"
                  >
                    <option value="Branch 1: Jamuniya Road Head Office">Branch 1: Shikhar Palace, Near Suman Garden, Susner</option>
                    <option value="Branch 2: Shukrawariya Bajar Branch">Branch 2: Near Digambar Gyan Mandir School Hostel, Susner</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 block">Residential Address (with Landmark)*</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={2}
                    placeholder="Enter complete building, village/ward details near Susner"
                    className={`w-full px-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-2 ${
                      errors.address ? "border-red-500 focus:ring-red-200" : "border-slate-200 focus:ring-blue-150 focus:border-blue-500"
                    }`}
                  />
                  {errors.address && <p className="text-red-500 text-[11px] font-semibold mt-0.5">{errors.address}</p>}
                </div>
              </div>
            )}

            {/* Footer buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 bg-white">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex items-center gap-1 px-4.5 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-sm rounded-lg transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              ) : (
                <div></div>
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-1.5 px-5 py-2.5 text-white bg-blue-600 hover:bg-blue-700 font-bold text-sm rounded-lg transition-colors cursor-pointer shadow-sm"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-6 py-2.5 text-white bg-emerald-600 hover:bg-emerald-700 font-bold text-sm rounded-lg transition-colors cursor-pointer shadow-md"
                >
                  <CheckCircle className="w-4.5 h-4.5" />
                  Confirm Register
                </button>
              )}
            </div>
          </form>
        ) : (
          /* Dynamic Printed Receipt */
          <div className="p-6 text-center space-y-6 animate-scale-up">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle className="w-10 h-10" />
            </div>
            
            <div className="space-y-1.5">
              <h4 className="font-extrabold text-2xl text-slate-800">Registration Successful!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Provisional seat booked. Please report to the selected branch with this digital receipt to lock details.
              </p>
            </div>

            {/* Receipt layout container */}
            <div id="repc-slip" className="border-2 border-dashed border-slate-200 bg-slate-50 rounded-2xl p-5 text-left space-y-4 font-sans text-xs select-none">
              <div className="flex items-center justify-between border-b border-slate-150 pb-2 bg-slate-50">
                <div>
                  <h5 className="font-extrabold text-slate-800 text-sm">SAFALTA COACHING CLASSES</h5>
                  <p className="text-[10px] text-slate-500">Susner Center ID: a72f27b8-5aad-4c7e-b3e6</p>
                </div>
                <div className="text-right">
                  <span className="font-mono bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold text-[10px]">
                    {registrationNo}
                  </span>
                  <p className="text-[9px] text-slate-400 mt-1">Status: PROVISIONAL</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pb-3 border-b border-slate-100">
                <div>
                  <span className="text-slate-400 block uppercase tracking-wider text-[9px] font-bold">STUDENT NAME</span>
                  <strong className="text-slate-800 text-sm">{formData.studentName}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase tracking-wider text-[9px] font-bold">DOB / GENDER</span>
                  <strong className="text-slate-800">{formData.dob} ({formData.gender})</strong>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase tracking-wider text-[9px] font-bold">PARENT/GUARDIAN</span>
                  <strong className="text-slate-800">{formData.parentName}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase tracking-wider text-[9px] font-bold">CONTACT NUMBER</span>
                  <strong className="text-slate-800 font-mono">{formData.mobileNumber}</strong>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-slate-700">
                <div>
                  <span className="text-slate-400 block uppercase tracking-wider text-[9px] font-bold">SELECTED COURSE STANDARD</span>
                  <strong className="text-blue-700">{formData.activeGrade}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase tracking-wider text-[9px] font-bold">BRANCH PREFERENCE</span>
                  <p className="font-bold text-slate-700 truncate">{formData.selectedBranch.replace("Branch 1: ", "").replace("Branch 2: ", "")}</p>
                </div>
              </div>

              <div className="bg-amber-50 text-amber-800 p-2.5 rounded-xl border border-amber-150 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span className="font-medium text-[11px]">
                  <strong>What's Next?</strong> Show this receipt on WhatsApp (+91 9098816538) for direct orientation support.
                </span>
              </div>
            </div>

            {/* Print or Close */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-4.5 py-2.5 text-slate-700 hover:text-slate-800 border border-slate-200 hover:bg-slate-50 font-bold text-sm rounded-lg transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4 text-slate-500" />
                Print Slips
              </button>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                  setFormData({
                    studentName: "",
                    dob: "",
                    gender: "Male",
                    parentName: "",
                    mobileNumber: "",
                    alternateNumber: "",
                    activeGrade: "10th",
                    courseId: "primary-secondary",
                    selectedBranch: "Branch 1: Jamuniya Road Head Office",
                    address: "",
                    lastScoredPercent: "",
                    previousSchool: "",
                  });
                  onClose();
                }}
                className="px-6 py-2.5 text-white bg-blue-600 hover:bg-blue-700 font-bold text-sm rounded-lg transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
