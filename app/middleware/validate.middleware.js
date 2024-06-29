import { validateUser } from "../users/user.model.js";
import {StatusCodes} from 'http-status-codes';

export const validator = async(req,res,next)=>{
    const { error } = validateUser(req.body);
    if(error){
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: error.message });
    }
    next();
}
