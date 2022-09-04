import React from 'react'



const data = () => {
    const items = [
        { icone: <i className='fa fa-star'></i>, name_first: 'Преимущество', name_two: 'Наверняка у вас много сильных сторон и уникальных товаров, которые отличают вас от других.' },
        { icone: <i className='fa fa-car'></i>, name_first: 'Отличительная черта', name_two: 'Обычно достаточно трех-четырех пунктов о ваших ключевых особенностях..' },
        { icone: <i className='fa fa-thumbs-up'></i>, name_first: 'Особенность', name_two: 'Или, например, вы делаете акции со скидками в честь дня рождения вашего клиента.' },
        { icone: <i className='fa fa-users'></i>, name_first: 'Отличительная черта', name_two: 'Обычно достаточно трех-четырех пунктов о ваших ключевых особенностях.' },
    ]
    return (
        <div className='Block_Top'>
            {items.map((item) => {
                return(
                    <div className="item">

                    <h1>{item.icone}</h1>
                    <p>{item.name_first}</p>
                    <div className='text'>{item.name_two}</div>
                </div>
                )
                
            })}
        </div>
    )

}


export default data

