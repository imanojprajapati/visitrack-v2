import HeaderLogo from "./HeaderLogo";
import HeaderButton from "./HeaderButton";
import DesktopMenu from "@/src/app/components/common/navigation/desktop-nav/index";
import { menuItemsData } from "@/src/app/components/common/navigation/mobile-nav/menuItemsData";
import MobileNavbar from "@/src/app/components/common/navigation/mobile-nav/index";

export default function Header() {
    return (
      <>
      <header className="site-header sofax-header-section site-header--menu-center bg-white" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopMenu />
					</div>
					<HeaderButton />
					<MobileNavbar menuItemsData={menuItemsData} title="Sofax" />
				</nav>
			</div>
		</header>
      </>
    );
}
