"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const Order_1 = require("./controllers/Order");
const Role_1 = require("./controllers/Role");
const User_1 = require("./controllers/User");
class App {
    constructor() {
        // this.findme()
        //  this.Test();
        this.app = express();
        this.config();
        //  this.routePrv.routes(this.app); 
        this.app.use('/order', Order_1.OrderController);
        this.app.use('/role', Role_1.RoleController);
        this.app.use('/user', User_1.UserController);
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