import {makeAutoObservable} from 'mobx'

export class UIStore {
  page
  showMenu
  mobile
  loading
  animation
  filter
  constructor(
    page: string | null,
    showMenu: boolean,
    mobile: boolean,
    loading: boolean,
    animation: boolean,
    filter: boolean,
  ) {
    makeAutoObservable(this, {}, {autoBind: true})
    this.page = page
    this.showMenu = showMenu
    this.mobile = mobile
    this.loading = loading
    this.animation = animation
    this.filter = filter
  }
  setFilter(bool: boolean): void {
    this.filter = bool
  }
  setLoading(bool: boolean): void {
    this.loading = bool
  }
  setMobile(bool: boolean): void {
    this.mobile = bool
  }
  setShowMenu(bool: boolean): void {
    this.showMenu = bool
  }
  setAnimation(bool: boolean): void {
    this.animation = bool
  }
  setPage(page: string | null): void {
    if (this.mobile) {
      window.requestAnimationFrame(() =>
        this.setAnimation(false),
      )
      this.page = page
      setTimeout(() => {
        this.setShowMenu(false)
      }, 200)
    } else {
      this.page = page
    }
  }
}
