/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData } from 'react-router-dom'
import { customFetch, formatPrice, generateAmountOptions } from '../utils'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`)
  const singleProduct = response.data.data
  return { singleProduct }
}

const SingleProduct = () => {
  const { singleProduct } = useLoaderData()
  const { image, title, price, description, colors, company } =
    singleProduct.attributes
  const rupeesAmount = formatPrice(price)
  const [productColor, setProductColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value))
  }

  // ADD TO CART FUNCTIONALITY
  const dispatch = useDispatch()

  const cartProduct = {
    cartID: singleProduct.id + productColor,
    productID: productColor.id,
    image,
    title,
    price,
    productColor,
    company,
    amount
  }

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }))
  }

  return (
    <section>
      <div className="breadcrumbs text-md font-semibold">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCTS */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE  */}
        <img
          src={image}
          alt={title}
          className="border w-96 h-96 object-cover rounded-md lg:w-full"
        />
        {/* PRODUCT  */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-primary font-semibold mt-2">{company}</h4>
          <p className="mt-3 text-xl">{rupeesAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* COLORS  */}
          <div className="mt-6">
            <h4 className="text-md font-bold tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && 'border-2 border-neutral-600'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                )
              })}
            </div>
          </div>
          {/* AMOUNT  */}
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="amount">
              <h4 className="text-md font-bold tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              className="select select-bordered select-md"
              id="amount"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(4)}
            </select>
          </div>
          {/* CART BTN */}
          <div className="mt-10">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={addToCart}
            >
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SingleProduct

//leading-8 ===> line-height
