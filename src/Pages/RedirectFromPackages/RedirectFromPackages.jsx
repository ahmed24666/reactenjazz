import React, { useEffect, useState } from 'react'
import CommonHead from '../../Components/CommonHead/CommonHead'
import Calculator from '../../Components/Calculator/Calculator'
import './RedirectFromPackages.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useParams } from 'react-router-dom';
import { useMyContext } from '../../context/MyContext';
import Swal from 'sweetalert2';
import {ServiceManagemenApi, ServiceRequestApi, ServiceRequestWithCalcApi } from '../../Apis/Apis';
import CalcRedirect from '../../Components/CalcRedirect/CalcRedirect';
import { BsArrowCounterclockwise } from 'react-icons/bs';
const RedirectFromPackages = () => {
    const [numberOfEmployers, setnumberOfEmployers] = useState(0)
    const [packageType, setpackageType] = useState('bronze')
    const [annualCost, setAnnualCost] = useState(0)
    const [wageProtection, setwageProtection] = useState('select')
    const { lang, setlang, t, i18n } = useMyContext();

    const [data2, setdata2] = useState([])
    useEffect(() => {
        // console.log(numberOfEmployers)
    }, [numberOfEmployers])
    useEffect(() => {
        // console.log(annualCost)
    }, [annualCost])
    useEffect(() => {
        // console.log(wageProtection)
    }, [wageProtection])

    useEffect(() => {
        ServiceManagemenApi().then((res) => {
            setdata2(res)
            // console.log(res)
        })
    }, []);
    const id = useParams().id
    const [showCalc, setshowCalc] = useState(id === "service-management-bronze" || id === "service-management-silver" || id === "service-management-gold" || id === "service-management-diamond")
    const Titles = {
        "service-management-bronze": {
            "en": "Service Management Bronze",
            "ar": "إدارة الخدمات - الباقة البرونزية"
        },
        "service-management-silver": {
            "en": "Service Management Silver",
            "ar": "إدارة الخدمات - الباقة الفضية"
        },
        "service-management-gold": {
            "en": "Service Management Gold",
            "ar": "إدارة الخدمات - الباقة الذهبية"
        },
        "service-management-diamond": {
            "en": "Service Management Diamond",
            "ar": "إدارة الخدمات - الباقة الماسية"
        },
        "wage-management-monthly-bronze": {
            "en": "Wage Management Monthly Bronze",
            "ar": "إدارة الأجور الشهرية - الباقة البرونزية"
        },
        "wage-management-monthly-silver": {
            "en": "Wage Management Monthly Silver",
            "ar": "إدارة الأجور الشهرية - الباقة الفضية"
        },
        "wage-management-monthly-gold": {
            "en": "Wage Management Monthly Gold",
            "ar": "إدارة الأجور الشهرية - الباقة الذهبية"
        },
        "wage-management-monthly-platenium": {
            "en": "Wage Management Monthly Platinum",
            "ar": "إدارة الأجور الشهرية - الباقة البلاتينية"
        },
        "wage-management-yearly-bronze": {
            "en": "Wage Management Yearly Bronze",
            "ar": "إدارة الأجور السنوية - الباقة البرونزية"
        },
        "wage-management-yearly-silver": {
            "en": "Wage Management Yearly Silver",
            "ar": "إدارة الأجور السنوية - الباقة الفضية"
        },
        "wage-management-yearly-gold": {
            "en": "Wage Management Yearly Gold",
            "ar": "إدارة الأجور السنوية - الباقة الذهبية"
        },
        "wage-management-yearly-platenium": {
            "en": "Wage Management Yearly Platinum",
            "ar": "إدارة الأجور السنوية - الباقة البلاتينية"
        },
        "design-and-videos": {
            "en": "Design and Videos",
            "ar": "تصميم وفيديوهات"
        },
        "social-media-management": {
            "en": "Social Media Management",
            "ar": "إدارة وسائل التواصل الاجتماعي"
        },
        "websites": {
            "en": "Websites",
            "ar": "مواقع الويب"
        },
        "applications-for-apple-android-devices": {
            "en": "Applications for Apple & Android Devices",
            "ar": "تطبيقات لأجهزة آبل وأندرويد"
        },
        "create-an-online-store": {
            "en": "Create an Online Store",
            "ar": "إنشاء متجر إلكتروني"
        },
        "salary-management-services-wage-protection-system-monthly": {
            "en": "Salary Management Services Wage Protection System (Monthly)",
            "ar": "خدمات إدارة الرواتب نظام حماية الأجور (الشهري)"
        },
        "salary-management-services-wage-protection-system-yearly": {
            "en": "Salary Management Services Wage Protection System (Yearly)",
            "ar": "خدمات إدارة الرواتب نظام حماية الأجور (السنوي)"
        },
        "incorporation-services-for-institutions-and-companies": {
            "en": "Incorporation Services for Institutions and Companies",
            "ar": "خدمات تأسيس المؤسسات والشركات"
        },
        "legal-entity-transformation-services-for-establishments": {
            "en": "Legal Entity Transformation Services for Establishments",
            "ar": "خدمات تحويل الهيئة القانونية للمنشآت"
        },
        "ownership-transfer-services-for-establishments-and-companies": {
            "en": "Ownership Transfer Services for Establishments and Companies",
            "ar": "خدمات نقل الملكية للمنشآت والشركات"
        },
        "financial-burden-relief-services-for-establishments": {
            "en": "Financial Burden Relief Services for Establishments",
            "ar": "خدمات تخفيف الأعباء المالية للمنشآت"
        },
        "zakat-and-taxation-services": {
            "en": "Zakat and Taxation Services",
            "ar": "الخدمات الزكوية الضريبية"
        },
        "direct-support-services-for-government-ministries-issues": {
            "en": "Direct Support Services for Government Ministries' Issues",
            "ar": "خدمات الدعم المباشر لمشاكل الوزارات الحكومية"
        },
        "cooperative-insurance-services-for-establishments": {
            "en": "Cooperative Insurance Services for Establishments",
            "ar": "خدمات التأمين التعاوني للمنشآت"
        },
        "trademark-registration": {
            "en": "Trademark Registration",
            "ar": "تسجيل العلامة التجارية"
        },
        "electronic-services-management": {
            "en": "Electronic Services Management",
            "ar": "إدارة الخدمات الالكترونية"
        },
        "business-consultation-services": {
            "en": "Business Consultation Services",
            "ar": "خدمات استشارات الأعمال"
        },
        "design-services": {
            "en": "Design Services",
            "ar": "خدمات التصميم"
        },
        "digital-marketing-services": {
            "en": "Digital Marketing Services",
            "ar": "خدمات التسويق الالكتروني"
        },
        "registration-services-for-high-profile-skilled-workers": {
            "en": "Registration Services for High-Profile Skilled Workers",
            "ar": "خدمات التسجيل للعمالة ذات المهن العليا"
        }
    }
    const calc = {
        'bronze': {
            price: parseInt(data2[0]?.price),
            empNum: 4
        },
        'silver': {
            price: parseInt(data2[1]?.price),
            empNum: 9
        },
        'gold': {
            price: parseInt(data2[2]?.price),
            empNum: 9
        },
        'diamond': {
            price: parseInt(data2[3]?.price),
            empNum: 9
        }
    };

// console.log(Titles["service-management-bronze"].ar)
// console.log(Titles[id].ar)
    // console.log(exist)
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [mobile, setmobile] = useState('')
    const [city, setcity] = useState('')
    const [changeInCalc, setchangeInCalc] = useState(null)
    let titleId = changeInCalc ? changeInCalc : id
    const [service_type, setservice_type] = useState(changeInCalc?Titles[changeInCalc].ar:Titles[id].ar)
    const [notes, setnotes] = useState('')
    const [loading, setloading] = useState(false)


    const [data, setdata] = useState([])

    const handleSubmit = (e) => {
        // console.log(numberOfEmployers)
        // console.log(wageProtection)
        e.preventDefault()
        if (name !== '' && mobile !== '') {
              console.log(name,email,mobile,city,service_type,notes)
            setloading(true)
            ServiceRequestWithCalcApi(name, mobile, service_type, notes, packageType, numberOfEmployers, wageProtection, annualCost).then((res) => {
                setloading(false)
                // console.log(res);
                setdata(res);
            }).then(() => Swal.fire({
                title: lang === "ar" ? 'تم' : 'Submited',
                text: lang === "ar" ? 'تم ارسال البيانات بنجاح' : 'Data was sent successfully',
                icon: 'success',
                timer: 2000,
                confirmButtonText: lang === "ar" ? 'الرجوع' : 'Return'
            }))
        }
        else {
            // typeof myVariable === 'number'
            Swal.fire({
                title: lang === "ar" ? '! خطأ' : 'Error!',
                text: lang === "ar" ? `${name === '' ? "لم يتم ادخال الاسم ." : ""} ${mobile === '' ? "لم يتم ادخال رقم الهاتف ." : ""} ${!numberOfEmployers ? "لم يتم ادخال عدد الموظفين ." : ""} ${numberOfEmployers && isNaN(numberOfEmployers) ? "يجب ادخال رقم صحيح" : ""} ${!wageProtection ? "لم يتم تحديد حماية الاجور" : ""}` : `${name === '' ? "The Name is Missing ." : ""}${mobile === '' ? "The Mobile is Missing ." : ""} ${!numberOfEmployers ? "Number of employees has not been entered." : ""} ${numberOfEmployers && isNaN(numberOfEmployers) ? "Please Enter A Whole Number" : ""} ${!wageProtection ? "Wage protection has not been specified." : ""}`,
                icon: 'error',
                timer: 2000,
                confirmButtonText: lang === "ar" ? 'الرجوع' : 'Return'
            })
        }
    }

    useEffect(() => {
        AOS.init();
    }, []);


    // calc

    const [numberOfYears, setnumberOfYears] = useState(1)
    const handlePrice = () => {
        setAnnualCost(0)
        if (numberOfEmployers <= calc[packageType].empNum) {
            if (wageProtection === 'true') {
                setAnnualCost((calc[packageType].price + 2000) * numberOfYears)
            } else {
                setAnnualCost((calc[packageType].price) * numberOfYears)
            }
        }
        else {
            if (wageProtection === 'true') {
                setAnnualCost(((calc[packageType].price + (300 * (numberOfEmployers - calc[packageType].empNum))) + 2000) * numberOfYears)
            } else {
                setAnnualCost((calc[packageType].price + (300 * (numberOfEmployers - calc[packageType].empNum))) * numberOfYears)
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
        if (changeInCalc) {
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
    useEffect(() => {
        changeInCalc&&setservice_type(Titles[changeInCalc].ar)
    }, [changeInCalc])
    useEffect(() => {
      console.log(service_type)
    }, [service_type])
    
    

    return (
        <div>
            <CommonHead title={lang === "ar" ? Titles[titleId].ar : Titles[titleId].en} path={t('askService.path')} />
            <div className="redirectCont" >
                {showCalc && (
                    <div className="calcCon wide">
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
                                                    <select style={lang === "ar" ? { backgroundPositionX: '3%' } : { backgroundPositionX: '97%' }} onChange={(e) => { setwageProtection(e.target.value); }}>
                                                        <option value='select' selected disabled>{t("calc.choose")}</option>
                                                        <option value='true' >{t("calc.true")}</option>
                                                        <option value='false'>{t("calc.false")}</option>
                                                    </select>
                                                </>
                                            )}
                                        </div>
                                        {/* <div className="item">
                    <label>{t("calc.f4")}</label>
                    <input required type="number" min={1} placeholder={t("calc.f4")} value={numberOfYears} onChange={(e) => { setnumberOfYears(e.target.value); }} />
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
                                        <button onClick={() => { setAnnualCost(0); setnumberOfEmployers(null); setwageProtection(null); setnumberOfYears(1) }}>
                                            <div className="icon">
                                                <BsArrowCounterclockwise />
                                            </div>
                                            {t("calc.reset")}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="EnjazzForm" style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }} data-aos="fade-in" data-aos-duration="2000" data-aos-delay='500'>
                    <div className="container">
                        <h1 className='section-title3'>{t('askService.h1')}</h1>
                        <p>{t('askService.p')}</p>
                        <span>{t('form.p1')}</span>
                        <div className="EnjazzFormInputs">
                            <input required className='EnjazzFormInput' type="text" placeholder={t('form.fullName')} onChange={(e) => setname(e.target.value)} data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300' />
                            <input required className='EnjazzFormInput' type="text" placeholder={t('form.phone')} onChange={(e) => setmobile(e.target.value)} data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300' />
                            <p data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>{t('form.typeS')}:</p>
                            <div className="EnjazzFormInput" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>{lang === "ar" ? Titles[titleId].ar : Titles[titleId].en}</div>
                            <textarea className='EnjazzFormInput' cols="30" rows="4" placeholder={t('form.details')} onChange={(e) => setnotes(e.target.value)} data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'></textarea>
                        </div>
                        {showCalc && (
                            <div className="calcCon small">
                                <Calculator data={calc} setchangeInCalc={setchangeInCalc} />
                            </div>
                        )}
                        <div className="EnjazzFormBtn loaderBtnCont2" onClick={(e) => handleSubmit(e)}>
                            {!loading && (
                                t('form.send')
                            )}
                            {loading && (
                                <span class="loaderBtn2"></span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RedirectFromPackages