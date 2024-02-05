const jwt = require("jsonwebtoken");
const JWT_SECRET = "SecretPass";

const createJWT = (payload) => {
    const token = jwt.sign(payload,JWT_SECRET);
    return token;
}

const verifyJWT = (token) => {
    try {
        jwt.verify(token,JWT_SECRET);
        return true;
    } catch (error) {
        return false;
    }
}

const decodeJWT = (token) => {
    return jwt.decode(token);
}

module.exports = {
    createJWT,
    verifyJWT,
    decodeJWT
}