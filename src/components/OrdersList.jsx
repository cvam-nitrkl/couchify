import { useLoaderData } from 'react-router-dom'
import OrderItem from './OrderItem'

const OrdersList = () => {
  const { orders, meta } = useLoaderData()

  return (
    <div className="mt-8">
      <h4 className="mb-4 capitalize">total orders: {meta.pagination.total}</h4>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Products</th>
              <th>Cost</th>
              <th className='hidden sm:block'>Date</th>
            </tr>
          </thead>
          <tbody>
          {orders.map((order) => <OrderItem key={order.id} order={order} />)}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default OrdersList
