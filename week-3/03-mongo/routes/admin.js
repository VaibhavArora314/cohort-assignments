const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username,
        password = req.body.password;
    
    if (!username || !password) {
        res.status(400).json({
            message: "Invalid username or password",
        });
        return;
    }

    const existingUser = await Admin.findOne({username});
    if (existingUser) {
        res.status(400).json({
            message: "Admin already exists with this username",
        });
        return;
    }

    const newAdmin = await Admin.create({username,password});
    res.status(201).json({ message: 'Admin created successfully' })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    const title = req.body.title,
        description = req.body.description,
        price = req.body.price,
        imageLink = req.body.imageLink;

    const course = await Course.create({title,description,price,imageLink});
    res.status(201).json({
        message: 'Course created successfully', 
        courseId: course.id 
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const courses = await Course.find({});
    res.status(200).json({courses});
});

module.exports = router;