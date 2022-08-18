const a = 1;
const b = 2;
let c = a % b;
console.log(c);

比較演算子;
console.log(a === 1); //aが１だった場合
console.log(a !== 1); //aが１じゃない場合
console.log(a > 1); //aが１よりも大きい場合
console.log(a < 1); //aが１よりも小さい場合
console.log(a >= 1); //aが1以上の場合
console.log(a <= 1); //aが1以下の場合

// if文
if (a === 1) {
  console.log('成功');
}

// aが１より小さかったら成功　それ以外は失敗
if (a < 1) {
  console.log('成功');
} else {
  console.log('成功');
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 5; j++) {}
}
