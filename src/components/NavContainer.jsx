import NavList from "./NavListItem";
import VueImages from "./VueLampLogoImages";
import Button from "./ButtonNav";
const NavContainer = ({ setLight }) => {
  return (
    <nav>
      <VueImages path="Menu.png" desp="menuImage" className="menu-img" />
      <VueImages path="logo.png" desp="logoImage" className="logo-img" />
      <NavList />
      <Button setLight={setLight} />
    </nav>
  );
};
export default NavContainer;
