import User from "../models/userModel.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUser = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUser }
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getting users: ", error.message);
    res.status(500).json({ error: "Server error" });
  }
};
