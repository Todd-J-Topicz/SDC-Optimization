CREATE TABLE IF NOT EXISTS hosts(
    id serial NOT NULL, 
    host_name varchar(30), 
    host_profile_pic varchar(400),
    host_rating int, 
    host_badge varchar(200),
    host_trips int, 
    host_joined_date date,
    host_response_time int,
    host_badge_icon varchar(200),
    host_training_icon varchar(200),
    host_training_description varchar(400),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS cars(
    id serial NOT NULL, 
    car_make varchar(50), 
    car_model varchar(50),
    car_year int, 
    car_name varchar(50),
    car_description varchar(5000),
    car_max_distance int, 
    car_additional_miles_fee int, 
    car_parking_details varchar(1000), 
    car_guidelines varchar(1000),
    car_tolls_fastrak varchar(5000),
    car_tickets varchar(5000),
    car_number_of_trips int, 
    car_delivery_range int, 
    car_number_of_doors int, 
    car_mpg int, 
    car_number_of_seats int, 
    car_gas varchar(50),
    car_cost_per_day int, 
    host_id int, 
    FOREIGN KEY (host_id) REFERENCES hosts(id),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS features(
    id serial NOT NULL, 
    feature_description varchar(30), 
    feature_icon varchar(200),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS car_features(
    id serial NOT NULL, 
    feature_id int, 
    car_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (car_id) REFERENCES cars(id),
    FOREIGN KEY (feature_id) REFERENCES features(id)
);

CREATE TABLE IF NOT EXISTS photos(
    id serial NOT NULL, 
    photo_locations varchar(300), 
    car_id int, 
    FOREIGN KEY (car_id) REFERENCES cars(id),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS faq(
    id serial NOT NULL, 
    faq_question varchar(300), 
    faq_answer varchar(300), 
    car_id int, 
    FOREIGN KEY (car_id) REFERENCES cars(id),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users(
    id serial NOT NULL, 
    user_name varchar(30),
    user_password varchar(20), 
    user_email varchar(100),
    user_age int, 
    user_profile_pic varchar(200),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS reviews(
    id serial NOT NULL, 
    review_rating_cleanliness int, 
    review_rating_maintainence int, 
    review_rating_communication int, 
    review_rating_convenience int, 
    review_rating_accuracy int, 
    review_message varchar(3000),
    review_date date, 
    review_host_response varchar(2000),
    car_id int, 
    user_id int,
    FOREIGN KEY (car_id) REFERENCES cars(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS reports(
    id serial NOT NULL, 
    report_categories varchar(30),
    report_description varchar(300),
    car_id int, 
    user_id int,
    FOREIGN KEY (car_id) REFERENCES cars(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS reservations(
    id serial NOT NULL, 
    reservation_start_date date, 
    reservation_end_date date, 
    reservation_start_time time, 
    reservattion_end_time time, 
    reservation_protection_plan_fee int, 
    reservation_trip_fee int, 
    reservation_young_driver_fee boolean, 
    reservation_total_cost int, 
    reservation_extras_cost int,
    car_id int, 
    user_id int,
    FOREIGN KEY (car_id) REFERENCES cars(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS extras(
    id serial NOT NULL, 
    extra_number_available int, 
    extra_cost int, 
    extra_description varchar(500),
    extra_name varchar(100),
    car_id int, 
    FOREIGN KEY (car_id) REFERENCES cars(id),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS locations(
    id serial NOT NULL, 
    location_type varchar(50),
    location_name varchar(500),
    location_address varchar(500),
    location_cost int,
    location_lat dec(9,6), 
    location_long dec(9,6),
    car_id int, 
    FOREIGN KEY (car_id) REFERENCES cars(id),
    PRIMARY KEY (id)
);