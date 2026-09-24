import { useLoaderData} from "react-router-dom"
import { NavLink } from "react-router-dom";


const PostDetail = () => {

  const products = useLoaderData();
  
  


  return (
    <>

      <NavLink to="/products">Go Back</NavLink>
       <h1>Detail page</h1>
      <img src={products?.thumbnail} />
      <h2>{products?.title}</h2>
      <p>{products.description}</p>

    </>
  )
}

export default PostDetail