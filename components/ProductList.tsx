import React from 'react'
import { getAllProducts } from '@/actions/Products'
import Product from './Product'
import Link from 'next/link'
async function ProductList() {
    const products = await getAllProducts()
    console.log(products)

  return (
    <div>
        <h2 className='px-16 font-bold text-xl'>Product List ({products && products.length})</h2>
        <h2 className='px-16 font-bold text-xl'>Cart List ({products && products.length})</h2>
        <Link href="/cart">View cart</Link>
       {products && products.length >0 ? (
         <div className="py-8 grid grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto gap-6">
        {products.map((item)=>{
          console.log(item)
            return (
                <Product key={item.id} myproduct={item}></Product>
            )
        })}
         


       </div>
       ):<p>No products found</p>}
        
        
    </div>
  )
}

export default ProductList