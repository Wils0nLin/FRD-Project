"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPassword = exports.hashPassword = void 0;
const bcrypt = require("bcryptjs");
const SALT_ROUNDS = 10;
async function hashPassword(plainPassword) {
    const hash = await bcrypt.hash(plainPassword, SALT_ROUNDS);
    return hash;
}
exports.hashPassword = hashPassword;
async function checkPassword(plainPassword, hashedPassword) {
    const isMatched = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatched;
}
exports.checkPassword = checkPassword;
//# sourceMappingURL=hash.js.map