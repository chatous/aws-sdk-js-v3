// smithy-typescript generated code
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  LazyJsonString as __LazyJsonString,
  limitedParseDouble as __limitedParseDouble,
  serializeFloat as __serializeFloat,
  strictParseInt32 as __strictParseInt32,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateAppMonitorCommandInput, CreateAppMonitorCommandOutput } from "../commands/CreateAppMonitorCommand";
import { DeleteAppMonitorCommandInput, DeleteAppMonitorCommandOutput } from "../commands/DeleteAppMonitorCommand";
import { GetAppMonitorCommandInput, GetAppMonitorCommandOutput } from "../commands/GetAppMonitorCommand";
import { GetAppMonitorDataCommandInput, GetAppMonitorDataCommandOutput } from "../commands/GetAppMonitorDataCommand";
import { ListAppMonitorsCommandInput, ListAppMonitorsCommandOutput } from "../commands/ListAppMonitorsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutRumEventsCommandInput, PutRumEventsCommandOutput } from "../commands/PutRumEventsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAppMonitorCommandInput, UpdateAppMonitorCommandOutput } from "../commands/UpdateAppMonitorCommand";
import {
  AccessDeniedException,
  AppMonitor,
  AppMonitorConfiguration,
  AppMonitorDetails,
  AppMonitorSummary,
  ConflictException,
  CwLog,
  DataStorage,
  InternalServerException,
  QueryFilter,
  ResourceNotFoundException,
  RumEvent,
  ServiceQuotaExceededException,
  Telemetry,
  ThrottlingException,
  TimeRange,
  UserDetails,
  ValidationException,
} from "../models/models_0";
import { RUMServiceException as __BaseException } from "../models/RUMServiceException";

