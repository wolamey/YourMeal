import './Sauces.scss'
import { v4 as uuidv4 } from 'uuid'
import LayoutMenuPage from '../../Components/LayoutMenuPage/LayoutMenuPage'

export default function Sauces({cartList, setCartList, sauceInfo,  openPopup, addFromMenu , closePopup, popup,  editAllProdCount, setPopup ,loged }) {
  return (
<LayoutMenuPage 

positionInfo={sauceInfo}
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
