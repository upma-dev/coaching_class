import { useState } from "react";
import { Award, Star, Trophy, Users, ShieldAlert, Sparkles, Filter, CheckCircle2 } from "lucide-react";
import { TOPPERS } from "../data";

// Import Varsha Prajapati's image as high-quality static asset
import varshaTopperImg from "../assets/images/varsha_topper_1781776662210.jpg";

export default function ResultsSection() {
  const [selectedClassFilter, setSelectedClassFilter] = useState<"All" | "Class 10th" | "Class 12th">("All");

  const filteredToppers = TOPPERS.filter((topper) => {
    if (selectedClassFilter === "All") return true;
    return topper.grade === selectedClassFilter;
  });

  return (
    <section id="toppers" className="py-20 bg-slate-50/50 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-14 text-left sm:text-center">
          <span className="text-emerald-700 font-extrabold text-xs uppercase tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100">
            Results & Academic Toppers
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Our Hall of Fame: "गुणवत्ता बोलती है" 💯
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Congratulations to our diligent scholars! A testimony of 100% classroom passing ratios, customized notes, and targeted regular assessments.
          </p>

          <div className="p-3 bg-blue-50 border border-blue-105 rounded-2xl flex flex-col sm:flex-row items-center gap-3.5 max-w-2xl mx-auto text-left mt-6">
            <Trophy className="w-10 h-10 text-amber-500 flex-shrink-0 animate-bounce" />
            <div>
              <h4 className="font-extrabold text-blue-900 text-sm sm:text-base leading-tight">
                Class 10th Batch Landmark Record Passed!
              </h4>
              <p className="text-xs text-blue-700 font-medium mt-1">
                "कक्षा 10वीं के सभी 32 विद्यार्थी प्रथम श्रेणी (1st Division) में उत्तीर्ण!" 100% Quality Results in Susner.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Class Grade Filters */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedClassFilter("All")}
            className={`px-4.5 py-2 text-xs sm:text-sm font-bold rounded-lg border transition-all cursor-pointer ${
              selectedClassFilter === "All"
                ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            }`}
          >
            All Toppers
          </button>
          <button
            onClick={() => setSelectedClassFilter("Class 12th")}
            className={`px-4.5 py-2 text-xs sm:text-sm font-bold rounded-lg border transition-all cursor-pointer ${
              selectedClassFilter === "Class 12th"
                ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            }`}
          >
            Class 12th (Arts Stream)
          </button>
          <button
            onClick={() => setSelectedClassFilter("Class 10th")}
            className={`px-4.5 py-2 text-xs sm:text-sm font-bold rounded-lg border transition-all cursor-pointer ${
              selectedClassFilter === "Class 10th"
                ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            }`}
          >
            Class 10th Board (All)
          </button>
        </div>

        {/* Showcase Star Topper (Varsha Prajapati - 82%) */}
        {selectedClassFilter !== "Class 10th" && (
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-indigo-900 to-blue-950 text-white rounded-3xl p-6 sm:p-8 border border-blue-800 shadow-xl overflow-hidden relative mb-14 text-left">
            {/* Ambient vector confetti */}
            <div className="absolute right-0 top-0 w-44 h-44 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px] opacity-15"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="md:col-span-4 flex justify-center">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-amber-400 custom-shadow-lg scale-95 md:scale-100 hover:scale-105 transition-transform duration-300">
                  <img
                    src={varshaTopperImg}
                    alt="Varsha Prajapati"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=300";
                    }}
                  />
                  <div className="absolute top-1 left-1 bg-amber-400 text-indigo-950 text-[9px] font-black px-2 py-0.5 rounded-full uppercase">
                    ★ Star Star ★
                  </div>
                </div>
              </div>

              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 bg-amber-400 text-indigo-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  Class 12th Arts Board topper
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-black font-sans leading-none">Varsha Prajapati</h3>
                  <p className="text-blue-200 text-xs sm:text-sm font-semibold">Daughter of Susner Hub • Scoring: 82% overall score</p>
                </div>
                
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-lg">
                  "शिक्षा से सफलता की ओर..." Varsha’s spectacular standard in Arts Stream boards reflects premium conceptual grasp. Mentored directly under Jivesh & Sanju Sir.
                </p>

                <div className="inline-flex items-center gap-3 bg-white/10 rounded-xl px-4 py-2 border border-white/10 text-xs">
                  <span className="font-bold text-amber-400">Score: 82%</span>
                  <span className="h-4 w-px bg-white/20"></span>
                  <span className="text-slate-200 font-medium">1st Division Grade</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Toppers Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredToppers.map((topper, idx) => {
            // Varsha is already highlighted beautifully, skip or show simply as well.
            if (topper.id === "varsha-prajapati" && selectedClassFilter === "All") return null;

            return (
              <div
                key={topper.id}
                className="bg-white rounded-2xl border border-slate-100 p-4 sm:p-5 text-left flex flex-col justify-between hover:border-blue-200 hover:scale-102 transition-all duration-300 custom-shadow-sm group relative"
              >
                {/* Score badge sticker */}
                <div className="absolute top-3.5 right-3.5 bg-emerald-50 border border-emerald-150 text-emerald-700 font-extrabold text-xs sm:text-sm px-2.5 py-1 rounded-lg font-mono">
                  {topper.score}
                </div>

                <div className="space-y-4">
                  {topper.imageUrl ? (
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-blue-100 shadow-sm shrink-0 bg-slate-50 group-hover:border-blue-300 transition-colors">
                      <img
                        src={topper.imageUrl}
                        alt={topper.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=150";
                        }}
                      />
                      <div className="absolute top-0 left-0 bg-blue-600 text-white text-[9.5px] font-black px-2 py-0.5 rounded-br-lg shadow-sm">
                        #{idx + 1}
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-extrabold text-lg sm:text-xl border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {idx + 1}
                    </div>
                  )}
                  
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm sm:text-base leading-tight truncate">
                      {topper.name}
                    </h4>
                    <p className="text-slate-400 text-[11px] font-bold mt-0.5 uppercase tracking-wider leading-none">
                      {topper.grade}
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-3 mt-3 flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-slate-500">
                    {topper.rank || "First Class"}
                  </span>
                  <span className="text-slate-400 font-mono">
                    Year: {topper.year}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info message */}
        <div className="max-w-2xl mx-auto p-4.5 bg-amber-50 border border-amber-150 rounded-2xl text-center mt-12 text-xs text-amber-900 leading-relaxed">
          <Sparkles className="w-5 h-5 text-amber-500 mx-auto mb-1.5 animate-pulse" />
          "औसत से शुरुआत करने वाले बच्चों ने भी शानदार परिणाम देकर यह साबित कर दिया कि सही मार्गदर्शन ही असली सफलता की कुंजी है।"
        </div>

      </div>
    </section>
  );
}
