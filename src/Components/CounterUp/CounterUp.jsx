import React, { useEffect, useRef, useState } from 'react'
import './CounterUp.scss'
import CountUp from 'react-countup';
import { useMyContext } from "../../context/MyContext";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { StatisticsApi } from '../../Apis/Apis';
const CounterUp = () => {
    const { lang, setlang, t, i18n } = useMyContext();
    const [scrolledToSection, setScrolledToSection] = useState(false);
    const scrolled = useRef()
    const handleScroll = () => {

        if (scrolled.current) {
            const sectionTop = scrolled.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight) {
                setScrolledToSection(true);
            } else {
                setScrolledToSection(false);
            }
        }
    };

    // Add an event listener for scroll events when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        AOS.init();
      }, []);
      const [data, setdata] = useState([])
    useEffect(() => {
        StatisticsApi().then((res)=>{setdata(res)})
      }, []);
    return (
        <div className='CounterUp' data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
            <div className="container">
                <div className="row">
                    <div ref={scrolled} className="col-lg-3 col-md-6 d-flex flex-column gap-3 justify-content-center align-items-center mt-4">
                        <div className="image">
                            <img loading="lazy" alt="Enjazz_image"  src="/images/count1.webp" />
                        </div>
                        <h1>
                            {scrolledToSection && (

                                <CountUp
                                    start={0}
                                    end={data.services}
                                    duration={5}
                                />
                            )}
                            +</h1>
                        <p>{t('count.h1')}</p>
                        <span>{t('count.h11')}</span>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex flex-column gap-3 justify-content-center align-items-center mt-4">
                        <div className="image">
                            <img loading="lazy" alt="Enjazz_image"  src="/images/count2.webp" />
                        </div>
                        <h1>{scrolledToSection && (

                            <CountUp
                                start={0}
                                end={data.consultations}
                                duration={5}
                            />
                        )}+</h1>
                        <p>{t('count.h2')}</p>
                        <span>{t('count.h22')}</span>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex flex-column gap-3 justify-content-center align-items-center mt-4">
                        <div className="image">
                            <img loading="lazy" alt="Enjazz_image"  src="/images/count3.webp" />
                        </div>
                        <h1>{scrolledToSection && (

                            <CountUp
                                start={0}
                                end={data.reviews}
                                duration={5}
                            />
                        )}+</h1>
                        <p>{t('count.h3')}</p>
                        <span>{t('count.h33')}</span>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex flex-column gap-3 justify-content-center align-items-center mt-4">
                        <div className="image">
                            <img loading="lazy" alt="Enjazz_image"  src="/images/count4.webp" />
                        </div>
                        <h1>{scrolledToSection && (

                            <CountUp
                                start={0}
                                end={data.customers}
                                duration={5}
                            />
                        )}+</h1>
                        <p>{t('count.h4')}</p>
                        <span>{t('count.h44')}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterUp