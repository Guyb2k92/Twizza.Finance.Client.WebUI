import { singleton } from "aurelia";

@singleton
export class Breadcrumbs {
  public breadcrumbs = [{ name: "test", route: "test" }];

  addCrumb(name: string, route: string) {
    const crumb = {
      name,
      route,
    };
    this.breadcrumbs = [...this.breadcrumbs, crumb];
    console.log(this.breadcrumbs);
  }
}
