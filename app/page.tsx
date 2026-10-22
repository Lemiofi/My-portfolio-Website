import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import CurrentRoleSection from "@/components/CurrentRoleSection";
import ArticlesSection from "@/components/ArticlesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] text-neutral-100 selection:bg-neutral-300 selection:text-[#0a0a0c]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <SelectedWorkSection />
      <CurrentRoleSection />
      <ArticlesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
