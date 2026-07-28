// MOCK DATA — placeholder content to preview how admin-uploaded
// Notes, Current Affairs, and Posts will render on the site.
// Replace with real data once the admin panel + database are wired up.

export type Note = {
  slug: string;
  title: string;
  subject: string;
  classRange: string;
  fileType: "PDF" | "DOC";
  fileSize: string;
  uploadedAt: string;
  description: string;
};

export const notes: Note[] = [
  {
    slug: "modern-history-freedom-struggle",
    title: "Modern History: The Freedom Struggle (1857–1947)",
    subject: "History",
    classRange: "Class 11–12",
    fileType: "PDF",
    fileSize: "2.4 MB",
    uploadedAt: "2026-07-20",
    description:
      "Complete revision notes covering the 1857 revolt through Independence, with key dates, movements, and personalities.",
  },
  {
    slug: "indian-polity-constitution-basics",
    title: "Indian Polity: Constitution Basics",
    subject: "Political Science",
    classRange: "Class 11–12 · GS Classes",
    fileType: "PDF",
    fileSize: "1.8 MB",
    uploadedAt: "2026-07-15",
    description:
      "Fundamental rights, duties, and the structure of government explained with simple diagrams and exam-style questions.",
  },
  {
    slug: "algebra-quick-formulas",
    title: "Algebra: Quick Formula Sheet",
    subject: "Mathematics",
    classRange: "Class 9–10",
    fileType: "PDF",
    fileSize: "640 KB",
    uploadedAt: "2026-07-10",
    description:
      "A one-page reference of every algebra identity and formula needed for board exams, with worked examples.",
  },
  {
    slug: "geography-climate-india",
    title: "Geography: Climate of India",
    subject: "Geography",
    classRange: "Class 11–12 · GS Classes",
    fileType: "PDF",
    fileSize: "3.1 MB",
    uploadedAt: "2026-07-05",
    description:
      "Monsoon mechanisms, climatic regions, and seasonal patterns with labeled maps for quick revision.",
  },
  {
    slug: "science-light-reflection-refraction",
    title: "Science: Light — Reflection & Refraction",
    subject: "Science",
    classRange: "Class 9–10",
    fileType: "PDF",
    fileSize: "1.2 MB",
    uploadedAt: "2026-06-28",
    description:
      "Ray diagrams, laws of reflection and refraction, and lens formulas explained step by step.",
  },
  {
    slug: "economics-indian-economy-overview",
    title: "Economics: Indian Economy — An Overview",
    subject: "Economics",
    classRange: "Class 11–12 · GS Classes",
    fileType: "PDF",
    fileSize: "2.0 MB",
    uploadedAt: "2026-06-20",
    description:
      "Sectors of the economy, planning history, and recent reforms summarized for quick reading before exams.",
  },
];

export type CurrentAffair = {
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string[];
};

export const currentAffairs: CurrentAffair[] = [
  {
    slug: "union-budget-2026-highlights",
    title: "Union Budget 2026: Key Highlights for Students",
    date: "2026-07-25",
    category: "Economy",
    summary:
      "A simplified breakdown of this year's Union Budget — the numbers that matter most for GS and Economics students.",
    content: [
      "The Union Budget 2026 was presented with a continued focus on infrastructure spending, education allocations, and support for MSMEs.",
      "For competitive exam aspirants, the key figures to remember are the fiscal deficit target, the allocation to the education sector, and any new scheme announcements — these are frequently asked in GS papers.",
      "Students should note the difference between capital expenditure and revenue expenditure, as this distinction is a recurring exam question.",
    ],
  },
  {
    slug: "isro-satellite-launch-july-2026",
    title: "ISRO Successfully Launches New Earth Observation Satellite",
    date: "2026-07-22",
    category: "Science & Tech",
    summary:
      "ISRO's latest launch strengthens India's earth-observation capability — relevant for both Science and GS current affairs.",
    content: [
      "The Indian Space Research Organisation (ISRO) successfully launched its newest earth observation satellite, aimed at improving weather forecasting and disaster management.",
      "This is an important current affairs topic for GS Classes students, as questions on ISRO missions, satellite names, and launch vehicles appear regularly in competitive exams.",
    ],
  },
  {
    slug: "new-education-policy-update",
    title: "New Education Policy: Latest Implementation Update",
    date: "2026-07-18",
    category: "National",
    summary:
      "An update on how states are implementing the National Education Policy, and what it means for school curricula.",
    content: [
      "Several states have announced updated timelines for rolling out the National Education Policy (NEP) framework in schools, affecting curriculum structure from the foundational stage onward.",
      "Students preparing for teaching exams like CTET should pay close attention to NEP provisions, as they are a major focus area.",
    ],
  },
  {
    slug: "international-yoga-day-recap",
    title: "International Day of Yoga: India's Global Initiative",
    date: "2026-06-21",
    category: "International",
    summary:
      "A quick recap of International Yoga Day and why it remains a popular General Studies topic.",
    content: [
      "International Day of Yoga was observed worldwide on June 21, marking another year of India's global cultural initiative at the United Nations.",
      "Questions on the origin of the day, the UN resolution, and its significance are common in GS current affairs sections.",
    ],
  },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  tag: string;
  excerpt: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "board-exam-preparation-tips",
    title: "10 Effective Study Tips for Board Exam Success",
    date: "2026-07-24",
    author: "Tanuja Singh",
    tag: "Exam Tips",
    excerpt:
      "Simple, practical habits that make a real difference in board exam preparation — from time management to revision strategy.",
    content: [
      "As board exams approach, students often feel overwhelmed by the sheer volume of material to cover. The key is not studying longer, but studying smarter.",
      "Start by creating a realistic daily timetable that includes short breaks. Prioritize subjects you find difficult earlier in the day when concentration is highest.",
      "Practice previous years' question papers under timed conditions — this builds both speed and confidence for the actual exam.",
      "Finally, don't neglect sleep and nutrition in the final weeks. A well-rested mind retains information far better than an exhausted one.",
    ],
  },
  {
    slug: "admissions-open-2026-27",
    title: "Admissions Now Open for the 2026–27 Academic Session",
    date: "2026-07-15",
    author: "Unnat Classes",
    tag: "Announcement",
    excerpt:
      "Seats are now open for Class 1–12, our Humanities stream, and the GS Competition Batch. Here's what you need to know.",
    content: [
      "We're excited to announce that admissions for the 2026–27 academic session are now open at Unnat Classes.",
      "We welcome students across Class 1 to 12, with dedicated tracks for the Humanities stream (Class 11–12) and our GS Classes competition batch.",
      "Seats are limited to keep batch sizes small, ensuring every student gets personalized attention. Contact us today to schedule a visit.",
    ],
  },
  {
    slug: "why-concept-based-learning-matters",
    title: "Why Concept-Based Learning Matters More Than Memorization",
    date: "2026-07-02",
    author: "Tanuja Singh",
    tag: "Teaching Philosophy",
    excerpt:
      "Rote learning might help in the short term, but real understanding is what carries students through higher education and life.",
    content: [
      "Many students are taught to memorize formulas and facts without understanding why they work. This approach might yield short-term results but rarely builds lasting knowledge.",
      "At Unnat Classes, every lesson is designed around genuine conceptual clarity. When students understand the 'why' behind a topic, they can apply that knowledge to new and unfamiliar problems — exactly what board and competitive exams increasingly test for.",
    ],
  },
];
