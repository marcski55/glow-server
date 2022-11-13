import { Request, Response } from 'express';
import { RecipeDao } from '../dao/recipeDao';
import { IRecipe } from '../types/recipe-type';

const recipeDao = new RecipeDao();

export const getRecipeList = async (req: Request, res: Response) => {
  try {
    return res.status(200).json(await recipeDao.getRecipeList());
  } catch (err) {
    return res.status(500).json({ error: 'something went wrong', origError: err });
  }
};

export const putRecipe = async (req: Request, res: Response) => {
  if (req.body) {
    const recipe = req.body as IRecipe;
    if (recipe && recipe.title && recipe.ingredients && recipe.instructions) {
      try {
        return res.status(200).json(await recipeDao.addRecipe(recipe));
      } catch (err) {
        return res.status(500).json({ error: 'something went wrong', origError: err });
      }
    }
  } else {
    return res.status(400).json({ error: 'data must be of type recipe; see types folder' });
  }
};

export const deleteRecipe = async (req: Request, res: Response) => {
  try {
    return res.status(200).json(await recipeDao.deleteRecipe(req.params.recipe));
  } catch (err) {
    return res.status(500).json({ error: 'something went wrong', origError: err });
  }
};
