// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  CancelImageCreationCommandInput,
  CancelImageCreationCommandOutput,
} from "../commands/CancelImageCreationCommand";
import { CreateComponentCommandInput, CreateComponentCommandOutput } from "../commands/CreateComponentCommand";
import {
  CreateContainerRecipeCommandInput,
  CreateContainerRecipeCommandOutput,
} from "../commands/CreateContainerRecipeCommand";
import {
  CreateDistributionConfigurationCommandInput,
  CreateDistributionConfigurationCommandOutput,
} from "../commands/CreateDistributionConfigurationCommand";
import { CreateImageCommandInput, CreateImageCommandOutput } from "../commands/CreateImageCommand";
import {
  CreateImagePipelineCommandInput,
  CreateImagePipelineCommandOutput,
} from "../commands/CreateImagePipelineCommand";
import { CreateImageRecipeCommandInput, CreateImageRecipeCommandOutput } from "../commands/CreateImageRecipeCommand";
import {
  CreateInfrastructureConfigurationCommandInput,
  CreateInfrastructureConfigurationCommandOutput,
} from "../commands/CreateInfrastructureConfigurationCommand";
import { DeleteComponentCommandInput, DeleteComponentCommandOutput } from "../commands/DeleteComponentCommand";
import {
  DeleteContainerRecipeCommandInput,
  DeleteContainerRecipeCommandOutput,
} from "../commands/DeleteContainerRecipeCommand";
import {
  DeleteDistributionConfigurationCommandInput,
  DeleteDistributionConfigurationCommandOutput,
} from "../commands/DeleteDistributionConfigurationCommand";
import { DeleteImageCommandInput, DeleteImageCommandOutput } from "../commands/DeleteImageCommand";
import {
  DeleteImagePipelineCommandInput,
  DeleteImagePipelineCommandOutput,
} from "../commands/DeleteImagePipelineCommand";
import { DeleteImageRecipeCommandInput, DeleteImageRecipeCommandOutput } from "../commands/DeleteImageRecipeCommand";
import {
  DeleteInfrastructureConfigurationCommandInput,
  DeleteInfrastructureConfigurationCommandOutput,
} from "../commands/DeleteInfrastructureConfigurationCommand";
import { GetComponentCommandInput, GetComponentCommandOutput } from "../commands/GetComponentCommand";
import { GetComponentPolicyCommandInput, GetComponentPolicyCommandOutput } from "../commands/GetComponentPolicyCommand";
import { GetContainerRecipeCommandInput, GetContainerRecipeCommandOutput } from "../commands/GetContainerRecipeCommand";
import {
  GetContainerRecipePolicyCommandInput,
  GetContainerRecipePolicyCommandOutput,
} from "../commands/GetContainerRecipePolicyCommand";
import {
  GetDistributionConfigurationCommandInput,
  GetDistributionConfigurationCommandOutput,
} from "../commands/GetDistributionConfigurationCommand";
import { GetImageCommandInput, GetImageCommandOutput } from "../commands/GetImageCommand";
import { GetImagePipelineCommandInput, GetImagePipelineCommandOutput } from "../commands/GetImagePipelineCommand";
import { GetImagePolicyCommandInput, GetImagePolicyCommandOutput } from "../commands/GetImagePolicyCommand";
import { GetImageRecipeCommandInput, GetImageRecipeCommandOutput } from "../commands/GetImageRecipeCommand";
import {
  GetImageRecipePolicyCommandInput,
  GetImageRecipePolicyCommandOutput,
} from "../commands/GetImageRecipePolicyCommand";
import {
  GetInfrastructureConfigurationCommandInput,
  GetInfrastructureConfigurationCommandOutput,
} from "../commands/GetInfrastructureConfigurationCommand";
import { ImportComponentCommandInput, ImportComponentCommandOutput } from "../commands/ImportComponentCommand";
import { ImportVmImageCommandInput, ImportVmImageCommandOutput } from "../commands/ImportVmImageCommand";
import {
  ListComponentBuildVersionsCommandInput,
  ListComponentBuildVersionsCommandOutput,
} from "../commands/ListComponentBuildVersionsCommand";
import { ListComponentsCommandInput, ListComponentsCommandOutput } from "../commands/ListComponentsCommand";
import {
  ListContainerRecipesCommandInput,
  ListContainerRecipesCommandOutput,
} from "../commands/ListContainerRecipesCommand";
import {
  ListDistributionConfigurationsCommandInput,
  ListDistributionConfigurationsCommandOutput,
} from "../commands/ListDistributionConfigurationsCommand";
import {
  ListImageBuildVersionsCommandInput,
  ListImageBuildVersionsCommandOutput,
} from "../commands/ListImageBuildVersionsCommand";
import { ListImagePackagesCommandInput, ListImagePackagesCommandOutput } from "../commands/ListImagePackagesCommand";
import {
  ListImagePipelineImagesCommandInput,
  ListImagePipelineImagesCommandOutput,
} from "../commands/ListImagePipelineImagesCommand";
import { ListImagePipelinesCommandInput, ListImagePipelinesCommandOutput } from "../commands/ListImagePipelinesCommand";
import { ListImageRecipesCommandInput, ListImageRecipesCommandOutput } from "../commands/ListImageRecipesCommand";
import { ListImagesCommandInput, ListImagesCommandOutput } from "../commands/ListImagesCommand";
import {
  ListInfrastructureConfigurationsCommandInput,
  ListInfrastructureConfigurationsCommandOutput,
} from "../commands/ListInfrastructureConfigurationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutComponentPolicyCommandInput, PutComponentPolicyCommandOutput } from "../commands/PutComponentPolicyCommand";
import {
  PutContainerRecipePolicyCommandInput,
  PutContainerRecipePolicyCommandOutput,
} from "../commands/PutContainerRecipePolicyCommand";
import { PutImagePolicyCommandInput, PutImagePolicyCommandOutput } from "../commands/PutImagePolicyCommand";
import {
  PutImageRecipePolicyCommandInput,
  PutImageRecipePolicyCommandOutput,
} from "../commands/PutImageRecipePolicyCommand";
import {
  StartImagePipelineExecutionCommandInput,
  StartImagePipelineExecutionCommandOutput,
} from "../commands/StartImagePipelineExecutionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateDistributionConfigurationCommandInput,
  UpdateDistributionConfigurationCommandOutput,
} from "../commands/UpdateDistributionConfigurationCommand";
import {
  UpdateImagePipelineCommandInput,
  UpdateImagePipelineCommandOutput,
} from "../commands/UpdateImagePipelineCommand";
import {
  UpdateInfrastructureConfigurationCommandInput,
  UpdateInfrastructureConfigurationCommandOutput,
} from "../commands/UpdateInfrastructureConfigurationCommand";
import { ImagebuilderServiceException as __BaseException } from "../models/ImagebuilderServiceException";
import {
  AdditionalInstanceConfiguration,
  Ami,
  AmiDistributionConfiguration,
  CallRateLimitExceededException,
  ClientException,
  Component,
  ComponentConfiguration,
  ComponentParameter,
  ComponentParameterDetail,
  ComponentState,
  ComponentSummary,
  ComponentVersion,
  Container,
  ContainerDistributionConfiguration,
  ContainerRecipe,
  ContainerRecipeSummary,
  Distribution,
  DistributionConfiguration,
  DistributionConfigurationSummary,
  EbsInstanceBlockDeviceSpecification,
  FastLaunchConfiguration,
  FastLaunchLaunchTemplateSpecification,
  FastLaunchSnapshotConfiguration,
  Filter,
  ForbiddenException,
  IdempotentParameterMismatchException,
  Image,
  ImagePackage,
  ImagePipeline,
  ImageRecipe,
  ImageRecipeSummary,
  ImageState,
  ImageSummary,
  ImageTestsConfiguration,
  ImageVersion,
  InfrastructureConfiguration,
  InfrastructureConfigurationSummary,
  InstanceBlockDeviceMapping,
  InstanceConfiguration,
  InstanceMetadataOptions,
  InvalidPaginationTokenException,
  InvalidParameterCombinationException,
  InvalidParameterException,
  InvalidParameterValueException,
  InvalidRequestException,
  InvalidVersionNumberException,
  LaunchPermissionConfiguration,
  LaunchTemplateConfiguration,
  Logging,
  OutputResources,
  ResourceAlreadyExistsException,
  ResourceDependencyException,
  ResourceInUseException,
  ResourceNotFoundException,
  S3ExportConfiguration,
  S3Logs,
  Schedule,
  ServiceException,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  SystemsManagerAgent,
  TargetContainerRepository,
} from "../models/models_0";

