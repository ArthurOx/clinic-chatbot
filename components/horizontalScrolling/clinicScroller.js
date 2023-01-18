import React, { useState } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../button';
import Example from './examples';



export default function ClinicScroller({ children, actions, textData }) {
    const [selected, setSelected] = useState(textData.clinicCards[0].clinic.examples);
    const [slide, setSlide] = useState(-1);
    const [button, setButton] = useState(false);

    const slideChanged = (slide) => {
        let index = slide.activeIndex;
        setSelected(textData.clinicCards[index].clinic.examples);
    }

    const handleClick = () => {
        actions.handleClickedContinue();
        setButton(true);
    }

    return (
        <>
            <Swiper
                dir="rtl"
                slidesPerView={'auto'}
                centeredSlides={true}
                onSlideChange={(slide) => slideChanged(slide)}
                onSwiper={(swiper) => console.log(swiper)}
                slideToClickedSlide={true}
            >
                <div>
                    {textData.clinicCards.map((item) => {
                        return <SwiperSlide
                            className={(item.clinic.id != slide) ? "card" : "card-selected"}
                            key={item.clinic.id}
                            onClick={() => setSlide(item.clinic.id)}>
                            <div className={(item.clinic.id != slide) ? "text-in-card" : "text-in-card-selected"}>
                                {item.clinic.description}
                            </div>
                        </SwiperSlide>
                    })}
                </div>
            </Swiper >
            <Example exampleText={textData.exampleText}>{selected}</Example>
            <Button className="continue-button" handleClick={handleClick} isDisabled={button}>{textData.continueText}</Button>
        </>
    );

}