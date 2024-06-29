import { createUser, deleteUserById, getAllUsers, getUserById,updateUserId } from "./user.repository.js";
import {StatusCodes} from 'http-status-codes';

export const create = async(req,res)=>{
    try{
        const course = await createUser(req.body);
        return res.status(StatusCodes.CREATED).json({course});
    }
    catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:error.toString()});
    }
};

export const getUsers = async(req,res)=>{
    try{
        const users = await getAllUsers();
        return res.status(StatusCodes.OK).json({users});
    }
    catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:error.toString()});
    }
};

export const userById = async(req,res)=>{
    try{
        const {id} = req.params;
        const user = await getUserById(id);
        if(user === undefined){
            return res.status(StatusCodes.NOT_FOUND).json({message : `User with id ${id} not found`});
        }
        return res.status(StatusCodes.OK).json({user});
    }
    catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:error.toString()});
    }
};

export const update = async(req,res)=>{
    try{
        const {id} = req.params;
        const user = await updateUserId(id,req.body);
        if(user === undefined){
            return res.status(StatusCodes.NOT_FOUND).json({message : `User with id ${id} not found`});
        }
        return res.status(StatusCodes.OK).json({user});
    }
    catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:error.toString()});
    }
};
export const deleteUser = async(req,res)=>{
    try{
        const {id} = req.params;
        const user = await deleteUserById(id);
        if(user == -1){
            return res.status(StatusCodes.NOT_FOUND).json({message : `User with id ${id} not found`});
        }
        return res.status(StatusCodes.OK).json({user});
    }
    catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:error.toString()});
    }
};
