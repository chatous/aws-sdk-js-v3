// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  strictParseLong as __strictParseLong,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateExtendedSourceServerCommandInput,
  CreateExtendedSourceServerCommandOutput,
} from "../commands/CreateExtendedSourceServerCommand";
import {
  CreateReplicationConfigurationTemplateCommandInput,
  CreateReplicationConfigurationTemplateCommandOutput,
} from "../commands/CreateReplicationConfigurationTemplateCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "../commands/DeleteJobCommand";
import {
  DeleteRecoveryInstanceCommandInput,
  DeleteRecoveryInstanceCommandOutput,
} from "../commands/DeleteRecoveryInstanceCommand";
import {
  DeleteReplicationConfigurationTemplateCommandInput,
  DeleteReplicationConfigurationTemplateCommandOutput,
} from "../commands/DeleteReplicationConfigurationTemplateCommand";
import { DeleteSourceServerCommandInput, DeleteSourceServerCommandOutput } from "../commands/DeleteSourceServerCommand";
import {
  DescribeJobLogItemsCommandInput,
  DescribeJobLogItemsCommandOutput,
} from "../commands/DescribeJobLogItemsCommand";
import { DescribeJobsCommandInput, DescribeJobsCommandOutput } from "../commands/DescribeJobsCommand";
import {
  DescribeRecoveryInstancesCommandInput,
  DescribeRecoveryInstancesCommandOutput,
} from "../commands/DescribeRecoveryInstancesCommand";
import {
  DescribeRecoverySnapshotsCommandInput,
  DescribeRecoverySnapshotsCommandOutput,
} from "../commands/DescribeRecoverySnapshotsCommand";
import {
  DescribeReplicationConfigurationTemplatesCommandInput,
  DescribeReplicationConfigurationTemplatesCommandOutput,
} from "../commands/DescribeReplicationConfigurationTemplatesCommand";
import {
  DescribeSourceServersCommandInput,
  DescribeSourceServersCommandOutput,
} from "../commands/DescribeSourceServersCommand";
import {
  DisconnectRecoveryInstanceCommandInput,
  DisconnectRecoveryInstanceCommandOutput,
} from "../commands/DisconnectRecoveryInstanceCommand";
import {
  DisconnectSourceServerCommandInput,
  DisconnectSourceServerCommandOutput,
} from "../commands/DisconnectSourceServerCommand";
import {
  GetFailbackReplicationConfigurationCommandInput,
  GetFailbackReplicationConfigurationCommandOutput,
} from "../commands/GetFailbackReplicationConfigurationCommand";
import {
  GetLaunchConfigurationCommandInput,
  GetLaunchConfigurationCommandOutput,
} from "../commands/GetLaunchConfigurationCommand";
import {
  GetReplicationConfigurationCommandInput,
  GetReplicationConfigurationCommandOutput,
} from "../commands/GetReplicationConfigurationCommand";
import { InitializeServiceCommandInput, InitializeServiceCommandOutput } from "../commands/InitializeServiceCommand";
import {
  ListExtensibleSourceServersCommandInput,
  ListExtensibleSourceServersCommandOutput,
} from "../commands/ListExtensibleSourceServersCommand";
import {
  ListStagingAccountsCommandInput,
  ListStagingAccountsCommandOutput,
} from "../commands/ListStagingAccountsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  RetryDataReplicationCommandInput,
  RetryDataReplicationCommandOutput,
} from "../commands/RetryDataReplicationCommand";
import {
  StartFailbackLaunchCommandInput,
  StartFailbackLaunchCommandOutput,
} from "../commands/StartFailbackLaunchCommand";
import { StartRecoveryCommandInput, StartRecoveryCommandOutput } from "../commands/StartRecoveryCommand";
import { StopFailbackCommandInput, StopFailbackCommandOutput } from "../commands/StopFailbackCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import {
  TerminateRecoveryInstancesCommandInput,
  TerminateRecoveryInstancesCommandOutput,
} from "../commands/TerminateRecoveryInstancesCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateFailbackReplicationConfigurationCommandInput,
  UpdateFailbackReplicationConfigurationCommandOutput,
} from "../commands/UpdateFailbackReplicationConfigurationCommand";
import {
  UpdateLaunchConfigurationCommandInput,
  UpdateLaunchConfigurationCommandOutput,
} from "../commands/UpdateLaunchConfigurationCommand";
import {
  UpdateReplicationConfigurationCommandInput,
  UpdateReplicationConfigurationCommandOutput,
} from "../commands/UpdateReplicationConfigurationCommand";
import {
  UpdateReplicationConfigurationTemplateCommandInput,
  UpdateReplicationConfigurationTemplateCommandOutput,
} from "../commands/UpdateReplicationConfigurationTemplateCommand";
import { DrsServiceException as __BaseException } from "../models/DrsServiceException";
import {
  AccessDeniedException,
  Account,
  ConflictException,
  ConversionProperties,
  CPU,
  DataReplicationError,
  DataReplicationInfo,
  DataReplicationInfoReplicatedDisk,
  DataReplicationInitiation,
  DataReplicationInitiationStep,
  DescribeJobsRequestFilters,
  DescribeRecoveryInstancesRequestFilters,
  DescribeRecoverySnapshotsRequestFilters,
  DescribeSourceServersRequestFilters,
  Disk,
  IdentificationHints,
  InternalServerException,
  Job,
  JobLog,
  JobLogEventData,
  Licensing,
  LifeCycle,
  LifeCycleLastLaunch,
  LifeCycleLastLaunchInitiated,
  NetworkInterface,
  OS,
  ParticipatingServer,
  PITPolicyRule,
  RecoveryInstance,
  RecoveryInstanceDataReplicationError,
  RecoveryInstanceDataReplicationInfo,
  RecoveryInstanceDataReplicationInfoReplicatedDisk,
  RecoveryInstanceDataReplicationInitiation,
  RecoveryInstanceDataReplicationInitiationStep,
  RecoveryInstanceDisk,
  RecoveryInstanceFailback,
  RecoveryInstanceProperties,
  RecoverySnapshot,
  ReplicationConfigurationReplicatedDisk,
  ReplicationConfigurationTemplate,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  SourceProperties,
  SourceServer,
  StagingArea,
  StagingSourceServer,
  StartRecoveryRequestSourceServer,
  ThrottlingException,
  UninitializedAccountException,
  ValidationException,
  ValidationExceptionField,
} from "../models/models_0";

