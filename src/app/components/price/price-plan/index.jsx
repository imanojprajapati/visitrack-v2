"use client";
import Icon5 from "@/public/images/v1/icon5.png";
import Icon6 from "@/public/images/v1/icon6.png";
import Icon7 from "@/public/images/v1/icon7.png";
import featureIcon from "@/public/images/checked.png";
import { useState } from "react";
import FadeInStagger from "@/src/app/components/animation/FadeInStagger";
import PricingCard from "@/src/app/components/price/price-plan/PricingCard";

const pricePlanData = [
	{
		id: crypto.randomUUID(),
		plan: "Essential",
		price: [
			{ id: 1, value: 19 },
			{ id: 2, value: 39 },
		],
		img: Icon7,
		features: [
			"Lead, deal, contact, calendar and pipeline management",
			"Seamless data import and 400+ integrations",
			"24/7, multi-language support",
		],
		featureIcon,
		highlighted: false,
	},
	{
		id: crypto.randomUUID(),
		plan: "Professional",
		price: [
			{ id: 1, value: 49 },
			{ id: 2, value: 69 },
		],
		img: Icon5,
		features: [
			"Full email sync with templates, open, click tracking & emailing",
			"Automations builder, including email sequences",
			"Meeting, email and video call",
		],
		featureIcon,
		highlighted: true,
	},
	{
		id: crypto.randomUUID(),
		plan: "Enterprise",
		price: [
			{ id: 1, value: 129 },
			{ id: 2, value: 199 },
		],
		img: Icon6,
		features: [
			"Streamlined lead routing and account access control",
			"Document and contract management with e-signatures",
			"Revenue forecasts & reporting",
		],
		featureIcon,
		highlighted: false,
	},
];

function PricePlan() {
	const frequencies = [
		{ id: 1, label: "Per Yearly" },
		{ id: 2, label: "Per Month" },
	];

	const [frequency, setFrequency] = useState(frequencies[0]);

	function handleChange(e) {
		if (e.target.checked) {
			setFrequency(frequencies[1]);
		} else {
			setFrequency(frequencies[0]);
		}
	}

	return (
		<section className="section sofax-section-padding bg-light" id="pricing">
			<div className="container">
				<div className="sofax-section-title center pb-50">
					<div className="tg-heading-subheading animation-style3">
						<h2 className="all-heading-color">Discover the right price plan for you</h2>
					</div>
				</div>

				<div className="pricing-btn">
					<label className="all-heading-color">Per Month</label>
					<div className="toggle-btn">
						<input
							className="form-check-input btn-toggle price-deck-trigger"
							type="checkbox"
							onChange={handleChange}
						/>
					</div>
					<label className="all-heading-color">Per Year</label>
				</div>

				<div className="row" id="table-price-value">
					{pricePlanData.map((pricing, index) => (
						<FadeInStagger key={pricing.id} index={index} className="col-xl-4 col-md-6">
							<PricingCard pricing={pricing} frequency={frequency} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default PricePlan;
