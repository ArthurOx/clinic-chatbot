import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from 'react-bootstrap';
import Example from './examples';
import Image from 'next/image';
const CLINIC_IMAGES_PATH = '../../resources/clinic-images/'
import image0 from '../../resources/clinic-images/C0.svg'
import image1 from '../../resources/clinic-images/C1.svg'
import image2 from '../../resources/clinic-images/C2.svg'
import image3 from '../../resources/clinic-images/C3.svg'
import image5 from '../../resources/clinic-images/C5.svg'
import image6 from '../../resources/clinic-images/C6.svg'
import image7 from '../../resources/clinic-images/C7.svg'


const imagesArr = [image0,image1,image2,image3,null,image5,image6,image7,null]


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
                'textAlign': 'right',
                'direction': 'rtl',
                'height': 'fit-content',
                'margin-bottom': '15px'
            }
        } else {
            return {
                'right': '55px',
                'textAlign': 'left',
                'height': 'fit-content',
                'margin-bottom': '15px'
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
                            {
                                imagesArr[item.clinic.id] ? <Image className='custom-card-clinic-image'
                                alt='clinic-logo'
                                // src={(CLINIC_IMAGES_PATH)+"C"+(item.clinic.id)+".svg"}
                                src={imagesArr[item.clinic.id]}
                                width={42.61}
                                height={32.76}>
                            </Image> : null
                            } 
                            
                        </SwiperSlide>
                    })}
                </div>
            </Swiper >
            <Example exampleText={textData.exampleText} slideStyle={slideStyle}>{selected}</Example>
            <Button className="custom-btn custome-continue_btn" onClick={(e) => actions.handleClickedContinue(e)} disabled={slide == -1}>{textData.continueText}</Button>
            <hr className='separator' />

        </>
    );

}