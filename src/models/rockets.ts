import mongoose from "mongoose";

const RocketSchema = new mongoose.Schema({
  rocketId: {
    type: String,
    required: true,
  },
  rocketType: {
    type: String,
    required: true,
  },
  mission: String,
  launchSpeed: Number,
  currentSpeed: Number,
  lastSpeedIncrease: Date,
  lastSpeedDecrease: Date,
  lastUpdatedMission: Date,
  lastMessageSpeedIncrease: Number,
  lastMessageSpeedDecrease: Number,
  lastMessageMission: Number,
  exploded: Boolean,
  explodedReason: String,
});

module.exports = mongoose.model("Rocket", RocketSchema);
