import './Pizza.scss'
import { v4 as uuidv4 } from 'uuid'
import LayoutMenuPage from '../../Components/LayoutMenuPage/LayoutMenuPage'

export default function Pizza({cartList, setCartList, pizzaInfo,  openPopup, addFromMenu , closePopup, popup,  editAllProdCount, setPopup ,loged }) {
  return (
<LayoutMenuPage 

positionInfo={pizzaInfo}
addFromMenu={addFromMenu}
popup={popup}
setPopup={setPopup}
cartList={cartList}
setCartList={setCartList}
openPopup={openPopup}
closePopup={closePopup}
editAllProdCount={editAllProdCount}
loged={loged}

/>
  )
}
