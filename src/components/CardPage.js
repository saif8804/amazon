import { useLocation } from "react-router-dom";
import Stars from "./Stars";


const CardPage = () => {
  const location = useLocation()
  const product = location?.state?.product;
   if(product === null) {
    return  <div>No product data found</div>}
  return (
    <div  className="products flex gap-4 justify-center ml-28 mt-28">
      <img src={product.image} alt="product" />
      <div className="flex flex-col items-start">
      <p className="w-2/4 text-xl font-bold">{product.description}</p>
      <Stars  stars={product.stars}/> 
      <p className="font-bold pt-2"> Rs-{product.price}</p>
       <button className="bg-orange-400 py-1 px-2 mt-2 rounded">Add to Cart</button>
      </div>
    </div>
   
  );
};

export default CardPage;