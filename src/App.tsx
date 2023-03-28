import React, {useEffect, useState} from 'react';
import Product from "./components/Product";
import { products } from './data/products';
import axios from "axios";
import {IProduct} from "./models";


function App() {

    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchProducts = async () => {
        setLoading(true)
        const response = await axios.get(`https://fakestoreapi.com/products?limit=5`)
        setProducts(response.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    const items = products.map((obj, i) => <Product key={obj.id} product={products[i]}/>)

  return (
    <div className="container mx-auto max-w-2xl pt-5">
        {loading && <p className="text-center">Loading...</p>}
        {items}
    </div>
  );
}

export default App;
