import { Link } from "react-router-dom"
// import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import {
    XCircleFill,
    CartFill,
    ArrowLeftCircleFill,
} from "react-bootstrap-icons"
import CartItem from "./CartItem"
import { clearCart } from "../features/cartSlice"
import { totalCount, totalPrice } from "../app/Total"
import "../styles/cartContainer.scss"

const CartContainer = () => {
    const items = useSelector((state) => state.items)
    console.log(items)

    // const { totalPrice, totalCount, items } = useSelector((state => state.cart)
    //
    const dispatch = useDispatch()
    // useEffect(() => {
    //   dispatch(getCartTotal())
    // }, [dispatch, items])
    // console.log(cart);

    if (items.length === 0) {
        return (
            <>
                <div className="empty-container">
                    <div className="title-bar">
                        <Link to="/">
                            <h3 className="back">
                                <ArrowLeftCircleFill />
                            </h3>
                        </Link>
                        <h2 className="cart-title"> Your cart</h2>
                    </div>
                    <h2 className="empty-message">
                        Your shopping cart is empty!
                    </h2>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="cart-container">
                <div className="title-bar">
                    <Link to="/">
                        <h3 className="back">
                            <ArrowLeftCircleFill />
                        </h3>
                    </Link>
                    <h2 className="cart-title"> Your cart</h2>
                    <h3>
                        <CartFill />
                        {`( ${totalCount} )`}
                    </h3>
                </div>
                {items?.map((item) => {
                    return <CartItem key={item.id} {...item} />
                })}
                <footer>
                    <div className="total-price">
                        <h4>{`Total Price: $${totalPrice}`}</h4>
                    </div>
                    <button
                        className="clear-cart"
                        onClick={() => dispatch(clearCart())}
                    >
                        Clear cart &nbsp;
                        <XCircleFill />
                    </button>
                </footer>
            </div>
        </>
    )
}
export default CartContainer
