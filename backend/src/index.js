const express = require('express');
const server = express();
server.use(express.json());

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task', TaskRoutes);

server.get('/teste', (req, res) => {
	res.send('Estamos operando na base de testes!');
});

server.listen(3000,() => {
	console.log('API ONLINE');
});