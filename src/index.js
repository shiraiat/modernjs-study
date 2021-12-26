// /**
//  * const, let変数
//  */

// // var変数
// // var val1 = "var変数";

// // // var変数は上書き可能
// // val1 = "var変数を上書き";

// // // var変数は再宣言可能
// // var val1 = "var変数を再宣言";

// // console.log(val1);

// // let変数
// // let val2 = "let変数";

// // // let変数は上書き可能
// // val2 = "let変数を上書き";

// // // let変数は再宣言不可
// // let val2 = "let変数を再宣言";

// // console.log(val2);

// // const変数
// // const val3 = "const変数";

// // // const変数は上書き不可
// // val3 = "const変数を上書き";

// // // const変数は再宣言不可
// // const val3 = "const変数を再宣言";

// // console.log(val3);

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "あつし",
//   age: 30,
// };
// val4.name = "Atsushi";
// val4.address = "Toda";

// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ['あつし', 30];

// val5[0] = "Atsushi";
// val5.push("Toda");

// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "あつし";
// const age = 30;

// 従来の方法
// const msg1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(msg1);

// テンプレート文字列を用いた方法
// const msg2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(msg2);

/**
 * アロー関数
 */

//  従来の関数定義
// function func1(str) {
//   return str;
// }

// const func1 = function(str) {
//   return str;
// };

// console.log(func1("func1です"));

// アロー関数を用いた関数定義
// const func2 = (str) => {
//   return str;
// };

// 引数が一つの場合は括弧を省略できる（フォーマッターの設定によっては自動補完される）
// const func2 = (str) => {
//   return str;
// };

// 処理が一行の場合は波括弧とreturnを省略できる
// const func2 = (str) => str;

// console.log("func2です");

// const func3 = (num1, num2) => {
//   return num1 + num2;
// }

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

/**
 * 分割代入
 */

//  オブジェクト
// const myProfile = {
//   name: "あつし",
//   age: 30,
// };

// 従来の方法
// const msg1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(msg1);

// オブジェクトの分割代入
// const { name, age } = myProfile;
// const msg2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(msg2);

// 配列
// const myProfile = ["あつし", 30];

// 従来の方法
// const msg3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(msg3);

// 配列の分割代入（配列の場合はプロパティ名でなく順番で値を受け取る）
// const [name, age] = myProfile;
// const msg4 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(msg4);
