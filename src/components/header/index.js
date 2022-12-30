import React from 'react';
import './index.scss';
import { useState,useEffect } from 'react';
import LetterWithAnimations from '../animatedLetters';
function Header() {
  const [classname,setClassName]  = useState('letter-animate')
  const info = "This a cool animation."
  useEffect(() => {
    return setTimeout(()=>setClassName('letter-animate-hover'),4000)
  }, []);
  return (
    <div className='container header'>
      <h1>
        <LetterWithAnimations props={{ classname, stringArray: [...'Hi'] }} />
        <br />{' '}
        <LetterWithAnimations
          props={{ classname, stringArray: [..."I'm Bikraj Shrestha"] }}
        />
        <br />
        <LetterWithAnimations props={{ classname, stringArray: [...info] }} />
      </h1>
     
    </div>
  );
}

export default Header;
