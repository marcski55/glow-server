import { Request, Response } from 'express';
import { RecipeDao } from '../dao/recipeDao';

const recipeDao = new RecipeDao();

export const getRecipeList = async (req: Request, res: Response) => {
  return res.status(200).json(await recipeDao.getRecipeList());
};

export const getRecipe = async (req: Request, res: Response) => {
  return res.status(200).json(await recipeDao.getRecipe(req.params.recipe));
};

export const putRecipe = async (req: Request, res: Response) => {
  res.status(200).json(await recipeDao.addRecipe(req.body));
};

export const deleteRecipe = async (req: Request, res: Response) => {
  res.status(200).json(await recipeDao.deleteRecipe(req.params.recipe));
};
