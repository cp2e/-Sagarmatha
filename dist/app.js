"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Customer_1 = require("./controllers/Customer");
const Role_1 = require("./models/Role");
const User_1 = require("./models/User");
class App {
    constructor() {
        mongoose.connect('mongodb://EIlam:Tohar321@cluster0-shard-00-00-dlkbs.mongodb.net:27017,cluster0-shard-00-01-dlkbs.mongodb.net:27017,cluster0-shard-00-02-dlkbs.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', { useNewUrlParser: true });
        let Roles = [];
        let Role = new Role_1.RoleModel({ name: 'Admin', description: 'Admin is allowed to preform all actions' });
        Role.save().then(res => {
            console.log(res);
            Roles.push(res);
        });
        Role = new Role_1.RoleModel({ name: 'Customer', description: 'Customer is allowed to preform only actions which regards to him' });
        Role.save().then(res => {
            console.log(res);
            Roles.push(res);
        });
        console.log(Roles);
        let User = new User_1.UserModel({ firstName: 'eilam', lastName: 'cohen', adress: 'Hashmonaim', phoneNum: '0528071462' });
        User;
        User.save().then(res => console.log(res));
        this.app = express();
        this.config();
        //  this.routePrv.routes(this.app); 
        this.app.use('/customer', Customer_1.CustomerController);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map