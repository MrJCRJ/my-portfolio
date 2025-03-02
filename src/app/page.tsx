"use client";

import { useTheme } from "next-themes";
import ThemeToggle from "./components/ThemeToggle";
import ProfileSection from "./components/ProfileSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import ResumeSection from "./components/ResumeSection";
import Footer from "./components/Footer";

export default function Home() {
  const { theme } = useTheme();
  console.log(theme);

  return (
    <div className="min-h-screen p-6 sm:p-8 font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <ThemeToggle />
      <main className="max-w-2xl mx-auto">
        <ProfileSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <ResumeSection />
      </main>
      <Footer />
    </div>
  );
}
