import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import "../styles/navbar.scss"
import { CartFill } from "react-bootstrap-icons"
import { useEffect } from "react"
import TotalQty from "./TotalQty"

const NavBar = () => {
    const cart = useSelector((state) => state.cart)
    // const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch(getCartTotal())
    // }, [items])
    return (
        <div className="nav-container">
            <h3>Shopping App</h3>
            <Link to="/cart" className="cart-btn">
                <button>
                    <div>
                        Cart &nbsp;<CartFill />&nbsp;(<TotalQty />)
                    </div>
                </button>
            </Link>
        </div>
    )
}
export default NavBar
