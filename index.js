const express = require('express')

const app = express();

app.use((req, res, next) => {
   console.log("this is middleware1.")
   req.user = "Guest";
   next();
})

app.use("/welcome" , (req, res, next) => {
    res.send(`<h1>Welcome, ${req.user}</h1>`);
})

app.listen(3000, () => {
    console.log("Server is up and running on port 3000! Ready to handle requests.");
})

/*
Task 1:
Create a Custom Middleware Function:
Write a middleware function that adds a new property to the req object.
For example: Add a req.user property with a value of "Guest".
Set Up Routing for the Middleware:
Create a route (/welcome) where this middleware is applied.
In the route handler, respond with a message that includes the req.user value.
The response should be a heading h1. Example : "Welcome, Guest!"
*/