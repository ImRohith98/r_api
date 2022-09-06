const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  mailid: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: Array,
    default: "admin",
  },
  active: {
    type: Boolean,
    default: true,
  },
  modules: {
    type: Array,
    default: ["home", "taskManager", "timeSheet"],
  },
  phoneNumber: {
    type: Number,
    default: 0000000000,
  },
  address: {
    type: String,
    default: "flat no 000 xx colony yy area",
  },
  position: {
    type: String,
    default: "developer",
  },
  teamLead: {
    type: String,
    default: "xx person",
  },
  mannger: {
    type: String,
    default: "yy person",
  },
  projects: {
    type: Array,
    default: ["global"],
  },
  linkedInUrl: {
    type: String,
    default: "https://localhost:4444/",
  },
  personalMailid: {
    type: String,
    default: "xx@YY.com",
  },
  workingLocation: {
    type: String,
    default: "india",
  },
  location: {
    type: String,
    default: "india",
  },
});

module.exports = mongoose.model("User", userSchema);
