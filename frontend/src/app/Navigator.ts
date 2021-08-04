import { NavigateFunction } from 'react-router'

class Navigator {
  private navigate!: NavigateFunction
  setNavigate(ref: NavigateFunction) {
    this.navigate = ref
  }
  url(url: string) {
    alert('this.navigate ' + url)
    this.navigate(url)
  }
}
export const Nav = new Navigator()
