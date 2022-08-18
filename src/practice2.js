// const score = 40;

// if (score >= 80) {
//   console.log('Great~');
// } else if (score >= 50) {
//   console.log('happy');
// } else if (score >= 10) {
//   console.log('death!!');
// }

// ------------------------------------------------------

// 　&&なおかつ　||もしくは　!〜ではない
// const score = 70;
// const name = 'imai';
// if (score >= 50 && name === 'imai') {
//   console.log('Good job!');
// }

// -------------------------------------------------------
// switch文　条件分岐
// const signal = 'red';

// if (signal === 'red') {
//   console.log('stop!');
// } else if (signal === 'blue') {
//   console.log('Go!');
// } else if (signal === 'yellow') {
//   console.log('be careful!');
// }
// // 上記でもできるが
// switch (signal) {
//   case 'red':
//     console.log('stop!');
//     break;
//   case 'blue':
//   case 'green':
//     console.log('Go!');
//     break;
//   case 'yellow':
//     console.log('be careful!');
//     break;
//   default:
//     console.log('no signal!!!!!!!');
// }
// // break;がないと、breakがつく次の処理までされてしまう！
// // if文は｛｝で区切られているから使わない。

// ---------------------------------------------------

// ループ処理　特定の処理を繰り返し行う

//iが１〜１０以下である間iを１ずつ増やしながら次の処理をしてね
// for (let i = 1; i <= 10; i++) {
//   // helloを１０回繰り返す
//   console.log('hello');
//   // helloを繰り返しながらカウンターの値を出す①　``バッククオート　（よく使う）
//   console.log(`hello ${i}`);
//   // helloを繰り返しながらカウンターの値を出す①
//   console.log('hello' + i);
// }

// // while処理　条件が満たされたとき、特定の処理を繰り返し行う(あんま使わない)
// let hp = 100;
// while (hp > 0) {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// }

// let hp = -50;

// do {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// } while (hp > 0);
// // 条件を一番うしろに持っていくことにより、最初だけｈｐを表示させることができる。

// ---------------------------------------------------------
// 関数
// function showad() {
//   console.log('-------------');
//   console.log('-----AD------');
//   console.log('-------------');
// }
// // もしくは下記の書き方（アロー関数）
// const showad = () => {
//   console.log('-------------');
//   console.log('-----AD------');
//   console.log('-------------');
// };

// showad();
// console.log('ImaiMako');
// console.log('FukadaYuya');
// showad();
// console.log('ImaiMako');
// console.log('FukadaYuya');
// showad();
// console.log('ImaiMako');
// console.log('FukadaYuya');

//------------------------------------------------

// 関数
// function sum(a, b, c) {
//   // console.log(a + b + c);
//   return a + b + c;
// }

// sum(1, 2, 3);
// sum(3, 4, 5);

// const total = sum(1, 2, 3) + sum(3, 4, 5);
// console.log(total);

// ------------------------------
// const text = (text1, text2) => {
//   return text1 + text2;
// };

// const result = text('ブルー', ' ハムハム');
// console.log(result);
// // ------------------------------

// // 問題
// const old = (naming, older) => {
//   console.log(`僕は${naming} です${older}です`);
// };

// old('ふかだゆうや', '54');
// old('きょうもとしげお', '54');

// // ----------------------------------------

// // 問題
// const game = (a, b, c) => {
//   return (a + b + c) * 2;
// };
// const result = game(3, 5, 7);
// console.log(`君の持ち点は${result}だよ。すごいね。`);

// // ---------------------------------------

// // // 問題① アラート”OK”を表示する関数を作ろう
// const ring = (alart) => {
//   console.log(alart);
// };
// ring('OK');

// // // 問題②　一つの文字を関数に渡し、その文字をアラートで表示
// const number = (a) => {
//   console.log(a);
// };
// number('みっきー');

// // //  問題③ ２つの数字を関数に渡し、たし算した結果をalertで表示
// const numbering = (a, b) => {
//   return a + b;
// };
// const result = 3 + 5;
// console.log(result);

// // //　問題④３つの数字を関数に渡し、たし算した結果をalertで表示
// const numbering = (one, two, three) => {
//   return one + two + three;
// };
// const result = 3 + 6 + 7;
// console.log(result);

// 　問題⑤関数に"id名"と"色名"を渡し"p"要素の背景を変える

// 問題⑥現在--年--月--日をリターンして結果をアラートする

// const currentDate = new Date();

// const d = new Date();
// const year = d.getFullYear();
// const month = d.getMonth() + 1;
// const day = d.getDate();

// console.log(`${year}年${month}月${day}日`); //${}テンプレートリテラル

// ------------------------------------------------------------
// const myobj = {
//   name: 'イチゴ',
//   price: 300,
// };

// myobj.name = 'メロン';

// console.log(myobj.name);

// オブジェクト
// ------------------------------------------------------------

// let pants = 'Mサイズ';
// pants = 'XSサイズ';
// pants = 'Lサイズ';

// console.log(`このパンツは  ${pants} です。`);

// -------------------------------------
// let num = 1;

