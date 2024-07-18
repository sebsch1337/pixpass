export const FeaturesSection = () => {
	return (
		<section className="md:bg-sky-200 p-8 rounded-xl flex-col md:flex-row gap-16 flex text-center">
			<div className="flex-1">
				<h2 className="text-3xl font-bold bg-gradient-to-r from-sky-950 to-sky-400 inline-block bg-clip-text text-transparent">
					Upload
				</h2>
				<p className="text-xl font-semibold text-sky-950">any size</p>
			</div>
			<div className="flex-1">
				<h2 className="text-3xl font-bold bg-gradient-to-r from-sky-950 to-sky-400 inline-block bg-clip-text text-transparent">
					Select
				</h2>
				<p className="text-xl font-semibold text-sky-950">the format</p>
			</div>
			<div className="flex-1">
				<h2 className="text-3xl font-bold  bg-gradient-to-r from-sky-950 to-sky-400 inline-block bg-clip-text text-transparent">
					Download
				</h2>
				<p className="text-xl font-semibold text-sky-950">printable collage</p>
			</div>
		</section>
	);
};
