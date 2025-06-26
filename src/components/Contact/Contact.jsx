import "./Contact.css";
import { MdCall, MdOutlineVideoChat } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
    return (
        <section id="contact-us" className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/* left side */}
                <div className="flexColStart c-left">
                    <span className="orangeText">Our Contacts</span>
                    <span className="primaryText">Get in touch with us</span>
                    <span className="secondaryText">
                        We are always willing to assist you by offering the best
                        services possible. It is our belief that living in a
                        good place can improve one&apos;s life.
                    </span>

                    <div className="flexColStart contactModes">
                        {/* first row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">
                                            Call
                                        </span>
                                        <span className="secondaryText">
                                            021 123 145 14
                                        </span>
                                    </div>
                                </div>
                                <div className="flexColCenter button">
                                    Call now
                                </div>
                            </div>

                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">
                                            Chat
                                        </span>
                                        <span className="secondaryText">
                                            021 123 145 14
                                        </span>
                                    </div>
                                </div>
                                <div className="flexColCenter button">
                                    Chat now
                                </div>
                            </div>
                        </div>

                        {/* second row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdOutlineVideoChat size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">
                                            Video Call
                                        </span>
                                        <span className="secondaryText">
                                            021 123 145 14
                                        </span>
                                    </div>
                                </div>
                                <div className="flexColCenter button">
                                    Video Call now
                                </div>
                            </div>

                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">
                                            Message
                                        </span>
                                        <span className="secondaryText">
                                            021 123 145 14
                                        </span>
                                    </div>
                                </div>
                                <div className="flexColCenter button">
                                    Message now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right side */}
                <div className="flexEnd c-right">
                    <div className="image-container">
                        <img src="/assets/contact.jpg" alt="Property" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
