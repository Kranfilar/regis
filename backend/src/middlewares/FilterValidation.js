const FilterModel = require('../model/FilterModel');
const { isPast } = require('date-fns');

const FilterValidation = async (req, res, next) => {
    const { macaddress, type, title, description, when } = req.body;

    if (!file_name) {
        return res.status(400).json({ error: 'Nome do arquivo é obrigatório'});
    }  else if (!file_description) {
        return res.status(400).json({ error: 'Descrição é obrigatório'});
    } else {
        let exists;
        exists = await TaskModel.findOne(
        {
            'when': {'$eq':new Date(when)},
            'macaddress': {'$in': macaddress}
        });
        if(exists)
        {
            return res.status(429).json({ error: 'Opa você está digitando bem rápido, segura o coração um pouco e tente dentro de alguns segundos'});
        }
	if (!when) {
		when = "Sem Data";
    	}
        next();
    }
}

module.exports = FilterValidation;