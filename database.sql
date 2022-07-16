-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- User table ------------------------------------------------------------------------------------------------- 
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- Test Data
INSERT INTO "user" ("username", "password")
VALUES ('clay', '1234');

-- Prayer table will be one (user) to many (prayer) ---------------------------------------------- 
CREATE TABLE "prayer" (
    "id" SERIAL PRIMARY KEY,
    "prayer_name" VARCHAR (100),
    "prayer_text" VARCHAR(1000),
    "interpretation" VARCHAR(500),
    "user_id" INT REFERENCES "user"
);

-- Test Insert Data
INSERT INTO "prayer" ("prayer_name", "prayer_text", "interpretation", "user_id")
VALUES ('The Serenity Prayer', 
'God, grant me the serenity to accept the things I cannot change, The courage to change the things I can, And the wisdom to know the difference.', 
'The Serenity Prayer means letting go of situations beyond your control and taking action toward things within your control. It also means being able to know when things are within your control and when things are beyond your control.', 
'1');

-- Test Join Data
SELECT "prayer"."prayer_name", "prayer"."prayer_text", "prayer"."interpretation", "user"."username" FROM "prayer"
LEFT JOIN "user" ON "user"."id"="prayer"."user_id";

-- Twelve Steps table.. -------------------------------------------------------------------------------------------- 
CREATE TABLE "twelve_steps" (
    "id" SERIAL PRIMARY KEY,
    ...
);

-- Test Data
INSERT INTO "" ("", "")
VALUES ('', );

-- Location table will be..  -------------------------------------------------------------------------------------------- 
CREATE TABLE "location" (
"id" SERIAL PRIMARY KEY,
"user_id" INT REFERENCES "user",
...
);

-- Test Data
INSERT INTO "" ("", "")
VALUES ('', );

--<ADD COLUMN TO USER TABLE>-------------------------------------------------------------------------------------------- 
ALTER TABLE "user"
ADD COLUMN "first_name" VARCHAR (50),
ADD COLUMN "last_name" VARCHAR (50), 
ADD COLUMN "email" VARCHAR (100),
ADD COLUMN "phone_number" VARCHAR (100),
ADD COLUMN "street" VARCHAR (100),
ADD COLUMN "city" VARCHAR (100),
ADD COLUMN "state" VARCHAR (100),
ADD COLUMN "zip" VARCHAR (100),
ADD COLUMN "dob" VARCHAR (100),
ADD COLUMN "profile_image" VARCHAR (100),
ADD COLUMN "friends" INTEGER DEFAULT 0,
ADD COLUMN "access_level" INTEGER DEFAULT 1;
--   -------------------------------------------------------------------------------------------- 
--   -------------------------------------------------------------------------------------------- 
--   -------------------------------------------------------------------------------------------- 
--   -------------------------------------------------------------------------------------------- 
