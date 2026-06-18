import { BookOpen, GraduationCap, MessageSquareText, Check, Award, Copy, UsersRound, ClipboardCheck, Focus, BookOpenCheck, School, HeartHandshake } from "lucide-react";
import { COURSES, CORE_FEATURES } from "../data";

interface CourseDetailsProps {
  onOpenAdmissionModal: () => void;
}

export default function CourseDetails({ onOpenAdmissionModal }: CourseDetailsProps) {
  
  // Custom Icon Selector
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "BookOpen":
        return <BookOpen className="w-6 h-6 text-blue-600" />;
      case "GraduationCap":
        return <GraduationCap className="w-6 h-6 text-indigo-600" />;
      case "MessageSquareText":
        return <MessageSquareText className="w-6 h-6 text-blue-600" />;
      default:
        return <BookOpen className="w-6 h-6 text-blue-600" />;
    }
  };

  // Custom Feature Icon Selector for "हमारी विशेषताएँ"
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "UsersRound":
        return <UsersRound className="w-6 h-6 text-blue-600" />;
      case "ClipboardCheck":
        return <ClipboardCheck className="w-6 h-6 text-indigo-600" />;
      case "Focus":
        return <Focus className="w-6 h-6 text-blue-600" />;
      case "BookOpenCheck":
        return <BookOpenCheck className="w-6 h-6 text-blue-600" />;
      case "School":
        return <School className="w-6 h-6 text-indigo-600" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6 text-blue-600" />;
      default:
        return <Check className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-16">
          <span className="text-blue-600 font-extrabold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Available Courses
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Comprehensive Academics & Language Masteries
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Choose from our specialized programs custom-crafted under state board and CBSE alignments to foster absolute, conceptual clarity.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div 
              key={course.id} 
              className="bg-slate-50/50 rounded-2xl border border-slate-100 p-6 sm:p-8 flex flex-col justify-between hover:bg-white hover:border-blue-105 transition-all duration-300 group custom-shadow-sm hover:custom-shadow-md text-left"
            >
              <div className="space-y-6">
                {/* Header Icon & Class */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-white rounded-xl custom-shadow-sm group-hover:scale-105 transition-transform">
                    {getIcon(course.icon)}
                  </div>
                  <span className="text-xs font-extrabold px-3 py-1 bg-white rounded-full text-slate-500 border border-slate-150">
                    {course.grades}
                  </span>
                </div>

                {/* Course Name */}
                <div className="space-y-1">
                  <h3 className="text-xl font-bold font-sans text-slate-900 group-hover:text-blue-600 transition-colors">
                    {course.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500">
                    {course.subtitle}
                  </p>
                </div>

                {/* Highlight Slogan Box */}
                <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100/50 text-[11px] text-blue-700 font-semibold flex items-start gap-1.5 leading-snug">
                  <Award className="w-4.5 h-4.5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>{course.highlight}</span>
                </div>

                {/* Covered Subjects Row */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Covered Subjects:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {course.subjects.map((sub) => (
                      <span key={sub} className="text-xs font-semibold bg-white border border-slate-150 text-slate-600 px-2.5 py-1 rounded-md">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Core Syllabus Features list */}
                <div className="space-y-3 pt-2">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Guaranteed features:</span>
                  <ul className="space-y-2.5">
                    {course.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-slate-600 leading-snug">
                        <span className="bg-emerald-100 text-emerald-800 p-0.5 rounded-full flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <button
                  onClick={onOpenAdmissionModal}
                  className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 text-xs sm:text-sm rounded-xl shadow-xs transition-colors cursor-pointer text-center"
                >
                  Apply Online Form
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature List: "हमारी विशेषताएँ" (Our Core Value Proposition Highlights) */}
        <div id="features" className="mt-28 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-indigo-600 font-extrabold text-xs uppercase tracking-widest bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
              हमारी विशेषताएँ
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
              Why Safalta Coaching is the Best Choice
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm">
              Explore our core pillars of discipline, regular subjective assessments, and supportive learning setups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CORE_FEATURES.map((feature) => (
              <div 
                key={feature.title} 
                className="bg-slate-50/50 hover:bg-white rounded-2xl border border-slate-100 p-6 flex gap-4 text-left hover:border-blue-100 transition-all custom-shadow-sm hover:custom-shadow-md"
              >
                <div className="p-3 bg-white border border-slate-100 rounded-xl custom-shadow-sm flex-shrink-0 h-fit">
                  {getFeatureIcon(feature.icon)}
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                    {feature.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
