
import { httpStatus } from '../libs/staticData.js';

export const validateSchema = (schema) => (req, res, next) =>
{
    try
    {
        schema.parse(req.body)
        next()
    }
    catch(error){
       return res.status(httpStatus.BAD_REQUEST).json({ message: error?.errors?.map((error) => error?.message)});
    }
}