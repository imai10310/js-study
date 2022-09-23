// 'use strict';
// // ●ループの入れ子
// console.log('外のループ開始');
// for (let i = 0; i < 9; i++) {
//   console.log('内のループ開始');
//   for (let j = 0; j < 8; j++) {
//     console.log(`i:j=${i}:${j}`);
//   }
//   console.log('内のループ終了');
// }
// console.log('外のループ終了');

//-------------------------------------------------

// let nameList = ['今井', '深田', '秋葉', '山田'];
// nameList[9] = '広川';
// console.log(nameList[4]);  //undefinedとなる

//lengthを使って配列をループさせる
// let nameList = ['今井', '深田', '秋葉', '山田'];
// nameList[6] = 'ベンジャミン';
// for (let i = 0; i < nameList.length; i++) {
//   console.log(`${i + 1}人目は${nameList[i]}`);
// }

//for ofを使って配列をループさせる
//nameListの要素を単純にループさせるだけであればめちゃ便利だが、
//インクリメントの変数（i)が存在せず、指定した要素を個別で取り出せない。その場合は通常のforを使う！
// let nameList = ['今井', '深田', '秋葉', '山田'];
// for (let picName of nameList) {
//   console.log(picName);
// }

//☆と★を交互に１１個表示させる（forと条件分岐を使用して）
// let str = '';
// for (let i = 1; i <= 11; i++) {
//   if (i % 2 === 0) {
//     str = '★';
//   } else {
//     str = '☆';
//   }
//   console.log(str);
// }

// let str = '';
// for (let i = 0; i < 11; i++) {
//   if (i % 2 === 0) {
//     str += '☆\n'; //あるものにたされていく
//   } else {
//     str += '★\n';
//   }
// }
// console.log(str);

//----------------------------
// let str = '';
// str = '' + '☆\n'; //1回目
// str = '☆\n' + '★\n'; //2回目
// str = '☆\n★\n' + '☆\n'; //2回目
// console.log(str);
//------------------------------------------------------
// //7-9
// //1-100の乱数が30個格納された配列を用意し、
// //その３０個の数値の最大値、合計値、平均値を計算するプログラムを作る

// //乱数30個の配列を用意する
// let nums = [];
// for (let i = 0; i < 30; i++) {
//   //1-100までの乱数を発生させる。
//   nums[i] = Math.floor(Math.random() * 100);
//   console.log(i + 1 + '番目の値=' + nums[i]);
// }

// let sum = 0;
// let max = 0;
// //最大値を抽出
// for (let num of nums) {
//   sum += num;
//   //変数maxと配列内の要素の値numを比較して、numが大きければmaxの値をnumで上書きする
//   if (num > max) {
//     max = num;
//   }
// }
// let ave = sum / nums.length;
// console.log(`合計値=${sum}`);
// console.log(`平均値=${ave}`);
// console.log(`最大値=${max}`);

//--------------------------------------------------------

// // ●●7-12 breakとcontinueの組み合わせ●●

// //1-10の乱数が5個格納された配列を2個用意する
// //それぞれを分子用、分母用の配列とする
// let childNums = [];
// let motherNums = [];
// for (let i = 0; i <= 4; i++) {
//   childNums.push(Math.floor(Math.random() * 10));
//   motherNums.push(Math.floor(Math.random() * 10));
// }

// //それらをループさせながら文数値（割り算の結果）を計算するプログラムを考える
// //分母が０は計算不可能であるため、０が出た場合は即刻処理中止にする
// //
// for (let motherNum of motherNums) {
//   //分母の値を表示
//   console.log(`分母の値：${motherNum}`);
//   //現在の分母が０かどうか
//   //5つ配列があるうち、一つでも0がある場合、中止になる。　もし、0のみスキップし他の分母は表示させるのであればbreakをcontinueにする
//   if (motherNum === 0) {
//     console.log(`分母が０なので、処理を中止します！`);
//     break;
//   }
//   //分母が０以外だった場合、分子のループスタート
//   for (let childNum of childNums) {
//     //分子の値を表示
//     console.log(`分子の値：${childNum}`);
//     //現在の分子が0かどうか
//     if (childNum === 0) {
//       console.log('分子が０なので、処理を飛ばします！');
//       continue;
//     }
//     let ans = childNum / motherNum;
//     console.log(`分散値:${ans}`);
//   }
// }
//-----------------------------------------------------------------------------------------------------
//●関数

// let list1 = [1, 2, 3, 4, 5, 6, 7];
// let list2 = [8, 9, 10, 11];
// let list3 = [12, 13, 14, 15];

// let sum1 = 0;
// let sum2 = 0;
// let sum3 = 0;

// for (let num of list1) {
//   sum1 += num;
// }

// for (let num of list2) {
//   sum2 += num;
// }
// for (let num of list3) {
//   sum3 += num;
// }

// console.log(`list1の合計${sum1}`);
// console.log(`list2の合計${sum2}`);
// console.log(`list3の合計${sum3}`);

// ==========上のコードを関数を使って簡潔に==================================================================================

// // sumArray:関数名　list:引数
// function sumArray(list) {
//   //合計値用の変数を用意　sum:合計値を格納する変数
//   let sum = 0;
//   // ループさせながら合計値を計算
//   for (let num of list) {
//     sum += num;
//   }
//   // 計算された合計値を表示
//   console.log(`合計値${sum}`);
// }

