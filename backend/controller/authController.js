import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateTokens_and_setCookies from "../utils/generateTokens.js";

export const userSignup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const user = await User.findOne({ userName });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    const BoyProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const GirlProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      userName,
      password: hashPassword,
      gender,
      profilePhoto: gender === "male" ? BoyProfilePhoto : GirlProfilePhoto
    });

    if (newUser) {
      generateTokens_and_setCookies(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePhoto: newUser.profilePhoto
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    const isPasswordCorrect = await bcrypt.compare(password, user?.password);

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    generateTokens_and_setCookies(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      profilePhoto: user.profilePhoto
    });
  } catch (error) {
    console.log("Error in Login", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const userLogout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out succesfully" });
  } catch (error) {
    console.log("Error in logout", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
