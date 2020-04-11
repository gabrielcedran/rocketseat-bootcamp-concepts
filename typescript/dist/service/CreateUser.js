"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(name, email, password) {
    if (password === void 0) { password = "abc"; }
    return {
        name: name,
        email: email,
        password: password
    };
}
exports.default = createUser;
function createUserDestructuring(_a) {
    var _b = _a.name, name = _b === void 0 ? 'Default value' : _b, email = _a.email, password = _a.password;
    return {
        name: name,
        email: email,
        password: password
    };
}
exports.createUserDestructuring = createUserDestructuring;
