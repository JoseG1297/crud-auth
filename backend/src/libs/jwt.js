
import jwt from 'jsonwebtoken';

export const createToken = async (paylodad) => {
    return new Promise((resolve, reject) => {
        jwt.sign(paylodad, 'JWT_CRUD_AUTH', {
            expiresIn: 86400
        }, (error, token) => {
            if (error) {
                console.log(error);
                reject('Error generating token');
            }
            resolve(token);
        });
    })
}