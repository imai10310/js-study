export class Atm {
  #userName;
  #balance;
  #furikomiTesuryou;
  #password = '';

  constructor(userName, balance, furikomiTesuryou) {
    this.#userName = userName;
    this.#balance = balance;
    this.#furikomiTesuryou = furikomiTesuryou;
  }

  // パスワードが入力されているかどうか
  checkPassword() {
    if (this.#password === '') {
      console.log('パスワードを入力して実行してください');
      return false;
    }
    return true;
  }

  // 初期案内
  showInfo() {
    console.log('ようこそ');
    console.log(this.#userName, '様');
  }

  // 残高紹介
  showBalance() {
    console.log(`残高は ${this.#balance} です`);
  }

  // 振り込み
  furikomi(money, targetBank) {
    if (this.checkPassword() === false) return;
    const totalMoney = money + this.#furikomiTesuryou;
    console.log(`${targetBank}に${totalMoney}振り込みます(手数料込み)`);
  }

  // 引き出し
  hikidashi(money) {
    if (this.checkPassword() === false) return;
    const balance = this.#balance;
    this.#balance = this.#balance - money;

    console.log('元の残高 :', balance);
    console.log('引き出し金額 :', money);
    this.showBalance();
  }

  azukeire(money) {
    if (this.checkPassword() === false) return;
    const balance = this.#balance;
    this.#balance = this.#balance + money;

    console.log('元の残高 :', balance);
    console.log('預け入れ金額 :', money);
    this.showBalance();
  }

  setPassword(password) {
    this.#password = password;
  }
}
