
import setProducts from '../../../../Hooks/useProduct';
import Product from '../Product/Product';
import './Products.css';


const Products = () => {
    const [products] = setProducts();
  
    return (
        <div className="my-5 py-5 products-container grid justify-items-center">
        <div className="md:w-8/12 grid justify-items-stretch">
             <h2 className="pt-5 text-xl">We offer Varities Range of  Drones</h2>
            <h2 className="p-5 text-2xl md:text-5xl"><span className="underline font-bold">RESERVE</span> ONE YOU LIKE</h2>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        >
                        </Product>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Products;