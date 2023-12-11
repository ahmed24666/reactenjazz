import React, { useEffect } from 'react'
import './Loader.scss'
import { useMyContext } from '../../context/MyContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const Loader = () => {
    const { lang, setlang, t, i18n } = useMyContext();
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='Circle circles-loader' data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>
            <div className="bigCircle">
                <div className="smallcircle">
                    <div className="image">
                        <img loading="lazy" alt="Enjazz_image"
                            src="/images/logoCircle.webp"
                            className="img"
                        />
                    </div>
                </div>
            </div>
            <p className='loaderP' style={{ color: 'white', fontSize: '20px', textAlign: 'center' }}>شريك رحلتك نحو التطور والتميز</p>
        </div>
    )
}

export default Loader