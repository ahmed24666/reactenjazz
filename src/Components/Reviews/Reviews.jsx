import Carousel from 'nuka-carousel'
import React, { useEffect, useState } from 'react'
import './Reviews.scss'
import { Link } from 'react-router-dom'
import { AiFillStar, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { useMyContext } from '../../context/MyContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReviewsApi } from '../../Apis/Apis';
import Slider from 'react-slick';
const Reviews = () => {
  const [num, setNum] = useState(3);
  const { lang, setlang, t, i18n } = useMyContext();
  useEffect(() => {
    AOS.init();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding:true,
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
  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 767) {
      setNum(1);
    } else if (screenWidth <= 992) {
      setNum(2);
    } else {
      setNum(3);
    }

    // Add a listener to update num on window resize
    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      if (newScreenWidth <= 767) {
        setNum(1);
      } else if (newScreenWidth <= 992) {
        setNum(2);
      } else {
        setNum(3);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [data, setdata] = useState([])
  useEffect(() => {
    ReviewsApi().then((res) => { setdata(res) })
  }, []);
  return (
    <div className='Reviews' data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
      <div className="container" >
        <h1 className='secH' style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }}>{t('reviews.h1')}</h1>

        <Slider {...settings}>
        {data?.map((item, i) => {
            return (
              <div className="slide" key={i}>
                <div className="image">
                  <img loading="lazy" alt="Enjazz_image" src={item.image ? item.image : "/images/wired-outline-21-avatar.webp"} />
                </div>
                <div className="stars">
                  {[...Array(5)].map((star, i) => {
                    return i + 1 <= item.rating ? (<div className="star" key={i}><AiFillStar /></div>) : (<div className="star" key={i}><AiOutlineStar /></div>)
                  })}
                </div>
                <p style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }}>{lang === "ar" ? item.review_ar : item.review_en}</p>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Reviews