import {IStoreBranch} from "@/types/IStoreBranchDict";
import {IComments} from "@/types/IComments";

export interface IForm {
    id: string
    topic: string,
    comment: string,
    storeBranch?: IStoreBranch,
    comments: IComments[]
    email?: string,
    phoneNumber?: string,
    consent: boolean
    created: string
    clicked: boolean
    userAgent: string
}