export class ShoppingDao {
  public async getShoppingList() {
    return 'getShoppingList() called';
  }

  public async addToShoppingList(list_item) {
    return `addToShoppingList(${list_item}) called`;
  }

  public async deleteFromShoppingList(list_item) {
    return `deleteFromShoppingList(${list_item}) called`;
  }

  public async deleteShoppingList() {
    return `deleteShoppingList() called; will clear all items from list`;
  }
}
