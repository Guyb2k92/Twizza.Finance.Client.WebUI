import { AuthenticationService } from "./authentication-service";
import { HttpClient } from "@aurelia/fetch-client";
import { inject } from "aurelia";

@inject(AuthenticationService)
export class AuthHttpClient extends HttpClient {
  baseUrl: string;
  constructor(private auth: AuthenticationService) {
    super();
    this.configure((config) => {
      config.useStandardConfiguration();
      config.withDefaults({ mode: "cors" });
      config.withBaseUrl(this.baseUrl);
      config.withInterceptor({
        request(request) {
          const authHeader = auth.getAuthToken();
          request.headers.append("Authorization", authHeader);
          return request;
        },
      });
    });
  }
}
