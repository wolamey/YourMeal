import './Burgers.scss'
import ComponentBurgers from '../../Components/ComponentBurgers/ComponentBurgers'
import MenuPopup from '../../Components/MenuPopup/MenuPopup'

export default function Burgers({burgers, setBurgers, foodInfo, pic, positionName, weight, price, openPopup, item, addFromMenu , closePopup, delCard, id, editTotalPrice, popup, setPopup, editAllProdCount }) {
  return (
    <div className='burger_page'>

<div className="burger_menu">
{foodInfo.map((item) => (
            <ComponentBurgers {...item}
              openPopup={openPopup}
              item={item}
              addFromMenu={addFromMenu}
              foodInfo = {foodInfo}
              key={1 + item.id}
            />
          ))}</div>

{popup.map(item => {
        return <div  className='popBack'>
          <MenuPopup {...item}
            closePopup={closePopup}
            burgers={burgers}
            setBurgers={setBurgers}
            editAllProdCount={editAllProdCount}
            editTotalPrice={editTotalPrice}
            item={item}
            // addFromPopup = {addFromPopup}
            addFromMenu={addFromMenu}
          />
        </div>
      })}
    </div>
  )
}
