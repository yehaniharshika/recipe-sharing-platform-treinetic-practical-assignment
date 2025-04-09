export class Recipe {
    image:string;
    recipeTitle: string;
    cookingTime: string;
    ingredients: string;
    instruction: [];

    constructor(image:string,recipeTitle: string, cookingTime: string, ingredients: string, instruction: []) {
        this.image = image
        this.recipeTitle = recipeTitle
        this.cookingTime = cookingTime
        this.ingredients = ingredients
        this.instruction = instruction 
    }
}