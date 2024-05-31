import MaxWidthWrapper from "./MaxWidthWrapper";
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/navbar";

const NavBar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16 border-b border-gray-200">
      <MaxWidthWrapper>
        <h1>cau</h1>
      </MaxWidthWrapper>
    </div>
  );
}

export default NavBar;