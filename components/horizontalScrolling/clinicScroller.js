import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from 'react-bootstrap';
import Example from './examples';



export default function ClinicScroller({ actions, textData }) {
    const [selected, setSelected] = useState(textData.clinicCards[0].clinic.examples);
    const [slide, setSlide] = useState(-1);
    const textDirection = actions.direction;
    const textAlign = actions.textAlign;
    const slideChanged = (slide) => {
        let index = slide.activeIndex;
        setSelected(textData.clinicCards[index].clinic.examples);
    }

    const slideStyle = () => {
        if (textDirection == 'rtl') {
            return {
                'left': '55px',
                'textAlign': 'right'
            }
        } else {
            return {
                'right': '55px',
                'textAlign': 'left'
            }
        }
    }

    return (
        <>
            <hr className='separator' />
            <div className='card-header-text'>{textData.cardHeaderText}</div>
            <Swiper
                dir={textDirection}
                slidesPerView={'auto'}
                centeredSlides={true}
                onSlideChange={(slide) => slideChanged(slide)}
                onSwiper={(swiper) => console.log(swiper)}
                slideToClickedSlide={true}
            >
                <div style={{ direction: { textDirection } }}>
                    {textData.clinicCards.map((item) => {
                        return <SwiperSlide
                            className={(item.clinic.id != slide) ? "card clickable-default clickable-som" : "card clickable-selected"}
                            key={item.clinic.id}
                            onClick={() => setSlide(item.clinic.id)}
                            style={slideStyle()}>
                            <div className={(item.clinic.id != slide) ? "text-in-card text-in-card-reg" : "text-in-card text-in-card-selected"}>
                                {item.clinic.name}
                            </div>
                            <div className={(item.clinic.id != slide) ? "desc-in-card text-in-card-reg" : "desc-in-card text-in-card-selected"}>
                                {item.clinic.description}
                            </div>
                        </SwiperSlide>
                    })}
                </div>
            </Swiper >
            <Example exampleText={textData.exampleText} slideStyle={slideStyle}>{selected}</Example>
            <Button className="custom-btn custome-continue_btn" onClick={(e) => actions.handleClickedContinue(e)} >{textData.continueText}</Button>
            <hr className='separator' />

        </>
    );

}