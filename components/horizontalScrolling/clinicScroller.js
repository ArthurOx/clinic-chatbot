import React, { useState } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../button';
import Example from './examples';



export default function ClinicScroller({ children, actions }) {
    const [selected, setSelected] = useState(children[0].clinic.examples);
    const [slide, setSlide] = useState(-1);
    const [button, setButton] = useState(false);

    const slideChanged = (slide) => {
        let index = slide.activeIndex;
        setSelected(children[index].clinic.examples);
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
                    {children.map((item) => {
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
            <Example>{selected}</Example>
            <Button className="continue-button" handleClick={handleClick} isDisabled={button}>Continue</Button>
        </>
    );

}