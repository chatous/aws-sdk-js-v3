// smithy-typescript generated code
import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "ap-northeast-1": {
    variants: [
      {
        hostname: "portal.sso.ap-northeast-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-northeast-1",
  },
  "ap-northeast-2": {
    variants: [
      {
        hostname: "portal.sso.ap-northeast-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-northeast-2",
  },
  "ap-northeast-3": {
    variants: [
      {
        hostname: "portal.sso.ap-northeast-3.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-northeast-3",
  },
  "ap-south-1": {
    variants: [
      {
        hostname: "portal.sso.ap-south-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-south-1",
  },
  "ap-southeast-1": {
    variants: [
      {
        hostname: "portal.sso.ap-southeast-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-southeast-1",
  },
  "ap-southeast-2": {
    variants: [
      {
        hostname: "portal.sso.ap-southeast-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-southeast-2",
  },
  "ca-central-1": {
    variants: [
      {
        hostname: "portal.sso.ca-central-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ca-central-1",
  },
  "eu-central-1": {
    variants: [
      {
        hostname: "portal.sso.eu-central-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-central-1",
  },
  "eu-north-1": {
    variants: [
      {
        hostname: "portal.sso.eu-north-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-north-1",
  },
  "eu-south-1": {
    variants: [
      {
        hostname: "portal.sso.eu-south-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-south-1",
  },
  "eu-west-1": {
    variants: [
      {
        hostname: "portal.sso.eu-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-west-1",
  },
  "eu-west-2": {
    variants: [
      {
        hostname: "portal.sso.eu-west-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-west-2",
  },
  "eu-west-3": {
    variants: [
      {
        hostname: "portal.sso.eu-west-3.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-west-3",
  },
  "sa-east-1": {
    variants: [
      {
        hostname: "portal.sso.sa-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "sa-east-1",
  },
  "us-east-1": {
    variants: [
      {
        hostname: "portal.sso.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-1",
  },
  "us-east-2": {
    variants: [
      {
        hostname: "portal.sso.us-east-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-2",
  },
  "us-gov-east-1": {
    variants: [
      {
        hostname: "portal.sso.us-gov-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-east-1",
  },
  "us-gov-west-1": {
    variants: [
      {
        hostname: "portal.sso.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "us-west-2": {
    variants: [
      {
        hostname: "portal.sso.us-west-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-west-2",
  },
};

const partitionHash: PartitionHash = {
  aws: {
    regions: [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2",
    ],
    regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "portal.sso.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "portal.sso-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "portal.sso-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "portal.sso.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "portal.sso.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "portal.sso-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "portal.sso-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "portal.sso.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "portal.sso.{region}.c2s.ic.gov",
        tags: [],
      },
      {
        hostname: "portal.sso-fips.{region}.c2s.ic.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "portal.sso.{region}.sc2s.sgov.gov",
        tags: [],
      },
      {
        hostname: "portal.sso-fips.{region}.sc2s.sgov.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "portal.sso.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "portal.sso-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "portal.sso-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "portal.sso.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
};

export const defaultRegionInfoProvider: RegionInfoProvider = async (
  region: string,
  options?: RegionInfoProviderOptions
) =>
  getRegionInfo(region, {
    ...options,
    signingService: "awsssoportal",
    regionHash,
    partitionHash,
  });
