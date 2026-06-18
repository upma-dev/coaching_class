export interface Course {
  id: string;
  name: string;
  subtitle: string;
  grades: string;
  subjects: string[];
  features: string[];
  highlight: string;
  icon: string; // Lucide icon name
}

export interface StudentTopper {
  id: string;
  name: string;
  grade: "Class 10th" | "Class 12th";
  score: string;
  stream?: string;
  imageUrl?: string;
  rank?: string;
  year: string;
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  isImportant: boolean;
  category: "Admission" | "Result" | "Event" | "Holiday";
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Celebrations" | "Academic" | "Activities" | "Picnic";
  imageUrl: string;
  description: string;
}

export interface Branch {
  name: string;
  address: string;
  landmark: string;
  googleMapEmbedUrl: string;
  city: string;
}

export interface AdmissionInquiry {
  studentName: string;
  parentName: string;
  mobileNumber: string;
  selectedGrade: string;
  selectedCourse: string;
  address: string;
  message?: string;
}

export interface Teacher {
  name: string;
  phone: string;
  qualification: string;
  role: string;
  speciality: string;
  imageUrl: string;
  bio: string;
}

export interface FeeEnquiry {
  studentName: string;
  grade: string;
  contactNumber: string;
  email: string;
  extraInfo?: string;
}
