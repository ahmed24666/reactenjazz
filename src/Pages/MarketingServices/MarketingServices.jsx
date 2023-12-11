import React, { useEffect } from 'react'
import './../DesignServices/DesignServices.scss'
import CommonHead from '../../Components/CommonHead/CommonHead'
import { useMyContext } from '../../context/MyContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const MarketingServices = () => {
    const { lang, setlang, t, i18n } = useMyContext();
    useEffect(() => {
        AOS.init();
    }, []);
    const data = lang === "ar" ? [
        {
            arTitle: 'التسويق الرقمي',
            enTitle: 'Digital Marketing',
            p: ' يهدف الوصول إلى الجمهور المستهدف وتعزيز المنتجات أو الخدمات من خلال وسائل التواصل الاحتماعي'
        },
        {
            arTitle: 'الإعلان والعلاقات العامة',
            enTitle: 'Advertising and Public Relations',
            p: 'إنشاء حملات إعلانية وإدارة العلاقات مع وسائل الإعلام والصحافة لزيادة التواجد الإعلامي والتفاعل مع الجمهور'
        },
        {
            arTitle: 'تسويق المحتوى',
            enTitle: 'Content Marketing',
            p: 'إنشاء محتوى ذو جودة عالية مثل المقالات والمدونات ومقاطع الفيديو لجذب وتثقيف الجمهور وتعزيز العلامة التجارية.'
        },
        {
            arTitle: 'تسويق وسائل التواصل',
            enTitle: 'Social Media Marketing',
            p: 'استخدام منصات وسائل التواصل الاجتماعي للتفاعل مع الجمهور ونشر محتوى تسويقي'
        },
        {
            arTitle: 'التسويق بالبريد الإلكتروني',
            enTitle: 'Email Marketing',
            p: 'إرسال رسائل بريد إلكتروني إلى قاعدة بيانات العملاء لتعزيز المنتجات أو الخدمات وتعزيز التواصل'
        },
        {
            arTitle: 'البحث عن الكلمات الرئيسية',
            enTitle: 'Keyword Research',
            p: 'بحث عن الكلمات والعبارات التي يستخدمها الجمهور للبحث على الإنترنت وتحسين موقع الشركة في نتائج محركات البحث'
        },
        {
            arTitle: 'تسويق التأثير',
            enTitle: 'Influencer Marketing',
            p: 'التعاون مع مؤثرين رقميين أو شخصيات على وسائل التواصل الاجتماعي للترويج للمنتجات أو الخدمات'
        },
        {
            arTitle: 'التسويق التجريبي',
            enTitle: 'Experiential Marketing',
            p: 'إنشاء تجارب تفاعلية للعملاء لتعزيز العلامة التجارية وتوصيل رسالة معينة.'
        },
        {
            arTitle: 'البحث السوقي',
            enTitle: 'Market Research',
            p: 'جمع وتحليل البيانات حول السوق والعملاء لفهم احتياجات الجمهور وتوجيه استراتيجيات التسويق.'
        },
        {
            arTitle: 'تسويق المواقع',
            enTitle: 'Location-Based Marketing',
            p: 'استخدام تقنيات تحديد المواقع لتوجيه العروض والإعلانات إلى الجمهور في مواقع معينة.'
        },
    ] : [
        {
            arTitle: 'التسويق الرقمي',
            enTitle: 'Digital Marketing',
            p: 'Aims to reach the target audience and promote products or services through social media channels.'
        },
        {
            arTitle: 'الإعلان والعلاقات العامة',
            enTitle: 'Advertising and Public Relations',
            p: 'Creating advertising campaigns and managing media and press relations to increase media presence and audience engagement.'
        },
        {
            arTitle: 'تسويق المحتوى',
            enTitle: 'Content Marketing',
            p: 'Creating high-quality content such as articles, blogs, and videos to attract and educate the audience and enhance the brand.'
        },
        {
            arTitle: 'تسويق وسائل التواصل',
            enTitle: 'Social Media Marketing',
            p: 'Using social media platforms to interact with the audience and distribute marketing content.'
        },
        {
            arTitle: 'التسويق بالبريد الإلكتروني',
            enTitle: 'Email Marketing',
            p: 'Sending email messages to the customer database to promote products or services and enhance communication.'
        },
        {
            arTitle: 'البحث عن الكلمات الرئيسية',
            enTitle: 'Keyword Research',
            p: 'Researching the keywords and phrases used by the audience for online search and improving the company\'s ranking in search engine results.'
        },
        {
            arTitle: 'تسويق التأثير',
            enTitle: 'Influencer Marketing',
            p: 'Collaborating with digital influencers or personalities on social media to promote products or services.'
        },
        {
            arTitle: 'التسويق التجريبي',
            enTitle: 'Experiential Marketing',
            p: 'Creating interactive customer experiences to promote the brand and convey a specific message.'
        },
        {
            arTitle: 'البحث السوقي',
            enTitle: 'Market Research',
            p: 'Gathering and analyzing data about the market and customers to understand audience needs and guide marketing strategies.'
        },
        {
            arTitle: 'تسويق المواقع',
            enTitle: 'Location-Based Marketing',
            p: 'Using location-based targeting techniques to deliver offers and advertisements to audiences in specific locations.'
        },
    ]
    return (
        <>
            <CommonHead title={t('package4.h1')} path={t('package4.path')} />
            <div className='DesignServices' data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300' style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }}><div className="container">
                <h1>{t('package4.h2')}</h1>
                <p>{t('package4.p')}</p>
                <h2 className='section-title3 text-center my-5'>{t('package4.h3')}</h2>
                <div className="packs">
                    {data.map((item, i) => {
                        return (
                            <div className="pack" key={i}>
                                <h1>{item.arTitle}</h1>
                                <h1>{item.enTitle}</h1>
                                <p>{item.p}</p>
                                <Link to="/askforaservice">
                                    <span>{t('subsc.h1')}</span>
                                </Link>
                            </div>
                        )
                    })}

                </div>
                <p className='pt-5'>{t('package4.p2')}</p>
            </div></div>
        </>
    )
}

export default MarketingServices