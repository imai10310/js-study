//-----------------------------------------------------
// forで１００回回す
// 求数の時は「偶数」
// 奇数の時は「奇数」 と表示する

//●●自分の答え●●
// let resultText = '';
// for (let i = 0; i < 100; i++) {
//   const randomNum = i; //
//   if (randomNum % 2 === 0) {
//     resultText = `偶数です${i}`;
//     // break;
//   }
//   if (randomNum % 2 !== 0) {
//     resultText = `奇数です${i}`;
//   }
// }
// console.log(resultText);

//●●正しい解答
// for (let i = 0; i < 100; i++) {
//   console.log(i);
//   if (i % 2 === 0) {
//     console.log('偶数');
//   } else {
//     console.log('奇数');
//   }
// }

//-----------------------------------------
// forループ50回回す
// 出てきた数字を全部足す

// let saveNum = 0;
// for (let i = 0; i < 50; i++) {
//   saveNum += i;
// }
// console.log(saveNum);
//------------------------------------------------
// 鬼簡単
// 任意の回数回す
// 始めるよーーーーーー
// ***
// おわり！！
// console.log('はじめるよ');
// let str = '';
// for (let i = 0; i < 5; i++) {
//   str += '★';
// }
// console.log(str);
// console.log('おわり');

//------------------------------------------------

// for文10回回す
// 1が出た場合　「１です」
// 7だったら「７です」
// それ以外「うんち」
// 備考（if,switchどちらも作る）

//●●for●●
// for (let i = 0; i < 10; i++) {
//   if (i === 1) {
//     console.log('１です');
//   } else if (i === 7) {
//     console.log('７です');
//   } else {
//     console.log('うんち');
//   }
// }

//●●switch●●
// for (let i = 0; i < 10; i++) {
//   switch (i) {
//     case 1:
//       console.log('1です');
//       break;
//     case 7:
//       console.log('7です');
//       break;
//     default:
//       console.log('うんち');
//       break;
//   }
// }
//--------------------------------------------------------
// for文10回回す
//1,2,4が出た場合　「これは指定された数字です」
//7だったら「７です」
//それ以外「うんち」
//備考（if,switchどちらも作る。）

//●●for文●●
// for (let i = 0; i < 10; i++) {
//   if (i === 1 || i === 2 || i === 4) {
//     console.log('これは指定された数字です。');
//   } else if (i === 7) {
//     console.log('７です');
//   } else {
//     console.log('うんち');
//   }
// }

//●●switch●●
// for (let i = 0; i < 10; i++) {
//   switch (i) {
//     case 1:
//     case 2:
//     case 4:
//       console.log('これは指定された数字です。');
//       break;
//     case 7:
//       console.log('7です');
//       break;
//     default:
//       console.log('うんち');
//       break;
//   }
// }

//------------------------------------------------
//ネットで拾ってきた問題
// let greeting;
// const hour = 15;
// if (hour <= 12) {
//   greeting = 'おはようございます。';
// } else {
//   greeting = 'こんにちは。';
// }
// console.log(greeting);
//------------------------------------------------

//星をツリー状になるように作成してください
//ツリーの高さを指定できるようにしてください

// let str = '';
// const row = 9;
// //縦行
// for (let i = 0; i < row; i++) {
//   //横列
//   for (let j = 0; j < row - i; j++) {
//     str += ' ';
//   }
//   for (let j = 0; j < i * 2 + 1; j++) {
//     str += '★';
//   }
//   console.log(str);
//   str = ''; // リセットしてる　から文字にしとる
// }

// --------------------------------------------------
// https://study-js.manabupanda.net/kadai-list/function/
// 課題　（関数）no.001
// コンソールに「関数が呼び出されました」を表示する

// const str = () => {
//   console.log('関数が呼び出されました');
// };

// str();

// ----------------------------------------------
// 課題　（関数）no.002
// 関数に引数として文字列を渡し、関数の中で使用してみる
// 結果として「関数に渡された値を表示します」「テスト」（関数に渡された値を表示）

// const str = (giveStr) => {
//   return giveStr;
// };
// let showStr = str('テスト');

// console.log(showStr);
// -------------------------------------------

// 課題　（関数）no.003
// 関数を準備して関数を呼び出すことで処理を行う
// 「戻り値の確認です」（戻り値）という文字列を戻す
// 「関数から戻された値を表示します」
// 「戻り値の確認です」を表示
// わからんくて答え見ちゃった

// const showStr = () => {
//   console.log('関数から戻された値を表示します');
//   return '戻り値の確認です。';
// };
// let callStr = showStr();
// console.log(callStr);
// -------------------------------------
// 課題　（関数）no.006
// const process = () => {
//   console.log('関数の中に来ました');
// };

