import NavBar from "./NavBar"
import "../styles/home.scss"
import items from "../data"
import ShoppingItem from "./ShoppingItem"
import { useSelector } from "react-redux"

const ShoppingList = () => {
    // const cart = useSelector((state) => state.cart)
    
    return (
        <div className="home">
            <NavBar />
            <h4 className="list-title">Available products</h4>
            <div className="list">
                {items.map((item) => {
                    return <ShoppingItem key={item.id} {...item} />
                })}
            </div>
        </div>
    )
}
export default ShoppingList
