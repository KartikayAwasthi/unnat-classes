import { SITE } from "./data";

const abs = (path: string) => (path.startsWith("http") ? path : `${SITE.url}${path}`);

export type BreadcrumbItem = { name: string; path: string };

export function breadcrumbList(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function articleSchema({
  type = "Article",
  headline,
  description,
  path,
  datePublished,
  dateModified,
  image,
  author,
}: {
  type?: "Article" | "BlogPosting" | "NewsArticle";
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string | null;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    headline,
    description,
    url: abs(path),
    datePublished,
    dateModified: dateModified ?? datePublished,
    ...(image ? { image: [abs(image)] } : {}),
    author: { "@type": "Organization", name: author ?? SITE.name, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: abs("/images/logo.png") },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": abs(path) },
  };
}

// Exam notification pages describe nationally-conducted exams (UPSC/SSC/State PSC etc.)
// rather than a single venue, so location is deliberately country-level rather than
// Unnat Classes' own address.
export function examEventSchema({
  name,
  description,
  path,
  startDate,
  image,
  url,
}: {
  name: string;
  description: string;
  path: string;
  startDate: string | null;
  image?: string | null;
  url?: string | null;
}) {
  if (!startDate) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    description,
    url: abs(path),
    startDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Various Exam Centres, India",
      address: { "@type": "PostalAddress", addressCountry: "IN" },
    },
    ...(image ? { image: [abs(image)] } : {}),
    ...(url ? { sameAs: url } : {}),
    organizer: { "@type": "Organization", name },
  };
}

export function personSchema({
  name,
  jobTitle,
  description,
  path,
  image,
  credentials,
}: {
  name: string;
  jobTitle: string;
  description: string;
  path: string;
  image?: string;
  credentials?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    description,
    url: abs(path),
    ...(image ? { image: abs(image) } : {}),
    worksFor: { "@type": "EducationalOrganization", name: SITE.name, url: SITE.url },
    ...(credentials && credentials.length > 0 ? { hasCredential: credentials } : {}),
  };
}

export function courseListSchema(
  groups: { title: string; range: string; subjects: string; description: string }[]
) {
  return groups.map((group) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${group.title} (${group.range})`,
    description: group.description,
    url: abs("/courses"),
    provider: {
      "@type": "EducationalOrganization",
      name: SITE.name,
      sameAs: SITE.url,
    },
    courseMode: "Onsite",
    inLanguage: "en",
    about: group.subjects,
  }));
}
