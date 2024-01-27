import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import MenuPoint from '../MenuPoint/MenuPoint'
import MenuPopup from '../MenuPopup/MenuPopup'
import "./LayoutMenuPage.scss"

export default function LayoutMenuPage({cartList, setCartList, positionInfo,  openPopup, addFromMenu , closePopup, editTotalPrice, popup,  editAllProdCount }) {
  return (
    <div>
          <div key={uuidv4()} className='meal_page'>

<div className="meal_menu">
{positionInfo.map((item) => (
            <MenuPoint {...item}
              openPopup={openPopup}
              item={item}
              addFromMenu={addFromMenu}
              positionInfo = {positionInfo}
              key={uuidv4()}
            />
          ))}</div>

{popup.map(item => {
        return <div  className='popBack'>
          <MenuPopup {...item}
            closePopup={closePopup}
            cartList={cartList}
            setCartList={setCartList}
            editAllProdCount={editAllProdCount}
            editTotalPrice={editTotalPrice}
            item={item}
            addFromMenu={addFromMenu}
          />
        </div>
      })}
    </div>

    </div>
  )
}
