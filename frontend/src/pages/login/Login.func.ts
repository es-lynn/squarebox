import { UserDataStore } from '../../app/storage/LocalStore'
import { Nav } from '../../app/Navigator'
import { path } from '../../routes/path'
import { credentials, Credentials } from '../State'

export function configureCredentials(_credentials: Credentials) {
  credentials.set(_credentials)
  UserDataStore.set('credentials', _credentials)

  Nav.url(path.setup.index)
}
