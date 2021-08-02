import {} from 'reactjs-commons'
import { LinkedState } from '../../lib/LinkedState'
import { Nav } from '../../app/Navigator'
import { path } from '../../routes/path'

export const sendingStore = new LinkedState<string>('')

export const onNext = () => Nav.url(path.sending.display)
