const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
	macaddress: {type: String, required: true},
	file_name: {type: String, required: true},
	file_description: {type: String, required: true},
	when: {type: String, required: true},
	box_number: {type: Number, required: true},
	created_at: {type: String, dafault: Date.now()},	
});

module.exports = mongoose.model('Task', TaskSchema);