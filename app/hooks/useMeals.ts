import axios from "axios"
import { Meal } from "../entities/Meal"


 const getMeals = async()=>{
    const res= await axios.get<Meal[]>(
        'https://654e4e21cbc325355742b673.mockapi.io/meals')
    return res.data

}

export default getMeals