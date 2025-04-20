import jwt from 'jsonwebtoken';

export const verifyToken = async (req, res, next) => {
    try {
        const auth_token = req.headers.cookies["access_token_ayushgairola"];
        if (!auth_token) return res.status(400).json({ status: true, message: "Unauthorized" });
        const isVerified = jwt.verify(auth_token, process.env.JWT_SECRET_KEY, (err, result) => {
            if (err) {
                return res.status(400).json({ status: false, message: "Session has expired , Please login again!" });
            }
            req.user = result;
            next();
        })

    } catch (error) {
        console.log(error);
    }
}