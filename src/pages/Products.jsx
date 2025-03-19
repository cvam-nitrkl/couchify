/* eslint-disable react-refresh/only-export-components */
import { Filters, PaginationContainer, ProductsContainer } from '../components'
import { customFetch } from '../utils'

const url = '/products'
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ])

  const response = await customFetch(url, {
    params: params
  })
  const products = response.data.data
  const meta = response.data.meta
  return { products, meta, params }
}

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
}
export default Products

// MANUALLY gETTING QUERY PARAMETERS
// ===============================================
// const params = new URL(request.url).searchParams
// const search = params.get('search')
// const category = params.get('category')
// const company = params.get('company')
// const order = params.get('order')
// const price = params.get('price')
// console.log(search, category, company, order, price)
