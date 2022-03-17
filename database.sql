
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- Prayer table will be one (user) to many (prayer)
CREATE TABLE "prayer" (
    "id" SERIAL PRIMARY KEY,
    "prayer" VARCHAR (1000),
    "interpretation" VARCHAR(1000),
    "user_id" INT REFERENCES "user"
);

-- Twelve Steps table..
CREATE TABLE "twelve_steps" (
    "id" SERIAL PRIMARY KEY,
    ...
);

-- Location table will be..
CREATE TABLE "location" (
"id" SERIAL PRIMARY KEY,
"user_id" INT REFERENCES "user",
...
);