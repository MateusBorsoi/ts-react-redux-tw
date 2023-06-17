import API from "@/axios/config"
import axios from "axios"

export const getProdutos = async () => {
    try {
    const response = await axios.get('http://localhost:5000/produtos')
    console.log(response.data)
    return response.data  
    } catch (error) {
        throw new Error("Erro ao buscar produtos");
        
    }
}

