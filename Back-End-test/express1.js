//NPM INSTALL REDIS BEFORE

"use strict";

const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const redis = require('redis');

const app = express();
const port = 8100;

app.use(express.json());
app.use(cors());

const dbConn = require("./Database/dbcon");
const pool = dbConn.getPool();

// const redisClient = redis.createClient(process.env.REDIS_URL);
const redisClient = redis.createClient({
  url: "redis://SDC-redis:6379"
})

redisClient.on("connect", function () {
  console.log("Redis client connected");
});

redisClient.on("error", function (err) {
  console.log("Something went wrong " + err);
});

redisClient.ping(function (error, result) {
  if (error) {
    console.error("PING ERROR", error);
  }
  console.log(`Redis ping result: ${result}`);
});

// GET request for car photos where car_id = req param id
// app.get("/car/:id/photos", async (req, res) => {
//   const id = req.params.id;

//   redisClient.get(`car:${id}:photos`, async (error, result) => {
//     if (result !== null) {
//       console.log("Serving from Redis Cache");
//       const photos = JSON.parse(result);
//       res.json(photos);
//     } else {
//       try {
//         const photos = await pool.query(
//           "SELECT * FROM photos WHERE car_id = $1",
//           [id]
//         );
//         redisClient.setex(`car:${id}:photos`, 3600, JSON.stringify(photos.rows));
//         console.log("Serving from Postgres DB");
//         res.json(photos.rows);
//       } catch (err) {
//         console.error(err);
//         res.status(404).send("Not Found");
//       }
//     }
//   });
// });

// // GET request for car at parameter id
// app.get("/car/:id", async (req, res) => {
//   const id = req.params.id;

//   redisClient.get(`car:${id}`, async (error, result) => {
//     if (result !== null) {
//       console.log("Serving from Redis Cache");
//       const car = JSON.parse(result);
//       res.json(car);
//     } else {
//       try {
//         const car = await pool.query(
//           "SELECT cars.*, hosts.* FROM cars JOIN hosts ON cars.host_id = hosts.id WHERE cars.id = $1",
//           [id]
//         );
//         redisClient.setex(`car:${id}`, 3600, JSON.stringify(car.rows));
//         console.log("Serving from Postgres DB");
//         res.json(car.rows);
//       } catch (err) {
//         console.error(err);
//         res.status(404).send("Not Found");
//       }
//     }
//   });
// });

// // GET Request for host info for the owner of car
// app.get("/car/:id/host", async (req, res) => {
//   const id = req.params.id;

//   redisClient.get(`car:${id}:host`, async (error, result) => {
//     if (result !== null) {
//       console.log("Serving from Redis Cache");
//       const host = JSON.parse(result);
//       res.json(host);
//     } else {
//       try {
//         const host = await pool.query(
//           `SELECT hosts.* FROM cars JOIN hosts ON cars.host_id = hosts.id WHERE cars.id = $1`,
//           [id]
//         );
//         redisClient.setex(`car:${id}:host`, 3600, JSON.stringify(host.rows));
//         console.log("Serving from Postgres DB");
//         res.json(host.rows);
//       } catch (err) {
//         console.error(err);
//         res.status(404).send("Not Found");
//       }
//     }
//   });
// });
// // GET REQUEST FOR car_features where car_id = param_id
// app.get("/car/:id/features", async (req, res) => {
//     const id = req.params.id;
//     try {
//         // Check if data is already present in Redis cache
//         redisClient.get(`car_${id}_features`, async (error, result) => {
//             if (result) {
//                 console.log("Cache hit: Retrieving data from Redis cache");
//                 res.json(JSON.parse(result));
//             } else {
//                 console.log("Cache miss: Retrieving data from PostgreSQL database");

//                 const features = await pool.query(`
//                     SELECT features.*, car_features.id AS car_feature_id
//                     FROM car_features
//                     JOIN features ON car_features.feature_id = features.id
//                     WHERE car_features.car_id = $1
//                 `, [id]);

//                 // Store the result in Redis cache for future use
//                 redisClient.setex(`car_${id}_features`, 3600, JSON.stringify(features.rows));

