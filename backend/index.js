const express = require('express');
const pool = require('./pool');
const port = 3001;
const app = express()
const allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
	res.header('Access-Control-Allow-Methods', '')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	if ('OPTIONS' === req.method) {
	  res.send(200)
	} else {
	  next()
	}
  }



app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(allowCrossDomain)


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
