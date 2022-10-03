export class VendingMachine {
  drinkName;
  price;
  constructor(drinkName, price) {
    this.drinkName = drinkName;
    this.price = price;
  }
  // お金が入ってるかどうか
  checkPrice(money) {
    if (money === '') {
      console.log('お金を入れてください。');
      return false;
    }
    return true;
  }
  // 飲み物を売る
  sellDrink(money) {
    if (this.checkPrice === false) return;
    if (this.Price <= money) {
      return console.log(this.drinkName, 'です！');
    }
    aa;
  }
}
