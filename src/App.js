import { Container } from './App.styled'
import Header from "./components/Header-SearchBar/Header"
import CartSide from './components/ShoppingCart/Cart-side'
import Main from "./components/Preview-Products/Main"
import Footer from "./components/Footer-Contacts/Footer"
import products from "./JSON-Data/products.json"
import users from "./JSON-Data/users.json"
import { useState } from 'react'

function App() {
  const [currCart, setCurrCart] = useState([])


  const addToCart = (productToFind) => {


    const newCart = [...currCart]

    const productFound = newCart.find((product) => product.id === productToFind.id)

    if (!productFound) {
      const newProduct = { ...productToFind, quantity: 1 }
      newCart.push(newProduct)
      setCurrCart(newCart)
    } else {
      window.alert("Produto ja adicionado")
    }
  }

  const addQuantityToProductOnCart = (productToAddQuantity) => {
    const newCart =[...currCart]

    const productFound = newCart.find((product) => product.id === productToAddQuantity.id)

    productFound.quantity++

    setCurrCart(newCart)


  }
  const reduceQuantityToProductOnCart = (productToReduceQuantity) => {
    const newCart =[...currCart]

    const productFound = newCart.find((product) => product.id === productToReduceQuantity.id)
    const indexProduct = newCart.findIndex((product)=>product.id===productToReduceQuantity.id)

    productFound.quantity--
    if(productFound.quantity<=0)
    {
      newCart.splice(indexProduct,1)
    }

    setCurrCart(newCart)


  }












  return (
    <Container size={currCart.length} >
      <CartSide 
      addQuantityToProductOnCart={addQuantityToProductOnCart}
      reduceQuantityToProductOnCart={reduceQuantityToProductOnCart}
        currCart={currCart}
      />
      <div className='main-container' >

        <Header />



        <Main
          products={products}
          currCart={currCart}
          addToCart={addToCart}
          addQuantityToProductOnCart={addQuantityToProductOnCart}
          reduceQuantityToProductOnCart={reduceQuantityToProductOnCart} />

      </div>
      <Footer />


    </Container>
  )
}

export default App
