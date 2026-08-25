import type { Metadata } from "next";

import { LegalList, LegalPage, LegalSection, legalLinkClassName } from "../_components/legal-page";

export const metadata: Metadata = {
	title: "Terms of Service | PixPass",
	description: "Terms governing use of the PixPass browser-based photo tool.",
};

const TermsAndConditionsPage = () => {
	return (
		<LegalPage
			eyebrow="Terms"
			title="Terms of Service"
			description="These terms govern your access to and use of the PixPass website and browser-based photo tool."
			updated="August 25, 2026"
		>
			<LegalSection title="1. Agreement">
				<p>
					These Terms of Service are an agreement between you and Arukido LLC. By using PixPass, you agree to these terms. If you
					do not agree, do not use the service.
				</p>
				<p>
					If you use PixPass on behalf of an organization or another person, you represent that you have authority to do so and to
					accept these terms on their behalf.
				</p>
			</LegalSection>

			<LegalSection title="2. The service">
				<p>
					PixPass helps users crop, arrange, and create printable JPG and PDF files from passport photos. Photo editing and file
					generation occur locally in the browser. The AI biometric-check feature is currently disabled.
				</p>
				<p>We may change, suspend, or discontinue all or part of the service at any time.</p>
			</LegalSection>

			<LegalSection title="3. Your responsibilities">
				<LegalList>
					<li>Use PixPass only for lawful purposes and only with photos you are authorized to use.</li>
					<li>Check the current photo and print requirements of the relevant passport or identity authority.</li>
					<li>Protect files downloaded to your device and obtain any consent required to process another person&apos;s photo.</li>
					<li>Do not interfere with, reverse engineer, overload, or attempt unauthorized access to the service.</li>
				</LegalList>
			</LegalSection>

			<LegalSection title="4. No government affiliation or acceptance guarantee">
				<p>
					Arukido LLC is not a government agency, passport authority, photo studio, or identity-verification provider and is not
					affiliated with one. Requirements vary by country, document, and issuing authority. PixPass does not guarantee that a
					photo or printout will satisfy official requirements or be accepted.
				</p>
			</LegalSection>

			<LegalSection title="5. Your photos and our intellectual property">
				<p>
					You retain all rights you hold in photos and files you use with PixPass. Because photo content is processed locally, you
					do not grant Arukido LLC a license to that content merely by using the tool.
				</p>
				<p>
					PixPass software, branding, interface, and original website content are owned by Arukido LLC or its licensors and are
					protected by applicable intellectual-property laws. These terms do not transfer ownership of those materials to you.
				</p>
			</LegalSection>

			<LegalSection title="6. Privacy">
				<p>
					The{" "}
					<a
						href="/privacy"
						className={legalLinkClassName}
					>
						Privacy Policy
					</a>{" "}
					explains how PixPass handles photos and technical access data.
				</p>
			</LegalSection>

			<LegalSection title="7. Disclaimer of warranties">
				<p className="font-medium uppercase">
					To the fullest extent permitted by law, PixPass is provided “as is” and “as available,” without warranties of any kind,
					express or implied, including warranties of merchantability, fitness for a particular purpose, accuracy, availability,
					and non-infringement.
				</p>
				<p>Some jurisdictions do not allow certain warranty exclusions, so some of these exclusions may not apply to you.</p>
			</LegalSection>

			<LegalSection title="8. Limitation of liability">
				<p className="font-medium uppercase">
					To the fullest extent permitted by law, Arukido LLC and its members, managers, employees, and agents will not be liable
					for indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost data, profits, or business,
					arising from or related to PixPass.
				</p>
				<p>
					Nothing in these terms excludes liability that cannot legally be excluded. Your mandatory rights under applicable
					consumer law remain unaffected.
				</p>
			</LegalSection>

			<LegalSection title="9. Governing law and disputes">
				<p>
					These terms are governed by the laws of the State of Wyoming, without regard to conflict-of-law principles. Where legally
					permitted, disputes must be brought in the state or federal courts serving Sheridan County, Wyoming. Mandatory consumer
					protections and venue rights that apply where you live are not displaced.
				</p>
			</LegalSection>

			<LegalSection title="10. Changes and severability">
				<p>
					We may update these terms by posting a revised version with a new effective date. Changes apply prospectively. If a
					provision is held unenforceable, the remaining provisions remain in effect to the extent permitted by law.
				</p>
			</LegalSection>

			<LegalSection title="11. Contact">
				<address className="not-italic">
					<strong>Arukido LLC</strong>
					<br />
					30 N Gould St Ste R
					<br />
					Sheridan, WY 82801, United States
					<br />
					<a
						href="mailto:pixpass@arukido.com"
						className={legalLinkClassName}
					>
						pixpass@arukido.com
					</a>
				</address>
			</LegalSection>
		</LegalPage>
	);
};

export default TermsAndConditionsPage;
