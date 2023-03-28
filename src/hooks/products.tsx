import React, {useEffect, useState} from "react";
import {IProduct} from "../models";
import axios from "axios";
import Product from "../components/Product";

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchProducts = async () => {
        setLoading(true)
        const response = await axios.get<IProduct[]>(`https://fakestoreapi.com/products?limit=5`)
        setProducts(response.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    const items = products.map((obj, i) => <Product key={obj.id} product={products[i]}/>)

    return { loading, items}
}