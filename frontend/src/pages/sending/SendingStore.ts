import {} from 'reactjs-commons'
import { LinkedState } from '../../lib/LinkedState'
import { Nav } from '../../app/Navigation'
import { routes } from '../../routes/routes'

export const sendingStore = new LinkedState<string>('')

export const onNext = () => Nav.go(routes.sending.display)
