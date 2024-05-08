# Todo List REST API

This project implements a REST API for managing subscribers. It handles requests to retrieve all subscribers, retrieve subscriber names, and retrieve a specific subscriber by ID.

## Setup

1. **Database Setup:**
   - Run `node src/connect.js` in  this iam useing mongo db atls.

2. **Start Server:**
   - Create a new file `index.js` to handle database connection and server initialization.
   - Implement the code to connect to the database and start the server in `index.js`.

3. **Handle Requests:**
   - Implement the logic to handle the following endpoints in `app.js`:
     - GET `/subscribers`: Respond with an array of subscribers.
     - GET `/subscribers/names`: Respond with an array of subscribers (only name and subscribedChannel).
     - GET `/subscribers/:id`: Respond with a subscriber with the given ID.

4. **Do Not Modify Existing Files:**
   - Do not modify `src\models\subscribers.js`, `src/createDatabase.js`, and `src/index.js` files provided. These files are there to help you and should not be altered.

## Usage

- Start the server by running `npm start`.
- Use an HTTP client like Postman to make requests to the implemented endpoints.
