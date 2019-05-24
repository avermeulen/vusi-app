const express = require('express');

const app = express();

app.use(express.static("./client/dist"));

app.get('/api/one', function(req, res){
	res.json({
		name : "Andre",
	});
});

const PORT = process.env.PORT || 9007;

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});