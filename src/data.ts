import { Course, StudentTopper, Notice, GalleryItem, Branch, Teacher } from "./types";

// Static asset imports to ensure correct compilation and hashing by Vite in production builds
import jiveshSir from "./assets/images/jivesh_sir_1781776625628.jpg";
import sanjuSir from "./assets/images/sanju_sir_1781776643674.jpg";
import varshaTopper from "./assets/images/varsha_topper_1781776662210.jpg";
import mahimaRathore from "./assets/images/mahima_rathore_1781777533824.jpg";
import chintanJain from "./assets/images/chintan_jain_1781777549844.jpg";
import dakshParmar from "./assets/images/daksh_parmar_1781777566363.jpg";
import jayantMalviya from "./assets/images/jayant_malviya_1781777578750.jpg";
import vinaySisodiya from "./assets/images/vinay_sisodiya_1781777592300.jpg";
import khayatiGarg from "./assets/images/khayati_garg_1781777604253.jpg";
import galleryHoli from "./assets/images/gallery_holi_1781777620975.jpg";
import galleryBoardPrep from "./assets/images/gallery_board_prep_1781777637037.jpg";

export const TEACHERS: Teacher[] = [
  {
    name: "Jivesh Sir",
    phone: "9098816538",
    qualification: "M.A. & B.Ed. (Specialised in English Language & Arts)",
    role: "Co-Director & Senior Educator",
    speciality: "Class 11-12th (Arts & English), Spoken English & Board Mentorship",
    imageUrl: jiveshSir,
    bio: "Guiding generations of students to brilliant academic success for over 30 years with an unwavering commitment to personalized learning and disciplined habits."
  },
  {
    name: "Sanju Sir",
    phone: "9131657804",
    qualification: "M.Sc. & Dedicated Subject Specialist",
    role: "Co-Director & Lead Educator",
    speciality: "Class 1st to 10th (All Subjects) & Performance Tracking",
    imageUrl: sanjuSir,
    bio: "Passionately driving early stage conceptual clarity, regular evaluation cycles, and special supportive guidance programs for every student."
  }
];

export const COURSES: Course[] = [
  {
    id: "primary-secondary",
    name: "Class 1st to 10th Regular Program",
    subtitle: "All Subjects Core Foundation (CBSE & MP Board preparation)",
    grades: "1st to 10th Grade",
    subjects: ["Mathematics", "Science", "SST & Hindi", "English Grammar", "Sanskrit"],
    features: [
      "Experienced & Dedicated Techers",
      "Regular Weekly Tests & Mock Assessments",
      "Special Focus on Handwriting & Basic Conceptual Maths",
      "Personalized Attention with daily doubt clearing sessions"
    ],
    highlight: "100% of our previous Class 10th batch (all 32/32 students) passed in 1st division!",
    icon: "BookOpen"
  },
  {
    id: "senior-secondary",
    name: "Class 11th & 12th Advanced Program",
    subtitle: "Arts & English Specialization",
    grades: "11th & 12th Grade",
    subjects: ["History", "Political Science", "Geography", "English Literature & Grammar", "Hindi Literature"],
    features: [
      "Rigorous Board Exam Oriented Syllabus Coverage",
      "Deep Answer-Writing Practice and timed dummy tests",
      "Special notes compiled directly under Sanju & Jivesh Sir's supervision",
      "Free career guidance seminars for competitive examinations"
    ],
    highlight: "Varsha Prajapati scored an outstanding 82% in Class 12th Arts Stream!",
    icon: "GraduationCap"
  },
  {
    id: "spoken-english",
    name: "Spoken English & Personality Prep",
    subtitle: "Confidently express yourself and master communication",
    grades: "Open for all students & enthusiasts",
    subjects: ["Conversational Fluency", "Grammar Hacks", "Vocabulary Expansion", "Public Speaking", "Confidence Building"],
    features: [
      "Interactive speaking circles & Sunday Funday activities",
      "Phonetics, accent improvement, and vocabulary logs",
      "Practical scenario practice (interviews, introductions, school debates)",
      "Eliminating the fear of speaking in front of large crowds"
    ],
    highlight: "Dynamic weekend interactive workshops curated by Jivesh Sir.",
    icon: "MessageSquareText"
  }
];

export const TOPPERS: StudentTopper[] = [
  {
    id: "varsha-prajapati",
    name: "Varsha Prajapati",
    grade: "Class 12th",
    score: "82%",
    stream: "Arts",
    imageUrl: varshaTopper,
    rank: "Arts Stream Topper",
    year: "2026"
  },
  {
    id: "mahima-rathore",
    name: "Mahima Rathore",
    grade: "Class 10th",
    score: "91%",
    rank: "Rank 1",
    imageUrl: mahimaRathore,
    year: "2026"
  },
  {
    id: "chintan-jain",
    name: "Chintan Jain",
    grade: "Class 10th",
    score: "88%",
    rank: "Rank 2",
    imageUrl: chintanJain,
    year: "2026"
  },
  {
    id: "daksh-parmar",
    name: "Daksh Parmar",
    grade: "Class 10th",
    score: "87.4%",
    rank: "Rank 3",
    imageUrl: dakshParmar,
    year: "2026"
  },
  {
    id: "jayant-malviya",
    name: "Jayant Malviya",
    grade: "Class 10th",
    score: "86.8%",
    rank: "Rank 4",
    imageUrl: jayantMalviya,
    year: "2026"
  },
  {
    id: "vinay-sisodiya",
    name: "Vinay Sisodiya",
    grade: "Class 10th",
    score: "86%",
    rank: "Rank 5",
    imageUrl: vinaySisodiya,
    year: "2026"
  },
  {
    id: "khayati-garg",
    name: "Khayati Garg",
    grade: "Class 10th",
    score: "85%",
    rank: "Rank 6",
    imageUrl: khayatiGarg,
    year: "2026"
  }
];

