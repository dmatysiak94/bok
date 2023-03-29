import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import {Strategy} from 'passport-local'

import UserModel from '../model/UserModel';
import {validateUserCreation} from '../validator/Validator'
import {IUser} from "../interface/IUser";

export async function signIn(email: string, password: string, confirmPassword: string) {

    await validateUserCreation(email, password, confirmPassword)

    const hashPass = await bcrypt.hash(password, 12);

    const userToSave = new UserModel({
        email: email,
        password: hashPass
    });

    let savedUser
    try {
        savedUser = await userToSave.save();
    } catch (err) {
        const error = new Error('fefe')
        throw error
    }
    return savedUser
}

export async function logIn(email: string, password: string) {

    const user: IUser = await UserModel.findOne({email: email});

    if (!user) {
        throw new Error('user or pass error');
    }

    const hashPass = await bcrypt.compare(password, user.password);

    if (!hashPass) {
        throw new Error('user or pass error');
    }

    const token = jwt.sign({
        'loggedIn': true,
        userId: user.id
    }, 'superTrudneHaslo', {expiresIn: '12h'})

    return {token: token};

}

