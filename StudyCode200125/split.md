# splitメソッドの挙動を確認するためにconsoleを使用して動作検証を行いました。

- カンマで分割
- 文字で区切る
- スラッシュで分割
- パイプで分割
- セミコロンで分割
- 正規表現で指定する

split()は文字列を区切り文字で分割し、その結果を配列として取得できる。
戻り値は文字列を区切り文字で分割し、その結果を配列を返す。
配列として取得されるので文字列を連結することができる。

## 実際に書いて挙動を確かめたソースコード
```javascript
// カンマで分割
var arry = [];
var str = "ABC,DEF,GHI,JKL,MN";
arry = str.split(",");
console.log(arry);
// (5) ["ABC", "DEF", "GHI", "JKL", "MN"]
// 0: "ABC"
// 1: "DEF"
// 2: "GHI"
// 3: "JKL"
// 4: "MN"
console.log(arry[0]);
// ABC
console.log(arry[1]);
// DEF
console.log(arry[2]);
// GHI
console.log(arry[3]);
// JKL 
console.log(arry[3]);
// MN

// 配列の要素数で指定する
arry = str.split(",",2);
console.log(arry);
// (2) ["ABC", "DEF"]
// 0: "ABC"
// 1: "DEF"

// 存在する配列の要素数は表示されるが、それ以外は表示されない。
arry = str.split(",",6);
console.log(arry);
// (5) ["ABC", "DEF", "GHI", "JKL", "MN"]
// 0: "ABC"
// 1: "DEF"
// 2: "GHI"
// 3: "JKL"
// 4: "MN"

// lengthを使えは配列の長さを戻り値として返してくれる
var arry = [];
var str = "ABC,DEF,GHI,JKL,MN";
arry = str.split(",").length;
console.log(arry);
// 5
```

```javascript
// 文字で区切る
var arry = 'aaabbbccc';
str = arry.split("bbb");
console.log(str);
// (2) ["aaa", "ccc"]
// 0: "aaa"
// 1: "ccc"
```

```javascript
// スラッシュで分割
var arry = [];
var str = "https://aaa.com/bbb/ccc/ddd/eee/index.html";
arry = str.split("/");
console.log(arry);
// (8) ["https:", "", "aaa.com", "bbb", "ccc", "ddd", "eee", "index.html"]
// 0: "https:"
// 1: ""
// 2: "aaa.com"
// 3: "bbb"
// 4: "ccc"
// 5: "ddd"
//  6: "eee"
// 7: "index.html"
console.log(arry[0] + "//" + arry[2] + "/" + arry[7]);
// https://aaa.com/index.html
console.log(arry[0] + "//" + arry[2] + "/" + arry[6] + "/" + arry[7]);
// https://aaa.com/eee/index.html

// URLに含まれている「000111」を取り出す処理
var arry = [];
var str = "https://aaa.com/bbb/000/111/222";
arry = str.split("/");
console.log(arry[4] + arry[5]);
// 000111

// URLに含まれている「000222」を取り出す処理
var arry = [];
var str = "https://aaa.com/bbb/000/111/222";
arry = str.split("/");
console.log(arry[4] + arry[6]);
// 000222
```

```javascript
// パイプで分割
// Cookieに書き込んで挙動を確かめる
var arry = '1|2|3|';
var str = "data=" + arry;
document.cookie = str;

str = str.split("|");
console.log(str);
// (4) ["data=1", "2", "3", ""]
// 0: "data=1"
// 1: "2"
// 2: "3"
// 3: ""
```

```javascript
// セミコロンで分割
var arry = "goodmorning;greeting2=goodafternoon;greeting3;";
var str = "data=" + arry;
document.cookie = str;

str = str.split(";");
console.log(str);
// (4) ["data=goodmorning", "greeting2=goodafternoon", "greeting3", ""]
// 0: "data=goodmorning"
// 1: "greeting2=goodafternoon"
// 2: "greeting3"
// 3: ""
console.log(str[0] + str[1]);
// data=goodmorninggreeting2=goodafternoon
```

```javascript
// 正規表現で指定する
var arry = "赤色 黄色 青色";
var str = arry.split(/\s/);
console.log(str);
// (3) ["赤色", "黄色", "青色"]
// 0: "赤色"
// 1: "黄色"
// 2: "青色"
```