export const serializeAws_restJson1CreateExtendedSourceServerCommand = async (
  input: CreateExtendedSourceServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateExtendedSourceServer";
  let body: any;
  body = JSON.stringify({
    ...(input.sourceServerArn !== undefined &&
      input.sourceServerArn !== null && { sourceServerArn: input.sourceServerArn }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateReplicationConfigurationTemplateCommand = async (
  input: CreateReplicationConfigurationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateReplicationConfigurationTemplate";
  let body: any;
  body = JSON.stringify({
    ...(input.associateDefaultSecurityGroup !== undefined &&
      input.associateDefaultSecurityGroup !== null && {
        associateDefaultSecurityGroup: input.associateDefaultSecurityGroup,
      }),
    ...(input.bandwidthThrottling !== undefined &&
      input.bandwidthThrottling !== null && { bandwidthThrottling: input.bandwidthThrottling }),
    ...(input.createPublicIP !== undefined &&
      input.createPublicIP !== null && { createPublicIP: input.createPublicIP }),
    ...(input.dataPlaneRouting !== undefined &&
      input.dataPlaneRouting !== null && { dataPlaneRouting: input.dataPlaneRouting }),
    ...(input.defaultLargeStagingDiskType !== undefined &&
      input.defaultLargeStagingDiskType !== null && { defaultLargeStagingDiskType: input.defaultLargeStagingDiskType }),
    ...(input.ebsEncryption !== undefined && input.ebsEncryption !== null && { ebsEncryption: input.ebsEncryption }),
    ...(input.ebsEncryptionKeyArn !== undefined &&
      input.ebsEncryptionKeyArn !== null && { ebsEncryptionKeyArn: input.ebsEncryptionKeyArn }),
    ...(input.pitPolicy !== undefined &&
      input.pitPolicy !== null && { pitPolicy: serializeAws_restJson1PITPolicy(input.pitPolicy, context) }),
    ...(input.replicationServerInstanceType !== undefined &&
      input.replicationServerInstanceType !== null && {
        replicationServerInstanceType: input.replicationServerInstanceType,
      }),
    ...(input.replicationServersSecurityGroupsIDs !== undefined &&
      input.replicationServersSecurityGroupsIDs !== null && {
        replicationServersSecurityGroupsIDs: serializeAws_restJson1ReplicationServersSecurityGroupsIDs(
          input.replicationServersSecurityGroupsIDs,
          context
        ),
      }),
    ...(input.stagingAreaSubnetId !== undefined &&
      input.stagingAreaSubnetId !== null && { stagingAreaSubnetId: input.stagingAreaSubnetId }),
    ...(input.stagingAreaTags !== undefined &&
      input.stagingAreaTags !== null && {
        stagingAreaTags: serializeAws_restJson1TagsMap(input.stagingAreaTags, context),
      }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
    ...(input.useDedicatedReplicationServer !== undefined &&
      input.useDedicatedReplicationServer !== null && {
        useDedicatedReplicationServer: input.useDedicatedReplicationServer,
      }),
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

export const serializeAws_restJson1DeleteJobCommand = async (
  input: DeleteJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteJob";
  let body: any;
  body = JSON.stringify({
    ...(input.jobID !== undefined && input.jobID !== null && { jobID: input.jobID }),
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

export const serializeAws_restJson1DeleteRecoveryInstanceCommand = async (
  input: DeleteRecoveryInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteRecoveryInstance";
  let body: any;
  body = JSON.stringify({
    ...(input.recoveryInstanceID !== undefined &&
      input.recoveryInstanceID !== null && { recoveryInstanceID: input.recoveryInstanceID }),
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

export const serializeAws_restJson1DeleteReplicationConfigurationTemplateCommand = async (
  input: DeleteReplicationConfigurationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteReplicationConfigurationTemplate";
  let body: any;
  body = JSON.stringify({
    ...(input.replicationConfigurationTemplateID !== undefined &&
      input.replicationConfigurationTemplateID !== null && {
        replicationConfigurationTemplateID: input.replicationConfigurationTemplateID,
      }),
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

export const serializeAws_restJson1DeleteSourceServerCommand = async (
  input: DeleteSourceServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteSourceServer";
  let body: any;
  body = JSON.stringify({
    ...(input.sourceServerID !== undefined &&
      input.sourceServerID !== null && { sourceServerID: input.sourceServerID }),
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

export const serializeAws_restJson1DescribeJobLogItemsCommand = async (
  input: DescribeJobLogItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeJobLogItems";
  let body: any;
  body = JSON.stringify({
    ...(input.jobID !== undefined && input.jobID !== null && { jobID: input.jobID }),
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

export const serializeAws_restJson1DescribeJobsCommand = async (
  input: DescribeJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeJobs";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1DescribeJobsRequestFilters(input.filters, context) }),
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

export const serializeAws_restJson1DescribeRecoveryInstancesCommand = async (
  input: DescribeRecoveryInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeRecoveryInstances";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined &&
      input.filters !== null && {
        filters: serializeAws_restJson1DescribeRecoveryInstancesRequestFilters(input.filters, context),
      }),
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

export const serializeAws_restJson1DescribeRecoverySnapshotsCommand = async (
  input: DescribeRecoverySnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeRecoverySnapshots";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined &&
      input.filters !== null && {
        filters: serializeAws_restJson1DescribeRecoverySnapshotsRequestFilters(input.filters, context),
      }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.order !== undefined && input.order !== null && { order: input.order }),
    ...(input.sourceServerID !== undefined &&
      input.sourceServerID !== null && { sourceServerID: input.sourceServerID }),
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

export const serializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand = async (
  input: DescribeReplicationConfigurationTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/DescribeReplicationConfigurationTemplates";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.replicationConfigurationTemplateIDs !== undefined &&
      input.replicationConfigurationTemplateIDs !== null && {
        replicationConfigurationTemplateIDs: serializeAws_restJson1ReplicationConfigurationTemplateIDs(
          input.replicationConfigurationTemplateIDs,
          context
        ),
      }),
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

export const serializeAws_restJson1DescribeSourceServersCommand = async (
  input: DescribeSourceServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeSourceServers";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined &&
      input.filters !== null && {
        filters: serializeAws_restJson1DescribeSourceServersRequestFilters(input.filters, context),
      }),
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

export const serializeAws_restJson1DisconnectRecoveryInstanceCommand = async (
  input: DisconnectRecoveryInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DisconnectRecoveryInstance";
  let body: any;
  body = JSON.stringify({
    ...(input.recoveryInstanceID !== undefined &&
      input.recoveryInstanceID !== null && { recoveryInstanceID: input.recoveryInstanceID }),
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

export const serializeAws_restJson1DisconnectSourceServerCommand = async (
  input: DisconnectSourceServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DisconnectSourceServer";
  let body: any;
  body = JSON.stringify({
    ...(input.sourceServerID !== undefined &&
      input.sourceServerID !== null && { sourceServerID: input.sourceServerID }),
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

export const serializeAws_restJson1GetFailbackReplicationConfigurationCommand = async (
  input: GetFailbackReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetFailbackReplicationConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.recoveryInstanceID !== undefined &&
      input.recoveryInstanceID !== null && { recoveryInstanceID: input.recoveryInstanceID }),
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

export const serializeAws_restJson1GetLaunchConfigurationCommand = async (
  input: GetLaunchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetLaunchConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.sourceServerID !== undefined &&
      input.sourceServerID !== null && { sourceServerID: input.sourceServerID }),
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

export const serializeAws_restJson1GetReplicationConfigurationCommand = async (
  input: GetReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetReplicationConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.sourceServerID !== undefined &&
      input.sourceServerID !== null && { sourceServerID: input.sourceServerID }),
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

export const serializeAws_restJson1InitializeServiceCommand = async (
  input: InitializeServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/InitializeService";
  let body: any;
  body = "";
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

export const serializeAws_restJson1ListExtensibleSourceServersCommand = async (
  input: ListExtensibleSourceServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListExtensibleSourceServers";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.stagingAccountID !== undefined &&
      input.stagingAccountID !== null && { stagingAccountID: input.stagingAccountID }),
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

export const serializeAws_restJson1ListStagingAccountsCommand = async (
  input: ListStagingAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListStagingAccounts";
  const query: any = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1RetryDataReplicationCommand = async (
  input: RetryDataReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/RetryDataReplication";
  let body: any;
  body = JSON.stringify({
    ...(input.sourceServerID !== undefined &&
      input.sourceServerID !== null && { sourceServerID: input.sourceServerID }),
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

export const serializeAws_restJson1StartFailbackLaunchCommand = async (
  input: StartFailbackLaunchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/StartFailbackLaunch";
  let body: any;
  body = JSON.stringify({
    ...(input.recoveryInstanceIDs !== undefined &&
      input.recoveryInstanceIDs !== null && {
        recoveryInstanceIDs: serializeAws_restJson1StartFailbackRequestRecoveryInstanceIDs(
          input.recoveryInstanceIDs,
          context
        ),
      }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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

export const serializeAws_restJson1StartRecoveryCommand = async (
  input: StartRecoveryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/StartRecovery";
  let body: any;
  body = JSON.stringify({
    ...(input.isDrill !== undefined && input.isDrill !== null && { isDrill: input.isDrill }),
    ...(input.sourceServers !== undefined &&
      input.sourceServers !== null && {
        sourceServers: serializeAws_restJson1StartRecoveryRequestSourceServers(input.sourceServers, context),
      }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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

export const serializeAws_restJson1StopFailbackCommand = async (
  input: StopFailbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/StopFailback";
  let body: any;
  body = JSON.stringify({
    ...(input.recoveryInstanceID !== undefined &&
      input.recoveryInstanceID !== null && { recoveryInstanceID: input.recoveryInstanceID }),
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
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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

export const serializeAws_restJson1TerminateRecoveryInstancesCommand = async (
  input: TerminateRecoveryInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/TerminateRecoveryInstances";
  let body: any;
  body = JSON.stringify({
    ...(input.recoveryInstanceIDs !== undefined &&
      input.recoveryInstanceIDs !== null && {
        recoveryInstanceIDs: serializeAws_restJson1RecoveryInstancesForTerminationRequest(
          input.recoveryInstanceIDs,
          context
        ),
      }),
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

export const serializeAws_restJson1UpdateFailbackReplicationConfigurationCommand = async (
  input: UpdateFailbackReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateFailbackReplicationConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.bandwidthThrottling !== undefined &&
      input.bandwidthThrottling !== null && { bandwidthThrottling: input.bandwidthThrottling }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.recoveryInstanceID !== undefined &&
      input.recoveryInstanceID !== null && { recoveryInstanceID: input.recoveryInstanceID }),
    ...(input.usePrivateIP !== undefined && input.usePrivateIP !== null && { usePrivateIP: input.usePrivateIP }),
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

export const serializeAws_restJson1UpdateLaunchConfigurationCommand = async (
  input: UpdateLaunchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateLaunchConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.copyPrivateIp !== undefined && input.copyPrivateIp !== null && { copyPrivateIp: input.copyPrivateIp }),
    ...(input.copyTags !== undefined && input.copyTags !== null && { copyTags: input.copyTags }),
    ...(input.launchDisposition !== undefined &&
      input.launchDisposition !== null && { launchDisposition: input.launchDisposition }),
    ...(input.licensing !== undefined &&
      input.licensing !== null && { licensing: serializeAws_restJson1Licensing(input.licensing, context) }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.sourceServerID !== undefined &&
      input.sourceServerID !== null && { sourceServerID: input.sourceServerID }),
    ...(input.targetInstanceTypeRightSizingMethod !== undefined &&
      input.targetInstanceTypeRightSizingMethod !== null && {
        targetInstanceTypeRightSizingMethod: input.targetInstanceTypeRightSizingMethod,
      }),
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

export const serializeAws_restJson1UpdateReplicationConfigurationCommand = async (
  input: UpdateReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateReplicationConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.associateDefaultSecurityGroup !== undefined &&
      input.associateDefaultSecurityGroup !== null && {
        associateDefaultSecurityGroup: input.associateDefaultSecurityGroup,
      }),
    ...(input.bandwidthThrottling !== undefined &&
      input.bandwidthThrottling !== null && { bandwidthThrottling: input.bandwidthThrottling }),
    ...(input.createPublicIP !== undefined &&
      input.createPublicIP !== null && { createPublicIP: input.createPublicIP }),
    ...(input.dataPlaneRouting !== undefined &&
      input.dataPlaneRouting !== null && { dataPlaneRouting: input.dataPlaneRouting }),
    ...(input.defaultLargeStagingDiskType !== undefined &&
      input.defaultLargeStagingDiskType !== null && { defaultLargeStagingDiskType: input.defaultLargeStagingDiskType }),
    ...(input.ebsEncryption !== undefined && input.ebsEncryption !== null && { ebsEncryption: input.ebsEncryption }),
    ...(input.ebsEncryptionKeyArn !== undefined &&
      input.ebsEncryptionKeyArn !== null && { ebsEncryptionKeyArn: input.ebsEncryptionKeyArn }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.pitPolicy !== undefined &&
      input.pitPolicy !== null && { pitPolicy: serializeAws_restJson1PITPolicy(input.pitPolicy, context) }),
    ...(input.replicatedDisks !== undefined &&
      input.replicatedDisks !== null && {
        replicatedDisks: serializeAws_restJson1ReplicationConfigurationReplicatedDisks(input.replicatedDisks, context),
      }),
    ...(input.replicationServerInstanceType !== undefined &&
      input.replicationServerInstanceType !== null && {
        replicationServerInstanceType: input.replicationServerInstanceType,
      }),
    ...(input.replicationServersSecurityGroupsIDs !== undefined &&
      input.replicationServersSecurityGroupsIDs !== null && {
        replicationServersSecurityGroupsIDs: serializeAws_restJson1ReplicationServersSecurityGroupsIDs(
          input.replicationServersSecurityGroupsIDs,
          context
        ),
      }),
    ...(input.sourceServerID !== undefined &&
      input.sourceServerID !== null && { sourceServerID: input.sourceServerID }),
    ...(input.stagingAreaSubnetId !== undefined &&
      input.stagingAreaSubnetId !== null && { stagingAreaSubnetId: input.stagingAreaSubnetId }),
    ...(input.stagingAreaTags !== undefined &&
      input.stagingAreaTags !== null && {
        stagingAreaTags: serializeAws_restJson1TagsMap(input.stagingAreaTags, context),
      }),
    ...(input.useDedicatedReplicationServer !== undefined &&
      input.useDedicatedReplicationServer !== null && {
        useDedicatedReplicationServer: input.useDedicatedReplicationServer,
      }),
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

export const serializeAws_restJson1UpdateReplicationConfigurationTemplateCommand = async (
  input: UpdateReplicationConfigurationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateReplicationConfigurationTemplate";
  let body: any;
  body = JSON.stringify({
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    ...(input.associateDefaultSecurityGroup !== undefined &&
      input.associateDefaultSecurityGroup !== null && {
        associateDefaultSecurityGroup: input.associateDefaultSecurityGroup,
      }),
    ...(input.bandwidthThrottling !== undefined &&
      input.bandwidthThrottling !== null && { bandwidthThrottling: input.bandwidthThrottling }),
    ...(input.createPublicIP !== undefined &&
      input.createPublicIP !== null && { createPublicIP: input.createPublicIP }),
    ...(input.dataPlaneRouting !== undefined &&
      input.dataPlaneRouting !== null && { dataPlaneRouting: input.dataPlaneRouting }),
    ...(input.defaultLargeStagingDiskType !== undefined &&
      input.defaultLargeStagingDiskType !== null && { defaultLargeStagingDiskType: input.defaultLargeStagingDiskType }),
    ...(input.ebsEncryption !== undefined && input.ebsEncryption !== null && { ebsEncryption: input.ebsEncryption }),
    ...(input.ebsEncryptionKeyArn !== undefined &&
      input.ebsEncryptionKeyArn !== null && { ebsEncryptionKeyArn: input.ebsEncryptionKeyArn }),
    ...(input.pitPolicy !== undefined &&
      input.pitPolicy !== null && { pitPolicy: serializeAws_restJson1PITPolicy(input.pitPolicy, context) }),
    ...(input.replicationConfigurationTemplateID !== undefined &&
      input.replicationConfigurationTemplateID !== null && {
        replicationConfigurationTemplateID: input.replicationConfigurationTemplateID,
      }),
    ...(input.replicationServerInstanceType !== undefined &&
      input.replicationServerInstanceType !== null && {
        replicationServerInstanceType: input.replicationServerInstanceType,
      }),
    ...(input.replicationServersSecurityGroupsIDs !== undefined &&
      input.replicationServersSecurityGroupsIDs !== null && {
        replicationServersSecurityGroupsIDs: serializeAws_restJson1ReplicationServersSecurityGroupsIDs(
          input.replicationServersSecurityGroupsIDs,
          context
        ),
      }),
    ...(input.stagingAreaSubnetId !== undefined &&
      input.stagingAreaSubnetId !== null && { stagingAreaSubnetId: input.stagingAreaSubnetId }),
    ...(input.stagingAreaTags !== undefined &&
      input.stagingAreaTags !== null && {
        stagingAreaTags: serializeAws_restJson1TagsMap(input.stagingAreaTags, context),
      }),
    ...(input.useDedicatedReplicationServer !== undefined &&
      input.useDedicatedReplicationServer !== null && {
        useDedicatedReplicationServer: input.useDedicatedReplicationServer,
      }),
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

export const deserializeAws_restJson1CreateExtendedSourceServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExtendedSourceServerCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateExtendedSourceServerCommandError(output, context);
  }
  const contents: CreateExtendedSourceServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    sourceServer: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.sourceServer !== undefined && data.sourceServer !== null) {
    contents.sourceServer = deserializeAws_restJson1SourceServer(data.sourceServer, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateExtendedSourceServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExtendedSourceServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.drs#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateReplicationConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationConfigurationTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateReplicationConfigurationTemplateCommandError(output, context);
  }
  const contents: CreateReplicationConfigurationTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    associateDefaultSecurityGroup: undefined,
    bandwidthThrottling: undefined,
    createPublicIP: undefined,
    dataPlaneRouting: undefined,
    defaultLargeStagingDiskType: undefined,
    ebsEncryption: undefined,
    ebsEncryptionKeyArn: undefined,
    pitPolicy: undefined,
    replicationConfigurationTemplateID: undefined,
    replicationServerInstanceType: undefined,
    replicationServersSecurityGroupsIDs: undefined,
    stagingAreaSubnetId: undefined,
    stagingAreaTags: undefined,
    tags: undefined,
    useDedicatedReplicationServer: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.associateDefaultSecurityGroup !== undefined && data.associateDefaultSecurityGroup !== null) {
    contents.associateDefaultSecurityGroup = __expectBoolean(data.associateDefaultSecurityGroup);
  }
  if (data.bandwidthThrottling !== undefined && data.bandwidthThrottling !== null) {
    contents.bandwidthThrottling = __expectLong(data.bandwidthThrottling);
  }
  if (data.createPublicIP !== undefined && data.createPublicIP !== null) {
    contents.createPublicIP = __expectBoolean(data.createPublicIP);
  }
  if (data.dataPlaneRouting !== undefined && data.dataPlaneRouting !== null) {
    contents.dataPlaneRouting = __expectString(data.dataPlaneRouting);
  }
  if (data.defaultLargeStagingDiskType !== undefined && data.defaultLargeStagingDiskType !== null) {
    contents.defaultLargeStagingDiskType = __expectString(data.defaultLargeStagingDiskType);
  }
  if (data.ebsEncryption !== undefined && data.ebsEncryption !== null) {
    contents.ebsEncryption = __expectString(data.ebsEncryption);
  }
  if (data.ebsEncryptionKeyArn !== undefined && data.ebsEncryptionKeyArn !== null) {
    contents.ebsEncryptionKeyArn = __expectString(data.ebsEncryptionKeyArn);
  }
  if (data.pitPolicy !== undefined && data.pitPolicy !== null) {
    contents.pitPolicy = deserializeAws_restJson1PITPolicy(data.pitPolicy, context);
  }
  if (data.replicationConfigurationTemplateID !== undefined && data.replicationConfigurationTemplateID !== null) {
    contents.replicationConfigurationTemplateID = __expectString(data.replicationConfigurationTemplateID);
  }
  if (data.replicationServerInstanceType !== undefined && data.replicationServerInstanceType !== null) {
    contents.replicationServerInstanceType = __expectString(data.replicationServerInstanceType);
  }
  if (data.replicationServersSecurityGroupsIDs !== undefined && data.replicationServersSecurityGroupsIDs !== null) {
    contents.replicationServersSecurityGroupsIDs = deserializeAws_restJson1ReplicationServersSecurityGroupsIDs(
      data.replicationServersSecurityGroupsIDs,
      context
    );
  }
  if (data.stagingAreaSubnetId !== undefined && data.stagingAreaSubnetId !== null) {
    contents.stagingAreaSubnetId = __expectString(data.stagingAreaSubnetId);
  }
  if (data.stagingAreaTags !== undefined && data.stagingAreaTags !== null) {
    contents.stagingAreaTags = deserializeAws_restJson1TagsMap(data.stagingAreaTags, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  if (data.useDedicatedReplicationServer !== undefined && data.useDedicatedReplicationServer !== null) {
    contents.useDedicatedReplicationServer = __expectBoolean(data.useDedicatedReplicationServer);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateReplicationConfigurationTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationConfigurationTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.drs#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteJobCommandError(output, context);
  }
  const contents: DeleteJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.drs#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteRecoveryInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecoveryInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRecoveryInstanceCommandError(output, context);
  }
  const contents: DeleteRecoveryInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteRecoveryInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecoveryInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.drs#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteReplicationConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationConfigurationTemplateCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteReplicationConfigurationTemplateCommandError(output, context);
  }
  const contents: DeleteReplicationConfigurationTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteReplicationConfigurationTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationConfigurationTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.drs#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteSourceServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSourceServerCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSourceServerCommandError(output, context);
  }
  const contents: DeleteSourceServerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteSourceServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSourceServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.drs#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeJobLogItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobLogItemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeJobLogItemsCommandError(output, context);
  }
  const contents: DescribeJobLogItemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    items: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items !== undefined && data.items !== null) {
    contents.items = deserializeAws_restJson1JobLogs(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeJobLogItemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobLogItemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeJobsCommandError(output, context);
  }
  const contents: DescribeJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    items: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items !== undefined && data.items !== null) {
    contents.items = deserializeAws_restJson1JobsList(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeRecoveryInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecoveryInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRecoveryInstancesCommandError(output, context);
  }
  const contents: DescribeRecoveryInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    items: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items !== undefined && data.items !== null) {
    contents.items = deserializeAws_restJson1DescribeRecoveryInstancesItems(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeRecoveryInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecoveryInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeRecoverySnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecoverySnapshotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRecoverySnapshotsCommandError(output, context);
  }
  const contents: DescribeRecoverySnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    items: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items !== undefined && data.items !== null) {
    contents.items = deserializeAws_restJson1RecoverySnapshotsList(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeRecoverySnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecoverySnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationConfigurationTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeReplicationConfigurationTemplatesCommandError(output, context);
  }
  const contents: DescribeReplicationConfigurationTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    items: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items !== undefined && data.items !== null) {
    contents.items = deserializeAws_restJson1ReplicationConfigurationTemplates(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeReplicationConfigurationTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationConfigurationTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeSourceServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSourceServersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeSourceServersCommandError(output, context);
  }
  const contents: DescribeSourceServersCommandOutput = {
    $metadata: deserializeMetadata(output),
    items: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items !== undefined && data.items !== null) {
    contents.items = deserializeAws_restJson1SourceServersList(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeSourceServersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSourceServersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisconnectRecoveryInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectRecoveryInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisconnectRecoveryInstanceCommandError(output, context);
  }
  const contents: DisconnectRecoveryInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisconnectRecoveryInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectRecoveryInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.drs#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisconnectSourceServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectSourceServerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisconnectSourceServerCommandError(output, context);
  }
  const contents: DisconnectSourceServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    dataReplicationInfo: undefined,
    lastLaunchResult: undefined,
    lifeCycle: undefined,
    recoveryInstanceId: undefined,
    sourceProperties: undefined,
    sourceServerID: undefined,
    stagingArea: undefined,
    tags: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.dataReplicationInfo !== undefined && data.dataReplicationInfo !== null) {
    contents.dataReplicationInfo = deserializeAws_restJson1DataReplicationInfo(data.dataReplicationInfo, context);
  }
  if (data.lastLaunchResult !== undefined && data.lastLaunchResult !== null) {
    contents.lastLaunchResult = __expectString(data.lastLaunchResult);
  }
  if (data.lifeCycle !== undefined && data.lifeCycle !== null) {
    contents.lifeCycle = deserializeAws_restJson1LifeCycle(data.lifeCycle, context);
  }
  if (data.recoveryInstanceId !== undefined && data.recoveryInstanceId !== null) {
    contents.recoveryInstanceId = __expectString(data.recoveryInstanceId);
  }
  if (data.sourceProperties !== undefined && data.sourceProperties !== null) {
    contents.sourceProperties = deserializeAws_restJson1SourceProperties(data.sourceProperties, context);
  }
  if (data.sourceServerID !== undefined && data.sourceServerID !== null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.stagingArea !== undefined && data.stagingArea !== null) {
    contents.stagingArea = deserializeAws_restJson1StagingArea(data.stagingArea, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisconnectSourceServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectSourceServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.drs#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetFailbackReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFailbackReplicationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFailbackReplicationConfigurationCommandError(output, context);
  }
  const contents: GetFailbackReplicationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    bandwidthThrottling: undefined,
    name: undefined,
    recoveryInstanceID: undefined,
    usePrivateIP: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.bandwidthThrottling !== undefined && data.bandwidthThrottling !== null) {
    contents.bandwidthThrottling = __expectLong(data.bandwidthThrottling);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = __expectString(data.name);
  }
  if (data.recoveryInstanceID !== undefined && data.recoveryInstanceID !== null) {
    contents.recoveryInstanceID = __expectString(data.recoveryInstanceID);
  }
  if (data.usePrivateIP !== undefined && data.usePrivateIP !== null) {
    contents.usePrivateIP = __expectBoolean(data.usePrivateIP);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetFailbackReplicationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFailbackReplicationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetLaunchConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLaunchConfigurationCommandError(output, context);
  }
  const contents: GetLaunchConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    copyPrivateIp: undefined,
    copyTags: undefined,
    ec2LaunchTemplateID: undefined,
    launchDisposition: undefined,
    licensing: undefined,
    name: undefined,
    sourceServerID: undefined,
    targetInstanceTypeRightSizingMethod: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.copyPrivateIp !== undefined && data.copyPrivateIp !== null) {
    contents.copyPrivateIp = __expectBoolean(data.copyPrivateIp);
  }
  if (data.copyTags !== undefined && data.copyTags !== null) {
    contents.copyTags = __expectBoolean(data.copyTags);
  }
  if (data.ec2LaunchTemplateID !== undefined && data.ec2LaunchTemplateID !== null) {
    contents.ec2LaunchTemplateID = __expectString(data.ec2LaunchTemplateID);
  }
  if (data.launchDisposition !== undefined && data.launchDisposition !== null) {
    contents.launchDisposition = __expectString(data.launchDisposition);
  }
  if (data.licensing !== undefined && data.licensing !== null) {
    contents.licensing = deserializeAws_restJson1Licensing(data.licensing, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = __expectString(data.name);
  }
  if (data.sourceServerID !== undefined && data.sourceServerID !== null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.targetInstanceTypeRightSizingMethod !== undefined && data.targetInstanceTypeRightSizingMethod !== null) {
    contents.targetInstanceTypeRightSizingMethod = __expectString(data.targetInstanceTypeRightSizingMethod);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetLaunchConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReplicationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetReplicationConfigurationCommandError(output, context);
  }
  const contents: GetReplicationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    associateDefaultSecurityGroup: undefined,
    bandwidthThrottling: undefined,
    createPublicIP: undefined,
    dataPlaneRouting: undefined,
    defaultLargeStagingDiskType: undefined,
    ebsEncryption: undefined,
    ebsEncryptionKeyArn: undefined,
    name: undefined,
    pitPolicy: undefined,
    replicatedDisks: undefined,
    replicationServerInstanceType: undefined,
    replicationServersSecurityGroupsIDs: undefined,
    sourceServerID: undefined,
    stagingAreaSubnetId: undefined,
    stagingAreaTags: undefined,
    useDedicatedReplicationServer: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.associateDefaultSecurityGroup !== undefined && data.associateDefaultSecurityGroup !== null) {
    contents.associateDefaultSecurityGroup = __expectBoolean(data.associateDefaultSecurityGroup);
  }
  if (data.bandwidthThrottling !== undefined && data.bandwidthThrottling !== null) {
    contents.bandwidthThrottling = __expectLong(data.bandwidthThrottling);
  }
  if (data.createPublicIP !== undefined && data.createPublicIP !== null) {
    contents.createPublicIP = __expectBoolean(data.createPublicIP);
  }
  if (data.dataPlaneRouting !== undefined && data.dataPlaneRouting !== null) {
    contents.dataPlaneRouting = __expectString(data.dataPlaneRouting);
  }
  if (data.defaultLargeStagingDiskType !== undefined && data.defaultLargeStagingDiskType !== null) {
    contents.defaultLargeStagingDiskType = __expectString(data.defaultLargeStagingDiskType);
  }
  if (data.ebsEncryption !== undefined && data.ebsEncryption !== null) {
    contents.ebsEncryption = __expectString(data.ebsEncryption);
  }
  if (data.ebsEncryptionKeyArn !== undefined && data.ebsEncryptionKeyArn !== null) {
    contents.ebsEncryptionKeyArn = __expectString(data.ebsEncryptionKeyArn);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = __expectString(data.name);
  }
  if (data.pitPolicy !== undefined && data.pitPolicy !== null) {
    contents.pitPolicy = deserializeAws_restJson1PITPolicy(data.pitPolicy, context);
  }
  if (data.replicatedDisks !== undefined && data.replicatedDisks !== null) {
    contents.replicatedDisks = deserializeAws_restJson1ReplicationConfigurationReplicatedDisks(
      data.replicatedDisks,
      context
    );
  }
  if (data.replicationServerInstanceType !== undefined && data.replicationServerInstanceType !== null) {
    contents.replicationServerInstanceType = __expectString(data.replicationServerInstanceType);
  }
  if (data.replicationServersSecurityGroupsIDs !== undefined && data.replicationServersSecurityGroupsIDs !== null) {
    contents.replicationServersSecurityGroupsIDs = deserializeAws_restJson1ReplicationServersSecurityGroupsIDs(
      data.replicationServersSecurityGroupsIDs,
      context
    );
  }
  if (data.sourceServerID !== undefined && data.sourceServerID !== null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.stagingAreaSubnetId !== undefined && data.stagingAreaSubnetId !== null) {
    contents.stagingAreaSubnetId = __expectString(data.stagingAreaSubnetId);
  }
  if (data.stagingAreaTags !== undefined && data.stagingAreaTags !== null) {
    contents.stagingAreaTags = deserializeAws_restJson1TagsMap(data.stagingAreaTags, context);
  }
  if (data.useDedicatedReplicationServer !== undefined && data.useDedicatedReplicationServer !== null) {
    contents.useDedicatedReplicationServer = __expectBoolean(data.useDedicatedReplicationServer);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetReplicationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReplicationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1InitializeServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitializeServiceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1InitializeServiceCommandError(output, context);
  }
  const contents: InitializeServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1InitializeServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitializeServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListExtensibleSourceServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExtensibleSourceServersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListExtensibleSourceServersCommandError(output, context);
  }
  const contents: ListExtensibleSourceServersCommandOutput = {
    $metadata: deserializeMetadata(output),
    items: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items !== undefined && data.items !== null) {
    contents.items = deserializeAws_restJson1StagingSourceServersList(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListExtensibleSourceServersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExtensibleSourceServersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListStagingAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStagingAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListStagingAccountsCommandError(output, context);
  }
  const contents: ListStagingAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    accounts: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accounts !== undefined && data.accounts !== null) {
    contents.accounts = deserializeAws_restJson1Accounts(data.accounts, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListStagingAccountsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStagingAccountsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RetryDataReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryDataReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RetryDataReplicationCommandError(output, context);
  }
  const contents: RetryDataReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    dataReplicationInfo: undefined,
    lastLaunchResult: undefined,
    lifeCycle: undefined,
    recoveryInstanceId: undefined,
    sourceProperties: undefined,
    sourceServerID: undefined,
    stagingArea: undefined,
    tags: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.dataReplicationInfo !== undefined && data.dataReplicationInfo !== null) {
    contents.dataReplicationInfo = deserializeAws_restJson1DataReplicationInfo(data.dataReplicationInfo, context);
  }
  if (data.lastLaunchResult !== undefined && data.lastLaunchResult !== null) {
    contents.lastLaunchResult = __expectString(data.lastLaunchResult);
  }
  if (data.lifeCycle !== undefined && data.lifeCycle !== null) {
    contents.lifeCycle = deserializeAws_restJson1LifeCycle(data.lifeCycle, context);
  }
  if (data.recoveryInstanceId !== undefined && data.recoveryInstanceId !== null) {
    contents.recoveryInstanceId = __expectString(data.recoveryInstanceId);
  }
  if (data.sourceProperties !== undefined && data.sourceProperties !== null) {
    contents.sourceProperties = deserializeAws_restJson1SourceProperties(data.sourceProperties, context);
  }
  if (data.sourceServerID !== undefined && data.sourceServerID !== null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.stagingArea !== undefined && data.stagingArea !== null) {
    contents.stagingArea = deserializeAws_restJson1StagingArea(data.stagingArea, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RetryDataReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryDataReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartFailbackLaunchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFailbackLaunchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartFailbackLaunchCommandError(output, context);
  }
  const contents: StartFailbackLaunchCommandOutput = {
    $metadata: deserializeMetadata(output),
    job: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.job !== undefined && data.job !== null) {
    contents.job = deserializeAws_restJson1Job(data.job, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartFailbackLaunchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFailbackLaunchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.drs#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.drs#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartRecoveryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRecoveryCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartRecoveryCommandError(output, context);
  }
  const contents: StartRecoveryCommandOutput = {
    $metadata: deserializeMetadata(output),
    job: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.job !== undefined && data.job !== null) {
    contents.job = deserializeAws_restJson1Job(data.job, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartRecoveryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRecoveryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.drs#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.drs#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StopFailbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFailbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopFailbackCommandError(output, context);
  }
  const contents: StopFailbackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StopFailbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFailbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TerminateRecoveryInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateRecoveryInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TerminateRecoveryInstancesCommandError(output, context);
  }
  const contents: TerminateRecoveryInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    job: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.job !== undefined && data.job !== null) {
    contents.job = deserializeAws_restJson1Job(data.job, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TerminateRecoveryInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateRecoveryInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.drs#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.drs#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateFailbackReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFailbackReplicationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFailbackReplicationConfigurationCommandError(output, context);
  }
  const contents: UpdateFailbackReplicationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFailbackReplicationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFailbackReplicationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateLaunchConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLaunchConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateLaunchConfigurationCommandError(output, context);
  }
  const contents: UpdateLaunchConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    copyPrivateIp: undefined,
    copyTags: undefined,
    ec2LaunchTemplateID: undefined,
    launchDisposition: undefined,
    licensing: undefined,
    name: undefined,
    sourceServerID: undefined,
    targetInstanceTypeRightSizingMethod: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.copyPrivateIp !== undefined && data.copyPrivateIp !== null) {
    contents.copyPrivateIp = __expectBoolean(data.copyPrivateIp);
  }
  if (data.copyTags !== undefined && data.copyTags !== null) {
    contents.copyTags = __expectBoolean(data.copyTags);
  }
  if (data.ec2LaunchTemplateID !== undefined && data.ec2LaunchTemplateID !== null) {
    contents.ec2LaunchTemplateID = __expectString(data.ec2LaunchTemplateID);
  }
  if (data.launchDisposition !== undefined && data.launchDisposition !== null) {
    contents.launchDisposition = __expectString(data.launchDisposition);
  }
  if (data.licensing !== undefined && data.licensing !== null) {
    contents.licensing = deserializeAws_restJson1Licensing(data.licensing, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = __expectString(data.name);
  }
  if (data.sourceServerID !== undefined && data.sourceServerID !== null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.targetInstanceTypeRightSizingMethod !== undefined && data.targetInstanceTypeRightSizingMethod !== null) {
    contents.targetInstanceTypeRightSizingMethod = __expectString(data.targetInstanceTypeRightSizingMethod);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateLaunchConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLaunchConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.drs#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReplicationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateReplicationConfigurationCommandError(output, context);
  }
  const contents: UpdateReplicationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    associateDefaultSecurityGroup: undefined,
    bandwidthThrottling: undefined,
    createPublicIP: undefined,
    dataPlaneRouting: undefined,
    defaultLargeStagingDiskType: undefined,
    ebsEncryption: undefined,
    ebsEncryptionKeyArn: undefined,
    name: undefined,
    pitPolicy: undefined,
    replicatedDisks: undefined,
    replicationServerInstanceType: undefined,
    replicationServersSecurityGroupsIDs: undefined,
    sourceServerID: undefined,
    stagingAreaSubnetId: undefined,
    stagingAreaTags: undefined,
    useDedicatedReplicationServer: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.associateDefaultSecurityGroup !== undefined && data.associateDefaultSecurityGroup !== null) {
    contents.associateDefaultSecurityGroup = __expectBoolean(data.associateDefaultSecurityGroup);
  }
  if (data.bandwidthThrottling !== undefined && data.bandwidthThrottling !== null) {
    contents.bandwidthThrottling = __expectLong(data.bandwidthThrottling);
  }
  if (data.createPublicIP !== undefined && data.createPublicIP !== null) {
    contents.createPublicIP = __expectBoolean(data.createPublicIP);
  }
  if (data.dataPlaneRouting !== undefined && data.dataPlaneRouting !== null) {
    contents.dataPlaneRouting = __expectString(data.dataPlaneRouting);
  }
  if (data.defaultLargeStagingDiskType !== undefined && data.defaultLargeStagingDiskType !== null) {
    contents.defaultLargeStagingDiskType = __expectString(data.defaultLargeStagingDiskType);
  }
  if (data.ebsEncryption !== undefined && data.ebsEncryption !== null) {
    contents.ebsEncryption = __expectString(data.ebsEncryption);
  }
  if (data.ebsEncryptionKeyArn !== undefined && data.ebsEncryptionKeyArn !== null) {
    contents.ebsEncryptionKeyArn = __expectString(data.ebsEncryptionKeyArn);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = __expectString(data.name);
  }
  if (data.pitPolicy !== undefined && data.pitPolicy !== null) {
    contents.pitPolicy = deserializeAws_restJson1PITPolicy(data.pitPolicy, context);
  }
  if (data.replicatedDisks !== undefined && data.replicatedDisks !== null) {
    contents.replicatedDisks = deserializeAws_restJson1ReplicationConfigurationReplicatedDisks(
      data.replicatedDisks,
      context
    );
  }
  if (data.replicationServerInstanceType !== undefined && data.replicationServerInstanceType !== null) {
    contents.replicationServerInstanceType = __expectString(data.replicationServerInstanceType);
  }
  if (data.replicationServersSecurityGroupsIDs !== undefined && data.replicationServersSecurityGroupsIDs !== null) {
    contents.replicationServersSecurityGroupsIDs = deserializeAws_restJson1ReplicationServersSecurityGroupsIDs(
      data.replicationServersSecurityGroupsIDs,
      context
    );
  }
  if (data.sourceServerID !== undefined && data.sourceServerID !== null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.stagingAreaSubnetId !== undefined && data.stagingAreaSubnetId !== null) {
    contents.stagingAreaSubnetId = __expectString(data.stagingAreaSubnetId);
  }
  if (data.stagingAreaTags !== undefined && data.stagingAreaTags !== null) {
    contents.stagingAreaTags = deserializeAws_restJson1TagsMap(data.stagingAreaTags, context);
  }
  if (data.useDedicatedReplicationServer !== undefined && data.useDedicatedReplicationServer !== null) {
    contents.useDedicatedReplicationServer = __expectBoolean(data.useDedicatedReplicationServer);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateReplicationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReplicationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.drs#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateReplicationConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReplicationConfigurationTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateReplicationConfigurationTemplateCommandError(output, context);
  }
  const contents: UpdateReplicationConfigurationTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    associateDefaultSecurityGroup: undefined,
    bandwidthThrottling: undefined,
    createPublicIP: undefined,
    dataPlaneRouting: undefined,
    defaultLargeStagingDiskType: undefined,
    ebsEncryption: undefined,
    ebsEncryptionKeyArn: undefined,
    pitPolicy: undefined,
    replicationConfigurationTemplateID: undefined,
    replicationServerInstanceType: undefined,
    replicationServersSecurityGroupsIDs: undefined,
    stagingAreaSubnetId: undefined,
    stagingAreaTags: undefined,
    tags: undefined,
    useDedicatedReplicationServer: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.associateDefaultSecurityGroup !== undefined && data.associateDefaultSecurityGroup !== null) {
    contents.associateDefaultSecurityGroup = __expectBoolean(data.associateDefaultSecurityGroup);
  }
  if (data.bandwidthThrottling !== undefined && data.bandwidthThrottling !== null) {
    contents.bandwidthThrottling = __expectLong(data.bandwidthThrottling);
  }
  if (data.createPublicIP !== undefined && data.createPublicIP !== null) {
    contents.createPublicIP = __expectBoolean(data.createPublicIP);
  }
  if (data.dataPlaneRouting !== undefined && data.dataPlaneRouting !== null) {
    contents.dataPlaneRouting = __expectString(data.dataPlaneRouting);
  }
  if (data.defaultLargeStagingDiskType !== undefined && data.defaultLargeStagingDiskType !== null) {
    contents.defaultLargeStagingDiskType = __expectString(data.defaultLargeStagingDiskType);
  }
  if (data.ebsEncryption !== undefined && data.ebsEncryption !== null) {
    contents.ebsEncryption = __expectString(data.ebsEncryption);
  }
  if (data.ebsEncryptionKeyArn !== undefined && data.ebsEncryptionKeyArn !== null) {
    contents.ebsEncryptionKeyArn = __expectString(data.ebsEncryptionKeyArn);
  }
  if (data.pitPolicy !== undefined && data.pitPolicy !== null) {
    contents.pitPolicy = deserializeAws_restJson1PITPolicy(data.pitPolicy, context);
  }
  if (data.replicationConfigurationTemplateID !== undefined && data.replicationConfigurationTemplateID !== null) {
    contents.replicationConfigurationTemplateID = __expectString(data.replicationConfigurationTemplateID);
  }
  if (data.replicationServerInstanceType !== undefined && data.replicationServerInstanceType !== null) {
    contents.replicationServerInstanceType = __expectString(data.replicationServerInstanceType);
  }
  if (data.replicationServersSecurityGroupsIDs !== undefined && data.replicationServersSecurityGroupsIDs !== null) {
    contents.replicationServersSecurityGroupsIDs = deserializeAws_restJson1ReplicationServersSecurityGroupsIDs(
      data.replicationServersSecurityGroupsIDs,
      context
    );
  }
  if (data.stagingAreaSubnetId !== undefined && data.stagingAreaSubnetId !== null) {
    contents.stagingAreaSubnetId = __expectString(data.stagingAreaSubnetId);
  }
  if (data.stagingAreaTags !== undefined && data.stagingAreaTags !== null) {
    contents.stagingAreaTags = deserializeAws_restJson1TagsMap(data.stagingAreaTags, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  if (data.useDedicatedReplicationServer !== undefined && data.useDedicatedReplicationServer !== null) {
    contents.useDedicatedReplicationServer = __expectBoolean(data.useDedicatedReplicationServer);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateReplicationConfigurationTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReplicationConfigurationTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = {};
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.retryAfterSeconds = __strictParseLong(parsedOutput.headers["retry-after"]);
  }
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerException({
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
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  const exception = new ResourceNotFoundException({
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
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.quotaCode !== undefined && data.quotaCode !== null) {
    contents.quotaCode = __expectString(data.quotaCode);
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  if (data.serviceCode !== undefined && data.serviceCode !== null) {
    contents.serviceCode = __expectString(data.serviceCode);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: any = {};
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.retryAfterSeconds = parsedOutput.headers["retry-after"];
  }
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.quotaCode !== undefined && data.quotaCode !== null) {
    contents.quotaCode = __expectString(data.quotaCode);
  }
  if (data.serviceCode !== undefined && data.serviceCode !== null) {
    contents.serviceCode = __expectString(data.serviceCode);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1UninitializedAccountExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UninitializedAccountException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new UninitializedAccountException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.fieldList !== undefined && data.fieldList !== null) {
    contents.fieldList = deserializeAws_restJson1ValidationExceptionFieldList(data.fieldList, context);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.reason !== undefined && data.reason !== null) {
    contents.reason = __expectString(data.reason);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1AccountIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1DescribeJobsRequestFilters = (
  input: DescribeJobsRequestFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.fromDate !== undefined && input.fromDate !== null && { fromDate: input.fromDate }),
    ...(input.jobIDs !== undefined &&
      input.jobIDs !== null && {
        jobIDs: serializeAws_restJson1DescribeJobsRequestFiltersJobIDs(input.jobIDs, context),
      }),
    ...(input.toDate !== undefined && input.toDate !== null && { toDate: input.toDate }),
  };
};

const serializeAws_restJson1DescribeJobsRequestFiltersJobIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1DescribeRecoveryInstancesRequestFilters = (
  input: DescribeRecoveryInstancesRequestFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.recoveryInstanceIDs !== undefined &&
      input.recoveryInstanceIDs !== null && {
        recoveryInstanceIDs: serializeAws_restJson1RecoveryInstanceIDs(input.recoveryInstanceIDs, context),
      }),
    ...(input.sourceServerIDs !== undefined &&
      input.sourceServerIDs !== null && {
        sourceServerIDs: serializeAws_restJson1SourceServerIDs(input.sourceServerIDs, context),
      }),
  };
};

const serializeAws_restJson1DescribeRecoverySnapshotsRequestFilters = (
  input: DescribeRecoverySnapshotsRequestFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.fromDateTime !== undefined && input.fromDateTime !== null && { fromDateTime: input.fromDateTime }),
    ...(input.toDateTime !== undefined && input.toDateTime !== null && { toDateTime: input.toDateTime }),
  };
};

const serializeAws_restJson1DescribeSourceServersRequestFilters = (
  input: DescribeSourceServersRequestFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.hardwareId !== undefined && input.hardwareId !== null && { hardwareId: input.hardwareId }),
    ...(input.sourceServerIDs !== undefined &&
      input.sourceServerIDs !== null && {
        sourceServerIDs: serializeAws_restJson1DescribeSourceServersRequestFiltersIDs(input.sourceServerIDs, context),
      }),
    ...(input.stagingAccountIDs !== undefined &&
      input.stagingAccountIDs !== null && {
        stagingAccountIDs: serializeAws_restJson1AccountIDs(input.stagingAccountIDs, context),
      }),
  };
};

const serializeAws_restJson1DescribeSourceServersRequestFiltersIDs = (
  input: string[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Licensing = (input: Licensing, context: __SerdeContext): any => {
  return {
    ...(input.osByol !== undefined && input.osByol !== null && { osByol: input.osByol }),
  };
};

const serializeAws_restJson1PITPolicy = (input: PITPolicyRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1PITPolicyRule(entry, context);
    });
};

const serializeAws_restJson1PITPolicyRule = (input: PITPolicyRule, context: __SerdeContext): any => {
  return {
    ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
    ...(input.interval !== undefined && input.interval !== null && { interval: input.interval }),
    ...(input.retentionDuration !== undefined &&
      input.retentionDuration !== null && { retentionDuration: input.retentionDuration }),
    ...(input.ruleID !== undefined && input.ruleID !== null && { ruleID: input.ruleID }),
    ...(input.units !== undefined && input.units !== null && { units: input.units }),
  };
};

const serializeAws_restJson1RecoveryInstanceIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1RecoveryInstancesForTerminationRequest = (
  input: string[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ReplicationConfigurationReplicatedDisk = (
  input: ReplicationConfigurationReplicatedDisk,
  context: __SerdeContext
): any => {
  return {
    ...(input.deviceName !== undefined && input.deviceName !== null && { deviceName: input.deviceName }),
    ...(input.iops !== undefined && input.iops !== null && { iops: input.iops }),
    ...(input.isBootDisk !== undefined && input.isBootDisk !== null && { isBootDisk: input.isBootDisk }),
    ...(input.stagingDiskType !== undefined &&
      input.stagingDiskType !== null && { stagingDiskType: input.stagingDiskType }),
    ...(input.throughput !== undefined && input.throughput !== null && { throughput: input.throughput }),
  };
};

const serializeAws_restJson1ReplicationConfigurationReplicatedDisks = (
  input: ReplicationConfigurationReplicatedDisk[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ReplicationConfigurationReplicatedDisk(entry, context);
    });
};

const serializeAws_restJson1ReplicationConfigurationTemplateIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ReplicationServersSecurityGroupsIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SourceServerIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1StartFailbackRequestRecoveryInstanceIDs = (
  input: string[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1StartRecoveryRequestSourceServer = (
  input: StartRecoveryRequestSourceServer,
  context: __SerdeContext
): any => {
  return {
    ...(input.recoverySnapshotID !== undefined &&
      input.recoverySnapshotID !== null && { recoverySnapshotID: input.recoverySnapshotID }),
    ...(input.sourceServerID !== undefined &&
      input.sourceServerID !== null && { sourceServerID: input.sourceServerID }),
  };
};

const serializeAws_restJson1StartRecoveryRequestSourceServers = (
  input: StartRecoveryRequestSourceServer[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1StartRecoveryRequestSourceServer(entry, context);
    });
};

const serializeAws_restJson1TagsMap = (input: Record<string, string>, context: __SerdeContext): any => {
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

const deserializeAws_restJson1Account = (output: any, context: __SerdeContext): Account => {
  return {
    accountID: __expectString(output.accountID),
  } as any;
};

const deserializeAws_restJson1Accounts = (output: any, context: __SerdeContext): Account[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Account(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConversionMap = (output: any, context: __SerdeContext): Record<string, string> => {
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

const deserializeAws_restJson1ConversionProperties = (output: any, context: __SerdeContext): ConversionProperties => {
  return {
    dataTimestamp: __expectString(output.dataTimestamp),
    forceUefi: __expectBoolean(output.forceUefi),
    rootVolumeName: __expectString(output.rootVolumeName),
    volumeToConversionMap:
      output.volumeToConversionMap !== undefined && output.volumeToConversionMap !== null
        ? deserializeAws_restJson1VolumeToConversionMap(output.volumeToConversionMap, context)
        : undefined,
    volumeToVolumeSize:
      output.volumeToVolumeSize !== undefined && output.volumeToVolumeSize !== null
        ? deserializeAws_restJson1VolumeToSizeMap(output.volumeToVolumeSize, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CPU = (output: any, context: __SerdeContext): CPU => {
  return {
    cores: __expectLong(output.cores),
    modelName: __expectString(output.modelName),
  } as any;
};

const deserializeAws_restJson1Cpus = (output: any, context: __SerdeContext): CPU[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CPU(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DataReplicationError = (output: any, context: __SerdeContext): DataReplicationError => {
  return {
    error: __expectString(output.error),
    rawError: __expectString(output.rawError),
  } as any;
};

const deserializeAws_restJson1DataReplicationInfo = (output: any, context: __SerdeContext): DataReplicationInfo => {
  return {
    dataReplicationError:
      output.dataReplicationError !== undefined && output.dataReplicationError !== null
        ? deserializeAws_restJson1DataReplicationError(output.dataReplicationError, context)
        : undefined,
    dataReplicationInitiation:
      output.dataReplicationInitiation !== undefined && output.dataReplicationInitiation !== null
        ? deserializeAws_restJson1DataReplicationInitiation(output.dataReplicationInitiation, context)
        : undefined,
    dataReplicationState: __expectString(output.dataReplicationState),
    etaDateTime: __expectString(output.etaDateTime),
    lagDuration: __expectString(output.lagDuration),
    replicatedDisks:
      output.replicatedDisks !== undefined && output.replicatedDisks !== null
        ? deserializeAws_restJson1DataReplicationInfoReplicatedDisks(output.replicatedDisks, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DataReplicationInfoReplicatedDisk = (
  output: any,
  context: __SerdeContext
): DataReplicationInfoReplicatedDisk => {
  return {
    backloggedStorageBytes: __expectLong(output.backloggedStorageBytes),
    deviceName: __expectString(output.deviceName),
    replicatedStorageBytes: __expectLong(output.replicatedStorageBytes),
    rescannedStorageBytes: __expectLong(output.rescannedStorageBytes),
    totalStorageBytes: __expectLong(output.totalStorageBytes),
  } as any;
};

const deserializeAws_restJson1DataReplicationInfoReplicatedDisks = (
  output: any,
  context: __SerdeContext
): DataReplicationInfoReplicatedDisk[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataReplicationInfoReplicatedDisk(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DataReplicationInitiation = (
  output: any,
  context: __SerdeContext
): DataReplicationInitiation => {
  return {
    nextAttemptDateTime: __expectString(output.nextAttemptDateTime),
    startDateTime: __expectString(output.startDateTime),
    steps:
      output.steps !== undefined && output.steps !== null
        ? deserializeAws_restJson1DataReplicationInitiationSteps(output.steps, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DataReplicationInitiationStep = (
  output: any,
  context: __SerdeContext
): DataReplicationInitiationStep => {
  return {
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1DataReplicationInitiationSteps = (
  output: any,
  context: __SerdeContext
): DataReplicationInitiationStep[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataReplicationInitiationStep(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DescribeRecoveryInstancesItems = (
  output: any,
  context: __SerdeContext
): RecoveryInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecoveryInstance(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Disk = (output: any, context: __SerdeContext): Disk => {
  return {
    bytes: __expectLong(output.bytes),
    deviceName: __expectString(output.deviceName),
  } as any;
};

const deserializeAws_restJson1Disks = (output: any, context: __SerdeContext): Disk[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Disk(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EbsSnapshotsList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1IdentificationHints = (output: any, context: __SerdeContext): IdentificationHints => {
  return {
    awsInstanceID: __expectString(output.awsInstanceID),
    fqdn: __expectString(output.fqdn),
    hostname: __expectString(output.hostname),
    vmWareUuid: __expectString(output.vmWareUuid),
  } as any;
};

const deserializeAws_restJson1IPsList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Job = (output: any, context: __SerdeContext): Job => {
  return {
    arn: __expectString(output.arn),
    creationDateTime: __expectString(output.creationDateTime),
    endDateTime: __expectString(output.endDateTime),
    initiatedBy: __expectString(output.initiatedBy),
    jobID: __expectString(output.jobID),
    participatingServers:
      output.participatingServers !== undefined && output.participatingServers !== null
        ? deserializeAws_restJson1ParticipatingServers(output.participatingServers, context)
        : undefined,
    status: __expectString(output.status),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagsMap(output.tags, context)
        : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1JobLog = (output: any, context: __SerdeContext): JobLog => {
  return {
    event: __expectString(output.event),
    eventData:
      output.eventData !== undefined && output.eventData !== null
        ? deserializeAws_restJson1JobLogEventData(output.eventData, context)
        : undefined,
    logDateTime: __expectString(output.logDateTime),
  } as any;
};

const deserializeAws_restJson1JobLogEventData = (output: any, context: __SerdeContext): JobLogEventData => {
  return {
    conversionProperties:
      output.conversionProperties !== undefined && output.conversionProperties !== null
        ? deserializeAws_restJson1ConversionProperties(output.conversionProperties, context)
        : undefined,
    conversionServerID: __expectString(output.conversionServerID),
    rawError: __expectString(output.rawError),
    sourceServerID: __expectString(output.sourceServerID),
    targetInstanceID: __expectString(output.targetInstanceID),
  } as any;
};

const deserializeAws_restJson1JobLogs = (output: any, context: __SerdeContext): JobLog[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobLog(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1JobsList = (output: any, context: __SerdeContext): Job[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Job(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Licensing = (output: any, context: __SerdeContext): Licensing => {
  return {
    osByol: __expectBoolean(output.osByol),
  } as any;
};

const deserializeAws_restJson1LifeCycle = (output: any, context: __SerdeContext): LifeCycle => {
  return {
    addedToServiceDateTime: __expectString(output.addedToServiceDateTime),
    elapsedReplicationDuration: __expectString(output.elapsedReplicationDuration),
    firstByteDateTime: __expectString(output.firstByteDateTime),
    lastLaunch:
      output.lastLaunch !== undefined && output.lastLaunch !== null
        ? deserializeAws_restJson1LifeCycleLastLaunch(output.lastLaunch, context)
        : undefined,
    lastSeenByServiceDateTime: __expectString(output.lastSeenByServiceDateTime),
  } as any;
};

const deserializeAws_restJson1LifeCycleLastLaunch = (output: any, context: __SerdeContext): LifeCycleLastLaunch => {
  return {
    initiated:
      output.initiated !== undefined && output.initiated !== null
        ? deserializeAws_restJson1LifeCycleLastLaunchInitiated(output.initiated, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LifeCycleLastLaunchInitiated = (
  output: any,
  context: __SerdeContext
): LifeCycleLastLaunchInitiated => {
  return {
    apiCallDateTime: __expectString(output.apiCallDateTime),
    jobID: __expectString(output.jobID),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  return {
    ips:
      output.ips !== undefined && output.ips !== null
        ? deserializeAws_restJson1IPsList(output.ips, context)
        : undefined,
    isPrimary: __expectBoolean(output.isPrimary),
    macAddress: __expectString(output.macAddress),
  } as any;
};

const deserializeAws_restJson1NetworkInterfaces = (output: any, context: __SerdeContext): NetworkInterface[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NetworkInterface(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1OS = (output: any, context: __SerdeContext): OS => {
  return {
    fullString: __expectString(output.fullString),
  } as any;
};

const deserializeAws_restJson1ParticipatingServer = (output: any, context: __SerdeContext): ParticipatingServer => {
  return {
    launchStatus: __expectString(output.launchStatus),
    recoveryInstanceID: __expectString(output.recoveryInstanceID),
    sourceServerID: __expectString(output.sourceServerID),
  } as any;
};

const deserializeAws_restJson1ParticipatingServers = (output: any, context: __SerdeContext): ParticipatingServer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ParticipatingServer(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PITPolicy = (output: any, context: __SerdeContext): PITPolicyRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PITPolicyRule(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PITPolicyRule = (output: any, context: __SerdeContext): PITPolicyRule => {
  return {
    enabled: __expectBoolean(output.enabled),
    interval: __expectInt32(output.interval),
    retentionDuration: __expectInt32(output.retentionDuration),
    ruleID: __expectLong(output.ruleID),
    units: __expectString(output.units),
  } as any;
};

const deserializeAws_restJson1RecoveryInstance = (output: any, context: __SerdeContext): RecoveryInstance => {
  return {
    arn: __expectString(output.arn),
    dataReplicationInfo:
      output.dataReplicationInfo !== undefined && output.dataReplicationInfo !== null
        ? deserializeAws_restJson1RecoveryInstanceDataReplicationInfo(output.dataReplicationInfo, context)
        : undefined,
    ec2InstanceID: __expectString(output.ec2InstanceID),
    ec2InstanceState: __expectString(output.ec2InstanceState),
    failback:
      output.failback !== undefined && output.failback !== null
        ? deserializeAws_restJson1RecoveryInstanceFailback(output.failback, context)
        : undefined,
    isDrill: __expectBoolean(output.isDrill),
    jobID: __expectString(output.jobID),
    pointInTimeSnapshotDateTime: __expectString(output.pointInTimeSnapshotDateTime),
    recoveryInstanceID: __expectString(output.recoveryInstanceID),
    recoveryInstanceProperties:
      output.recoveryInstanceProperties !== undefined && output.recoveryInstanceProperties !== null
        ? deserializeAws_restJson1RecoveryInstanceProperties(output.recoveryInstanceProperties, context)
        : undefined,
    sourceServerID: __expectString(output.sourceServerID),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagsMap(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RecoveryInstanceDataReplicationError = (
  output: any,
  context: __SerdeContext
): RecoveryInstanceDataReplicationError => {
  return {
    error: __expectString(output.error),
    rawError: __expectString(output.rawError),
  } as any;
};

const deserializeAws_restJson1RecoveryInstanceDataReplicationInfo = (
  output: any,
  context: __SerdeContext
): RecoveryInstanceDataReplicationInfo => {
  return {
    dataReplicationError:
      output.dataReplicationError !== undefined && output.dataReplicationError !== null
        ? deserializeAws_restJson1RecoveryInstanceDataReplicationError(output.dataReplicationError, context)
        : undefined,
    dataReplicationInitiation:
      output.dataReplicationInitiation !== undefined && output.dataReplicationInitiation !== null
        ? deserializeAws_restJson1RecoveryInstanceDataReplicationInitiation(output.dataReplicationInitiation, context)
        : undefined,
    dataReplicationState: __expectString(output.dataReplicationState),
    etaDateTime: __expectString(output.etaDateTime),
    lagDuration: __expectString(output.lagDuration),
    replicatedDisks:
      output.replicatedDisks !== undefined && output.replicatedDisks !== null
        ? deserializeAws_restJson1RecoveryInstanceDataReplicationInfoReplicatedDisks(output.replicatedDisks, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RecoveryInstanceDataReplicationInfoReplicatedDisk = (
  output: any,
  context: __SerdeContext
): RecoveryInstanceDataReplicationInfoReplicatedDisk => {
  return {
    backloggedStorageBytes: __expectLong(output.backloggedStorageBytes),
    deviceName: __expectString(output.deviceName),
    replicatedStorageBytes: __expectLong(output.replicatedStorageBytes),
    rescannedStorageBytes: __expectLong(output.rescannedStorageBytes),
    totalStorageBytes: __expectLong(output.totalStorageBytes),
  } as any;
};

const deserializeAws_restJson1RecoveryInstanceDataReplicationInfoReplicatedDisks = (
  output: any,
  context: __SerdeContext
): RecoveryInstanceDataReplicationInfoReplicatedDisk[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecoveryInstanceDataReplicationInfoReplicatedDisk(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RecoveryInstanceDataReplicationInitiation = (
  output: any,
  context: __SerdeContext
): RecoveryInstanceDataReplicationInitiation => {
  return {
    startDateTime: __expectString(output.startDateTime),
    steps:
      output.steps !== undefined && output.steps !== null
        ? deserializeAws_restJson1RecoveryInstanceDataReplicationInitiationSteps(output.steps, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RecoveryInstanceDataReplicationInitiationStep = (
  output: any,
  context: __SerdeContext
): RecoveryInstanceDataReplicationInitiationStep => {
  return {
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1RecoveryInstanceDataReplicationInitiationSteps = (
  output: any,
  context: __SerdeContext
): RecoveryInstanceDataReplicationInitiationStep[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecoveryInstanceDataReplicationInitiationStep(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RecoveryInstanceDisk = (output: any, context: __SerdeContext): RecoveryInstanceDisk => {
  return {
    bytes: __expectLong(output.bytes),
    ebsVolumeID: __expectString(output.ebsVolumeID),
    internalDeviceName: __expectString(output.internalDeviceName),
  } as any;
};

const deserializeAws_restJson1RecoveryInstanceDisks = (
  output: any,
  context: __SerdeContext
): RecoveryInstanceDisk[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecoveryInstanceDisk(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RecoveryInstanceFailback = (
  output: any,
  context: __SerdeContext
): RecoveryInstanceFailback => {
  return {
    agentLastSeenByServiceDateTime: __expectString(output.agentLastSeenByServiceDateTime),
    elapsedReplicationDuration: __expectString(output.elapsedReplicationDuration),
    failbackClientID: __expectString(output.failbackClientID),
    failbackClientLastSeenByServiceDateTime: __expectString(output.failbackClientLastSeenByServiceDateTime),
    failbackInitiationTime: __expectString(output.failbackInitiationTime),
    failbackJobID: __expectString(output.failbackJobID),
    failbackToOriginalServer: __expectBoolean(output.failbackToOriginalServer),
    firstByteDateTime: __expectString(output.firstByteDateTime),
    state: __expectString(output.state),
  } as any;
};

const deserializeAws_restJson1RecoveryInstanceProperties = (
  output: any,
  context: __SerdeContext
): RecoveryInstanceProperties => {
  return {
    cpus:
      output.cpus !== undefined && output.cpus !== null
        ? deserializeAws_restJson1Cpus(output.cpus, context)
        : undefined,
    disks:
      output.disks !== undefined && output.disks !== null
        ? deserializeAws_restJson1RecoveryInstanceDisks(output.disks, context)
        : undefined,
    identificationHints:
      output.identificationHints !== undefined && output.identificationHints !== null
        ? deserializeAws_restJson1IdentificationHints(output.identificationHints, context)
        : undefined,
    lastUpdatedDateTime: __expectString(output.lastUpdatedDateTime),
    networkInterfaces:
      output.networkInterfaces !== undefined && output.networkInterfaces !== null
        ? deserializeAws_restJson1NetworkInterfaces(output.networkInterfaces, context)
        : undefined,
    os: output.os !== undefined && output.os !== null ? deserializeAws_restJson1OS(output.os, context) : undefined,
    ramBytes: __expectLong(output.ramBytes),
  } as any;
};

const deserializeAws_restJson1RecoverySnapshot = (output: any, context: __SerdeContext): RecoverySnapshot => {
  return {
    ebsSnapshots:
      output.ebsSnapshots !== undefined && output.ebsSnapshots !== null
        ? deserializeAws_restJson1EbsSnapshotsList(output.ebsSnapshots, context)
        : undefined,
    expectedTimestamp: __expectString(output.expectedTimestamp),
    snapshotID: __expectString(output.snapshotID),
    sourceServerID: __expectString(output.sourceServerID),
    timestamp: __expectString(output.timestamp),
  } as any;
};

const deserializeAws_restJson1RecoverySnapshotsList = (output: any, context: __SerdeContext): RecoverySnapshot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecoverySnapshot(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ReplicationConfigurationReplicatedDisk = (
  output: any,
  context: __SerdeContext
): ReplicationConfigurationReplicatedDisk => {
  return {
    deviceName: __expectString(output.deviceName),
    iops: __expectLong(output.iops),
    isBootDisk: __expectBoolean(output.isBootDisk),
    stagingDiskType: __expectString(output.stagingDiskType),
    throughput: __expectLong(output.throughput),
  } as any;
};

const deserializeAws_restJson1ReplicationConfigurationReplicatedDisks = (
  output: any,
  context: __SerdeContext
): ReplicationConfigurationReplicatedDisk[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ReplicationConfigurationReplicatedDisk(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ReplicationConfigurationTemplate = (
  output: any,
  context: __SerdeContext
): ReplicationConfigurationTemplate => {
  return {
    arn: __expectString(output.arn),
    associateDefaultSecurityGroup: __expectBoolean(output.associateDefaultSecurityGroup),
    bandwidthThrottling: __expectLong(output.bandwidthThrottling),
    createPublicIP: __expectBoolean(output.createPublicIP),
    dataPlaneRouting: __expectString(output.dataPlaneRouting),
    defaultLargeStagingDiskType: __expectString(output.defaultLargeStagingDiskType),
    ebsEncryption: __expectString(output.ebsEncryption),
    ebsEncryptionKeyArn: __expectString(output.ebsEncryptionKeyArn),
    pitPolicy:
      output.pitPolicy !== undefined && output.pitPolicy !== null
        ? deserializeAws_restJson1PITPolicy(output.pitPolicy, context)
        : undefined,
    replicationConfigurationTemplateID: __expectString(output.replicationConfigurationTemplateID),
    replicationServerInstanceType: __expectString(output.replicationServerInstanceType),
    replicationServersSecurityGroupsIDs:
      output.replicationServersSecurityGroupsIDs !== undefined && output.replicationServersSecurityGroupsIDs !== null
        ? deserializeAws_restJson1ReplicationServersSecurityGroupsIDs(
            output.replicationServersSecurityGroupsIDs,
            context
          )
        : undefined,
    stagingAreaSubnetId: __expectString(output.stagingAreaSubnetId),
    stagingAreaTags:
      output.stagingAreaTags !== undefined && output.stagingAreaTags !== null
        ? deserializeAws_restJson1TagsMap(output.stagingAreaTags, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagsMap(output.tags, context)
        : undefined,
    useDedicatedReplicationServer: __expectBoolean(output.useDedicatedReplicationServer),
  } as any;
};

const deserializeAws_restJson1ReplicationConfigurationTemplates = (
  output: any,
  context: __SerdeContext
): ReplicationConfigurationTemplate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ReplicationConfigurationTemplate(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ReplicationServersSecurityGroupsIDs = (
  output: any,
  context: __SerdeContext
): string[] => {
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

const deserializeAws_restJson1SourceProperties = (output: any, context: __SerdeContext): SourceProperties => {
  return {
    cpus:
      output.cpus !== undefined && output.cpus !== null
        ? deserializeAws_restJson1Cpus(output.cpus, context)
        : undefined,
    disks:
      output.disks !== undefined && output.disks !== null
        ? deserializeAws_restJson1Disks(output.disks, context)
        : undefined,
    identificationHints:
      output.identificationHints !== undefined && output.identificationHints !== null
        ? deserializeAws_restJson1IdentificationHints(output.identificationHints, context)
        : undefined,
    lastUpdatedDateTime: __expectString(output.lastUpdatedDateTime),
    networkInterfaces:
      output.networkInterfaces !== undefined && output.networkInterfaces !== null
        ? deserializeAws_restJson1NetworkInterfaces(output.networkInterfaces, context)
        : undefined,
    os: output.os !== undefined && output.os !== null ? deserializeAws_restJson1OS(output.os, context) : undefined,
    ramBytes: __expectLong(output.ramBytes),
    recommendedInstanceType: __expectString(output.recommendedInstanceType),
  } as any;
};

const deserializeAws_restJson1SourceServer = (output: any, context: __SerdeContext): SourceServer => {
  return {
    arn: __expectString(output.arn),
    dataReplicationInfo:
      output.dataReplicationInfo !== undefined && output.dataReplicationInfo !== null
        ? deserializeAws_restJson1DataReplicationInfo(output.dataReplicationInfo, context)
        : undefined,
    lastLaunchResult: __expectString(output.lastLaunchResult),
    lifeCycle:
      output.lifeCycle !== undefined && output.lifeCycle !== null
        ? deserializeAws_restJson1LifeCycle(output.lifeCycle, context)
        : undefined,
    recoveryInstanceId: __expectString(output.recoveryInstanceId),
    sourceProperties:
      output.sourceProperties !== undefined && output.sourceProperties !== null
        ? deserializeAws_restJson1SourceProperties(output.sourceProperties, context)
        : undefined,
    sourceServerID: __expectString(output.sourceServerID),
    stagingArea:
      output.stagingArea !== undefined && output.stagingArea !== null
        ? deserializeAws_restJson1StagingArea(output.stagingArea, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagsMap(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SourceServersList = (output: any, context: __SerdeContext): SourceServer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SourceServer(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StagingArea = (output: any, context: __SerdeContext): StagingArea => {
  return {
    errorMessage: __expectString(output.errorMessage),
    stagingAccountID: __expectString(output.stagingAccountID),
    stagingSourceServerArn: __expectString(output.stagingSourceServerArn),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1StagingSourceServer = (output: any, context: __SerdeContext): StagingSourceServer => {
  return {
    arn: __expectString(output.arn),
    hostname: __expectString(output.hostname),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagsMap(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1StagingSourceServersList = (
  output: any,
  context: __SerdeContext
): StagingSourceServer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StagingSourceServer(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TagsMap = (output: any, context: __SerdeContext): Record<string, string> => {
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

const deserializeAws_restJson1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ValidationExceptionFieldList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VolumeToConversionMap = (
  output: any,
  context: __SerdeContext
): Record<string, Record<string, string>> => {
  return Object.entries(output).reduce((acc: Record<string, Record<string, string>>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1ConversionMap(value, context),
    };
  }, {});
};

const deserializeAws_restJson1VolumeToSizeMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectLong(value) as any,
    };
  }, {});
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
