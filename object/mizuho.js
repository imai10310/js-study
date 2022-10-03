import { Atm } from './atm';

export class Mizuho extends Atm {
  #plusMoney = 100; // 預ける時にプラスでお金入る

  constructor(userName, balance) {
    super(userName, balance, 400);
  }

  azukeire(money) {
    super.azukeire(money + this.#plusMoney);
    console.log('みずほは預け入れ時サービスで', this.#plusMoney, '入ります');
  }
}
