// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('#print');
b.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
kaisu++;
  let i = document.querySelector('input[name="kazuate"]');
  let yoso = i.value;  
  let p = document.querySelector('span#kaisu');
    let p1 = document.createElement('p');  
    p.textContent = kaisu;
    let p2 = document.querySelector('span#answer');
    let p3 = document.createElement('p'); 
    p2.textContent = yoso;
    let p4 = document.querySelector('p#result');
    let p5 = document.createElement('p4');
  if(kaisu < 4){
    console.log(kaisu + "回目の予想: " + yoso);
    if(kotae == yoso){
        if(kaisu < 4){
            console.log("正解！！！");
            p4.textContent = '正解！！！';
        }
        else{
            console.log("答えは" + kotae + "でした、すでにゲームは終わっています。");
            p4.textContent = '答えは' + kotae + 'でした、すでにゲームは終わっています。';
        }
    }
    else{
        if(kotae < yoso){
            console.log("答えは" + yoso + "より小さいよ");
            p4.textContent = '答えは' + yoso + 'より小さいよ';
        }
        else{
            console.log("答えは" + yoso + "より大きいよ");
            p4.textContent = '答えは' + yoso + 'より大きいよ';
        }
    }
}
else{
    console.log(kaisu + "回目の予想: " + yoso);
    console.log("答えは" + kotae + "でした、すでにゲームは終わっています。");
    p4.textContent = '答えは' + kotae + 'でした、すでにゲームは終わっています。';
}
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}

