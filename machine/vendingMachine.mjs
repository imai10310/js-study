export default class VendingMachine {
  drinkName; // 購入する飲み物
  price; // 飲み物の価格
  constructor(drinkName, price) {
    this.drinkName = drinkName;
    this.price = price;
  }
  // お金が入ってるかどうか確認
  checkPrice(money) {
    // trueじゃなかったら　moneyがfalseだったら
    if (!money) {
      console.log('お金を入れてください。');
      return false;
    }
    return true;
  }
  // 飲み物を売る
  sellDrink(money) {
    // お金が入っているか確認して、もし投入したお金が本体価格より少なかったら「不足：●円」と表示。
    if (!this.checkPrice(money)) return;
    if (this.price > money) {
      console.log(`不足：${this.price - money}円`);
    } else if (this.price <= money) {
      console.log(
        `どうぞ、${this.drinkName}です！ お釣りは${money - this.price}円です。`,
      );
    }
  }
}
