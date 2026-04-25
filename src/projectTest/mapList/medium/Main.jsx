import Medium from "./Medium";


const Main = () => {

const products = [
  {
    id: 1,
    name: "Face Wash",
    price: 500,
    colors: ["Pink", "White"],
    features: ["Organic", "For All Skin Types"]
  },
  {
    id: 2,
    name: "Shampoo",
    price: 0,
    colors: [],
    features: ["Anti Hair Fall"]
  },
  {
    id: 3,
    name: "Soap",
    price: 120,
    features: []
  }
];

  return (
    <>

  <h1>Products List</h1>
            {
                products.map(product => (
                    <Medium
                        key={product.id}
                        title={product.name}
                        price={product.price}
                        colors={product.colors}
                        features={product.features}
                    />
                    
                ))
            }

    </>
  )
}

export default Main