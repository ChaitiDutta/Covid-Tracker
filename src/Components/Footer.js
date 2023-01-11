import React from 'react'
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillCopyrightCircle } from 'react-icons/ai';
function Footer() {
    return (
        <div className='Foot'>
            <div className='F-head'>
                <img src='https://t.pimg.jp/064/964/944/5/64964944.jpg' alt='covid' />
                <div>
                    <p>Covid-19</p>
                    <p>Tracker</p>

                </div>
            </div>
            <div className='last-col'>
                <p className='F-head2'>Contact Us At:</p>
                <div className='icons'>
                    <AiFillFacebook />
                    <AiFillTwitterSquare />
                    <AiFillLinkedin />
                </div>
                <div className='F-end'>
                    <AiFillCopyrightCircle />
                    <span>All rights reserved || 2023</span>
                    {/* <p>All rights reserved || 2023</p> */}
                </div>
            </div>
        </div>
    )
}

export default Footer
