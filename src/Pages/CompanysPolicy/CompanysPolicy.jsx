import React from 'react'
import CommonHead from '../../Components/CommonHead/CommonHead'
import { useMyContext } from '../../context/MyContext';

const CompanysPolicy = () => {
    const { lang, setlang, t, i18n } = useMyContext();
    const part1 = [t('company_policy.part1.1'), t('company_policy.part1.2'), t('company_policy.part1.3'),]
    const part2 = [t('company_policy.part2.1'), t('company_policy.part2.2'), t('company_policy.part2.3'),]
    const part3 = [t('company_policy.part3.1'), t('company_policy.part3.2'), t('company_policy.part3.3'),];
    return (
        <>
            <CommonHead title={t('footer.ul9')} path={t('aboutus.path')} />
            <div className='Policies' style={lang==='ar'?{direction:'rtl'}:{direction:'ltr'}}>
                <div className="container">
                    <h1 className="section-title3">{t('footer.ul9')}</h1>
                    <div className="part">
                        <h1 className="secH" style={lang==='ar'?{borderRadius: '30px 0 0 30px'}:{borderRadius: '0 30px 30px 0'}}>{t('company_policy.secH')}</h1>
                        <p className='mt-2'>{t('company_policy.p1_1')}
                        </p>
                        <h2>{t('company_policy.h2_1')}
                        </h2>
                        <ul>
                            {part1.map((item, i) => {
                                return (
                                    <li key={i}>{item}</li>
                                )
                            })}
                        </ul>
                        <h2>{t('company_policy.h2_2')}</h2>
                        <ul>
                            {part2.map((item, i) => {
                                return (
                                    <li key={i}>{item}</li>
                                )
                            })}
                        </ul>
                        <h2>{t('company_policy.h2_3')}
                        </h2>
                        <span>{t('company_policy.span')}
                        </span>
                        <ul>
                            {part3.map((item, i) => {
                                return (
                                    <li key={i}>{item}</li>
                                )
                            })}
                        </ul>
                        <h2>{t('company_policy.h2_4')}
                        </h2>
                        <p>{t('company_policy.p1_2')}
                        </p>
                        <h2>{t('company_policy.h2_5')}</h2>
                        <p>
                            {t('company_policy.p1_3_1')}
                            <a href='https://enjaaz.sa'>"https://enjaaz.sa"</a>{t('company_policy.p1_3_2')}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanysPolicy