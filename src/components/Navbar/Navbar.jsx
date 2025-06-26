import { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import useNavbarColor from "../../hooks/useNavbarColor";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navbarColor = useNavbarColor();

    const getMenuStyles = (showMenu) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !showMenu && "-100%" };
        }
    };

    return (
        <section className="nav-wrapper" style={{ background: navbarColor }}>
            <div className="flexCenter paddings innerWidth nav-container">
                <img src="/assets/logo.png" alt="logo" width={100} />

                <OutsideClickHandler onOutsideClick={() => setShowMenu(false)}>
                    <div
                        className="flexCenter nav-menu"
                        style={getMenuStyles(showMenu)}
                    >
                        <a href="#residencies">Residencies</a>
                        <a href="#value">Our Value</a>
                        <a href="#contact-us">Contact Us</a>
                        <a href="#get-started">Get Started</a>

                        <button className="button">
                            <a href="mailto:amitdew009@gmail.com">Contact</a>
                        </button>
                    </div>
                </OutsideClickHandler>

                <div
                    className="menu-icon"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </section>
    );
};

export default Navbar;
