# sliceメソッドの挙動を確認するためにconsoleを使用して動作検証を行いました。

- 文字列を切り抜く
- 文字列の任意の範囲を切り抜く
- 引数にマイナスの数値を指定した場合
- 返す戻り値がない場合は空の文字列を返す
- slice()で配列要素を切り抜く
- []の中を切り出す

slice()は文字列や配列などからデータの一部分だけ取り出せるメソッド。
slice()は数値を取り出すことはできない。
slice()にマイナスの値を指定すると後ろから数えた文字列が切り取れる。

## 実際に書いて挙動を確かめたソースコード
```javascript
// 文字列を切り抜く
// きいろを取得したい
var str = "あかあおきいろ";
str = str.slice(4);
console.log(str);
// きいろ

// sliceが切り抜くことができるのは「文字列」で「数値」を切り抜くことはできない
var str = 1234567;
str = str.slice(6);
console.log(str);
// エラーメッセージが返される
// Uncaught TypeError: str.slice is not a function

var str = "1234567";
str = str.slice(6);
console.log(str);
// 7
```

```javascript
// 文字列の任意の範囲を切り抜く
// あかを取得したい
var str = "あかあおきいろ";
str = str.slice(0,2);
console.log(str);
// あか

// あおを取得したい
var str = "あかあおきいろ";
str = str.slice(2,4);
console.log(str);
// あお

// きいろを取得したい
var str = "あかあおきいろ";
str = str.slice(4,7);
console.log(str);
// きいろ
```

```javascript
// 引数にマイナスの数値を指定した場合
var str = "0123456789";
str = str.slice(-2);
console.log(str);
// 89

var str = "0123456789";
str = str.slice(0,-3);
console.log(str);
// 0123456

var str = "0123456789";
str = str.slice(3,-3);
console.log(str);
// 3456
```

```javascript
// 返す戻り値がない場合は空の文字列を返す
var str = "0123456789";
str = str.slice(5,1);
console.log(str);
// 
```

```javascript
// sliceで配列要素を切り抜く
var arry = ['メロン', 'リンゴ', 'イチゴ', 'バナナ'];
var str = arry.slice(1);
console.log(str);
// (3) ["リンゴ", "イチゴ", "バナナ"]
// 0: "リンゴ"
// 1: "イチゴ"
// 2: "バナナ"

//　開始位置と終了位置を指定
var arry = ['メロン', 'リンゴ', 'イチゴ', 'バナナ'];
str = arry.slice(1,3);
console.log(str);
// (2) ["リンゴ", "イチゴ"]
// 0: "リンゴ"
// 1: "イチゴ"
```

```javascript
// []の中を切り出す
var arry = "[Hello.]";
start = arry.indexOf( "[" );
end = arry.indexOf( "]" );
str = arry.slice( start+1, end );
console.log(str);
// Hello.
```