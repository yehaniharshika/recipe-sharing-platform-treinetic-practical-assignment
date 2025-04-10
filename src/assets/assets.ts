import food_1 from "./food_1.png";
import food_2 from "./food_2.png";
import food_3 from "./food_3.png";
import food_4 from "./food_4.png";
import food_5 from "./food_5.png";
import food_6 from "./food_6.png";
import food_7 from "./food_7.png";
import food_8 from "./food_8.png";
import food_9 from "./food_9.png";
import food_10 from "./food_10.png";
import rating_starts from "./rating_starts.png";
import app_store from "./app_store.png";
import play_store from "./play_store.png";
import linkedin_icon from "./linkedin_icon.png";
import facebook_icon from "./facebook_icon.png";
import twitter_icon from "./twitter_icon.png";

export const assets = {
  rating_starts,
  app_store,
  play_store,
  linkedin_icon,
  facebook_icon,
  twitter_icon, 
};

export const recipe_list = [
  {
    id: "1",
    recipeTitle: "Chicken Salad",
    cookingTime: "15 minutes",
    image: food_1,
    ingredients: [
      "Cooked chicken breast",
      "Lettuce",
      "Cherry tomatoes",
      "Cucumber",
      "Olive oil",
      "Lemon juice",
    ],
    instruction: [
      "1. Chop the cooked chicken breast into bite-sized pieces.",
      "2. Wash and slice the lettuce, cherry tomatoes, and cucumber.",
      "3. Toss all the ingredients together in a large bowl.",
      "4. Drizzle with olive oil and lemon juice before serving."
    ],
  },
  {
    id: "2",
    recipeTitle: "Lasagna Rolls",
    cookingTime: "45 minutes",
    image: food_2,
    ingredients: [
      "Lasagna noodles",
      "Ricotta cheese",
      "Ground beef",
      "Mozzarella",
      "Marinara sauce",
      "Italian seasoning",
    ],
    instruction: [
      "1. Cook the lasagna noodles according to package instructions.",
      "2. Mix ricotta cheese with cooked ground beef and Italian seasoning.",
      "3. Spread the mixture onto noodles and roll them up.",
      "4. Place rolls in a baking dish, top with marinara sauce and mozzarella, and bake at 180°C for 25 minutes."
    ],
  },
  {
    id: "3",
    recipeTitle: "Chicken Rolls",
    cookingTime: "30 minutes",
    image: food_3,
    ingredients: [
      "Chicken mince",
      "Onions",
      "Chili flakes",
      "Spring roll wrappers",
      "Egg",
      "Breadcrumbs",
    ],
    instruction: [
      "1. Cook chicken mince with chopped onions and chili flakes.",
      "2. Place a spoonful of the mixture on each spring roll wrapper and roll tightly.",
      "3. Dip in beaten egg and coat with breadcrumbs.",
      "4. Deep fry until golden and crispy."
    ],
  },
  {
    id: "4",
    recipeTitle: "Ripple Ice Cream",
    cookingTime: "10 minutes (+4 hrs freeze)",
    image: food_4,
    ingredients: [
      "Milk",
      "Heavy cream",
      "Sugar",
      "Vanilla extract",
      "Raspberry sauce",
    ],
    instruction: [
      "1. In a bowl, mix milk, cream, sugar, and vanilla until smooth.",
      "2. Pour the mixture into a freezer-safe container.",
      "3. Swirl raspberry sauce on top using a spoon or skewer.",
      "4. Freeze for 4 hours or until firm."
    ],
  },
  {
    id: "5",
    recipeTitle: "Jar Ice Cream",
    cookingTime: "15 minutes",
    image: food_5,
    ingredients: [
      "Ice cream scoops",
      "Chocolate chips",
      "Caramel syrup",
      "Crushed cookies",
      "Whipped cream",
    ],
    instruction: [
      "1. Place a scoop of ice cream into a jar.",
      "2. Add a layer of crushed cookies and drizzle caramel syrup.",
      "3. Repeat layers as desired.",
      "4. Top with whipped cream and chocolate chips before serving."
    ],
  },
  {
    id: "6",
    recipeTitle: "Chicken Sandwich",
    cookingTime: "10 minutes",
    image: food_6,
    ingredients: [
      "Grilled chicken",
      "Lettuce",
      "Tomato slices",
      "Mayonnaise",
      "Sandwich bread",
    ],
    instruction: [
      "1. Spread mayonnaise on slices of sandwich bread.",
      "2. Place grilled chicken, lettuce, and tomato slices on one slice.",
      "3. Cover with another bread slice.",
      "4. Cut and serve immediately or toast if desired."
    ],
  },
  {
    id: "7",
    recipeTitle: "Grilled Sandwich",
    cookingTime: "10 minutes",
    image: food_7,
    ingredients: [
      "Bread slices",
      "Cheddar cheese",
      "Bell peppers",
      "Tomatoes",
      "Butter",
    ],
    instruction: [
      "1. Butter the outside of the bread slices.",
      "2. Layer cheese, bell peppers, and tomato slices inside.",
      "3. Close the sandwich and place on a heated pan.",
      "4. Grill until both sides are golden brown and cheese is melted."
    ],
  },
  {
    id: "8",
    recipeTitle: "Chocolate Cake",
    cookingTime: "35 minutes",
    image: food_8,
    ingredients: [
      "Flour",
      "Cocoa powder",
      "Eggs",
      "Sugar",
      "Butter",
      "Chocolate chips",
    ],
    instruction: [
      "1. Mix flour, cocoa powder, and sugar in a bowl.",
      "2. Add eggs and melted butter, then mix until smooth.",
      "3. Stir in chocolate chips.",
      "4. Pour into cupcake liners and bake at 180°C for 20–25 minutes."
    ],
  },
  {
    id: "9",
    recipeTitle: "Butterscotch Cake",
    cookingTime: "40 minutes",
    image: food_9,
    ingredients: [
      "Flour",
      "Eggs",
      "Butterscotch essence",
      "Whipping cream",
      "Caramel sauce",
    ],
    instruction: [
      "1. Prepare the batter with flour, eggs, and butterscotch essence.",
      "2. Bake in a preheated oven at 180°C for 30 minutes.",
      "3. Once cooled, layer with whipped cream.",
      "4. Drizzle caramel sauce on top before serving."
    ],
  },
  {
    id: "10",
    recipeTitle: "Pineapple Gato Cake",
    cookingTime: "45 minutes",
    image: food_10,
    ingredients: [
      "Flour",
      "Eggs",
      "Whipped cream",
      "Pineapple slices",
      "Sugar",
      "Vanilla essence",
    ],
    instruction: [
      "1. Prepare sponge cake batter with flour, sugar, eggs, and vanilla essence.",
      "2. Bake at 180°C until golden brown and cooked through.",
      "3. Slice the cake and layer with whipped cream and pineapple chunks.",
      "4. Chill before serving for best taste."
    ],
  }
];

