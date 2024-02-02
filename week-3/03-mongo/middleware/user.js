const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const username = req.headers.username,
        password = req.headers.password;

    const user = await User.findOne({username});
    if (!user){
        res.status(400).json({
            msg: "Invalid Login Credentials!"
        });
        return;
    }
    next();
}

module.exports = userMiddleware;