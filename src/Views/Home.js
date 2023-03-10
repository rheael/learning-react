import React from 'react'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Home() {
    // const url = "https://5e8dd95322d8cd0016a79b97.mockapi.io/api/v1/products/3"
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`
    
    let products = useAxiosGet(url)

    let content = null
    if(products.error) {
        content = <p>
            There was an error please refresh or try again later.
        </p>
    }
    if(products.loading) {
        content = <Loader></Loader>
    }
    if(products.data) {
        content = (
            products.data.map((product)=> 
                <div key={product.id}>
                    <ProductCard
                        product={product}
                    />
                </div>
            )
        )
    }
    return (
        <div>
            <h1 className="font-bold text-2xl">Best Sellers</h1>
            { content }
        </div>
    )
}

export default Home