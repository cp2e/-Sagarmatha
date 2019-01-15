import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const OrderSchema = new Schema({
    description: {
        type: String,
        required: 'Enter a description'
    },
    currency: {
        type: String,
        required: 'Enter currency'
    },
    company:
    {
        type: String,
        required: 'Enter company'
    },
    created_date:{
        type: Date, 
        default: Date.now
    },
    updated_date:{
        type: Date, 
        default: Date.now
    }
   
});
export const OrderModel= mongoose.model("Order",OrderSchema)
