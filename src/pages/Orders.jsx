/* eslint-disable react-refresh/only-export-components */
import toast from 'react-hot-toast'
import { redirect, useLoaderData } from 'react-router-dom'
import { customFetch } from '../utils'
import { OrdersList, PaginationComplexContainer, SectionTitle } from '../components'

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user

    if (!user) {
      toast.custom('You must logged in to view orders', {
        icons: '⚠ ',
      })
      return redirect('/login')
    }

    // for pagination
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ])
    // --------------------------------
    try {
      const response = await customFetch.get('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      return { orders: response.data.data, meta: response.data.meta }
    } catch (error) {
      console.log(error)
      const errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error placing your order'
      toast.error(errorMessage)
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        return redirect('/login')
      }
      return null
    }
  }

const Orders = () => {
  const {meta} = useLoaderData();
 if(meta.pagination.total < 1){
  return <SectionTitle text="please make an order" />
 }
  return <>
    <SectionTitle text="your orders" />
    <OrdersList />
    <PaginationComplexContainer />
  </>
}
export default Orders
