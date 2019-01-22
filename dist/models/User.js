"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Orders_1 = require("./Orders");
const Role_1 = require("./Role");
const Schema = mongoose.Schema;
exports.UserSchema = new Schema({
    userName: {
        type: String,
        required: 'Enter a first name'
    },
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
    orders: [Orders_1.OrderSchema],
    roles: [Role_1.RoleSchema]
});
exports.UserModel = mongoose.model("User", exports.UserSchema);
//# sourceMappingURL=User.js.map