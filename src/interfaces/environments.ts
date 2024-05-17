export interface TwizzaOptions {
  environment: {
    securityApiServer: string;
    logisticsApiServer?: string;
    warehousingApiServer?: string;
    adminApiServer?: string;
    workflowApiServer?: string;
    salesAppApiServer?: string;
    debug: boolean;
  };
  appSettings: {
    shortDateFormat: string;
    shortDateTimeFormat: string;
  };
}
export declare let twizzaOptions: TwizzaOptions;
export declare class TwizzaConfig {
  options: TwizzaOptions;
  constructor();
}
//# sourceMappingURL=twizza-config.d.ts.map
