import React from 'react'

function Button({clickFunc = () => {}, text, customStyle='border-1 hover:bg-violet-c hover:text-white'}) {
  const btnStyle = `font-bold p-1 rounded-3xl w-70 cursor-pointer active:inset-shadow-sm inset-shadow-black ${customStyle}`;
  return (
    <button className={btnStyle} onClick={clickFunc}>{text}</button>
  )
}

export default Button