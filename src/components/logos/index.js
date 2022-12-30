import React from 'react';
import './index.scss';
import logo1 from '../../assets/images/1296859.svg';
import logo2 from '../../assets/images/blob.svg';
import logo3 from '../../assets/images/iconmonstr-heart-filled.svg';
import { useRef, useEffect } from 'react';
import { usePageContext } from '../../context';
function Logos() {
  const {logo1ref,className} = usePageContext()
  return (
    <div className='container logos' ref={logo1ref}>
      <img
        src={logo1}
        alt='cycle'
        className={`animate_1 ${className == '' ? '' : className} `}
      />
      <img
        src={logo2}
        alt='shape'
        className={`animate_2 ${className == '' ? '' : className} `}
      />
      <img
        src={logo3}
        alt='globe'
        className={`animate_3 ${className == '' ? '' : className}`}
      />
    </div>
  );
}
export default Logos;
