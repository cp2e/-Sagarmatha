"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.OrderSchema = new Schema({
    description: {
        type: String,
        required: 'Enter a description'
    },
    currency: {
        type: String,
        required: 'Enter currency'
    },
    company: {
        type: String,
        required: 'Enter company'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});
exports.OrderModel = mongoose.model("Order", exports.OrderSchema);
//# sourceMappingURL=Orders.js.map