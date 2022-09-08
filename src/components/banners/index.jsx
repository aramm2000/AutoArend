import React from "react";
import './style.css'
import Cars from '../advantage'
import About from './aboutCompany'
import Rental from './carRental'
import Sale from './sale'
import CarPark from './OurCars'



export default function index() {
    return (
        <div>
            <div className="banner_first">
                <div className="text_banner">
                    <div className="content_first">
                        <h1>АВТО НА ПРОКАТ</h1>
                        <p>Вы можете менять цвет, стиль текста и даже поставить ссылку.<br/> Разместите тут краткое описание вашего спец-предложения, товара или услуги!</p>
                        <li><a href="#">ПОДРОБНЕЕ</a></li> 

                    </div>
                </div>
            </div>
            <div className="banner_two">
            <Cars/>
            </div>
            <About/>
            <div className="divv">
                <Rental/>
            </div>
            <Sale/>
            <CarPark/>
        </div>
    )
}
