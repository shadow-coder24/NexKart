import jwt from "jsonwebtoken"

const generateRefreshToken = (id) => {
    try {
        return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: "7d",
        })
    } catch (error) {
        throw new Error("Error occured while generating the refresh token", error)
    }
}