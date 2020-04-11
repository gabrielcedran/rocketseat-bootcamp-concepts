"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importStar(require("./service/CreateUser"));
function helloWorld(req, res) {
    var user = CreateUser_1.default("Mary", undefined, "haha");
    console.log(user);
    var user2 = CreateUser_1.createUserDestructuring({ email: "gabriel@gmail.com", password: "abc" });
    console.log(user2);
    return res.json({ message: "hello world" });
}
exports.helloWorld = helloWorld;
