import { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "../../utils/accordion";

const Value = () => {
    const [accordion, setAccordion] = useState(null);

    return (
        <section id="value" className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* left side */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="/assets/value.png" alt="Property" />
                    </div>
                </div>

                {/* right side */}
                <div className="flexColStart v-right">
                    <span className="orangeText">Our Values</span>
                    <span className="primaryText">
                        Values We Provide to Clients
                    </span>
                    <span className="secondaryText">
                        We are committed to providing the best possible service
                        to our clients. <br />
                        We believe a good place to live can make a huge
                        difference in people&apos;s lives.
                    </span>

                    <Accordion
                        className="accordion"
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {data.map((item, index) => {
                            return (
                                <AccordionItem
                                    className={`accordionItem ${accordion}`}
                                    uuid={index}
                                    key={index}
                                >
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="flexCenter accordionButton">
                                            <AccordionItemState>
                                                {(expanded) =>
                                                    expanded
                                                        ? setAccordion("expanded")
                                                        : setAccordion("collapsed")
                                                }
                                            </AccordionItemState>

                                            <div className="flexCenter icon">
                                                {item.icon}
                                            </div>
                                            <span className="primaryText">
                                                {item.heading}
                                            </span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown
                                                    size={20}
                                                />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">
                                            {item.detail}
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Value;
