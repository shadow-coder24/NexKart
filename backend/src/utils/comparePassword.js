import bycrpt from bycrpt

const comparePassword = async (plainPassword, hashedPassword) => {
    try {
        const match = await bycrpt.compare(plainPassword, hashedPassword);
        return match;
    } catch (error) {
        throw new Error("Error comparing passwords");
        
    }
}

export default comparePassword;