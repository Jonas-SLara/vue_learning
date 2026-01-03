
export enum IngredientType{
    PAO = 'PAO',
    CARNE = 'CARNE',
    OPCIONAL = 'OPCIONAL'
}

export interface Ingrediente{
    id: Number
    name: string
    type: IngredientType
}