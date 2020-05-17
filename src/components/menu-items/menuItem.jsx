import React from 'react';
import './menuItem.scss';

const menuItems =({sections})=>{
  const displayMenuItems = sections.map(({title, imageUrl, id}, index)=>(
    <div className='menu-item'>
      <div className='content' key={id}>
      <div className='title'>{title}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
    </div>
  ));
  return <>{displayMenuItems}</>
}

export default menuItems;
