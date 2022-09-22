import { useSelector } from "react-redux"

const TotalQty = () => {
    const items = useSelector((state) => state.items)

    const getTotal = () => {
        let totalQty = 0
        items.forEach((item) => {
            totalQty += item.qty
        })
        return { totalQty }
    }
    return (
        <div className="total-qty">
            <p>{getTotal().totalQty}</p>
        </div>
    )
}

export default TotalQty
