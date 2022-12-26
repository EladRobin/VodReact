import React from 'react'
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {  TiInfoLarge } from 'react-icons/ti'


export default function CarouselVod() {
    let nav = useNavigate();
    return (
        <>
            <React.Fragment>
                {/* העמוד יתלף כל שתי דק */}
                <Carousel interval={2000} fade>
                    <Carousel.Item className='carousleDiv' 
                        style={{ backgroundPosition: 'top', backgroundImage: 'url(https://knowledge.wharton.upenn.edu/wp-content/uploads/2018/03/pic.jpg)'  }}>
                             <Carousel.Caption className='text-start'>
                                 <button onClick={() => {
                                nav('/video/tt1825683')
                                {/* מעבר לעמוד הפרטים שבקומפונטה ה INFO*/}
                            }} 
                            className='btn btn-light'>More Information < TiInfoLarge className='ms-2' /></button>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carousleDiv' 
                        style={{ backgroundPosition: 'top', backgroundImage: 'url(https://sm.ign.com/t/ign_in/image/a/all-the-bi/all-the-big-movies-probably-coming-in-2021_fz3m.1280.jpg)' }}>
                             <Carousel.Caption className='text-start'>
                                 <button onClick={() => {
                                nav('/video/tt1905041')
                            }} 
                            className='btn btn-warning'>More Information <TiInfoLarge className='ms-2' /></button>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carousleDiv' 
                        style={{ backgroundPosition: 'top', backgroundImage: 'url(https://blog.playstation.com/tachyon/2022/06/0c3c20a8d8514501524a0859461f391572ea6e61.jpg)' }}>

                        <Carousel.Caption className='text-start'>
                            <button onClick={() => {
                                nav('/video/tt1872181')
                            }} 
                            className='btn btn-danger '>More Information <TiInfoLarge className='ms-2' /></button>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </React.Fragment>
        </>
    )
}

/// רקע - מבצע החלפה כל כמה שניות לפי הזמן שנקבע ומתחלף 
