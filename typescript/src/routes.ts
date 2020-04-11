import {Request, Response } from 'express';
import createUser, {createUserDestructuring} from './service/CreateUser';

export function helloWorld(req: Request, res: Response) {
    const user = createUser("Mary", undefined, "haha");
    console.log(user);
    const user2 = createUserDestructuring({email: "gabriel@gmail.com", password: "abc", techs: ["Java", {title: "JavaScript", experience: 5}]});
    console.log(user2);
    return res.json({message: "hello world"})
}