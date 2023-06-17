"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.hashPassword = void 0;
const bcryptjs_1 = require("bcryptjs");
let ROUND = 15;
async function hashPassword(password) {
    let result = await (0, bcryptjs_1.hash)(password, ROUND);
    return result;
}
exports.hashPassword = hashPassword;
async function comparePassword(password, password_hash) {
    let isMatch = await (0, bcryptjs_1.compare)(password, password_hash);
    return isMatch;
}
exports.comparePassword = comparePassword;
//# sourceMappingURL=hash.js.map