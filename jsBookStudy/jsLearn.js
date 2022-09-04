'use strict';
// ●ループの入れ子
console.log('外のループ開始');
for (let i = 0; i < 9; i++) {
  console.log('内のループ開始');
  for (let j = 0; j < 8; j++) {
    console.log(`i:j=${i}:${j}`);
  }
  console.log('内のループ終了');
}
console.log('外のループ終了');
