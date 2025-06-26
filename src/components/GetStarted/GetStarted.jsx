import "./GetStarted.css";

const GetStarted = () => {
    return (
        <section id="get-started" className="g-wrapper">
            <div className="paddings innerWidth g-container">
                <div className="flexColCenter inner-container">
                    <span className="primaryText">Get started with Homyz</span>
                    <span className="secondaryText">
                        Get our incredibly appealing price quotations by
                        subscribing.
                        <br />
                        Find your place quickly and easily.
                    </span>
                    <button className="button">
                        <a href="mailto:amitdew009@gmail.com">Get Started</a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;
