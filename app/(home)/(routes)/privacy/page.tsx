import type { Metadata } from "next";

import { LegalList, LegalPage, LegalSection, legalLinkClassName } from "../_components/legal-page";

export const metadata: Metadata = {
	title: "Privacy Policy | PixPass",
	description: "How PixPass handles photos, technical access data, and privacy requests.",
};

const PrivacyPage = () => {
	return (
		<LegalPage
			eyebrow="Privacy"
			title="Privacy Policy"
			description="PixPass processes passport photos in your browser. Your photos and editing data are not uploaded to Arukido LLC or its hosting provider."
			updated="August 25, 2026"
		>
			<LegalSection title="At a glance">
				<LegalList>
					<li>No account is required.</li>
					<li>Photos, crops, layout settings, and generated files are processed locally in your browser.</li>
					<li>We do not use advertising cookies, behavioral analytics, or cross-site tracking.</li>
					<li>The AI biometric-check feature is currently disabled.</li>
					<li>Our hosting provider receives limited technical data needed to deliver and secure the website.</li>
				</LegalList>
			</LegalSection>

			<LegalSection
				id="scope"
				title="1. Scope and operator"
			>
				<p>This policy applies to the PixPass website and browser-based photo tool operated by:</p>
				<address className="not-italic">
					<strong>Arukido LLC</strong>
					<br />
					30 N Gould St Ste R
					<br />
					Sheridan, WY 82801
					<br />
					United States
					<br />
					Email:{" "}
					<a
						href="mailto:pixpass@arukido.com"
						className={legalLinkClassName}
					>
						pixpass@arukido.com
					</a>
				</address>
			</LegalSection>

			<LegalSection
				id="local-processing"
				title="2. Photos and local processing"
			>
				<p>
					When you select a photo, PixPass processes the photo, crop, selected print format, preview, and generated JPG or PDF
					inside your browser. Arukido LLC does not receive, store, or have access to that content.
				</p>
				<p>
					This working data remains in the current browser session. Reloading or closing the page clears the in-memory working
					data. Files you download remain on your device until you delete them.
				</p>
			</LegalSection>

			<LegalSection
				id="technical-data"
				title="3. Technical access data"
			>
				<p>
					Like any hosted website, PixPass must receive a web request before it can send the app to your browser. Our hosting
					provider, Vercel Inc., may process technical data such as your IP address, request date and time, requested URL,
					referring page, browser, operating system, device information, and approximate location derived from the IP address.
				</p>
				<p>
					This data is used to deliver the website, maintain reliability, prevent abuse, and protect the service. Arukido LLC does
					not combine it with photos or use it to build advertising profiles. Hosting logs are retained according to the service
					configuration and Vercel&apos;s retention practices.
				</p>
				<p>
					Learn more in the{" "}
					<a
						href="https://vercel.com/legal/privacy-notice"
						target="_blank"
						rel="noreferrer"
						className={legalLinkClassName}
					>
						Vercel Privacy Notice
					</a>
					.
				</p>
			</LegalSection>

			<LegalSection
				id="ai"
				title="4. AI and biometric data"
			>
				<p>
					The AI biometric-check feature is currently disabled. PixPass does not transmit photos to an AI provider, perform
					server-side facial analysis, or create or store biometric identifiers or templates.
				</p>
				<p>
					If this feature is introduced in the future, we will update this policy and provide any notice or consent required by
					applicable law before photos are transmitted for that purpose.
				</p>
			</LegalSection>

			<LegalSection
				id="tracking"
				title="5. Cookies, analytics, and tracking"
			>
				<p>
					PixPass does not set advertising cookies and does not include behavioral analytics or third-party advertising. Because
					we do not track users across websites, PixPass does not currently respond differently to browser “Do Not Track” signals.
				</p>
			</LegalSection>

			<LegalSection
				id="disclosure"
				title="6. Disclosure, sale, and sharing"
			>
				<p>We do not sell personal information or share it for cross-context behavioral advertising.</p>
				<p>
					Technical access data may be processed by Vercel as our hosting service provider. We may also disclose information if
					required by applicable law, legal process, or a valid governmental request, or when reasonably necessary to protect the
					security and rights of users, the public, or Arukido LLC.
				</p>
			</LegalSection>

			<LegalSection
				id="rights"
				title="7. Your privacy rights"
			>
				<p>
					Depending on where you live and subject to applicable legal exceptions, you may have rights to request access,
					correction, deletion, or a copy of personal information, and to appeal a denied request. PixPass cannot access or delete
					photos or editing data because that content never reaches us.
				</p>
				<p>
					To make a request concerning technical access data, email{" "}
					<a
						href="mailto:pixpass@arukido.com"
						className={legalLinkClassName}
					>
						pixpass@arukido.com
					</a>
					. We may need information reasonably necessary to verify the request. We will not discriminate against you for exercising
					a privacy right.
				</p>
			</LegalSection>

			<LegalSection
				id="children"
				title="8. Children&apos;s privacy"
			>
				<p>
					PixPass is a general-audience service and is not directed to children under 13. We do not knowingly collect personal
					information from children. A parent or guardian may use the local photo tool for a child&apos;s passport photo without
					transmitting that photo to us.
				</p>
			</LegalSection>

			<LegalSection
				id="security"
				title="9. Security"
			>
				<p>
					Local processing reduces the need to transmit sensitive photo content. The website is delivered over HTTPS. No security
					method is guaranteed to be completely secure, and you are responsible for protecting downloaded files and access to your
					device.
				</p>
			</LegalSection>

			<LegalSection
				id="changes"
				title="10. Changes to this policy"
			>
				<p>
					We may update this policy when the service or applicable law changes. The current version will be posted here with a new
					effective date. If a change materially affects how we handle information, we will provide additional notice where
					required by law.
				</p>
			</LegalSection>

			<LegalSection
				id="contact"
				title="11. Contact"
			>
				<p>
					Privacy questions or requests may be sent to{" "}
					<a
						href="mailto:pixpass@arukido.com"
						className={legalLinkClassName}
					>
						pixpass@arukido.com
					</a>
					 or mailed to Arukido LLC at the address above.
				</p>
			</LegalSection>
		</LegalPage>
	);
};

export default PrivacyPage;
