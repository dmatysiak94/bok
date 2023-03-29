import {ContactValidator} from "@/types/ContactValidator";

const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phonePattern = /^(\+\d{1,3})?\d{4,}$/;

export const contactValidator = (emailForm: string, phoneForm: string, consentForm: boolean) => {

    const checks = new ContactValidator();

    if (emailForm.trim() !== '' && !emailPattern.test(emailForm)) {
        console.log('check')
        checks.email = false
        console.log(checks.email)
    } else {
        checks.email = true;
    }

    if (phoneForm.trim() !== '' && !phonePattern.test(phoneForm)) {
        checks.phone = false;
    } else {
        checks.phone = true;
    }

    if ((emailForm.trim() !== '' || phoneForm.trim() !== '') && consentForm === false) {
        checks.consent = false;
    } else {
        checks.consent = true
    }

    return checks;
}