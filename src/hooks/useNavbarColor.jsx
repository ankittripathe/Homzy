import { useEffect, useState } from "react";

const useNavbarColor = () => {
    const [navbarColor, setNavbarColor] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setNavbarColor("black");
            }else{
                setNavbarColor("#131110");
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return navbarColor;
};

export default useNavbarColor;