// for (let i = 0; i < 3; i++) {
//   functionLoop = process();
// }
// ------------------------------------
// 課題　（関数）no.007
// const showItem = (times) => {
//   console.log(times);
// };

// for (let i = 1; i < 10; i++) {
//   functionLoop = showItem(`${i}回目`);
// }
// --------------------------------------
// 関数の基本問題
// 数式を関数化させ、ターミナルへ結果表示させる。

// const calc = (num1, num2, num3) => {
//   console.log(num1 + num2 * num3);
// };

// calc(1, 10, 100);
// calc(2, 44, 159);

// ------上記を、値を呼び出し元に一旦返してから表示させる方法で----------

// const calc = (num1, num2, num3) => {
//   return num1 + num2 * num3;
// };

// let calcNum1 = calc(1, 10, 100);
// let calcNum2 = calc(2, 44, 159);

// console.log(calcNum1);
// console.log(calcNum2);

// ---------------------------------------------------
// x,yを比べて数字が大きい方を表示させる

// const compareNum = (x, y) => {
//   if (x < y) {
//     return `定春くんの勝ち！点数：${y}点`;
//   }
//   return `ちゃちゃ丸くんの勝ち！点数：${x}点`;
// };

// let score = compareNum(10, 7);
// console.log(score);

// ---------------------------------------------------
// 上記問題のアレンジ

// const compareNum = (petName1, petName2, x, y) => {
//   if (x < y) {
//     return `${petName1}の勝ち！点数：${y}点`;
//   }
//   return `${petName2}の勝ち！点数：${x}点`;
// };

// const studentName1 = 'ささみ';
// const studentName2 = 'まぐろ';

// let score = compareNum(studentName1, studentName2, 6, 9);

// console.log(score);
// ---------------------------------------------------
// 関数で、1-100までの乱数を120回まわし、ランダムで出た整数を返却し、表示させる
// const random = () => {
//   for (let i = 0; i < 120; i++) {
//     const randomNum = Math.floor(Math.random() * 100);
//     return randomNum;
//   }
// };

// let showNum = random();
// console.log(showNum);
// --------------------------------------------------------
// テキスト8-1　例題を関数化してみる！

// const sumNum = (list) => {
//   let sum = 0;
//   for (let num of list) {
//     sum += num;
//   }
//   console.log(sum);
// };

// let list1 = [1, 2, 3, 4, 45, 6, 7];
// let list2 = [1, 2, 3, 4, 45, 6, 101];
// let list3 = [1, 2, 3, 4, 45, 6, 202];

// sumNum(list1);
// sumNum(list2);
// sumNum(list3);

// ------------------------------------------------
// 上記を戻り値で結果を返してから表示させてみて！

// const sumNum = (list) => {
//   let sum = 0;
//   for (let num of list) {
//     sum += num;
//   }
//   return sum;
// };

// let list1 = [1, 2, 3, 4, 45, 6, 7];
// let list2 = [1, 2, 3, 4, 45, 6, 101];
// let list3 = [1, 2, 3, 4, 45, 6, 202];

// let callSumNum1 = sumNum(list1);
// let callSumNum2 = sumNum(list2);
// let callSumNum3 = sumNum(list3);

// console.log(callSumNum1);
// console.log(callSumNum2);
// console.log(callSumNum3);

// -----------------------------------
// forEachの練習
// 配列の要素を全部足して、合計値を出す
// const list = [1, 2, 3, 4, 5, 6];
// const list2 = [1, 2, 3, 4, 5, 6];

// let sum = 0;
// list.forEach((num, [i]) => {
//   sum += num;
// });
// console.log(sum);

// for (let i = 0; i < list.length; ++i) {
//   console.log(list[i]);
//   console.log(list2[i]);
// }
// -----------------------------------
// 無名関数
// (() => {
//   console.log();
// })();

// -----------------------------
//コールバック関数×forEach　リスト8-11

// currentValue:現在処理してる値
// index:配列のインデックス（0からスタート）
// array:配列そのもの
// 上記３つのを引数として受け取って処理する関数
// const showNum = (currentValue, index, array) => {
//   // ログに結果を表示
//   console.log(`${index + 1}個目の値：${currentValue}`);
// };
// // listという変数に格納された配列
// let list = [1, 2, 3, 4, 5, 6];
// // (配列の変数名).forEach:自動でループしながら配列内の要素に処理を与えられる
// // 配列の各要素にshowNumの関数を処理させようとしている
// // showNum関数を引数として渡している
// list.forEach(showNum);

// -----------------------------

// 無名関数

// const callGreeting = (func) => {
//   func();
// };

