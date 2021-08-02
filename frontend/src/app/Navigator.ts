import { NavigateFunction } from 'react-router'

class Navigator {
  navigate!: NavigateFunction
  setNavigate(ref: NavigateFunction) {
    this.navigate = ref
  }
  url(url: string) {
    this.navigate(url)
  }
}
export const Nav = new Navigator()
