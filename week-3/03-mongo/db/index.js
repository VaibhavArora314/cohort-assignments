const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/week-3-mongo");

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
//   createdCourses: [{
//     type: mongoose.Schema.ObjectId,
//     ref: 'Course'
//   }]
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourses: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Course'
  }]
});

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
//   creator: {
//     type: mongoose.Schema.ObjectId,
//     ref: 'Admin'
//   }
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
