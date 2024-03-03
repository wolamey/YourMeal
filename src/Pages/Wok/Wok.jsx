import './Wok.scss'
import { v4 as uuidv4 } from 'uuid'
import LayoutMenuPage from '../../Components/LayoutMenuPage/LayoutMenuPage'


export default function Wok({cartList, setCartList, wokInfo,  openPopup, addFromMenu , closePopup, popup,  editAllProdCount, setPopup ,loged }) {
  return (
<LayoutMenuPage 

positionInfo={wokInfo}
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
