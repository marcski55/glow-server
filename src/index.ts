import * as dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import https from 'node:https';
import fs from 'node:fs';
import {
  getShoppingList,
  putOnShoppingList,
  deleteFromShoppingList,
  clearShoppingList
} from './controllers/shoppingControllers';
import { getRecipeList, putRecipe, deleteRecipe } from './controllers/recipeControllers';

const PORT = process.env.GLOW_API_PORT;
export const APP = express();
APP.use(cors());

/** Set up Express Router */
APP.use(express.json());
APP.use(express.urlencoded({ extended: true }));
APP.use(cors());

/** Set up Recipe Endpoints */
APP.get('/recipes', getRecipeList);
APP.put('/recipe', putRecipe);
APP.delete('/recipe/:recipe', deleteRecipe);

/** Set up Shopping Endpoints */
APP.get('/shopping_list', getShoppingList);
APP.put('/shopping_list', putOnShoppingList);
APP.delete('/shopping_list/:item', deleteFromShoppingList);
APP.delete('/shopping_list', clearShoppingList);

const httpsOptions = {
  key: fs.readFileSync(process.env.KEY_FILE),
  cert: fs.readFileSync(process.env.CERT_FILE)
};

https.createServer(httpsOptions, APP).listen(PORT, () => {
  console.log('Hi! We are up and listening on port: ', PORT);
});
