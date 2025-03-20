import Icon2 from "@/public/images/service/email.png";
import Icon3 from "@/public/images/service/online-registration.png";
import Icon4 from "@/public/images/service/dashboard.png";
import Thumb from "@/public/images/service/service-thumb.png";
import Shape1 from "@/public/images/service/shape1.png";
import Image from "next/image";
import FadeInRight from "@/src/app/components/animation/FadeInRight";
function About() {
	return (
		<section className="sofax-section-padding2 position-ralatiove">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="sofax-inner-service-thumb">
							<Image src={Thumb} alt="Thumbs" />
						</FadeInRight>
						<div className="sofax-inner-service-shape">
							<Image src={Shape1} alt="content-shape" />
						</div>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content mr-50 tac">
							<h2>Streamline Event Management with Real-Time Insights</h2>
							<p>
							Optimize your event experience with instant email confirmations, real-time registration management, and powerful analytics tracking to drive seamless, data-driven decisions.
							</p>
							<div className="extra-mt">
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={Icon2} width={60} height={60} alt="icon" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Email Confirmation</h4>
										<p>
										Effortlessly confirm registrations with instant email confirmations, ensuring smooth communication and a hassle-free event journey.
										</p>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={Icon3} width={60} height={60} alt="Icon" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Manage Registration in Real Time</h4>
										<p>
										Efficiently manage registrations as they happen, ensuring your event runs smoothly with up-to-the-minute data and full visibility.
										</p>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={Icon4} width={60} height={60} alt="Icon" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Analytics Registration Tracking</h4>
										<p>
										Unlock powerful insights with analytics-driven registration tracking, allowing you to optimize event planning and enhance attendee engagement.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
