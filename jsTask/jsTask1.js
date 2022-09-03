// 内容
// 1~100内で生成された乱数を使用して
// for文を1000回 回してください

// 同じ数字が連続で出た場合
// ・for文を終了し、「同じ数がでた◯と◯！！！」　と表示してください

// 同じ数字が連続で出なかった場合
// ・「ざまあ」と表示してください

// 補足
// ・if文使用
// ・for文使用
// ・変数使用
// ・Math Rondom使用

//ヒント
// まず1000回ループするforをつくる
// その次に乱数を作るって考えてください

let saveNum = null;
for (let i = 0; i < 1000; i++) {
  const randomNum = Math.floor(Math.random() * (100 - 1)) + 100;
  if (saveNum === randomNum) {
    console.log(`同じ数がでた${saveNum}と${randomNum}`);
  } else {
    console.log('ざまあ');
  }
  saveNum = randomNum;
}
