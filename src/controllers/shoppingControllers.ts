import { Request, Response } from 'express';
import { ShoppingDao } from '../dao/shoppingDao';
import { IShoppingItem } from '../types/shopping-type';

const shoppingDao = new ShoppingDao();

export const getShoppingList = async (req: Request, res: Response) => {
  try {
    return res.status(200).json(await shoppingDao.getShoppingList());
  } catch (err) {
    return res.status(500).json({ error: 'something went wrong', origError: err });
  }
};

export const putOnShoppingList = async (req: Request, res: Response) => {
  const list_item = req.body as IShoppingItem;
  if (list_item && list_item.name && list_item.quantity) {
    try {
      return res.status(200).json(await shoppingDao.addToShoppingList(list_item));
    } catch (err) {
      return res.status(500).json({ error: 'something went wrong', origError: err });
    }
  } else {
    return res.status(400).json({ error: 'data must be of type shopping item; see types folder' });
  }
};

export const deleteFromShoppingList = async (req: Request, res: Response) => {
  try {
    return res.status(200).json(await shoppingDao.deleteFromShoppingList(req.params.item));
  } catch (err) {
    return res.status(500).json({ error: 'something went wrong', origError: err });
  }
};

export const clearShoppingList = async (req: Request, res: Response) => {
  try {
    return res.status(200).json(await shoppingDao.deleteShoppingList());
  } catch (err) {
    return res.status(500).json({ error: 'something went wrong', origError: err });
  }
};
