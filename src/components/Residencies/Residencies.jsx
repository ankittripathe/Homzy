import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "/src/utils/slider";
import { sliderSettings } from "../../utils/sliderSettings";

const Residencies = () => {
    return (
        <section id="residencies" className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className="orangeText">Best Choices</span>
                    <span className="primaryText">Popular Residencies</span>
                </div>

                <Swiper {...sliderSettings}>
                    <SliderButtons />
                    {data.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className="flexColStart r-card">
                                <img src={card.image} alt="Property" />

                                <span className="secondaryText r-price">
                                    <span style={{ color: "orange" }}>$</span>
                                    <span>{card.price}</span>
                                </span>

                                <span className="primaryText">{card.name}</span>
                                <span className="secondaryText">
                                    {card.detail}
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Residencies;

const SliderButtons = () => {
    const swiper = useSwiper();

    return (
        <div className="button-wrapper">
            <div className="flexCenter r-buttons">
                <button onClick={() => swiper.slidePrev()}> &lt; </button>
                <button onClick={() => swiper.slideNext()}> &gt; </button>
            </div>
        </div>
    );
};
