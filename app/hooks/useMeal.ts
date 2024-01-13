import axios from "axios"
import { Meal } from "../entities/Meal"


const getMeal = async(id :string|number)=>{
    const res= await axios.get<Meal>(
        'https://654e4e21cbc325355742b673.mockapi.io/meals/' + id)   
    return res.data
}

export default getMeal