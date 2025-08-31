
const validatedEmail = (email) => {
    try {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    } catch (error) {
        throw new Error("Error occured while validating the email", error)
    }
}

export default validatedEmail;