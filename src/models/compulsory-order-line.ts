import { UnitOfMeasure } from './unit-of-measure';
import { NavItem } from './nav-item';
import { OrderLine } from './order-line';

export type CompulsoryQtyType = { orderPallets: number; orderBoards: number; orderDrums: number; totalLayers: number };

export class CompulsoryOrderLine {
  Id: number;
  CompanyId: number;
  ResponsibilityCentreId: number;
  ItemDescription: string;
  ItemCode: string;
  UnitOfMeasureId: number;
  CompulsoryOrderLineType: CompulsoryOrderLineTypes;
  ChepItemDescription: string;
  ChepItemCode: string;

  NavItem: NavItem;
  UnitOfMeasure: UnitOfMeasure;

  constructor();
  constructor(src: CompulsoryOrderLine);
  constructor(src?: CompulsoryOrderLine) {
    if (src) {
      this.Id = src.Id;
      this.CompanyId = src.CompanyId;
      this.ResponsibilityCentreId = src.ResponsibilityCentreId;
      this.ItemDescription = src.ItemDescription;
      this.ItemCode = src.ItemCode;
      this.UnitOfMeasureId = src.UnitOfMeasureId;
      this.CompulsoryOrderLineType = src.CompulsoryOrderLineType;
      this.ChepItemDescription = src.ChepItemDescription;
      this.ChepItemCode = src.ChepItemCode;

      if (src.NavItem) {
        this.NavItem = src.NavItem;
      }

      if (src.UnitOfMeasure) {
        this.UnitOfMeasure = new UnitOfMeasure(src.UnitOfMeasure);
      }
    }
  }

  static getCompulsoryItems(items: OrderLine[]): CompulsoryQtyType {
    let orderPallets = 0;
    let orderBoards = 0;
    let orderDrums = 0;
    let totalLayers = 0;

    const orderlineGroups = this.groupBy(
      items.map(i =>
        Object.assign(i, {
          key: `${i.Product.Size}-${i.Product.UnitOfMeasure.DisplayName}-${
            i.Product.CasesPerLayer
          }-${i.Product.LayersPerPallet}-${i.Product.RequiresLayerBoard}`,
        })
      ),
      (item: any) => {
        return item.key;
      }
    );


    let remainingLayers = [];
    Object.keys(orderlineGroups).forEach(grp => {
      let lGroup: OrderLine[] = orderlineGroups[grp];
      let qty = lGroup.reduce((acc, val) => acc + parseInt(val.Quantity.toString()), 0);
      let casesPerLayer = lGroup[0].Product.CasesPerLayer;
      let layersPerPallet = lGroup[0].Product.LayersPerPallet;
      if (casesPerLayer > 0 && layersPerPallet > 0) {
        let layers = Math.floor(qty / casesPerLayer);
        totalLayers += layers;
        let pallets = Math.floor(layers / layersPerPallet);
        let remaining = qty - pallets * layersPerPallet * casesPerLayer;
        let layerBoards = lGroup[0].Product.RequiresLayerBoard
          ? pallets * (layersPerPallet - 1)
          : 0;
        orderPallets += pallets;
        orderBoards += layerBoards;

        remainingLayers.push({
          RemainingLayer: remaining / casesPerLayer,
          LayersPerPallet: layersPerPallet,
          RequiresLayerBoard: lGroup[0].Product.RequiresLayerBoard,
          CasesPerLayer: casesPerLayer,
        });
      }
    });

    let splitPallet = this.calcSplitPallet(remainingLayers);
    orderPallets += splitPallet.Pallets;
    orderBoards += splitPallet.Boards;

    const drumOrderLines = items.filter(ol => ol.Product.CrateType === CompulsoryOrderLineTypes.Drum);
    drumOrderLines.forEach(ol => orderDrums += Math.ceil(ol.Quantity / ol.Product.PackSize));

    return {
      orderBoards,
      orderPallets,
      orderDrums,
      totalLayers
    }
  }

  private static calcSplitPallet(remainingLayers: any[]): { Pallets: number; Boards: number } {
    const maxHeight = 1.1;
    let height = 0;

    let layerBoards = 0;
    let pallets = 0;

    remainingLayers.forEach(remainingLayer => {
      while (remainingLayer.RemainingLayer >= 1) {
        height += 1 / remainingLayer.LayersPerPallet;

        if (remainingLayer.RequiresLayerBoard) {
          layerBoards += 1;
        }

        remainingLayer.RemainingLayer -= 1;

        if (height >= maxHeight) {
          pallets += 1;
          height = 0;
        }
      }
    });

    if (pallets + layerBoards > 0) {
      pallets += 1;
      layerBoards = layerBoards >= pallets ? layerBoards - pallets : 0;
    }

    return {
      Pallets: pallets,
      Boards: layerBoards
    }

  }

  private static groupBy(arr: any, fn: any) {
    return arr
      .map(typeof fn === 'function' ? fn : (val: any) => val[fn])
      .reduce((acc: any, val: any, i: any) => {
        acc[val] = (acc[val] || []).concat(arr[i]);
        return acc;
      }, {});
  }
}

export enum CompulsoryOrderLineTypes {
  Pallets = 0,
  Boards = 1,
  Other = 2,
  Drum = 3,
}
