import React, { useEffect } from 'react'
import './HeroSec.scss'
import Carousel from 'nuka-carousel';
 import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useMyContext } from '../../context/MyContext';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const HeroSec = () => {
    const { lang, setlang, t, i18n } = useMyContext();
    useEffect(() => {
        AOS.init();
      }, []);
      
    return (
        <div className='HeroSec'>
            <Carousel
                wrapAround={true}
                slidesToShow={1}
                animation={'fade'}
                speed={1000}
                pauseOnHover={true}
                dragging={true}
                autoplay={true}
                autoplayInterval={6000}
                renderCenterLeftControls={({ previousSlide }) => (
                    <div className='arrow' onClick={previousSlide}>
                        {/* <AiOutlineArrowLeft/> */}
                    </div>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <div className='arrow' onClick={nextSlide}>
                        {/* <AiOutlineArrowRight/> */}
                    </div>
                )}
            >
                <div className="slide slide1">
                    <div className="container" style={lang === "ar" ? {direction: 'ltr'} : {direction: 'rtl'}}>
                        <h1 data-aos="fade-in" data-aos-duration="2000" data-aos-delay='500'>{t('carousel1.h1')}</h1>
                        <p data-aos="fade-in" data-aos-duration="2000" data-aos-delay='600'>{t('carousel1.p1')}</p>
                        <div className="buttons" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='700'>
                            <Link to='/freeconsulting'>
                                <div className="button button1">{t('carousel1.btn1')}</div>
                            </Link>
                            <Link to='/askforaservice'>
                                <div className="button button2">{t('carousel1.btn2')}</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="slide slide2">
                    <div className="container" style={lang === "ar" ? {direction: 'ltr'} : {direction: 'rtl'}}>
                        <h1 data-aos-duration="2000" data-aos-delay='500'>{t('carousel1.h2')}</h1>
                        <p data-aos-duration="2000" data-aos-delay='600'>{t('carousel1.p2')}</p>
                        <div className="buttons" data-aos-duration="2000" data-aos-delay='700'>
                            <Link to='/freeconsulting'>
                                <div className="button button1">{t('carousel1.btn1')}</div>
                            </Link>
                            <Link to='/askforaservice'>
                                <div className="button button2">{t('carousel1.btn2')}</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="slide slide3">
                    <div className="container" style={lang === "ar" ? {direction: 'ltr'} : {direction: 'rtl'}}>
                        <h1 data-aos-duration="2000" data-aos-delay='500'>{t('carousel1.h3')}</h1>
                        <p data-aos-duration="2000" data-aos-delay='600'>{t('carousel1.p3')}</p>
                        <div className="buttons" data-aos-duration="2000" data-aos-delay='700'>
                            <Link to='/freeconsulting'>
                                <div className="button button1">{t('carousel1.btn1')}</div>
                            </Link>
                            <Link to='/askforaservice'>
                                <div className="button button2">{t('carousel1.btn2')}</div>
                            </Link>
                        </div>
                    </div>
                </div>

            </Carousel>
        </div>
    )
}

export default HeroSec