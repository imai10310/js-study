class VendingMachine {
  drinkName;
  price;
  constructor() {
    this.drinkName = this.drinkName;
    this.price = price;
  }
  // お金が入ってるかどうか
  checkPrice(price) {
    if (this.price === '') {
      console.log('お金を入れてください。');
      return false;
    }
    return true;
  }
  // 飲み物を売る
  sellDrink(drinkName, price) {
    if (this.checkPrice() === false) return;
    return this.drinkName;
  }
}
