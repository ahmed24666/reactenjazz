import React, { useEffect, useState } from 'react'
import CommonHead from '../../Components/CommonHead/CommonHead'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './DedicatedAsk.scss'
import { useParams } from 'react-router-dom';
import { useMyContext } from '../../context/MyContext';
import Swal from 'sweetalert2';
import { ServiceRequestApi } from '../../Apis/Apis';
const DedicatedAsk = () => {
    const { lang, setlang, t, i18n } = useMyContext();
    const [loading, setloading] = useState(false)
    const id = useParams().id
    const links =
    {
        'service-management': 'إدارة الخدمات',
        'register-a-trademark': 'تسجيل العلامة التجارية',
        'establishment-of-facilities': 'إنشاء المرافق',
        'legal-advice': 'النصيحة القانونية',
        'all-government-services': 'جميع الخدمات الحكومية',
        'wage-protection': 'حماية الأجور',
        'reducing-financial-burdens': 'تخفيف الأعباء المالية',
        'free-tryme-service': 'خدمة تجربتي المجانية'
    }

    const exist = Object.entries(links).some((item) => item[0] == id)
    // console.log(links['register-a-trademark'])
    useEffect(() => {
        AOS.init();
    }, []);
    const namear = {
        "service-management": ["طلب خدمة إدارة الخدمات", "خدمة إدارة الخدمات", "نعمل كوسيط غير مباشر بينك وبين عملائك من خلال تقديم الحلول المتكاملة لتطوير وتصميم وتشغيل المنصات الإلكترونية، مع التركيز على تحسين تجربة المستخدم وضمان الأمان في عالم التحول الرقمي."],

        "register-a-trademark": ["طلب خدمة تسجيل علامة تجارية", "خدمة تسجيل علامة تجارية", "نقدم لك استشارة قانونية لحماية علامتك التجارية ونعمل على إعداد وتقديم المستندات اللازمة لضمان تسجيلها بموجب القوانين والتشريعات المعمول بها داخل المملكة."],

        "establishment-of-facilities": ["طلب خدمة تأسيس المنشآت", "خدمة تأسيس المنشآت", "نضمن لك بداية قوية وسلسة، للوصول إلى تحقيق رؤيتك وفكرتك إلى حقيقة مُنافسة، لذا خدماتنا تشمل التوجيه في كل مرحلة من تأسيس مؤسستك أو شركتك، بدءا من اختيار الهيكل القانوني المناسب وصولا إلى إعداد وتقديم الوثائق المطلوبة للجهات المختصة."],

        "legal-advice": ["طلب خدمة الاستشارات القانونية", "خدمة الاستشارات القانونية", "هي استشارة يقدمها خبير قانوني متخصص تهدف هذه الاستشارة إلى تزويد العميل بالمشور"],

        "all-government-services": ["طلب خدمة جميع الخدمات الحكومية", "خدمة جميع الخدمات الحكومية", ""],//..

        "wage-protection": ["طلب خدمة حماية الأجور", "خدمة حماية الأجور", "لدينا تجربة فريدة في إدارة رواتب موظفيك بأمان ودقة تامة، مع الاهتمام بأحدث التطورات القانونية والضريبية، كما نحسن حسابات الرواتب وتوزيع المزايا بدقة متناهية واحترافية، ونتكفل بالامتثال للقوانين واللوائح والأنظمة التابعة للمملكة."],

        "reducing-financial-burdens": ["طلب خدمة تخفيف الاعباء المالية", "خدمة تخفيف الاعباء المالية", "احصل على استشارات مالية مبتكرة تساعدك على تخفيف أعباء مؤسستك المالية، نقوم بتحليل وضعك المالي ونقدم استراتيجيات فعالة، إذ نمتلك حلولاً مخصصة تضمن استدامة مشروعك بنجاح."],

        "free-tryme-service": ["طلب خدمة جربني المجانية", "خدمة جربني المجانية", ""]//..
    }
    const nameen = {
        "service-management": ["Managing services for establishments", "Managing services for establishments", "Experience efficient management with our electronic services for establishments. Our solutions streamline operations, including employee oversight, insurance coordination, governmental interactions, medical provisions, and more. We ensure a smooth approach, freeing your focus for expansion and progress."],

        "register-a-trademark": ["Trademark Registration", "Trademark Registration", "Safeguard your brand identity through our expert Trademark Registration service. Rely on our legal consultations to protect your trademark, as we meticulously prepare and submit all necessary documents for its registration, ensuring strict compliance with the Kingdom's laws and regulations."],

        "establishment-of-facilities": ["Establishing Companies", "Establishing Companies", "Cultivate your vision into a thriving competitive force with our Establishing Company's service. Our comprehensive approach includes company formation, expert guidance, and meticulous incorporation services to give your business a strong foundation. "],

        "legal-advice": ["Legal Advice", "Legal Advice", "It is a consultation provided by a specialized legal expert. This consultation aims to provide the client with advice"],

        "all-government-services": ["All Government Services", "All Government Services", ""],

        "wage-protection": ["Payroll Protection Service", "Monthly and Annual Payroll Protection Service", "Grow your business with our Monthly and Annual Payroll Protection Service. We ensure precise payroll management, compliance, and income protection while guarding against risks and maintaining utmost confidentiality."],

        "reducing-financial-burdens": ["Financial Advisory Services", "Financial Advisory Services", "Experience transformative Financial Advisory Services tailored to relieve financial pressures on your enterprise، our approach includes in-depth financial consulting, wealth management, and personalized investment advice to ensure your lasting success."],

        "free-tryme-service": ["Free Try Me Service", "Free Try Me Service", ""]

    }
    const services = {
        "Wage Protection": "حماية الأجور",
        "Service Management": "إدارة الخدمات",
        "Government Services Management": "إدارة الخدمات الحكومية",
        "Powerful Platform": "منصة قوية",
        "Social Insurance Services": "خدمات التأمينات الاجتماعية",
        "Absher Platform": "منصة أبشـر",
        "Resident Portal": "بوابة مقيـم",
        "My Nation Platform": "منصة بلدي",
        "Ministry of Interior Services": "خدمات وزارة الداخلية",
        "Medical Insurance Services": "خدمات التأمين الطبي",
        "Vehicle Insurance Services": "خدمات تأمين المركبات",
        "Zakat and Tax Services": "خدمات الزكاة والضريبة",
        "Accountants Authority": "هيئة المحاسبين",
        "Saudi Post Services": "خدمات البريد السعودي سبـل",
        "Samah Services": "خدمات سمه",
        "Establishment of Companies and Institutions": "تأسيس الشركات والمؤسسات",
        "Ministry of Commerce Services": "خدمات وزارة التجارة",
        "My Nation Platform Services": "خدمات منصة بلدي",
        "Administrative and Labor Consultations": "الاستشارات الإدارية والعمالية",
        "Investment Ministry Services": "خدمات وزارة الاستثمار",
        "Human Resources Ministry Services": "خدمات وزارة الموارد البشرية",
        "Foreign Affairs Ministry Services": "خدمات وزارة الخارجية",
        "Tam Platform Services": "خدمات منصة تـم",
        "Transportation Ministry Services": "خدمات وزارة النقل",
        "Justice Ministry Services": "خدمات وزارة العدل",
        "Remote Work Services": "خدمات العمل عن بعد",
        "Engineers Authority": "هيئة المهندسين",
        "Accountants Authority": "هيئة المحاسبين",
        "Food and Drug Authority Services": "خدمات هيئة الغذاء والدواء",
        "Ministry of Commerce": "وزارة التجارة",
        "Consultation Services": "خدمات الاستشارات"
    }

    // console.log(id)
    const [govService, setgovService] = useState('حماية الأجور')
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [mobile, setmobile] = useState('')
    const [city, setcity] = useState('')
    const defaultService = () => {
        if (exist) {
            if (id === 'all-government-services') {
                return `${links[id].toUpperCase().replaceAll('-', ' ')} - ${govService}`
            } else {
                return links[id].toUpperCase().replaceAll('-', ' ')
            }
        } else {
            return 'service-management-yearly'.toUpperCase().replaceAll('-', ' ')
        }
    }
    const [service_type, setservice_type] = useState(defaultService())
    const [notes, setnotes] = useState('')
    useEffect(() => {
        setservice_type(`${links[id].toUpperCase().replaceAll('-', ' ')} - ${govService}`)
        console.log(service_type)
    }, [govService])


    const [data, setdata] = useState([])

    //   function isEmailValid(email) {
    //       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //       return emailPattern.test(email);
    //   }

    const handleSubmit = () => {
        if (name !== '' && mobile !== '') {
            //   console.log(name,email,mobile,city,service_type,notes)
            setloading(true)
            ServiceRequestApi(name, mobile, service_type, notes).then((res) => {
                setloading(false)
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
            Swal.fire({
                title: lang === "ar" ? '! خطأ' : 'Error!',
                text: lang === "ar" ? `${name === '' ? "لم يتم ادخال الاسم ." : ""} ${mobile === '' ? "لم يتم ادخال رقم الهاتف ." : ""}` : `${name === '' ? "The Name is Missing ." : ""}${mobile === '' ? "The Mobile is Missing ." : ""}`,
                icon: 'error',
                timer: 2000,
                confirmButtonText: lang === "ar" ? 'الرجوع' : 'Return'
            })
        }
    }
    return (
        <div>
            <CommonHead title={lang === "ar" ? namear[id][0] : nameen[id][0]} path={t('askService.path')} />
            <div className="EnjazzForm" style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }} data-aos="fade-in" data-aos-duration="2000" data-aos-delay='500'>
                <h1 className='section-title3'>{lang === "ar" ? namear[id][1] : nameen[id][1]}</h1>
                <p>{lang === "ar" ? namear[id][2] : nameen[id][2]}</p>
                <div className="container">
                    <h1 className='section-title3'>{t('askService.h1')}</h1>
                    <p>{t('askService.p')}</p>
                    <span>{t('form.p1')}</span>

                    <div className="EnjazzFormInputs">
                        <input className='EnjazzFormInput' type="text" placeholder={t('form.fullName')} onChange={(e) => setname(e.target.value)} />
                        {/* <span style={{ color: 'red', marginTop: '-10px' }}>{t('form.required')}</span> */}

                        {/* <input className='EnjazzFormInput' type="text" placeholder={t('form.email')} onChange={(e) => setemail(e.target.value)} /> */}
                        <input className='EnjazzFormInput' type="text" placeholder={t('form.phone')} onChange={(e) => setmobile(e.target.value)} />
                        {/* <span style={{ color: 'red', marginTop: '-10px' }}>{t('form.required')}</span> */}

                        {/* <input className='EnjazzFormInput' type="text" placeholder={t('form.city')} onChange={(e) => setcity(e.target.value)} /> */}
                        {id === 'all-government-services' && (
                            <select className='EnjazzFormInput' style={lang === "ar" ? { backgroundPositionX: '3%' } : { backgroundPositionX: '97%' }} onChange={(e) => setgovService(e.target.value)}>
                                {Object.entries(services).map(([en, ar], i) => {
                                    return (
                                        <option value={ar} selected={i === 0}>{lang === "ar" ? ar : en}</option>
                                    )
                                })}

                            </select>
                        )}
                        {/* <span style={{ color: 'red', marginTop: '-10px' }}>{t('form.required')}</span> */}

                        <textarea className='EnjazzFormInput' cols="30" rows="4" placeholder={t('form.details')} onChange={(e) => setnotes(e.target.value)}></textarea>
                    </div>
                    <div className="EnjazzFormBtn loaderBtnCont2" onClick={() => handleSubmit()}>
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
    )
}

export default DedicatedAsk