export const serializeAws_restJson1CreateAppMonitorCommand = async (
  input: CreateAppMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/appmonitor";
  let body: any;
  body = JSON.stringify({
    ...(input.AppMonitorConfiguration !== undefined &&
      input.AppMonitorConfiguration !== null && {
        AppMonitorConfiguration: serializeAws_restJson1AppMonitorConfiguration(input.AppMonitorConfiguration, context),
      }),
    ...(input.CwLogEnabled !== undefined && input.CwLogEnabled !== null && { CwLogEnabled: input.CwLogEnabled }),
    ...(input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1DeleteAppMonitorCommand = async (
  input: DeleteAppMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/appmonitor/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetAppMonitorCommand = async (
  input: GetAppMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/appmonitor/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
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

export const serializeAws_restJson1GetAppMonitorDataCommand = async (
  input: GetAppMonitorDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/appmonitor/{Name}/data";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_restJson1QueryFilters(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.TimeRange !== undefined &&
      input.TimeRange !== null && { TimeRange: serializeAws_restJson1TimeRange(input.TimeRange, context) }),
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

export const serializeAws_restJson1ListAppMonitorsCommand = async (
  input: ListAppMonitorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/appmonitors";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
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

export const serializeAws_restJson1PutRumEventsCommand = async (
  input: PutRumEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/appmonitors/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AppMonitorDetails !== undefined &&
      input.AppMonitorDetails !== null && {
        AppMonitorDetails: serializeAws_restJson1AppMonitorDetails(input.AppMonitorDetails, context),
      }),
    ...(input.BatchId !== undefined && input.BatchId !== null && { BatchId: input.BatchId }),
    ...(input.RumEvents !== undefined &&
      input.RumEvents !== null && { RumEvents: serializeAws_restJson1RumEventList(input.RumEvents, context) }),
    ...(input.UserDetails !== undefined &&
      input.UserDetails !== null && { UserDetails: serializeAws_restJson1UserDetails(input.UserDetails, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "dataplane." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry as any) }),
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

export const serializeAws_restJson1UpdateAppMonitorCommand = async (
  input: UpdateAppMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/appmonitor/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AppMonitorConfiguration !== undefined &&
      input.AppMonitorConfiguration !== null && {
        AppMonitorConfiguration: serializeAws_restJson1AppMonitorConfiguration(input.AppMonitorConfiguration, context),
      }),
    ...(input.CwLogEnabled !== undefined && input.CwLogEnabled !== null && { CwLogEnabled: input.CwLogEnabled }),
    ...(input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1CreateAppMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppMonitorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAppMonitorCommandError(output, context);
  }
  const contents: CreateAppMonitorCommandOutput = {
    $metadata: deserializeMetadata(output),
    Id: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAppMonitorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppMonitorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rum#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.rum#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.rum#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rum#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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

export const deserializeAws_restJson1DeleteAppMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppMonitorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAppMonitorCommandError(output, context);
  }
  const contents: DeleteAppMonitorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAppMonitorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppMonitorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rum#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.rum#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rum#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rum#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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

export const deserializeAws_restJson1GetAppMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppMonitorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAppMonitorCommandError(output, context);
  }
  const contents: GetAppMonitorCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppMonitor: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppMonitor !== undefined && data.AppMonitor !== null) {
    contents.AppMonitor = deserializeAws_restJson1AppMonitor(data.AppMonitor, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAppMonitorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppMonitorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rum#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rum#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rum#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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

export const deserializeAws_restJson1GetAppMonitorDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppMonitorDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAppMonitorDataCommandError(output, context);
  }
  const contents: GetAppMonitorDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    Events: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Events !== undefined && data.Events !== null) {
    contents.Events = deserializeAws_restJson1EventDataList(data.Events, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAppMonitorDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppMonitorDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rum#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rum#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rum#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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

export const deserializeAws_restJson1ListAppMonitorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppMonitorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAppMonitorsCommandError(output, context);
  }
  const contents: ListAppMonitorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppMonitorSummaries: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppMonitorSummaries !== undefined && data.AppMonitorSummaries !== null) {
    contents.AppMonitorSummaries = deserializeAws_restJson1AppMonitorSummaryList(data.AppMonitorSummaries, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAppMonitorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppMonitorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rum#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rum#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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
    ResourceArn: undefined,
    Tags: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
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
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rum#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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

export const deserializeAws_restJson1PutRumEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRumEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutRumEventsCommandError(output, context);
  }
  const contents: PutRumEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutRumEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRumEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rum#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rum#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rum#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rum#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rum#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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

export const deserializeAws_restJson1UpdateAppMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppMonitorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAppMonitorCommandError(output, context);
  }
  const contents: UpdateAppMonitorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAppMonitorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppMonitorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rum#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.rum#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rum#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rum#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceName !== undefined && data.resourceName !== null) {
    contents.resourceName = __expectString(data.resourceName);
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
    contents.retryAfterSeconds = __strictParseInt32(parsedOutput.headers["retry-after"]);
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
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceName !== undefined && data.resourceName !== null) {
    contents.resourceName = __expectString(data.resourceName);
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
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
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
    contents.retryAfterSeconds = __strictParseInt32(parsedOutput.headers["retry-after"]);
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1AppMonitorConfiguration = (
  input: AppMonitorConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowCookies !== undefined && input.AllowCookies !== null && { AllowCookies: input.AllowCookies }),
    ...(input.EnableXRay !== undefined && input.EnableXRay !== null && { EnableXRay: input.EnableXRay }),
    ...(input.ExcludedPages !== undefined &&
      input.ExcludedPages !== null && { ExcludedPages: serializeAws_restJson1Pages(input.ExcludedPages, context) }),
    ...(input.FavoritePages !== undefined &&
      input.FavoritePages !== null && {
        FavoritePages: serializeAws_restJson1FavoritePages(input.FavoritePages, context),
      }),
    ...(input.GuestRoleArn !== undefined && input.GuestRoleArn !== null && { GuestRoleArn: input.GuestRoleArn }),
    ...(input.IdentityPoolId !== undefined &&
      input.IdentityPoolId !== null && { IdentityPoolId: input.IdentityPoolId }),
    ...(input.IncludedPages !== undefined &&
      input.IncludedPages !== null && { IncludedPages: serializeAws_restJson1Pages(input.IncludedPages, context) }),
    ...(input.SessionSampleRate !== undefined &&
      input.SessionSampleRate !== null && { SessionSampleRate: __serializeFloat(input.SessionSampleRate) }),
    ...(input.Telemetries !== undefined &&
      input.Telemetries !== null && { Telemetries: serializeAws_restJson1Telemetries(input.Telemetries, context) }),
  };
};

const serializeAws_restJson1AppMonitorDetails = (input: AppMonitorDetails, context: __SerdeContext): any => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.version !== undefined && input.version !== null && { version: input.version }),
  };
};

