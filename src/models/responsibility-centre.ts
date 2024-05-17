﻿import { Company } from './company';
import { ProductResponsibilityCentre } from './product-responsibility-centre';
import { ResponsibilityCentreLocation } from './responsibility-centre-location';
import { CompulsoryOrderLine } from './compulsory-order-line';

export class ResponsibilityCentre {
  Id: number;
  Code: string;
  Description: string;
  CompanyId: number;
  IsDeleted: boolean;

  Company: Company;
  ProductResponsibilityCentres: ProductResponsibilityCentre[] = [];
  ResponsibilityCentreLocations: ResponsibilityCentreLocation[] = [];
  CompulsoryOrderLines: CompulsoryOrderLine[] = [];

  constructor();
  constructor(src: ResponsibilityCentre);
  constructor(src?: ResponsibilityCentre) {
    if (src) {
      this.Id = src.Id;
      this.Code = src.Code;
      this.Description = src.Description;
      this.CompanyId = src.CompanyId;
      this.IsDeleted = src.IsDeleted;

      if (src.Company) {
        this.Company = src.Company;
      }

      if (src.ResponsibilityCentreLocations && src.ResponsibilityCentreLocations.length > 0) {
        src.ResponsibilityCentreLocations.forEach(rcl => {
          this.ResponsibilityCentreLocations.push(new ResponsibilityCentreLocation(rcl));
        });
      }

      if (src.ProductResponsibilityCentres && src.ProductResponsibilityCentres.length > 0) {
        src.ProductResponsibilityCentres.forEach(prc => {
          this.ProductResponsibilityCentres.push(new ProductResponsibilityCentre(prc));
        });
      }

      if (src.CompulsoryOrderLines && src.CompulsoryOrderLines.length > 0) {
        src.CompulsoryOrderLines.forEach(col =>
          this.CompulsoryOrderLines.push(new CompulsoryOrderLine(col))
        );
      }
    }
  }
}
