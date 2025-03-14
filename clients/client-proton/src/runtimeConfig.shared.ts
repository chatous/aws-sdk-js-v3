// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultRegionInfoProvider } from "./endpoints";
import { ProtonClientConfig } from "./ProtonClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ProtonClientConfig) => ({
  apiVersion: "2020-07-20",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Proton",
  urlParser: config?.urlParser ?? parseUrl,
});
