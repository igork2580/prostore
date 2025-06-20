import ProductList from '@/components/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/product.actions';

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <div className='space-y-8'>
      <ProductList title='Newest Arrivals' data={latestProducts} limit={5} />
    </div>
  );
};
export default HomePage;