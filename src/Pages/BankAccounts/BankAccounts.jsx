import React from 'react'
import './BankAccounts.scss'
import CommonHead from '../../Components/CommonHead/CommonHead'
import { useMyContext } from '../../context/MyContext';
const BankAccounts = () => {
    const { lang, setlang, t, i18n } = useMyContext();

    return (
        <>
            <CommonHead title={t('nav.bank')} path={t('aboutus.path')} />
            <div className="BankAccounts" style={lang==='ar'?{direction:'rtl'}:{direction:'ltr'}}>
                <div className="container">
                    <div className="bank-card">
                        <div className="image">
                            <img loading="lazy" alt="Enjazz_image" src="/images/شعار مصرف الراجحي .webp" />
                        </div>
                        <div className="item">
                            <h5>{t('bank.h5')}
                                </h5>
                        </div>
                        <div className="item">
                            <p>{t('bank.p1')}</p>
                            <span>681608010088777</span>
                        </div>
                        <div className="item">
                            <p>{t('bank.p2')}</p>
                            <span>SA0780000681608010088777</span>
                        </div>
                    </div>
                    <div className="bank-card">
                        <div className="image">
                            <img loading="lazy" alt="Enjazz_image" src="/images/شعار حساب البنك الأهلي.webp" />
                        </div>
                        <div className="item">
                            <h5>{t('bank.h5')}
                            </h5>
                        </div>
                        <div className="item">
                            <p>{t('bank.p1')}</p>
                            <span>11100374759506 </span>
                        </div>
                        <div className="item">
                            <p>{t('bank.p2')}</p>
                            <span>SA2110000011100374759506</span>
                        </div>
                    </div>
                </div>
                <div className="container justify-content-start">
                    <p className='pt-5 fs-5'><span className='text-danger fs-4 fw-bold'>
                    <p>{t('bank.red')}</p>
                        </span>{t('bank.long_p')}
                        </p>
                </div>
            </div>
        </>
    )
}

export default BankAccounts