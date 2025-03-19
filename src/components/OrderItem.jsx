import dayjs from "dayjs"
import { formatPrice } from "../utils"

/* eslint-disable react/prop-types */
const OrderItem = (props) => {
  const { order } = props
  const { name, address, numItemsInCart, orderTotal, createdAt } =
    order.attributes

  return (
    <tr>
      <td>{name}</td>
      <td>{address}</td>
      <td>{numItemsInCart}</td>
      <td>{formatPrice((parseFloat(orderTotal.slice(1))*100))}</td>
      <td>{dayjs(createdAt).format('h:mm a - ddd, MMM D, YYYY ')}</td>
    </tr>
  )
}
export default OrderItem
