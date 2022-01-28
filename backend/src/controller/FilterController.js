const FilterModel = require('../model/FilterModel');

class FilterController {
	async create(req, res) {
		const filter = new FilterModel(req.body);
		await filter
			.save()
			.then(response => {
				return res.status(200).json(response);
			})
			.catch(error => {
				return res.status(500).json(error);
			})
	}

	async update(req,res) {
		await FilterModel.findByIdAndUpdate({'_id': req.params.id});
		
	}		
}


module.exports = new FilterController();