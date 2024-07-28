import { HeroPicture } from "../app/(home)/_components/hero-picture";

export const PrintPicture: React.FC = () => {
	return (
		<div className="relative flex justify-center items-center">
			<div className="max-w-[250px] md:max-w-[400px] bg-white grid grid-cols-4 gap-1 p-1">
				{[...Array(8)].map((_, index) => (
					<HeroPicture
						persona="child"
						key={index}
					/>
				))}
			</div>
			<div className="max-w-[250px] md:max-w-[400px] bg-white grid grid-cols-4 gap-1 p-1 absolute rotate-12">
				{[...Array(8)].map((_, index) => (
					<HeroPicture
						persona="man"
						key={index}
					/>
				))}
			</div>
			<div className="max-w-[250px] md:max-w-[400px] bg-white grid grid-cols-4 gap-1 p-1 absolute -rotate-12">
				{[...Array(8)].map((_, index) => (
					<HeroPicture
						persona="woman"
						key={index}
					/>
				))}
			</div>
		</div>
	);
};
