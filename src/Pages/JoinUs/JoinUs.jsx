import React, { useEffect, useState } from 'react'
import CommonHead from '../../Components/CommonHead/CommonHead'
import { useMyContext } from '../../context/MyContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';
import { JoinUsApi } from '../../Apis/Apis';
const JoinUs = () => {
    const { lang, setlang, t, i18n } = useMyContext();
    const [loading, setloading] = useState(false)

    const citiesName = {
        "Riyadh": "الرياض",
        "Jeddah": "جده",
        "Medina": "المدينه المنوره",
        "Tabuk": "تبوك",
        "Dammam": "الدمام",
        "Al-Ahsa": "الاحساء",
        "Al-Qatif": "القطيف",
        "Khamis Mushait": "خميس مشيط",
        "Al-Muzahmiyya": "المظيلف",
        "Al-Hofuf": "الهفوف",
        "Al-Mubarraz": "المبرز",
        "Taif": "الطائف",
        "Najran": "نجران",
        "Hafar Al-Batin": "حفر الباطن",
        "Jubail": "الجبيل",
        "Duba": "ضباء",
        "Al-Kharj": "الخرج",
        "Ath Thuqbah": "الثقبة",
        "Yanbu Al-Bahr": "ينبع البحر",
        "Al Khobar": "الخبر",
        "Arar": "عرعر",
        "Al-Hawiyya": "الحوية",
        "Onaizah": "عنيزه",
        "Sakaka": "سكاكا",
        "Jizan": "جيزان",
        "Al-Qurayyat": "القريات",
        "Dhahran": "الظهران",
        "Al-Baha": "الباحة",
        "Az Zulfi": "الزلفي",
        "Ar Rass": "الرس",
        "Wadi Ad-Dawasir": "وادى الدواسر",
        "Bisha": "بيشه",
        "Sayhat": "سيهات",
        "Sharurah": "شروره",
        "Bareq": "بحره",
        "Tarout": "تاروت",
        "Ad Dawadimi": "الدوادمى",
        "Sabya": "صبياء",
        "Bish": "بيش",
        "Ahad Rafidah": "احد رفيدة",
        "Al-Fareesh": "الفريش",
        "Bariq": "بارق",
        "Al-Hawtah": "الحوطه",
        "Al-Aflaj": "الافلاج"
    }
    const partnerShip = {
        "Service Provider": "مزود خدمة",
        "Business Consultant": "مستشار أعمال",
        "Legal Consultant": "مستشار قانوني",
        "Strategic Partner": "شريك استراتيجي",
        "Franchise": "الامتياز التجاري",
        "Customer Service Specialist": "أخصائي خدمة عملاء",
        "Legal Accounting Office": "مكتب محاسب قانوني",
        "Commission Marketer": "مسوق بالعمولة",
        "Zakat And Income Tax Office": "مكتب زكاة وضريبة الدخل",
        "Electronic Services Office": "مكتب خدمات إلكترونية"
    };


    useEffect(() => {
        AOS.init();
    }, []);

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [mobile, setmobile] = useState('')
    const [city, setcity] = useState('Riyadh')
    const [partnership_type, setpartnership_type] = useState('Service Provider')
    const [notes, setnotes] = useState('')
    const [portfolio, setportfolio] = useState('')

    const [data, setdata] = useState([])

    function isEmailValid(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }



    const handleSubmit = () => {
        if (name !== '' && mobile !== '' && partnership_type !== '' && portfolio) {
            //   console.log(name,email,mobile,city,partnership_type,notes,portfolio)
            setloading(true)
            JoinUsApi(name, mobile, partnership_type, notes, portfolio, city, email).then((res) => {
                setloading(false)
                //  console.log(res);
                setdata(res);
            }).then(() => data.portfolio && data.portfolio[0] === 'The submitted data was not a file. Check the encoding type on the form.' ? Swal.fire({
                title: lang === "ar" ? '! خطأ' : 'Error!',
                text: `${lang === "ar" ? "البيانات المقدمة لم تكن ملفا. يرجي التحقق منها ثانيا" : data.portfolio}`,
                icon: 'error',
                timer: 2000,
                confirmButtonText: lang === "ar" ? 'الرجوع' : 'Return'
            }) : Swal.fire({
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
                text: lang === "ar" ? `${name === '' ? "لم يتم ادخال الاسم ." : ""} ${mobile === '' ? "لم يتم ادخال رقم الهاتف ." : ""} ${partnership_type === '' ? "لم يتم تحديد نوع الشراكة ." : ""} ${email === '' ? "لم يتم تحديد ادخال البريد الالكتروني ." : ""} ${!isEmailValid(email) ? "أدخل بريد الكتروني صالح" : ""} ${!portfolio ? "لم يتم رفع السيرة الذاتية " : ""} ` : `${name === '' ? "The Name is Missing ." : ""}${mobile === '' ? "The Mobile is Missing ." : ""} ${partnership_type === '' ? "The type of partnership is not specified ." : ""} ${email === '' ? "The Email is Missing ." : ""}
                  ${!isEmailValid(email) ? "Enter a valid email address." : ""} ${!portfolio ? "The Cv Is Missing ." : ""}
                   `,
                icon: 'error',
                timer: 2000,
                confirmButtonText: lang === "ar" ? 'الرجوع' : 'Return'
            })
        }
    }
    return (
        <div>
            <CommonHead title={t('joinus.h1')} path={t('joinus.path')} />
            <div className="EnjazzForm" style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }} data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                <div className="container">
                    <h1 className='section-title3'>{t('joinus.h2')}</h1>
                    <p>{t('joinus.p')}</p>
                    <span>{t('form.p1')}</span>

                    <div className="EnjazzFormInputs">
                        <input className='EnjazzFormInput' type="text" placeholder={t('form.fullName')} onChange={(e) => setname(e.target.value)} />
                        {/* <span style={{color:'red', marginTop:'-10px'}}>{t('form.required')}</span> */}
                        <input className='EnjazzFormInput' type="email" placeholder={t('form.email')} onChange={(e) => setemail(e.target.value)} />
                        <input className='EnjazzFormInput' type="text" placeholder={t('form.phone')} onChange={(e) => setmobile(e.target.value)} />
                        <p>{t('form.city')}:</p>
                        <select className='EnjazzFormInput' style={lang === "ar" ? { backgroundPositionX: '3%' } : { backgroundPositionX: '97%' }} onChange={(e) => setcity(e.target.value)}>
                            {Object.entries(citiesName).map(([en, ar], i) => {

                                return (
                                    <option value={en} selected={i === 0}>{lang === "ar" ? ar : en}</option>
                                )
                            })}

                        </select>
                        <p>{t('form.typeC')}:</p>
                        <select className='EnjazzFormInput' style={lang === "ar" ? { backgroundPositionX: '3%' } : { backgroundPositionX: '97%' }} onChange={(e) => setpartnership_type(e.target.value)}>
                            {Object.entries(partnerShip).map(([en, ar], i) => {
                                return (
                                    <option value={en} selected={i === 0}>{lang === "ar" ? ar : en}</option>
                                )
                            })}

                        </select>
                        {/* <input className='EnjazzFormInput' type="text" placeholder={t('form.city')} onChange={(e) => setcity(e.target.value)} /> */}
                        {/* <input className='EnjazzFormInput' type="text" placeholder={t('form.typeC')} onChange={(e) => setpartnership_type(e.target.value)} /> */}
                        {/* <span style={{color:'red', marginTop:'-10px'}}>{t('form.required')}</span> */}

                        <textarea className='EnjazzFormInput' cols="30" rows="4" placeholder={t('form.details3')} onChange={(e) => setnotes(e.target.value)}></textarea>
                        <div className="EnjazzFormInput EnjazzFormInputFile">
                            <div className="icon">
                                <img loading="lazy" alt="Enjazz_image"  src="/images/upload.webp" />
                            </div>
                            <p>{t('form.upload')}</p>
                            <span>{t('form.upload2')}</span>
                            <span>{portfolio.name}</span>
                            <input type="file" id="myfile" name="filename" onChange={(e) => setportfolio(e.target.files[0])} />
                        </div>
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

export default JoinUs