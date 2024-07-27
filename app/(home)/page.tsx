import { FeaturesSection } from "./_components/features-section";
import { HeroSection } from "./_components/hero-section";

export default function Home() {
	return (
		<>
			<div className="max-w-5xl mx-auto">
				<HeroSection />
			</div>
			<div className="max-w-5xl mx-auto mt-4 md:mt-14">
				<FeaturesSection />
			</div>
		</>
	);
}
