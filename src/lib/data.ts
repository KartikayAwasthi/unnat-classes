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
} from "lucide-react";

export const SITE = {
  name: "Unnat Classes",
  // This single value feeds metadataBase, canonical URLs, sitemap.xml, robots.txt, and OG/Twitter tags.
  // Must match the domain that actually serves 200s (apex unnatclasses.in redirects here) —
  // a canonical URL that itself redirects stops Google from associating structured data (e.g. logo) with the page.
  url: "https://www.unnatclasses.in",
  tagline: "Building Strong Foundation for Bright Futures.",
  subTagline: "Learn Today, Lead Tomorrow",
  mission:
    "Our mission is to provide every child with quality education, strong values, and a better direction for a better future.",
  classesRange: "GS Classes",
  classesNote:
    "Competition Batch — General Studies coaching for competitive exam aspirants, covering History, Geography, Polity, Economics & Current Affairs.",
  email: "unnatclass@gmail.com",
  emailHref: "mailto:unnatclass@gmail.com",
  address: "A-7, Ganesh Nagar Colony, New Bhupani, Near Puri Aman Villa, Sector 89, Faridabad",
  city: "Faridabad",
  state: "Haryana",
  // TODO: add the exact postal code for Sector 89 — omitted for now rather than guessed.
  country: "IN",
  geo: { lat: 28.424347, lng: 77.376129 },
  mapsHref: "https://maps.google.com/?q=28.424347,77.376129",
  admissionsNote: "Admissions Open — Limited Seats. Enroll Today!",
  youtubeHref: "https://www.youtube.com/@UnnatClasses-Tannu",
  instagramHref: "https://www.instagram.com/unnatclasses.in/",
  twitterHref: "https://x.com/unnatclasses?s=11",
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
  { label: "Competition Batch", value: "GS Classes" },
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
    "She previously founded and led a self-established Coaching center for Class 6 to 10 for several years, combining structured lesson planning with personalized, one-on-one attention for every student.",
    "Beyond academics, she places equal emphasis on discipline, confidence, and values, believing that true success comes from developing the whole child, not just exam results.",
  ],
  highlights: [
    "8+ years of teaching experience across Social Sciences, Liberal Arts, Science & Elementary Mathematics",
    "Founder & Lead Instructor of a self-established Coaching center",
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
    icon: Target,
    range: "Competition Batch",
    title: "GS Classes",
    subjects: "General Studies",
    description:
      "Dedicated General Studies coaching for competitive exam aspirants, covering History, Geography, Polity, Economics, and Current Affairs.",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  {
    href: "/resources",
    label: "Resources",
    children: [
      { href: "/resources/notes", label: "Notes" },
      { href: "/resources/current-affairs", label: "Current Affairs" },
      { href: "/resources/daily-current-affairs", label: "Daily Current Affairs" },
      { href: "/resources/posts", label: "Posts" },
      { href: "/resources/videos", label: "Videos" },
    ],
  },
  { href: "/exams", label: "Exams" },
  { href: "/teacher", label: "Our Teacher" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reels", label: "Reels" },
  { href: "/contact", label: "Contact" },
];
