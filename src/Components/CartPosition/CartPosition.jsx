import { useState } from 'react'
import './CartPosition.scss'
import cross from '../../assets/cross.png'



export default function CartPosition({pic, positionName, weight, price, delCard, id,  editCount,num,setNum  }) {





  return (
    <div className='full'>
      <div className="position_container">

        <img className='cartImgPos' src={pic} alt="" />

        <div className="info">
          <div className="properties">
            <p className="name">{positionName}</p>
            <p className="weight">{weight}g</p>
            <p className="price">{price}₽</p>
          </div>
<div className='cart_pos_right'>
          <div className="volume">
          <button onClick={()=>editCount(-1,id, price)} className='minus'>-</button>
            <p className="num">{num[-1+id]}</p>
            <button onClick={()=>editCount(+1,id, price)} className="plus">+</button>
          </div>

          <div className="delEl" onClick={() => delCard(id, price)}>
            <img src={cross} alt="" />
          </div></div>
          


        </div>

      </div>
    </div>
  )
}

