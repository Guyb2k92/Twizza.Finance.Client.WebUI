import { Deals } from "./pages/Deals/deals";
import { Home } from "./pages/Home/home";
import { PurchaseOrders } from "./pages/PurchaseOrders/purchase-orders";

export class MyApp {
  static routes = [
    {
      path: "",
      component: Home,
      title: "Home",
    },
    {
      path: "/deals",
      component: Deals,
      title: "Deals",
    },
    {
      path: "/purchase-orders",
      component: PurchaseOrders,
      title: "Purchase Orders",
    },
  ];
}
