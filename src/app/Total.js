import { useSelector } from 'react-redux'

const Total = () => {

  const cart = useSelector(state => state.cart)

  const getTotal = () => {
    let totalCount = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalCount += item.quantity
      totalPrice += item.price * item.quantity
    })
    return { totalPrice, totalCount }
  }

}

export const { totalCount, totalPrice } = Total