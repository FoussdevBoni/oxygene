import { AES } from 'crypto-js';
import CryptoJS from 'crypto-js';




export const chiffrer=(data , secretKey)=>{
const encryptedData = AES.encrypt(data, secretKey).toString();
return encryptedData

}