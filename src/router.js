const express = require("express");
const router = express.Router();
const Subscriber = require("./models");
const path = require("path");

// Inside your router.js file
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

router.post("/subscribers", async (req, res) => {
  try {
    const newSubscriber = new Subscriber(req.body);
    console.log(newSubscriber);
    const insertedSubscriber = await newSubscriber.save();
    res.json(insertedSubscriber);

    //  const subscribers = await subscriber.find({});
    //   res.json(subscribers)
  } catch (error) {
    console.log("not  able to find  suscribers");
  }
});

router.get("/subscribers", async (req, res) => {
  try {
    const allsuscriber = await Subscriber.find({});
    res.json(allsuscriber);
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    res.status(500).json({ error: "Could not fetch subscribers" });
  }
});

router.get("/subscribers/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const subscriber = await Subscriber.findById(id);
    if (!subscriber) {
      return res.status(404).json({ error: "Subscriber not found" });
    }
    res.json(subscriber);
  } catch (error) {
    console.error("Error finding subscriber by id:", error);
    res.status(500).json({ error: "Could not find subscriber by id" });
  }
});

router.get("/subscriber/name", async (req, res) => {
  try {
    // Fetch data from the database
    const subscribers = await Subscriber.find(
      {},
      { name: 1, subscribedChannel: 1, _id: 0 }
    );
    res.json(subscribers);
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    res.status(500).json({ error: "Could not fetch subscribers" });
  }
});

module.exports = router;
