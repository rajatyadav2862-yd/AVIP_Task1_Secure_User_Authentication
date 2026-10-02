const express = require("express");
const User = require("../models/User");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/profile", protect, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found."
      });
    }

    res.status(200).json({
      success: true,
      message: "Protected profile data retrieved successfully.",
      user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while fetching profile."
    });
  }
});

module.exports = router;