const serializeAws_restJson1FavoritePages = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Pages = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1QueryFilter = (input: QueryFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_restJson1QueryFilterValueList(input.Values, context) }),
  };
};

const serializeAws_restJson1QueryFilters = (input: QueryFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1QueryFilter(entry, context);
    });
};

const serializeAws_restJson1QueryFilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1RumEvent = (input: RumEvent, context: __SerdeContext): any => {
  return {
    ...(input.details !== undefined &&
      input.details !== null && { details: __LazyJsonString.fromObject(input.details) }),
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
    ...(input.metadata !== undefined &&
      input.metadata !== null && { metadata: __LazyJsonString.fromObject(input.metadata) }),
    ...(input.timestamp !== undefined &&
      input.timestamp !== null && { timestamp: Math.round(input.timestamp.getTime() / 1000) }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_restJson1RumEventList = (input: RumEvent[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1RumEvent(entry, context);
    });
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

const serializeAws_restJson1Telemetries = (input: (Telemetry | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1TimeRange = (input: TimeRange, context: __SerdeContext): any => {
  return {
    ...(input.After !== undefined && input.After !== null && { After: input.After }),
    ...(input.Before !== undefined && input.Before !== null && { Before: input.Before }),
  };
};

const serializeAws_restJson1UserDetails = (input: UserDetails, context: __SerdeContext): any => {
  return {
    ...(input.sessionId !== undefined && input.sessionId !== null && { sessionId: input.sessionId }),
    ...(input.userId !== undefined && input.userId !== null && { userId: input.userId }),
  };
};

const deserializeAws_restJson1AppMonitor = (output: any, context: __SerdeContext): AppMonitor => {
  return {
    AppMonitorConfiguration:
      output.AppMonitorConfiguration !== undefined && output.AppMonitorConfiguration !== null
        ? deserializeAws_restJson1AppMonitorConfiguration(output.AppMonitorConfiguration, context)
        : undefined,
    Created: __expectString(output.Created),
    DataStorage:
      output.DataStorage !== undefined && output.DataStorage !== null
        ? deserializeAws_restJson1DataStorage(output.DataStorage, context)
        : undefined,
    Domain: __expectString(output.Domain),
    Id: __expectString(output.Id),
    LastModified: __expectString(output.LastModified),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AppMonitorConfiguration = (
  output: any,
  context: __SerdeContext
): AppMonitorConfiguration => {
  return {
    AllowCookies: __expectBoolean(output.AllowCookies),
    EnableXRay: __expectBoolean(output.EnableXRay),
    ExcludedPages:
      output.ExcludedPages !== undefined && output.ExcludedPages !== null
        ? deserializeAws_restJson1Pages(output.ExcludedPages, context)
        : undefined,
    FavoritePages:
      output.FavoritePages !== undefined && output.FavoritePages !== null
        ? deserializeAws_restJson1FavoritePages(output.FavoritePages, context)
        : undefined,
    GuestRoleArn: __expectString(output.GuestRoleArn),
    IdentityPoolId: __expectString(output.IdentityPoolId),
    IncludedPages:
      output.IncludedPages !== undefined && output.IncludedPages !== null
        ? deserializeAws_restJson1Pages(output.IncludedPages, context)
        : undefined,
    SessionSampleRate: __limitedParseDouble(output.SessionSampleRate),
    Telemetries:
      output.Telemetries !== undefined && output.Telemetries !== null
        ? deserializeAws_restJson1Telemetries(output.Telemetries, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AppMonitorSummary = (output: any, context: __SerdeContext): AppMonitorSummary => {
  return {
    Created: __expectString(output.Created),
    Id: __expectString(output.Id),
    LastModified: __expectString(output.LastModified),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1AppMonitorSummaryList = (output: any, context: __SerdeContext): AppMonitorSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AppMonitorSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CwLog = (output: any, context: __SerdeContext): CwLog => {
  return {
    CwLogEnabled: __expectBoolean(output.CwLogEnabled),
    CwLogGroup: __expectString(output.CwLogGroup),
  } as any;
};

const deserializeAws_restJson1DataStorage = (output: any, context: __SerdeContext): DataStorage => {
  return {
    CwLog:
      output.CwLog !== undefined && output.CwLog !== null
        ? deserializeAws_restJson1CwLog(output.CwLog, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EventDataList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1FavoritePages = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Pages = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Telemetries = (output: any, context: __SerdeContext): (Telemetry | string)[] => {
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
