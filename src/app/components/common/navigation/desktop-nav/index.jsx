import DesktopNav from "./DesktopNav";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import NavItem from "./NavItem";
function DesktopMenu() {
	return (
		<DesktopNav>
			<NavItem url="">Home</NavItem>
			<NavItem url="features">Features</NavItem>
			<NavItem url="pricing">Pricing</NavItem>
			<NavItem url="contact-us">Contact Us</NavItem>
		</DesktopNav>
	);
}

export default DesktopMenu;
