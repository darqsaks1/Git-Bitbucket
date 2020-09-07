import React from 'react';
import logo from '../../assets/svg/logo.svg'
import lang from '../../assets/svg/lang.svg'
import bucket from '../../assets/svg/bucket.svg'
const Header = () => {
    return (
        <div className="header">
            <div className='header-icons'>
                <img src={logo} alt='logo' className='logo' />
                <div className ='lang'>
                    <img src={lang} alt='lang' className='lang-icon' />
                    <div className='lang-selector'>ENG</div>
                </div>
            </div>
            <div className='bucket-icons'>
                <img src={bucket} alt='bucket' />
                <div>2</div>
            </div>
        </div>
    );
}

export default Header;