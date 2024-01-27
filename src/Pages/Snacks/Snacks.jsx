import './Snacks.scss'
import { v4 as uuidv4 } from 'uuid'
import LayoutMenuPage from '../../Components/LayoutMenuPage/LayoutMenuPage'


export default function Snacks({cartList, setCartList, snackInfo,  openPopup, addFromMenu , closePopup, popup,  editAllProdCount, setPopup }) {
  return (
<LayoutMenuPage 

             positionInfo={snackInfo}
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
