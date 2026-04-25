import { Route, Routes } from "react-router-dom"
import ProductList from "./ProductList"
import ProductDetails from "./ProductDetails"
import PageNotFound from "../../components/routing/PageNotFound"


const Main = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/productlist/:id" element={<ProductDetails/>} />
        <Route path="*" element={<PageNotFound/>} />
    </Routes>
    </>
  )
}

export default Main