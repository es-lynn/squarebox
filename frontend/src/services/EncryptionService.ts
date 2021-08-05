import CryptoJS from 'crypto-js'

export function encrypt(string: string, password: string): string {
  return CryptoJS.AES.encrypt(string, password).toString()
}

export function decrypt(encryptedString: string, password: string): string {
  const decryptedData = CryptoJS.AES.decrypt(encryptedString, password).toString(CryptoJS.enc.Utf8)
  if (decryptedData === '') {
    alert(
      'Incorrect password; unable to decrypt data. Please login with the same username and password'
    )
    throw Error(
      'Incorrect password; unable to decrypt data. Please login with the same username and password'
    )
  }
  return decryptedData
}
