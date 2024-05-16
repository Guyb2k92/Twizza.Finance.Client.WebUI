import { Sidenav } from "mdb-ui-kit";

export class SideNav {
  public sidenav = new Sidenav();
  public sideNavToggled = true;

  attached() {
    const sidenav = document.getElementById("sidenav-4");
    const sidenavInstance = new Sidenav(sidenav);
    sidenavInstance.show();
    this.sidenav = sidenavInstance;
  }

  toggleSlim() {
    this.sideNavToggled = !this.sideNavToggled;
    this.sidenav.show();
    this.sidenav.toggleSlim();
  }
}
