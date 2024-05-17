import { Location } from './location';
import { ResponsibilityCentre } from './responsibility-centre';

export class ResponsibilityCentreLocation {
  Id: number;
  ResponsibilityCentreId: number;
  LocationId: number;
  IsDefault: number;

  ResponsibilityCentre: ResponsibilityCentre;
  Location: Location;

  constructor();
  constructor(src: ResponsibilityCentreLocation);
  constructor(src?: ResponsibilityCentreLocation) {
    if (src) {
      this.Id = src.Id;
      this.ResponsibilityCentreId = src.ResponsibilityCentreId;
      this.LocationId = src.LocationId;
      this.IsDefault = src.IsDefault;

      if (src.ResponsibilityCentre) {
        this.ResponsibilityCentre = new ResponsibilityCentre(src.ResponsibilityCentre);
      }

      if (src.Location) {
        this.Location = new Location(src.Location);
      }
    }
  }
}
