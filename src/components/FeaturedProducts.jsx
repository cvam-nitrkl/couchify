import ProductsGrid from './ProductsGrid'
import SectionTitle from './SectionTitle'

const FeaturedProducts = () => {
  return (
    <div className='pt-20'>
      <SectionTitle text="featured Products" />
      <ProductsGrid />
    </div>
  )
}
export default FeaturedProducts
