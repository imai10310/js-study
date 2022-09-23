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

// const showStr = () => {
//   console.log('関数から戻された値を表示します');
//   return collectStr;
// };
// let collectStr = showStr('戻り値の確認です');
// console.log(collectStr);

// -----戻り値の練習------------
