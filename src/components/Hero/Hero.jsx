import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                {/* left side */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle" />
                        <motion.h1
                            initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 4,
                                type: "spring",
                            }}
                        >
                            Discover <br />
                            Your Dream Home <br />
                            With Us
                        </motion.h1>
                    </div>
                    <div className="flexColStart hero-description">
                        <span className="poppins-medium">
                            Browse our listings to find your ideal house.
                        </span>
                        <span className="poppins-medium">
                            Put an end to the inconvenience of searching.
                        </span>
                    </div>
                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={30} />
                        <input type="text" />
                        <button className="button">Search</button>
                    </div>

                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={2400} end={2600} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">
                                Property Listings
                            </span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={450} end={520} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">
                                Satisfied Clients
                            </span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={11} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Award Won</span>
                        </div>
                    </div>
                </div>

                {/* right side */}
                <div className="flexCenter hero-right">
                    <motion.div
                        initial={{ x: "7rem", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 5,
                            type: "spring",
                        }}
                        className="image-container"
                    >
                        <img src="/assets/hero-image.png" alt="Hero Image" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
