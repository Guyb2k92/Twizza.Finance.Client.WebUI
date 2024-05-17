import { ILocation, INamedStop } from "@twizzadev/twizza-common-webui";

import { Company } from "./company";
import { CustomerContact } from "./customer-contact";
import { CustomerFridge } from "./customer-fridge";
import { CustomerGeolocation } from "./customer-geolocation";
import { CustomerPriceSurvey } from "./customer-price-survey";
import { CustomerProfile } from "./customer-profile";
import { CustomerVisit } from "./customer-visit";
import { ValidationRules } from "aurelia-validation";
import { Waypoint } from "./waypoint";
import { computedFrom } from "aurelia-binding";
import moment from "moment";

export class Customer implements ILocation, INamedStop {
  Id: number;
  Name: string;
  CustomerNumber: string; //To Delete
  BillToAccountNumber: string; //To Delete
  Chain: string; //To Delete
  CompanyId: number; //To Delete
  Longitude: number;
  Latitude: number;
  Address: string;
  ExpectedDeliveryWaitingTime: number;
  DeliveryOpenTimeWeekDays: moment.Moment;
  DeliveryCloseTimeWeekDays: moment.Moment;
  DeliveryOpenTimeSaturdays: moment.Moment;
  DeliveryCloseTimeSaturdays: moment.Moment;
  TradingAsName: string;
  CompanyRegNumber: string;

  Waypoints: Waypoint[]; //Not Needed
  CustomerGeolocations: CustomerGeolocation[] = [];
  CustomerFridges: CustomerFridge[] = [];
  Company: Company; //To Delete
  PriceSurveys: CustomerPriceSurvey[] = []; //To Delete
  Contacts: CustomerContact[] = [];
  CustomerProfiles: CustomerProfile[] = [];
  Visits: CustomerVisit[] = [];

  constructor();
  constructor(src: Customer);
  constructor(src?: Customer) {
    this.Waypoints = [];

    if (src) {
      this.Id = src.Id;
      this.Name = src.Name;
      this.CustomerNumber = src.CustomerNumber; //To Delete
      this.Chain = src.Chain; //To Delete
      this.CompanyId = src.CompanyId; //To Delete
      this.Longitude = src.Longitude;
      this.Latitude = src.Latitude;
      this.Address = src.Address;
      this.ExpectedDeliveryWaitingTime = src.ExpectedDeliveryWaitingTime;
      this.DeliveryOpenTimeWeekDays = moment(src.DeliveryOpenTimeWeekDays);
      this.DeliveryCloseTimeWeekDays = moment(src.DeliveryCloseTimeWeekDays);
      this.DeliveryOpenTimeSaturdays = moment(src.DeliveryOpenTimeSaturdays);
      this.DeliveryCloseTimeSaturdays = moment(src.DeliveryCloseTimeSaturdays);
      this.TradingAsName = src.TradingAsName;
      this.CompanyRegNumber = src.CompanyRegNumber;

      this.BillToAccountNumber = src.BillToAccountNumber; //To Delete

      if (src.Waypoints) {
        //No Needed
        src.Waypoints.forEach((wp) => {
          this.Waypoints.push(new Waypoint(wp));
        });
      }

      if (src.CustomerGeolocations && src.CustomerGeolocations.length > 0) {
        src.CustomerGeolocations.forEach((cl) =>
          this.CustomerGeolocations.push(new CustomerGeolocation(cl))
        );
      }

      if (src.CustomerFridges && src.CustomerFridges.length > 0) {
        src.CustomerFridges.forEach((fr) =>
          this.CustomerFridges.push(new CustomerFridge(fr))
        );
      }

      if (src.Company) {
        //To Delete
        this.Company = new Company(src.Company);
      }

      if (src.PriceSurveys && src.PriceSurveys.length > 0) {
        //To Delete
        src.PriceSurveys.forEach((ps) =>
          this.PriceSurveys.push(new CustomerPriceSurvey(ps))
        );
      }

      if (src.Contacts && src.Contacts.length > 0) {
        src.Contacts.forEach((c) => this.Contacts.push(new CustomerContact(c)));
      }

      if (src.CustomerProfiles && src.CustomerProfiles.length > 0) {
        src.CustomerProfiles.forEach((cp) =>
          this.CustomerProfiles.push(new CustomerProfile(cp))
        );
      }

      if (src.Visits && src.Visits.length > 0) {
        src.Visits.forEach((v) => this.Visits.push(new CustomerVisit(v)));
      }
    } else {
      this.Id = 0;
    }
  }

