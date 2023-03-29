import FormModel from "../model/FormModel";
import mongoose from "mongoose";
import {IPartialForm} from "../interface/IPartialForm";
import util from 'util'
import {Context} from "vm";

export function getForm() {
    FormModel.find({}).then(result => {
        return result
    })
}

export function addForm(topic: string,
                        comment: string,
                        storeBranchId: mongoose.Types.ObjectId,
                        email : string,
                        phoneNumber: string,
                        consent: boolean,
                        context : any) {
    const headers = context[Object.getOwnPropertySymbols(context)[1]];
    const userAgent = headers['user-agent'];

    const strUserAgent: string = String(userAgent);

    const form = new FormModel({
        topic: topic,
        comment: comment,
        storeBranchId: storeBranchId,
        email: email,
        phoneNumber: phoneNumber,
        consent: consent,
        userAgent: strUserAgent
    });


    form.save().then(result => {
        return result._id
    })
}

export async function formClicked(id: mongoose.Schema.Types.ObjectId) {

    const clicked : IPartialForm = {clicked: true}

    const form : IPartialForm = await FormModel.findOneAndUpdate({_id : id}, clicked, {new: true});

}