export class RecipeDao {
  public async getRecipeList() {
    return 'getRecipeList() called';
  }

  public async getRecipe(recipe) {
    return `getRecipe(${recipe}) called`;
  }

  public async addRecipe(recipe) {
    return `addRecipe(${recipe}) called`;
  }

  public async deleteRecipe(recipe) {
    return `deleteRecipe(${recipe}) called`;
  }
}