// let list1 = [1, 2, 3, 4, 5, 6, 7];
// let list2 = [8, 9, 10, 11];
// let list3 = [12, 13, 14, 15];

// // 関数を呼び出している
// // list1にいく→一旦処理が関数にうつる→list2にいく　というような流れ。
// sumArray(list1);
// sumArray(list2);
// sumArray(list3);

// ==========上のコードをアロー関数で記述する============================================================================

// const sumArray = (list) => {
//   let sum = 0;
//   for (let num of list) {
//     sum += num;
//   }
//   console.log(`合計値は：${sum}`);
// };
// let list1 = [1, 2, 3, 4, 5, 6, 7];
// let list2 = [8, 9, 10, 11];
// let list3 = [12, 13, 14, 15];

// sumArray(list1);
// sumArray(list2);
// sumArray(list3);

// ========上のコードを戻り値を使って記述する=========================================================================
// const calcArraySum = (list) => {
//   let sum = 0;
//   for (let num of list) {
//     sum += num;
//   }
//   // 戻り値（関数の呼び出し元に返却している）
//   return sum;
// };

// let list1 = [1, 2, 3, 4, 5, 6, 7];
// let list2 = [8, 9, 10, 11];
// let list3 = [12, 13, 14, 15];

// // 変数の呼び出し元。下記のように変数を用意してそれに代入するのが基本（例外あり）
// let sum1 = calcArraySum(list1);
// let sum2 = calcArraySum(list2);
// let sum3 = calcArraySum(list3);

// console.log(`合計値は：${sum1}`);
// console.log(`合計値は：${sum2}`);
// console.log(`合計値は：${sum3}`);

// ========上のコードに平均値の計算を追加する============================================================================

// const calcArraySum = (list) => {
//   let sum = 0;
//   for (let num of list) {
//     sum += num;
//   }
//   return sum;
// };

// // 平均値を計算する関数を定義。引数listで受け取れるようにしてる
// const calcAve = (list) => {
//   // 合計値の関数を呼び出している（他の関数呼び出しOK)
//   let sum = calcArraySum(list);
//   let length = list.length;
//   // 結果を返却。（returnの次の値は文字でも式でもなんでも大丈夫。）
//   return sum / length;
//   // 丁寧にやるのであれば
//   // let ave =sum/length
//   // return ave   　　　　　　　　でもよい
// };

// let list1 = [1, 2, 3, 4, 5, 6, 7];
// let list2 = [8, 9, 10, 11];
// let list3 = [12, 13, 14, 15];

// let sum1 = calcArraySum(list1);
// let sum2 = calcArraySum(list2);
// let sum3 = calcArraySum(list3);

// let ave1 = calcAve(list1);
// let ave2 = calcAve(list2);
// let ave3 = calcAve(list3);

// console.log(`合計値は：${sum1} 平均値は：${ave1}`);
// console.log(`合計値は：${sum2} 平均値は：${ave2}`);
// console.log(`合計値は：${sum3} 平均値は：${ave3}`);

// -----練習-----------------------------
// const nameList = (names) => {
//   return `私は${names}ですよ！！`;
// };

// let callName1 = nameList(`今井`);
// let callName2 = nameList(`深田`);
// let callName3 = nameList(`ベンジャミン`);

// console.log(callName2);
//-----練習-----------------------------
// const sumNum = (num) => {
//   let sum = 0;
//   for (let calc of num) {
//     sum += calc;
//   }
//   return sum;
// };

// let num1 = [3, 6, 7, 8, 9];
// let num2 = [1, 2, 3, 4, 5];

// let sum1 = sumNum(num1);
// let sum2 = sumNum(num2);

// console.log(`合計値：${sum1}ですよ！`);
// console.log(`合計値：${sum2}ですよ！`);

// ========8-2-2====================================
// 引数のデフォルト値を関数で設定しておく。（任意）
// const concatenate = (lastName = '', firstName = '', space = '') => {
//   return lastName + space + firstName;
// };

// let lName = '今井';
// let fName = '真子';
// let name1 = concatenate(lName, fName, ' ');
// console.log(name1);
// let name2 = concatenate(lName, fName);
// console.log(`第３引数の渡し忘れ:${name2}`);
// let name3 = concatenate(lName);
// console.log(`第2,3引数の渡し忘れ:${name3}`);
// let name4 = concatenate();
// console.log(`第1,2,3引数の渡し忘れ:${name4}`);
// // デフォルト値がある状態でundefinedを渡すと、デフォルト値になる。
// let name5 = concatenate(undefined, 'マイケル');
// console.log(`引数にundefined:${name5}`);

// ============================================
// ●可変長引数
// この関数は、引数で渡された名前を「・」で結合させた文字列を生成する処理を行う
// ...nameとすることで、渡された引数をすべて表示させることができる。
const concatenate = (...name) => {
  // スコープの都合上、concatenatedNameの文字列を格納する変数を作っておく
  let concatenatedName = '';
  for (let i = 0; i < name.length; i++) {
    concatenatedName += name[i];

    if (i != name.length - 1) {
      concatenatedName += '・';
    }
  }
  return concatenatedName;
};

let lName = '今井';
let fName = '真子';
let name1 = concatenate(lName, fName);
console.log(`結合結果：${name1}`);

// -----------------------------------------
