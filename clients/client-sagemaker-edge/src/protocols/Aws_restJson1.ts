// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  serializeFloat as __serializeFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  GetDeviceRegistrationCommandInput,
  GetDeviceRegistrationCommandOutput,
} from "../commands/GetDeviceRegistrationCommand";
import { SendHeartbeatCommandInput, SendHeartbeatCommandOutput } from "../commands/SendHeartbeatCommand";
import { EdgeMetric, InternalServiceException, Model } from "../models/models_0";
import { SagemakerEdgeServiceException as __BaseException } from "../models/SagemakerEdgeServiceException";

export const serializeAws_restJson1GetDeviceRegistrationCommand = async (
  input: GetDeviceRegistrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetDeviceRegistration";
  let body: any;
  body = JSON.stringify({
    ...(input.DeviceFleetName !== undefined &&
      input.DeviceFleetName !== null && { DeviceFleetName: input.DeviceFleetName }),
    ...(input.DeviceName !== undefined && input.DeviceName !== null && { DeviceName: input.DeviceName }),
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

export const serializeAws_restJson1SendHeartbeatCommand = async (
  input: SendHeartbeatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/SendHeartbeat";
  let body: any;
  body = JSON.stringify({
    ...(input.AgentMetrics !== undefined &&
      input.AgentMetrics !== null && { AgentMetrics: serializeAws_restJson1EdgeMetrics(input.AgentMetrics, context) }),
    ...(input.AgentVersion !== undefined && input.AgentVersion !== null && { AgentVersion: input.AgentVersion }),
    ...(input.DeviceFleetName !== undefined &&
      input.DeviceFleetName !== null && { DeviceFleetName: input.DeviceFleetName }),
    ...(input.DeviceName !== undefined && input.DeviceName !== null && { DeviceName: input.DeviceName }),
    ...(input.Models !== undefined &&
      input.Models !== null && { Models: serializeAws_restJson1Models(input.Models, context) }),
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

export const deserializeAws_restJson1GetDeviceRegistrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceRegistrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDeviceRegistrationCommandError(output, context);
  }
  const contents: GetDeviceRegistrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    CacheTTL: undefined,
    DeviceRegistration: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CacheTTL !== undefined && data.CacheTTL !== null) {
    contents.CacheTTL = __expectString(data.CacheTTL);
  }
  if (data.DeviceRegistration !== undefined && data.DeviceRegistration !== null) {
    contents.DeviceRegistration = __expectString(data.DeviceRegistration);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDeviceRegistrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceRegistrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.sagemakeredge#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1SendHeartbeatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendHeartbeatCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SendHeartbeatCommandError(output, context);
  }
  const contents: SendHeartbeatCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SendHeartbeatCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendHeartbeatCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.sagemakeredge#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
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

const deserializeAws_restJson1InternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1EdgeMetric = (input: EdgeMetric, context: __SerdeContext): any => {
  return {
    ...(input.Dimension !== undefined && input.Dimension !== null && { Dimension: input.Dimension }),
    ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
    ...(input.Timestamp !== undefined &&
      input.Timestamp !== null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
    ...(input.Value !== undefined && input.Value !== null && { Value: __serializeFloat(input.Value) }),
  };
};

const serializeAws_restJson1EdgeMetrics = (input: EdgeMetric[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1EdgeMetric(entry, context);
    });
};

const serializeAws_restJson1Model = (input: Model, context: __SerdeContext): any => {
  return {
    ...(input.LatestInference !== undefined &&
      input.LatestInference !== null && { LatestInference: Math.round(input.LatestInference.getTime() / 1000) }),
    ...(input.LatestSampleTime !== undefined &&
      input.LatestSampleTime !== null && { LatestSampleTime: Math.round(input.LatestSampleTime.getTime() / 1000) }),
    ...(input.ModelMetrics !== undefined &&
      input.ModelMetrics !== null && { ModelMetrics: serializeAws_restJson1EdgeMetrics(input.ModelMetrics, context) }),
    ...(input.ModelName !== undefined && input.ModelName !== null && { ModelName: input.ModelName }),
    ...(input.ModelVersion !== undefined && input.ModelVersion !== null && { ModelVersion: input.ModelVersion }),
  };
};

const serializeAws_restJson1Models = (input: Model[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Model(entry, context);
    });
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
