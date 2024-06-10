'use client'
import React from 'react'
import { Button } from './ui/button'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { increment } from '@/store/slices/counterSlice';
import { decrement } from '@/store/slices/counterSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks';
export default function Counter() {

const counter = useAppSelector((state)=>state.counter.value)
const dispatch = useAppDispatch()

  function handleIncrement(){
    dispatch(increment())

  }
  function handleDecrement(){
    dispatch(decrement())

  }

  return (
    <div className='max-w-3xl mx-auto flex flex-col justify-center items-center text-white'>
      <h2 className="scroll-m-20 pb-6 text-4xl font-semibold tracking-tight first:mt-0">
      Redux Counter
    </h2>
    <div className="py-4">
      <div className="flex items-center space-x-6">
       
          <Button onClick={handleIncrement}>
            <FaPlus className='w-6 h-6' />
          </Button>

          <p className='scroll-m-20 text-6xl font-semibold tracking-tight first:mt-0'>
            {counter}
          </p>

          <Button onClick={handleDecrement}>
           <FaMinus className='w-6 h-6' />
          </Button>
    
      </div>
    </div>
    </div>
  )
}
