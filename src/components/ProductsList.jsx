import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../utils'

const ProductsList = () => {
  const { products } = useLoaderData()

  return (
    <div className="mt-12 grid grid-y-8">
      {products.map((product) => {
        const { title, image, price,company } = product.attributes
        const rupeesAmount = formatPrice(price)
        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="p-5 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group mb-4"
          >
              <img
                src={image}
                alt={title}
                className="h-24 w-24 rounded-lg sm:h-32 object-cover group-hover:scale-105 transition duration-300"
              />
            <div className="ml-0 sm:ml-16">
              <h3 className="font-medium capitalize text-lg">{title}</h3>
              <h4 className=" capitalize font-semibold text-secondary">
                {company}
              </h4>
            </div>
            <p className='font-medium ml-0 sm:ml-auto text-lg'>{rupeesAmount}</p>
          </Link>
        )
      })}
    </div>
  )
}
export default ProductsList
