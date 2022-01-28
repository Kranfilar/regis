const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const FilterSchema = new Schema({
	file_name: {type: String, required: true},
	file_description: {type: String, required: true},
	when: {type: String, required: true},
	created_at: {type: String, dafault: Date.now()},	
});

module.exports = mongoose.model('Filter', FilterSchema);