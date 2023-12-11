import React from 'react'
import './Policies.scss'
import CommonHead from '../../Components/CommonHead/CommonHead'
import { useMyContext } from '../../context/MyContext'
const Policies = () => {
    const { lang, setlang, t, i18n } = useMyContext();
    const part1 = [t('terms_and_conditions.part1.1'),t('terms_and_conditions.part1.2'),t('terms_and_conditions.part1.3'),t('terms_and_conditions.part1.4'),t('terms_and_conditions.part1.5'),t('terms_and_conditions.part1.6'),t('terms_and_conditions.part1.7'),t('terms_and_conditions.part1.8'),t('terms_and_conditions.part1.9'),t('terms_and_conditions.part1.10'),]
    const part2 = [t('terms_and_conditions.part2.1'),t('terms_and_conditions.part2.2'),]
    const part3 = [t('terms_and_conditions.part3.1'),t('terms_and_conditions.part3.2'),t('terms_and_conditions.part3.3'),]
    const part4 = [t('terms_and_conditions.part4.1'),t('terms_and_conditions.part4.2'),t('terms_and_conditions.part4.3'),t('terms_and_conditions.part4.4'),]
    const fifth = [t('terms_and_conditions.fifth.1'),t('terms_and_conditions.fifth.2'),t('terms_and_conditions.fifth.3'),t('terms_and_conditions.fifth.4'),t('terms_and_conditions.fifth.5'),]
    const ninth = [t('terms_and_conditions.ninth.1'),t('terms_and_conditions.ninth.2'),t('terms_and_conditions.ninth.3'),t('terms_and_conditions.ninth.4'),t('terms_and_conditions.ninth.5'),t('terms_and_conditions.ninth.6'),t('terms_and_conditions.ninth.7'),t('terms_and_conditions.ninth.8'),]
    const tenth = [t('terms_and_conditions.tenth.1'),t('terms_and_conditions.tenth.2'),t('terms_and_conditions.tenth.3'),t('terms_and_conditions.tenth.4'),t('terms_and_conditions.tenth.5'),t('terms_and_conditions.tenth.6'),t('terms_and_conditions.tenth.7'),t('terms_and_conditions.tenth.8'),t('terms_and_conditions.tenth.9'),t('terms_and_conditions.tenth.10'),t('terms_and_conditions.tenth.11'),t('terms_and_conditions.tenth.12'),t('terms_and_conditions.tenth.13'),t('terms_and_conditions.tenth.14'),t('terms_and_conditions.tenth.15'),]

    

    return (
        <div >
            <CommonHead title={t('footer.ul10')} path={t('aboutus.path')} />
            <div className='Policies' style={lang==='ar'?{direction:'rtl'}:{direction:'ltr'}}>
                <div className="container">
                    <h1 className="section-title3">{t('footer.ul10')}</h1>
                    <div className="part">
                        <h2 className='mt-5'>
                        {t('terms_and_conditions.h2_1')}
                            </h2>
                        <p>{t('terms_and_conditions.p_1')}<span>{t('terms_and_conditions.span_1')}</span></p>
                        <p>{t('terms_and_conditions.p_2')}<span>{t('terms_and_conditions.span_2')}</span></p>
                        <p>{t('terms_and_conditions.p_3')}<span>{t('terms_and_conditions.span_3')}</span></p>
                        <p>{t('terms_and_conditions.p_4')}<span>{t('terms_and_conditions.span_4')}</span></p>
                        <p>{t('terms_and_conditions.p_5')}</p>
                        <span>{t('terms_and_conditions.span_5')}</span>
                        <ul>
                            {part1.map((item, i) => {
                                return (
                                    <li key={i}>{item}</li>
                                )
                            })}
                        </ul>
                        <p>{t('terms_and_conditions.p_6')}</p>
                        <span>{t('terms_and_conditions.span_6')}</span>
                        <ul>
                            {part2.map((item, i) => {
                                return (
                                    <li key={i}>{item}</li>
                                )
                            })}
                        </ul>
                        <p>{t('terms_and_conditions.p_7')}</p>
                        <span>{t('terms_and_conditions.span_7')}</span>
                        <ul>
                            {part3.map((item, i) => {
                                return (
                                    <li key={i}>{item}</li>
                                )
                            })}
                        </ul>
                        <p>{t('terms_and_conditions.p_8')}</p>
                        <span>{t('terms_and_conditions.span_8')}</span>
                        <ul>
                            {part4.map((item, i) => {
                                return (
                                    <li key={i}>{item}</li>
                                )
                            })}
                        </ul>


                    </div>
                    <div className="part">
                        <h2>{t('terms_and_conditions.part_h2.1')}</h2>
                        <p>{t('terms_and_conditions.part_p.1')} 
                            </p>
                    </div>
                    <div className="part">
                        <h2>{t('terms_and_conditions.part_h2.2')}</h2>
                        <p>{t('terms_and_conditions.part_p.2')}</p>
                    </div>
                    <div className="part">
                        <h2>{t('terms_and_conditions.part_h2.3')}</h2>
                        <p>
                        {t('terms_and_conditions.part_p.3')}</p>
                    </div>
                    <div className="part">
                        <h2>{t('terms_and_conditions.part_h2.4')}</h2>
                        {fifth.map((item, i) => {
                            return (<p key={i}>{item}</p>)
                        })}
                    </div>
                    <div className="part">
                        <h2>{t('terms_and_conditions.part_h2.5')}</h2>
                        <p>{t('terms_and_conditions.part_p.4')}
                            </p>
                    </div>
                    <div className="part">
                        <h2>{t('terms_and_conditions.part_h2.6')}</h2>
                        <p>{t('terms_and_conditions.part_p.5')}
                            </p>
                    </div>
                    <div className="part">
                        <h2>{t('terms_and_conditions.part_h2.7')}</h2>
                        <p>{t('terms_and_conditions.part_p.6')}
                            </p>
                    </div>
                    <div className="part">
                        <h2>{t('terms_and_conditions.part_h2.8')}</h2>
                        {ninth.map((item, i) => {
                            return (<p key={i}>{item}</p>)
                        })}
                    </div>
                    <div className="part">
                        <h2>{t('terms_and_conditions.part_h2.9')}
                            </h2>
                        {tenth.map((item, i) => {
                            return (<p key={i}>{item}</p>)
                        })}
                    </div>
                    <div className="part">
                        <h2>{t('terms_and_conditions.part_h2.10')}</h2>
                        <p>{t('terms_and_conditions.part_p.7')}</p>
                    </div>
                    <div className="part">
                        <h2>{t('terms_and_conditions.part_h2.11')}</h2>
                        <p>{t('terms_and_conditions.part_p.8')}</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Policies