export const NOTICES: Notice[] = [
  {
    id: "notice-1",
    title: "🎯 Admissions Open for Session 2026-2027",
    content: "Registrations are actively ongoing for Classes 1st to 12th and Spoken English batch. Secure seat with special early-bird session scholarship.",
    date: "15 Jun 2026",
    isImportant: true,
    category: "Admission"
  },
  {
    id: "notice-2",
    title: "🏆 Stellar Board Results Declared!",
    content: "Hearty congratulations! All 32 students in our Class 10th batch passed in the First Division category with high flying scores.",
    date: "12 Jun 2026",
    isImportant: true,
    category: "Result"
  },
  {
    id: "notice-3",
    title: "🧺 Annual Educational Picnic Scheduled",
    content: "Registration details and parental consent slips for the annual summer picnic must be submitted to Sanju Sir on or before June 25th.",
    date: "10 Jun 2026",
    isImportant: false,
    category: "Event"
  },
  {
    id: "notice-4",
    title: "✨ Creative Sunday Funday Workshops",
    content: "A special self-development and storytelling Spoken English meet will take place this Sunday at Branch 1 (Jamuniya Road). All are welcome!",
    date: "08 Jun 2026",
    isImportant: false,
    category: "Event"
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "🌈 Holi 2K26 Splendid Celebrations",
    category: "Celebrations",
    imageUrl: galleryHoli,
    description: "Joyful colors, sweets, and laughter with teachers Jivesh Sir, Sanju Sir, and over a hundred smiling students."
  },
  {
    id: "gal-2",
    title: "🎓 Class 10th Board Exams Departure",
    category: "Academic",
    imageUrl: galleryBoardPrep,
    description: "Last-minute tips, guidelines, sweets, and custom-designed support packets handed out to our bright Class 10th champions."
  },
  {
    id: "gal-3",
    title: "🌲 Student Outing & Summer Picnic",
    category: "Picnic",
    imageUrl: "https://images.unsplash.com/photo-1511225070737-5af5ac9a690d?auto=format&fit=crop&q=80&w=600",
    description: "Building strong bonds outside classrooms, learning from nature, and sharing a delicious community picnic lunch."
  },
  {
    id: "gal-4",
    title: "🎨 Sunday Funday Mind-Mapping Activity",
    category: "Activities",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
    description: "Hands-on weekend learning games, personality grooming sessions, and public speaking rehearsals under guidelines."
  },
  {
    id: "gal-5",
    title: "✍️ Regular Subjective Evaluation Test",
    category: "Academic",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600",
    description: "Rigorous timed assessment series providing transparent, detailed analytics directly to parents weekly."
  },
  {
    id: "gal-6",
    title: "🕯️ Deepotsav & Traditional Blessings",
    category: "Celebrations",
    imageUrl: "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&q=80&w=600",
    description: "Traditional prayer ceremony and teacher blessings for the board aspirants (10th and 12th) before state board submissions."
  }
];

export const BRANCHES: Branch[] = [
  {
    name: "Branch 1: Jamuniya Road Head Office",
    address: "Shikhar Palace, Suman Marriage Garden ke paas, Jamuniya Road, Susner, Madhya Pradesh",
    landmark: "Behind Suman Marriage Garden, Near Shikhar Palace",
    city: "Susner (PIN 465447)",
    googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.789123456789!2d76.1012345!3d23.9512345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963bfbfbfbfbfbf%3A0xdeadbeefdeadbeef!2sSusner%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000001"
  },
  {
    name: "Branch 2: Shukrawariya Bajar Branch",
    address: "Shri Darshan Sagar Digambar Gyan Mandir School ke paas, Chhatrawas, Pandit Gali, Shukrawariya Bajar, Susner, Madhya Pradesh",
    landmark: "Beside Digambar Gyan Mandir School Hostel",
    city: "Susner (PIN 465447)",
    googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.789123456789!2d76.1023456!3d23.9523456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963bfbfbfbfbfbf%3A0xdeadbeefdeadbeef!2sSusner%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000002"
  }
];

export const CORE_FEATURES = [
  {
    title: "अनुभवी एवं समर्पित शिक्षक",
    desc: "32+ years of guiding students to highest conceptual scores, spearheaded by Jivesh Sir & Sanju Sir.",
    icon: "UsersRound"
  },
  {
    title: "नियमित टेस्ट एवं मूल्यांकन",
    desc: "Comprehensive feedback through weekly mock evaluation series and timely test card distribution.",
    icon: "ClipboardCheck"
  },
  {
    title: "विशेष व्यक्तिगत ध्यान",
    desc: "Strict batch limits ensuring tailored support and special custom modules for academic enrichment.",
    icon: "Focus"
  },
  {
    title: "शांत एवं अनुशासित वातावरण",
    desc: "Fostering academic focus, healthy competition, punctuality, and deep value-based motivation.",
    icon: "BookOpenCheck"
  },
  {
    title: "विशाल हॉल एवं बैठक व्यवस्था",
    desc: "Spacious classrooms equipped with pristine whiteboards, high back support desks, and perfect air ventilation.",
    icon: "School"
  },
  {
    title: "कमजोर छात्रों को विशेष मार्गदर्शन",
    desc: "Tailored slow-paced learning routes, back-to-basics worksheets, and daily homework checks.",
    icon: "HeartHandshake"
  }
];
