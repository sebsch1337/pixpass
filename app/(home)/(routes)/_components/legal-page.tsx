import type { ReactNode } from "react";

type LegalPageProps = {
	eyebrow: string;
	title: string;
	description: string;
	updated: string;
	children: ReactNode;
};

type LegalSectionProps = {
	id?: string;
	title: string;
	children: ReactNode;
};

export const LegalPage = ({ eyebrow, title, description, updated, children }: LegalPageProps) => {
	return (
		<article className="mx-auto max-w-4xl px-4 py-6 md:py-10">
			<header className="overflow-hidden rounded-2xl bg-gradient-to-br from-sky-950 via-sky-800 to-sky-600 px-6 py-10 text-sky-50 shadow-sm md:px-10 md:py-12">
				<p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">{eyebrow}</p>
				<h1 className="text-3xl font-bold tracking-tight md:text-5xl">{title}</h1>
				<p className="mt-4 max-w-2xl text-base leading-7 text-sky-100 md:text-lg">{description}</p>
				<p className="mt-6 text-sm text-sky-200">Effective and last updated: {updated}</p>
			</header>

			<div className="mt-6 space-y-4">{children}</div>
		</article>
	);
};

export const LegalSection = ({ id, title, children }: LegalSectionProps) => {
	return (
		<section
			id={id}
			className="scroll-mt-6 rounded-2xl border border-sky-200 bg-white/70 p-6 shadow-sm md:p-8"
		>
			<h2 className="text-xl font-semibold tracking-tight text-sky-950 md:text-2xl">{title}</h2>
			<div className="mt-3 space-y-3 leading-7 text-sky-900">{children}</div>
		</section>
	);
};

export const LegalList = ({ children }: { children: ReactNode }) => {
	return <ul className="list-disc space-y-2 pl-5 marker:text-sky-600">{children}</ul>;
};

export const legalLinkClassName = "font-medium text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-950";
