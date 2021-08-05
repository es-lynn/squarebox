import CryptoJS from "crypto-js";

export function encrypt(string: string, password: string): string {
  return CryptoJS.AES.encrypt(string, password).toString();
}

export function decrypt(encryptedString: string, password: string): string {
  return CryptoJS.AES.decrypt(encryptedString, "Secret Passphrase").toString(CryptoJS.enc.Utf8);
}
