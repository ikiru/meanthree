let mongoose = require("mongoose");

// MOdel creation and validation
let TimeSchema = new mongoose.Schema(
  {
    time: {
      type: String,
      required: [true, "Name cannot be blank"]
    }
  },
  { timestamps: true }
);

mongoose.model("Time", TimeSchema);
