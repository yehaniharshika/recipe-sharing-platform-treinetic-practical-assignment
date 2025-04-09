export class Recipe {
    id:string;
    image:string;
    recipeTitle: string;
    cookingTime: string;
    ingredients: string;
    instruction: [];

    constructor(id:string,image:string,recipeTitle: string, cookingTime: string, ingredients: string, instruction: []) {
        this.id = id
        this.image = image
        this.recipeTitle = recipeTitle
        this.cookingTime = cookingTime
        this.ingredients = ingredients
        this.instruction = instruction 
    }
}