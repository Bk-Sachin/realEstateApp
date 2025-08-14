import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://imgs.search.brave.com/bFLognz8LKvfSIVGMCA9iDAe-sPzUV9Q75VbR-Jxa68/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzYyLzAx/LzBkLzYyMDEwZDg0/OGI3OTBhMjMzNmQx/NTQyZmNkYTUxNzg5/LmpwZw",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
