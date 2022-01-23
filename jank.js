// let your_hand = "ぐー";
// let com_hand = "ぐー"
// if (your_hand == "ぐー"){
//     console.log('引き分け');
// }else if(your_hand == "ちょき"){
//     console.log("負け");
// }else{
//     console.log("かち");
// }

// let my_hand = "ぐー";
// console.log("負け");






var c = 0;
// c= 3 *a +b;

// var b = c%3;
// var a = (c-b)/3;
// console.log(c+"割る3は"+a+"あまり"+b+"です");


// ぐーが0 ちょきが1 パーが2
var com_hand = 0;
var my_hand = 1;

var f_fn = com_hand - my_hand;
var s_fn = f_fn +3;
var t_fn = s_fn %3;

if(t_fn==0){
    console.log("引き分け");
}else if(t_fn==1){
    console.log("勝ち");
}else if(t_fn==2){
    console.log("負け");
}else{
    console.log("ただし値を入力してください");
}



// function full_name() {
//     console.log("いぐおさんこんにちは");
// }

// full_name();

function full_name2(s_name) {
    console.log(s_name + "さん");
}

console.log("購入履歴");

console.log(full_name2("ムサシ")+"のお気に入りリスト");
// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

function full_name3(f_name) {
    return f_name +"さん"
}

console.log("購入履歴");

console.log(full_name3("ムサ")+"のお気に入りリスト")



function fruits(pain) {
    console.log(pain*50);
}

fruits(9);

function fruit(apple) {
    var value = apple * 40;
    return value;
}


console.log(fruit(20));


var orange = 300;

// apple10 + orange
console.log(fruit(10) + orange);
console.log("musasi");
console.log(fruits(10) + orange)
