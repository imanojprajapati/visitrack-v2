import Thumb from "@/public/images/v2/contentthumb2.png"; 
import Icon from "@/public/images/arrows/arrow-down.png";
import Image from "next/image";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/src/app/components/animation/FadeInStaggerTwo";
import FadeInUp from "@/src/app/components/animation/FadeInUp";
import TextSplitFadeIn from "@/src/app/components/animation/TextSplitFadeIn";

function WhyChooseUs() {
	return (
		<section className="section sofax-section-padding3">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInUp className="about-thumb mr-50 ">
							<Image src={Thumb} alt="Thumb" />
						</FadeInUp>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content fs-19">
							<div className="tg-heading-subheading ">
								<h2 className="tac all-heading-color">
									<TextSplitFadeIn> Streamline Your Event Management with VISITRACK</TextSplitFadeIn>
								</h2>
							</div>
							<p className="tac all-para-color">
								Organize your events with ease! VISITRACK offers a seamless, secure, and efficient solution for registration, check-ins, and real-time tracking, ensuring a hassle-free experience for both organizers and attendees.
							</p>
							<div className="extra-mt">
								<FadeInStaggerTwo className="accordion sofax-accordion-wrap1" id="sofax-accordion">
									<FadeInStaggerTwoChildren className="accordion-item sofax-accordion-item">
										<h3 className="accordion-header sofax-accordion-header">
											<button
												className="accordion-button all-heading-color"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne"
											>
												1. Effortless Visitor Registration
											</button>
											<div className="accordion-icon">
												<Image src={Icon} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseOne"
											className="accordion-collapse collapse show"
											data-bs-parent="#sofax-accordion"
										>
											<div className="accordion-body sofax-accordion-body all-para-color">
												Simplify the registration process with VISITRACK’s online pre-registration and on-site kiosks. Enhance security and efficiency through QR code-based check-ins for seamless entry.
											</div>
										</div>
									</FadeInStaggerTwoChildren>
									<FadeInStaggerTwoChildren className="accordion-item sofax-accordion-item">
										<h3 className="accordion-header sofax-accordion-header" id="headingOne">
											<button
												className="accordion-button all-heading-color"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseTwo"
											>
												2. Real-Time Attendee Tracking
											</button>
											<div className="accordion-icon">
												<Image src={Icon} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseTwo"
											className="accordion-collapse collapse"
											data-bs-parent="#sofax-accordion"
										>
											<div className="accordion-body sofax-accordion-body all-para-color">
												Monitor real-time attendee movements with VISITRACK’s entry and exit tracking. Our live dashboards provide up-to-the-minute data on visitor attendance, helping you optimize your event flow.
											</div>
										</div>
									</FadeInStaggerTwoChildren>
									<FadeInStaggerTwoChildren className="accordion-item sofax-accordion-item">
										<h3 className="accordion-header sofax-accordion-header">
											<button
												className="accordion-button collapsed all-heading-color"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseThree"
											>
												3. Secure Badge Printing & Access Control
											</button>
											<div className="accordion-icon">
												<Image src={Icon} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseThree"
											className="accordion-collapse collapse"
											data-bs-parent="#sofax-accordion"
										>
											<div className="accordion-body sofax-accordion-body all-para-color">
												Produce customizable, RFID-enabled badges for each attendee. VISITRACK ensures that only authorized individuals have access to restricted event areas.
											</div>
										</div>
									</FadeInStaggerTwoChildren>
								</FadeInStaggerTwo>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default WhyChooseUs;
