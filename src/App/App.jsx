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

import arrCards from '../data/fullMenuNCart.json'
import CartPosition from '../Components/CartPosition/CartPosition'
import LogIn from "../Pages/LogIn/LogIn"


const popArr = [];

import './App.scss'
import Header from '../Components/Header/Header'
import Snacks from '../Pages/Snacks/Snacks'
import delivery from "../../public/deliveryfree.png"
import SignIn from '../Pages/SignIn/SignIn'

function App() {
  const [cartList, setCartList] = useState(arrCards.forCart);
  const [allProdCount, setAllProdCount] = useState(3);
  const [totalPrice, setTotalPrice] = useState(countStartPrice());
  const [burgInfo, setBurgInfo] = useState(arrCards.BurgerMenu);
  const [popup, setPopup] = useState(popArr);
  const [num, setNum] = useState([1, 1, 1,]);
  const [pageName, setPageName] = useState(pageNameStatus());
  const [snackInfo, setSnackInfo] = useState(arrCards.SnacksMenu);
  const [hotDogInfo, setHotDogInfo] = useState(arrCards.HotDogsMenu)
  const [comboInfo, setComboInfo] = useState(arrCards.ComboMenu)
  const [shawarmaInfo, setShawarmaInfo] = useState(arrCards.shawarmaMenu)
  const [pizzaInfo, setPpizzaInfo] = useState(arrCards.pizzaMenu)
  const [wokInfo, setWokInfo] = useState(arrCards.wokMenu)
  const [dessertInfo, setDessertInfo] = useState(arrCards.dessertsMenu)
  const [sauceInfo, setSauceInfo] = useState(arrCards.sauceMenu)

  const [loged, setLoged] = useState(false)

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
    cartList.map((item) => {
      price = price + item.price;
    })
    return price;
  }

  function editAllProdCount(amper, number = 1) {
    setAllProdCount(allProdCount + amper * number);

  }

  function delCard(id, amount = 0) {

    const copyBurgerArr = [...cartList];
    const newBurgerArr = copyBurgerArr.filter((item) => item.id !== id);
    setCartList(newBurgerArr);

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

    const truePosition = cartList.find(i => i.id !== id);
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

    const truePosition = cartList.find(i => i.positionName === item.positionName);
    if (truePosition) {

      editCount(+1, item.id, item.price, number)
      return
    }

    let lastId;
    if (cartList.length !== 0) {
      lastId = cartList[cartList.length - 1].id;
    } else {
      lastId = 0;
      //setNum([]);
    }

    editAllProdCount(1, number);
    editTotalPrice(1, item.price, number);

    item.id = lastId + 1;
    setCartList((prevState) => [...prevState, item]);
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
              {cartList.map((item) => (
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
              burgInfo={burgInfo}
              addFromMenu={addFromMenu}
              popup={popup}
              setPopup={setPopup}
              openPopup={openPopup}
              closePopup={closePopup}
              cartList={cartList}
              setCartList={setCartList}
              editAllProdCount={editAllProdCount}
              loged = {loged}
            />} />
            <Route path="/HotDogs" element={<HotDogs
              hotDogInfo={hotDogInfo}
              addFromMenu={addFromMenu}
              popup={popup}
              setPopup={setPopup}
              cartList={cartList}
              setCartList={setCartList}
              openPopup={openPopup}
              closePopup={closePopup}
              loged = {loged}
              editAllProdCount={editAllProdCount} />} />
            <Route path="/Snacks" element={<Snacks
              snackInfo={snackInfo}
              addFromMenu={addFromMenu}
              popup={popup}
              setPopup={setPopup}
              cartList={cartList}
              setCartList={setCartList}
              openPopup={openPopup}
              closePopup={closePopup}
              loged = {loged}

              editAllProdCount={editAllProdCount}
            />} />

            <Route path="/Combo" element={<Combo
              comboInfo={comboInfo}
              addFromMenu={addFromMenu}
              popup={popup}
              setPopup={setPopup}
              cartList={cartList}
              setCartList={setCartList}
              openPopup={openPopup}
              closePopup={closePopup}
              loged = {loged}

              editAllProdCount={editAllProdCount}
            />} />
            <Route path="/Desserts" element={<Desserts
              dessertInfo={dessertInfo}
              addFromMenu={addFromMenu}
              popup={popup}
              setPopup={setPopup}
              cartList={cartList}
              setCartList={setCartList}
              openPopup={openPopup}
              closePopup={closePopup}
              loged = {loged}

              editAllProdCount={editAllProdCount}
            />} />
            <Route path="/Pizza" element={<Pizza
              pizzaInfo={pizzaInfo}
              addFromMenu={addFromMenu}
              popup={popup}
              setPopup={setPopup}
              cartList={cartList}
              setCartList={setCartList}
              openPopup={openPopup}
              closePopup={closePopup}
              loged = {loged}

              editAllProdCount={editAllProdCount}
            />} />
            <Route path="/Sauces" element={<Sauces
              sauceInfo={sauceInfo}
              addFromMenu={addFromMenu}
              popup={popup}
              setPopup={setPopup}
              cartList={cartList}
              setCartList={setCartList}
              openPopup={openPopup}
              loged = {loged}

              closePopup={closePopup}
              editAllProdCount={editAllProdCount}
            />} />
            <Route path="/Shawarma" element={<Shawarma
              shawarmaInfo={shawarmaInfo}
              addFromMenu={addFromMenu}
              popup={popup}
              setPopup={setPopup}
              cartList={cartList}
              setCartList={setCartList}
              openPopup={openPopup}
              closePopup={closePopup}
              loged = {loged}

              editAllProdCount={editAllProdCount}
            />} />
            <Route path="/Wok" element={<Wok
              wokInfo={wokInfo}
              addFromMenu={addFromMenu}
              popup={popup}
              setPopup={setPopup}
              cartList={cartList}
              setCartList={setCartList}
              openPopup={openPopup}
              loged = {loged}

              closePopup={closePopup}
              editAllProdCount={editAllProdCount} />} />
              <Route path='/login' element = {<LogIn
              setLoged = {setLoged}
              />}/>
              <Route path='/SignIn' element = {<SignIn/>}/>
          </Routes>

        </main>

      </Router>
    </div>
  )
}

export default App
