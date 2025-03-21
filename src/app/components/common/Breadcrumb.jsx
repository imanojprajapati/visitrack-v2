import Arrow from "@/public/images/about/arrow.png";
import Image from "next/image";
import Link from "next/link";
function BreadCrumb({ title }) {
	return (
		<div className="sofax-breadcrumb linear-bg-color">
			<div className="container">
				<h1 className="post__title all-title-white-color">{title}</h1>
				<nav className="breadcrumbs">
					<ul>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Image src={Arrow} alt="arrow" />
						</li>
						<li aria-current="page" className="all-title-white-color"> {title}</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default BreadCrumb;
