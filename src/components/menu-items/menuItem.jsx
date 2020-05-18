import React from 'react';
import './menuItem.scss';

const menuItems =({sections})=>{
  const displayMenuItems = sections.map(({title, imageUrl, id, size})=>(
    <div className={`${size} menu-item`}>
      <div className="background-image" style={
      {
        backgroundImage: `url(${imageUrl})`
      }
    }/>
      <div className='content' key={id}>
      <div className='title'>{title.toUpperCase()}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
    </div>
  ));
  return <>{displayMenuItems}</>
}

export default menuItems;
