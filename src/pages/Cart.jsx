import { useSelector } from 'react-redux'
import { SectionTitle, CartItemList, CartTotals } from '../components'
import { Link } from 'react-router-dom'

const Cart = () => {
  const user = useSelector((state) => state.userState.user)
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart)

  if (numItemsInCart === 0) {
    return <SectionTitle text="Your Cart is Empty" />
  }
  return (
    <>
      <SectionTitle text="shopping cart" />
      <div className="mt-8 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemList />
        </div>
        <div className="lg:col-span-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              proceed to checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-8">
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  )
}
export default Cart
