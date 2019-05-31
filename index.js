const express = require('express');

const app = express();
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(express.static("./client/dist"));
let name = "Andre";

app.get('/api/one', function(req, res){
	res.json({
		name
	});
});

app.post('/api/one', function(req, res){

	name = req.body.name;
	res.json({
		name
	});
});

const PORT = process.env.PORT || 9007;

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});