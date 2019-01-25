import { IuserRepo } from "./IuserRepo";
let config = require('../../config.json');
import * as mongoose from 'mongoose';
import { UserModel } from "../models/User";
import { orderRepo } from "./orderRepo";
import { RoleSchema } from "models/Role";
export class userRepo implements IuserRepo {



    async findallusers(page: number, page_size: number) {
       let skip = ((page - 1) * page_size)
        let limit = parseInt(page_size.toString())
        try {
            this.MongoCon()
            let users = await UserModel.aggregate([
               
                { $skip: skip },
                { $limit: limit }
            ])

            // db.school
            return users
        }
        catch (err) {
            console.log(err)
            throw new Error("fetching data from DB problem");
        }
        finally {
            this.MongoDisCon()
        }
    }

    async getUserCount()
    {
        try {
            this.MongoCon()
            let users = await UserModel.find()
            // db.school
            return users.length
        }
        catch (err) {
            console.log(err)
            throw new Error("fetching data from DB problem");
        }
        finally {
            this.MongoDisCon()
        }

    }

    async findAll() {
        try {
            this.MongoCon()
            let Users = await UserModel.find()
            return Users
        }
        catch (err) {
            console.log(err)
            throw new Error("fetching data from DB problem");
        }
        finally {
            this.MongoDisCon()
        }
    }

    async findByUserName(userName: string) {
        try {
            this.MongoCon()
            let Users = await UserModel.findOne({userName:userName})
            return Users
        }
        catch (err) {
            console.log(err)
            throw new Error("fetching data from DB problem");
        }
        finally {
            this.MongoDisCon()
        }
    }


    async findById(id: string) {
        try {
            this.MongoCon()
            let Users = await UserModel.findById(id)
            return Users
        }
        catch (err) {
            console.log(err)
            throw new Error("fetching data from DB problem");
        }
        finally {
            this.MongoDisCon()
        }
    }
    async addUser(user: any): Promise<any> {
        try {
            user.roles
            let newuser = new UserModel(user)
            this.MongoCon()
            let saveduser = await newuser.save()
            return saveduser
        }
        catch (err) {
            console.log(err)
            throw new Error("insert Data to the DB problem");
        }
        finally {
            this.MongoDisCon()
        }
    }
    async updateUser(user: any): Promise<any> {
        try {
           // user.roles.length=0
           this.MongoCon()
            let updatedUser = new UserModel(user)
            let x =await updatedUser.update(user)
            return updatedUser
        }
        catch (err) {
            console.log(err)
            throw new Error("insert Data to the DB problem");
        }
        finally {
            this.MongoDisCon()
        }
    }
    async deleteUser(id:string) {
        try {
            this.MongoCon()
            let UserToRemove= await UserModel.findOne({_id:id})
            await UserModel.deleteOne({_id:id})
            return UserToRemove
        }
        catch (err) {
            console.log(err)
            throw new Error("delete Data from DB problem");
        }
        finally {
            this.MongoDisCon()
        }
       
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