// if (num >= 10) {
//   console.log('めっちゃいいね！');
// } else if (num >= 5) {
//   console.log('まあいいね！');
// } else if (num >= 3) {
//   console.log('頑張れよ');
// } else console.log('おいおい・・・');

// let fruit = 'orange';

// if (fruit === 'apple') {
//   console.log('美味しいりんごです');
// } else if (fruit === 'orange') {
//   console.log('いい色のオレンジです');
// } else console.log('フルーツが食べたい');

// let divination = 'ひつじ';
// if (divination === '猫') {
//   console.log(
//     '「世話焼き」や「インドア派」の傾向があります。 男女ともに共通のあるある行動がいくつかあり、例えば「猫に赤ちゃん言葉で話す」などが挙げられます。',
//   );
// } else if (divination === '犬') {
//   console.log(
//     '周りとの関係を大切に考える一面があり、友人や家族、親戚を大切にする傾向があります。 恋愛面においては、「尽くしてくれる」「愛情を表現するのが好き」「寂しがり屋」といった性格が特徴的です。',
//   );
// } else console.log('犬か猫にしてね。');

// let a = 0;
// while (a < 100) {
//   console.log(a);
//   a++;
// }

// --------------------------------------------------

// let onigiri = ['ツナマヨ', '梅干し', '明太子', '鮭'];

// for (let i = 0; i < onigiri.length; i++) {
//   console.log(onigiri[i]); //[i]番目のおにぎりを出力しなさい
// }
// --------------------------------------------------
// for while　１０００回回して

// let round = 0;
// while (round < 1000) {
//   console.log(round);
//   round++;
// }

// for (let i = 0; i < 1000; i++) {
//   console.log(`${i}`);
// }
// --------------------------------------------

// // 関数宣言 function キャメルケース
// function myAlett() {
//   console.log('こんつあ');
//   console.log('今井真子です。');
// }
// myAlett(); //関数呼び出しの命令

// -----------------------------
// function getTriangle(base, heigh) {
//   return (base * heigh) / 2;
// }

// const result = (3, 5);
// console.log(`三角形の面積は${result}`);

// // ↓これをアロー関数で記述すると

// const getTriangle = (base, heigh) => {
//   return (base * heigh) / 2;
// };
// const result = getTriangle(3, 4);
// console.log(`三角形の面積は${result}`);

// console.log('あいうえお');

//----------------------------------------------------
// const otherScores = [20, 10];
// const scores = [80, 30, 20, ...otherScores];
// // console.log(`${scores}`);

// const sum = (a, b) => {
//   console.log(a * b);
// };
// sum(...otherScores);

// ---------------------------------------------------
// 配列　２

// const score1 = 80;
// const score2 = 30;
// const score3 = 20;

// ↓同じだからまとめられる

// const scores = [80, 30, 20];
// console.log(scores);

// scores[2] = 90; //scoresの値を再代入
// console.log(scores);

// console.log(scores.length); //値の数が表示される。

// ---------------------------------------------------
// // ループ処理の組み合わせ３
// const scores = [80, 40, 20];
// scores.push(10, 20); //要素の値の追加
// scores.shift(); //左から１つずつ削除されていくため要素の記入必要なし
// scores.splice(1, 1, 30, 50); //splice(変化が開始する位置、削除数、追加する要素)

// // console.log(`Score:${scores[0]}`);
// // console.log(`Score:${scores[1]}`);
// // console.log(`Score:${scores[2]}`);

// // // ↓for文で書き換えられる！
// for (let i = 0; i < scores.length; i++) {
//   //scores.lengthをつけることで、要素の値が増えても対応できる。
//   console.log(`Score${i}:${scores[i]}`); //indexが０−３の間、１ずつ増やしながら処理してくれ
// }
// --------------------------------------------------------
// // スプレット構文を作ろう！６

// const otherScores = [10, 20];
// const scores = [80, 40, 20, ...otherScores];

// console.log(`Scores:${scores}`);

// // 関数にも使えるよ！
// const sum = (a, b) => {
//   console.log(a + b);
// };
// sum(...otherScores); //sum(10,20)と同じになる

// ---------------------------------------------
// ゆうちゃん豆知識　絶対覚えておけ　参照値渡し
// const a = [1, 2, 3, 4];
// const b = [...a]; //aだと、参照値渡しと言って配列をコピーしていることになり、logを出したとき
// b[0] = 5;
// console.log(b); // [1,2,3,4]
// console.log(a); // [5,2,3,4]

// // ---------------------------------------------
// let c = 1;
// let d = c;
// d = 2
// console.log(c); // 1
// console.log(d); // 2

// // ---------------------------------------------
// 分割代入７
const scores = [80, 40, 20, 90]; //並んでる配列を別々の定数にしたかったら・・？

// const [a, b, c] = scores;
// console.log(a);
// console.log(b);
// console.log(c);

// const [a, b, ...others] = scores; //レスト構文(a,bは定数に戻したいが、othersは配列のままでよい)

// console.log(a);
// console.log(b);
// console.log(others);
// ---------------------------------------------
//for each
// const scores = [80, 40, 20, 90];

// わからない

// −−−−−−−−−−−−−−−−−−−−−−−−−−−−−
// 関数の勉強

const put = () => {
  console.log('hello world');
};
