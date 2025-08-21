import { Award } from "lucide-react";
import { useState } from "react";

const skills = [
  // Biology & Life Sciences
  { name: "Cell Biology", category: "biology" },
  { name: "Molecular Biology", category: "biology" },
  { name: "Genetics", category: "biology" },
  { name: "Biochemistry", category: "biology" },
  { name: "Research Methods", category: "biology" },
  { name: "Data Analysis", category: "biology" },

  // Business & Management
  { name: "Financial and Managerial Accounting", category: "business" },
  { name: "Finance for Entrepreneurs", category: "business" },
  { name: "Marketing", category: "business" },
  { name: "Project Management", category: "business" },
  { name: "Business Development", category: "business" },
  { name: "Entrepreneurship", category: "business" },

  // Technical & Analytics
  { name: "Excel/Spreadsheets", category: "technical" },
  { name: "VS Code Analysis", category: "technical" },
  { name: "Laboratory Equipment", category: "technical" },
];

const categories = ["all", "biology", "business", "technical"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">Skills</span>
        </h2>
        <div className="flex justify-center mb-8 gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full font-medium transition ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-muted text-primary"
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center gap-3"
            >
              <Award className="h-5 w-5 text-primary" />
              <span className="font-semibold text-lg">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
