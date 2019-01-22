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
const express_1 = require("express");
const userRepo_1 = require("../Repository/userRepo");
const router = express_1.Router();
router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let Repo = new userRepo_1.userRepo();
    try {
        let users = yield Repo.findAll();
        res.status(200).send(users);
    }
    catch (err) {
        res.status(400).send({ error: err.message });
    }
}));
router.get('/find_by_user_name', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let Repo = new userRepo_1.userRepo();
    try {
        let users = yield Repo.findByUserName(req.query.userName);
        res.status(200).send(users);
    }
    catch (err) {
        res.status(400).send({ error: err.message });
    }
}));
router.get('/find_all_users', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let Repo = new userRepo_1.userRepo();
    try {
        let users = yield Repo.findallusers(req.query.page, req.query.page_size);
        res.status(200).send(users);
    }
    catch (err) {
        res.status(400).send({ error: err.message });
    }
}));
router.get('/user_count', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let Repo = new userRepo_1.userRepo();
    try {
        let users = yield Repo.getUserCount();
        res.status(200).send({ count: users });
    }
    catch (err) {
        res.status(400).send({ error: err.message });
    }
}));
router.get('/find_by_id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let Repo = new userRepo_1.userRepo();
    try {
        let users = yield Repo.findById(req.query.id);
        debugger;
        res.status(200).send(users);
    }
    catch (err) {
        res.status(400).send({ error: err.message });
    }
}));
router.post('/add', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let Repo = new userRepo_1.userRepo();
    try {
        let user = yield Repo.addUser(req.body);
        console.log(user);
        res.status(200).send(user);
    }
    catch (err) {
        res.status(400).send({ error: err.message });
    }
}));
router.post('/update', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let Repo = new userRepo_1.userRepo();
    try {
        let user = yield Repo.updateUser(req.body);
        console.log(user);
        res.status(200).send(user);
    }
    catch (err) {
        res.status(400).send({ error: err.message });
    }
}));
router.get('/delete', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let Repo = new userRepo_1.userRepo();
    try {
        let user = yield Repo.deleteUser(req.query._id);
        console.log(user);
        res.status(200).send(user);
    }
    catch (err) {
        res.status(400).send({ error: err.message });
    }
}));
// Export the express.Router() instance to be used by server.ts
exports.UserController = router;
//# sourceMappingURL=User.js.map