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

// let num = 0;
// for (let i = Math.random() * 1000; i < 100; i++) {
//   console.log(i);
// }

//ヒント
// まず1000回ループするforをつくる
// その次に乱数を作るって考えてください

let saveNum = i; //前の答えを格納する
let rondomNum = Math.random() * 100; //1-100の乱数を指示
for (let i = 0; i < 1000; i++) {
  let compareNum = rondomNum;
  if (i === rondomNom) {
    console.log('同じ数が出た' + i + 'と' + compareNum);
  } else {
    console.log('ざまあ');
  }
}
