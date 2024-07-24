import jwt from 'jsonwebtoken'

export const generateToken = (payload , signature = process.env.SIGNATURE , expiresIn = process.env.EXPIRES_IN) => {
    const token = jwt.sign(payload , signature , {expiresIn});
    return token;
}

export const verifyToken = (token , signature = process.env.SIGNATURE)=> {
    return jwt.verify(token,signature)
}