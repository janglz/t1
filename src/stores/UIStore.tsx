import { makeAutoObservable } from "mobx";

export class UIStore {
  page;
  showMenu;
  mobile;
  constructor
  (
    page: string|null, 
    showMenu: boolean,
    mobile: boolean, 
  ) {
    makeAutoObservable(this, {}, { autoBind: true })
    this.page = page;
    this.showMenu = showMenu;
    this.mobile = mobile;
  }

  setMobile (bool: boolean): void {
    this.mobile = bool
  }
  setShowMenu (bool: boolean): void {
    this.showMenu = bool
  }
  setPage (page: string | null): void {
    this.page = page || ''
  }
}