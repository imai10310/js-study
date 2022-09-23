// コールバックを使ってhello worldを表示させる。
// const showStr = () => {
//   console.log('Hello World');
// };

// const callStr = (func) => {
//   func();
// };

// callStr(showStr);

// 上記を2重コールバックで。
const showStr = () => {
  console.log('Hello World');
};

const callStr = (func) => {
  func();
};
const callStr2 = (func, func2) => {
  // callStr(showStr)
  func(func2);
};

callStr2(callStr, showStr);

// callStr3で上記を３中コールバックで。

// callStr4で上記を４重コールバックで。
// hello worldを
