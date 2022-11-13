import rethinkdb from 'rethinkdb';
import { IRecipe } from '../types/recipe-type';

const r = rethinkdb;
const t = 'recipes';
let connection = null;
r.connect({ host: process.env.DB_HOST_NAME, port: Number(process.env.DB_HOST_PORT), db: 'glow' }, (err, conn) => {
  if (err) throw err;
  connection = conn;
});

export class RecipeDao {
  public async getRecipeList() {
    let recipeList;
    await r.table(t).run(connection, function (err, cursor) {
      if (err) throw err;
      cursor.toArray(function (err, result) {
        if (err) throw err;
        recipeList = result;
      });
    });
    return recipeList;
  }

  public async addRecipe(recipe: IRecipe) {
    return r
      .table(t)
      .insert([recipe])
      .run(connection, function (err, result) {
        if (err) throw err;
        return result;
      });
  }

  public async deleteRecipe(recipe: string) {
    return r
      .table(t)
      .get(recipe)
      .delete()
      .run(connection, function (err, result) {
        if (err) throw err;
        return result;
      });
  }
}
