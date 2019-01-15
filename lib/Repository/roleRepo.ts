import { IroleRepo } from "./IroleRepo";
let config = require('../../config.json');
import * as mongoose from 'mongoose';
import { UserModel } from "../models/User";


export  class roleRepo implements IroleRepo
{
    async findallroles(page: number, page_size: number) {
        let skip = ((page - 1) * page_size)
        let limit = parseInt(page_size.toString())
        try {
            this.MongoCon()
            let roles = await UserModel.aggregate([
                { $unwind: '$roles' },
                { $project: { _id:'$roles._id', description: '$roles.description', name: '$roles.name' } },
                { $skip: skip },
                { $limit: limit }
            ])

            // db.school
            return roles
        }
        catch (err) {
            console.log(err)
            throw new Error("fetching data from DB problem");
        }
        finally {
            this.MongoDisCon()
        }
    }
    async addUserrole(userid: string, role: any) {
        try {
            this.MongoCon()
            let user = await UserModel.findOne({ _id: userid })
            user["roles"].push(role)
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

    async deleteUserrole( role: any) {
        try {
            this.MongoCon()
            let user=await UserModel.findOne( {'roles._id':role._id})
            //let user = await UserModel.findOne({ _id: userid })
            let index = user["roles"].findIndex (x => x._id===role._id)
            user["roles"]=user["roles"].splice(index,1)
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

    async  updateUserrole(role:any) {
        try {
            this.MongoCon()
            let user=await UserModel.findOne( {'roles._id':role._id})
           // let user = await UserModel.findOne({ _id: userid })
            let index = user["roles"].findIndex (x => x._id===role._id)
            user["roles"]=user["roles"].splice(index,1)
            user["roles"].push(role)
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
    }    findById() {
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