"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.RoleSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a role name'
    },
    description: {
        type: String,
    },
});
exports.RoleModel = mongoose.model("Role", exports.RoleSchema);
//# sourceMappingURL=Role.js.map