// // callGreeting(sayGreeting);
// callGreeting(() => {
//   console.log('おはようございます！');
// });

// ---------------------------------------
// 配列で要素５こ（あいうえお）を回してログで表示

// let list = ['あ', 'い', 'う', 'え', 'お'];
// list.forEach((currentValue) => {
//   console.log(currentValue);
// });

// ---------------------------------------

// const names = ['深田', '今井', '佐藤'];
// for (let i = 0; i < names.length; i++) {
//   console.log(`出席番号${i} : 私の名前は ${names} です`);
// }
// ---------------------------------------
// // 上記をforEachに変換しなさい。

// const names = ['深田', '今井', '佐藤'];
// names.forEach((name, index) => {
//   console.log(`出席番号${index + 1} : 私の名前は ${name} です`);
// });

// ---------------------------------------
// コールバックで、引数を渡す練習
// const hoge = (func) => {
//   func('test');
// };

// hoge((str) => {
//   console.log(str);
// });
// ----------------------------------
//
// const callFunc = (f) => {
//   f('Hello World');
// };

// const list = [callFunc, callFunc, callFunc, callFunc];

// // foreachでcallFuncを回して、helloworldをうけとり、ログを表示
// // 表示方法；「（）回目：(hello world)」

// list.forEach((func, index) => {
//   func((str) => {
//     console.log(`${index + 1}回目：${str}`);
//   });
// });

// -------------------------------------------------
// -------------------------------------------------
// const hoge = (test) => {
//   test();
// };

// hoge('テスト');
// hoge(() => {});
// const fuga = () => {};

// ---------------------------------------------
//
// const hoge = (f) => {
//   f('hello world');
// };
// const piyo = (str) => {
//   console.log(str);
// };

// hoge(piyo);
// // =
// hoge((str) => {
//   console.log(str);
// });
// -------------------------------------------
// progate
// const charactars = [
//   { fName: '真子', country: '日本' },
//   { fName: 'マイケル', country: 'アメリカ' },
//   { fName: 'クララ', country: 'フランス' },
// ];

// for (let i = 0; i < charactars.length; i++) {
//   console.log(
//     `名前は${charactars[i].fName}です。出身は${charactars[i].country}だよ！`,
//   );
// }

// -----------一度オブジェクトを変数に代入してからログに表示させる場合--------------------------------
// const charactars = [
//   { fName: '真子', country: '日本' },
//   { fName: 'マイケル', country: 'アメリカ' },
//   { fName: 'クララ', country: 'フランス' },
// ];

// for (let i = 0; i < charactars.length; i++) {
//   // 一度オブジェクトを変数に代入
//   let charactar = charactars[i];
//   // 代入した変数で変数へ代入
//   console.log(`名前は${charactar.fName}です。出身は${charactar.country}だよ！`);
// }

// -------------------------------------------
// クラス、オブジェクトを作成し、オブジェクト内のプロパティへアクセスしてログを表示させている

// クラスを作成
class AtHome {
  constructor() {
    this.name = '';
    this.job = '';
    this.area = '';
    this.jobNumber = 0;
    this.score1 = 0;
    this.score2 = 0;
    this.score3 = 0;
  }
}
//　employeeを引数として受けとり、ログで結果を表示させている
const EmployeeAccount = (employee) => {
  let sum = employee.score1 + employee.score2 + employee.score3;
  console.log(`社員名：${employee.name}`);
  console.log(`職種：${employee.job}`);
  console.log(`社員番号：${employee.jobNumber}`);
  console.log(`評価点：${sum}`);
  console.log('---------------------------------------');
};

//クラスを元にオブジェクトを作成し、makoという変数に代入している。
let mako = new AtHome();
mako.name = '今井 真子';
mako.job = 'ITアソシエイト';
mako.area = '豊島区・板橋区・北区・文京区';
mako.jobNumber = 21016;
mako.score1 = 6;
mako.score2 = 7;
mako.score3 = 8;
// EmployrrAccountの関数を呼び出し、変数makoを引数として渡している。
EmployeeAccount(mako);

let masaru = new AtHome();
masaru.name = '田村 優';
masaru.job = '営業第一チーム';
masaru.area = '北区';
masaru.jobNumber = 21017;
masaru.score1 = 10;
masaru.score2 = 10;
masaru.score3 = 10;
EmployeeAccount(masaru);

let hiromu = new AtHome();
hiromu.name = '`田中　大夢';
hiromu.job = '営業第２チーム';
hiromu.area = '杉並区';
hiromu.jobNumber = 21018;
hiromu.score1 = 100;
hiromu.score2 = 100;
hiromu.score3 = 8100;
EmployeeAccount(hiromu);
