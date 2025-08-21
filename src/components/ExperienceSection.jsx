import { Briefcase, Calendar, MapPin } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="space-y-8">
          {/* Add your business/research experience here */}
          {/* Example formats for different types of experience:
          
          BUSINESS INTERNSHIP:
          <div className="gradient-border p-6 card-hover">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div className="flex items-center gap-3 mb-2 md:mb-0">
                <div className="p-2 rounded-full bg-primary/10">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Business Analyst Intern</h3>
                  <p className="text-primary font-medium">[Company Name - e.g., Johnson & Johnson, Pfizer, etc.]</p>
                </div>
              </div>
              <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                <div className="flex items-center gap-1 mb-1">
                  <Calendar className="h-4 w-4" />
                  <span>[Start Date - End Date]</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>[Location]</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                [Brief description of your role in business analysis, market research, or strategic planning]
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Conducted market analysis for new biotech products</li>
                <li>Assisted in financial modeling and business case development</li>
                <li>Collaborated with cross-functional teams on strategic initiatives</li>
              </ul>
            </div>
          </div>
          
          RESEARCH EXPERIENCE:
          <div className="gradient-border p-6 card-hover">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div className="flex items-center gap-3 mb-2 md:mb-0">
                <div className="p-2 rounded-full bg-primary/10">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Research Assistant</h3>
                  <p className="text-primary font-medium">[Lab/Department Name - McMaster University]</p>
                </div>
              </div>
              <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                <div className="flex items-center gap-1 mb-1">
                  <Calendar className="h-4 w-4" />
                  <span>[Start Date - End Date]</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Hamilton, ON</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                [Description of research focus - e.g., cell biology, genetics, biochemistry]
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Conducted laboratory experiments and data collection</li>
                <li>Analyzed research data using statistical software</li>
                <li>Contributed to research publications and presentations</li>
              </ul>
            </div>
          </div>
          
          LEADERSHIP/VOLUNTEER:
          <div className="gradient-border p-6 card-hover">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div className="flex items-center gap-3 mb-2 md:mb-0">
                <div className="p-2 rounded-full bg-primary/10">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">[Leadership Role]</h3>
                  <p className="text-primary font-medium">[Organization Name]</p>
                </div>
              </div>
              <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                <div className="flex items-center gap-1 mb-1">
                  <Calendar className="h-4 w-4" />
                  <span>[Start Date - End Date]</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>[Location]</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                [Description of leadership role and impact]
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Led team of [X] members in [specific project/initiative]</li>
                <li>Organized events focused on [relevant topic - biotech, sustainability, etc.]</li>
                <li>Developed skills in team management and project coordination</li>
              </ul>
            </div>
          </div>
          */}
          
          <div className="text-center text-muted-foreground">
            <p className="text-lg">Business & Research Experience</p>
            <p className="text-sm mt-2">Add your internships, research positions, and leadership roles using the business-focused templates above.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
