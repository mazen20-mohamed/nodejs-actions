import joi from 'joi';

const userSchema = joi.object({
    firstName: joi.string().min(3).trim().required(),
    lastName: joi.string().min(3).trim().required(),
    email: joi.string().email().required(),
    phoneNumber : joi.number().required(),
  });
  
export const validateUser = (user) => {
    return userSchema.validate(user);
};
 