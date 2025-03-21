import Image from "next/image";
import Link from "next/link";

function PricingCard({ pricing: { plan, price, img, features, highlighted, featureIcon }, frequency }) {
	return (
		<div className="sofax-pricing-wrap">
			<div className="sofax-pricing-header">
				<Image src={img} alt="icon" />
				<h4 className="all-heading-color">{plan}</h4>
			</div>
			<div className="sofax-pricing-price">
				<h2 className="all-heading-color">
					$
					{price.map((item) => {
						if (item.id === frequency.id) {
							return item.value;
						}
					})}
				</h2>

				<p className="dynamic-value all-heading-color"> {frequency.label}</p>
			</div>
			<div className="sofax-pricing-body">
				<h5 className="all-heading-color">Key features:</h5>
				<ul>
					{features.map((feature) => (
						<li key={feature} className="all-heading-color">
							<Image src={featureIcon} alt="feature Icon" />
							{feature}
						</li>
					))}
				</ul>
			</div>
			<div className="sofax-pricing-footer">
				<Link className={`sofax-default-btn  d-block pill price-btn-hover ${!highlighted && ""}`} href="/contact-us">
					Purchase now
				</Link>
			</div>
		</div>
	);
}

export default PricingCard;
