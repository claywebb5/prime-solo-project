
# Hey Bill W
This version is my original solo project repo for Prime Digital Academy. A version 2.0 of this application is currently being developed and will be launched June 2022.

## Description

_**Duration:** 2 Week Sprint_

Hey Bill W is a full stack application which takes some of the primary aspects of the Alcoholics Anonymous recovery program into a mobile application. Users are greeting with a randomly generated prayer which they can reflect and add their interpretation to. As well as create reminders and tasks with ability to edit the status of. There is an interactive 12 step program, as well as brief descriptions on the history of AA, history on the founder Bill W, and links to more detailed information as well as contact information for local recover centers.
- Additional features to be added: To the map, ability to see other users’ location when given their unique key, and locations of local recovery centers, community centers, and churches.




### Prerequisites

Software required to install the app.

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/download/)


## Installation

1. Create a database named `prime_app`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The application is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. I recommend using Postico to run those queries as that was used to create the queries.
3. (OPTIONAL) Create a long string of random characters that can replace `superDuperSecret` in the code block below. Here's a site that can help: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning. If this is for testing purposes, then having a high security encryption key is not as necessary.
4. Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
5. Open up your editor of choice and run an `npm install`
6. Run `npm run server` in your terminal
7. Run `npm run client` in your terminal, this command will open up a new browser tab for you!


## Built With

- JavaScript
- React 
- Redux 
- Sagas
- Material UI
- Node.js
- PostgreSQL
- Axios
- Express
- Passport
- Third-Party-API's

## Acknowledgement
Thank you to [Prime Digital Academy](www.primeacademy.io) for equipping me with the skills needed to build this app.


## Support
If you have suggestions or issues, please email me at clay_webb@outlook.com.
