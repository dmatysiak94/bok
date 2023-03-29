import mongoose from "mongoose";

export interface IPartialForm {
    topic?: string
    comment?: string
    storeBranchId?: mongoose.Schema.Types.ObjectId
    email?: string
    phoneNumber?: string
    consent?: boolean
    timestamp?: Date
    clicked?: boolean,
    status?: number
}