import React from 'react'
import CommonHead from '../../Components/CommonHead/CommonHead'
import { useMyContext } from '../../context/MyContext';

const CopyRights = () => {
    const { lang, setlang, t, i18n } = useMyContext();

    return (
        <>
            <CommonHead title={t('footer.ul11')} path={t('aboutus.path')} />
            <div className='Policies' style={lang==='ar'?{direction:'rtl'}:{direction:'ltr'}}>
                <div className="container">
                    <h1 className="section-title3">{t('footer.ul11')}</h1>
                    <div className="part">
                        <h4 className='mt-5 text-center'>{t('copyrights.h4')}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CopyRights