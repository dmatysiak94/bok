import validator from "validator";
import UserModel from "../model/UserModel";

import {HttpError} from "../interface/HttpError";

export async function validateUserCreation(email: string, password: string, confirmPassword: string) {

    let errors : string[] = [];

    if(await UserModel.findOne({email: email})) {
        errors.push('email already exists')
    }

    if(!validator.isEmail(email)) {
        errors.push('wrong email')
    }
    if(!validator.equals(password, confirmPassword)){
        errors.push('password mismatch')
    }

    if (errors.length > 0) {
        throw new HttpError(errors.toString());
    }
}