"use strict";

const dotenv = require("dotenv");
dotenv.config();

//SETUP DEPENDECIES:
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

const port = 8100;
app.use(express.json());
app.use(cors());
const { listenerCount } = require("stream");

const dbConn = require("./Database/dbcon");
const pool = dbConn.getPool();

// app.use(
// 	cors({
// 		origin: "*",
// 	})
// );

// imports and mounts body-parser middleware to access contents of request body
const bodyParser = require("body-parser");
const { error } = require("console");

app.use(bodyParser.json());

//making sure that the port is working we can commit the below out after
// app.get("/", (req, res)=>{
//     pool.query(`SELECT * FROM cars`, (error, data)=>{
//         if(error){
//             console.log(error)
//             res.send(error)
//         }

//         res.send(data);
//     })
// })

// GET request for car photos where car_id = req param id
app.get("/car/:id/photos", async (req, res) => {
	const id = req.params.id;
	try {
		const photos = await pool.query("SELECT * FROM photos WHERE car_id = $1", [
			id,
		]);

		res.json(photos.rows);
	} catch (err) {
		res.status(404).send("Not Found");
	}
});

// GET request for car at parameter id
app.get("/car/:id", async (req, res) => {
	const id = req.params.id;
	try {
		const car = await pool.query(
			"SELECT cars.*, hosts.* FROM cars JOIN hosts ON cars.host_id = hosts.id WHERE cars.id = $1",
			[id]
		);
		console.log(res);
		res.json(car.rows);
	} catch (err) {
		res.status(404).send("Not Found");
	}
});

// GET Request for host info for the owner of car
app.get("/car/:id/host", async (req, res) => {
	const id = req.params.id;
	try {
		const host = await pool.query(
			`
                    SELECT hosts.* 
                    FROM cars 
                    JOIN hosts ON cars.host_id = hosts.id 
                    WHERE cars.id = $1`,
			[id]
		);

		res.json(host.rows);
	} catch (err) {
		res.status(404).send("Not Found");
	}
});

// GET REQUEST FOR car_features where car_id = param_id
app.get("/car/:id/features", async (req, res) => {
	const id = req.params.id;
	try {
		const features = await pool.query(
			`
        SELECT features.*, car_features.id AS car_feature_id
        FROM car_features
        JOIN features ON car_features.feature_id = features.id
        WHERE car_features.car_id = $1`,
			[id]
		);

		res.json(features.rows);
	} catch (err) {
		res.status(404).send("Not Found");
	}
});

// GET REQUEST FOR faqs where car_id = param_id
app.get("/car/:id/faqs", async (req, res) => {
	const id = req.params.id;
	try {
		const faqs = await pool.query(`SELECT * FROM faq WHERE faq.car_id=$1`, [
			id,
		]);

		res.json(faqs.rows);
	} catch (err) {
		res.status(404).send("Not Found");
	}
});

// GET Request for car_extras where car_id = req param id
app.get("/car/:id/extras", async (req, res) => {
	const id = req.params.id;
	try {
		const extras = await pool.query("SELECT * FROM extras WHERE car_id = $1", [
			id,
		]);

		res.json(extras.rows);
	} catch {
		res.status(404).send("Not Found");
	}
});

// GET Request for reviews where car id = parm_id
app.get("/car/:id/reviews", async (req, res) => {
	const id = req.params.id;
	try {
		const reviews = await pool.query(
			`
        SELECT reviews.*, users.user_name, users.user_profile_pic AS picture
        FROM reviews
        JOIN users ON reviews.user_id = users.id
        WHERE car_id = $1`,
			[id]
		);

		res.json(reviews.rows);
	} catch (error) {
		console.error(error);
		res.status(404).send("Not Found");
	}
});

app.get("/car/:id/locations", async (req, res) => {
	const id = req.params.id;
	try {
		const locations = await pool.query(
			`SELECT * FROM locations WHERE car_id = $1`,
			[id]
		);

		res.json(locations.rows);
	} catch {
		res.status(404).send("Not Found");
	}
});

app.listen(port, () => {
	console.log("listening on port ", port);
	// console.log("connecting to postgres pool: ", pool)
});
