import React, { useEffect, useState } from 'react';
import './Partners.scss';
import { useMyContext } from '../../context/MyContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import { PartnersApi } from '../../Apis/Apis';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Partners = () => {
    const { lang, setlang, t, i18n } = useMyContext();

    useEffect(() => {
        AOS.init();
    }, []);

    const [data, setdata] = useState([]);

    useEffect(() => {
        PartnersApi().then((res) => {
            setdata(res);
        });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,  // Enable auto-scroll
        autoplaySpeed: 3000,  // Set the auto-scroll speed (in milliseconds)
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className='Partners' data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
            <div className="container" style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }}>
                <h1 className='secH'>{t('partners.h1')}</h1>
                <Slider {...settings}>
                    {data.map((item, i) => (
                        <div className="image col-lg-3 col-md-6 mb-3" key={i}>
                            <img loading="lazy" alt="Enjazz_image" src={item.logo} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Partners;
