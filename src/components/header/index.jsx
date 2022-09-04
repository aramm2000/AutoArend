import React from 'react'
import './../../assets/fontawesome.css'
import './style.css'

export default function index() {
  return (
    <div>
      <div className="component_first">
        <div className="logo_div">
        <a href="#" className='Logo'><i className="fa fa-car"></i>CARGET</a>
        </div>
        <div className="menu">
            <ul>
                <li><a href="">Главная</a></li>
                <li><a href="">О Компании</a></li>
                <li><a href="">Прокат</a></li>
                <li><a href="">Тарифы</a></li>
                <li><a href="">Наш автопарк</a></li>
                <li><a href="">Новости</a></li>
                <li><a href="">Контакты</a></li>
            </ul>
        </div>
        

      </div>
    </div>
  )
}
