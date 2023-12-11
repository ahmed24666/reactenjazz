import React, { useEffect } from 'react'
import './ServiceGuide.scss'
import CommonHead from '../../Components/CommonHead/CommonHead'
import CommonQ from '../../Components/CommonQ/CommonQ'
import { useMyContext } from '../../context/MyContext'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Link } from 'react-router-dom'
const ServiceGuide = () => {
    const { lang, setlang, t, i18n } = useMyContext();

    useEffect(() => {
        AOS.init();
      }, []);
    const data = lang === "ar" ?{
        "salary-management-services-wage-protection-system-monthly": "خدامات إدارة الرواتب نظام حماية الأجور (الشهري)",
        "salary-management-services-wage-protection-system-yearly": "خدامات إدارة الرواتب نظام حماية الأجور(السنوي)",
        "incorporation-services-for-institutions-and-companies": "خدمات تأسيس المؤسسات والشركات",
        "legal-entity-transformation-services-for-establishments": "خدمات تحويل الهيئة القانونية للمنشآت",
        "ownership-transfer-services-for-establishments-and-companies": "خدمات نقل الملكية للمنشآت والشركات",
        "financial-burden-relief-services-for-establishments": "خدمات تخفيف الأعباء المالية للمنشآت",
        "zakat-and-taxation-services": "الخدمات الزكوية الضريبية",
        "direct-support-services-for-government-ministries-issues": "خدمات الدعم المباشر لمشاكل الوزارات الحكومية",
        "cooperative-insurance-services-for-establishments": "خدمات التأمين التعاوني للمنشآت",
        "trademark-registration": "تسجيل العلامة التجارية",
        "electronic-services-management": "إدارة الخدمات الالكترونية",
        "business-consultation-services": "خدمات استشارات الأعمال",
        "design-services": "خدمات التصميم",
        "digital-marketing-services": "خدمات التسويق الالكتروني",
        "registration-services-for-high-profile-skilled-workers": "خدمات التسجيل للعمالة ذات المهن العليا"
      }
      :{
        "salary-management-services-wage-protection-system-monthly": "Salary Management Services Wage Protection System (Monthly)",
        "salary-management-services-wage-protection-system-yearly": "Salary Management Services Wage Protection System (Yearly)",
        "incorporation-services-for-institutions-and-companies": "Incorporation Services for Institutions and Companies",
        "legal-entity-transformation-services-for-establishments": "Legal Entity Transformation Services for Establishments",
        "ownership-transfer-services-for-establishments-and-companies": "Ownership Transfer Services for Establishments and Companies",
        "financial-burden-relief-services-for-establishments": "Financial Burden Relief Services for Establishments",
        "zakat-and-taxation-services": "Zakat and Taxation Services",
        "direct-support-services-for-government-ministries-issues": "Direct Support Services for Government Ministries' Issues",
        "cooperative-insurance-services-for-establishments": "Cooperative Insurance Services for Establishments",
        "trademark-registration": "Trademark Registration",
        "electronic-services-management": "Electronic Services Management",
        "business-consultation-services": "Business Consultation Services",
        "design-services": "Design Services",
        "digital-marketing-services": "Digital Marketing Services",
        "registration-services-for-high-profile-skilled-workers": "Registration Services for High-Profile Skilled Workers"
      }
      ;
    return (
        <div className='ServiceGuide' >
            <CommonHead title={t('guide.h1')} path={t('guide.path')} />
            <div className="guide" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                <div className="container" style={lang === "ar" ? {direction: 'rtl'} : {direction: 'ltr'}}>
                    <h1 className='section-title3'>{t('guide.h2')}</h1>
                    <div className="items">
                        {Object.entries(data).map(([key,value],i) => {
                            return (
                                <Link to={`/ask-for-aservice/${key}`} key={i}>
                                <div className="item">
                                    <div className="icon swing-in-top-fwd">
                                        <img loading="lazy" alt="Enjazz_image"  src="/images/tick.webp" />
                                    </div>
                                    <p>{value}</p>
                                </div>
                                </Link>
                            )
                        })}

                    </div>
                </div>
            </div>
            <CommonQ />
        </div>
    )
}

export default ServiceGuide