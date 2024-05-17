﻿export type Address = {
  StreetAddress1: string;
  StreetAddress2: string;
  City: string;
  Country: string;
  PostalCode: string;
  Province: string;
  StreetNumber: string;
  FormattedAddress: string;
  Suburb: string;
};

export class Geolocation {
  Id: number;
  Latitude: number;
  Longitude: number;
  Address: string;
  StreetNumber: string;
  City: string;
  Area: string;
  Country: string;
  PostalCode?: number;
  AddressLine1: string;
  AddressLine2: string;
  Suburb: string;
  IsDeleted: boolean;
  IsPostal: boolean;

  constructor();
  constructor(src: Geolocation);
  constructor(src?: Geolocation) {
    if (src) {
      this.Id = src.Id;
      this.Latitude = src.Latitude;
      this.Longitude = src.Longitude;
      this.Address = src.Address;
      this.StreetNumber = src.StreetNumber;
      this.City = src.City;
      this.Area = src.Area;
      this.Country = src.Country;
      this.PostalCode = src.PostalCode;
      this.AddressLine1 = src.AddressLine1;
      this.AddressLine2 = src.AddressLine2;
      this.Suburb = src.Suburb;
      this.IsDeleted = src.IsDeleted;
      this.IsPostal = src.IsPostal;
    }
  }
}
