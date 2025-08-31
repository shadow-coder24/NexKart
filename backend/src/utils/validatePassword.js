
const validatedPassword = (password) => {
    try {
        length = password.length >= 8;
        upper = /[A-Z]/.test(password);
        lower = /[a-z]/.test(password);
        number = /[0-9]/.test(password);
        special = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        return length && upper && lower && number && special;
    } catch (error) {
        throw new Error("Error occured while validating the password", error)
    }
}

export default validatedPassword;