# メモアプリ作成で学んだこと

# 1, Expressとは

Expressとは、webアプリケーションの機能を持たせてくれる最小限のフレームワーク。

Expressを使うと、NodejsでWebアプリケーションを簡単に作成できるようになる。

## 使い方

expressをインストール。

```jsx
$ npm install express
```

expressを使って簡単なWebアプリケーションを作成。

```jsx
// index.js
const express = require('express');
const app = express()
const port = 3000;

app.get('/', (_, res) => {
	res.send('Hello World!');
});
```

サーバー立ち上げ。

```jsx
$ node index.js
```

動作確認。

```jsx
curl http://localhost:3000
Hello World !
```

## まとめ

Expressを使うとNodejsで簡単にWebアプリケーションを開発できる。

# 2, JSONについて

## JSON

データ記述方式の一種。

対立関係にあるもの：XML、CSV

### JSON**.stringify()**

javascriptオブジェクトをjson文字列に変換する

```jsx
console.log(JSON.stringify({ x: 5, y: 6 }));
// Expected output: '{"x":5,"y":6}' <= ダブルクォーテーションが付与されていることがわかる
```

### response.json()

json文字列をjavascriptオブジェクトに変換する

```jsx
.then((response) => response.json())
```

## JSON・CSV・XMLの比較

参考記事：[https://media.wemotion.co.jp/technology/【何が違う？】データ形式csv-xml-jsonの特徴を知ろう/](https://media.wemotion.co.jp/technology/%E3%80%90%E4%BD%95%E3%81%8C%E9%81%95%E3%81%86%EF%BC%9F%E3%80%91%E3%83%87%E3%83%BC%E3%82%BF%E5%BD%A2%E5%BC%8Fcsv-xml-json%E3%81%AE%E7%89%B9%E5%BE%B4%E3%82%92%E7%9F%A5%E3%82%8D%E3%81%86/)


### データの読み込みの速さ

データの記述量がJSONの方が少ないのでJSONの方が早いらしい。

```
Json > XML
```

### 複雑なデータを扱う場合

CSVはJSONやXMLでも記述することができる。（CSVよりは複雑な書き方になってしまう。）

```
Json, XML > CSV
```

### XMLとJSONは相互変換できる
```
XML ≒ JSON
```

相互変換可能だが完璧に変換できるわけではないらしい。

### 複数のプログラミング言語で扱う場合
```
JSON
```
- プログラミング言語の種類に依存せず、多くのプログラミング言語で簡単に扱える。
- 特にjavascriptと親和性がある。（JSONはJavaScript Object Notationの略）