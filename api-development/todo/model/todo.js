const pool = require('./database');

const create = (description) => {
	pool.query(
		'INSERT INTO todo (description) VALUES ($1) RETURNING *', [description]
	)
};

const get = () => pool.query('SELECT * FROM todo');

const remove = (id) => pool.query('DELETE FROM todo WHERE todo_id = $1', [id]);

module.exports = {create, get, remove};