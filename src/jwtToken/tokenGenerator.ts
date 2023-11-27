import jwt from "jsonwebtoken";


const JWT_SECRET="123456";
const tokenExpirationInSeconds= 36000;
/**
 * @description The data to be passed into the token for encryption
 */
export interface UserTokenData {
  name: string;
  email: string;
}

export interface UserInterface {
    id?: number;
    name: string;
    email: string;
    username?: string;
    password: string;
  }

/**
 * @description  Generates token
 * @param User Model Object
 * @returns JWT Token
 */
export const generateToken = (user: UserInterface): string => {
  const { name, email } = user;
  const userData: UserTokenData = {
    name,
    email,
  };
  const token = jwt.sign({ userData }, JWT_SECRET, {
    expiresIn: tokenExpirationInSeconds,
  });
  return token;
};

/**
 * @description Verify the signature, and returns UserTokenData if the signature is valid
 * @param token 
 * @returns 
 * 
 */
export const verifyToken = (token: string):UserTokenData => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
    const tokenData=decoded['userData'];
    return tokenData;
  } catch (err: unknown) {
    throw new Error("Invalid token:" + err);
  }
};

/**
 * @deprecated
 * @description (Synchronous) Returns the decoded payload without verifying if the signature is valid.
 * @param token 
 * @returns 
 */
export const decodeToken = (token:string)=>{
  const decoded:jwt.JwtPayload = jwt.decode(token) as jwt.JwtPayload;
  const userData:UserTokenData=decoded['userData'];
    console.log(userData);
  }
  

// Main Testing Code
export const main=()=>{
  const userData:UserInterface ={
    name: "Ram Sharma",
    email: "ram.sharma@gmail.com",
    password: "fat",
}

  const token=generateToken(userData);
  const verifyTokenValue=verifyToken(token);
  console.log(verifyTokenValue)
}

main();