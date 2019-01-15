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
const roleRepo_1 = require("../Repository/roleRepo");
const router = express_1.Router();
router.get('/find_all_roles', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let Repo = new roleRepo_1.roleRepo();
    try {
        let roles = yield Repo.findallroles(req.query.page, req.query.page_size);
        res.status(200).send(roles);
    }
    catch (err) {
        res.status(400).send({ error: err.message });
    }
}));
router.post('/add_user_role', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let Repo = new roleRepo_1.roleRepo();
    try {
        let roles = yield Repo.addUserrole(req.query._id, req.body);
        res.status(200).send(roles);
    }
    catch (err) {
        res.status(400).send({ error: err.message });
    }
}));
router.post('/delete_user_role', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let Repo = new roleRepo_1.roleRepo();
    try {
        let roles = yield Repo.deleteUserrole(req.body);
        res.status(200).send(roles);
    }
    catch (err) {
        res.status(400).send({ error: err.message });
    }
}));
router.post('/update_user_role', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let Repo = new roleRepo_1.roleRepo();
    try {
        let roles = yield Repo.updateUserrole(req.body);
        res.status(200).send(roles);
    }
    catch (err) {
        res.status(400).send({ error: err.message });
    }
}));
router.get('/', (req, res) => {
    res.send('findall');
});
router.get('/find_by_id/:id', (req, res) => {
    res.send('/find_by_id/:id');
});
router.post('/add', (req, res) => {
    res.send('/add');
});
router.post('/update', (req, res) => {
    res.send('/update');
});
router.get('/delete', (req, res) => {
    res.send('/delete');
});
// Export the express.Router() instance to be used by server.ts
exports.RoleController = router;
//# sourceMappingURL=Role.js.map