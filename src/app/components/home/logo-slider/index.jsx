"use client";
import PhotoVideoAsia from "@/public/images/clients/company1.webp";
import SoundAndLightAsia from "@/public/images/clients/company2.webp";
import TentDecorAsia from "@/public/images/clients/company3.png";
import Decorise from "@/public/images/clients/company4.png";
import AAKAR from "@/public/images/clients/company5.webp";
import ABSE from "@/public/images/clients/company6.webp";
import IHE from "@/public/images/clients/company7.png";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const sliderData = [
	{
		id: crypto.randomUUID(),
		img: PhotoVideoAsia,
		title: "PVA",
	},
	{
		id: crypto.randomUUID(),
		img: SoundAndLightAsia,
		title: "S&LA",
	},
	{
		id: crypto.randomUUID(),
		img: TentDecorAsia,
		title: "TDA",
	},
	{
		id: crypto.randomUUID(),
		img: Decorise,
		title: "Decorise",
	},
	{
		id: crypto.randomUUID(),
		img: AAKAR,
		title: "AAKAR",
	},
	{
		id: crypto.randomUUID(),
		img: ABSE,
		title: "ABSE",
	},
	{
		id: crypto.randomUUID(),
		img: IHE,
		title: "IHE",
	},
];

const swiperSettings = {
	speed: 4000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 1,
	breakpoints: {
		640: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 4,
		},
		1024: {
			slidesPerView: 5,
		},
	},
};

function LogoSlider() {
	return (
		<div className="section sofax-section-padding2 linear-bg-color">
			<div className="sofax-slider-logo-wrap">
				{
					<Swiper {...swiperSettings}>
						{sliderData.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="sofax-text-slider-wrap">
									<div className="sofax-text-slider-icon">
										<Image src={item.img}  width={150} height={120} alt={item.title} />
									</div>

									<div className="sofax-text-slider-data light-color">
										<h3>{item.title}</h3>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				}
			</div>
		</div>
	);
}

export default LogoSlider;
