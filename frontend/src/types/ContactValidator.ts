export class ContactValidator {
    private _email: boolean;
    private _phone: boolean;
    private _consent: boolean;

    get email(): boolean {
        return this._email;
    }

    set email(value: boolean) {
        this._email = value;
    }

    get phone(): boolean {
        return this._phone;
    }

    set phone(value: boolean) {
        this._phone = value;
    }

    get consent(): boolean {
        return this._consent;
    }

    set consent(value: boolean) {
        this._consent = value;
    }
}