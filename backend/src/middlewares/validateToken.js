import { verifyToken } from '../libs/jwt.js';
import { httpStatus } from '../libs/staticData.js';

export const authRequired = async (req, res, next) => {
    try
    {
        const headersToken = req.get('Authtoken');
    
        if(!headersToken){
            return res.status(httpStatus.BAD_REQUEST).json({message: 'No token autorization '});
        }
    
        const tokenVerify = await verifyToken(headersToken);
        console.log('tokenVerify', tokenVerify)
    
        if(!tokenVerify){
            return res.status(httpStatus.BAD_REQUEST).json({message: 'invalid token'});
        }
    
        req.userData = tokenVerify;
        next()
    }
    catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error al intentar valdiar token' , error});
    }
}