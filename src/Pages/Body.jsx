import React,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../Store/CartSlice';



const Body = () => {
    const dispatch = useDispatch();
    const[products,setProduct] = useState([]);
    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data =await response.json();
            setProduct(data);
            console.log(products);
        }
        fetchData();
      },[])

      const handleAdd = (product) => {
        dispatch(add(product));
        // console.log(product)
    };

  return (
    <div className='productsWrapper'>
         {
    products.map((product)=>(
        <div className='card' key={product.id}>
           <img src={product.image} alt='img'/>
           <h4>{product.title}</h4>
           <h5>{product.price}</h5>
           <button className='btn' onClick={() => {handleAdd(product)}} >Add to cart</button>
        </div> ))
          }                   
     </div>      
         )

}

export default Body