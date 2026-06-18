import { useState, useEffect } from "react";
import { 
  GraduationCap, 
  Phone, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Heart, 
  Quote, 
  MessageCircleCode, 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  Sparkles, 
  X, 
  MessageSquareText, 
  BookOpen, 
  Award 
} from "lucide-react";
import { TEACHERS, NOTICES } from "../data";

// Import Hero Background slider images to ensure correct bundling in production
import studyDeskHero from "../assets/images/study_desk_hero_1781776563840.jpg";
import classroomHero from "../assets/images/classroom_hero_1781776585660.jpg";
import flatlayHero from "../assets/images/flatlay_hero_1781776608067.jpg";

interface HeroProps {
  onOpenAdmissionModal: () => void;
  onOpenEnquiryModal: () => void;
}

export default function Hero({ onOpenAdmissionModal, onOpenEnquiryModal }: HeroProps) {
  // Automatic Background slider image list using imported static resource variables
  const bgImages = [
    studyDeskHero,
    classroomHero,
    flatlayHero
  ];

  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Teacher bio selection modal inside poster
  type TeacherType = typeof TEACHERS[0];
  const [selectedTeacher, setSelectedTeacher] = useState<TeacherType | null>(null);

  // Auto-slide ticking logic (5 seconds total cycle)
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
          return 0;
        }
        return prev + 2; // Increments by 2% every 100ms = 5000ms loop
      });
    }, 100);

    return () => clearInterval(timer);
  }, [isPlaying, bgImages.length, currentBgIndex]);

  const handleSelectSlide = (index: number) => {
    setCurrentBgIndex(index);
    setProgress(0);
  };

  const handleNextSlide = () => {
    setCurrentBgIndex((prev) => (prev + 1) % bgImages.length);
    setProgress(0);
  };

  const handlePrevSlide = () => {
    setCurrentBgIndex((prev) => (prev === 0 ? bgImages.length - 1 : prev - 1));
    setProgress(0);
  };

  // Stats Details with custom descriptions for hover overlay
  const statDetails = [
    { 
      value: "32+", 
      label: "Years Exp", 
      detail: "Providing top academic success in Susner since 1994.", 
      color: "text-blue-600", 
      bg: "bg-blue-50/50" 
    },
    { 
      value: "100%", 
      label: "Class 10th Div 1", 
      detail: "Every single student of Batch 2026 passed in 1st division!", 
      color: "text-indigo-600", 
      bg: "bg-indigo-50/50" 
    },
    { 
      value: "1000+", 
      label: "Happy Alumni", 
      detail: "Graduates studying & working in premium positions nationwide.", 
      color: "text-amber-500", 
      bg: "bg-amber-50/50" 
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden bg-slate-50">
      {/* Background Slideshow with cross-fading effect */}
      <div className="absolute inset-0 z-0">
        {bgImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              currentBgIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.88) 35%, rgba(243, 248, 255, 0.55) 80%, rgba(255, 255, 255, 0.88)), url(${image})`,
            }}
          />
        ))}

        {/* Manual Slides Navigator Chevrons */}
        <button 
          onClick={handlePrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 text-slate-700 hover:text-blue-600 bg-white/70 hover:bg-white border border-slate-200/40 rounded-full shadow-md transition-all hidden md:block cursor-pointer active:scale-95 hover:scale-110"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={handleNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 text-slate-700 hover:text-blue-600 bg-white/70 hover:bg-white border border-slate-200/40 rounded-full shadow-md transition-all hidden md:block cursor-pointer active:scale-95 hover:scale-110"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Soft grid overlay pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4 sm:mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column: Academic Accomplishments */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 animate-fade-in text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-xs sm:text-sm font-bold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              सफलता कोचिंग क्लासेस • Session 2026-27 Registrations Open
            </div>

            <div className="space-y-4 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                32 वर्षों से शिक्षा एवं सफलता का{" "}
                <span className="relative inline-block text-blue-600 whitespace-nowrap">
                  विश्वासपात्र नाम
                  <span className="absolute left-0 bottom-1 w-full h-2 bg-blue-100 -z-10 rounded-full animate-pulse"></span>
                </span>
              </h1>
              
              <p className="text-xl font-bold font-serif italic text-slate-755 flex items-center gap-1.5">
                <Quote className="w-4 h-4 text-blue-500 transform rotate-180" />
                <span>शिक्षा ही सफलता की कुंजी है</span>
                <Quote className="w-4 h-4 text-blue-500" />
              </p>
              
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Welcome to <strong className="text-slate-800">Safalta Coaching Classes (SCC)</strong>, Susner’s highest-rated institute. Under the experienced mentorship of <strong className="text-slate-800">Jivesh Sir & Sanju Sir</strong>, we offer highly-disciplined learning environments, comprehensive weekly evaluations, and elite board results.
              </p>
            </div>

            {/* Interactive Stats bento layout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl">
              {statDetails.map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-3 bg-white/80 backdrop-blur-xs rounded-2xl border border-slate-100 shadow-sm hover:border-blue-400 group relative overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  <div className="space-y-1 relative z-10 text-left">
                    <p className={`text-2xl sm:text-3xl font-black ${stat.color} leading-none flex items-center justify-between`}>
                      <span>{stat.value}</span>
                      <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300 text-amber-500" />
                    </p>
                    <p className="text-[10px] sm:text-[11px] font-black text-slate-800 uppercase tracking-widest leading-none mt-1">{stat.label}</p>
                    
                    {/* Collapsible dynamic interactive description on hover */}
                    <p className="overflow-hidden max-h-0 group-hover:max-h-16 group-hover:mt-2 transition-all duration-300 text-[10px] text-slate-500 leading-normal font-semibold">
                      {stat.detail}
                    </p>
                  </div>
                  
                  {/* Decorative fill lines indicating interaction */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-blue-500 group-hover:w-full transition-all duration-300 pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Background Control Pills Ticker */}
            <div className="bg-white/80 backdrop-blur-xs border border-slate-200/50 rounded-2xl p-3 max-w-md flex items-center justify-between gap-4 shadow-xs">
              <span className="text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-wider font-mono">
                Interactive Slides:
              </span>
              <div className="flex items-center gap-2 flex-grow justify-start">
                {bgImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectSlide(idx)}
                    className="relative h-2 flex-1 max-w-[60px] rounded-full bg-slate-250 overflow-hidden cursor-pointer"
                    title={`Slide ${idx + 1}`}
                  >
                    <div 
                      className={`absolute inset-0 bg-blue-600 rounded-full transition-all ${
                        currentBgIndex === idx ? "opacity-100" : "opacity-0"
                      }`}
                      style={{
                        width: currentBgIndex === idx ? `${progress}%` : "0%",
                        transition: currentBgIndex === idx && progress > 0 ? "width 100ms linear" : "none"
                      }}
                    />
                  </button>
                ))}
              </div>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1 px-2.5 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-slate-100 transition-all cursor-pointer text-[10px] sm:text-xs font-extrabold flex items-center gap-1 shrink-0"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-blue-600" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500 animate-pulse" />
                    <span className="text-emerald-600 font-bold">Play</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Interactive CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-2 max-w-md sm:max-w-none">
              <button
                onClick={onOpenAdmissionModal}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer text-base sm:text-lg transform hover:-translate-y-0.5"
              >
                Online Admission Form
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={onOpenEnquiryModal}
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 font-bold py-3.5 px-6 rounded-xl border border-slate-200 transition-all cursor-pointer text-base shadow-xs"
              >
                Enquiry Fee Structures
              </button>
            </div>

            {/* Direct Connect Live Social / Contact Buttons */}
            <div className="flex flex-wrap items-center gap-4 text-slate-600 text-xs sm:text-sm font-medium pt-2">
              <div className="flex items-center gap-1.5 bg-green-50 text-green-700 border border-green-150 px-3.5 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                <strong>Direct WhatsApp Support:</strong>
                <a
                  href="https://wa.me/919098816538?text=Hello%20Safalta%20Coaching%20Classes,%20I%20want%20to%20enquire%20about%20admissions."
                  target="_blank"
                  rel="noreferrer"
                  className="font-extrabold hover:underline text-green-850 flex items-center gap-0.5"
                >
                  Jivesh Sir
                </a>
                <span>/</span>
                <a
                  href="https://wa.me/919131657804?text=Hello%20Safalta%20Coaching%20Classes,%20I%20want%20to%20enquire%20about%20admissions."
                  target="_blank"
                  rel="noreferrer"
                  className="font-extrabold hover:underline text-green-850"
                >
                  Sanju Sir
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Complete High-Fidelity Replication of the Poster */}
          <div className="lg:col-span-6 relative w-full flex justify-center lg:justify-end animate-slide-up">
            <div className="relative w-full max-w-md bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden p-1.5 sm:p-2 bg-gradient-to-b from-blue-50/60 to-white">
              
              {/* Dynamic Interactive Bio Modal Popover INSIDE the Poster (No disrupt layout) */}
              {selectedTeacher && (
                <div className="absolute inset-0 bg-white/98 backdrop-blur-md z-30 p-5 flex flex-col justify-between animate-fade-in text-left rounded-2xl scale-[0.99] origin-center shadow-2xl border border-blue-100">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-600 shadow-sm bg-blue-50">
                          <img 
                            src={selectedTeacher.imageUrl} 
                            alt={selectedTeacher.name} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/adventurer/svg?seed=${selectedTeacher.name}`;
                            }}
                          />
                        </div>
                        <div>
                          <h5 className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">{selectedTeacher.name}</h5>
                          <p className="text-[10px] text-blue-600 font-extrabold font-mono uppercase tracking-widest">{selectedTeacher.role}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => setSelectedTeacher(null)}
                        className="p-1 px-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer text-xs font-bold flex items-center gap-0.5"
                      >
                        <X className="w-4 h-4" />
                        <span>Close</span>
                      </button>
                    </div>

                    <div className="space-y-3 text-xs sm:text-sm text-slate-650 leading-relaxed max-h-[220px] overflow-y-auto pr-1">
                      <p className="font-bold text-slate-800 text-xs text-blue-600 bg-blue-50/40 px-2.5 py-1 rounded-md border border-blue-100/30">
                        {selectedTeacher.name === "Jivesh Sir" 
                          ? "🏢 Managing Director & Science Lead Specialist" 
                          : "📚 Academic Strategist & High School Grammar Master"
                        }
                      </p>
                      <p className="text-[12.5px]">
                        {selectedTeacher.name === "Jivesh Sir"
                          ? "Jivesh Sir has been steering academic excellence in Susner with rigorous evaluation structures and dedicated boards prep. He designs precise test templates that routinely match board examinations."
                          : "Sanju Sir commands excellence in secondary mathematics, Sanskrit & deep English grammar. He uses bilingual formulas developed over decades to help local students master complex topics."
                        }
                      </p>
                      <div className="p-3 bg-blue-50/45 rounded-xl border border-blue-100/30 flex items-start gap-2.5">
                        <Quote className="w-4 h-4 text-blue-500 shrink-0 transform rotate-180 mt-0.5" />
                        <p className="text-[11.5px] italic text-blue-800 font-semibold leading-relaxed">
                          {selectedTeacher.name === "Jivesh Sir"
                            ? "Focus on consistent discipline. If you prepare thoroughly in our weekly tests, the main board exams will feel like standard practice worksheets."
                            : "Language and mathematics require a strong logical blueprint. Once kids catch the fundamental structure, fear completely disappears."
                          }
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-3.5 border-t border-slate-100">
                    <a
                      href={`tel:+91${selectedTeacher.phone}`}
                      className="flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-250 text-slate-800 font-extrabold py-2.5 px-3 rounded-xl text-xs transition-colors cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5 text-blue-600 animate-swing" />
                      Direct Dial Phone
                    </a>
                    <a
                      href={`https://wa.me/91${selectedTeacher.phone}?text=Hello%20${encodeURIComponent(selectedTeacher.name)},%20I%20am%20enquiring%20about%20your%20coaching%20timings.`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1.5 bg-green-500 hover:bg-green-600 text-white font-extrabold py-2.5 px-3 rounded-xl text-xs transition-all cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <MessageSquareText className="w-3.5 h-3.5" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              )}

              {/* Poster Header Ribbon */}
              <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-center py-2 px-4 rounded-t-xl">
                <p className="text-[10px] uppercase font-mono tracking-widest text-blue-200 leading-none">!! EDUCATION IS KEY TO SUCCESS !!</p>
                <h3 className="text-xl sm:text-2xl font-black mt-1 font-serif tracking-tight">सफलता कोचिंग क्लासेस</h3>
                <p className="text-xs text-amber-300 font-bold tracking-normal mt-0.5">32 वर्षों से शिक्षा एवं सफलता का विश्वसनीय नाम ★</p>
              </div>

              {/* Poster Badge Row */}
              <div className="p-4 bg-gradient-to-br from-amber-50/90 to-orange-50/50 border-b border-orange-100 text-center relative overflow-hidden">
                <div className="absolute right-[-15px] top-[-15px] w-12 h-12 rounded-full bg-amber-400 opacity-20"></div>
                <div className="inline-flex items-center gap-1 bg-amber-500 text-white font-extrabold text-[11px] px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2 animate-bounce">
                  ★ ADMISSION OPEN ★
                </div>
                <h4 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight leading-none">
                  SESSION <span className="text-blue-600 font-mono">2026 - 2027</span>
                </h4>
                <p className="text-xs text-slate-500 font-bold mt-1">Enroll today with the premium guiding team</p>
              </div>

              {/* Teacher Portfolios inside CSS Poster (Click to reveal details popover) */}
              <div className="p-4 grid grid-cols-2 gap-4 border-b border-slate-100 bg-white relative">
                <div className="absolute top-1.5 inset-x-0 mx-auto text-center z-10 pointer-events-none">
                  <span className="text-[9px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full opacity-80 shadow-xs uppercase tracking-widest animate-pulse">
                    ✨ Click Face for Bio
                  </span>
                </div>
                
                {TEACHERS.map((teacher, index) => (
                  <div 
                    key={teacher.name} 
                    onClick={() => setSelectedTeacher(teacher)}
                    className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-3 border-blue-100 custom-shadow-sm group-hover:border-blue-500 group-hover:shadow-md transition-all duration-300 transform group-hover:scale-105">
                      <img
                        src={teacher.imageUrl}
                        alt={teacher.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/adventurer/svg?seed=${teacher.name}`;
                        }}
                      />
                    </div>
                    <div className="mt-2.5">
                      <span className="text-[10px] font-black text-blue-600 bg-blue-50/70 border border-blue-100 px-2.5 py-0.5 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {index === 0 ? "Senior Mentor" : "Lead Mentor"}
                      </span>
                      <h5 className="font-extrabold text-slate-800 text-sm sm:text-base mt-2 group-hover:text-blue-600 transition-colors">{teacher.name}</h5>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-500 font-mono mt-1 hover:underline">
                        <Phone className="w-2.5 h-2.5 text-emerald-500" />
                        {teacher.phone}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive Classes Offering Table (Click to jump to detail & view topics) */}
              <div className="p-4 space-y-3 bg-slate-50/50">
                <a
                  href="#courses"
                  className="flex items-start gap-4 p-3 bg-white hover:bg-blue-50/50 rounded-xl border border-slate-100 hover:border-blue-300 custom-shadow-sm transition-all duration-200 text-left cursor-pointer group/item block"
                  title="Explore Classes 1-10 Subjects & Schedules"
                >
                  <div className="bg-blue-100 text-blue-700 p-2.5 rounded-xl text-center font-bold font-mono text-sm leading-tight flex-shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                    कक्षा
                    <br />
                    1 - 10
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <p className="font-extrabold text-sm sm:text-base text-slate-800 leading-tight group-hover/item:text-blue-600 transition-colors">
                      कक्षा 1st से 10th तक
                    </p>
                    <p className="text-[11px] font-bold text-blue-600 font-mono mt-0.5">All Subjects (सभी विषय)</p>
                    <p className="text-[11px] text-slate-500 mt-1">Excellent foundations, mental mathematics & language.</p>
                  </div>
                  <span className="self-center text-blue-400 group-hover/item:text-blue-600 group-hover/item:translate-x-1 transition-all text-xs font-bold font-mono">
                    →
                  </span>
                </a>

                <a
                  href="#courses"
                  className="flex items-start gap-4 p-3 bg-white hover:bg-amber-50/50 rounded-xl border border-slate-100 hover:border-amber-300 custom-shadow-sm transition-all duration-200 text-left cursor-pointer group/item block"
                  title="Explore Classes 11-12 Streams"
                >
                  <div className="bg-amber-100 text-amber-800 p-2.5 rounded-xl text-center font-bold font-mono text-sm leading-tight flex-shrink-0 group-hover/item:bg-amber-500 group-hover/item:text-white transition-colors">
                    कक्षा
                    <br />
                    11-12
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <p className="font-extrabold text-sm sm:text-base text-slate-800 leading-tight group-hover/item:text-amber-600 transition-colors">
                      कक्षा 11th एवं 12th
                    </p>
                    <p className="text-[11px] font-bold text-amber-600 font-mono mt-0.5">Arts & English (कला एवं अंग्रेजी)</p>
                    <p className="text-[11px] text-slate-500 mt-1 font-serif italic">Dedicated guidance on literature & history boards.</p>
                  </div>
                  <span className="self-center text-amber-500 group-hover/item:text-amber-600 group-hover/item:translate-x-1 transition-all text-xs font-bold font-mono">
                    →
                  </span>
                </a>
              </div>

              {/* Poster Address footer */}
              <div className="bg-slate-100/80 p-3 text-center border-t border-slate-150 rounded-b-xl text-xs text-slate-700">
                <p className="font-bold">📍 Main Branches in Susner:</p>
                <div className="mt-1 flex flex-col gap-0.5 text-[11px]">
                  <p className="truncate"><strong>Branch 1:</strong> Shikhar Palace, Near Suman Garden, Jamuniya Rd</p>
                  <p className="truncate"><strong>Branch 2:</strong> Near Digambar Gyan Mandir School, Chhatrawas</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
