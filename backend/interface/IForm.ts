import mongoose from "mongoose";

export interface IForm extends Document{
    topic: string
    comment: string
    storeBranchId: mongoose.Schema.Types.ObjectId
    comments: mongoose.Schema.Types.ObjectId[]
    email: string
    phoneNumber: string
    consent: boolean
    created: Date
    clicked: boolean,
    status: number,
    userAgent: string
}