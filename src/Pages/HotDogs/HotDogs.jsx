import './HotDogs.scss'
import { v4 as uuidv4 } from 'uuid'
import LayoutMenuPage from '../../Components/LayoutMenuPage/LayoutMenuPage'
export default function HotDogs({cartList, setCartList, hotDogInfo,  openPopup, addFromMenu , closePopup, popup,  editAllProdCount, setPopup }) {
  return (
<LayoutMenuPage 

             positionInfo={hotDogInfo}
             addFromMenu={addFromMenu}
             popup={popup}
             setPopup={setPopup}
             cartList={cartList}
             setCartList={setCartList}
             openPopup={openPopup}
             closePopup={closePopup}
             editAllProdCount={editAllProdCount}

             />
  )
}
