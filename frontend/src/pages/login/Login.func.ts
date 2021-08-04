import { credentials } from '../home/Home.func'

export function configureAsOffline() {
  credentials.set({
    mode: 'offline'
  })
}

export function configureAsOnline(username: string, encryptionKey: string) {
  credentials.set({
    mode: 'online',
    username,
    encryptionKey
  })
}
