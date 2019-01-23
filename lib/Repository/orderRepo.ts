import { IorderRepo } from "./IorderRepo";
let config = require('../../config.json');
import * as mongoose from 'mongoose';
import { UserModel } from "../models/User";

export class orderRepo implements IorderRepo {
    async findallorders(page: number, page_size: number, userId: any) {

        let skip = ((page - 1) * page_size)
        let limit = parseInt(page_size.toString())
        try {
            this.MongoCon()
            let reqUser = await UserModel.findOne({ _id: userId })
            //   console.log(reqUser)
            if (reqUser["roles"].find(x => x.name == "Admin")) {

                let orders = await UserModel.aggregate([
                    { $unwind: '$orders' },
                    { $project: { _id: '$orders._id', company: '$orders.company', description: '$orders.description', currency: '$orders.currency', created_date: '$orders.created_date', updated_date: '$orders.updated_date' } },
                    { $skip: skip },
                    { $limit: limit }
                ])
                console.log("Admin")
                return orders
            }
            else {
                console.log("Customer")
                return reqUser["orders"]
            }


            // db.school

        }
        catch (err) {
            console.log(err)
            throw new Error("fetching data from DB problem");
        }
        finally {
            this.MongoDisCon()
        }
    }

    async getOrderCount(page: number, page_size: number, userId: any) {
        console.log(userId)
        try {
            this.MongoCon()
            let reqUser = await UserModel.findOne({ _id: userId })
            //console.log(reqUser)
            if (reqUser["roles"].find(x => x.name == "Admin")) {

                let orders = await UserModel.aggregate([
                    { $unwind: '$orders' },
                    { $project: { _id: '$orders._id', company: '$orders.company', description: '$orders.description', currency: '$orders.currency', created_date: '$orders.created_date', updated_date: '$orders.updated_date' } },

                ])
                console.log("Admin")
                return orders.length
            }
            else {
                console.log("Customer")
                return reqUser["orders"].length
            }


            // db.school

        }
        catch (err) {
            console.log(err)
            throw new Error("fetching data from DB problem");
        }
        finally {
            this.MongoDisCon()
        }

    }

    async addUserOrder(userid: string, order: any) {
        try {
            this.MongoCon()
            let user = await UserModel.findOne({ _id: userid })
            user["orders"].push(order)
            let saveduser = await user.save()
            return saveduser
        }
        catch (err) {
            console.log(err)
            throw new Error("fetching data from DB problem");
        }
        finally {
            this.MongoDisCon()
        }

    }

    async deleteUserOrder(order: any, userid: any) {
        try {
            this.MongoCon()
            let reqUser = await UserModel.findOne({ _id: userid })
            let user = await UserModel.findOne({ 'orders._id': order })
            if ((reqUser["roles"].find(x => x.name == "Admin"))||(reqUser.id == user.id)) {
                let index = user.orders.findIndex(p => p.id === order)
                let x =  user.orders.splice(index,1)
                let saveduser = await user.save()
              
                return saveduser
            }
            return null
        }
        catch (err) {
            console.log(err)
            throw new Error("fetching data from DB problem");
        }
        finally {
            this.MongoDisCon()
        }

    }

    async  updateUserOrder(order: any) {
        try {
            this.MongoCon()
            let user = await UserModel.findOne({ 'orders._id': order._id })
            // let user = await UserModel.findOne({ _id: userid })
            let index = user["orders"].findIndex(x => x._id === order._id)
            user["orders"] = user["orders"].splice(index, 1)
            user["orders"].push(order)
            let saveduser = await user.save()
            return saveduser
        }
        catch (err) {
            console.log(err)
            throw new Error("fetching data from DB problem");
        }
        finally {
            this.MongoDisCon()
        }

    }

    findAll() {
        throw new Error("Method not implemented.");
    } findById() {
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


    private MongoCon() {
        try {
            mongoose.connect(config.MongoConnectionString, { useNewUrlParser: true });
        }
        catch (err) {
            console.log(err)
            throw new Error("DB connection problem");
        }
    }
    private MongoDisCon() {
        mongoose.connection.close()
    }



}