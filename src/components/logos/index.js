import React from 'react';
import './index.scss';
import logo1 from '../../assets/images/1296859.svg';
import logo2 from '../../assets/images/blob.svg';
import logo3 from '../../assets/images/iconmonstr-heart-filled.svg';
import { useRef, useEffect } from 'react';
import { usePageContext } from '../../context';
function Logos() {
  const {logo1ref} = usePageContext()
  return (
    <div className='container logos'>
      <img src={logo1} alt='cycle' className='animate _1' ref={logo1ref} />
      <img src={logo2} alt='shape' className='animate _2' />
      <img src={logo3} alt='globe' className='animate _3' />
    </div>
  );
}
export default Logos;
