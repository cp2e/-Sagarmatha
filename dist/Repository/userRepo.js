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
class userRepo {
    findallusers(page, page_size) {
        return __awaiter(this, void 0, void 0, function* () {
            let skip = ((page - 1) * page_size);
            let limit = parseInt(page_size.toString());
            try {
                this.MongoCon();
                let users = yield User_1.UserModel.aggregate([
                    { $skip: skip },
                    { $limit: limit }
                ]);
                // db.school
                return users;
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
    getUserCount() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.MongoCon();
                let users = yield User_1.UserModel.find();
                // db.school
                return users.length;
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
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.MongoCon();
                let Users = yield User_1.UserModel.find();
                return Users;
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
    findByUserName(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.MongoCon();
                let Users = yield User_1.UserModel.findOne({ userName: userName });
                return Users;
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
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.MongoCon();
                let Users = yield User_1.UserModel.findById(id);
                return Users;
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
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                user.roles;
                let newuser = new User_1.UserModel(user);
                this.MongoCon();
                let saveduser = yield newuser.save();
                return saveduser;
            }
            catch (err) {
                console.log(err);
                throw new Error("insert Data to the DB problem");
            }
            finally {
                this.MongoDisCon();
            }
        });
    }
    updateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                user.roles;
                let updatedUser = new User_1.UserModel(user);
                this.MongoCon();
                yield updatedUser.update(user);
                return updatedUser;
            }
            catch (err) {
                console.log(err);
                throw new Error("insert Data to the DB problem");
            }
            finally {
                this.MongoDisCon();
            }
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.MongoCon();
                let UserToRemove = yield User_1.UserModel.findOne({ _id: id });
                yield User_1.UserModel.deleteOne({ _id: id });
                return UserToRemove;
            }
            catch (err) {
                console.log(err);
                throw new Error("delete Data from DB problem");
            }
            finally {
                this.MongoDisCon();
            }
        });
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
exports.userRepo = userRepo;
//# sourceMappingURL=userRepo.js.map