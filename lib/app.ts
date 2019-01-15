import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';
import {CustomerController} from "./controllers/Customer"
import { RoleModel } from "./models/Role";
import { UserModel } from "./models/User";
import { OrderController } from "./controllers/Order";
import { RoleController } from "./controllers/Role";
import { UserController } from "./controllers/User";

class App {

    
    public app: express.Application;
    
    constructor() {
     
       // this.findme()
      //  this.Test();

        this.app = express();
        this.config();       
      //  this.routePrv.routes(this.app); 
       
      this.app.use('/order',OrderController)    
      this.app.use('/role',RoleController)    
      this.app.use('/user',UserController)    

    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    // private async findme()
    // {
    //     mongoose.connect('mongodb://EIlam:Tohar321@cluster0-shard-00-00-dlkbs.mongodb.net:27017,cluster0-shard-00-01-dlkbs.mongodb.net:27017,cluster0-shard-00-02-dlkbs.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', {useNewUrlParser: true});
    //     let user=await UserModel.find( {'roles.name':'findme'})
    //     console.log(user)

    // }
    // private async Test()
    // {
    //     mongoose.connect('mongodb://EIlam:Tohar321@cluster0-shard-00-00-dlkbs.mongodb.net:27017,cluster0-shard-00-01-dlkbs.mongodb.net:27017,cluster0-shard-00-02-dlkbs.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', {useNewUrlParser: true});
    //     let Roles:any[]=[]
    //     let Role = new RoleModel({name:'Admin',description:'Admin is allowed to preform all actions'});
    //     await Role.save().then(res=>
    //         {
    //             console.log(res)
    //             Roles.push(res)}
    //         )
    //     Role=new RoleModel({name:'findme',description:'Customer is allowed to preform only actions which regards to him'});
    //     await Role.save().then(res=>
    //         {
    //             console.log(res)
    //             Roles.push(res)
    //             console.log("roles---------------------------------------------",Roles)
    //         }
    //         )
       
    //     let User =new  UserModel({
    //         firstName:'eilam',
    //          lastName:'cohen', 
    //          adress:'Test' ,
    //          phoneNum:'0528071462',
    //          roles:Roles
    //     })
       
    //     User.save().then(res=>console.log(res))

    // }
    

}

export default new App().app;