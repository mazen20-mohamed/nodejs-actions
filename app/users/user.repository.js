
// import { read } from 'fs';
import * as fs from 'fs/promises'
import path from 'path'
import {cwd} from 'process'
import { v4 as uuid } from 'uuid';
const filePath = path.join(cwd(),'app','database','users.json');


const writeOnFile = async(users)=>{
    await fs.writeFile(filePath,JSON.stringify(users));
}

export const createUser = async(user) =>{
    const users = await getAllUsers();
    user.id = uuid();
    users.push(user);
    await writeOnFile(users);
    return user;
};

export const getAllUsers = async()=>{
    return JSON.parse(await fs.readFile(filePath,{ encoding: 'utf8' }));
}

export const getUserById = async(id)=>{
    const users = await getAllUsers();
    return users.find(user=> user.id == id);
}

export const updateUserId = async(id,updatedUser)=>{
    const users = await getAllUsers();
    const user = users.find(user=> user.id == id);
    if(user === undefined){
        return user;
    }
    const newUser = { ...user, ...updatedUser };
    const newUsers = users.map((u) => {
        if (u.id == id) {
          return newUser;
        }
        return u;
      });
    await writeOnFile(newUsers);
    return newUser;
}

export const deleteUserById = async(id)=>{
    const users = await getAllUsers();
    const userIndex = users.findIndex((user) => user.id == id);
    if(userIndex == -1){
        return userIndex;
    }

    const deletedUser = users.splice(userIndex,1);
    await writeOnFile(users);
    return deletedUser;
}

