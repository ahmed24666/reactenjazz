import React, { useEffect, useState } from 'react'
import './WageManagment.scss'
import CommonHead from '../../Components/CommonHead/CommonHead'
import { useMyContext } from '../../context/MyContext';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {WageManagementApi } from '../../Apis/Apis';
const WageManagment = () => {
    const { lang, setlang, t, i18n } = useMyContext();
    useEffect(() => {
        AOS.init();
    }, []);
    const [data, setdata] = useState([])
    let dataMonth = data?.filter((item) => item?.package?.includes('Monthly'))
    let dataYear = data?.filter((item) => item?.package?.includes('Yearly'))
    useEffect(() => {
        WageManagementApi().then((res) => {
            //  console.log(res);
              setdata(res) 
            })
    }, []);
    const dataMonthV = {
        0: ["1-50 عامل ", "رفع ملفات الرواتب", "معالجة جميع الاخطاء", "متابعة ازاله الملاحظات"],
        1: ["51-100 عامل ", "رفع ملفات الرواتب", "معالجة جميع الاخطاء", "متابعة ازاله الملاحظات"],
        2: ["101-500 عامل ", "رفع ملفات الرواتب", "معالجة جميع الاخطاء", "متابعة ازاله الملاحظات"],
        3: ["اكثر من 501 عامل", "رفع ملفات الرواتب", "معالجة جميع الاخطاء", "متابعة ازاله الملاحظات"],
    }
    const dataMonthVen = {
        0: ["1-50 Employees", "Upload Salary Files", "Process All Errors", "Monitor Notes Removal"],
        1: ["51-100 Employees", "Upload Salary Files", "Process All Errors", "Monitor Notes Removal"],
        2: ["101-500 Employees", "Upload Salary Files", "Process All Errors", "Monitor Notes Removal"],
        3: ["More than 501 Employees", "Upload Salary Files", "Process All Errors", "Monitor Notes Removal"],
    };
    const namesar = {
        "Bronze Monthly": "البرونزية",
        "Silver Monthly": "الفضية",
        "Gold Monthly": "الذهبية",
        "Platinum Monthly": "البلاتينية",
        "Bronze Yearly": "البرونزية",
        "Silver Yearly": "الفضية",
        "Gold Yearly": "الذهبية",
        "Platinum Yearly": "البلاتينية",
    }
    const namesen = {
        "Bronze Monthly": "Bronze",
        "Silver Monthly": "Silver",
        "Gold Monthly": "Gold",
        "Platinum Monthly": "Platinum",
        "Bronze Yearly": "Bronze",
        "Silver Yearly": "Silver",
        "Gold Yearly": "Gold",
        "Platinum Yearly": "Platinum",
    }
    const routes=[
        "wage-management-monthly-bronze",
        "wage-management-monthly-silver",
        "wage-management-monthly-gold",
        "wage-management-monthly-platenium",
        "wage-management-yearly-bronze",
        "wage-management-yearly-silver",
        "wage-management-yearly-gold",
        "wage-management-yearly-platenium"
      ]
      

    return (
        <>
            <CommonHead title={t('package2.h1')} path={t('package2.path')} />
            <div className='WageManagment' style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }} data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'><div className="container">
                <h1>{t('package2.h2')}</h1>
                <p>{t('package2.p')}</p>
                <h2 className='section-title3 text-center my-5'>{t('package2.h3')}</h2>
                <h2 className='secH'>{lang === "ar" ? 'الشهرية' : 'Monthly'}</h2>
                <div className="packs">
                    {dataMonth?.map((item, i) => {
                        return (
                            <div className="pack " key={i}>
                                <div className="top">
                                    <div className="banner">
                                        <h2>{lang === "ar" ? namesar[item.package] : namesen[item.package]}</h2>
                                        {lang === "ar" ? (
                                            <>
                                                <p>بقيمة<span>{item?.price.replace(/\.00$/, '')}</span>ريال </p>
                                                {item.price_before && item.price_before !== 0.00 && (
                                                    <p className="saleWage">بدلا من<span>{item.price_before.replace(/\.00$/, '')}</span>ريال </p>
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                <p>For only <span>{item?.price.replace(/\.00$/, '')}</span>SAR</p>
                                                {item?.price_before && (
                                                    <p className='saleWage'>Instead of <span>{item?.price_before.replace(/\.00$/, '')}</span>SAR</p>
                                                )}
                                            </>

                                        )}
                                    </div>
                                </div>
                                {lang === "ar" ? (

                                    <ul>
                                        {dataMonthV[i].map((item,i) => {
                                            return (
                                                <li key={i}>{item}</li>
                                            )
                                        })}
                                    </ul>
                                ) : (
                                    <ul>
                                        {dataMonthVen[i].map((item,i) => {
                                            return (
                                                <li key={i}>{item}</li>
                                            )
                                        })}
                                    </ul>

                                )}
                                <div className="bottom">
                                    <Link to={`/ask-for-aservice/${routes[i]}`}>
                                        <div>{t('subsc.h1')}</div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <h2 className='secH'>{lang === "ar" ? 'السنوية' : 'Yearly'}</h2>
                <div className="packs">
                    {dataYear?.map((item, i) => {
                        return (
                            <div className="pack " key={i}>
                                <div className="top">
                                    <div className="banner">
                                        <h2>{lang === "ar" ? namesar[item.package] : namesen[item.package]}</h2>
                                        {lang === "ar" ? (
                                            <>
                                                <p>بقيمة<span>{item?.price.replace(/\.00$/, '')}</span>ريال </p>
                                                {item.price_before && item.price_before !== 0.00 && (
                                                    <p className="saleWage">بدلا من<span>{item.price_before.replace(/\.00$/, '')}</span>ريال </p>
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                <p>For only <span>{item?.price.replace(/\.00$/, '')}</span>SAR</p>
                                                {item?.price_before && (
                                                    <p className='saleWage'>Instead of <span>{item?.price_before.replace(/\.00$/, '')}</span>SAR</p>
                                                )}
                                            </>

                                        )}
                                    </div>
                                </div>
                                {lang === "ar" ? (

                                    <ul>
                                        {dataMonthV[i].map((item,i) => {
                                            return (
                                                <li key={i}>{item}</li>
                                            )
                                        })}
                                    </ul>
                                ) : (
                                    <ul>
                                        {dataMonthVen[i].map((item,i) => {
                                            return (
                                                <li key={i}>{item}</li>
                                            )
                                        })}
                                    </ul>

                                )}
                                <div className="bottom">
                                <Link to={`/ask-for-aservice/${routes[i + 4]}`}>
                                        <div>{t('subsc.h1')}</div>
                                    </Link>                                </div>
                            </div>
                        )
                    })}
                </div>
            </div></div>
        </>
    )
}

export default WageManagment