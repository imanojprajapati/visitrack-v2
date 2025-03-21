import Icon from "@/public/images/v2/icon9.png";
import Image from "next/image";

function FaqAccordion() {
	return (
		<>
			<div className="accordion sofax-accordion-section-v2" id="sofax-accordion2">
				<div className="accordion-item sofax-accordion-item">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button all-heading-color"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
						>
							How does VISITRACK streamline event registration?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						data-bs-parent="#sofax-accordion2"
					>
						<div className="accordion-body sofax-accordion-body all-para-color">
							VISITRACK simplifies visitor registration with online pre-registration, on-site kiosks, and QR code-based check-ins for a smooth event experience.
						</div>
					</div>
				</div>
				<div className="accordion-item sofax-accordion-item">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button all-heading-color"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
						>
							How does VISITRACK enhance event security?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion2">
						<div className="accordion-body sofax-accordion-body all-para-color">
							VISITRACK enhances security with RFID-enabled badges, real-time tracking, and role-based access control to ensure only registered attendees access restricted areas.
						</div>
					</div>
				</div>
				<div className="accordion-item sofax-accordion-item">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button collapsed all-heading-color"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
						>
							How does VISITRACK help with attendee engagement?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion2">
						<div className="accordion-body sofax-accordion-body all-para-color">
							VISITRACK offers personalized attendee schedules, heatmaps for booth engagement, and real-time analytics to help exhibitors understand visitor interests and optimize interactions.
						</div>
					</div>
				</div>
			</div>
			<div className="accordion sofax-accordion-section-v2 mt-24" id="sofax-accordion3">
				<div className="accordion-item sofax-accordion-item">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button all-heading-color"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseFour"
						>
							How does VISITRACK integrate with ticketing systems?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div
						id="collapseFour"
						className="accordion-collapse collapse show"
						data-bs-parent="#sofax-accordion3"
					>
						<div className="accordion-body sofax-accordion-body all-para-color">
							VISITRACK seamlessly integrates with ticketing and CRM systems to simplify ticket sales, payment processing, and attendee data management.
						</div>
					</div>
				</div>
				<div className="accordion-item sofax-accordion-item">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button all-heading-color"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseFive"
						>
							What types of events can benefit from VISITRACK?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion3">
						<div className="accordion-body sofax-accordion-body all-para-color">
							VISITRACK is ideal for trade shows, corporate conferences, educational fairs, and government events, helping organizers manage registration, security, and engagement.
						</div>
					</div>
				</div>
				<div className="accordion-item sofax-accordion-item">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button collapsed all-heading-color"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseSix"
						>
							How can exhibitors benefit from VISITRACK?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion3">
						<div className="accordion-body sofax-accordion-body all-para-color">
							Exhibitors can capture leads, track booth engagement, and access real-time data to improve their ROI and follow-up strategies.
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default FaqAccordion;
