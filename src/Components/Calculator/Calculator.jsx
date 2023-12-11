import React, { useEffect, useState } from 'react'
import './Calculator.scss'
import { useMyContext } from '../../context/MyContext';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Calculator = ({ data, setchangeInCalc }) => {
    const { lang, setlang, t, i18n } = useMyContext();
    const [numberOfEmployers, setnumberOfEmployers] = useState(null)
    const [packageType, setpackageType] = useState('bronze')
    const [annualCost, setAnnualCost] = useState(0)
    const [wageProtection, setwageProtection] = useState('true')
    const [numberOfYears, setnumberOfYears] = useState(1)
    const id = useParams().id
    const handlePrice = () => {
        setAnnualCost(0)
        if (numberOfEmployers <= data[packageType].empNum) {
            if (wageProtection === 'true') {
                setAnnualCost((data[packageType].price + 2000) * numberOfYears)
            } else {
                setAnnualCost((data[packageType].price) * numberOfYears)
            }
        }
        else {
            if (wageProtection === 'true') {
                setAnnualCost(((data[packageType].price + (300 * (numberOfEmployers - data[packageType].empNum))) + 2000) * numberOfYears)
            } else {
                setAnnualCost((data[packageType].price + (300 * (numberOfEmployers - data[packageType].empNum))) * numberOfYears)
            }
        }
    }
    useEffect(() => {
        numberOfYears < 1 && setnumberOfYears(1)
        numberOfEmployers !== null && numberOfEmployers < 1 && setnumberOfEmployers(null)
        if (numberOfEmployers) {
            handlePrice()
        } else {
            setAnnualCost(0)
        }
    }, [numberOfEmployers, packageType, wageProtection, numberOfYears])
    useEffect(() => {
        if (id === "service-management-bronze") {
            setpackageType("bronze")
        }
        if (id === "service-management-silver") {
            setpackageType("silver")
        }
        if (id === "service-management-gold") {
            setpackageType("gold")
        }
        if (id === "service-management-diamond") {
            setpackageType("diamond")
        }
    }, [])

    useEffect(() => {
        if (setchangeInCalc) {
            switch (packageType) {
                case "bronze":
                    setchangeInCalc("service-management-bronze")
                    setwageProtection(null)
                    break;
                case "silver":
                    setchangeInCalc("service-management-silver")
                    setwageProtection(null)

                    break;
                case "gold":
                    setchangeInCalc("service-management-gold")
                    setwageProtection("false")

                    break;
                case "diamond":
                    setchangeInCalc("service-management-diamond")
                    setwageProtection("false")
                    break;
                default:
                    break;
            }
        }
    }, [packageType])
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='Calculator' data-aos="fade-in" data-aos-duration="2000" data-aos-delay='500'>
            <div className="top">{t("calc.title")}</div>
            <div className="container" style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }}>
                <div className="bottom">
                    <div className="left">
                        <div className="item">
                            <label>{t("calc.f1")}</label>
                            <input required type="number" min={1} value={numberOfEmployers} placeholder={t("calc.f1")} onChange={(e) => { setnumberOfEmployers(e.target.value); }} />
                        </div>
                        <div className="item">
                            <label>{t("calc.f2")}</label>
                            <select style={lang === "ar" ? { backgroundPositionX: '3%' } : { backgroundPositionX: '97%' }} onChange={(e) => { setpackageType(e.target.value); }}>
                                <option value="bronze" selected={packageType === "bronze"}>{t("calc.s1")}</option>
                                <option value="silver" selected={packageType === "silver"}>{t("calc.s2")}</option>
                                <option value="gold" selected={packageType === "gold"}>{t("calc.s3")}</option>
                                <option value="diamond" selected={packageType === "diamond"}>{t("calc.s4")}</option>
                            </select>
                        </div>
                        <div className="item">
                            {(packageType !== "gold" && packageType !== "diamond") && (
                                <>
                                    <label>{t("calc.f3")}</label>
                                    <select required style={lang === "ar" ? { backgroundPositionX: '3%' } : { backgroundPositionX: '97%' }} onChange={(e) => { setwageProtection(e.target.value); }}>
                                        <option value='true' disabled>{t("calc.choose")}</option>
                                        <option value='true' >{t("calc.true")}</option>
                                        <option value='false'>{t("calc.false")}</option>
                                    </select>
                                </>
                            )}
                        </div>
                        {/* <div className="item">
                            <label>{t("calc.f4")}</label>
                            <input type="number" min={1} placeholder={t("calc.f4")} value={numberOfYears} onChange={(e) => { setnumberOfYears(e.target.value); }} />
                        </div> */}
                    </div>
                    <div className="right">
                        <div className="priceCon">
                            <h3>
                                {t("calc.much")}
                            </h3>
                            <div className="price">
                                <h2>{`${annualCost}`} {lang === "ar" ? 'ريال' : 'SAR'}</h2>
                                {/* <p>{lang === "ar" ? '/ سنويا' : '/ Yearly'}</p> */}
                            </div>
                        </div>
                        <button onClick={() => { setAnnualCost(0); setnumberOfEmployers(0); setwageProtection('true'); setnumberOfYears(1) }}>
                            <div className="icon">
                                <BsArrowCounterclockwise />
                            </div>
                            {t("calc.reset")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator