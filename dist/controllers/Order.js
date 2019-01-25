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
const orderRepo_1 = require("../Repository/orderRepo");
const router = express_1.Router();
router.get('/find_all_orders', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let Repo = new orderRepo_1.orderRepo();
    try {
        let orders = yield Repo.findallorders(req.query.page, req.query.page_size, req.query.userId);
        res.status(200).send(orders);
    }
    catch (err) {
        res.status(400).send({ error: err.message });
    }
}));
router.post('/add_user_order', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let Repo = new orderRepo_1.orderRepo();
    try {
        let orders = yield Repo.addUserOrder(req.query.initiatorUserId, req.query.userId, req.body);
        res.status(200).send(orders);
    }
    catch (err) {
        res.status(400).send({ error: err.message });
    }
}));
router.get('/delete_user_order', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let Repo = new orderRepo_1.orderRepo();
    try {
        let orders = yield Repo.deleteUserOrder(req.query._id, req.query.userId);
        res.status(200).send(orders);
    }
    catch (err) {
        res.status(400).send({ error: err.message });
    }
}));
router.post('/update_user_order', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let Repo = new orderRepo_1.orderRepo();
    try {
        let orders = yield Repo.updateUserOrder(req.query.userId, req.body);
        res.status(200).send(orders);
    }
    catch (err) {
        res.status(400).send({ error: err.message });
    }
}));
router.get('/order_count', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let Repo = new orderRepo_1.orderRepo();
    try {
        let users = yield Repo.getOrderCount(req.query.page, req.query.page_size, req.query.userId);
        res.status(200).send({ count: users });
    }
    catch (err) {
        res.status(400).send({ error: err.message });
    }
}));
router.get('/find_by_id/:id', (req, res) => {
    res.send('/find_by_id/:id');
});
router.post('/add', (req, res) => {
    res.send('/add');
});
router.post('/update', (req, res) => {
    res.send('/update');
});
// Export the express.Router() instance to be used by server.ts
exports.OrderController = router;
//# sourceMappingURL=Order.js.map