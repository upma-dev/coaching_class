import { useState } from "react";
import { Bell, Calendar, Sparkles, Filter, ChevronDown, CheckSquare, Megaphone, Info } from "lucide-react";
import { NOTICES } from "../data";

export default function NoticeBoard() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Admission" | "Result" | "Event">("All");
  const [expandedNoticeId, setExpandedNoticeId] = useState<string | null>(null);

  const filteredNotices = NOTICES.filter((notice) => {
    if (selectedCategory === "All") return true;
    return notice.category === selectedCategory;
  });

  const toggleExpand = (id: string) => {
    setExpandedNoticeId((prev) => (prev === id ? null : id));
  };

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case "Admission":
        return "bg-blue-50 border-blue-150 text-blue-700";
      case "Result":
        return "bg-emerald-50 border-emerald-150 text-emerald-700";
      case "Event":
        return "bg-amber-50 border-amber-150 text-amber-700";
      default:
        return "bg-slate-50 border-slate-150 text-slate-700";
    }
  };

  return (
    <section id="notices" className="py-20 bg-slate-50 relative border-t border-b border-slate-100">
      
      {/* Dynamic Headlines running announcement ticker */}
      <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white py-2 px-4 shadow-sm z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm font-semibold selection:bg-blue-500">
          <div className="flex items-center gap-2 bg-blue-700 px-3 py-1 rounded-md text-[10px] sm:text-xs font-black uppercase tracking-wider shrink-0 shadow-inner">
            <Megaphone className="w-3.5 h-3.5" />
            LIVE Updates
          </div>
          <div className="flex-1 overflow-hidden relative h-5 ml-4 text-left">
            <div className="absolute animate-marquee whitespace-nowrap flex gap-12 font-bold tracking-wide">
              <span>🚀 ADMISSIONS REGULAR BATCHES FOR 2026-2027 WORKSHOPS ARE ACTIVELY LIVE! ENROLL SOON!</span>
              <span>🏆 100% SUCCESS RATIO IN CLASS 10TH BOARD RESULTS (ALL 32 PASSED FIRST CLASS!)</span>
              <span>📚 FOR ENQUIRY OR DEMO SESSIONS, CONNECT WITH SANJU SIR (9131657804) / JIVESH SIR (9098816538)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-left">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:text-center">
          <span className="text-blue-600 font-extrabold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Academy Notice Board
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Notices, Bulletins & Academic Calendars
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Keep track of our daily batch timings, course orientations, test series schedules, and holiday bulletins.
          </p>
        </div>

        {/* Categories togglers */}
        <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2 mb-8">
          {(["All", "Admission", "Result", "Event"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4.5 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {cat === "All" ? "All Bulletins" : `${cat}s`}
            </button>
          ))}
        </div>

        {/* Notices container */}
        <div className="space-y-4">
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              className={`bg-white rounded-2xl border transition-all duration-200 custom-shadow-sm ${
                notice.isImportant ? "border-amber-200 bg-amber-50/10" : "border-slate-100"
              }`}
            >
              <div 
                onClick={() => toggleExpand(notice.id)}
                className="p-5 flex items-start gap-4 cursor-pointer select-none"
              >
                {/* Visual Icon */}
                <div className={`p-2.5 rounded-xl border flex-shrink-0 ${getCategoryTheme(notice.category)}`}>
                  <Bell className="w-5 h-5 animate-swing" />
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center flex-wrap gap-2">
                    <span className="text-[10px] font-bold text-slate-400 font-mono">
                      {notice.date}
                    </span>
                    <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${getCategoryTheme(notice.category)}`}>
                      {notice.category}
                    </span>
                    {notice.isImportant && (
                      <span className="text-[9px] font-black uppercase tracking-wider bg-orange-100 text-orange-850 px-2.5 py-0.5 rounded-full border border-orange-250 animate-pulse">
                        ⚠️ URGENT
                      </span>
                    )}
                  </div>
                  <h4 className="font-extrabold text-slate-800 text-sm sm:text-base leading-snug">
                    {notice.title}
                  </h4>
                </div>

                <div className="text-slate-400 self-center">
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-200 ${
                      expandedNoticeId === notice.id ? "rotate-180 text-blue-600" : ""
                    }`} 
                  />
                </div>
              </div>

              {/* Collapsible details pane */}
              {expandedNoticeId === notice.id && (
                <div className="px-5 pb-5 pt-1 border-t border-slate-100/60 animate-fade-in">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-13">
                    {notice.content}
                  </p>
                  
                  {/* Small notice details footer */}
                  <div className="mt-3.5 pl-13 flex items-center gap-1.5 text-[10px] text-slate-450">
                    <Info className="w-3.5 h-3.5 text-blue-500" />
                    <span>For questions on this announcement, report directly to Jivesh or Sanju Sir.</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty placeholder if no notices filter */}
        {filteredNotices.length === 0 && (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-100">
            <Info className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <p className="text-slate-500 text-sm font-semibold">No recent reports found in this category.</p>
          </div>
        )}

      </div>
    </section>
  );
}
