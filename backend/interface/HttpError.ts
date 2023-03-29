export class HttpError extends Error{


    constructor(errMessage: string) {
        super(errMessage);
    }

}