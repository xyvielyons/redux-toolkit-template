'use client'
import React from 'react'
import { useAppSelector,useAppDispatch } from '@/store/hooks/hooks'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { removeProductFromCart } from '@/store/slices/cartSlice'
import { useDispatch } from 'react-redux'

function page() {
    const cartItems = useAppSelector(state=>state.reducer.cart.cartItems)
    const dispatch = useAppDispatch()
    console.log(cartItems)
    function handleRemove(id:number){
      dispatch(removeProductFromCart(id))
      


    }

  return (
    <div className='bg-blue-50 py-8 px-8 min-h-screen'>
        
        <div className="max-w-xl bg-white rounded-xl mx-auto">
        <h2>{`Shopping cart ${cartItems.length}`}</h2>
        <div className="space-y-3 flex items-center">
          {
            cartItems.map((product:any)=>{

              return <div key={product.id}>
                <Image src={product.image} width={1200} height={768} alt="calcium" className='h-36 w-36 object-cover rounded'></Image>
               <h3 className='font-semibold'>{product.title}</h3>
               <p className='font-semibold text-sm py-2'>{product.price}</p>
               <Button onClick={()=>handleRemove(product.id)} variant="destructive">Remove</Button>
              </div>
            })
          }
          
        </div>
        </div>
    </div>
  )
}

export default page