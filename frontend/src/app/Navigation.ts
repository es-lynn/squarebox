import { navigate } from '@reach/router'

function go(url: string): void {
  navigate(url)
}

export const Nav = { go }
