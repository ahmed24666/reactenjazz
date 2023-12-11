import React from 'react'
import CommonHead from '../../Components/CommonHead/CommonHead'
import CommonQ from '../../Components/CommonQ/CommonQ'
import { useMyContext } from '../../context/MyContext';

const Questions = () => {
    const { lang, setlang, t, i18n } = useMyContext();

    return (
        <div>
            <CommonHead title={t('cq.h1')} path={t('cq.path')} />
            <CommonQ full/>

        </div>
    )
}

export default Questions