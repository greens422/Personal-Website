import { cn } from "@/lib/utils";
import { Menu, X, Download } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
	{ name: "Home", href: "#hero" },
	{ name: "About", href: "#about" },
	{ name: "Skills", href: "#skills" },
	{ name: "Experience", href: "#experience" },
	{ name: "Education", href: "#education" },
	{ name: "Contact", href: "#contact" },
];

export const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<nav
			className={cn(
				"fixed w-full z-40 transition-all duration-300",
				isScrolled
					? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
					: "py-5"
			)}
		>
			<div className="container flex items-center justify-between">
				<a
					className="text-xl font-bold text-primary flex items-center"
					href="#hero"
				>
					<span className="relative z-10">
						<span className="text-glow text-foreground"> Sophia </span>{" "}
						Green
					</span>
				</a>

				{/* desktop nav */}
				<div className="hidden md:flex items-center space-x-8">
					{navItems.map((item, key) => (
						<a
							key={key}
							href={item.href}
							className="text-foreground/80 hover:text-primary transition-colors duration-300"
						>
							{item.name}
						</a>
					))}
					<a
						href="/Sophia_Green_CV.pdf"
						download
						className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
					>
						<Download size={18} />
						CV
					</a>
				</div>

				{/* mobile nav */}

				<button
					onClick={() => setIsMenuOpen((prev) => !prev)}
					className="md:hidden p-2 text-foreground z-50"
					aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
				>
					{isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
				</button>

				<div
					className={cn(
						"fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
						"transition-all duration-300 md:hidden",
						isMenuOpen
							? "opacity-100 pointer-events-auto"
							: "opacity-0 pointer-events-none"
					)}
				>
					<div className="flex flex-col space-y-8 text-xl">
						{navItems.map((item, key) => (
							<a
								key={key}
								href={item.href}
								className="text-foreground/80 hover:text-primary transition-colors duration-300"
								onClick={() => setIsMenuOpen(false)}
							>
								{item.name}
							</a>
						))}
						<a
							href="/Sophia_Green_CV.pdf"
							download
							className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
							onClick={() => setIsMenuOpen(false)}
						>
							<Download size={18} />
							Download CV
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
