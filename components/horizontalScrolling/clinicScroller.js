import React, { useState } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from 'react-bootstrap';
import Example from './examples';



export default function ClinicScroller({ children, actions, textData }) {
    const [selected, setSelected] = useState(textData.clinicCards[0].clinic.examples);
    const [slide, setSlide] = useState(-1);

    const slideChanged = (slide) => {
        let index = slide.activeIndex;
        setSelected(textData.clinicCards[index].clinic.examples);
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
                            className={(item.clinic.id != slide) ? "card clickable-default clickable-som" : "card clickable-selected"}
                            key={item.clinic.id}
                            onClick={() => setSlide(item.clinic.id)}>
                            <div className={(item.clinic.id != slide) ? "text-in-card text-in-card-reg clickable-som" : "text-in-card text-in-card-selected"}>
                                {item.clinic.description}
                            </div>
                        </SwiperSlide>
                    })}
                </div>
            </Swiper >
            <Example>{selected}</Example>
            <Button className="custom-btn custome-continue_btn" onClick={(e) => actions.handleClickedContinue(e)} >{textData.continueText}</Button>
        </>
    );

}