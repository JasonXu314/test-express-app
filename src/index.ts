import express from 'express';

const app = express();
app.use(express.json());

app.get('/hello', (req, res) => {
	console.log('Received request for /hello');
	if (req.body.name) {
		res.status(200).send(`Hi, ${req.body.name}`);
	} else if (req.query.name) {
		res.status(200).setHeader('Content-Type', 'text/html').send(`
			<html>
				<head>
					<title>Hello Page</title>
				</head>
				<body>
					<h4>Hi, ${req.query.name}</h4>
				</body>
			</html>
		`);
	} else {
		res.status(200).send('Hi');
	}
});

app.get('/', (_, res) => {
	console.log('Received request for /');
	res.status(200).send('Hi');
});

app.listen(process.env.PORT || 3000, () => {
	console.log('Listening on port ', process.env.PORT || 3000);
});
