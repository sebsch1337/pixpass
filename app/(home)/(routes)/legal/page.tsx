import type { Metadata } from "next";

import { LegalPage, LegalSection, legalLinkClassName } from "../_components/legal-page";

export const metadata: Metadata = {
	title: "Legal Notice | PixPass",
	description: "Legal and operator information for PixPass.",
};

const LegalNoticePage = () => {
	return (
		<LegalPage
			eyebrow="Company information"
			title="Legal Notice"
			description="Operator and contact information for the PixPass website and browser-based photo tool."
			updated="August 25, 2026"
		>
			<LegalSection title="Service operator">
				<address className="not-italic">
					<strong className="text-lg">Arukido LLC</strong>
					<br />
					30 N Gould St Ste R
					<br />
					Sheridan, WY 82801
					<br />
					United States
				</address>
				<p>Entity type: Limited liability company (LLC)</p>
				<p>
					Email:{" "}
					<a
						href="mailto:pixpass@arukido.com"
						className={legalLinkClassName}
					>
						pixpass@arukido.com
					</a>
				</p>
			</LegalSection>

			<LegalSection title="About PixPass">
				<p>
					PixPass is a browser-based tool for cropping and arranging passport photos for self-printing. Arukido LLC is not a
					government agency, passport authority, photo studio, or identity-verification provider and is not affiliated with one.
				</p>
				<p>
					Photo requirements vary by country and authority. PixPass does not guarantee that a photo or printout will be accepted.
					Users remain responsible for checking and meeting the requirements of the relevant authority.
				</p>
			</LegalSection>

			<LegalSection title="Copyright and trademarks">
				<p>
					Unless otherwise identified, the PixPass website, interface, branding, and original content are owned by Arukido LLC or
					used under license and are protected by applicable intellectual-property laws. Third-party names and marks belong to
					their respective owners. Their appearance does not imply endorsement or affiliation.
				</p>
			</LegalSection>

			<LegalSection title="Legal documents">
				<p>
					Use of PixPass is also governed by the{" "}
					<a
						href="/terms"
						className={legalLinkClassName}
					>
						Terms of Service
					</a>
					. Our handling of information is described in the{" "}
					<a
						href="/privacy"
						className={legalLinkClassName}
					>
						Privacy Policy
					</a>
					.
				</p>
			</LegalSection>
		</LegalPage>
	);
};

export default LegalNoticePage;
