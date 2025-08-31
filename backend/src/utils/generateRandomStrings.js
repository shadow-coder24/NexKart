import randomstring from 'randomstring';

const generateRandomString = (length = 8) =>{
    try {
        return randomstring.generate(length);
    } catch (error) {
        throw new Error("Error occured while generating random string", error)
    }
}

export default generateRandomString;