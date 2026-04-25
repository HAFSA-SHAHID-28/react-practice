import Easy from './Easy'

const Main = () => {

  const products = [
  { id: 1, name: "Shampoo", price: 250 },
  { id: 2, name: "Soap", price: 80 },
  { id: 3, name: "Lotion", price: 0 }
];


    return (
        <>

        <h1>Products List</h1>
            {
                products.map(product => (
                    <Easy 
                    key={product.id}
                    title={product.name}
                    price={product.price}
                    />
                ))
            }
        </>
    )
}

export default Main