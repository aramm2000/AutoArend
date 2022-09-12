import React from 'react'
import OrderBtn from '../ui/OrderBtn'

const data = () => {
    const items = [
        { src: 'https://ukit.com/templates/c_automobiles/img/full_q1V5L2wZ.jpg' },
        { src: 'https://ukit.com/templates/c_automobiles/img/full_uQCgQtaj.jpg' },
        { src: 'https://ukit.com/templates/c_automobiles/img/full_RCfZsuDJ.jpg' },
        { src: 'https://ukit.com/templates/c_automobiles/img/full_LLyjNrql.jpg' },
        { src: 'https://ukit.com/templates/c_automobiles/img/full_C7iEeNR8.jpg' },
        { src: 'https://ukit.com/templates/c_automobiles/img/full_CqR7yWfj.jpg' },
        { src: 'https://ukit.com/templates/c_automobiles/img/full_D7G18yYP.jpg' },
        { src: 'https://ukit.com/templates/c_automobiles/img/full_O1iMZvT6.jpg' }
    ]
    return (
        <>
            <div className="condainer_div">
                <h1>Наш автопарк</h1>
                <div className="container_two">
                    {items.map((item) => {
                        return (
                            <div className="inf">
                                <img src={item.src} alt="" />
                            </div>
                        )
                    })}

                </div>
                <div>
                    <li className="carBtn"><OrderBtn text="смотреть все" /></li>
                </div>
            </div>
        </>
    )
}

export default data

