import React from 'react'
import Contact from '@/src/app/components/contact-us/index'
import MyMap from '@/src/app/components/contact-us/MyMap'
import BreadCrumb from '@/src/app/components/common/breadcrumb'

export const metadata = {
	title: "Contact Us || Visitrack",
	description: "",
};

function ContactUs() {
	return (
		<>
			<BreadCrumb title="Contact Us" />
			<Contact />
			<MyMap />
		</>
	);
}

export default ContactUs;
