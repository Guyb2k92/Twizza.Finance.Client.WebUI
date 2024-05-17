import { IEventAggregator, resolve } from "aurelia";

export class Breadcrumbs {
  constructor() {}
  readonly ea: IEventAggregator = resolve(IEventAggregator);

  public breadcrumbs = [];

  created() {
    this.ea.subscribe("au:router:navigation-end", (payload) => {
      // @ts-expect-error navigationType
      this.updateBreadcrumbs(payload.navigation.instruction);
    });
  }

  updateBreadcrumbs(name) {
    switch (name) {
      case "deals":
        this.breadcrumbs = [{ route: "deals", name: "Deals" }];
        break;
      case "purchase-orders":
        this.breadcrumbs = [
          { route: "purchase-orders", name: "Purchase Orders" },
        ];
        break;
      case "/shift-actions/create-mrp":
        this.breadcrumbs = [
          { route: "shift-actions", name: "Shift Action" },
          { route: "/shift-actions/create-mrp", name: "Create MRP" },
        ];
        break;
      default:
        this.breadcrumbs = [];
    }
  }

  addCrumb(name: string, route: string) {
    const crumb = {
      name,
      route,
    };
    this.breadcrumbs = [...this.breadcrumbs, crumb];
  }
}
