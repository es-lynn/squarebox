import { API } from '../../services/API'
import { Cfg } from '../../app/config/Config'
import { decrypt, encrypt } from "../../services/EncryptionService";


describe('Encryption', () => {
  test('encrypt', async () => {
    const encryptedData = encrypt('abcdef', '123456')
    const decryptedData = decrypt(encryptedData, '123455')
    expect(decryptedData).toEqual('abcdef')
  })
})
