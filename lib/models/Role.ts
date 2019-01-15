import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const RoleSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a role name'
    },
    description: {
        type: String,
        
    },
   
});
export const RoleModel= mongoose.model("Role",RoleSchema)