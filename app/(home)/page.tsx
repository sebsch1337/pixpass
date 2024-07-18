import { FeaturesSection } from "./_components/features-section";
import { HeroSection } from "./_components/hero-section";

export default function Home() {
	return (
		<main className="flex-grow container mx-auto">
			<div className="max-w-5xl px-8 mx-auto">
				<HeroSection />
			</div>
			<div className="max-w-5xl px-8 mx-auto mt-4 md:mt-14">
				<FeaturesSection />
			</div>
		</main>
	);
}
