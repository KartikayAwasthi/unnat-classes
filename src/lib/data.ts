import {
  Users,
  BookOpenCheck,
  Target,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  ClipboardList,
  Laptop,
  MessagesSquare,
  BarChart3,
  HeartHandshake,
  Library,
  GraduationCap,
  Landmark,
  Sprout,
  Blocks,
  Award,
} from "lucide-react";

export const SITE = {
  name: "Unnat Classes",
  // This single value feeds metadataBase, canonical URLs, sitemap.xml, robots.txt, and OG/Twitter tags.
  // TODO: swap to the custom domain (www.unnatclasses.com) once it's registered and DNS is pointed at Vercel.
  url: "https://unnat-classes.vercel.app",
  tagline: "Education Today, Success Tomorrow",
  subTagline: "Learn Today, Lead Tomorrow",
  mission:
    "Our mission is to provide every child with quality education, strong values, and a better direction for a better future.",
  classesRange: "Class 1 to 12",
  classesNote:
    "Class 1–10: All Subjects · Class 11–12: Humanities Stream · Competition Batch: GS Classes",
  phone: "9821602932",
  phoneHref: "tel:+919821602932",
  whatsappHref:
    "https://wa.me/919821602932?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20admissions%20at%20Unnat%20Classes.",
  address: "A-7, Ganesh Nagar Colony, New Bhupani, Near Puri Aman Villa, Sector 89, Faridabad",
  city: "Faridabad",
  state: "Haryana",
  // TODO: add the exact postal code for Sector 89 — omitted for now rather than guessed.
  country: "IN",
  geo: { lat: 28.424347, lng: 77.376129 },
  mapsHref: "https://maps.google.com/?q=28.424347,77.376129",
  admissionsNote: "Admissions Open — Limited Seats. Enroll Today!",
};

export const whyChooseUs = [
  {
    icon: Users,
    title: "Experienced & Dedicated Teachers",
    description:
      "Our teachers bring years of classroom experience and genuine dedication to every student's growth.",
  },
  {
    icon: BookOpenCheck,
    title: "Concept Based Learning & Smart Study Material",
    description:
      "We focus on building real understanding with carefully designed, easy-to-follow study material.",
  },
  {
    icon: Target,
    title: "Regular Tests & Personalized Attention",
    description:
      "Frequent assessments and one-on-one attention keep every child on track and confident.",
  },
  {
    icon: TrendingUp,
    title: "Focus on Overall Development",
    description:
      "We nurture academics alongside personality, communication, and life skills.",
  },
  {
    icon: ShieldCheck,
    title: "Building Confidence, Discipline & Values",
    description:
      "Strong values and discipline are woven into learning, shaping responsible young minds.",
  },
] as const;

export const features = [
  {
    icon: Library,
    title: "Complete Syllabus Coverage",
    description: "Every topic, thoroughly covered — nothing left to chance.",
  },
  {
    icon: ClipboardList,
    title: "Regular Tests & Assessments",
    description: "Consistent evaluation to track progress and reinforce learning.",
  },
  {
    icon: Users,
    title: "Small Batches for Individual Attention",
    description: "Small class sizes so every child gets noticed and guided.",
  },
  {
    icon: MessagesSquare,
    title: "Doubt Clearing Sessions",
    description: "Dedicated time to clear every question, big or small.",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking & Feedback",
    description: "Clear, regular feedback for students and parents alike.",
  },
  {
    icon: HeartHandshake,
    title: "Safe, Supportive & Motivating Environment",
    description: "A warm, encouraging space where every child feels they belong.",
  },
] as const;

export const stats = [
  { label: "Classes Offered", value: "1–12" },
  { label: "Years of Experience", value: "8+" },
  { label: "Batch Size", value: "Small" },
  { label: "Dedicated Teachers", value: "100%" },
];

