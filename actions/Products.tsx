"use server"
import axios from "axios"
import { Product } from "@/types/types"
export async function getAllProducts(){
    try{
        const res = await axios.get("https://fakestoreapi.com/products")
        const products = res.data
        return products as Product[]
    }catch(error){
        console.log(error)
        

    }
}
