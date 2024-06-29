import express from 'express'
import { validator } from '../middleware/validate.middleware.js';
import {create,getUsers,userById,update,deleteUser} from './users.controller.js'
const router = express.Router();


/**
* @swagger
* /user:
*   post:
*     description: create New User
*     responses:
*       200:
*           description: Success
*       500:
*           description: Internal Server Error
*/
router.post('/',validator,create);
/**
* @swagger
* /user:
*   get:
*     description: get All Users
*     responses:
*       201:
*           description: Created
*       500:
*           description: Internal Server Error
*/
router.get('/',getUsers);
/**
* @swagger
* /user/{id}:
*   get:
*     description: get User By Id
*     responses:
*       200:
*           description: Success
*       404:
*           description: Not Found
*       500:
*           description: Internal Server Error
*/
router.get('/:id',userById);
/**
* @swagger
* /user/{id}:
*   put:
*     description: update user by Id
*     responses:
*       200:
*           description: Success
*       404:
*           description: Not Found
*       500:
*           description: Internal Server Error
*/
router.put('/:id',update);
/**
* @swagger
* /user/{id}:
*   delete:
*     description: delete user by Id
*     responses:
*       200:
*           description: Success
*       404:
*           description: Not Found
*       500:
*           description: Internal Server Error
*/
router.delete('/:id',deleteUser);

export default router;
