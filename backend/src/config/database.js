const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/regis';

mongoose.connect(url, { useNeweUrlParser: true });

module.exports = mongoose;