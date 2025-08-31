import random from "random";

const generateOTP = (length = 6) => {
  let otp = "";
  try {
    for (i = 0; i < length; i++) {
      otp += random.int(0, 9);
    }
    return otp
  } catch {
    throw new Error("Error occured generating OTP", error);
  }
};

export default generateOTP
