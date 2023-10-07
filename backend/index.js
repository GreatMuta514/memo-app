const express = require('express');
const mysql = require('mysql2');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'memo_app'
});

const app = express();
const port = 3001;

app.get('/', (req, res) => {
	res.send('Hello World!');
  });

app.get('/api', (req, res) => {
	connection.query(
		'SELECT * FROM memos',
		function(err, results, fields) {
			if(err) {
				console.log('接続エラー');
				throw err;
			}
			res.json({memo: results[0].content})
		}
	)
});

app.listen(port, () => {
	console.log(`listening on *:${port}`);
})