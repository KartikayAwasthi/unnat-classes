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
  tagline: "Education Today, Success Tomorrow",
  subTagline: "Learn Today, Lead Tomorrow",
  mission:
    "Our mission is to provide every child with quality education, strong values, and a better direction for a better future.",
  classesRange: "Class 1 to 10",
  phone: "9821602932",
  phoneHref: "tel:+919821602932",
  address: "Unnat Classes — Building Strong Foundations for a Bright Future.",
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
  { label: "Classes Offered", value: "1–10" },
  { label: "Focus Areas", value: "6+" },
  { label: "Batch Size", value: "Small" },
  { label: "Dedicated Teachers", value: "100%" },
];

export const teacher = {
  name: "Tanuja Rajput",
  role: "Founder & Lead Teacher, Unnat Classes",
  quote:
    "Every child is unique — my role is simply to help them discover their own potential.",
  bio: [
    "Tanuja Rajput founded Unnat Classes with a simple belief: every child deserves quality education, patient guidance, and a learning environment where they feel safe to grow.",
    "With years of experience teaching students from Class 1 to 10, she has developed a concept-first teaching style that focuses on genuine understanding rather than rote memorization — helping students build strong foundations that last well beyond the classroom.",
    "Beyond academics, she places equal emphasis on discipline, confidence, and values, believing that true success comes from developing the whole child, not just exam results.",
  ],
  highlights: [
    "Concept-based teaching across Class 1 to 10",
    "Personalized attention through small batch sizes",
    "Regular assessments with detailed feedback",
    "A safe, motivating, and value-driven classroom culture",
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
    range: "Class 1 – 5",
    title: "Foundation Years",
    description:
      "Building strong basics in reading, writing, and numeracy through engaging, concept-based learning.",
  },
  {
    range: "Class 6 – 8",
    title: "Building Blocks",
    description:
      "Strengthening core subjects and study habits as the curriculum grows more demanding.",
  },
  {
    range: "Class 9 – 10",
    title: "Exam Readiness",
    description:
      "Focused board-exam preparation with complete syllabus coverage, regular tests, and doubt-clearing sessions.",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/teacher", label: "Our Teacher" },
  { href: "/contact", label: "Contact" },
];
