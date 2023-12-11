import React, { useState } from 'react'
import './PackageAcc.scss'
import { BsCheck } from 'react-icons/bs';
import { BsPlus } from 'react-icons/bs';
import { BsDash } from 'react-icons/bs';

const PackageAcc = ({ title, data,empty,free }) => {
    const [open, setopen] = useState(false)
    
    return (
        <div className='PackageAcc'>
            <div className="head" onClick={() => setopen(!open)}>
                <div className="left">
                    <div className="icon" style={free?{color:'red'}:{}}>
                        <BsCheck />
                    </div>
                    <span style={free?{color:'red'}:{}}>{title}</span>
                </div>
                {data && (
                    <div className="right" style={free?{color:'red'}:{}} >
                        {open ? <BsDash /> : <BsPlus />}
                    </div>
                )}
            </div>
            {open && data && (
                <div className="tail">
                    {data &&data.map((item, i) => {
                        return (
                            <div className="item" key={i}>{item}</div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default PackageAcc