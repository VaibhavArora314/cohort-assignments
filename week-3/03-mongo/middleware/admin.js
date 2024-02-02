const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username,
        password = req.headers.password;

    const adminUser = await Admin.findOne({username,password});
    if (!adminUser){
        res.status(400).json({
            msg: "Invalid Login Credentials!"
        });
        return;
    }
    next();
}

module.exports = adminMiddleware;