import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";


const ProductDetails = () => {

    const { id } = useParams();

    const [products, setProducts] = useState([]);

    const fetchApi = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await res.json();
            setProducts(data);

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {

        fetchApi();

    }, [])

    return (
        <>
            <h1>Detail page</h1>
            {
                Array.isArray(products.images) ?
                    (
                        <img width={"240px"} src={products.images[0]} alt="" />
                    ) : (
                        <img width={"240px"} src={products.thumbnail} alt="" />
                    )}

                    <h2>{products.title}</h2>
                    <h4>{products.price}</h4>
                    <p>{products.description}</p>
        </>
    )
}

export default ProductDetails