module.exports = {
	development: {
		username: "root",//usuario y contraseña deben coincidir con los mismos en la base de datos
		password: "root",
		database: "db_red-hot-chili-guitars",
		host: "127.0.0.1",
		dialect: "mysql",
	},
	test: {
		username: "root",
		password: null,
		database: "database_test",
		host: "127.0.0.1",
		dialect: "mysql",
	},
	production: {
		username: "root",
		password: null,
		database: "database_production",
		host: "127.0.0.1",
		dialect: "mysql",
	},
};
