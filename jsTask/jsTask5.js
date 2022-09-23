// コールバックを使ってhello worldを表示させる。

// const showStr = () => {
//   console.log('Hello World');
// };

// const callStr = (func) => {
//   func();
// };

// callStr(showStr);
// --------------------------------------
// // 上記を２重コールバックで。
// const showStr = () => {
//   console.log('Hello World');
// };

// const callStr = (func) => {
//   func();
// };
// const callStr2 = (func, func2) => {
//   // callStr(showStr)と一緒の意味になる！
//   func(func2);
// };
// // hello worldを表示させるためには、他２つの関数を動かさなきゃいけない。
// callStr2(showStr, callStr);
// --------------------------------------
// callStr3で上記を３中コールバックで。

// hello worldを表示させる関数
const showStr = () => {
  console.log('Hello World');
};
// showStrを呼び出すコールバック関数
const callStr = (func) => {
  // 引数に設定した関数（=showStr)を実行
  func();
};
// showStrとcallStrを呼び出すコールバック関数（２重目）
const callStr2 = (func, func2) => {
  // callStr(showStr)と一緒の意味になる！
  func(func2);
};
// showStrとcallStrとcallStr2呼び出すコールバック関数（3重目）
const callStr3 = (func, func2, func3) => {
  func2(func, func3);
};
// // hello worldを表示させるためには、他3つの関数を動かさなきゃいけない。
callStr3(showStr, callStr, callStr2);
// ---------------------------------------------
// callStr4で上記を４重コールバックで。
// hello worldを

// const showStr = () => {
//   return 'hello world';
// };

// const callStr = (func) => {
//   func();
// };
// const callStr2 = (func, func2) => {
//   func(func2);
// };
// const callStr3 = (func, func2, func3, func4) => {
//   func(func4);
// };

// let str = callStr3(showStr, callStr, callStr2, callStr3);
// console.log(str);
