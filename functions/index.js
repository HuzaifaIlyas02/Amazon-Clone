const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express = require("express");

const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51OmheRCgpVnhkvFBIu1AvQ3br2b84YXQHo9C5loFpcqOhnWQBa4rCUGQbFHcIsfOY0nZK0NH17mQKajTVQuTJhGq00yCvciJMy"
);

// API

// - App config
const app = express();
// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  logger.info("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen command
exports.api = onRequest(app);

// http://localhost:5001/clone-8ecbd/us-central1/api
