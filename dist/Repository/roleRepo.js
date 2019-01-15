"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
let config = require('../../config.json');
const mongoose = require("mongoose");
const User_1 = require("../models/User");
class roleRepo {
    findallroles(page, page_size) {
        return __awaiter(this, void 0, void 0, function* () {
            let skip = ((page - 1) * page_size);
            let limit = parseInt(page_size.toString());
            try {
                this.MongoCon();
                let roles = yield User_1.UserModel.aggregate([
                    { $unwind: '$roles' },
                    { $project: { _id: '$roles._id', description: '$roles.description', name: '$roles.name' } },
                    { $skip: skip },
                    { $limit: limit }
                ]);
                // db.school
                return roles;
            }
            catch (err) {
                console.log(err);
                throw new Error("fetching data from DB problem");
            }
            finally {
                this.MongoDisCon();
            }
        });
    }
    addUserrole(userid, role) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.MongoCon();
                let user = yield User_1.UserModel.findOne({ _id: userid });
                user["roles"].push(role);
                let saveduser = yield user.save();
                return saveduser;
            }
            catch (err) {
                console.log(err);
                throw new Error("fetching data from DB problem");
            }
            finally {
                this.MongoDisCon();
            }
        });
    }
    deleteUserrole(role) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.MongoCon();
                let user = yield User_1.UserModel.findOne({ 'roles._id': role._id });
                //let user = await UserModel.findOne({ _id: userid })
                let index = user["roles"].findIndex(x => x._id === role._id);
                user["roles"] = user["roles"].splice(index, 1);
                let saveduser = yield user.save();
                return saveduser;
            }
            catch (err) {
                console.log(err);
                throw new Error("fetching data from DB problem");
            }
            finally {
                this.MongoDisCon();
            }
        });
    }
    updateUserrole(role) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.MongoCon();
                let user = yield User_1.UserModel.findOne({ 'roles._id': role._id });
                // let user = await UserModel.findOne({ _id: userid })
                let index = user["roles"].findIndex(x => x._id === role._id);
                user["roles"] = user["roles"].splice(index, 1);
                user["roles"].push(role);
                let saveduser = yield user.save();
                return saveduser;
            }
            catch (err) {
                console.log(err);
                throw new Error("fetching data from DB problem");
            }
            finally {
                this.MongoDisCon();
            }
        });
    }
    findAll() {
        throw new Error("Method not implemented.");
    }
    findById() {
        throw new Error("Method not implemented.");
    }
    addRole() {
        throw new Error("Method not implemented.");
    }
    updateRole() {
        throw new Error("Method not implemented.");
    }
    deleteRole() {
        throw new Error("Method not implemented.");
    }
    MongoCon() {
        try {
            mongoose.connect(config.MongoConnectionString, { useNewUrlParser: true });
        }
        catch (err) {
            console.log(err);
            throw new Error("DB connection problem");
        }
    }
    MongoDisCon() {
        mongoose.connection.close();
    }
}
exports.roleRepo = roleRepo;
//# sourceMappingURL=roleRepo.js.map