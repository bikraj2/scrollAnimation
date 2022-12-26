import React from 'react'
import './index.scss'
function LetterWithAnimations({props}) {
    const {classname,stringArray} = props
  return (
    <span>
        {stringArray.map((char,index)=>{
            return <span className={`${classname} _${index}`}>{char}</span>
        })}
    </span>
  )
}

export default LetterWithAnimations