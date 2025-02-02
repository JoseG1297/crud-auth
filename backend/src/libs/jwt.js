
import jwt from 'jsonwebtoken';

export const createToken = async (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, 'JWT_CRUD_AUTH', {
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

export  const verifyToken = async (payload) => {
    return new Promise((resolve, reject) => {
        jwt.verify(payload, 'JWT_CRUD_AUTH', {
            expiresIn: 86400
        }, (error, token) => {
            if (error) {
                console.log(error);
                reject('Error verify token');
            }
            resolve(token);
        })
    })
}