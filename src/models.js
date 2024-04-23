const mongoose = require("mongoose");
const Subscriber = require("./connect");

const suscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  subscribedChannel: {
    type: String,
    required: true,
  },
});

// we are creating  new  colation
const subscriber = new mongoose.model("subscriber", suscriberSchema);
//collaction  ,sechma
module.exports = subscriber;
