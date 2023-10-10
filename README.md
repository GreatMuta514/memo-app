# メモアプリ作成で学んだこと

# Expressとは

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

