import { Request, Response } from 'express';
import { ShoppingDao } from '../dao/shoppingDao';

const shoppingDao = new ShoppingDao();

export const getShoppingList = async (req: Request, res: Response) => {
  return res.status(200).json(await shoppingDao.getShoppingList());
};

export const putOnShoppingList = async (req: Request, res: Response) => {
  res.status(200).json(await shoppingDao.addToShoppingList(req.body));
};

export const deleteFromShoppingList = async (req: Request, res: Response) => {
  res.status(200).json(await shoppingDao.deleteFromShoppingList(req.body));
};

export const clearShoppingList = async (req: Request, res: Response) => {
  res.status(200).json(await shoppingDao.deleteShoppingList());
};
