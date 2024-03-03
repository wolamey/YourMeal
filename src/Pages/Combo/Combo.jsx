import './Combo.scss'
import { v4 as uuidv4 } from 'uuid';
import LayoutMenuPage from '../../Components/LayoutMenuPage/LayoutMenuPage'

export default function Combo({cartList, setCartList, comboInfo, openPopup, addFromMenu , closePopup, popup, setPopup, editAllProdCount  ,loged}) {
  return (
<LayoutMenuPage 

positionInfo={comboInfo}
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
