import React, { useEffect, useState } from 'react'
import './ServicesPackage.scss'
import CommonHead from '../../Components/CommonHead/CommonHead'
import PackageAcc from '../../Components/PackageAcc/PackageAcc'
import Calculator from '../../Components/Calculator/Calculator'
import { useMyContext } from '../../context/MyContext'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ServiceManagemenApi } from '../../Apis/Apis'
const ServicesPackage = () => {
    const { lang, setlang, t, i18n } = useMyContext();

    useEffect(() => {
        AOS.init();
    }, []);
    const [data, setdata] = useState([])
    useEffect(() => {
        ServiceManagemenApi().then((res) => {
            console.log(res);
            setdata(res)
        })
    }, []);
    const data1 = {
        "إصدار تأشيرات العمل": "Work Visa Issuance",
        "إصدار رخصة عمل": "Work Permit Issuance",
        "نقل خدمات عامل (نقل كفالة)": "Worker Service Transfer (Sponsorship Transfer)",
        "شهادة السعودة": "Saudi Citizenship Certificate",
        "تغيير المهنة": "Change of Profession",
        "خدمة لوائح تنظيم العمل": "Labor Regulations Service",
        "توثيق عقود العمل": "Authentication of Employment Contracts",
        "تحديث بيانات الموظفين": "Employee Data Update"
    }
    const data2 = {
        "حجز اسم تجاري": "Reservation of a Trade Name",
        "إصدار سجل تجاري لمؤسسة": "Issuance of a Commercial Register for an Establishment",
        "تعديل سجل تجاري لمؤسسة": "Modification of a Commercial Register for an Establishment",
        "شطب سجل تجاري لمؤسسة": "Cancellation of a Commercial Register for an Establishment",
        "نقل ملكية سجل تجاري": "Transfer of Ownership of a Commercial Register",
        "تأسيس الشركات": "Company Establishment",
        "تحويل المؤسسات إلى شركات والعكس": "Conversion of Establishments to Companies and Vice Versa",
        "إصدار التفاويض": "Issuance of Licenses",
        "توثيق التجارة الإلكترونية": "Authentication of Electronic Commerce",
        "إصدار تراخيص منشآت التعليم العام/الأهلي": "Issuance of Public/Private Education Facility Licenses",
        "إصدار الرخص الإعلامية": "Issuance of Media Licenses",
        "إصدار وكالة إلكترونية": "Issuance of Electronic Agency"
    };
    const data3 = {
        "إصدار إقامة": "Residence Permit Issuance",
        "تجديد إقامة": "Residence Permit Renewal",
        "إصدار تأشيرة خروج وعودة": "Exit and Re-entry Visa Issuance",
        "تمديد تأشيرة خروج وعودة": "Exit and Re-entry Visa Extension",
        "إصدار تأشيرة خروج نهائي": "Final Exit Visa Issuance",
        "نقل معلومات جواز سفر": "Passport Information Transfer",
        "تقرير مقيم": "Resident Report",
        "نقل معلومات جوازين": "Passport Information Transfer (Two Passports)",
        "تمديد صلاحية الجواز": "Passport Renewal",
        "خدمات التفاويض (إنشاء/قبول/إلغاء)": "Delegation Services (Creation/Acceptance/Cancellation)",
        "طلب توصيل الوثائق بالبريد": "Document Delivery Request"
    };
    const data4 = {
        "إصدار رخص البلدية": "Municipal License Issuance",
        "تجديد الرخص": "License Renewal",
        "إلغاء الرخص": "License Cancellation"
    };
    const data5 = { "التصديق على الطلبات والعقود": "Authentication of Requests and Contracts" }

    const data6 = {
        "تسجيل حساب للمنشأة": "Register Establishment Account",
        "تحديث بيانات المنشأة": "Update Establishment Information",
        "إصدار شهادة": "Issue Certificate",
        "التسجيل/إلغاء التسجيل في ضريبة القيمة المضافة": "Register/Cancel VAT Registration",
        "التسجيل في الضريبة الانتقائية": "Register Excise Tax",
        "التسجيل في ضريبة الدخل": "Register Income Tax",
        "تقديم إشعار عن إقامة فعالية داخل المملكة": "Submit Notice of Holding an Event Inside the Kingdom",
        "طلب تسجيل عقار (قبل الإفراغ)": "Request Property Registration (Pre-Occupancy)",
        "طلب الدفع بالتقسيط": "Request Payment in Installments",
        "تقديم/تعديل الإقرار الضريبي/الزكوي (بدون حسابات)": "Submit/Amend Tax/Zakat Declaration (Without Accounts)",
        "طلب استرداد أموال ضريبة القيمة المضافة": "Request VAT Refund",
        "إلغاء تسجيل فرع": "Deregister Branch",
        "إيقاف الرقم المميز": "Suspend VAT Number"
    }
    const data7 = {
        "إصدار ترخيص سلامة": "Issue Safety License",
        "تجديد ترخيص سلامة": "Renew Safety License",
        "الغاء ترخيص سلامة": "Cancel Safety License"
    }
        ;
    const data8 = {
        "تسجيل/استبعاد مشترك": "Register/Exclude Subscriber",
        "تحديث البيانات": "Update Data",
        "إضافة/تغيير مشرف المنشأة": "Add/Change Facility Supervisor",
        "تغيير مدير حساب الفروع": "Change Branch Account Manager",
        "إصدار شهادة منشأة": "Issue Facility Certificate",
        "إصدار شهادة السلامة والصحة المهنية": "Issue Occupational Safety and Health Certificate",
        "تحديث الأجور الشهرية": "Update Monthly Salaries",
        "نقل مشترك/مشتركين بين فروع المنشأة": "Transfer Subscriber(s) Between Facility Branches",
        "تقديم طلب تقسيط مديونية المنشأة": "Submit Facility Debt Installment Request",
        "تعديل بيانات مشترك": "Modify Subscriber Data",
        "تعديل بيانات مدة الاشتراك": "Modify Subscription Duration Data",
        "الإبلاغ عن إصابة عمل": "Report Workplace Injury",
        "نقل ملكية منشأة": "Transfer Facility Ownership",
        "تعديل الكيان القانوني للمنشأة": "Modify Facility Legal Entity",
        "إنهاء نشاط منشأة": "Terminate Facility Activity"
    }
    const data9 = {
        "فتح ملف منشأة": "Open Facility File",
        "تحديث البيانات": "Update Data",
        "تعديل نوع المنشأة": "Modify Facility Type",
        "تغيير نشاط المنشأة": "Change Facility Activity",
        "طلب الاعتراض والتسوية على المخالفات": "Submit Objection and Settlement Request for Violations",
        "تحديث بيانات الموظفين": "Update Employee Data"
    }
    const data10 = {
        "تسجيل المنشأة في برامج الدعم المناسبة لمنشأتك": "Register the Facility in Suitable Support Programs for Your Establishment"
    }
    const data11 = {
        "تسجيل الموظفين في التأمين الطبي المناسب لمنشأتك": "Register Employees in the Suitable Medical Insurance for Your Establishment"
    }
    const data12 = {
        "إصدار وكالة لقطاع الأعمال": "Issue Power of Attorney for Business Sector",
        "إلغاء وكالة لقطاع الأعمال": "Cancel Power of Attorney for Business Sector"
    }
    const data13 = {
        "إنشاء سند": "Create Document",
        "توثيق سند": "Authenticate Document",
        "إلغاء سند": "Cancel Document"
    }
    const data14 = {
        "إصدار شهادة الالتزام": "Issue Certificate of Commitment",
        "التسجيل في المنصة": "Register on the Platform",
        "رفع مسيرات الرواتب الشهرية": "Submit Monthly Salary Statements",
        "تحديث بيانات منشأة في منصة مدد": "Update Facility Data on Mudd Platform",
        "إزالة ملاحظة حماية الأجور (حسب حالة الحساب)": "Remove Wage Protection Note (As per Account Status)",
        "التسجيل في نظام إدارة الرواتب": "Register in Payroll Management System",
        "فتح حسابات بنكية للعاملين": "Open Bank Accounts for Employees",
        "فتح حساب بنكي للمنشأة": "Open Bank Account for the Establishment"
    }
    const data15 = {
        "خدمة حجز الطيران بأقل الأسعار": "Lowest Price Airline Booking Service",
        "خدمة حجز أفضل الفنادق بأقل الأسعار": "Best Price Hotel Booking Service",
        "خدمة تأمين السيارات بأقل الأسعار المتاحة": "Car Insurance Service at the Lowest Available Prices",
        "خدمة إصدار تأشيرات العمل والتفويض وتصديقها من الغرفة التجارية": "Service for Issuing Work Visas, Authorization, and Chamber of Commerce Authentication",
        "خصم 30% على جميع خدمات التصميم والتسويق": "30% Discount on All Design and Marketing Services",
        "خصم 20% عند الحاجة لبرامج محاسبية من شركة قيود": "20% Discount when in need of Accounting Software from Qiyud Company",
        "تقديم القروض الحكومية للمنشأة": "Facilitation of Government Loans for the Establishment"
    }



    const calc = {
        'bronze': {
            price: parseInt(data[0]?.price),
            empNum: 4
        },
        'silver': {
            price: parseInt(data[1]?.price),
            empNum: 9
        },
        'gold': {
            price: parseInt(data[2]?.price),
            empNum: 9
        },
        'diamond': {
            price: parseInt(data[3]?.price),
            empNum: 9
        }
    };

    return (
        <>
            <CommonHead title={t('package1.h1')} path={t('package1.path')} />
            <div className='ServicesPackage' style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }} data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'><div className="container">
                <h1>{t('package1.h2')}</h1>
                <p>{t('package1.p')}</p>
                <h2 className='section-title3 text-center my-5'>{t('package1.h3')}</h2>
                <div className="packs">

                    <div className="pack " data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
                        <div className="top">
                            <div className="banner" style={{ backgroundColor: '#CD7F32' }}>
                                <h2>{lang === "ar" ? 'الباقة البرونزية' : 'Bronze package'}</h2>
                                {lang === "ar" ? (
                                    <>
                                        <p>بقيمة<span>{data[0]?.price.replace(/\.00$/, '')}</span>ريال فقط / سنويا</p>
                                        {data[0]?.price_before && (
                                            <p className='instead'>بدلا من<span>{data[0]?.price_before.replace(/\.00$/, '')}</span></p>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        <p>For only <span>{data[0]?.price.replace(/\.00$/, '')}</span> / Year</p>
                                        {data[0]?.price_before && (
                                            <p className='instead'>Instead of <span>{data[0]?.price_before.replace(/\.00$/, '')}</span></p>
                                        )}
                                    </>

                                )}
                            </div>
                            {lang === "ar" ? (
                                <>
                                    <PackageAcc title={"عدد الموظفين 4 فأقل"} />
                                    <PackageAcc title={"إدارة خدمات قوى"} data={Object.keys(data1)} />
                                    <PackageAcc title={"إدارة خدمات وزارة التجارة"} data={Object.keys(data2)} />
                                    <PackageAcc title={"إدارة خدمات أبشر (مقيم)"} data={Object.keys(data3)} />
                                    <PackageAcc title={"إدارة خدمات بلدي"} data={Object.keys(data4)} />
                                    <PackageAcc title={"إدارة خدمات الغرفة التجارية"} data={Object.keys(data5)} />
                                    <PackageAcc title={"إدارة خدمات الزكاة والدخل"} data={Object.keys(data6)} />
                                    <PackageAcc title={"إدارة خدمات التأمينات الإجتماعية"} data={Object.keys(data8)} />
                                    <PackageAcc title={"إدارة خدمات مكتب العمل"} data={Object.keys(data9)} />
                                    <PackageAcc title={"إدارة خدمات برامج الدعم"} data={Object.keys(data10)} />
                                    <PackageAcc title={"إدارة خدمات التأمين الطبي"} data={Object.keys(data11)} />
                                    <PackageAcc title={"خدمات مجانية طول فترة الاشتراك"} data={Object.keys(data15)} free />
                                </>
                            ) : (
                                <>
                                    <PackageAcc title={"Number of Employees 4 or Less"} />
                                    <PackageAcc title={"Human Resources Management"} data={Object.values(data1)} />
                                    <PackageAcc title={"Ministry of Commerce Services Management"} data={Object.values(data2)} />
                                    <PackageAcc title={"Absher Business Services (Resident)"} data={Object.values(data3)} />
                                    <PackageAcc title={"Municipality Services Management"} data={Object.values(data4)} />
                                    <PackageAcc title={"Chamber of Commerce Services Management"} data={Object.values(data5)} />
                                    <PackageAcc title={"Zakat and Income Services Management"} data={Object.values(data6)} />
                                    <PackageAcc title={"Social Security Services Management"} data={Object.values(data8)} />
                                    <PackageAcc title={"Labor Office Services Management"} data={Object.values(data9)} />
                                    <PackageAcc title={"Support Programs Services Management"} data={Object.values(data10)} />
                                    <PackageAcc title={"Medical Insurance Services Management"} data={Object.values(data11)} />
                                    <PackageAcc title={"Free Services Throughout the Subscription Period"} data={Object.values(data15)} free />
                                </>
                            )}
                        </div>
                        <div className="bottom">
                            <Link to='/ask-for-aservice/service-management-bronze'>
                                <div>{t('subsc.h1')}</div>
                            </Link>                        </div>
                    </div>

                    <div className="pack " data-aos="fade-in" data-aos-duration="2000" data-aos-delay='200'>
                        <div className="top">
                            <div className="banner" style={{ backgroundColor: '#757575' }}>
                                <h2>{lang === "ar" ? 'الباقة الفضية' : 'Silver package'}</h2>
                                {lang === "ar" ? (
                                    <>
                                        <p>بقيمة<span>{data[1]?.price.replace(/\.00$/, '')}</span>ريال فقط / سنويا</p>
                                        {data[1]?.price_before && (
                                            <p className='instead'>بدلا من<span>{data[1]?.price_before.replace(/\.00$/, '')}</span></p>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        <p>For only <span>{data[1]?.price.replace(/\.00$/, '')}</span> / Year</p>
                                        {data[1]?.price_before && (
                                            <p className='instead'>Instead of <span>{data[1]?.price_before.replace(/\.00$/, '')}</span></p>
                                        )}
                                    </>

                                )}
                            </div>

                            {lang === "ar" ? (
                                <>
                                    <PackageAcc title={"عدد الموظفين 9 فأقل"} />
                                    <PackageAcc title={"إدارة خدمات قوى"} data={Object.keys(data1)} />
                                    <PackageAcc title={"إدارة خدمات وزارة التجارة"} data={Object.keys(data2)} />
                                    <PackageAcc title={"إدارة خدمات أبشر (مقيم)"} data={Object.keys(data3)} />
                                    <PackageAcc title={"إدارة خدمات بلدي"} data={Object.keys(data4)} />
                                    <PackageAcc title={"إدارة خدمات الغرفة التجارية"} data={Object.keys(data5)} />
                                    <PackageAcc title={"إدارة خدمات الزكاة والدخل"} data={Object.keys(data6)} />
                                    <PackageAcc title={"إدارة خدمات سلامة"} data={Object.keys(data7)} />
                                    <PackageAcc title={"إدارة خدمات التأمينات الإجتماعية"} data={Object.keys(data8)} />
                                    <PackageAcc title={"إدارة خدمات التأمين الطبي"} data={Object.keys(data11)} />
                                    <PackageAcc title={"إدارة خدمات مكتب العمل"} data={Object.keys(data9)} />
                                    <PackageAcc title={"إدارة خدمات برامج الدعم"} data={Object.keys(data10)} />
                                    <PackageAcc title={"خدمات مجانية طول فترة الاشتراك"} data={Object.keys(data15)} free />

                                </>
                            ) : (
                                <>
                                    <PackageAcc title={"Number of Employees 9 or Less"} />
                                    <PackageAcc title={"Human Resources Management"} data={Object.values(data1)} />
                                    <PackageAcc title={"Ministry of Commerce Services Management"} data={Object.values(data2)} />
                                    <PackageAcc title={"Absher Business Services (Resident)"} data={Object.values(data3)} />
                                    <PackageAcc title={"Municipality Services Management"} data={Object.values(data4)} />
                                    <PackageAcc title={"Chamber of Commerce Services Management"} data={Object.values(data5)} />
                                    <PackageAcc title={"Zakat and Income Services Management"} data={Object.values(data6)} />
                                    <PackageAcc title={"Safety Services Management"} data={Object.values(data7)} />
                                    <PackageAcc title={"Social Security Services Management"} data={Object.values(data8)} />
                                    <PackageAcc title={"Medical Insurance Services Management"} data={Object.values(data11)} />
                                    <PackageAcc title={"Labor Office Services Management"} data={Object.values(data9)} />
                                    <PackageAcc title={"Support Programs Services Management"} data={Object.values(data10)} />
                                    <PackageAcc title={"Free Services Throughout the Subscription Period"} data={Object.values(data15)} free />
                                </>
                            )}


                        </div>
                        <div className="bottom">
                            <Link to='/ask-for-aservice/service-management-silver'>
                                <div>{t('subsc.h1')}</div>
                            </Link>
                        </div>
                    </div>
                    <div className="pack " data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                        <div className="top">
                            <div className="banner" style={{ backgroundColor: '#d4af37' }}>
                                <h2>{lang === "ar" ? 'الباقة الذهبية' : 'Golden package'}</h2>
                                {lang === "ar" ? (
                                    <>
                                        <p>بقيمة<span>{data[2]?.price.replace(/\.00$/, '')}</span>ريال فقط / سنويا</p>
                                        {data[2]?.price_before && (
                                            <p className='instead'>بدلا من<span>{data[2]?.price_before.replace(/\.00$/, '')}</span></p>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        <p>For only <span>{data[2]?.price.replace(/\.00$/, '')}</span> / Year</p>
                                        {data[2]?.price_before && (
                                            <p className='instead'>Instead of <span>{data[2]?.price_before.replace(/\.00$/, '')}</span></p>
                                        )}
                                    </>

                                )}
                            </div>
                            {lang === "ar" ? (
                                <>
                                    <PackageAcc title={"عدد الموظفين 9 فأقل"} />
                                    <PackageAcc title={"إدارة خدمات قوى"} data={Object.keys(data1)} />
                                    <PackageAcc title={"إدارة خدمات وزارة التجارة"} data={Object.keys(data2)} />
                                    <PackageAcc title={"إدارة خدمات أبشر (مقيم)"} data={Object.keys(data3)} />
                                    <PackageAcc title={"إدارة خدمات بلدي"} data={Object.keys(data4)} />
                                    <PackageAcc title={"إدارة خدمات الغرفة التجارية"} data={Object.keys(data5)} />
                                    <PackageAcc title={"إدارة خدمات الزكاة والدخل"} data={Object.keys(data6)} />
                                    <PackageAcc title={"إدارة خدمات سلامة"} data={Object.keys(data7)} />
                                    <PackageAcc title={"إدارة خدمات التأمينات الإجتماعية"} data={Object.keys(data8)} />
                                    <PackageAcc title={"إدارة خدمات التأمين الطبي"} data={Object.keys(data11)} />
                                    <PackageAcc title={"إدارة خدمات ناجز"} data={Object.keys(data12)} />
                                    <PackageAcc title={"إدارة خدمات نافد"} data={Object.keys(data13)} />
                                    <PackageAcc title={"اشتراك إدارة الرواتب وحماية الأجور"} data={Object.keys(data14)} />
                                    <PackageAcc title={"إدارة خدمات مكتب العمل"} data={Object.keys(data9)} />
                                    <PackageAcc title={"إدارة خدمات برامج الدعم"} data={Object.keys(data10)} />
                                    <PackageAcc title={"توثيق عقود العمل للموظفين"} />
                                    <PackageAcc title={"خدمات مجانية طول فترة الاشتراك"} data={Object.keys(data15)} free />

                                </>
                            ) : (
                                <>
                                    <PackageAcc title={"Number of Employees 9 or Less"} />
                                    <PackageAcc title={"Human Resources Management"} data={Object.values(data1)} />
                                    <PackageAcc title={"Ministry of Commerce Services Management"} data={Object.values(data2)} />
                                    <PackageAcc title={"Absher Business Services (Resident)"} data={Object.values(data3)} />
                                    <PackageAcc title={"Municipality Services Management"} data={Object.values(data4)} />
                                    <PackageAcc title={"Chamber of Commerce Services Management"} data={Object.values(data5)} />
                                    <PackageAcc title={"Zakat and Income Services Management"} data={Object.values(data6)} />
                                    <PackageAcc title={"Safety Services Management"} data={Object.values(data7)} />
                                    <PackageAcc title={"Social Security Services Management"} data={Object.values(data8)} />
                                    <PackageAcc title={"Medical Insurance Services Management"} data={Object.values(data11)} />
                                    <PackageAcc title={"Pending Services Management"} data={Object.values(data12)} />
                                    <PackageAcc title={"Expired Services Management"} data={Object.values(data13)} />
                                    <PackageAcc title={"Salary and Wage Protection Subscription"} data={Object.values(data14)} />
                                    <PackageAcc title={"Labor Office Services Management"} data={Object.values(data9)} />
                                    <PackageAcc title={"Support Programs Services Management"} data={Object.values(data10)} />
                                    <PackageAcc title={"Documenting Employment Contracts for Employees"} />
                                    <PackageAcc title={"Free Services Throughout the Subscription Period"} data={Object.values(data15)} free />
                                </>
                            )}

                        </div>
                        <div className="bottom">
                            <Link to='/ask-for-aservice/service-management-gold'>
                                <div>{t('subsc.h1')}</div>
                            </Link>                        </div>
                    </div>
                    <div className="pack " data-aos="fade-in" data-aos-duration="2000" data-aos-delay='400'>
                        <div className="top">
                            <div className="banner" style={{ backgroundColor: '#0248b8' }}>
                                <h2>{lang === "ar" ? 'الباقة الماسية' : 'Diamond package'}</h2>
                                {lang === "ar" ? (
                                    <>
                                        <p>بقيمة<span>{data[3]?.price.replace(/\.00$/, '')}</span>ريال فقط / سنويا</p>
                                        {data[3]?.price_before && (

                                            <p className='instead'>بدلا من<span>{data[3]?.price_before.replace(/\.00$/, '')}</span></p>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        <p>For only <span>{data[3]?.price.replace(/\.00$/, '')}</span> / Year</p>
                                        {data[3]?.price_before && (

                                            <p className='instead'>Instead of <span>{data[3]?.price_before.replace(/\.00$/, '')}</span></p>
                                        )}
                                    </>

                                )}
                            </div>
                            {lang === "ar" ? (
                                <>
                                    <PackageAcc title={"عدد الموظفين 9 فأقل"} />
                                    <PackageAcc title={"إدارة خدمات قوى"} data={Object.keys(data1)} />
                                    <PackageAcc title={"إدارة خدمات وزارة التجارة"} data={Object.keys(data2)} />
                                    <PackageAcc title={"إدارة خدمات أبشر (مقيم)"} data={Object.keys(data3)} />
                                    <PackageAcc title={"إدارة خدمات بلدي"} data={Object.keys(data4)} />
                                    <PackageAcc title={"إدارة خدمات الغرفة التجارية"} data={Object.keys(data5)} />
                                    <PackageAcc title={"إدارة خدمات الزكاة والدخل"} data={Object.keys(data6)} />
                                    <PackageAcc title={"إدارة خدمات سلامة"} data={Object.keys(data7)} />
                                    <PackageAcc title={"إدارة خدمات التأمينات الإجتماعية"} data={Object.keys(data8)} />
                                    <PackageAcc title={"إدارة خدمات التأمين الطبي"} data={Object.keys(data11)} />
                                    <PackageAcc title={"إدارة خدمات مكتب العمل"} data={Object.keys(data9)} />
                                    <PackageAcc title={"إدارة خدمات برامج الدعم"} data={Object.keys(data10)} />
                                    <PackageAcc title={"إدارة خدمات ناجز"} data={Object.keys(data12)} />
                                    <PackageAcc title={"إدارة خدمات نافد"} data={Object.keys(data13)} />
                                    <PackageAcc title={"اشتراك إدارة الرواتب وحماية الأجور"} data={Object.keys(data14)} />
                                    <PackageAcc title={"توثيق عقود العمل للموظفين"} />
                                    <PackageAcc title={"تصميم موقع الكتروني"} />
                                    <PackageAcc title={"تصميم متجر الكتروني"} />
                                    <PackageAcc title={"تصميم لوقو احترافي"} />
                                    <PackageAcc title={"التسويق"} />
                                    <PackageAcc title={"خدمات مجانية طول فترة الاشتراك"} data={Object.keys(data15)} free />
                                </>
                            ) : (
                                <>
                                    <PackageAcc title={"Number of Employees 9 or Less"} />
                                    <PackageAcc title={"Human Resources Management"} data={Object.values(data1)} />
                                    <PackageAcc title={"Ministry of Commerce Services Management"} data={Object.values(data2)} />
                                    <PackageAcc title={"Absher Business Services (Resident)"} data={Object.values(data3)} />
                                    <PackageAcc title={"Medical Insurance Services Management"} data={Object.values(data11)} />
                                    <PackageAcc title={"Chamber of Commerce Services Management"} data={Object.values(data5)} />
                                    <PackageAcc title={"Zakat and Income Services Management"} data={Object.values(data6)} />
                                    <PackageAcc title={"Safety Services Management"} data={Object.values(data7)} />
                                    <PackageAcc title={"Social Security Services Management"} data={Object.values(data8)} />
                                    <PackageAcc title={"Municipality Services Management"} data={Object.values(data4)} />
                                    <PackageAcc title={"Pending Services Management"} data={Object.values(data12)} />
                                    <PackageAcc title={"Expired Services Management"} data={Object.values(data13)} />
                                    <PackageAcc title={"Salary and Wage Protection Subscription"} data={Object.values(data14)} />
                                    <PackageAcc title={"Documenting Employment Contracts for Employees"} />
                                    <PackageAcc title={"Website Design"} />
                                    <PackageAcc title={"E-commerce Store Design"} />
                                    <PackageAcc title={"Professional Logo Design"} />
                                    <PackageAcc title={"Marketing"} />
                                    <PackageAcc title={"Free Services Throughout the Subscription Period"} data={Object.values(data15)} free />
                                </>
                            )}
                        </div>
                        <div className="bottom">
                            <Link to='/ask-for-aservice/service-management-diamond'>
                                <div>{t('subsc.h1')}</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <Calculator data={calc} />
            </div></div >
        </>
    )
}

export default ServicesPackage