export const teacher = {
  name: "Tanuja Singh",
  role: "Founder & Lead Teacher, Unnat Classes",
  photo: "/images/tanuja-singh.jpg",
  quote:
    "Every child is unique — my role is simply to help them discover their own potential.",
  bio: [
    "Tanuja Singh founded Unnat Classes with a simple belief: every child deserves quality education, patient guidance, and a learning environment where they feel safe to grow.",
    "With over 8 years of experience teaching Social Sciences, Liberal Arts, Science, and Elementary Mathematics, she has developed a concept-first teaching style that focuses on genuine understanding rather than rote memorization — helping students build strong foundations that last well beyond the classroom.",
    "She previously served as a Senior Teacher at Asha Ram Royal Public School, and independently ran a tuition center for Class 6 to 10 for several years, combining structured lesson planning with personalized, one-on-one attention for every student.",
    "Beyond academics, she places equal emphasis on discipline, confidence, and values, believing that true success comes from developing the whole child, not just exam results.",
  ],
  highlights: [
    "8+ years of teaching experience across Social Sciences, Liberal Arts, Science & Elementary Mathematics",
    "Senior Teacher at Asha Ram Royal Public School (2019–2023)",
    "Founder & Lead Instructor of a self-established tuition center for Class 6–10 (2016–2023)",
    "CTET & UGC NET (Political Science) qualified educator",
  ],
  education: [
    "B.Ed — Chaudhary Ranbir Singh University, Haryana",
    "M.A. Political Science (Hons.) — Kalinga University, Madhya Pradesh",
    "M.A. Public Administration (Hons.) — Indira Gandhi National Open University",
    "B.A. Political Science (Hons.) — School of Open Learning, Delhi University",
  ],
  certifications: [
    "CTET Qualified",
    "UGC NET Qualified — Political Science",
    "Diploma in Research & Computer Application — Simtech Institute, Delhi",
  ],
  philosophy: [
    {
      icon: Sparkles,
      title: "Understanding over memorizing",
      description:
        "Lessons are built around real conceptual clarity so students can apply what they learn, not just recall it.",
    },
    {
      icon: Laptop,
      title: "Every child is unique",
      description:
        "Teaching adapts to each student's pace, strengths, and challenges rather than a one-size-fits-all approach.",
    },
    {
      icon: ShieldCheck,
      title: "Discipline with warmth",
      description:
        "A structured, disciplined classroom that still feels safe, supportive, and encouraging.",
    },
  ],
};

export const classGroups = [
  {
    icon: Sprout,
    range: "Class 1 – 5",
    title: "Foundation Years",
    subjects: "All Subjects",
    description:
      "Building strong basics in reading, writing, and numeracy through engaging, concept-based learning.",
  },
  {
    icon: Blocks,
    range: "Class 6 – 8",
    title: "Building Blocks",
    subjects: "All Subjects",
    description:
      "Strengthening core subjects and study habits as the curriculum grows more demanding.",
  },
  {
    icon: Award,
    range: "Class 9 – 10",
    title: "Exam Readiness",
    subjects: "All Subjects",
    description:
      "Focused board-exam preparation with complete syllabus coverage, regular tests, and doubt-clearing sessions.",
  },
  {
    icon: Landmark,
    range: "Class 11 – 12",
    title: "Humanities Stream",
    subjects: "Humanities Only",
    description:
      "Focused coaching in Political Science, History, Geography, and Economics for senior secondary Humanities students, led by a UGC NET & Political Science postgraduate.",
  },
  {
    icon: Target,
    range: "Competition Batch",
    title: "GS Classes",
    subjects: "General Studies",
    description:
      "Dedicated General Studies coaching for competitive exam aspirants, covering History, Geography, Polity, Economics, and Current Affairs.",
  },
];

export const subjectsByStage = [
  {
    icon: GraduationCap,
    range: "Class 1 – 10",
    label: "All Subjects",
    description:
      "Complete coverage across every subject — languages, mathematics, science, and social science.",
  },
  {
    icon: Landmark,
    range: "Class 11 – 12",
    label: "Humanities Only",
    description:
      "Political Science, History, Geography, and Economics for the Humanities/Arts stream.",
  },
  {
    icon: Target,
    range: "Competition Batch",
    label: "GS Classes",
    description:
      "General Studies coaching for competitive exam aspirants — History, Geography, Polity, Economics & Current Affairs.",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/teacher", label: "Our Teacher" },
  { href: "/contact", label: "Contact" },
];
