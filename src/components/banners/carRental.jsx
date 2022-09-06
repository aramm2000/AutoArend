import React from 'react'
import OrderBtn from '../ui/OrderBtn'


const data = () => {
    const items = [
        { src: 'https://ukit.com/templates/c_automobiles/img/full_uQCgQtaj.jpg', name: 'AUDI v8', price: '15 000 руб.', info: 'Разместите тут краткое описание вашего спецпредложения, товара или услуги.' },
        { src: 'https://ukit.com/templates/c_automobiles/img/full_q1V5L2wZ.jpg', name: 'SUBARU EXP 2015', price: '15 000 руб.', info: 'Разместите тут краткое описание вашего спецпредложения, товара или услуги.' },
        { src: 'https://ukit.com/templates/c_automobiles/img/full_LLyjNrql.jpg', name: 'BMW x6', price: '15 000 руб.', info: 'Разместите тут краткое описание вашего спецпредложения, товара или услуги.' },
    ]
    return (
        <div className='container_one'>
            {items.map((item) => {
                return(
                    <div className="information">
                        <img src={item.src} alt=""/>
                        <div className="text_div">
                            <h2>{item.name}</h2>
                            <span>{item.price}</span>
                            <div className='inform'>{item.info}</div>
                            <li><OrderBtn text="Order" /></li>
                        </div>
                    </div>
                )
            
            })}
        </div>
    )

}


export default data

