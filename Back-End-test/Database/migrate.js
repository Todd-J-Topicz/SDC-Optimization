const fs = require("fs");
const dbcon = require("./dbcon");
const pool = dbcon.getPool();

pool.connect((err, client, release) => {
	if (err) {
		return console.error("Error acquiring client", err.stack);
	}
	console.log(process.env.DATABASE_URL);
	console.log("Connected to database");
});

console.log("Running SQL migrate...");

const migrateQuery = fs.readFileSync("./Database/migrate.sql", {
	encoding: "utf8",
});

pool.query(migrateQuery, (err, res) => {
	if (err) console.log(err);
	else console.log("Migrate Completed!");
	pool.end();
});