//                 res.json(features.rows);
//             }
//         });
//     } catch (err) {
//         res.status(404).send("Not Found");
//     }
// });

// // GET REQUEST FOR faqs where car_id = param_id
// app.get("/car/:id/faqs", async (req, res) => {
//     const id = req.params.id;
//     try {
//         // Check if data is already present in Redis cache
//         redisClient.get(`car_${id}_faqs`, async (error, result) => {
//             if (result) {
//                 console.log("Cache hit: Retrieving data from Redis cache");
//                 res.json(JSON.parse(result));
//             } else {
//                 console.log("Cache miss: Retrieving data from PostgreSQL database");

//                 const faqs = await pool.query(`SELECT * FROM faq WHERE faq.car_id=$1`, [id]);

//                 // Store the result in Redis cache for future use
//                 redisClient.setex(`car_${id}_faqs`, 3600, JSON.stringify(faqs.rows));

//                 res.json(faqs.rows);
//             }
//         });
//     } catch (err) {
//         res.status(404).send("Not Found");
//     }
// });

// // GET Request for car_extras where car_id = req param id
// app.get("/car/:id/extras", async (req, res) => {
//     const id = req.params.id;
//     try {
//         // Check if data is already present in Redis cache
//         redisClient.get(`car_${id}_extras`, async (error, result) => {
//             if (result) {
//                 console.log("Cache hit: Retrieving data from Redis cache");
//                 res.json(JSON.parse(result));
//             } else {
//                 console.log("Cache miss: Retrieving data from PostgreSQL database");

//                 const extras = await pool.query("SELECT * FROM extras WHERE car_id = $1", [id]);

//                 // Store the result in Redis cache for future use
//                 redisClient.setex(`car_${id}_extras`, 3600, JSON.stringify(extras.rows));

//                 res.json(extras.rows);
//             }
//         });
//     } catch {
//         res.status(404).send("Not Found");
//     }
// });
// // GET Request for reviews where car id = parm_id
// app.get("/car/:id/reviews", async (req, res) => {
// 	const id = req.params.id;
// 	try {
// 		const cacheKey = `car:${id}:reviews`;
// 		const cacheResult = await client.get(cacheKey);

// 		if (cacheResult) {
// 			const reviews = JSON.parse(cacheResult);
// 			console.log("Serving from Redis Cache");
// 			return res.json(reviews);
// 		}

// 		const reviews = await pool.query(
// 			`
//         SELECT reviews.*, users.user_name, users.user_profile_pic AS picture
//         FROM reviews
//         JOIN users ON reviews.user_id = users.id
//         WHERE car_id = $1`,
// 			[id]
// 		);

// 		if (reviews.rowCount === 0) {
// 			return res.status(404).send("Not Found");
// 		}

// 		await redisClient.setex(cacheKey, 3600, JSON.stringify(reviews.rows));
// 		console.log("Serving from Postgres");
// 		res.json(reviews.rows);
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).send("Internal Server Error");
// 	}
// });

// // GET Request for car locations where car_id = req param id
// app.get("/car/:id/locations", async (req, res) => {
// 	const id = req.params.id;
// 	try {
// 		const cacheKey = `car:${id}:locations`;
// 		const cacheResult = await redisClient.get(cacheKey);

// 		if (cacheResult) {
// 			const locations = JSON.parse(cacheResult);
// 			console.log("Serving from Redis Cache");
// 			return res.json(locations);
// 		}

// 		const locations = await pool.query(
// 			`SELECT * FROM locations WHERE car_id = $1`,
// 			[id]
// 		);

// 		if (locations.rowCount === 0) {
// 			return res.status(404).send("Not Found");
// 		}

// 		await redisClient.setex(cacheKey, 3600, JSON.stringify(locations.rows));
// 		console.log("Serving from Postgres");
// 		res.json(locations.rows);
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).send("Internal Server Error");
// 	}
// });

app.listen(port, () => {
	console.log("EXPRESS1.js is listening on port ", port);
	console.log("connecting to postgres pool");


	redisClient.on("connect", () => {
		console.log("Connected to Redis Cache");
	});

	redisClient.on("error", (err) => {
		console.log("Redis Error: " + err);
	});
})