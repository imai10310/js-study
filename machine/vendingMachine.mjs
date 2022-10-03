export default class VendingMachine {
  drinkName; // 購入する飲み物
  price; // 飲み物の価格
  constructor(drinkName, price) {
    this.drinkName = drinkName;
    this.price = price;
  }
  // お金が入ってるかどうか確認
  checkPrice(money) {
    if (money === '') {
      console.log('お金を入れてください。');
      return false;
    }
    return true;
  }
  // 飲み物を売る
  sellDrink(money) {
    if (this.checkPrice() === false) return;
    if (this.price <= money) {
      return console.log(this.drinkName, 'です！');
    }
  }
}
