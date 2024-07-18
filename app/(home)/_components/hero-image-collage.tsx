import { HeroImage } from "./hero-image";

export const HeroImageCollage = () => {
	return (
		<div className="relative flex justify-center items-center">
			<div className="max-w-[250px] md:max-w-[400px] bg-white grid grid-cols-4 gap-1 p-1">
				{[...Array(8)].map((_, index) => (
					<HeroImage
						persona="child"
						key={index}
					/>
				))}
			</div>
			<div className="max-w-[250px] md:max-w-[400px] bg-white grid grid-cols-4 gap-1 p-1 absolute rotate-12">
				{[...Array(8)].map((_, index) => (
					<HeroImage
						persona="man"
						key={index}
					/>
				))}
			</div>
			<div className="max-w-[250px] md:max-w-[400px] bg-white grid grid-cols-4 gap-1 p-1 absolute -rotate-12">
				{[...Array(8)].map((_, index) => (
					<HeroImage
						persona="woman"
						key={index}
					/>
				))}
			</div>
		</div>
	);
};
