const express = require('express');
const pool = require('./pool');
const port = 3001;

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get('/', (_, res) => {
	res.send('Hello World!');
  });

app.get('/api', (_, res) => {
	pool.query(
		'SELECT * FROM memos',
		function(err, memos) {
			if(err) {
				console.log('接続エラー');
				throw err;
			}
			res.json(memos.rows)
		}
	)
});

app.post('/api/insert/memo', (req, res) => {
	const content = req.body.content;
	const sqlInsert = `INSERT INTO memos (content) VALUES ('${content}')`;
	pool.query(sqlInsert, (err, result) => {
		console.log(err);
		console.log(result);
	});
	res.send(req.body)
});


app.listen(port, () => {
	console.log(`listening on *:${port}`);
})