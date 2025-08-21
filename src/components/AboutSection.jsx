import { Briefcase, Microscope, TrendingUp } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Future Business Leader & Life Sciences Enthusiast!
            </h3>

            <p className="text-muted-foreground">
              I'm a dedicated Biology & Business student at McMaster University with a 
              passion for bridging the gap between scientific innovation and 
              business strategy. I'm a life-long learner who believes the future of 
              business lies in sustainable, bio-inspired solutions.
            </p>

            <p className="text-muted-foreground">
              My goal is to leverage my background in science to create innovative 
              business models that address global challenges. I'm particularly 
              interested in entrepreneurship, sustainable business 
              practices, and the commercialization of life science research.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Microscope className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Life Sciences Research</h4>
                  <p className="text-muted-foreground">
                    Conducting biological research and analysis to understand 
                    complex life processes and their applications. My senior research
                    thesis will be focused on antimicrobial resistance. 
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Business Strategy</h4>
                  <p className="text-muted-foreground">
                    Developing strategic business plans and analyzing market 
                    opportunities in biotechnology sectors. 
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Entrepreneurship</h4>
                  <p className="text-muted-foreground">
                    Exploring innovative business models and startup opportunities 
                    in the biotech and sustainability sectors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
