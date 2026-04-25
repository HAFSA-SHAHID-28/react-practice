import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Post = () => {

  const {products} = useLoaderData();
  

  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);



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
                  {p?.description.slice(0, 40)+"..." || "description"}
                </Card.Text>
                <button className='d-block w-100' onClick={()=> navigate("/products/" + p.id)}>View Details</button>
              </Card.Body>
            </Card>
          ))
        }


      </div>
    </>
  )
}

export default Post