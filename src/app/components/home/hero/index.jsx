import AppleStore from "@/public/images/v2/app-store.png"; 
import PlayStore from "@/public/images/v2/play-store.png";
import Shape1 from "@/public/images/v2/shape1.png";
import Shape2 from "@/public/images/v2/shape2.png";
import Thumb1 from "@/public/images/Mockup/VTM1.png";
import Image from "next/image";
import FadeInUp from "@/src/app/components/animation/FadeInUp";

function Hero() {
	return (
		<div className="section sofax-section-padding4" id="hero">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="sofax-hero-content">
							<h2
								className="slider-custom-anim-left all-heading-color"
								data-ani="slider-custom-anim-left"
								data-ani-delay="0.3s"
							>
								Track and Manage Your Events Effortlessly with VISITRACK
							</h2>
							<p className="all-para-color">
								VISITRACK revolutionizes event management. From smooth registration to real-time tracking and secure analytics, it’s all at your fingertips. Organize smarter, faster, and with full control.
							</p>
							<div className="extra-mt">
								<div className="sofax-app-wrap position-relative">
									{/* <a target="_blank" href="https://www.apple.com/app-store/">
										<Image src={AppleStore} alt="Apple Store" />
									</a>

									<a target="_blank" href="https://playstore.com/">
										<Image src={PlayStore} alt="Play Store" />
									</a> */}
									<div className="hero2-shape">
										<Image src={Shape1} alt="Shape" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<FadeInUp className="sofax-hero-thumb2">
							<Image src={Thumb1} alt="Event Management" />
							<div className="sofax-hero-shape-v2">
								<Image src={Shape2} alt="Decorative Shape" />
							</div>
						</FadeInUp>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
