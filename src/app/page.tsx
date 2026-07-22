import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Features from "@/components/home/Features";
import Classes from "@/components/home/Classes";
import TeacherPreview from "@/components/home/TeacherPreview";
import AdmissionCTA from "@/components/home/AdmissionCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Features />
      <Classes />
      <TeacherPreview />
      <AdmissionCTA />
    </>
  );
}
