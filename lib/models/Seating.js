import mongoose from "mongoose";

const seating = new mongoose.Schema({
  date: String,
  seatingList: {
    type: [[mongoose.Schema.Types.Mixed]],
    default: [[]],
  },
});

const Seating = mongoose.models.Seating || mongoose.model("Seating", seating);

export default Seating;
