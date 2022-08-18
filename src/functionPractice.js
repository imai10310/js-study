// // functionについて

// const a = () => {
//   console.log('aaaaaaa');
// };

// // --------------------------------
// a();
// console.log(a());
// // --------------------------------
// // applemusicで音楽を聞く
// const listenByAppleMusic = () => {
//   console.log('applemusic開く');
//   console.log('選曲する');
//   console.log('再生する');
// };

// listenByAppleMusi();
// // 。。で音楽を聞く
// const listenMusic = (application) => {
//   console.log(`${application}を開く`);
//   console.log('選曲する');
//   console.log('再生する');
// };

// // のむ
// const drink = (drinkType) => {
//   console.log(`${drinkType}を飲む`);
// };

// drink('water');
// drink('coke');
// // --------------------------------
// // ３つの数字で計算して表示

// const sum3Num = (num1, num2, num3) => {
//   console.log(`計算結果は${num1 + num2 + num3}です`);
// };
// sum3Num(3, 4, 5);

// // // --------------------------------

// const sum4Num = (num1, num2, num3, num4) => {
//   return num1 + num2 + num3 + num4;
// };

// console.log(sum4Num(1, 2, 3, 4));

// const result = sum4Num(1, 2, 3, 4); //上と一緒のことやっとる
// console.log(result);

// ----------------------------------
// // 数字を２つ使って関数を作る
// const time2Num = (num1, num2) => {
//   const result = num1 * num2;
//   return result;
// };

// // 上記の結果を引数として渡して、関数を作る
// const createCalcResultText = (result) => {
//   const text = `計算結果は${result}です`;
//   return text;
// };

// const result = time2Num(3, 5);
// console.log(createCalcResultText(result););

// console.log(createCalcResultText(time2Num(3, 5)));

// ------------------------------------------

// // 今から始めます、と表示する関数
// const callStart = () => {
//   console.log('今から始めます。');
// };

// // 渡した文字列をただ返却するだけの関数
// const returnText = (text) => {
//   return text;
// };

// // ２つの数字を渡して引き算して返却する関数
// const time2Num = (num1, num2) => {
//   const result = num1 - num2;
//   return result;
// };

// //計算結果は３つ目の問題の結果　「計算結果は・・です。」
// const showResult = (result) => {
//   const text = `計算結果は${result}です。`;
//   return text;
// };

// // これで終わりでーすと表示する関数
// const showText = () => {
//   console.log('これで終わりでーす！');
// };

// // logで渡した文字列をただ返却するだけの関数　：　計算結果は３つ目の問題の結果　「計算結果は・・です。」
// const calcResult = time2Num(3, 1);
// callStart();
// console.log(`${returnText('test')} : ${showResult(calcResult)}`);
// showText();

const date = [100, 500];

const [startNum, endNum] = date;

// console.log(date[0]);
// for each

console.log(startNum);

// const　●●　これが変数

関数名を代入した変数は使うときにa();

consol.log(a);

const consoleLog = (text) => {};

console.log('test');
consoleLog('test');
