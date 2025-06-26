import "./Footer.css";

const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                {/* left side */}
                <div className="flexColStart f-left">
                    <img src="/assets/logo2.png" alt="Logo" width={120} />
                    <span className="secondaryText">
                        Providing the best possible Property <br />
                        for everyone to live in.
                    </span>
                </div>

                {/* right side */}
                <div className="flexColStart f-right">
                    <span className="primaryText">Address</span>
                    <span className="secondaryText">
                        145 New York, FL 5467, USA
                    </span>
                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Blog</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
