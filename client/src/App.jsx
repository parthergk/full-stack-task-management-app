import { Cart } from "./components/Cart"
import { Login } from "./components/form/Login"
import { Register } from "./components/form/Register"
import { Menu } from "./components/menu/Menu"
import { Order } from "./components/Order"


const App = () => {
  return (
    <>
    <Login/>
    <Register/>
    <Menu/>
    <Cart/>
    <Order/>
    </>

  )
}

export default App