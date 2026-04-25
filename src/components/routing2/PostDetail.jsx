import { useLoaderData} from "react-router-dom"
import { NavLink } from "react-router-dom";


const PostDetail = () => {

  const product = useLoaderData();


  return (
    <>
      <h1>Detail page</h1>

      <NavLink to="/products">Go Back</NavLink>
      <h1>Detil Page</h1>
      <img src={product?.thumbnail} />
      <h2>{product?.title}</h2>
      <p>{product.description}</p>

    </>
  )
}

export default PostDetail