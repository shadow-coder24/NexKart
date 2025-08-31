import bycrpt from bycrpt

const hashedPassword = async (plainPassword) => {
    try {
       const saltRounds = 10;
       const hashedPassword = await bycrpt.hash(plainPassword, saltRounds);
       return hashedPassword; 
    } catch (error) {
        throw new Error("Error occured while hashing the password", error)
    }
}

export default hashedPassword;