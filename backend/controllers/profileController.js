const Profile =
  require("../models/Profile");

const saveProfile =
  async (req, res) => {

    try {

      const {
        userId,
        name,
        email,
        bio,
        skills,
        education,
      } = req.body;

      let profile =
        await Profile.findOne({
          userId,
        });

      if (profile) {

        profile =
          await Profile.findOneAndUpdate(
            { userId },
            {
              name,
              email,
              bio,
              skills,
              education,
            },
            { new: true }
          );

      } else {

        profile =
          await Profile.create({
            userId,
            name,
            email,
            bio,
            skills,
            education,
          });

      }

      res.status(200).json(
        profile
      );

    } catch (error) {

      res.status(500).json({
        message:
          "Error saving profile",
      });

    }

  };

const getProfile =
  async (req, res) => {

    try {

      const {
        userId
      } = req.params;

      const profile =
        await Profile.findOne({
          userId,
        });

      res.status(200).json(
        profile
      );

    } catch (error) {

      res.status(500).json({
        message:
          "Error fetching profile",
      });

    }

  };

module.exports = {
  saveProfile,
  getProfile,
};