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

console.log("Running SQL seed...");

const seedQuery = fs.readFileSync("./seed.sql", { encoding: "utf8" });

pool.query(seedQuery, (err, res) => {
	if (err) console.log(err);
	else console.log("Seed Completed!");
	pool.end();
});
