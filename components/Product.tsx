'use client'
import React,{useState} from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { Product as Product1 } from '@/types/types'
import { FaBasketShopping } from 'react-icons/fa6'
import { useAppDispatch } from '@/store/hooks/hooks'
import { addProductToCart } from '@/store/slices/cartSlice'
import toast from 'react-hot-toast'
function Product({myproduct}:{myproduct:Product1}) {
  const [existing,setExisting] = useState(false)
  const dispatch = useAppDispatch()
  function handleAdd(){
    dispatch(addProductToCart(
      {
      id: myproduct.id,
      item: myproduct.title,
      price: myproduct.price,
      image: myproduct.image,

     }))
     setExisting(true)
     toast.success("item added successfully")

  }
  return (
    <div className="">
            <div className="">
             <Image src={myproduct.image} width={1200} height={768} alt="calcium" className='h-36 w-36 object-cover rounded'></Image>
             <h3 className='font-semibold'>{myproduct.title}</h3>
             <p className='font-semibold text-sm py-2'>{myproduct.price}</p>
             
             {!existing?(
              <Button onClick={handleAdd}><FaBasketShopping className='mr-4 w-4 h-4' /> Add to cart</Button>

             ):(  <Button variant="destructive" onClick={handleAdd}><FaBasketShopping className='mr-4 w-4 h-4' /> remove from cart</Button>
            )}
            </div>


        </div>
  )
}

export default Product