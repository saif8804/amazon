import { useLocation, useNavigate} from "react-router-dom";
import Stars from "./Stars";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";


const CardPage = () => {
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const handleAddItem = (product) =>{
    const productWithQuantiuty = {
      ...product,
      quantity:1,
      unitPrice:product.price
    }
    dispatch(addItems(productWithQuantiuty));
    navigate("/")

  }

  const location = useLocation();
  const product = location?.state?.product;

  if (product === null) {
    return <div>No product data found</div>;
  }
  return (
    <div className="products flex gap-4 justify-center ml-28 mt-28">
      <img src={product.image} alt="product" />
      <div className="flex flex-col items-start">
        <p className="w-2/4 text-xl font-bold">{product.description}</p>
        <Stars stars={product.stars} />
        <p className="font-bold pt-2"> Rs-{product.price}</p>
       
        <button className="bg-orange-400 py-1 px-2 mt-2 rounded"
         onClick={() => handleAddItem(product)}
        >
             Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CardPage;