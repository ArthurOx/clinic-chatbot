import React, { useState } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from 'react-bootstrap';
import Example from './examples';



export default function ClinicScroller({ children }) {
    const [selected, setSelected] = useState(children[0].clinic.examples);

    const slideChanged = (slide) => {
        let index = slide.activeIndex;
        setSelected(children[index].clinic.examples);
        console.log('slide change');
    }

    const handleClick = () => {
        console.log('clicked');
    }

    return (
        <>
            <Swiper
                dir="rtl"
                slidesPerView={'auto'}
                centeredSlides={true}
                onSlideChange={(slide) => slideChanged(slide)}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <div>
                    {children.map((item) => {
                        return (
                            <SwiperSlide className="card" key={item.clinic.id}>
                                <div className="card-item">
                                    <p className="text-in-card">
                                        {item.clinic.description}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ) 
                    })}
                </div>
            </Swiper >
            <Example>{selected}</Example>
            <Button className='custom_btn custome-continue_btn' onClick={handleClick}>Continue</Button>
        </>
    );

}