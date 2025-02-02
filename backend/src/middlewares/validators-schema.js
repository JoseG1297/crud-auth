
import { httpStatus } from '../libs/staticData.js';

export const validateSchema = (schema) => (req, res, next) =>
{
    try
    {
        schema.parse(req.body)
        next()
    }
    catch(error){
        res.status(httpStatus.BAD_REQUEST).json({ message: error.errors});
    }
}