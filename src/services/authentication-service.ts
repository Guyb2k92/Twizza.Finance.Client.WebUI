import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { HttpClient } from "@aurelia/fetch-client";
import { UserAccount } from "@twizzadev/twizza-common-webui/dist/models/user-account";
import { inject } from "aurelia";

@inject(HttpClient)
export class AuthenticationService {
  private email = "lloydn@twizza.co.za"; // Use '=' for assignment
  private password = "123qwe"; // Use '=' for assignment
  private currentUser = new BehaviorSubject<UserAccount>(null);

  constructor(private http: HttpClient) {
    this.http.configure((config) => {
      config.useStandardConfiguration();
      config.withBaseUrl(
        "https://dev.clarkservices.co.za/Twizza.Security.WebApi"
      );
    });
  }

  public get LoggedInUser() {
    return this.currentUser.asObservable();
  }

  public HasPermission(secobj: string): boolean {
    if (!this.currentUser.value) return false;

    return (
      this.currentUser.value.Claims.find((claim) => claim.Type == secobj) !==
      undefined
    );
  }

  public get LoggedIn(): boolean {
    return this.currentUser.value != null;
  }

  public getAuthToken(): string {
    return this.authToken(this.email, this.password);
  }

  private authToken(email: string, password: string): string {
    return "Basic " + btoa(email + ":" + password);
  }
}
