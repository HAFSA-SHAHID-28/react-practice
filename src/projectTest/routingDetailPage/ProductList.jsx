import { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";


const ProductList = () => {

const [products, setProducts] = useState([]);

const fetchApi = async()=>{
  try {
    const res = await fetch('https://dummyjson.com/products');
    const data =await res.json();
    setProducts(data.products);
    console.log(data.products);
    
  } catch (error) {
    console.log(error);
    
  }
}

useEffect(() => {
  
  fetchApi();

}, [])



const navigate = useNavigate();



  return (
    <>
    <div className='container-xxl my-5 d-flex justify-content-center gap-4 flex-wrap'>
          {
          products?.map((p, i) => (
            <Card key={i+p.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={p?.thumbnail} />
              <Card.Body>
                <Card.Title>{p?.title || "card title"}</Card.Title>
                <Card.Text className='d-flex justify-content-between'>
                  {p?.price || "price"}
                <span>  {p?.rating || "rating"} </span>
                </Card.Text>
                <Card.Text>
                  {p.description?.slice(0, 40)+"..." || "description"}
                </Card.Text>
                <button className='d-block w-100' onClick={()=> navigate("/productlist/" + p.id)} >View Details</button>
              </Card.Body>
            </Card>
          ))
        }
    </div>

    </>
  )
}

export default ProductList