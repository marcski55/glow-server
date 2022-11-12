export interface IRecipe {
  description?: string;
  ingredients: IIngredient[];
  instructions: Record<string, string>;
  title: string;
}

export interface IIngredient {
  amount: string;
  name: string;
}
