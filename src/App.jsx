import { ErrorElement } from './components'
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { loader as landingLoader } from './pages/Landing'
import { loader as checkoutLoader } from './pages/Checkout'
import { loader as singleProductLoader } from './pages/SingleProduct'
import { loader as productLoader } from './pages/Products'
import { loader as orderLoader } from './pages/Orders'
import { action as registerAction } from './pages/Register'
import { action as loginAction } from './pages/Login'
import { action as checkoutAction } from './components/CheckoutForm.jsx'
import { store } from '../store.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: 'products',
        loader: productLoader,
        element: <Products />,
      },
      {
        path: 'products/:id',
        loader: singleProductLoader,
        element: <SingleProduct />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      { path: 'about', element: <About /> },
      {
        path: 'checkout',
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      },
      {
        path: 'orders',
        element: <Orders />,
        loader: orderLoader(store),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
