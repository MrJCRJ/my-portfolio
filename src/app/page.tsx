"use client";

import { useEffect, useState } from "react";
import ProfileSection from "./components/ProfileSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen p-6 sm:p-8 font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <main className="max-w-2xl mx-auto pt-20">
        <ProfileSection />
        <AboutSection id="about" />
        <ProjectsSection id="projects" />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}
