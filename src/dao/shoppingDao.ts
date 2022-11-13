import rethinkdb from 'rethinkdb';
import { IShoppingItem } from '../types/shopping-type';

const r = rethinkdb;
const t = 'shopping';
let connection = null;
r.connect({ host: process.env.DB_HOST_NAME, port: Number(process.env.DB_HOST_PORT), db: 'glow' }, (err, conn) => {
  if (err) throw err;
  connection = conn;
});

export class ShoppingDao {
  public async getShoppingList() {
    let shoppingList;
    await r.table(t).run(connection, function (err, cursor) {
      if (err) throw err;
      cursor.toArray(function (err, result) {
        if (err) throw err;
        shoppingList = result;
      });
    });
    return shoppingList;
  }

  public async addToShoppingList(list_item: IShoppingItem) {
    return r
      .table(t)
      .insert([list_item])
      .run(connection, function (err, result) {
        if (err) throw err;
        return result;
      });
  }

  public async deleteFromShoppingList(list_item) {
    return r
      .table(t)
      .get(list_item)
      .delete()
      .run(connection, function (err, result) {
        if (err) throw err;
        return result;
      });
  }

  public async deleteShoppingList() {
    return r
      .table(t)
      .delete()
      .run(connection, function (err, result) {
        if (err) throw err;
        return result;
      });
  }
}
