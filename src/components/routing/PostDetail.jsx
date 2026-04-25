import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';


const PostDetail = () => {

    const {id} = useParams();
    
      const [posts, setPosts] = useState([]);
    
      const fetchPosts = async () => {
        try {
          const res = await fetch(`https://dummyjson.com/products/${id}`);
          const data = await res.json();
          setPosts(data);
          
    
        } catch (error) {
          console.log(error);
    
        }
      }
    
      useEffect(() => {
        fetchPosts();
      }, [])
    

  return (
    <>
    <h1>Detail page</h1>
{
 Array.isArray(posts.image) ? (
<img src={posts.image[0]} alt="" />
 ):(
<img src={posts.thumbnail} alt="" />
 )
}
   

    <h2>{posts?.title}</h2>
    <p>{posts.description}</p>

    </>
  )
}

export default PostDetail