# indexOfメソッドの挙動を確認するためにconsoleを使用して動作検証を行いました。

- 前から検索する(indexOf)
- 開始位置を指定する(indexOf)
- 後から検索する(lastIndexOf)
- 開始位置を指定する(lastIndexOf)

indexOf()は文字列の中に指定した文字があるか探してあればその位置を返す。
文字列を検索するだけではなく、配列の検索も行うことができる。
検索して見つかった位置のインデックス番号を、見つからなかった場合は-1を返す。

## 実際に書いて挙動を確かめたソースコード
```javascript
// 前から検索する(indexOf)
var str = "abcdefg";
console.log(str.indexOf("a"));
// 0

var str = "abcdefg";
console.log(str.indexOf("z"));
// -1

var str = "abcdefg";
console.log(str.indexOf("g"));
// 6

var result = "";
arrayData = [1, 100, 'test', 'abc', [1, 2]],
result = arrayData.indexOf(100);
console.log(result);
// 2

var result = "";
arrayData = [1, 100, 'test', 'abc', [1, 2]],
result = arrayData.indexOf('abc');
console.log(result);
// 3

var result = "";
arrayData = [1, 100, 'test', 'abc', [1, 2]],
result = arrayData.indexOf([1,2]);
console.log(result);
// -1
```

```javascript
// 開始位置を指定する(indexOf)
var str = "あいうあいう";
console.log(str.indexOf("あ",0));
// 0

var str = "あいうあいう";
console.log(str.indexOf("あ",1));
// 3

var str = "あいうあいう";
console.log(str.indexOf("あ",2));
// 3

var str = "あいうあいう";
console.log(str.indexOf("あ",3));
// 3

var str = "あいうあいう";
console.log(str.indexOf("あ",4));
// -1

var str = "あいうあいう";
console.log(str.indexOf("あ",5));

var str = "あいうあいう";
console.log(str.indexOf("い",0));
// 1

var str = "あいうあいう";
console.log(str.indexOf("い",1));
// 1

var str = "あいうあいう";
console.log(str.indexOf("い",2));
// 4

var str = "あいうあいう";
console.log(str.indexOf("い",3));
// 4

var str = "あいうあいう";
console.log(str.indexOf("い",4));
// 4

var str = "あいうあいう";
console.log(str.indexOf("い",5));
// -1

var str = "あいうあいう";
console.log(str.indexOf("う",0));
// 2

var str = "あいうあいう";
console.log(str.indexOf("う",1));
// 2

var str = "あいうあいう";
console.log(str.indexOf("う",2));
// 2
undefined
var str = "あいうあいう";
console.log(str.indexOf("う",3));
// 5

var str = "あいうあいう";
console.log(str.indexOf("う",4));
// 5

var str = "あいうあいう";
console.log(str.indexOf("う",5));
// 5
```

```javascript
// 後ろから検索する(lastIndexOf)
var str = "abcabc";
console.log(str.lastIndexOf("a"));
// 3

var str = "abcabc";
console.log(str.lastIndexOf("b"));
// 4

var str = "abcあいう";
console.log(str.lastIndexOf("あ"));
// 3

var str = "abcあいう";
console.log(str.lastIndexOf("う"));
// 5

var str = "abcあいう";
console.log(str.lastIndexOf("a"));
// 0

var str = "abcあいう";
console.log(str.lastIndexOf("あ");
// 3
```

```javascript
// 開始位置を指定する(lastIndexOf)
var str = "あいうあいう";
console.log(str.lastIndexOf("あ",0));
// 0

var str = "あいうあいう";
console.log(str.lastIndexOf("あ",1));
// 0

var str = "あいうあいう";
console.log(str.lastIndexOf("あ",2));
// 0

var str = "あいうあいう";
console.log(str.lastIndexOf("あ",3));
// 3

var str = "あいうあいう";
console.log(str.lastIndexOf("あ",4));
// 3

var str = "あいうあいう";
console.log(str.lastIndexOf("あ",5));
// 3

var str = "あいうあいう";
console.log(str.lastIndexOf("い",0));
// -1

var str = "あいうあいう";
console.log(str.lastIndexOf("い",1));
// 1

var str = "あいうあいう";
console.log(str.lastIndexOf("い",2));
// 1

var str = "あいうあいう";
console.log(str.lastIndexOf("い",3));
// 1

var str = "あいうあいう";
console.log(str.lastIndexOf("い",4));
// 4

var str = "あいうあいう";
console.log(str.lastIndexOf("い",5));
// 4

var str = "あいうあいう";
console.log(str.lastIndexOf("う",0));
// -1

var str = "あいうあいう";
console.log(str.lastIndexOf("う",1));
// -1

var str = "あいうあいう";
console.log(str.lastIndexOf("う",2));
// 2

var str = "あいうあいう";
console.log(str.lastIndexOf("う",3));
// 2

var str = "あいうあいう";
console.log(str.lastIndexOf("う",4));
// 2

var str = "あいうあいう";
console.log(str.lastIndexOf("う",5));
// 5
```