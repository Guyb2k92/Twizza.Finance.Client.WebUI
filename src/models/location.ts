import { Company } from './company';
import { ResponsibilityCentreLocation } from './responsibility-centre-location';

export class Location {
  Id: number;
  Code: string;
  MinimumLayerQuantity: number;
  IsDeleted: boolean;
  Description: string;
  CompanyId: number;

  Company: Company;
  ResponsibilityCentreLocations: ResponsibilityCentreLocation[] = [];

  constructor();
  constructor(src: Location);
  constructor(src?: Location) {
    if (src) {
      this.Id = src.Id;
      this.Code = src.Code;
      this.MinimumLayerQuantity = src.MinimumLayerQuantity;
      this.IsDeleted = src.IsDeleted;
      this.Description = src.Description;
      this.CompanyId = src.CompanyId;

      if (src.Company) {
        this.Company = new Company(src.Company);
      }

      if (src.ResponsibilityCentreLocations && src.ResponsibilityCentreLocations.length > 0) {
        src.ResponsibilityCentreLocations.forEach(rcl => {
          this.ResponsibilityCentreLocations.push(new ResponsibilityCentreLocation(rcl));
        });
      }
    }
  }
}

