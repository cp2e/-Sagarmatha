import * as mongoose from 'mongoose';
import { OrderSchema } from './Orders';
import { RoleSchema } from './Role';
const Schema = mongoose.Schema;
export const UserSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    adress: {
        type: String,
       
    },
    phoneNum: {
        type: Number,
        
    },

    orders:[OrderSchema],
    roles:[RoleSchema]
   
});
export const UserModel= mongoose.model("User",UserSchema)