import type { Ingrediente } from "@/types/interfaces/Ingredientes"

const STORAGE_KEY = 'ingredientes'

export function getIngredients(): Ingrediente[] {

    const data = localStorage.getItem(STORAGE_KEY)
    if(!data){
        return []
    }
    return JSON.parse(data)

}