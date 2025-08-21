import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

export const SchoolSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">Education</span>
        </h2>

        <div className="space-y-8">
          {/* McMaster University Section */}
          <div className="gradient-border p-6 card-hover">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div className="flex items-center gap-4 mb-2 md:mb-0">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">McMaster University</h3>
                  <p className="text-primary font-medium">Hamilton, Ontario, Canada</p>
                </div>
              </div>
              <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                <div className="flex items-center gap-1 mb-1">
                  <Calendar className="h-4 w-4" />
                  <span>Expected Graduation: 2027</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">
                    Bachelor of Health Science (Honours)
                  </h4>
                  <p className="text-muted-foreground">
                    Biomedical Discover and Commercialization
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    In other words: Science + Business
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Academic Achievements</h4>
                  <div className="text-muted-foreground space-y-2 mt-2">
                    <p>[11.2/12] - Academic Standing: Dean's Honour List</p>
                    <p>
                      Relevant Coursework: Cell Biology, Molecular Genetics, Introduction to Financial and Managerial Accounting, Finance for Entrepreneurs, Statistics for the Life Sciences, Calculus for the Life Sciences
                    </p>
                    <p>
                      Academic Honors/Awards: McMaster Academic Excellence in STEM Entrance Scholarship (students coming into the top 10% of their Faculty) 2022, Honours Certificate of Bilingual Studies in French Immersion 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Duplicate McMaster University Section */}
          <div className="gradient-border p-6 card-hover">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div className="flex items-center gap-4 mb-2 md:mb-0">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Ivey Business School, Western University</h3>
                  <p className="text-primary font-medium">London, Ontario, Canada</p>
                </div>
              </div>
              <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                <div className="flex items-center gap-1 mb-1">
                  <Calendar className="h-4 w-4" />
                  <span>May 2024</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-lg"> 
                    Women In Asset Management
                  </h4>
                  <p className="text-muted-foreground">
                    Third Cohort
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Selected as 1 of 50 women across Canada to participate in the third cohort of Women in Asset Management. Gained valuable insights into investment strategies, portfolio management techniques, risk assessment methodologies, as well as market analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Optional: Add more education entries for high school, certificates, etc. */}
          {/*
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">[High School Name]</h3>
                <p className="text-primary font-medium">[Location]</p>
                <p className="text-muted-foreground text-sm">[Graduation Year] • [Diploma/Certificate]</p>
              </div>
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};
