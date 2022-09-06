// 星をツリー状になるように作成してください
// ツリーの高さを指定できるようにしてください

let str = '';
const row = 9;
// 縦行
for (let i = 0; i < row; i++) {
  // 横列
  for (let j = 0; j < row - i; j++) {
    str += ' ';
  }
  for (let j = 0; j < i * 2 + 1; j++) {
    str += '★';
  }
  console.log(str);
  str = ''; // リセットしてる　から文字にしとる
}
