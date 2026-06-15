import { useContext } from "react"
import { CartContext } from "../store.jsx"

export default function Navbar(){
    const [state,dispatch] = useContext(CartContext)

    return(
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
            <a className="navbar-brand">享樂午餐</a>
            <button className="btn btn-outline-success" type="submit">
                購物車 <span className="badge text-bg-danger">{state.cartList.length}</span>
            </button>
            </div>
        </nav>
    )
}