const mongoose =
  require("mongoose");

const profileSchema =
  new mongoose.Schema({

    userId: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      default: "",
    },

    skills: {
      type: String,
      default: "",
    },

    education: {
      type: String,
      default: "",
    },

  });

module.exports =
  mongoose.model(
    "Profile",
    profileSchema
  );