  @computedFrom("Name", "CustomerNumber")
  public get NamedAccount(): string {
    return `${this.Name} - ${this.CustomerNumber}`;
  }
  @computedFrom("Name", "CustomerNumber")
  public get NamedSearchAccount(): string {
    return `${this.Name} - ${this.CustomerNumber} - ${
      this.CompanyId === 1 ? "Twizza" : "Crickley"
    }`;
  }
  @computedFrom("Name", "CustomerProfiles")
  public get NamedSearchAccounts(): string {
    return `${this.Name} - ${this.AccountNumbers}`;
  }

  @computedFrom("Contacts")
  public get EMail(): string {
    if (!this.Contacts || !this.Contacts.length) {
      return null;
    }

    const primContact = this.Contacts.find(
      (pc) => pc.IsPrimaryContact && !pc.IsDeleted
    );
    return primContact ? primContact.EmailAddress : null;
  }
  @computedFrom("Contacts")
  public get Phone(): string {
    if (!this.Contacts || !this.Contacts.length) {
      return null;
    }

    const primContact = this.Contacts.find(
      (pc) => pc.IsPrimaryContact && !pc.IsDeleted
    );
    return primContact ? primContact.PhoneNumber : null;
  }

  @computedFrom("CustomerProfiles")
  public get AccountNumbers(): string {
    let result = new Array<string>();
    this.CustomerProfiles.forEach((profile) => {
      result.push(profile.SellToAccountNumber);
    });

    return result.join(", ");
  }

  @computedFrom("CustomerProfiles")
  public get AccountNumberBadgeHTML(): string {
    let result = new Array<string>();
    this.CustomerProfiles.forEach((profile) => {
      result.push(profile.AccountNumberBadgeHTML);
    });

    return result.join("");
  }

  @computedFrom("Name", "CustomerProfiles")
  public get NamedAccountNumberBadgeHTML(): string {
    let result = new Array<string>();
    this.CustomerProfiles.forEach((profile) => {
      result.push(profile.AccountNumberBadgeHTML);
    });
    result.push(` ${this.Name}`);

    return result.join("");
  }

  @computedFrom("CustomerProfiles")
  public get RepCodesBadgeHTML(): string {
    let result = new Array<string>();
    this.CustomerProfiles.forEach((profile) => {
      if (profile.SalesRep) {
        result.push(profile.RepCodeBadgeHTML);
      }
    });

    return result.join("");
  }

  @computedFrom("CustomerProfiles")
  public get TwizzaCustomer(): boolean {
    return !!this.CustomerProfiles.find((profile) => profile.CompanyId === 1);
  }

  @computedFrom("CustomerProfiles")
  public get CrickleyCustomer(): boolean {
    return !!this.CustomerProfiles.find((profile) => profile.CompanyId === 2);
  }

  public static FilteredCustomers(
    customerList: Customer[],
    filter: string,
    limit?: number
  ): Promise<Customer[]> {
    if (filter.length < 3) return Promise.resolve([]);

    let result = customerList.filter((cust) => {
      if (cust.NamedAccount.toLowerCase().indexOf(filter.toLowerCase()) > -1)
        return true;
      if (cust.CustomerNumber.toLowerCase().indexOf(filter.toLowerCase()) > -1)
        return true;
      if (cust.Address.toLowerCase().indexOf(filter.toLowerCase()) > -1)
        return true;

      return false;
    });
    if (limit) {
      result = result.splice(0, limit);
    }
    return Promise.resolve(result);
  }

  public static FilteredChains(
    customerList: Customer[],
    filter: string,
    limit?: number
  ): Promise<Customer[]> {
    if (filter.length < 3) return Promise.resolve([]);

    let result = customerList.filter((cust) => {
      if (cust.NamedAccount.toLowerCase().indexOf(filter.toLowerCase()) > -1)
        return true;
      if (cust.CustomerNumber.toLowerCase().indexOf(filter.toLowerCase()) > -1)
        return true;
      if (cust.Chain.toLowerCase().indexOf(filter.toLowerCase()) > -1)
        return true;

      return false;
    });
    if (limit) {
      result = result.splice(0, limit);
    }
    return Promise.resolve(result);
  }
}

//prettier-ignore
ValidationRules
  .ensure((c: Customer) => c.Name).required().then().minLength(1).maxLength(128)
  .ensure((c: Customer) => c.Longitude).required()
  .ensure((c: Customer) => c.Latitude).required()
  .ensure((c: Customer) => c.Address).required().then().minLength(1).maxLength(128)
  .ensure((c: Customer) => c.ExpectedDeliveryWaitingTime).required().then().satisfies(time => time >= 0 && time <= 480)
  .ensure((c: Customer) => c.DeliveryOpenTimeWeekDays).required()
  .ensure((c: Customer) => c.DeliveryCloseTimeWeekDays).required()
  .on(Customer);
