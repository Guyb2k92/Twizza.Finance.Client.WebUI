import {
  IRouteableComponent,
  Parameters,
  RoutingInstruction,
} from "@aurelia/router";

import { Breadcrumbs } from "./../../components/breadcrumbs";
import { inject } from "aurelia";

@inject(Breadcrumbs)
export class Deals implements IRouteableComponent {
  loading(
    parameters: Parameters,
    instruction: RoutingInstruction
  ): void | Promise<void> {}
  constructor(private breadcrumbs: Breadcrumbs) {
    this.breadcrumbs.addCrumb("test", "test");
    console.log(this.breadcrumbs);
  }
}
