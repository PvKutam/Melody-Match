import React from 'react'
import "./SideBarOption.css"
function SideBarOptions({title,Icon}) {
  return (
    <div className='sideBarOption'>
         {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
      
    </div>
  )
}

export default SideBarOptions
