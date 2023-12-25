import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'

import Burgers from '../Pages/Burgers/Burgers'
import Combo from '../Pages/Combo/Combo'
import Desserts from '../Pages/Desserts/Desserts'
import HotDogs from '../Pages/HotDogs/HotDogs'
import Pizza from '../Pages/Pizza/Pizza'
import Sauces from '../Pages/Sauces/Sauces'
import Shawarma from '../Pages/Shawarma/Shawarma'
import Wok from '../Pages/Wok/Wok'
import Shacks from '../Pages/Snacks/Snacks'

import arrCards from '../data/burgers.json'
import CartPosition from '../Components/CartPosition/CartPosition'

import MenuPopup from '../Components/MenuPopup/MenuPopup'

const popArr = [];

import './App.scss'
import Header from '../Components/Header/Header'
import Snacks from '../Pages/Snacks/Snacks'
import delivery from "../../public/deliveryfree.png"

function App() {
  const [burgers, setBurgers] = useState(arrCards.forCart);
  const [allProdCount, setAllProdCount] = useState(3);
  const [totalPrice, setTotalPrice] = useState(countStartPrice());
  const [foodInfo, setFoodInfo] = useState(arrCards.BurgerMenu);
  const [popup, setPopup] = useState(popArr);
  const [num, setNum] = useState([1, 1, 1,]);
  const [pageName, setPageName] = useState(pageNameStatus());

  localStorage.pageName;

  function pageNameStatus() {
    if (localStorage.pageName == '') {
      return "Burgers";
    }
    else {
      return localStorage.pageName;
    }
  }

  window.addEventListener('popstate', () => {
    setPageName(...prevState)
  })

  function countStartPrice() {
    let price = 0;
    burgers.map((item) => {
      price = price + item.price;
    })
    return price;
  }

  function editAllProdCount(amper, number = 1) {
    setAllProdCount(allProdCount + amper * number);

  }

  function delCard(id, amount = 0) {

    const copyBurgerArr = [...burgers];
    const newBurgerArr = copyBurgerArr.filter((item) => item.id !== id);
    setBurgers(newBurgerArr);

    const arr = [...num];
    arr[-1 + id] = 1;
    setNum(arr);

    editAllProdCount(-1, num[id - 1]);
    editTotalPrice(-1, amount, num[id - 1])
  }
  function editTotalPrice(amper, amount, num = 1) {
    if (String(amper) === "-1") {
      setTotalPrice(totalPrice - amount * num)
    }
    else setTotalPrice(totalPrice + amount * num)

  }

  function editCount(amper, id, price, count = 1) {

    const truePosition = burgers.find(i => i.id !== id);
    if (!truePosition) {
      setNum((prevState) => [...prevState, 1])
    }

    const result = [...num];
    if (String(amper) === "-1" && num[-1 + id] === 1) {
      delCard(id, price);
      return
    }

    result[id - 1] += amper * count;

    editAllProdCount(amper, count);
    setNum(result);
    editTotalPrice(amper, price, count);

  }


  function addFromMenu(item, number = 1) {



    const truePosition = burgers.find(i => i.positionName === item.positionName);
    if (truePosition) {

      editCount(+1, item.id, item.price, number)
      return
    }

    let lastId;
    if (burgers.length !== 0) {
      lastId = burgers[burgers.length - 1].id;
    } else {
      lastId = 0;
      setNum([]);
    }

    editAllProdCount(1, number);
    editTotalPrice(1, item.price, number);

    item.id = lastId + 1;
    setBurgers((prevState) => [...prevState, item]);
    setNum((prevState) => [...prevState, number])

  }

  function openPopup(item) {
    const arr = [...popArr];
    arr.push(item);
    setPopup(arr);
  }
  function closePopup() {
    setPopup([]);
  }


  return (
    <div className='body_app'>
      <Router >
        <Header
          localPage={localStorage.pageName}
          setPageName={setPageName}
        />

        <p className="page_name">{pageName}</p>
        <main>
          <div className="full_cart">
            <div className="cart_top">
              <p className="shop_cart">Shopping cart</p>
              <div>
                <p className="all_prod_count">{allProdCount}</p></div>
            </div>
            <div className="cart">
              {burgers.map((item) => (
                <CartPosition {...item}
                  key={item.id}
                  editAllProdCount={editAllProdCount}
                  delCard={delCard}
                  editTotalPrice={editTotalPrice}
                  editCount={editCount}

                  num={num}
                  setNum={setNum}


                />
              ))}
            </div>
            <div className="total">
              <p className="itogo">Total:</p>
              <p className="total_prc"> {totalPrice}₽</p>

            </div>
<button className="order">Place an order</button>
<div className="freeDelivery">
  <img src={delivery} alt="" />
  <p> Free delivery</p>
 
</div>
          </div>
          <Routes>


            <Route path="/" element={<Burgers
              foodInfo={foodInfo}
              addFromMenu={addFromMenu}
              popup={popup}
              setPopup={setPopup}
              burgers={burgers}
              setBurgers={setBurgers}
              openPopup={openPopup}
              closePopup={closePopup}
              editAllProdCount={editAllProdCount}
            />} />
            <Route path="/HotDogs" element={<HotDogs />} />
            <Route path="/Snacks" element={<Snacks />} />

            <Route path="/Combo" element={<Combo />} />
            <Route path="/Desserts" element={<Desserts />} />
            <Route path="/Pizza" element={<Pizza />} />
            <Route path="/Sauces" element={<Sauces />} />
            <Route path="/Shawarma" element={<Shawarma />} />
            <Route path="/Wok" element={<Wok />} />
          </Routes>

        </main>

      </Router>
    </div>
  )
}

export default App
