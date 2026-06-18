import { useState } from "react";
import { Camera, Layers, Image as ImageIcon, Sparkles, X, ChevronLeft, ChevronRight, Share2 } from "lucide-react";
import { GALLERY } from "../data";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<"All" | "Celebrations" | "Academic" | "Picnic" | "Activities">("All");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const categories = [
    { value: "All", label: "All Memorabilia" },
    { value: "Celebrations", label: "Holi & Festivals" },
    { value: "Academic", label: "Board Departure" },
    { value: "Picnic", label: "Outings & Picnics" },
    { value: "Activities", label: "Sunday Funday" },
  ] as const;

  const filteredPhotos = GALLERY.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  const handleNextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => (prev! + 1) % filteredPhotos.length);
    }
  };

  const handlePrevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-14 text-left sm:text-center">
          <span className="text-blue-600 font-extrabold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Life at Safalta Class
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Our Student Gallery & Highlights
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Education is not confined to blackboards. Peek into our joyful celebrations, academic milestones, and dynamic weekend activities in Susner.
          </p>
        </div>

        {/* Categories Tab Bar Selector */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar select-none">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4.5 py-2 text-xs sm:text-sm font-bold rounded-lg border whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.value
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(GALLERY.indexOf(photo))}
              className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden cursor-pointer hover:border-blue-200 transition-all duration-300 group custom-shadow-sm hover:custom-shadow-md text-left"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-slate-200">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600";
                  }}
                />
                {/* Overlay sticker */}
                <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-black text-blue-600 uppercase tracking-widest border border-slate-200 shadow-xs">
                  {photo.category}
                </div>
              </div>
              <div className="p-5 space-y-1.5 bg-white">
                <h4 className="font-extrabold text-slate-800 text-sm sm:text-base leading-tight group-hover:text-blue-600 transition-colors">
                  {photo.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal slider overlay */}
        {selectedPhotoIndex !== null && (
          <div className="fixed inset-0 z-110 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
            
            {/* Close */}
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav */}
            <button
              onClick={handlePrevPhoto}
              className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer hidden sm:block"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Picture frame */}
            <div className="max-w-4xl w-full flex flex-col items-center space-y-4 animate-scale-up">
              <div className="max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl relative bg-slate-900 border border-white/5">
                <img
                  src={GALLERY[selectedPhotoIndex].imageUrl}
                  alt={GALLERY[selectedPhotoIndex].title}
                  referrerPolicy="no-referrer"
                  className="max-h-[65vh] w-auto object-contain mx-auto"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600";
                  }}
                />
              </div>

              <div className="text-center text-white space-y-1.5 max-w-xl">
                <span className="text-[10px] uppercase tracking-widest font-mono text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                  {GALLERY[selectedPhotoIndex].category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-sans">
                  {GALLERY[selectedPhotoIndex].title}
                </h3>
                <p className="text-slate-300 text-xs max-w-md mx-auto leading-relaxed">
                  {GALLERY[selectedPhotoIndex].description}
                </p>
              </div>
            </div>

            {/* Right Nav */}
            <button
              onClick={handleNextPhoto}
              className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer hidden sm:block"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Tap navigation helper for mobile users */}
            <div className="absolute bottom-6 flex items-center gap-10 sm:hidden">
              <button onClick={handlePrevPhoto} className="text-white/60 active:text-white font-bold text-xs p-3 cursor-pointer">
                Prev Photo
              </button>
              <button onClick={handleNextPhoto} className="text-white/60 active:text-white font-bold text-xs p-3 cursor-pointer">
                Next Photo
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