export const serializeAws_restJson1CancelImageCreationCommand = async (
  input: CancelImageCreationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CancelImageCreation";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.imageBuildVersionArn !== undefined &&
      input.imageBuildVersionArn !== null && { imageBuildVersionArn: input.imageBuildVersionArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateComponentCommand = async (
  input: CreateComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateComponent";
  let body: any;
  body = JSON.stringify({
    ...(input.changeDescription !== undefined &&
      input.changeDescription !== null && { changeDescription: input.changeDescription }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.data !== undefined && input.data !== null && { data: input.data }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.platform !== undefined && input.platform !== null && { platform: input.platform }),
    ...(input.semanticVersion !== undefined &&
      input.semanticVersion !== null && { semanticVersion: input.semanticVersion }),
    ...(input.supportedOsVersions !== undefined &&
      input.supportedOsVersions !== null && {
        supportedOsVersions: serializeAws_restJson1OsVersionList(input.supportedOsVersions, context),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.uri !== undefined && input.uri !== null && { uri: input.uri }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateContainerRecipeCommand = async (
  input: CreateContainerRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateContainerRecipe";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.components !== undefined &&
      input.components !== null && {
        components: serializeAws_restJson1ComponentConfigurationList(input.components, context),
      }),
    ...(input.containerType !== undefined && input.containerType !== null && { containerType: input.containerType }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.dockerfileTemplateData !== undefined &&
      input.dockerfileTemplateData !== null && { dockerfileTemplateData: input.dockerfileTemplateData }),
    ...(input.dockerfileTemplateUri !== undefined &&
      input.dockerfileTemplateUri !== null && { dockerfileTemplateUri: input.dockerfileTemplateUri }),
    ...(input.imageOsVersionOverride !== undefined &&
      input.imageOsVersionOverride !== null && { imageOsVersionOverride: input.imageOsVersionOverride }),
    ...(input.instanceConfiguration !== undefined &&
      input.instanceConfiguration !== null && {
        instanceConfiguration: serializeAws_restJson1InstanceConfiguration(input.instanceConfiguration, context),
      }),
    ...(input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.parentImage !== undefined && input.parentImage !== null && { parentImage: input.parentImage }),
    ...(input.platformOverride !== undefined &&
      input.platformOverride !== null && { platformOverride: input.platformOverride }),
    ...(input.semanticVersion !== undefined &&
      input.semanticVersion !== null && { semanticVersion: input.semanticVersion }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.targetRepository !== undefined &&
      input.targetRepository !== null && {
        targetRepository: serializeAws_restJson1TargetContainerRepository(input.targetRepository, context),
      }),
    ...(input.workingDirectory !== undefined &&
      input.workingDirectory !== null && { workingDirectory: input.workingDirectory }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateDistributionConfigurationCommand = async (
  input: CreateDistributionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateDistributionConfiguration";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.distributions !== undefined &&
      input.distributions !== null && {
        distributions: serializeAws_restJson1DistributionList(input.distributions, context),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateImageCommand = async (
  input: CreateImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateImage";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.containerRecipeArn !== undefined &&
      input.containerRecipeArn !== null && { containerRecipeArn: input.containerRecipeArn }),
    ...(input.distributionConfigurationArn !== undefined &&
      input.distributionConfigurationArn !== null && {
        distributionConfigurationArn: input.distributionConfigurationArn,
      }),
    ...(input.enhancedImageMetadataEnabled !== undefined &&
      input.enhancedImageMetadataEnabled !== null && {
        enhancedImageMetadataEnabled: input.enhancedImageMetadataEnabled,
      }),
    ...(input.imageRecipeArn !== undefined &&
      input.imageRecipeArn !== null && { imageRecipeArn: input.imageRecipeArn }),
    ...(input.imageTestsConfiguration !== undefined &&
      input.imageTestsConfiguration !== null && {
        imageTestsConfiguration: serializeAws_restJson1ImageTestsConfiguration(input.imageTestsConfiguration, context),
      }),
    ...(input.infrastructureConfigurationArn !== undefined &&
      input.infrastructureConfigurationArn !== null && {
        infrastructureConfigurationArn: input.infrastructureConfigurationArn,
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateImagePipelineCommand = async (
  input: CreateImagePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateImagePipeline";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.containerRecipeArn !== undefined &&
      input.containerRecipeArn !== null && { containerRecipeArn: input.containerRecipeArn }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.distributionConfigurationArn !== undefined &&
      input.distributionConfigurationArn !== null && {
        distributionConfigurationArn: input.distributionConfigurationArn,
      }),
    ...(input.enhancedImageMetadataEnabled !== undefined &&
      input.enhancedImageMetadataEnabled !== null && {
        enhancedImageMetadataEnabled: input.enhancedImageMetadataEnabled,
      }),
    ...(input.imageRecipeArn !== undefined &&
      input.imageRecipeArn !== null && { imageRecipeArn: input.imageRecipeArn }),
    ...(input.imageTestsConfiguration !== undefined &&
      input.imageTestsConfiguration !== null && {
        imageTestsConfiguration: serializeAws_restJson1ImageTestsConfiguration(input.imageTestsConfiguration, context),
      }),
    ...(input.infrastructureConfigurationArn !== undefined &&
      input.infrastructureConfigurationArn !== null && {
        infrastructureConfigurationArn: input.infrastructureConfigurationArn,
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.schedule !== undefined &&
      input.schedule !== null && { schedule: serializeAws_restJson1Schedule(input.schedule, context) }),
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateImageRecipeCommand = async (
  input: CreateImageRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateImageRecipe";
  let body: any;
  body = JSON.stringify({
    ...(input.additionalInstanceConfiguration !== undefined &&
      input.additionalInstanceConfiguration !== null && {
        additionalInstanceConfiguration: serializeAws_restJson1AdditionalInstanceConfiguration(
          input.additionalInstanceConfiguration,
          context
        ),
      }),
    ...(input.blockDeviceMappings !== undefined &&
      input.blockDeviceMappings !== null && {
        blockDeviceMappings: serializeAws_restJson1InstanceBlockDeviceMappings(input.blockDeviceMappings, context),
      }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.components !== undefined &&
      input.components !== null && {
        components: serializeAws_restJson1ComponentConfigurationList(input.components, context),
      }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.parentImage !== undefined && input.parentImage !== null && { parentImage: input.parentImage }),
    ...(input.semanticVersion !== undefined &&
      input.semanticVersion !== null && { semanticVersion: input.semanticVersion }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.workingDirectory !== undefined &&
      input.workingDirectory !== null && { workingDirectory: input.workingDirectory }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateInfrastructureConfigurationCommand = async (
  input: CreateInfrastructureConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateInfrastructureConfiguration";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.instanceMetadataOptions !== undefined &&
      input.instanceMetadataOptions !== null && {
        instanceMetadataOptions: serializeAws_restJson1InstanceMetadataOptions(input.instanceMetadataOptions, context),
      }),
    ...(input.instanceProfileName !== undefined &&
      input.instanceProfileName !== null && { instanceProfileName: input.instanceProfileName }),
    ...(input.instanceTypes !== undefined &&
      input.instanceTypes !== null && {
        instanceTypes: serializeAws_restJson1InstanceTypeList(input.instanceTypes, context),
      }),
    ...(input.keyPair !== undefined && input.keyPair !== null && { keyPair: input.keyPair }),
    ...(input.logging !== undefined &&
      input.logging !== null && { logging: serializeAws_restJson1Logging(input.logging, context) }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.resourceTags !== undefined &&
      input.resourceTags !== null && {
        resourceTags: serializeAws_restJson1ResourceTagMap(input.resourceTags, context),
      }),
    ...(input.securityGroupIds !== undefined &&
      input.securityGroupIds !== null && {
        securityGroupIds: serializeAws_restJson1SecurityGroupIds(input.securityGroupIds, context),
      }),
    ...(input.snsTopicArn !== undefined && input.snsTopicArn !== null && { snsTopicArn: input.snsTopicArn }),
    ...(input.subnetId !== undefined && input.subnetId !== null && { subnetId: input.subnetId }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.terminateInstanceOnFailure !== undefined &&
      input.terminateInstanceOnFailure !== null && { terminateInstanceOnFailure: input.terminateInstanceOnFailure }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteComponentCommand = async (
  input: DeleteComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteComponent";
  const query: any = {
    ...(input.componentBuildVersionArn !== undefined && { componentBuildVersionArn: input.componentBuildVersionArn }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteContainerRecipeCommand = async (
  input: DeleteContainerRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteContainerRecipe";
  const query: any = {
    ...(input.containerRecipeArn !== undefined && { containerRecipeArn: input.containerRecipeArn }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteDistributionConfigurationCommand = async (
  input: DeleteDistributionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteDistributionConfiguration";
  const query: any = {
    ...(input.distributionConfigurationArn !== undefined && {
      distributionConfigurationArn: input.distributionConfigurationArn,
    }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteImageCommand = async (
  input: DeleteImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteImage";
  const query: any = {
    ...(input.imageBuildVersionArn !== undefined && { imageBuildVersionArn: input.imageBuildVersionArn }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteImagePipelineCommand = async (
  input: DeleteImagePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteImagePipeline";
  const query: any = {
    ...(input.imagePipelineArn !== undefined && { imagePipelineArn: input.imagePipelineArn }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteImageRecipeCommand = async (
  input: DeleteImageRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteImageRecipe";
  const query: any = {
    ...(input.imageRecipeArn !== undefined && { imageRecipeArn: input.imageRecipeArn }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteInfrastructureConfigurationCommand = async (
  input: DeleteInfrastructureConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteInfrastructureConfiguration";
  const query: any = {
    ...(input.infrastructureConfigurationArn !== undefined && {
      infrastructureConfigurationArn: input.infrastructureConfigurationArn,
    }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetComponentCommand = async (
  input: GetComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetComponent";
  const query: any = {
    ...(input.componentBuildVersionArn !== undefined && { componentBuildVersionArn: input.componentBuildVersionArn }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetComponentPolicyCommand = async (
  input: GetComponentPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetComponentPolicy";
  const query: any = {
    ...(input.componentArn !== undefined && { componentArn: input.componentArn }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetContainerRecipeCommand = async (
  input: GetContainerRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetContainerRecipe";
  const query: any = {
    ...(input.containerRecipeArn !== undefined && { containerRecipeArn: input.containerRecipeArn }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetContainerRecipePolicyCommand = async (
  input: GetContainerRecipePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetContainerRecipePolicy";
  const query: any = {
    ...(input.containerRecipeArn !== undefined && { containerRecipeArn: input.containerRecipeArn }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetDistributionConfigurationCommand = async (
  input: GetDistributionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetDistributionConfiguration";
  const query: any = {
    ...(input.distributionConfigurationArn !== undefined && {
      distributionConfigurationArn: input.distributionConfigurationArn,
    }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetImageCommand = async (
  input: GetImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetImage";
  const query: any = {
    ...(input.imageBuildVersionArn !== undefined && { imageBuildVersionArn: input.imageBuildVersionArn }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetImagePipelineCommand = async (
  input: GetImagePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetImagePipeline";
  const query: any = {
    ...(input.imagePipelineArn !== undefined && { imagePipelineArn: input.imagePipelineArn }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetImagePolicyCommand = async (
  input: GetImagePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetImagePolicy";
  const query: any = {
    ...(input.imageArn !== undefined && { imageArn: input.imageArn }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetImageRecipeCommand = async (
  input: GetImageRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetImageRecipe";
  const query: any = {
    ...(input.imageRecipeArn !== undefined && { imageRecipeArn: input.imageRecipeArn }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetImageRecipePolicyCommand = async (
  input: GetImageRecipePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetImageRecipePolicy";
  const query: any = {
    ...(input.imageRecipeArn !== undefined && { imageRecipeArn: input.imageRecipeArn }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetInfrastructureConfigurationCommand = async (
  input: GetInfrastructureConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetInfrastructureConfiguration";
  const query: any = {
    ...(input.infrastructureConfigurationArn !== undefined && {
      infrastructureConfigurationArn: input.infrastructureConfigurationArn,
    }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ImportComponentCommand = async (
  input: ImportComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ImportComponent";
  let body: any;
  body = JSON.stringify({
    ...(input.changeDescription !== undefined &&
      input.changeDescription !== null && { changeDescription: input.changeDescription }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.data !== undefined && input.data !== null && { data: input.data }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.format !== undefined && input.format !== null && { format: input.format }),
    ...(input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.platform !== undefined && input.platform !== null && { platform: input.platform }),
    ...(input.semanticVersion !== undefined &&
      input.semanticVersion !== null && { semanticVersion: input.semanticVersion }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
    ...(input.uri !== undefined && input.uri !== null && { uri: input.uri }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ImportVmImageCommand = async (
  input: ImportVmImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ImportVmImage";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.osVersion !== undefined && input.osVersion !== null && { osVersion: input.osVersion }),
    ...(input.platform !== undefined && input.platform !== null && { platform: input.platform }),
    ...(input.semanticVersion !== undefined &&
      input.semanticVersion !== null && { semanticVersion: input.semanticVersion }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.vmImportTaskId !== undefined &&
      input.vmImportTaskId !== null && { vmImportTaskId: input.vmImportTaskId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListComponentBuildVersionsCommand = async (
  input: ListComponentBuildVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListComponentBuildVersions";
  let body: any;
  body = JSON.stringify({
    ...(input.componentVersionArn !== undefined &&
      input.componentVersionArn !== null && { componentVersionArn: input.componentVersionArn }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListComponentsCommand = async (
  input: ListComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListComponents";
  let body: any;
  body = JSON.stringify({
    ...(input.byName !== undefined && input.byName !== null && { byName: input.byName }),
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.owner !== undefined && input.owner !== null && { owner: input.owner }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListContainerRecipesCommand = async (
  input: ListContainerRecipesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListContainerRecipes";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.owner !== undefined && input.owner !== null && { owner: input.owner }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListDistributionConfigurationsCommand = async (
  input: ListDistributionConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListDistributionConfigurations";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListImageBuildVersionsCommand = async (
  input: ListImageBuildVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListImageBuildVersions";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) }),
    ...(input.imageVersionArn !== undefined &&
      input.imageVersionArn !== null && { imageVersionArn: input.imageVersionArn }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListImagePackagesCommand = async (
  input: ListImagePackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListImagePackages";
  let body: any;
  body = JSON.stringify({
    ...(input.imageBuildVersionArn !== undefined &&
      input.imageBuildVersionArn !== null && { imageBuildVersionArn: input.imageBuildVersionArn }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListImagePipelineImagesCommand = async (
  input: ListImagePipelineImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListImagePipelineImages";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) }),
    ...(input.imagePipelineArn !== undefined &&
      input.imagePipelineArn !== null && { imagePipelineArn: input.imagePipelineArn }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListImagePipelinesCommand = async (
  input: ListImagePipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListImagePipelines";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListImageRecipesCommand = async (
  input: ListImageRecipesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListImageRecipes";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.owner !== undefined && input.owner !== null && { owner: input.owner }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListImagesCommand = async (
  input: ListImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListImages";
  let body: any;
  body = JSON.stringify({
    ...(input.byName !== undefined && input.byName !== null && { byName: input.byName }),
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) }),
    ...(input.includeDeprecated !== undefined &&
      input.includeDeprecated !== null && { includeDeprecated: input.includeDeprecated }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.owner !== undefined && input.owner !== null && { owner: input.owner }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListInfrastructureConfigurationsCommand = async (
  input: ListInfrastructureConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListInfrastructureConfigurations";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutComponentPolicyCommand = async (
  input: PutComponentPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/PutComponentPolicy";
  let body: any;
  body = JSON.stringify({
    ...(input.componentArn !== undefined && input.componentArn !== null && { componentArn: input.componentArn }),
    ...(input.policy !== undefined && input.policy !== null && { policy: input.policy }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutContainerRecipePolicyCommand = async (
  input: PutContainerRecipePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/PutContainerRecipePolicy";
  let body: any;
  body = JSON.stringify({
    ...(input.containerRecipeArn !== undefined &&
      input.containerRecipeArn !== null && { containerRecipeArn: input.containerRecipeArn }),
    ...(input.policy !== undefined && input.policy !== null && { policy: input.policy }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutImagePolicyCommand = async (
  input: PutImagePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/PutImagePolicy";
  let body: any;
  body = JSON.stringify({
    ...(input.imageArn !== undefined && input.imageArn !== null && { imageArn: input.imageArn }),
    ...(input.policy !== undefined && input.policy !== null && { policy: input.policy }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutImageRecipePolicyCommand = async (
  input: PutImageRecipePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/PutImageRecipePolicy";
  let body: any;
  body = JSON.stringify({
    ...(input.imageRecipeArn !== undefined &&
      input.imageRecipeArn !== null && { imageRecipeArn: input.imageRecipeArn }),
    ...(input.policy !== undefined && input.policy !== null && { policy: input.policy }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1StartImagePipelineExecutionCommand = async (
  input: StartImagePipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/StartImagePipelineExecution";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.imagePipelineArn !== undefined &&
      input.imagePipelineArn !== null && { imagePipelineArn: input.imagePipelineArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query: any = {
    ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry as any) }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateDistributionConfigurationCommand = async (
  input: UpdateDistributionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateDistributionConfiguration";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.distributionConfigurationArn !== undefined &&
      input.distributionConfigurationArn !== null && {
        distributionConfigurationArn: input.distributionConfigurationArn,
      }),
    ...(input.distributions !== undefined &&
      input.distributions !== null && {
        distributions: serializeAws_restJson1DistributionList(input.distributions, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateImagePipelineCommand = async (
  input: UpdateImagePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateImagePipeline";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.containerRecipeArn !== undefined &&
      input.containerRecipeArn !== null && { containerRecipeArn: input.containerRecipeArn }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.distributionConfigurationArn !== undefined &&
      input.distributionConfigurationArn !== null && {
        distributionConfigurationArn: input.distributionConfigurationArn,
      }),
    ...(input.enhancedImageMetadataEnabled !== undefined &&
      input.enhancedImageMetadataEnabled !== null && {
        enhancedImageMetadataEnabled: input.enhancedImageMetadataEnabled,
      }),
    ...(input.imagePipelineArn !== undefined &&
      input.imagePipelineArn !== null && { imagePipelineArn: input.imagePipelineArn }),
    ...(input.imageRecipeArn !== undefined &&
      input.imageRecipeArn !== null && { imageRecipeArn: input.imageRecipeArn }),
    ...(input.imageTestsConfiguration !== undefined &&
      input.imageTestsConfiguration !== null && {
        imageTestsConfiguration: serializeAws_restJson1ImageTestsConfiguration(input.imageTestsConfiguration, context),
      }),
    ...(input.infrastructureConfigurationArn !== undefined &&
      input.infrastructureConfigurationArn !== null && {
        infrastructureConfigurationArn: input.infrastructureConfigurationArn,
      }),
    ...(input.schedule !== undefined &&
      input.schedule !== null && { schedule: serializeAws_restJson1Schedule(input.schedule, context) }),
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateInfrastructureConfigurationCommand = async (
  input: UpdateInfrastructureConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateInfrastructureConfiguration";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.infrastructureConfigurationArn !== undefined &&
      input.infrastructureConfigurationArn !== null && {
        infrastructureConfigurationArn: input.infrastructureConfigurationArn,
      }),
    ...(input.instanceMetadataOptions !== undefined &&
      input.instanceMetadataOptions !== null && {
        instanceMetadataOptions: serializeAws_restJson1InstanceMetadataOptions(input.instanceMetadataOptions, context),
      }),
    ...(input.instanceProfileName !== undefined &&
      input.instanceProfileName !== null && { instanceProfileName: input.instanceProfileName }),
    ...(input.instanceTypes !== undefined &&
      input.instanceTypes !== null && {
        instanceTypes: serializeAws_restJson1InstanceTypeList(input.instanceTypes, context),
      }),
    ...(input.keyPair !== undefined && input.keyPair !== null && { keyPair: input.keyPair }),
    ...(input.logging !== undefined &&
      input.logging !== null && { logging: serializeAws_restJson1Logging(input.logging, context) }),
    ...(input.resourceTags !== undefined &&
      input.resourceTags !== null && {
        resourceTags: serializeAws_restJson1ResourceTagMap(input.resourceTags, context),
      }),
    ...(input.securityGroupIds !== undefined &&
      input.securityGroupIds !== null && {
        securityGroupIds: serializeAws_restJson1SecurityGroupIds(input.securityGroupIds, context),
      }),
    ...(input.snsTopicArn !== undefined && input.snsTopicArn !== null && { snsTopicArn: input.snsTopicArn }),
    ...(input.subnetId !== undefined && input.subnetId !== null && { subnetId: input.subnetId }),
    ...(input.terminateInstanceOnFailure !== undefined &&
      input.terminateInstanceOnFailure !== null && { terminateInstanceOnFailure: input.terminateInstanceOnFailure }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1CancelImageCreationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelImageCreationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelImageCreationCommandError(output, context);
  }
  const contents: CancelImageCreationCommandOutput = {
    $metadata: deserializeMetadata(output),
    clientToken: undefined,
    imageBuildVersionArn: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.imageBuildVersionArn !== undefined && data.imageBuildVersionArn !== null) {
    contents.imageBuildVersionArn = __expectString(data.imageBuildVersionArn);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CancelImageCreationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelImageCreationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateComponentCommandError(output, context);
  }
  const contents: CreateComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    clientToken: undefined,
    componentBuildVersionArn: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.componentBuildVersionArn !== undefined && data.componentBuildVersionArn !== null) {
    contents.componentBuildVersionArn = __expectString(data.componentBuildVersionArn);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.imagebuilder#InvalidParameterCombinationException":
      throw await deserializeAws_restJson1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidVersionNumberException":
    case "com.amazonaws.imagebuilder#InvalidVersionNumberException":
      throw await deserializeAws_restJson1InvalidVersionNumberExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.imagebuilder#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateContainerRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContainerRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateContainerRecipeCommandError(output, context);
  }
  const contents: CreateContainerRecipeCommandOutput = {
    $metadata: deserializeMetadata(output),
    clientToken: undefined,
    containerRecipeArn: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.containerRecipeArn !== undefined && data.containerRecipeArn !== null) {
    contents.containerRecipeArn = __expectString(data.containerRecipeArn);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateContainerRecipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContainerRecipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidVersionNumberException":
    case "com.amazonaws.imagebuilder#InvalidVersionNumberException":
      throw await deserializeAws_restJson1InvalidVersionNumberExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.imagebuilder#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateDistributionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDistributionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDistributionConfigurationCommandError(output, context);
  }
  const contents: CreateDistributionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    clientToken: undefined,
    distributionConfigurationArn: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.distributionConfigurationArn !== undefined && data.distributionConfigurationArn !== null) {
    contents.distributionConfigurationArn = __expectString(data.distributionConfigurationArn);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDistributionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDistributionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.imagebuilder#InvalidParameterCombinationException":
      throw await deserializeAws_restJson1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.imagebuilder#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateImageCommandError(output, context);
  }
  const contents: CreateImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    clientToken: undefined,
    imageBuildVersionArn: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.imageBuildVersionArn !== undefined && data.imageBuildVersionArn !== null) {
    contents.imageBuildVersionArn = __expectString(data.imageBuildVersionArn);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.imagebuilder#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateImagePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImagePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateImagePipelineCommandError(output, context);
  }
  const contents: CreateImagePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    clientToken: undefined,
    imagePipelineArn: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.imagePipelineArn !== undefined && data.imagePipelineArn !== null) {
    contents.imagePipelineArn = __expectString(data.imagePipelineArn);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateImagePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImagePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.imagebuilder#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateImageRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateImageRecipeCommandError(output, context);
  }
  const contents: CreateImageRecipeCommandOutput = {
    $metadata: deserializeMetadata(output),
    clientToken: undefined,
    imageRecipeArn: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.imageRecipeArn !== undefined && data.imageRecipeArn !== null) {
    contents.imageRecipeArn = __expectString(data.imageRecipeArn);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateImageRecipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageRecipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidVersionNumberException":
    case "com.amazonaws.imagebuilder#InvalidVersionNumberException":
      throw await deserializeAws_restJson1InvalidVersionNumberExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.imagebuilder#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateInfrastructureConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInfrastructureConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateInfrastructureConfigurationCommandError(output, context);
  }
  const contents: CreateInfrastructureConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    clientToken: undefined,
    infrastructureConfigurationArn: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.infrastructureConfigurationArn !== undefined && data.infrastructureConfigurationArn !== null) {
    contents.infrastructureConfigurationArn = __expectString(data.infrastructureConfigurationArn);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateInfrastructureConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInfrastructureConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.imagebuilder#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteComponentCommandError(output, context);
  }
  const contents: DeleteComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    componentBuildVersionArn: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.componentBuildVersionArn !== undefined && data.componentBuildVersionArn !== null) {
    contents.componentBuildVersionArn = __expectString(data.componentBuildVersionArn);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      throw await deserializeAws_restJson1ResourceDependencyExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteContainerRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContainerRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteContainerRecipeCommandError(output, context);
  }
  const contents: DeleteContainerRecipeCommandOutput = {
    $metadata: deserializeMetadata(output),
    containerRecipeArn: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.containerRecipeArn !== undefined && data.containerRecipeArn !== null) {
    contents.containerRecipeArn = __expectString(data.containerRecipeArn);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteContainerRecipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContainerRecipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      throw await deserializeAws_restJson1ResourceDependencyExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteDistributionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDistributionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDistributionConfigurationCommandError(output, context);
  }
  const contents: DeleteDistributionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    distributionConfigurationArn: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.distributionConfigurationArn !== undefined && data.distributionConfigurationArn !== null) {
    contents.distributionConfigurationArn = __expectString(data.distributionConfigurationArn);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDistributionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDistributionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      throw await deserializeAws_restJson1ResourceDependencyExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteImageCommandError(output, context);
  }
  const contents: DeleteImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    imageBuildVersionArn: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imageBuildVersionArn !== undefined && data.imageBuildVersionArn !== null) {
    contents.imageBuildVersionArn = __expectString(data.imageBuildVersionArn);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      throw await deserializeAws_restJson1ResourceDependencyExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteImagePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImagePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteImagePipelineCommandError(output, context);
  }
  const contents: DeleteImagePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    imagePipelineArn: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imagePipelineArn !== undefined && data.imagePipelineArn !== null) {
    contents.imagePipelineArn = __expectString(data.imagePipelineArn);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteImagePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImagePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      throw await deserializeAws_restJson1ResourceDependencyExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteImageRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteImageRecipeCommandError(output, context);
  }
  const contents: DeleteImageRecipeCommandOutput = {
    $metadata: deserializeMetadata(output),
    imageRecipeArn: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imageRecipeArn !== undefined && data.imageRecipeArn !== null) {
    contents.imageRecipeArn = __expectString(data.imageRecipeArn);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteImageRecipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageRecipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      throw await deserializeAws_restJson1ResourceDependencyExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteInfrastructureConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInfrastructureConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteInfrastructureConfigurationCommandError(output, context);
  }
  const contents: DeleteInfrastructureConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    infrastructureConfigurationArn: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.infrastructureConfigurationArn !== undefined && data.infrastructureConfigurationArn !== null) {
    contents.infrastructureConfigurationArn = __expectString(data.infrastructureConfigurationArn);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteInfrastructureConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInfrastructureConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      throw await deserializeAws_restJson1ResourceDependencyExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetComponentCommandError(output, context);
  }
  const contents: GetComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    component: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.component !== undefined && data.component !== null) {
    contents.component = deserializeAws_restJson1Component(data.component, context);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetComponentPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetComponentPolicyCommandError(output, context);
  }
  const contents: GetComponentPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    policy: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.policy !== undefined && data.policy !== null) {
    contents.policy = __expectString(data.policy);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetComponentPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetContainerRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetContainerRecipeCommandError(output, context);
  }
  const contents: GetContainerRecipeCommandOutput = {
    $metadata: deserializeMetadata(output),
    containerRecipe: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.containerRecipe !== undefined && data.containerRecipe !== null) {
    contents.containerRecipe = deserializeAws_restJson1ContainerRecipe(data.containerRecipe, context);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetContainerRecipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerRecipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetContainerRecipePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerRecipePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetContainerRecipePolicyCommandError(output, context);
  }
  const contents: GetContainerRecipePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    policy: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.policy !== undefined && data.policy !== null) {
    contents.policy = __expectString(data.policy);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetContainerRecipePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerRecipePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetDistributionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDistributionConfigurationCommandError(output, context);
  }
  const contents: GetDistributionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    distributionConfiguration: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.distributionConfiguration !== undefined && data.distributionConfiguration !== null) {
    contents.distributionConfiguration = deserializeAws_restJson1DistributionConfiguration(
      data.distributionConfiguration,
      context
    );
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDistributionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetImageCommandError(output, context);
  }
  const contents: GetImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    image: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.image !== undefined && data.image !== null) {
    contents.image = deserializeAws_restJson1Image(data.image, context);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetImagePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImagePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetImagePipelineCommandError(output, context);
  }
  const contents: GetImagePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    imagePipeline: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imagePipeline !== undefined && data.imagePipeline !== null) {
    contents.imagePipeline = deserializeAws_restJson1ImagePipeline(data.imagePipeline, context);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetImagePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImagePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetImagePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImagePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetImagePolicyCommandError(output, context);
  }
  const contents: GetImagePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    policy: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.policy !== undefined && data.policy !== null) {
    contents.policy = __expectString(data.policy);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetImagePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImagePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetImageRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetImageRecipeCommandError(output, context);
  }
  const contents: GetImageRecipeCommandOutput = {
    $metadata: deserializeMetadata(output),
    imageRecipe: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imageRecipe !== undefined && data.imageRecipe !== null) {
    contents.imageRecipe = deserializeAws_restJson1ImageRecipe(data.imageRecipe, context);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetImageRecipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageRecipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetImageRecipePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageRecipePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetImageRecipePolicyCommandError(output, context);
  }
  const contents: GetImageRecipePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    policy: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.policy !== undefined && data.policy !== null) {
    contents.policy = __expectString(data.policy);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetImageRecipePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageRecipePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetInfrastructureConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInfrastructureConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetInfrastructureConfigurationCommandError(output, context);
  }
  const contents: GetInfrastructureConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    infrastructureConfiguration: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.infrastructureConfiguration !== undefined && data.infrastructureConfiguration !== null) {
    contents.infrastructureConfiguration = deserializeAws_restJson1InfrastructureConfiguration(
      data.infrastructureConfiguration,
      context
    );
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetInfrastructureConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInfrastructureConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ImportComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ImportComponentCommandError(output, context);
  }
  const contents: ImportComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    clientToken: undefined,
    componentBuildVersionArn: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.componentBuildVersionArn !== undefined && data.componentBuildVersionArn !== null) {
    contents.componentBuildVersionArn = __expectString(data.componentBuildVersionArn);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ImportComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.imagebuilder#InvalidParameterCombinationException":
      throw await deserializeAws_restJson1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidVersionNumberException":
    case "com.amazonaws.imagebuilder#InvalidVersionNumberException":
      throw await deserializeAws_restJson1InvalidVersionNumberExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ImportVmImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportVmImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ImportVmImageCommandError(output, context);
  }
  const contents: ImportVmImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    clientToken: undefined,
    imageArn: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.imageArn !== undefined && data.imageArn !== null) {
    contents.imageArn = __expectString(data.imageArn);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ImportVmImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportVmImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListComponentBuildVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentBuildVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListComponentBuildVersionsCommandError(output, context);
  }
  const contents: ListComponentBuildVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    componentSummaryList: undefined,
    nextToken: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.componentSummaryList !== undefined && data.componentSummaryList !== null) {
    contents.componentSummaryList = deserializeAws_restJson1ComponentSummaryList(data.componentSummaryList, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListComponentBuildVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentBuildVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListComponentsCommandError(output, context);
  }
  const contents: ListComponentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    componentVersionList: undefined,
    nextToken: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.componentVersionList !== undefined && data.componentVersionList !== null) {
    contents.componentVersionList = deserializeAws_restJson1ComponentVersionList(data.componentVersionList, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListComponentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListContainerRecipesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContainerRecipesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListContainerRecipesCommandError(output, context);
  }
  const contents: ListContainerRecipesCommandOutput = {
    $metadata: deserializeMetadata(output),
    containerRecipeSummaryList: undefined,
    nextToken: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.containerRecipeSummaryList !== undefined && data.containerRecipeSummaryList !== null) {
    contents.containerRecipeSummaryList = deserializeAws_restJson1ContainerRecipeSummaryList(
      data.containerRecipeSummaryList,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListContainerRecipesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContainerRecipesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListDistributionConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDistributionConfigurationsCommandError(output, context);
  }
  const contents: ListDistributionConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    distributionConfigurationSummaryList: undefined,
    nextToken: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.distributionConfigurationSummaryList !== undefined && data.distributionConfigurationSummaryList !== null) {
    contents.distributionConfigurationSummaryList = deserializeAws_restJson1DistributionConfigurationSummaryList(
      data.distributionConfigurationSummaryList,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDistributionConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListImageBuildVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageBuildVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListImageBuildVersionsCommandError(output, context);
  }
  const contents: ListImageBuildVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    imageSummaryList: undefined,
    nextToken: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imageSummaryList !== undefined && data.imageSummaryList !== null) {
    contents.imageSummaryList = deserializeAws_restJson1ImageSummaryList(data.imageSummaryList, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListImageBuildVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageBuildVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListImagePackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagePackagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListImagePackagesCommandError(output, context);
  }
  const contents: ListImagePackagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    imagePackageList: undefined,
    nextToken: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imagePackageList !== undefined && data.imagePackageList !== null) {
    contents.imagePackageList = deserializeAws_restJson1ImagePackageList(data.imagePackageList, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListImagePackagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagePackagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListImagePipelineImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagePipelineImagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListImagePipelineImagesCommandError(output, context);
  }
  const contents: ListImagePipelineImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    imageSummaryList: undefined,
    nextToken: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imageSummaryList !== undefined && data.imageSummaryList !== null) {
    contents.imageSummaryList = deserializeAws_restJson1ImageSummaryList(data.imageSummaryList, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListImagePipelineImagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagePipelineImagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListImagePipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagePipelinesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListImagePipelinesCommandError(output, context);
  }
  const contents: ListImagePipelinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    imagePipelineList: undefined,
    nextToken: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imagePipelineList !== undefined && data.imagePipelineList !== null) {
    contents.imagePipelineList = deserializeAws_restJson1ImagePipelineList(data.imagePipelineList, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListImagePipelinesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagePipelinesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListImageRecipesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageRecipesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListImageRecipesCommandError(output, context);
  }
  const contents: ListImageRecipesCommandOutput = {
    $metadata: deserializeMetadata(output),
    imageRecipeSummaryList: undefined,
    nextToken: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imageRecipeSummaryList !== undefined && data.imageRecipeSummaryList !== null) {
    contents.imageRecipeSummaryList = deserializeAws_restJson1ImageRecipeSummaryList(
      data.imageRecipeSummaryList,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListImageRecipesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageRecipesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListImagesCommandError(output, context);
  }
  const contents: ListImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    imageVersionList: undefined,
    nextToken: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imageVersionList !== undefined && data.imageVersionList !== null) {
    contents.imageVersionList = deserializeAws_restJson1ImageVersionList(data.imageVersionList, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListImagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListInfrastructureConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInfrastructureConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListInfrastructureConfigurationsCommandError(output, context);
  }
  const contents: ListInfrastructureConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    infrastructureConfigurationSummaryList: undefined,
    nextToken: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (
    data.infrastructureConfigurationSummaryList !== undefined &&
    data.infrastructureConfigurationSummaryList !== null
  ) {
    contents.infrastructureConfigurationSummaryList = deserializeAws_restJson1InfrastructureConfigurationSummaryList(
      data.infrastructureConfigurationSummaryList,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListInfrastructureConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInfrastructureConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    tags: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.imagebuilder#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1PutComponentPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutComponentPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutComponentPolicyCommandError(output, context);
  }
  const contents: PutComponentPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    componentArn: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.componentArn !== undefined && data.componentArn !== null) {
    contents.componentArn = __expectString(data.componentArn);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutComponentPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutComponentPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.imagebuilder#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1PutContainerRecipePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutContainerRecipePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutContainerRecipePolicyCommandError(output, context);
  }
  const contents: PutContainerRecipePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    containerRecipeArn: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.containerRecipeArn !== undefined && data.containerRecipeArn !== null) {
    contents.containerRecipeArn = __expectString(data.containerRecipeArn);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutContainerRecipePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutContainerRecipePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.imagebuilder#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1PutImagePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImagePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutImagePolicyCommandError(output, context);
  }
  const contents: PutImagePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    imageArn: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imageArn !== undefined && data.imageArn !== null) {
    contents.imageArn = __expectString(data.imageArn);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutImagePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImagePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.imagebuilder#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1PutImageRecipePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageRecipePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutImageRecipePolicyCommandError(output, context);
  }
  const contents: PutImageRecipePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    imageRecipeArn: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imageRecipeArn !== undefined && data.imageRecipeArn !== null) {
    contents.imageRecipeArn = __expectString(data.imageRecipeArn);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutImageRecipePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageRecipePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.imagebuilder#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StartImagePipelineExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImagePipelineExecutionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartImagePipelineExecutionCommandError(output, context);
  }
  const contents: StartImagePipelineExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    clientToken: undefined,
    imageBuildVersionArn: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.imageBuildVersionArn !== undefined && data.imageBuildVersionArn !== null) {
    contents.imageBuildVersionArn = __expectString(data.imageBuildVersionArn);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartImagePipelineExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImagePipelineExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.imagebuilder#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.imagebuilder#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateDistributionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDistributionConfigurationCommandError(output, context);
  }
  const contents: UpdateDistributionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    clientToken: undefined,
    distributionConfigurationArn: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.distributionConfigurationArn !== undefined && data.distributionConfigurationArn !== null) {
    contents.distributionConfigurationArn = __expectString(data.distributionConfigurationArn);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDistributionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.imagebuilder#InvalidParameterCombinationException":
      throw await deserializeAws_restJson1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateImagePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImagePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateImagePipelineCommandError(output, context);
  }
  const contents: UpdateImagePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    clientToken: undefined,
    imagePipelineArn: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.imagePipelineArn !== undefined && data.imagePipelineArn !== null) {
    contents.imagePipelineArn = __expectString(data.imagePipelineArn);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateImagePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImagePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateInfrastructureConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInfrastructureConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateInfrastructureConfigurationCommandError(output, context);
  }
  const contents: UpdateInfrastructureConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    clientToken: undefined,
    infrastructureConfigurationArn: undefined,
    requestId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.infrastructureConfigurationArn !== undefined && data.infrastructureConfigurationArn !== null) {
    contents.infrastructureConfigurationArn = __expectString(data.infrastructureConfigurationArn);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = __expectString(data.requestId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateInfrastructureConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInfrastructureConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1CallRateLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CallRateLimitExceededException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new CallRateLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClientException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new IdempotentParameterMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidPaginationTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPaginationTokenException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidPaginationTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidParameterCombinationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidParameterCombinationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidVersionNumberExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidVersionNumberException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidVersionNumberException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceDependencyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceDependencyException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceDependencyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1AccountList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1AdditionalInstanceConfiguration = (
  input: AdditionalInstanceConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.systemsManagerAgent !== undefined &&
      input.systemsManagerAgent !== null && {
        systemsManagerAgent: serializeAws_restJson1SystemsManagerAgent(input.systemsManagerAgent, context),
      }),
    ...(input.userDataOverride !== undefined &&
      input.userDataOverride !== null && { userDataOverride: input.userDataOverride }),
  };
};

const serializeAws_restJson1AmiDistributionConfiguration = (
  input: AmiDistributionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.amiTags !== undefined &&
      input.amiTags !== null && { amiTags: serializeAws_restJson1TagMap(input.amiTags, context) }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId }),
    ...(input.launchPermission !== undefined &&
      input.launchPermission !== null && {
        launchPermission: serializeAws_restJson1LaunchPermissionConfiguration(input.launchPermission, context),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.targetAccountIds !== undefined &&
      input.targetAccountIds !== null && {
        targetAccountIds: serializeAws_restJson1AccountList(input.targetAccountIds, context),
      }),
  };
};

const serializeAws_restJson1ComponentConfiguration = (input: ComponentConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.componentArn !== undefined && input.componentArn !== null && { componentArn: input.componentArn }),
    ...(input.parameters !== undefined &&
      input.parameters !== null && {
        parameters: serializeAws_restJson1ComponentParameterList(input.parameters, context),
      }),
  };
};

const serializeAws_restJson1ComponentConfigurationList = (
  input: ComponentConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ComponentConfiguration(entry, context);
    });
};

const serializeAws_restJson1ComponentParameter = (input: ComponentParameter, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.value !== undefined &&
      input.value !== null && { value: serializeAws_restJson1ComponentParameterValueList(input.value, context) }),
  };
};

const serializeAws_restJson1ComponentParameterList = (input: ComponentParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ComponentParameter(entry, context);
    });
};

const serializeAws_restJson1ComponentParameterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ContainerDistributionConfiguration = (
  input: ContainerDistributionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.containerTags !== undefined &&
      input.containerTags !== null && {
        containerTags: serializeAws_restJson1StringList(input.containerTags, context),
      }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.targetRepository !== undefined &&
      input.targetRepository !== null && {
        targetRepository: serializeAws_restJson1TargetContainerRepository(input.targetRepository, context),
      }),
  };
};

const serializeAws_restJson1Distribution = (input: Distribution, context: __SerdeContext): any => {
  return {
    ...(input.amiDistributionConfiguration !== undefined &&
      input.amiDistributionConfiguration !== null && {
        amiDistributionConfiguration: serializeAws_restJson1AmiDistributionConfiguration(
          input.amiDistributionConfiguration,
          context
        ),
      }),
    ...(input.containerDistributionConfiguration !== undefined &&
      input.containerDistributionConfiguration !== null && {
        containerDistributionConfiguration: serializeAws_restJson1ContainerDistributionConfiguration(
          input.containerDistributionConfiguration,
          context
        ),
      }),
    ...(input.fastLaunchConfigurations !== undefined &&
      input.fastLaunchConfigurations !== null && {
        fastLaunchConfigurations: serializeAws_restJson1FastLaunchConfigurationList(
          input.fastLaunchConfigurations,
          context
        ),
      }),
    ...(input.launchTemplateConfigurations !== undefined &&
      input.launchTemplateConfigurations !== null && {
        launchTemplateConfigurations: serializeAws_restJson1LaunchTemplateConfigurationList(
          input.launchTemplateConfigurations,
          context
        ),
      }),
    ...(input.licenseConfigurationArns !== undefined &&
      input.licenseConfigurationArns !== null && {
        licenseConfigurationArns: serializeAws_restJson1LicenseConfigurationArnList(
          input.licenseConfigurationArns,
          context
        ),
      }),
    ...(input.region !== undefined && input.region !== null && { region: input.region }),
    ...(input.s3ExportConfiguration !== undefined &&
      input.s3ExportConfiguration !== null && {
        s3ExportConfiguration: serializeAws_restJson1S3ExportConfiguration(input.s3ExportConfiguration, context),
      }),
  };
};

const serializeAws_restJson1DistributionList = (input: Distribution[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Distribution(entry, context);
    });
};

const serializeAws_restJson1EbsInstanceBlockDeviceSpecification = (
  input: EbsInstanceBlockDeviceSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.deleteOnTermination !== undefined &&
      input.deleteOnTermination !== null && { deleteOnTermination: input.deleteOnTermination }),
    ...(input.encrypted !== undefined && input.encrypted !== null && { encrypted: input.encrypted }),
    ...(input.iops !== undefined && input.iops !== null && { iops: input.iops }),
    ...(input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId }),
    ...(input.snapshotId !== undefined && input.snapshotId !== null && { snapshotId: input.snapshotId }),
    ...(input.throughput !== undefined && input.throughput !== null && { throughput: input.throughput }),
    ...(input.volumeSize !== undefined && input.volumeSize !== null && { volumeSize: input.volumeSize }),
    ...(input.volumeType !== undefined && input.volumeType !== null && { volumeType: input.volumeType }),
  };
};

const serializeAws_restJson1FastLaunchConfiguration = (
  input: FastLaunchConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountId !== undefined && input.accountId !== null && { accountId: input.accountId }),
    ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
    ...(input.launchTemplate !== undefined &&
      input.launchTemplate !== null && {
        launchTemplate: serializeAws_restJson1FastLaunchLaunchTemplateSpecification(input.launchTemplate, context),
      }),
    ...(input.maxParallelLaunches !== undefined &&
      input.maxParallelLaunches !== null && { maxParallelLaunches: input.maxParallelLaunches }),
    ...(input.snapshotConfiguration !== undefined &&
      input.snapshotConfiguration !== null && {
        snapshotConfiguration: serializeAws_restJson1FastLaunchSnapshotConfiguration(
          input.snapshotConfiguration,
          context
        ),
      }),
  };
};

const serializeAws_restJson1FastLaunchConfigurationList = (
  input: FastLaunchConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1FastLaunchConfiguration(entry, context);
    });
};

const serializeAws_restJson1FastLaunchLaunchTemplateSpecification = (
  input: FastLaunchLaunchTemplateSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.launchTemplateId !== undefined &&
      input.launchTemplateId !== null && { launchTemplateId: input.launchTemplateId }),
    ...(input.launchTemplateName !== undefined &&
      input.launchTemplateName !== null && { launchTemplateName: input.launchTemplateName }),
    ...(input.launchTemplateVersion !== undefined &&
      input.launchTemplateVersion !== null && { launchTemplateVersion: input.launchTemplateVersion }),
  };
};

const serializeAws_restJson1FastLaunchSnapshotConfiguration = (
  input: FastLaunchSnapshotConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.targetResourceCount !== undefined &&
      input.targetResourceCount !== null && { targetResourceCount: input.targetResourceCount }),
  };
};

const serializeAws_restJson1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
  };
};

const serializeAws_restJson1FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Filter(entry, context);
    });
};

const serializeAws_restJson1FilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ImageTestsConfiguration = (
  input: ImageTestsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.imageTestsEnabled !== undefined &&
      input.imageTestsEnabled !== null && { imageTestsEnabled: input.imageTestsEnabled }),
    ...(input.timeoutMinutes !== undefined &&
      input.timeoutMinutes !== null && { timeoutMinutes: input.timeoutMinutes }),
  };
};

const serializeAws_restJson1InstanceBlockDeviceMapping = (
  input: InstanceBlockDeviceMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.deviceName !== undefined && input.deviceName !== null && { deviceName: input.deviceName }),
    ...(input.ebs !== undefined &&
      input.ebs !== null && { ebs: serializeAws_restJson1EbsInstanceBlockDeviceSpecification(input.ebs, context) }),
    ...(input.noDevice !== undefined && input.noDevice !== null && { noDevice: input.noDevice }),
    ...(input.virtualName !== undefined && input.virtualName !== null && { virtualName: input.virtualName }),
  };
};

const serializeAws_restJson1InstanceBlockDeviceMappings = (
  input: InstanceBlockDeviceMapping[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1InstanceBlockDeviceMapping(entry, context);
    });
};

const serializeAws_restJson1InstanceConfiguration = (input: InstanceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.blockDeviceMappings !== undefined &&
      input.blockDeviceMappings !== null && {
        blockDeviceMappings: serializeAws_restJson1InstanceBlockDeviceMappings(input.blockDeviceMappings, context),
      }),
    ...(input.image !== undefined && input.image !== null && { image: input.image }),
  };
};

const serializeAws_restJson1InstanceMetadataOptions = (
  input: InstanceMetadataOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.httpPutResponseHopLimit !== undefined &&
      input.httpPutResponseHopLimit !== null && { httpPutResponseHopLimit: input.httpPutResponseHopLimit }),
    ...(input.httpTokens !== undefined && input.httpTokens !== null && { httpTokens: input.httpTokens }),
  };
};

const serializeAws_restJson1InstanceTypeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1LaunchPermissionConfiguration = (
  input: LaunchPermissionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.organizationArns !== undefined &&
      input.organizationArns !== null && {
        organizationArns: serializeAws_restJson1OrganizationArnList(input.organizationArns, context),
      }),
    ...(input.organizationalUnitArns !== undefined &&
      input.organizationalUnitArns !== null && {
        organizationalUnitArns: serializeAws_restJson1OrganizationalUnitArnList(input.organizationalUnitArns, context),
      }),
    ...(input.userGroups !== undefined &&
      input.userGroups !== null && { userGroups: serializeAws_restJson1StringList(input.userGroups, context) }),
    ...(input.userIds !== undefined &&
      input.userIds !== null && { userIds: serializeAws_restJson1AccountList(input.userIds, context) }),
  };
};

const serializeAws_restJson1LaunchTemplateConfiguration = (
  input: LaunchTemplateConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountId !== undefined && input.accountId !== null && { accountId: input.accountId }),
    ...(input.launchTemplateId !== undefined &&
      input.launchTemplateId !== null && { launchTemplateId: input.launchTemplateId }),
    ...(input.setDefaultVersion !== undefined &&
      input.setDefaultVersion !== null && { setDefaultVersion: input.setDefaultVersion }),
  };
};

const serializeAws_restJson1LaunchTemplateConfigurationList = (
  input: LaunchTemplateConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1LaunchTemplateConfiguration(entry, context);
    });
};

const serializeAws_restJson1LicenseConfigurationArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Logging = (input: Logging, context: __SerdeContext): any => {
  return {
    ...(input.s3Logs !== undefined &&
      input.s3Logs !== null && { s3Logs: serializeAws_restJson1S3Logs(input.s3Logs, context) }),
  };
};

const serializeAws_restJson1OrganizationalUnitArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1OrganizationArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1OsVersionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ResourceTagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1S3ExportConfiguration = (input: S3ExportConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.diskImageFormat !== undefined &&
      input.diskImageFormat !== null && { diskImageFormat: input.diskImageFormat }),
    ...(input.roleName !== undefined && input.roleName !== null && { roleName: input.roleName }),
    ...(input.s3Bucket !== undefined && input.s3Bucket !== null && { s3Bucket: input.s3Bucket }),
    ...(input.s3Prefix !== undefined && input.s3Prefix !== null && { s3Prefix: input.s3Prefix }),
  };
};

const serializeAws_restJson1S3Logs = (input: S3Logs, context: __SerdeContext): any => {
  return {
    ...(input.s3BucketName !== undefined && input.s3BucketName !== null && { s3BucketName: input.s3BucketName }),
    ...(input.s3KeyPrefix !== undefined && input.s3KeyPrefix !== null && { s3KeyPrefix: input.s3KeyPrefix }),
  };
};

const serializeAws_restJson1Schedule = (input: Schedule, context: __SerdeContext): any => {
  return {
    ...(input.pipelineExecutionStartCondition !== undefined &&
      input.pipelineExecutionStartCondition !== null && {
        pipelineExecutionStartCondition: input.pipelineExecutionStartCondition,
      }),
    ...(input.scheduleExpression !== undefined &&
      input.scheduleExpression !== null && { scheduleExpression: input.scheduleExpression }),
    ...(input.timezone !== undefined && input.timezone !== null && { timezone: input.timezone }),
  };
};

const serializeAws_restJson1SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SystemsManagerAgent = (input: SystemsManagerAgent, context: __SerdeContext): any => {
  return {
    ...(input.uninstallAfterBuild !== undefined &&
      input.uninstallAfterBuild !== null && { uninstallAfterBuild: input.uninstallAfterBuild }),
  };
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1TargetContainerRepository = (
  input: TargetContainerRepository,
  context: __SerdeContext
): any => {
  return {
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
    ...(input.service !== undefined && input.service !== null && { service: input.service }),
  };
};

const deserializeAws_restJson1AccountList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1AdditionalInstanceConfiguration = (
  output: any,
  context: __SerdeContext
): AdditionalInstanceConfiguration => {
  return {
    systemsManagerAgent:
      output.systemsManagerAgent !== undefined && output.systemsManagerAgent !== null
        ? deserializeAws_restJson1SystemsManagerAgent(output.systemsManagerAgent, context)
        : undefined,
    userDataOverride: __expectString(output.userDataOverride),
  } as any;
};

const deserializeAws_restJson1Ami = (output: any, context: __SerdeContext): Ami => {
  return {
    accountId: __expectString(output.accountId),
    description: __expectString(output.description),
    image: __expectString(output.image),
    name: __expectString(output.name),
    region: __expectString(output.region),
    state:
      output.state !== undefined && output.state !== null
        ? deserializeAws_restJson1ImageState(output.state, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AmiDistributionConfiguration = (
  output: any,
  context: __SerdeContext
): AmiDistributionConfiguration => {
  return {
    amiTags:
      output.amiTags !== undefined && output.amiTags !== null
        ? deserializeAws_restJson1TagMap(output.amiTags, context)
        : undefined,
    description: __expectString(output.description),
    kmsKeyId: __expectString(output.kmsKeyId),
    launchPermission:
      output.launchPermission !== undefined && output.launchPermission !== null
        ? deserializeAws_restJson1LaunchPermissionConfiguration(output.launchPermission, context)
        : undefined,
    name: __expectString(output.name),
    targetAccountIds:
      output.targetAccountIds !== undefined && output.targetAccountIds !== null
        ? deserializeAws_restJson1AccountList(output.targetAccountIds, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AmiList = (output: any, context: __SerdeContext): Ami[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Ami(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Component = (output: any, context: __SerdeContext): Component => {
  return {
    arn: __expectString(output.arn),
    changeDescription: __expectString(output.changeDescription),
    data: __expectString(output.data),
    dateCreated: __expectString(output.dateCreated),
    description: __expectString(output.description),
    encrypted: __expectBoolean(output.encrypted),
    kmsKeyId: __expectString(output.kmsKeyId),
    name: __expectString(output.name),
    owner: __expectString(output.owner),
    parameters:
      output.parameters !== undefined && output.parameters !== null
        ? deserializeAws_restJson1ComponentParameterDetailList(output.parameters, context)
        : undefined,
    platform: __expectString(output.platform),
    state:
      output.state !== undefined && output.state !== null
        ? deserializeAws_restJson1ComponentState(output.state, context)
        : undefined,
    supportedOsVersions:
      output.supportedOsVersions !== undefined && output.supportedOsVersions !== null
        ? deserializeAws_restJson1OsVersionList(output.supportedOsVersions, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    type: __expectString(output.type),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1ComponentConfiguration = (
  output: any,
  context: __SerdeContext
): ComponentConfiguration => {
  return {
    componentArn: __expectString(output.componentArn),
    parameters:
      output.parameters !== undefined && output.parameters !== null
        ? deserializeAws_restJson1ComponentParameterList(output.parameters, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ComponentConfigurationList = (
  output: any,
  context: __SerdeContext
): ComponentConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ComponentConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ComponentParameter = (output: any, context: __SerdeContext): ComponentParameter => {
  return {
    name: __expectString(output.name),
    value:
      output.value !== undefined && output.value !== null
        ? deserializeAws_restJson1ComponentParameterValueList(output.value, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ComponentParameterDetail = (
  output: any,
  context: __SerdeContext
): ComponentParameterDetail => {
  return {
    defaultValue:
      output.defaultValue !== undefined && output.defaultValue !== null
        ? deserializeAws_restJson1ComponentParameterValueList(output.defaultValue, context)
        : undefined,
    description: __expectString(output.description),
    name: __expectString(output.name),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1ComponentParameterDetailList = (
  output: any,
  context: __SerdeContext
): ComponentParameterDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ComponentParameterDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ComponentParameterList = (output: any, context: __SerdeContext): ComponentParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ComponentParameter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ComponentParameterValueList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1ComponentState = (output: any, context: __SerdeContext): ComponentState => {
  return {
    reason: __expectString(output.reason),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1ComponentSummary = (output: any, context: __SerdeContext): ComponentSummary => {
  return {
    arn: __expectString(output.arn),
    changeDescription: __expectString(output.changeDescription),
    dateCreated: __expectString(output.dateCreated),
    description: __expectString(output.description),
    name: __expectString(output.name),
    owner: __expectString(output.owner),
    platform: __expectString(output.platform),
    state:
      output.state !== undefined && output.state !== null
        ? deserializeAws_restJson1ComponentState(output.state, context)
        : undefined,
    supportedOsVersions:
      output.supportedOsVersions !== undefined && output.supportedOsVersions !== null
        ? deserializeAws_restJson1OsVersionList(output.supportedOsVersions, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    type: __expectString(output.type),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1ComponentSummaryList = (output: any, context: __SerdeContext): ComponentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ComponentSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ComponentVersion = (output: any, context: __SerdeContext): ComponentVersion => {
  return {
    arn: __expectString(output.arn),
    dateCreated: __expectString(output.dateCreated),
    description: __expectString(output.description),
    name: __expectString(output.name),
    owner: __expectString(output.owner),
    platform: __expectString(output.platform),
    supportedOsVersions:
      output.supportedOsVersions !== undefined && output.supportedOsVersions !== null
        ? deserializeAws_restJson1OsVersionList(output.supportedOsVersions, context)
        : undefined,
    type: __expectString(output.type),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1ComponentVersionList = (output: any, context: __SerdeContext): ComponentVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ComponentVersion(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Container = (output: any, context: __SerdeContext): Container => {
  return {
    imageUris:
      output.imageUris !== undefined && output.imageUris !== null
        ? deserializeAws_restJson1StringList(output.imageUris, context)
        : undefined,
    region: __expectString(output.region),
  } as any;
};

const deserializeAws_restJson1ContainerDistributionConfiguration = (
  output: any,
  context: __SerdeContext
): ContainerDistributionConfiguration => {
  return {
    containerTags:
      output.containerTags !== undefined && output.containerTags !== null
        ? deserializeAws_restJson1StringList(output.containerTags, context)
        : undefined,
    description: __expectString(output.description),
    targetRepository:
      output.targetRepository !== undefined && output.targetRepository !== null
        ? deserializeAws_restJson1TargetContainerRepository(output.targetRepository, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ContainerList = (output: any, context: __SerdeContext): Container[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Container(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ContainerRecipe = (output: any, context: __SerdeContext): ContainerRecipe => {
  return {
    arn: __expectString(output.arn),
    components:
      output.components !== undefined && output.components !== null
        ? deserializeAws_restJson1ComponentConfigurationList(output.components, context)
        : undefined,
    containerType: __expectString(output.containerType),
    dateCreated: __expectString(output.dateCreated),
    description: __expectString(output.description),
    dockerfileTemplateData: __expectString(output.dockerfileTemplateData),
    encrypted: __expectBoolean(output.encrypted),
    instanceConfiguration:
      output.instanceConfiguration !== undefined && output.instanceConfiguration !== null
        ? deserializeAws_restJson1InstanceConfiguration(output.instanceConfiguration, context)
        : undefined,
    kmsKeyId: __expectString(output.kmsKeyId),
    name: __expectString(output.name),
    owner: __expectString(output.owner),
    parentImage: __expectString(output.parentImage),
    platform: __expectString(output.platform),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    targetRepository:
      output.targetRepository !== undefined && output.targetRepository !== null
        ? deserializeAws_restJson1TargetContainerRepository(output.targetRepository, context)
        : undefined,
    version: __expectString(output.version),
    workingDirectory: __expectString(output.workingDirectory),
  } as any;
};

const deserializeAws_restJson1ContainerRecipeSummary = (
  output: any,
  context: __SerdeContext
): ContainerRecipeSummary => {
  return {
    arn: __expectString(output.arn),
    containerType: __expectString(output.containerType),
    dateCreated: __expectString(output.dateCreated),
    name: __expectString(output.name),
    owner: __expectString(output.owner),
    parentImage: __expectString(output.parentImage),
    platform: __expectString(output.platform),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ContainerRecipeSummaryList = (
  output: any,
  context: __SerdeContext
): ContainerRecipeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ContainerRecipeSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Distribution = (output: any, context: __SerdeContext): Distribution => {
  return {
    amiDistributionConfiguration:
      output.amiDistributionConfiguration !== undefined && output.amiDistributionConfiguration !== null
        ? deserializeAws_restJson1AmiDistributionConfiguration(output.amiDistributionConfiguration, context)
        : undefined,
    containerDistributionConfiguration:
      output.containerDistributionConfiguration !== undefined && output.containerDistributionConfiguration !== null
        ? deserializeAws_restJson1ContainerDistributionConfiguration(output.containerDistributionConfiguration, context)
        : undefined,
    fastLaunchConfigurations:
      output.fastLaunchConfigurations !== undefined && output.fastLaunchConfigurations !== null
        ? deserializeAws_restJson1FastLaunchConfigurationList(output.fastLaunchConfigurations, context)
        : undefined,
    launchTemplateConfigurations:
      output.launchTemplateConfigurations !== undefined && output.launchTemplateConfigurations !== null
        ? deserializeAws_restJson1LaunchTemplateConfigurationList(output.launchTemplateConfigurations, context)
        : undefined,
    licenseConfigurationArns:
      output.licenseConfigurationArns !== undefined && output.licenseConfigurationArns !== null
        ? deserializeAws_restJson1LicenseConfigurationArnList(output.licenseConfigurationArns, context)
        : undefined,
    region: __expectString(output.region),
    s3ExportConfiguration:
      output.s3ExportConfiguration !== undefined && output.s3ExportConfiguration !== null
        ? deserializeAws_restJson1S3ExportConfiguration(output.s3ExportConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DistributionConfiguration = (
  output: any,
  context: __SerdeContext
): DistributionConfiguration => {
  return {
    arn: __expectString(output.arn),
    dateCreated: __expectString(output.dateCreated),
    dateUpdated: __expectString(output.dateUpdated),
    description: __expectString(output.description),
    distributions:
      output.distributions !== undefined && output.distributions !== null
        ? deserializeAws_restJson1DistributionList(output.distributions, context)
        : undefined,
    name: __expectString(output.name),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    timeoutMinutes: __expectInt32(output.timeoutMinutes),
  } as any;
};

const deserializeAws_restJson1DistributionConfigurationSummary = (
  output: any,
  context: __SerdeContext
): DistributionConfigurationSummary => {
  return {
    arn: __expectString(output.arn),
    dateCreated: __expectString(output.dateCreated),
    dateUpdated: __expectString(output.dateUpdated),
    description: __expectString(output.description),
    name: __expectString(output.name),
    regions:
      output.regions !== undefined && output.regions !== null
        ? deserializeAws_restJson1RegionList(output.regions, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DistributionConfigurationSummaryList = (
  output: any,
  context: __SerdeContext
): DistributionConfigurationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DistributionConfigurationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DistributionList = (output: any, context: __SerdeContext): Distribution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Distribution(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EbsInstanceBlockDeviceSpecification = (
  output: any,
  context: __SerdeContext
): EbsInstanceBlockDeviceSpecification => {
  return {
    deleteOnTermination: __expectBoolean(output.deleteOnTermination),
    encrypted: __expectBoolean(output.encrypted),
    iops: __expectInt32(output.iops),
    kmsKeyId: __expectString(output.kmsKeyId),
    snapshotId: __expectString(output.snapshotId),
    throughput: __expectInt32(output.throughput),
    volumeSize: __expectInt32(output.volumeSize),
    volumeType: __expectString(output.volumeType),
  } as any;
};

const deserializeAws_restJson1FastLaunchConfiguration = (
  output: any,
  context: __SerdeContext
): FastLaunchConfiguration => {
  return {
    accountId: __expectString(output.accountId),
    enabled: __expectBoolean(output.enabled),
    launchTemplate:
      output.launchTemplate !== undefined && output.launchTemplate !== null
        ? deserializeAws_restJson1FastLaunchLaunchTemplateSpecification(output.launchTemplate, context)
        : undefined,
    maxParallelLaunches: __expectInt32(output.maxParallelLaunches),
    snapshotConfiguration:
      output.snapshotConfiguration !== undefined && output.snapshotConfiguration !== null
        ? deserializeAws_restJson1FastLaunchSnapshotConfiguration(output.snapshotConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FastLaunchConfigurationList = (
  output: any,
  context: __SerdeContext
): FastLaunchConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FastLaunchConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FastLaunchLaunchTemplateSpecification = (
  output: any,
  context: __SerdeContext
): FastLaunchLaunchTemplateSpecification => {
  return {
    launchTemplateId: __expectString(output.launchTemplateId),
    launchTemplateName: __expectString(output.launchTemplateName),
    launchTemplateVersion: __expectString(output.launchTemplateVersion),
  } as any;
};

const deserializeAws_restJson1FastLaunchSnapshotConfiguration = (
  output: any,
  context: __SerdeContext
): FastLaunchSnapshotConfiguration => {
  return {
    targetResourceCount: __expectInt32(output.targetResourceCount),
  } as any;
};

const deserializeAws_restJson1Image = (output: any, context: __SerdeContext): Image => {
  return {
    arn: __expectString(output.arn),
    buildType: __expectString(output.buildType),
    containerRecipe:
      output.containerRecipe !== undefined && output.containerRecipe !== null
        ? deserializeAws_restJson1ContainerRecipe(output.containerRecipe, context)
        : undefined,
    dateCreated: __expectString(output.dateCreated),
    distributionConfiguration:
      output.distributionConfiguration !== undefined && output.distributionConfiguration !== null
        ? deserializeAws_restJson1DistributionConfiguration(output.distributionConfiguration, context)
        : undefined,
    enhancedImageMetadataEnabled: __expectBoolean(output.enhancedImageMetadataEnabled),
    imageRecipe:
      output.imageRecipe !== undefined && output.imageRecipe !== null
        ? deserializeAws_restJson1ImageRecipe(output.imageRecipe, context)
        : undefined,
    imageTestsConfiguration:
      output.imageTestsConfiguration !== undefined && output.imageTestsConfiguration !== null
        ? deserializeAws_restJson1ImageTestsConfiguration(output.imageTestsConfiguration, context)
        : undefined,
    infrastructureConfiguration:
      output.infrastructureConfiguration !== undefined && output.infrastructureConfiguration !== null
        ? deserializeAws_restJson1InfrastructureConfiguration(output.infrastructureConfiguration, context)
        : undefined,
    name: __expectString(output.name),
    osVersion: __expectString(output.osVersion),
    outputResources:
      output.outputResources !== undefined && output.outputResources !== null
        ? deserializeAws_restJson1OutputResources(output.outputResources, context)
        : undefined,
    platform: __expectString(output.platform),
    sourcePipelineArn: __expectString(output.sourcePipelineArn),
    sourcePipelineName: __expectString(output.sourcePipelineName),
    state:
      output.state !== undefined && output.state !== null
        ? deserializeAws_restJson1ImageState(output.state, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    type: __expectString(output.type),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1ImagePackage = (output: any, context: __SerdeContext): ImagePackage => {
  return {
    packageName: __expectString(output.packageName),
    packageVersion: __expectString(output.packageVersion),
  } as any;
};

const deserializeAws_restJson1ImagePackageList = (output: any, context: __SerdeContext): ImagePackage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ImagePackage(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ImagePipeline = (output: any, context: __SerdeContext): ImagePipeline => {
  return {
    arn: __expectString(output.arn),
    containerRecipeArn: __expectString(output.containerRecipeArn),
    dateCreated: __expectString(output.dateCreated),
    dateLastRun: __expectString(output.dateLastRun),
    dateNextRun: __expectString(output.dateNextRun),
    dateUpdated: __expectString(output.dateUpdated),
    description: __expectString(output.description),
    distributionConfigurationArn: __expectString(output.distributionConfigurationArn),
    enhancedImageMetadataEnabled: __expectBoolean(output.enhancedImageMetadataEnabled),
    imageRecipeArn: __expectString(output.imageRecipeArn),
    imageTestsConfiguration:
      output.imageTestsConfiguration !== undefined && output.imageTestsConfiguration !== null
        ? deserializeAws_restJson1ImageTestsConfiguration(output.imageTestsConfiguration, context)
        : undefined,
    infrastructureConfigurationArn: __expectString(output.infrastructureConfigurationArn),
    name: __expectString(output.name),
    platform: __expectString(output.platform),
    schedule:
      output.schedule !== undefined && output.schedule !== null
        ? deserializeAws_restJson1Schedule(output.schedule, context)
        : undefined,
    status: __expectString(output.status),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ImagePipelineList = (output: any, context: __SerdeContext): ImagePipeline[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ImagePipeline(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ImageRecipe = (output: any, context: __SerdeContext): ImageRecipe => {
  return {
    additionalInstanceConfiguration:
      output.additionalInstanceConfiguration !== undefined && output.additionalInstanceConfiguration !== null
        ? deserializeAws_restJson1AdditionalInstanceConfiguration(output.additionalInstanceConfiguration, context)
        : undefined,
    arn: __expectString(output.arn),
    blockDeviceMappings:
      output.blockDeviceMappings !== undefined && output.blockDeviceMappings !== null
        ? deserializeAws_restJson1InstanceBlockDeviceMappings(output.blockDeviceMappings, context)
        : undefined,
    components:
      output.components !== undefined && output.components !== null
        ? deserializeAws_restJson1ComponentConfigurationList(output.components, context)
        : undefined,
    dateCreated: __expectString(output.dateCreated),
    description: __expectString(output.description),
    name: __expectString(output.name),
    owner: __expectString(output.owner),
    parentImage: __expectString(output.parentImage),
    platform: __expectString(output.platform),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    type: __expectString(output.type),
    version: __expectString(output.version),
    workingDirectory: __expectString(output.workingDirectory),
  } as any;
};

const deserializeAws_restJson1ImageRecipeSummary = (output: any, context: __SerdeContext): ImageRecipeSummary => {
  return {
    arn: __expectString(output.arn),
    dateCreated: __expectString(output.dateCreated),
    name: __expectString(output.name),
    owner: __expectString(output.owner),
    parentImage: __expectString(output.parentImage),
    platform: __expectString(output.platform),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ImageRecipeSummaryList = (output: any, context: __SerdeContext): ImageRecipeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ImageRecipeSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ImageState = (output: any, context: __SerdeContext): ImageState => {
  return {
    reason: __expectString(output.reason),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1ImageSummary = (output: any, context: __SerdeContext): ImageSummary => {
  return {
    arn: __expectString(output.arn),
    buildType: __expectString(output.buildType),
    dateCreated: __expectString(output.dateCreated),
    name: __expectString(output.name),
    osVersion: __expectString(output.osVersion),
    outputResources:
      output.outputResources !== undefined && output.outputResources !== null
        ? deserializeAws_restJson1OutputResources(output.outputResources, context)
        : undefined,
    owner: __expectString(output.owner),
    platform: __expectString(output.platform),
    state:
      output.state !== undefined && output.state !== null
        ? deserializeAws_restJson1ImageState(output.state, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    type: __expectString(output.type),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1ImageSummaryList = (output: any, context: __SerdeContext): ImageSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ImageSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ImageTestsConfiguration = (
  output: any,
  context: __SerdeContext
): ImageTestsConfiguration => {
  return {
    imageTestsEnabled: __expectBoolean(output.imageTestsEnabled),
    timeoutMinutes: __expectInt32(output.timeoutMinutes),
  } as any;
};

const deserializeAws_restJson1ImageVersion = (output: any, context: __SerdeContext): ImageVersion => {
  return {
    arn: __expectString(output.arn),
    buildType: __expectString(output.buildType),
    dateCreated: __expectString(output.dateCreated),
    name: __expectString(output.name),
    osVersion: __expectString(output.osVersion),
    owner: __expectString(output.owner),
    platform: __expectString(output.platform),
    type: __expectString(output.type),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1ImageVersionList = (output: any, context: __SerdeContext): ImageVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ImageVersion(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1InfrastructureConfiguration = (
  output: any,
  context: __SerdeContext
): InfrastructureConfiguration => {
  return {
    arn: __expectString(output.arn),
    dateCreated: __expectString(output.dateCreated),
    dateUpdated: __expectString(output.dateUpdated),
    description: __expectString(output.description),
    instanceMetadataOptions:
      output.instanceMetadataOptions !== undefined && output.instanceMetadataOptions !== null
        ? deserializeAws_restJson1InstanceMetadataOptions(output.instanceMetadataOptions, context)
        : undefined,
    instanceProfileName: __expectString(output.instanceProfileName),
    instanceTypes:
      output.instanceTypes !== undefined && output.instanceTypes !== null
        ? deserializeAws_restJson1InstanceTypeList(output.instanceTypes, context)
        : undefined,
    keyPair: __expectString(output.keyPair),
    logging:
      output.logging !== undefined && output.logging !== null
        ? deserializeAws_restJson1Logging(output.logging, context)
        : undefined,
    name: __expectString(output.name),
    resourceTags:
      output.resourceTags !== undefined && output.resourceTags !== null
        ? deserializeAws_restJson1ResourceTagMap(output.resourceTags, context)
        : undefined,
    securityGroupIds:
      output.securityGroupIds !== undefined && output.securityGroupIds !== null
        ? deserializeAws_restJson1SecurityGroupIds(output.securityGroupIds, context)
        : undefined,
    snsTopicArn: __expectString(output.snsTopicArn),
    subnetId: __expectString(output.subnetId),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    terminateInstanceOnFailure: __expectBoolean(output.terminateInstanceOnFailure),
  } as any;
};

const deserializeAws_restJson1InfrastructureConfigurationSummary = (
  output: any,
  context: __SerdeContext
): InfrastructureConfigurationSummary => {
  return {
    arn: __expectString(output.arn),
    dateCreated: __expectString(output.dateCreated),
    dateUpdated: __expectString(output.dateUpdated),
    description: __expectString(output.description),
    instanceProfileName: __expectString(output.instanceProfileName),
    instanceTypes:
      output.instanceTypes !== undefined && output.instanceTypes !== null
        ? deserializeAws_restJson1InstanceTypeList(output.instanceTypes, context)
        : undefined,
    name: __expectString(output.name),
    resourceTags:
      output.resourceTags !== undefined && output.resourceTags !== null
        ? deserializeAws_restJson1ResourceTagMap(output.resourceTags, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InfrastructureConfigurationSummaryList = (
  output: any,
  context: __SerdeContext
): InfrastructureConfigurationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InfrastructureConfigurationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1InstanceBlockDeviceMapping = (
  output: any,
  context: __SerdeContext
): InstanceBlockDeviceMapping => {
  return {
    deviceName: __expectString(output.deviceName),
    ebs:
      output.ebs !== undefined && output.ebs !== null
        ? deserializeAws_restJson1EbsInstanceBlockDeviceSpecification(output.ebs, context)
        : undefined,
    noDevice: __expectString(output.noDevice),
    virtualName: __expectString(output.virtualName),
  } as any;
};

const deserializeAws_restJson1InstanceBlockDeviceMappings = (
  output: any,
  context: __SerdeContext
): InstanceBlockDeviceMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InstanceBlockDeviceMapping(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1InstanceConfiguration = (output: any, context: __SerdeContext): InstanceConfiguration => {
  return {
    blockDeviceMappings:
      output.blockDeviceMappings !== undefined && output.blockDeviceMappings !== null
        ? deserializeAws_restJson1InstanceBlockDeviceMappings(output.blockDeviceMappings, context)
        : undefined,
    image: __expectString(output.image),
  } as any;
};

const deserializeAws_restJson1InstanceMetadataOptions = (
  output: any,
  context: __SerdeContext
): InstanceMetadataOptions => {
  return {
    httpPutResponseHopLimit: __expectInt32(output.httpPutResponseHopLimit),
    httpTokens: __expectString(output.httpTokens),
  } as any;
};

const deserializeAws_restJson1InstanceTypeList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1LaunchPermissionConfiguration = (
  output: any,
  context: __SerdeContext
): LaunchPermissionConfiguration => {
  return {
    organizationArns:
      output.organizationArns !== undefined && output.organizationArns !== null
        ? deserializeAws_restJson1OrganizationArnList(output.organizationArns, context)
        : undefined,
    organizationalUnitArns:
      output.organizationalUnitArns !== undefined && output.organizationalUnitArns !== null
        ? deserializeAws_restJson1OrganizationalUnitArnList(output.organizationalUnitArns, context)
        : undefined,
    userGroups:
      output.userGroups !== undefined && output.userGroups !== null
        ? deserializeAws_restJson1StringList(output.userGroups, context)
        : undefined,
    userIds:
      output.userIds !== undefined && output.userIds !== null
        ? deserializeAws_restJson1AccountList(output.userIds, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LaunchTemplateConfiguration = (
  output: any,
  context: __SerdeContext
): LaunchTemplateConfiguration => {
  return {
    accountId: __expectString(output.accountId),
    launchTemplateId: __expectString(output.launchTemplateId),
    setDefaultVersion: __expectBoolean(output.setDefaultVersion),
  } as any;
};

const deserializeAws_restJson1LaunchTemplateConfigurationList = (
  output: any,
  context: __SerdeContext
): LaunchTemplateConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LaunchTemplateConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LicenseConfigurationArnList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1Logging = (output: any, context: __SerdeContext): Logging => {
  return {
    s3Logs:
      output.s3Logs !== undefined && output.s3Logs !== null
        ? deserializeAws_restJson1S3Logs(output.s3Logs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1OrganizationalUnitArnList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1OrganizationArnList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1OsVersionList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1OutputResources = (output: any, context: __SerdeContext): OutputResources => {
  return {
    amis:
      output.amis !== undefined && output.amis !== null
        ? deserializeAws_restJson1AmiList(output.amis, context)
        : undefined,
    containers:
      output.containers !== undefined && output.containers !== null
        ? deserializeAws_restJson1ContainerList(output.containers, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RegionList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1ResourceTagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1S3ExportConfiguration = (output: any, context: __SerdeContext): S3ExportConfiguration => {
  return {
    diskImageFormat: __expectString(output.diskImageFormat),
    roleName: __expectString(output.roleName),
    s3Bucket: __expectString(output.s3Bucket),
    s3Prefix: __expectString(output.s3Prefix),
  } as any;
};

const deserializeAws_restJson1S3Logs = (output: any, context: __SerdeContext): S3Logs => {
  return {
    s3BucketName: __expectString(output.s3BucketName),
    s3KeyPrefix: __expectString(output.s3KeyPrefix),
  } as any;
};

const deserializeAws_restJson1Schedule = (output: any, context: __SerdeContext): Schedule => {
  return {
    pipelineExecutionStartCondition: __expectString(output.pipelineExecutionStartCondition),
    scheduleExpression: __expectString(output.scheduleExpression),
    timezone: __expectString(output.timezone),
  } as any;
};

const deserializeAws_restJson1SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1StringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1SystemsManagerAgent = (output: any, context: __SerdeContext): SystemsManagerAgent => {
  return {
    uninstallAfterBuild: __expectBoolean(output.uninstallAfterBuild),
  } as any;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1TargetContainerRepository = (
  output: any,
  context: __SerdeContext
): TargetContainerRepository => {
  return {
    repositoryName: __expectString(output.repositoryName),
    service: __expectString(output.service),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
