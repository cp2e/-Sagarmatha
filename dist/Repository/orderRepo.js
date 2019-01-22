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
class orderRepo {
    findallorders(page, page_size) {
        return __awaiter(this, void 0, void 0, function* () {
            let skip = ((page - 1) * page_size);
            let limit = parseInt(page_size.toString());
            try {
                this.MongoCon();
                let orders = yield User_1.UserModel.aggregate([
                    { $unwind: '$orders' },
                    { $project: { _id: '$orders._id', company: '$orders.company', description: '$orders.description', currency: '$orders.currency', created_date: '$orders.created_date', updated_date: '$orders.updated_date' } },
                    { $skip: skip },
                    { $limit: limit }
                ]);
                // db.school
                return orders;
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
    addUserOrder(userid, order) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.MongoCon();
                let user = yield User_1.UserModel.findOne({ _id: userid });
                user["orders"].push(order);
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
    deleteUserOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.MongoCon();
                let user = yield User_1.UserModel.findOne({ 'orders._id': order._id });
                // let user = await UserModel.findOne({ _id: userid })
                let index = user["orders"].findIndex(x => x._id === order._id);
                user["orders"] = user["orders"].splice(index, 1);
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
    updateUserOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.MongoCon();
                let user = yield User_1.UserModel.findOne({ 'orders._id': order._id });
                // let user = await UserModel.findOne({ _id: userid })
                let index = user["orders"].findIndex(x => x._id === order._id);
                user["orders"] = user["orders"].splice(index, 1);
                user["orders"].push(order);
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
    addOrder() {
        throw new Error("Method not implemented.");
    }
    updateOrder() {
        throw new Error("Method not implemented.");
    }
    deleteOrder() {
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
exports.orderRepo = orderRepo;
//# sourceMappingURL=orderRepo.js.map