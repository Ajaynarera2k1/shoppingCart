import React,{useEffect,useState} from 'react'



const Home = () => {
    const[products,setProduct] = useState();
    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data =await response.json();
            setProduct(data);
            console.log(products);
        }
        fetchData();
      },[])

    
  return (
    <div className='productsWrapper'>
       {
        products.map((product)=>(
             <div className='card' key={product.id}>
                <img src={product.image} alt='img'/>
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <button className='btn' onClick={()=>handleadd(product)}>Add to cart</button>
             </div>
        ))
       }
    </div>
  )
}

export default Home