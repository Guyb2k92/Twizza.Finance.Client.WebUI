import * as Plugin from "./index";
import * as mdb from "mdb-ui-kit";

import Aurelia from "aurelia";
import { MyApp } from "./my-app";
import { RouterConfiguration } from "@aurelia/router";

Aurelia.register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .register(mdb)
  .register(Plugin)
  .app(MyApp)
  .start();
