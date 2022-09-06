import React from 'react'
import orderCss from './style.module.css'


const orderBtn = ({text}) => {
  return (
    <a className={orderCss.order} href="">{text}</a>
  )
}

export default orderBtn