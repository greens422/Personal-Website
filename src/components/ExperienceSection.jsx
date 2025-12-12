import { Briefcase } from "lucide-react";

const experiences = [
	{
		title: "Global Markets, Summer Analyst",
		organization: "CIBC Capital Markets",
		period: "May 2024 – Aug 2024",
		description:
			"Interned on the Wealth Solutions Group Equity-Linked Structured Notes desk in the Sales and Trading division of CIBC Capital Markets. Assisted with client communications, product launches and the curation of a weekly email blast.",
	},
	{
		title: "GBO2^2, Summer Analyst",
		organization: "CIBC Asset Management",
		period: "Jun 2024 – Aug 2024",
		description:
			"Worked in Global Beta, Overlays and Outcome Management. Assisted in portfolio analysis and contributed to risk management strategies.",
	},
];

const leadership = [
	{
		title: "Virtual Insight Series Participant",
		organization: "Goldman Sachs",
		location: "Manhattan, New York",
		period: "May – June 2025",
		description:
			"Participated in the 2025 Goldman Sachs Virtual Insight Series, a four-week exploratory program introducing undergraduate students to the firm’s culture, business areas, and career pathways. Built foundational knowledge of key divisions and gained insight into the skills needed to thrive in a competitive financial environment.",
	},
	{
		title: "Conference Ambassador",
		organization: "51st International Conference (The IC) hosted by Business Today",
		location: "Manhattan, New York",
		period: "November 2025",
		description:
			"Serving as a Conference Ambassador for the 51st IC, helping facilitate networking and engagement between students and industry leaders. Supporting event logistics and promoting conference initiatives.",
	},
	{ 
    title: "Conference Attendee",
		organization: "50th International Conference (The IC) hosted by Business Today",
		location: "Manhattan, New York",
		period: "November 2024",
		description:
			"Accepted to attend an all-expenses paid trip to NYC for the 50th IC. Connected with students and executives globally, discussing the current business landscape and new/emerging areas of opportunity.",
	},
	{
		title: "Investment Council, Credit Analyst",
		organization: "DeGroote Finance and Investment Council (DFIC)",
		location: "Hamilton, Ontario",
		period: "November 2024 – Present",
		description:
			"Worked with a team of 6 to generate a well-researched investment pitch. Presented to the board of directors and contributed to the reallocation process, resulting in the pitched security being incorporated into the 2025 strategy.",
	},
	{
		title: "Class 420 Spinnaker Sailor",
		organization: "Stoney Lake Yacht Club",
		location: "Stoney Lake, Ontario",
		period: "Summer 2012 – Present",
		description:
			"Sailed and raced in a two-person trapeze and spinnaker Class 420 boat, participating in regattas across Ontario. Progressed into teaching CANsail Levels 1-4 and eventually ran weekend races for SLYC alumni, including previous Olympians and World Championship Medalists.",
	},
];

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left">
                    Work <span className="text-primary">Experience</span>
                </h2>
                <div className="grid grid-cols-1 gap-8 mb-16">
                    {experiences.map((exp, idx) => (
                        <div
                            key={idx}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-start gap-4"
                        >
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-lg">{exp.title}</h3>
                                <p className="text-muted-foreground">
                                    {exp.organization}
                                </p>
                                <p className="text-xs text-muted-foreground mb-2">
                                    {exp.period}
                                </p>
                                <p className="text-muted-foreground">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left">
                    Leadership <span className="text-primary">Experience</span>
                </h2>
                <div className="grid grid-cols-1 gap-8">
                    {leadership.map((role, idx) => (
                        <div
                            key={idx}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-start gap-4"
                        >
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-lg">{role.title}</h3>
                                <p className="text-muted-foreground">
                                    {role.organization}
                                </p>
                                <p className="text-xs text-muted-foreground mb-1">
                                    {role.location}
                                </p>
                                <p className="text-xs text-muted-foreground mb-2">
                                    {role.period}
                                </p>
                                <p className="text-muted-foreground">
                                    {role.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
