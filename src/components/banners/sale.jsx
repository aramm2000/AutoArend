import React from 'react'
// import ModalOne from '../modals/modal_one'
import { useState } from 'react'
import './../modals/style.css'


export default function Sale() {
  const [close, setClose] = useState(false)


  const menuHandler = () => {
    setClose(!close)
  }
  return (
    <div className='sale_div'>

      <div className="block_three">
        <h2>Осеняя скидка на все автомобили — 25%</h2>
        <p>Разместите тут краткое описание вашего спец-предложения, товара или услуги! Таким образом можно компоновать блоки используя текстовый виджет и рядом с ним поставить произвольную картинку. Вы можете менять цвет, стиль текста и даже поставить ссылку.</p>
        <a className='phoneHandler' onClick={menuHandler} >ПОЗВОНИТЬ НАМ</a>
        
        <div style={{ display: close ? 'initial' : 'none' }} >
          <ul className='phone_ul'>
            <li><i className="fa fa-phone"></i>+(123)-45-67-89</li>
          </ul>
        
        </div>
      </div>

    </div>
  )
}
