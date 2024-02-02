const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const {Types} = require("mongoose")

// User Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username,
        password = req.body.password;
    
    if (!username || !password) {
        res.status(400).json({
            message: "Invalid username or password",
        });
        return;
    }

    const existingUser = await User.findOne({username});
    if (existingUser) {
        res.status(400).json({
            message: "User already exists with this username",
        });
        return;
    }

    const newUser = await User.create({username,password});
    res.status(201).json({ message: 'User created successfully' })
});

router.get('/courses', async(req, res) => {
    const courses = await Course.find({});
    res.status(200).json({courses});
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const id = req.params.courseId,
        username = req.headers.username,
        password = req.headers.password;
    
    if (!Types.ObjectId.isValid(id)) {
        res.status(400).json({
            message: "Invalid Id!"
        });
        return;
    }

    const course = await Course.findById(id);
    if (!course) {
        res.status(400).json({
            message: "No such course exists!"
        });
        return;
    }

    const user = await User.findOne({username,password});
    user.purchasedCourses.push(id);
    await user.save();

    res.status(201).json({
        message: 'Course purchased successfully'
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const username = req.headers.username,
        password = req.headers.password;
    const user = await User.findOne({username,password}).populate('purchasedCourses');
    res.status(200).json({
        purchasedCourses: user.purchasedCourses
    })
});

module.exports = router