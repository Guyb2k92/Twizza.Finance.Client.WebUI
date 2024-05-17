import { Customer } from './customer';
import moment from 'moment';

export class Waypoint {
  Id: number;
  Sequence: number;
  TripId: number;
  LegTypeId: number;
  LegDistance: number;
  DepotId?: number;
  CustomerId?: number;
  PlannedArrivalTime: moment.Moment;
  PlannedDepartureTime: moment.Moment;
  Manual: boolean;

  Customer: Customer;

  constructor();
  constructor(src: Waypoint);
  constructor(src?: Waypoint) {
    if (src) {
      this.Id = src.Id;
      this.Sequence = src.Sequence;
      this.TripId = src.TripId;
      this.LegTypeId = src.LegTypeId;
      this.LegDistance = src.LegDistance;
      this.DepotId = src.DepotId;
      this.CustomerId = src.CustomerId;
      this.PlannedArrivalTime = moment(src.PlannedArrivalTime);
      this.PlannedDepartureTime = moment(src.PlannedDepartureTime);
      this.Manual = src.Manual;

      if (src.Customer) {
        this.Customer = new Customer(src.Customer);
      }
    } else {
      this.Id = 0;
      this.Manual = true;
    }
  }

  public get Name(): string {
    if (this.Customer) {
      return this.Customer.Name;
    }

    return '';
  }

  public get Address(): string {
    if (this.Customer) {
      return this.Customer.Address;
    }
    return '';
  }

  public get Latitude(): number {
    if (this.Customer) {
      return this.Customer.Latitude;
    }
    return 0;
  }

  public get Longitude(): number {
    if (this.Customer) {
      return this.Customer.Longitude;
    }
    return 0;
  }

  public get GPS(): string {
    if (this.Customer) {
      return '(' + this.Customer.Latitude + ', ' + this.Customer.Longitude + ')';
    }
    return '()';
  }

  public get Duration(): number {
    return this.PlannedDepartureTime.diff(this.PlannedArrivalTime, 'minutes');
  }
}
