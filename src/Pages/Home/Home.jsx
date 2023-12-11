import React from 'react'
import HeroSec from '../../Components/HeroSec/HeroSec'
import Circles from '../../Components/Circles/Circles'
import SecondSlider from '../../Components/SecondSlider/SecondSlider'
import Different from '../../Components/Different/Different'
import CommonQ from '../../Components/CommonQ/CommonQ'
import CounterUp from '../../Components/CounterUp/CounterUp'
import Partners from '../../Components/Partners/Partners'
import Reviews from '../../Components/Reviews/Reviews'
import { useMyContext } from '../../context/MyContext'

const Home = () => {
  const { lang, setlang, t, i18n } = useMyContext();
  return (
    <div>
      <HeroSec/>
      <Circles/>
      <SecondSlider/>
      <Different/>
      <CommonQ/>
      <CounterUp/>
      <Partners/>
      <Reviews/>
    </div>
  )
}

export default Home