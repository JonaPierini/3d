import React from 'react'
import './index.css'

const DisplaySection = ({triggerPreview}) => {
  
  const handleScrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  };
  
  return (
    <div className='display-section wrapper'>
    </div>
  )
}

export default DisplaySection