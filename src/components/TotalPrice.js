import { useSelector } from "react-redux"

const TotalPrice = () => {
    const items = useSelector((state) => state.items)

    const getTotal = () => {
        let totalPrice = 0
        
        items.forEach((item) => {
            totalPrice += item.price * item.qty
        })
        return { totalPrice }
    }
    return (
        <div className="total-price">
            <p>{getTotal().totalPrice}</p>
        </div>
    )
}

export default TotalPrice
