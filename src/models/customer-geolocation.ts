﻿import { Geolocation } from './geolocation';

export enum AddressType {
  Unspecified = 0,
  Physical = 1,
  Delivery = 2,
  Postal = 3
}

export class CustomerGeolocation {
  Id: number;
  CustomerId: number;
  GeolocationId: number;
  LocationType: AddressType
  IsDeleted: boolean;
  Geolocation: Geolocation;

  constructor();
  constructor(src: CustomerGeolocation);
  constructor(src?: CustomerGeolocation) {
    if (src) {
      this.Id = src.Id;
      this.CustomerId = src.CustomerId;
      this.GeolocationId = src.GeolocationId;
      this.LocationType = src.LocationType;
      this.IsDeleted = src.IsDeleted;

      this.Geolocation = new Geolocation(src.Geolocation);
    }
  }
}
