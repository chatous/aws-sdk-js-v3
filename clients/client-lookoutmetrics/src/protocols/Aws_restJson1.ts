// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  ActivateAnomalyDetectorCommandInput,
  ActivateAnomalyDetectorCommandOutput,
} from "../commands/ActivateAnomalyDetectorCommand";
import {
  BackTestAnomalyDetectorCommandInput,
  BackTestAnomalyDetectorCommandOutput,
} from "../commands/BackTestAnomalyDetectorCommand";
import { CreateAlertCommandInput, CreateAlertCommandOutput } from "../commands/CreateAlertCommand";
import {
  CreateAnomalyDetectorCommandInput,
  CreateAnomalyDetectorCommandOutput,
} from "../commands/CreateAnomalyDetectorCommand";
import { CreateMetricSetCommandInput, CreateMetricSetCommandOutput } from "../commands/CreateMetricSetCommand";
import {
  DeactivateAnomalyDetectorCommandInput,
  DeactivateAnomalyDetectorCommandOutput,
} from "../commands/DeactivateAnomalyDetectorCommand";
import { DeleteAlertCommandInput, DeleteAlertCommandOutput } from "../commands/DeleteAlertCommand";
import {
  DeleteAnomalyDetectorCommandInput,
  DeleteAnomalyDetectorCommandOutput,
} from "../commands/DeleteAnomalyDetectorCommand";
import { DescribeAlertCommandInput, DescribeAlertCommandOutput } from "../commands/DescribeAlertCommand";
import {
  DescribeAnomalyDetectionExecutionsCommandInput,
  DescribeAnomalyDetectionExecutionsCommandOutput,
} from "../commands/DescribeAnomalyDetectionExecutionsCommand";
import {
  DescribeAnomalyDetectorCommandInput,
  DescribeAnomalyDetectorCommandOutput,
} from "../commands/DescribeAnomalyDetectorCommand";
import { DescribeMetricSetCommandInput, DescribeMetricSetCommandOutput } from "../commands/DescribeMetricSetCommand";
import {
  DetectMetricSetConfigCommandInput,
  DetectMetricSetConfigCommandOutput,
} from "../commands/DetectMetricSetConfigCommand";
import { GetAnomalyGroupCommandInput, GetAnomalyGroupCommandOutput } from "../commands/GetAnomalyGroupCommand";
import { GetFeedbackCommandInput, GetFeedbackCommandOutput } from "../commands/GetFeedbackCommand";
import { GetSampleDataCommandInput, GetSampleDataCommandOutput } from "../commands/GetSampleDataCommand";
import { ListAlertsCommandInput, ListAlertsCommandOutput } from "../commands/ListAlertsCommand";
import {
  ListAnomalyDetectorsCommandInput,
  ListAnomalyDetectorsCommandOutput,
} from "../commands/ListAnomalyDetectorsCommand";
import {
  ListAnomalyGroupRelatedMetricsCommandInput,
  ListAnomalyGroupRelatedMetricsCommandOutput,
} from "../commands/ListAnomalyGroupRelatedMetricsCommand";
import {
  ListAnomalyGroupSummariesCommandInput,
  ListAnomalyGroupSummariesCommandOutput,
} from "../commands/ListAnomalyGroupSummariesCommand";
import {
  ListAnomalyGroupTimeSeriesCommandInput,
  ListAnomalyGroupTimeSeriesCommandOutput,
} from "../commands/ListAnomalyGroupTimeSeriesCommand";
import { ListMetricSetsCommandInput, ListMetricSetsCommandOutput } from "../commands/ListMetricSetsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutFeedbackCommandInput, PutFeedbackCommandOutput } from "../commands/PutFeedbackCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAlertCommandInput, UpdateAlertCommandOutput } from "../commands/UpdateAlertCommand";
import {
  UpdateAnomalyDetectorCommandInput,
  UpdateAnomalyDetectorCommandOutput,
} from "../commands/UpdateAnomalyDetectorCommand";
import { UpdateMetricSetCommandInput, UpdateMetricSetCommandOutput } from "../commands/UpdateMetricSetCommand";
import { LookoutMetricsServiceException as __BaseException } from "../models/LookoutMetricsServiceException";
import {
  AccessDeniedException,
  Action,
  Alert,
  AlertFilters,
  AlertSummary,
  AnomalyDetectorConfig,
  AnomalyDetectorConfigSummary,
  AnomalyDetectorSummary,
  AnomalyGroup,
  AnomalyGroupStatistics,
  AnomalyGroupSummary,
  AnomalyGroupTimeSeries,
  AnomalyGroupTimeSeriesFeedback,
  AppFlowConfig,
  AthenaSourceConfig,
  AttributeValue,
  AutoDetectionMetricSource,
  AutoDetectionS3SourceConfig,
  BackTestConfiguration,
  CloudWatchConfig,
  ConflictException,
  ContributionMatrix,
  CsvFormatDescriptor,
  DetectedCsvFormatDescriptor,
  DetectedField,
  DetectedFileFormatDescriptor,
  DetectedJsonFormatDescriptor,
  DetectedMetricSetConfig,
  DetectedMetricSource,
  DetectedS3SourceConfig,
  DimensionContribution,
  DimensionFilter,
  DimensionNameValue,
  DimensionValueContribution,
  ExecutionStatus,
  FileFormatDescriptor,
  InterMetricImpactDetails,
  InternalServerException,
  ItemizedMetricStats,
  JsonFormatDescriptor,
  LambdaConfiguration,
  Metric,
  MetricLevelImpact,
  MetricSetSummary,
  MetricSource,
  RDSSourceConfig,
  RedshiftSourceConfig,
  ResourceNotFoundException,
  S3SourceConfig,
  SampleDataS3SourceConfig,
  ServiceQuotaExceededException,
  SNSConfiguration,
  TimeSeries,
  TimeSeriesFeedback,
  TimestampColumn,
  TooManyRequestsException,
  ValidationException,
  ValidationExceptionField,
  VpcConfiguration,
} from "../models/models_0";

export const serializeAws_restJson1ActivateAnomalyDetectorCommand = async (
  input: ActivateAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ActivateAnomalyDetector";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn !== undefined &&
      input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
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

export const serializeAws_restJson1BackTestAnomalyDetectorCommand = async (
  input: BackTestAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/BackTestAnomalyDetector";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn !== undefined &&
      input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
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

export const serializeAws_restJson1CreateAlertCommand = async (
  input: CreateAlertCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateAlert";
  let body: any;
  body = JSON.stringify({
    ...(input.Action !== undefined &&
      input.Action !== null && { Action: serializeAws_restJson1Action(input.Action, context) }),
    ...(input.AlertDescription !== undefined &&
      input.AlertDescription !== null && { AlertDescription: input.AlertDescription }),
    ...(input.AlertFilters !== undefined &&
      input.AlertFilters !== null && { AlertFilters: serializeAws_restJson1AlertFilters(input.AlertFilters, context) }),
    ...(input.AlertName !== undefined && input.AlertName !== null && { AlertName: input.AlertName }),
    ...(input.AlertSensitivityThreshold !== undefined &&
      input.AlertSensitivityThreshold !== null && { AlertSensitivityThreshold: input.AlertSensitivityThreshold }),
    ...(input.AnomalyDetectorArn !== undefined &&
      input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
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

export const serializeAws_restJson1CreateAnomalyDetectorCommand = async (
  input: CreateAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateAnomalyDetector";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorConfig !== undefined &&
      input.AnomalyDetectorConfig !== null && {
        AnomalyDetectorConfig: serializeAws_restJson1AnomalyDetectorConfig(input.AnomalyDetectorConfig, context),
      }),
    ...(input.AnomalyDetectorDescription !== undefined &&
      input.AnomalyDetectorDescription !== null && { AnomalyDetectorDescription: input.AnomalyDetectorDescription }),
    ...(input.AnomalyDetectorName !== undefined &&
      input.AnomalyDetectorName !== null && { AnomalyDetectorName: input.AnomalyDetectorName }),
    ...(input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { KmsKeyArn: input.KmsKeyArn }),
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

export const serializeAws_restJson1CreateMetricSetCommand = async (
  input: CreateMetricSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateMetricSet";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn !== undefined &&
      input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.DimensionList !== undefined &&
      input.DimensionList !== null && {
        DimensionList: serializeAws_restJson1DimensionList(input.DimensionList, context),
      }),
    ...(input.MetricList !== undefined &&
      input.MetricList !== null && { MetricList: serializeAws_restJson1MetricList(input.MetricList, context) }),
    ...(input.MetricSetDescription !== undefined &&
      input.MetricSetDescription !== null && { MetricSetDescription: input.MetricSetDescription }),
    ...(input.MetricSetFrequency !== undefined &&
      input.MetricSetFrequency !== null && { MetricSetFrequency: input.MetricSetFrequency }),
    ...(input.MetricSetName !== undefined && input.MetricSetName !== null && { MetricSetName: input.MetricSetName }),
    ...(input.MetricSource !== undefined &&
      input.MetricSource !== null && { MetricSource: serializeAws_restJson1MetricSource(input.MetricSource, context) }),
    ...(input.Offset !== undefined && input.Offset !== null && { Offset: input.Offset }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    ...(input.TimestampColumn !== undefined &&
      input.TimestampColumn !== null && {
        TimestampColumn: serializeAws_restJson1TimestampColumn(input.TimestampColumn, context),
      }),
    ...(input.Timezone !== undefined && input.Timezone !== null && { Timezone: input.Timezone }),
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

export const serializeAws_restJson1DeactivateAnomalyDetectorCommand = async (
  input: DeactivateAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeactivateAnomalyDetector";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn !== undefined &&
      input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
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

export const serializeAws_restJson1DeleteAlertCommand = async (
  input: DeleteAlertCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteAlert";
  let body: any;
  body = JSON.stringify({
    ...(input.AlertArn !== undefined && input.AlertArn !== null && { AlertArn: input.AlertArn }),
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

export const serializeAws_restJson1DeleteAnomalyDetectorCommand = async (
  input: DeleteAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteAnomalyDetector";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn !== undefined &&
      input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
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

export const serializeAws_restJson1DescribeAlertCommand = async (
  input: DescribeAlertCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeAlert";
  let body: any;
  body = JSON.stringify({
    ...(input.AlertArn !== undefined && input.AlertArn !== null && { AlertArn: input.AlertArn }),
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

export const serializeAws_restJson1DescribeAnomalyDetectionExecutionsCommand = async (
  input: DescribeAnomalyDetectionExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeAnomalyDetectionExecutions";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn !== undefined &&
      input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Timestamp !== undefined && input.Timestamp !== null && { Timestamp: input.Timestamp }),
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

export const serializeAws_restJson1DescribeAnomalyDetectorCommand = async (
  input: DescribeAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeAnomalyDetector";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn !== undefined &&
      input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
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

export const serializeAws_restJson1DescribeMetricSetCommand = async (
  input: DescribeMetricSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeMetricSet";
  let body: any;
  body = JSON.stringify({
    ...(input.MetricSetArn !== undefined && input.MetricSetArn !== null && { MetricSetArn: input.MetricSetArn }),
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

export const serializeAws_restJson1DetectMetricSetConfigCommand = async (
  input: DetectMetricSetConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DetectMetricSetConfig";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn !== undefined &&
      input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.AutoDetectionMetricSource !== undefined &&
      input.AutoDetectionMetricSource !== null && {
        AutoDetectionMetricSource: serializeAws_restJson1AutoDetectionMetricSource(
          input.AutoDetectionMetricSource,
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

export const serializeAws_restJson1GetAnomalyGroupCommand = async (
  input: GetAnomalyGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetAnomalyGroup";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn !== undefined &&
      input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.AnomalyGroupId !== undefined &&
      input.AnomalyGroupId !== null && { AnomalyGroupId: input.AnomalyGroupId }),
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

export const serializeAws_restJson1GetFeedbackCommand = async (
  input: GetFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetFeedback";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn !== undefined &&
      input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.AnomalyGroupTimeSeriesFeedback !== undefined &&
      input.AnomalyGroupTimeSeriesFeedback !== null && {
        AnomalyGroupTimeSeriesFeedback: serializeAws_restJson1AnomalyGroupTimeSeries(
          input.AnomalyGroupTimeSeriesFeedback,
          context
        ),
      }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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

export const serializeAws_restJson1GetSampleDataCommand = async (
  input: GetSampleDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetSampleData";
  let body: any;
  body = JSON.stringify({
    ...(input.S3SourceConfig !== undefined &&
      input.S3SourceConfig !== null && {
        S3SourceConfig: serializeAws_restJson1SampleDataS3SourceConfig(input.S3SourceConfig, context),
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

export const serializeAws_restJson1ListAlertsCommand = async (
  input: ListAlertsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListAlerts";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn !== undefined &&
      input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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

export const serializeAws_restJson1ListAnomalyDetectorsCommand = async (
  input: ListAnomalyDetectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListAnomalyDetectors";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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

export const serializeAws_restJson1ListAnomalyGroupRelatedMetricsCommand = async (
  input: ListAnomalyGroupRelatedMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListAnomalyGroupRelatedMetrics";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn !== undefined &&
      input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.AnomalyGroupId !== undefined &&
      input.AnomalyGroupId !== null && { AnomalyGroupId: input.AnomalyGroupId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.RelationshipTypeFilter !== undefined &&
      input.RelationshipTypeFilter !== null && { RelationshipTypeFilter: input.RelationshipTypeFilter }),
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

export const serializeAws_restJson1ListAnomalyGroupSummariesCommand = async (
  input: ListAnomalyGroupSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListAnomalyGroupSummaries";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn !== undefined &&
      input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SensitivityThreshold !== undefined &&
      input.SensitivityThreshold !== null && { SensitivityThreshold: input.SensitivityThreshold }),
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

export const serializeAws_restJson1ListAnomalyGroupTimeSeriesCommand = async (
  input: ListAnomalyGroupTimeSeriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListAnomalyGroupTimeSeries";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn !== undefined &&
      input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.AnomalyGroupId !== undefined &&
      input.AnomalyGroupId !== null && { AnomalyGroupId: input.AnomalyGroupId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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

export const serializeAws_restJson1ListMetricSetsCommand = async (
  input: ListMetricSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListMetricSets";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn !== undefined &&
      input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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

export const serializeAws_restJson1PutFeedbackCommand = async (
  input: PutFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/PutFeedback";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn !== undefined &&
      input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.AnomalyGroupTimeSeriesFeedback !== undefined &&
      input.AnomalyGroupTimeSeriesFeedback !== null && {
        AnomalyGroupTimeSeriesFeedback: serializeAws_restJson1AnomalyGroupTimeSeriesFeedback(
          input.AnomalyGroupTimeSeriesFeedback,
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
    ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1UpdateAlertCommand = async (
  input: UpdateAlertCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateAlert";
  let body: any;
  body = JSON.stringify({
    ...(input.Action !== undefined &&
      input.Action !== null && { Action: serializeAws_restJson1Action(input.Action, context) }),
    ...(input.AlertArn !== undefined && input.AlertArn !== null && { AlertArn: input.AlertArn }),
    ...(input.AlertDescription !== undefined &&
      input.AlertDescription !== null && { AlertDescription: input.AlertDescription }),
    ...(input.AlertFilters !== undefined &&
      input.AlertFilters !== null && { AlertFilters: serializeAws_restJson1AlertFilters(input.AlertFilters, context) }),
    ...(input.AlertSensitivityThreshold !== undefined &&
      input.AlertSensitivityThreshold !== null && { AlertSensitivityThreshold: input.AlertSensitivityThreshold }),
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

export const serializeAws_restJson1UpdateAnomalyDetectorCommand = async (
  input: UpdateAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateAnomalyDetector";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn !== undefined &&
      input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.AnomalyDetectorConfig !== undefined &&
      input.AnomalyDetectorConfig !== null && {
        AnomalyDetectorConfig: serializeAws_restJson1AnomalyDetectorConfig(input.AnomalyDetectorConfig, context),
      }),
    ...(input.AnomalyDetectorDescription !== undefined &&
      input.AnomalyDetectorDescription !== null && { AnomalyDetectorDescription: input.AnomalyDetectorDescription }),
    ...(input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { KmsKeyArn: input.KmsKeyArn }),
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

export const serializeAws_restJson1UpdateMetricSetCommand = async (
  input: UpdateMetricSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateMetricSet";
  let body: any;
  body = JSON.stringify({
    ...(input.DimensionList !== undefined &&
      input.DimensionList !== null && {
        DimensionList: serializeAws_restJson1DimensionList(input.DimensionList, context),
      }),
    ...(input.MetricList !== undefined &&
      input.MetricList !== null && { MetricList: serializeAws_restJson1MetricList(input.MetricList, context) }),
    ...(input.MetricSetArn !== undefined && input.MetricSetArn !== null && { MetricSetArn: input.MetricSetArn }),
    ...(input.MetricSetDescription !== undefined &&
      input.MetricSetDescription !== null && { MetricSetDescription: input.MetricSetDescription }),
    ...(input.MetricSetFrequency !== undefined &&
      input.MetricSetFrequency !== null && { MetricSetFrequency: input.MetricSetFrequency }),
    ...(input.MetricSource !== undefined &&
      input.MetricSource !== null && { MetricSource: serializeAws_restJson1MetricSource(input.MetricSource, context) }),
    ...(input.Offset !== undefined && input.Offset !== null && { Offset: input.Offset }),
    ...(input.TimestampColumn !== undefined &&
      input.TimestampColumn !== null && {
        TimestampColumn: serializeAws_restJson1TimestampColumn(input.TimestampColumn, context),
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

export const deserializeAws_restJson1ActivateAnomalyDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateAnomalyDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ActivateAnomalyDetectorCommandError(output, context);
  }
  const contents: ActivateAnomalyDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ActivateAnomalyDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateAnomalyDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutmetrics#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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

export const deserializeAws_restJson1BackTestAnomalyDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BackTestAnomalyDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BackTestAnomalyDetectorCommandError(output, context);
  }
  const contents: BackTestAnomalyDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BackTestAnomalyDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BackTestAnomalyDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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

export const deserializeAws_restJson1CreateAlertCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAlertCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAlertCommandError(output, context);
  }
  const contents: CreateAlertCommandOutput = {
    $metadata: deserializeMetadata(output),
    AlertArn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AlertArn !== undefined && data.AlertArn !== null) {
    contents.AlertArn = __expectString(data.AlertArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAlertCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAlertCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutmetrics#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutmetrics#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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

export const deserializeAws_restJson1CreateAnomalyDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnomalyDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAnomalyDetectorCommandError(output, context);
  }
  const contents: CreateAnomalyDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    AnomalyDetectorArn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnomalyDetectorArn !== undefined && data.AnomalyDetectorArn !== null) {
    contents.AnomalyDetectorArn = __expectString(data.AnomalyDetectorArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAnomalyDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnomalyDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutmetrics#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutmetrics#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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

export const deserializeAws_restJson1CreateMetricSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMetricSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMetricSetCommandError(output, context);
  }
  const contents: CreateMetricSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    MetricSetArn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MetricSetArn !== undefined && data.MetricSetArn !== null) {
    contents.MetricSetArn = __expectString(data.MetricSetArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateMetricSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMetricSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutmetrics#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutmetrics#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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

export const deserializeAws_restJson1DeactivateAnomalyDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateAnomalyDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeactivateAnomalyDetectorCommandError(output, context);
  }
  const contents: DeactivateAnomalyDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeactivateAnomalyDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateAnomalyDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutmetrics#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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

export const deserializeAws_restJson1DeleteAlertCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAlertCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAlertCommandError(output, context);
  }
  const contents: DeleteAlertCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAlertCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAlertCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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

export const deserializeAws_restJson1DeleteAnomalyDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnomalyDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAnomalyDetectorCommandError(output, context);
  }
  const contents: DeleteAnomalyDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAnomalyDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnomalyDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutmetrics#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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

export const deserializeAws_restJson1DescribeAlertCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlertCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAlertCommandError(output, context);
  }
  const contents: DescribeAlertCommandOutput = {
    $metadata: deserializeMetadata(output),
    Alert: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Alert !== undefined && data.Alert !== null) {
    contents.Alert = deserializeAws_restJson1Alert(data.Alert, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeAlertCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlertCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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

export const deserializeAws_restJson1DescribeAnomalyDetectionExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnomalyDetectionExecutionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAnomalyDetectionExecutionsCommandError(output, context);
  }
  const contents: DescribeAnomalyDetectionExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ExecutionList: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ExecutionList !== undefined && data.ExecutionList !== null) {
    contents.ExecutionList = deserializeAws_restJson1ExecutionList(data.ExecutionList, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeAnomalyDetectionExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnomalyDetectionExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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

export const deserializeAws_restJson1DescribeAnomalyDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnomalyDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAnomalyDetectorCommandError(output, context);
  }
  const contents: DescribeAnomalyDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    AnomalyDetectorArn: undefined,
    AnomalyDetectorConfig: undefined,
    AnomalyDetectorDescription: undefined,
    AnomalyDetectorName: undefined,
    CreationTime: undefined,
    FailureReason: undefined,
    FailureType: undefined,
    KmsKeyArn: undefined,
    LastModificationTime: undefined,
    Status: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnomalyDetectorArn !== undefined && data.AnomalyDetectorArn !== null) {
    contents.AnomalyDetectorArn = __expectString(data.AnomalyDetectorArn);
  }
  if (data.AnomalyDetectorConfig !== undefined && data.AnomalyDetectorConfig !== null) {
    contents.AnomalyDetectorConfig = deserializeAws_restJson1AnomalyDetectorConfigSummary(
      data.AnomalyDetectorConfig,
      context
    );
  }
  if (data.AnomalyDetectorDescription !== undefined && data.AnomalyDetectorDescription !== null) {
    contents.AnomalyDetectorDescription = __expectString(data.AnomalyDetectorDescription);
  }
  if (data.AnomalyDetectorName !== undefined && data.AnomalyDetectorName !== null) {
    contents.AnomalyDetectorName = __expectString(data.AnomalyDetectorName);
  }
  if (data.CreationTime !== undefined && data.CreationTime !== null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.FailureReason !== undefined && data.FailureReason !== null) {
    contents.FailureReason = __expectString(data.FailureReason);
  }
  if (data.FailureType !== undefined && data.FailureType !== null) {
    contents.FailureType = __expectString(data.FailureType);
  }
  if (data.KmsKeyArn !== undefined && data.KmsKeyArn !== null) {
    contents.KmsKeyArn = __expectString(data.KmsKeyArn);
  }
  if (data.LastModificationTime !== undefined && data.LastModificationTime !== null) {
    contents.LastModificationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModificationTime)));
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = __expectString(data.Status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeAnomalyDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnomalyDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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

export const deserializeAws_restJson1DescribeMetricSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMetricSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeMetricSetCommandError(output, context);
  }
  const contents: DescribeMetricSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    AnomalyDetectorArn: undefined,
    CreationTime: undefined,
    DimensionList: undefined,
    LastModificationTime: undefined,
    MetricList: undefined,
    MetricSetArn: undefined,
    MetricSetDescription: undefined,
    MetricSetFrequency: undefined,
    MetricSetName: undefined,
    MetricSource: undefined,
    Offset: undefined,
    TimestampColumn: undefined,
    Timezone: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnomalyDetectorArn !== undefined && data.AnomalyDetectorArn !== null) {
    contents.AnomalyDetectorArn = __expectString(data.AnomalyDetectorArn);
  }
  if (data.CreationTime !== undefined && data.CreationTime !== null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.DimensionList !== undefined && data.DimensionList !== null) {
    contents.DimensionList = deserializeAws_restJson1DimensionList(data.DimensionList, context);
  }
  if (data.LastModificationTime !== undefined && data.LastModificationTime !== null) {
    contents.LastModificationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModificationTime)));
  }
  if (data.MetricList !== undefined && data.MetricList !== null) {
    contents.MetricList = deserializeAws_restJson1MetricList(data.MetricList, context);
  }
  if (data.MetricSetArn !== undefined && data.MetricSetArn !== null) {
    contents.MetricSetArn = __expectString(data.MetricSetArn);
  }
  if (data.MetricSetDescription !== undefined && data.MetricSetDescription !== null) {
    contents.MetricSetDescription = __expectString(data.MetricSetDescription);
  }
  if (data.MetricSetFrequency !== undefined && data.MetricSetFrequency !== null) {
    contents.MetricSetFrequency = __expectString(data.MetricSetFrequency);
  }
  if (data.MetricSetName !== undefined && data.MetricSetName !== null) {
    contents.MetricSetName = __expectString(data.MetricSetName);
  }
  if (data.MetricSource !== undefined && data.MetricSource !== null) {
    contents.MetricSource = deserializeAws_restJson1MetricSource(data.MetricSource, context);
  }
  if (data.Offset !== undefined && data.Offset !== null) {
    contents.Offset = __expectInt32(data.Offset);
  }
  if (data.TimestampColumn !== undefined && data.TimestampColumn !== null) {
    contents.TimestampColumn = deserializeAws_restJson1TimestampColumn(data.TimestampColumn, context);
  }
  if (data.Timezone !== undefined && data.Timezone !== null) {
    contents.Timezone = __expectString(data.Timezone);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeMetricSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMetricSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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

export const deserializeAws_restJson1DetectMetricSetConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectMetricSetConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DetectMetricSetConfigCommandError(output, context);
  }
  const contents: DetectMetricSetConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    DetectedMetricSetConfig: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DetectedMetricSetConfig !== undefined && data.DetectedMetricSetConfig !== null) {
    contents.DetectedMetricSetConfig = deserializeAws_restJson1DetectedMetricSetConfig(
      data.DetectedMetricSetConfig,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DetectMetricSetConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectMetricSetConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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

export const deserializeAws_restJson1GetAnomalyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnomalyGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAnomalyGroupCommandError(output, context);
  }
  const contents: GetAnomalyGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    AnomalyGroup: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnomalyGroup !== undefined && data.AnomalyGroup !== null) {
    contents.AnomalyGroup = deserializeAws_restJson1AnomalyGroup(data.AnomalyGroup, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAnomalyGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnomalyGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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

export const deserializeAws_restJson1GetFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFeedbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFeedbackCommandError(output, context);
  }
  const contents: GetFeedbackCommandOutput = {
    $metadata: deserializeMetadata(output),
    AnomalyGroupTimeSeriesFeedback: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnomalyGroupTimeSeriesFeedback !== undefined && data.AnomalyGroupTimeSeriesFeedback !== null) {
    contents.AnomalyGroupTimeSeriesFeedback = deserializeAws_restJson1TimeSeriesFeedbackList(
      data.AnomalyGroupTimeSeriesFeedback,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetFeedbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFeedbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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

export const deserializeAws_restJson1GetSampleDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSampleDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSampleDataCommandError(output, context);
  }
  const contents: GetSampleDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    HeaderValues: undefined,
    SampleRows: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HeaderValues !== undefined && data.HeaderValues !== null) {
    contents.HeaderValues = deserializeAws_restJson1HeaderValueList(data.HeaderValues, context);
  }
  if (data.SampleRows !== undefined && data.SampleRows !== null) {
    contents.SampleRows = deserializeAws_restJson1SampleRows(data.SampleRows, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSampleDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSampleDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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

export const deserializeAws_restJson1ListAlertsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlertsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAlertsCommandError(output, context);
  }
  const contents: ListAlertsCommandOutput = {
    $metadata: deserializeMetadata(output),
    AlertSummaryList: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AlertSummaryList !== undefined && data.AlertSummaryList !== null) {
    contents.AlertSummaryList = deserializeAws_restJson1AlertSummaryList(data.AlertSummaryList, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAlertsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlertsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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

export const deserializeAws_restJson1ListAnomalyDetectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnomalyDetectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAnomalyDetectorsCommandError(output, context);
  }
  const contents: ListAnomalyDetectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    AnomalyDetectorSummaryList: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnomalyDetectorSummaryList !== undefined && data.AnomalyDetectorSummaryList !== null) {
    contents.AnomalyDetectorSummaryList = deserializeAws_restJson1AnomalyDetectorSummaryList(
      data.AnomalyDetectorSummaryList,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAnomalyDetectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnomalyDetectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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

export const deserializeAws_restJson1ListAnomalyGroupRelatedMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnomalyGroupRelatedMetricsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAnomalyGroupRelatedMetricsCommandError(output, context);
  }
  const contents: ListAnomalyGroupRelatedMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    InterMetricImpactList: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InterMetricImpactList !== undefined && data.InterMetricImpactList !== null) {
    contents.InterMetricImpactList = deserializeAws_restJson1InterMetricImpactList(data.InterMetricImpactList, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAnomalyGroupRelatedMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnomalyGroupRelatedMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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

export const deserializeAws_restJson1ListAnomalyGroupSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnomalyGroupSummariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAnomalyGroupSummariesCommandError(output, context);
  }
  const contents: ListAnomalyGroupSummariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    AnomalyGroupStatistics: undefined,
    AnomalyGroupSummaryList: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnomalyGroupStatistics !== undefined && data.AnomalyGroupStatistics !== null) {
    contents.AnomalyGroupStatistics = deserializeAws_restJson1AnomalyGroupStatistics(
      data.AnomalyGroupStatistics,
      context
    );
  }
  if (data.AnomalyGroupSummaryList !== undefined && data.AnomalyGroupSummaryList !== null) {
    contents.AnomalyGroupSummaryList = deserializeAws_restJson1AnomalyGroupSummaryList(
      data.AnomalyGroupSummaryList,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAnomalyGroupSummariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnomalyGroupSummariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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

export const deserializeAws_restJson1ListAnomalyGroupTimeSeriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnomalyGroupTimeSeriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAnomalyGroupTimeSeriesCommandError(output, context);
  }
  const contents: ListAnomalyGroupTimeSeriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    AnomalyGroupId: undefined,
    MetricName: undefined,
    NextToken: undefined,
    TimeSeriesList: undefined,
    TimestampList: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnomalyGroupId !== undefined && data.AnomalyGroupId !== null) {
    contents.AnomalyGroupId = __expectString(data.AnomalyGroupId);
  }
  if (data.MetricName !== undefined && data.MetricName !== null) {
    contents.MetricName = __expectString(data.MetricName);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.TimeSeriesList !== undefined && data.TimeSeriesList !== null) {
    contents.TimeSeriesList = deserializeAws_restJson1TimeSeriesList(data.TimeSeriesList, context);
  }
  if (data.TimestampList !== undefined && data.TimestampList !== null) {
    contents.TimestampList = deserializeAws_restJson1TimestampList(data.TimestampList, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAnomalyGroupTimeSeriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnomalyGroupTimeSeriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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

export const deserializeAws_restJson1ListMetricSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetricSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMetricSetsCommandError(output, context);
  }
  const contents: ListMetricSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    MetricSetSummaryList: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MetricSetSummaryList !== undefined && data.MetricSetSummaryList !== null) {
    contents.MetricSetSummaryList = deserializeAws_restJson1MetricSetSummaryList(data.MetricSetSummaryList, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListMetricSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetricSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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
    Tags: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
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
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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

export const deserializeAws_restJson1PutFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFeedbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutFeedbackCommandError(output, context);
  }
  const contents: PutFeedbackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutFeedbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFeedbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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

export const deserializeAws_restJson1UpdateAlertCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAlertCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAlertCommandError(output, context);
  }
  const contents: UpdateAlertCommandOutput = {
    $metadata: deserializeMetadata(output),
    AlertArn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AlertArn !== undefined && data.AlertArn !== null) {
    contents.AlertArn = __expectString(data.AlertArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAlertCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAlertCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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

export const deserializeAws_restJson1UpdateAnomalyDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnomalyDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAnomalyDetectorCommandError(output, context);
  }
  const contents: UpdateAnomalyDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    AnomalyDetectorArn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnomalyDetectorArn !== undefined && data.AnomalyDetectorArn !== null) {
    contents.AnomalyDetectorArn = __expectString(data.AnomalyDetectorArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAnomalyDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnomalyDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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

export const deserializeAws_restJson1UpdateMetricSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMetricSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateMetricSetCommandError(output, context);
  }
  const contents: UpdateMetricSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    MetricSetArn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MetricSetArn !== undefined && data.MetricSetArn !== null) {
    contents.MetricSetArn = __expectString(data.MetricSetArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateMetricSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMetricSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutmetrics#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
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
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
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
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId !== undefined && data.ResourceId !== null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = __expectString(data.ResourceType);
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
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
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
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId !== undefined && data.ResourceId !== null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = __expectString(data.ResourceType);
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
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.QuotaCode !== undefined && data.QuotaCode !== null) {
    contents.QuotaCode = __expectString(data.QuotaCode);
  }
  if (data.ResourceId !== undefined && data.ResourceId !== null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  if (data.ServiceCode !== undefined && data.ServiceCode !== null) {
    contents.ServiceCode = __expectString(data.ServiceCode);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new TooManyRequestsException({
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
  if (data.Fields !== undefined && data.Fields !== null) {
    contents.Fields = deserializeAws_restJson1ValidationExceptionFieldList(data.Fields, context);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Reason !== undefined && data.Reason !== null) {
    contents.Reason = __expectString(data.Reason);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1Action = (input: Action, context: __SerdeContext): any => {
  return {
    ...(input.LambdaConfiguration !== undefined &&
      input.LambdaConfiguration !== null && {
        LambdaConfiguration: serializeAws_restJson1LambdaConfiguration(input.LambdaConfiguration, context),
      }),
    ...(input.SNSConfiguration !== undefined &&
      input.SNSConfiguration !== null && {
        SNSConfiguration: serializeAws_restJson1SNSConfiguration(input.SNSConfiguration, context),
      }),
  };
};

const serializeAws_restJson1AlertFilters = (input: AlertFilters, context: __SerdeContext): any => {
  return {
    ...(input.DimensionFilterList !== undefined &&
      input.DimensionFilterList !== null && {
        DimensionFilterList: serializeAws_restJson1DimensionFilterList(input.DimensionFilterList, context),
      }),
    ...(input.MetricList !== undefined &&
      input.MetricList !== null && { MetricList: serializeAws_restJson1MetricNameList(input.MetricList, context) }),
  };
};

const serializeAws_restJson1AnomalyDetectorConfig = (input: AnomalyDetectorConfig, context: __SerdeContext): any => {
  return {
    ...(input.AnomalyDetectorFrequency !== undefined &&
      input.AnomalyDetectorFrequency !== null && { AnomalyDetectorFrequency: input.AnomalyDetectorFrequency }),
  };
};

const serializeAws_restJson1AnomalyGroupTimeSeries = (input: AnomalyGroupTimeSeries, context: __SerdeContext): any => {
  return {
    ...(input.AnomalyGroupId !== undefined &&
      input.AnomalyGroupId !== null && { AnomalyGroupId: input.AnomalyGroupId }),
    ...(input.TimeSeriesId !== undefined && input.TimeSeriesId !== null && { TimeSeriesId: input.TimeSeriesId }),
  };
};

const serializeAws_restJson1AnomalyGroupTimeSeriesFeedback = (
  input: AnomalyGroupTimeSeriesFeedback,
  context: __SerdeContext
): any => {
  return {
    ...(input.AnomalyGroupId !== undefined &&
      input.AnomalyGroupId !== null && { AnomalyGroupId: input.AnomalyGroupId }),
    ...(input.IsAnomaly !== undefined && input.IsAnomaly !== null && { IsAnomaly: input.IsAnomaly }),
    ...(input.TimeSeriesId !== undefined && input.TimeSeriesId !== null && { TimeSeriesId: input.TimeSeriesId }),
  };
};

const serializeAws_restJson1AppFlowConfig = (input: AppFlowConfig, context: __SerdeContext): any => {
  return {
    ...(input.FlowName !== undefined && input.FlowName !== null && { FlowName: input.FlowName }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_restJson1AthenaSourceConfig = (input: AthenaSourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.BackTestConfiguration !== undefined &&
      input.BackTestConfiguration !== null && {
        BackTestConfiguration: serializeAws_restJson1BackTestConfiguration(input.BackTestConfiguration, context),
      }),
    ...(input.DataCatalog !== undefined && input.DataCatalog !== null && { DataCatalog: input.DataCatalog }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.S3ResultsPath !== undefined && input.S3ResultsPath !== null && { S3ResultsPath: input.S3ResultsPath }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    ...(input.WorkGroupName !== undefined && input.WorkGroupName !== null && { WorkGroupName: input.WorkGroupName }),
  };
};

const serializeAws_restJson1AutoDetectionMetricSource = (
  input: AutoDetectionMetricSource,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3SourceConfig !== undefined &&
      input.S3SourceConfig !== null && {
        S3SourceConfig: serializeAws_restJson1AutoDetectionS3SourceConfig(input.S3SourceConfig, context),
      }),
  };
};

const serializeAws_restJson1AutoDetectionS3SourceConfig = (
  input: AutoDetectionS3SourceConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.HistoricalDataPathList !== undefined &&
      input.HistoricalDataPathList !== null && {
        HistoricalDataPathList: serializeAws_restJson1HistoricalDataPathList(input.HistoricalDataPathList, context),
      }),
    ...(input.TemplatedPathList !== undefined &&
      input.TemplatedPathList !== null && {
        TemplatedPathList: serializeAws_restJson1TemplatedPathList(input.TemplatedPathList, context),
      }),
  };
};

const serializeAws_restJson1BackTestConfiguration = (input: BackTestConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.RunBackTestMode !== undefined &&
      input.RunBackTestMode !== null && { RunBackTestMode: input.RunBackTestMode }),
  };
};

const serializeAws_restJson1CloudWatchConfig = (input: CloudWatchConfig, context: __SerdeContext): any => {
  return {
    ...(input.BackTestConfiguration !== undefined &&
      input.BackTestConfiguration !== null && {
        BackTestConfiguration: serializeAws_restJson1BackTestConfiguration(input.BackTestConfiguration, context),
      }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_restJson1CsvFormatDescriptor = (input: CsvFormatDescriptor, context: __SerdeContext): any => {
  return {
    ...(input.Charset !== undefined && input.Charset !== null && { Charset: input.Charset }),
    ...(input.ContainsHeader !== undefined &&
      input.ContainsHeader !== null && { ContainsHeader: input.ContainsHeader }),
    ...(input.Delimiter !== undefined && input.Delimiter !== null && { Delimiter: input.Delimiter }),
    ...(input.FileCompression !== undefined &&
      input.FileCompression !== null && { FileCompression: input.FileCompression }),
    ...(input.HeaderList !== undefined &&
      input.HeaderList !== null && { HeaderList: serializeAws_restJson1HeaderList(input.HeaderList, context) }),
    ...(input.QuoteSymbol !== undefined && input.QuoteSymbol !== null && { QuoteSymbol: input.QuoteSymbol }),
  };
};

const serializeAws_restJson1DimensionFilter = (input: DimensionFilter, context: __SerdeContext): any => {
  return {
    ...(input.DimensionName !== undefined && input.DimensionName !== null && { DimensionName: input.DimensionName }),
    ...(input.DimensionValueList !== undefined &&
      input.DimensionValueList !== null && {
        DimensionValueList: serializeAws_restJson1DimensionValueList(input.DimensionValueList, context),
      }),
  };
};

const serializeAws_restJson1DimensionFilterList = (input: DimensionFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1DimensionFilter(entry, context);
    });
};

const serializeAws_restJson1DimensionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1DimensionValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1FileFormatDescriptor = (input: FileFormatDescriptor, context: __SerdeContext): any => {
  return {
    ...(input.CsvFormatDescriptor !== undefined &&
      input.CsvFormatDescriptor !== null && {
        CsvFormatDescriptor: serializeAws_restJson1CsvFormatDescriptor(input.CsvFormatDescriptor, context),
      }),
    ...(input.JsonFormatDescriptor !== undefined &&
      input.JsonFormatDescriptor !== null && {
        JsonFormatDescriptor: serializeAws_restJson1JsonFormatDescriptor(input.JsonFormatDescriptor, context),
      }),
  };
};

const serializeAws_restJson1HeaderList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1HistoricalDataPathList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1JsonFormatDescriptor = (input: JsonFormatDescriptor, context: __SerdeContext): any => {
  return {
    ...(input.Charset !== undefined && input.Charset !== null && { Charset: input.Charset }),
    ...(input.FileCompression !== undefined &&
      input.FileCompression !== null && { FileCompression: input.FileCompression }),
  };
};

const serializeAws_restJson1LambdaConfiguration = (input: LambdaConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.LambdaArn !== undefined && input.LambdaArn !== null && { LambdaArn: input.LambdaArn }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_restJson1Metric = (input: Metric, context: __SerdeContext): any => {
  return {
    ...(input.AggregationFunction !== undefined &&
      input.AggregationFunction !== null && { AggregationFunction: input.AggregationFunction }),
    ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
    ...(input.Namespace !== undefined && input.Namespace !== null && { Namespace: input.Namespace }),
  };
};

const serializeAws_restJson1MetricList = (input: Metric[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Metric(entry, context);
    });
};

const serializeAws_restJson1MetricNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1MetricSource = (input: MetricSource, context: __SerdeContext): any => {
  return {
    ...(input.AppFlowConfig !== undefined &&
      input.AppFlowConfig !== null && {
        AppFlowConfig: serializeAws_restJson1AppFlowConfig(input.AppFlowConfig, context),
      }),
    ...(input.AthenaSourceConfig !== undefined &&
      input.AthenaSourceConfig !== null && {
        AthenaSourceConfig: serializeAws_restJson1AthenaSourceConfig(input.AthenaSourceConfig, context),
      }),
    ...(input.CloudWatchConfig !== undefined &&
      input.CloudWatchConfig !== null && {
        CloudWatchConfig: serializeAws_restJson1CloudWatchConfig(input.CloudWatchConfig, context),
      }),
    ...(input.RDSSourceConfig !== undefined &&
      input.RDSSourceConfig !== null && {
        RDSSourceConfig: serializeAws_restJson1RDSSourceConfig(input.RDSSourceConfig, context),
      }),
    ...(input.RedshiftSourceConfig !== undefined &&
      input.RedshiftSourceConfig !== null && {
        RedshiftSourceConfig: serializeAws_restJson1RedshiftSourceConfig(input.RedshiftSourceConfig, context),
      }),
    ...(input.S3SourceConfig !== undefined &&
      input.S3SourceConfig !== null && {
        S3SourceConfig: serializeAws_restJson1S3SourceConfig(input.S3SourceConfig, context),
      }),
  };
};

const serializeAws_restJson1RDSSourceConfig = (input: RDSSourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.DBInstanceIdentifier !== undefined &&
      input.DBInstanceIdentifier !== null && { DBInstanceIdentifier: input.DBInstanceIdentifier }),
    ...(input.DatabaseHost !== undefined && input.DatabaseHost !== null && { DatabaseHost: input.DatabaseHost }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.DatabasePort !== undefined && input.DatabasePort !== null && { DatabasePort: input.DatabasePort }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.SecretManagerArn !== undefined &&
      input.SecretManagerArn !== null && { SecretManagerArn: input.SecretManagerArn }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    ...(input.VpcConfiguration !== undefined &&
      input.VpcConfiguration !== null && {
        VpcConfiguration: serializeAws_restJson1VpcConfiguration(input.VpcConfiguration, context),
      }),
  };
};

const serializeAws_restJson1RedshiftSourceConfig = (input: RedshiftSourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.ClusterIdentifier !== undefined &&
      input.ClusterIdentifier !== null && { ClusterIdentifier: input.ClusterIdentifier }),
    ...(input.DatabaseHost !== undefined && input.DatabaseHost !== null && { DatabaseHost: input.DatabaseHost }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.DatabasePort !== undefined && input.DatabasePort !== null && { DatabasePort: input.DatabasePort }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.SecretManagerArn !== undefined &&
      input.SecretManagerArn !== null && { SecretManagerArn: input.SecretManagerArn }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    ...(input.VpcConfiguration !== undefined &&
      input.VpcConfiguration !== null && {
        VpcConfiguration: serializeAws_restJson1VpcConfiguration(input.VpcConfiguration, context),
      }),
  };
};

const serializeAws_restJson1S3SourceConfig = (input: S3SourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.FileFormatDescriptor !== undefined &&
      input.FileFormatDescriptor !== null && {
        FileFormatDescriptor: serializeAws_restJson1FileFormatDescriptor(input.FileFormatDescriptor, context),
      }),
    ...(input.HistoricalDataPathList !== undefined &&
      input.HistoricalDataPathList !== null && {
        HistoricalDataPathList: serializeAws_restJson1HistoricalDataPathList(input.HistoricalDataPathList, context),
      }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.TemplatedPathList !== undefined &&
      input.TemplatedPathList !== null && {
        TemplatedPathList: serializeAws_restJson1TemplatedPathList(input.TemplatedPathList, context),
      }),
  };
};

const serializeAws_restJson1SampleDataS3SourceConfig = (
  input: SampleDataS3SourceConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.FileFormatDescriptor !== undefined &&
      input.FileFormatDescriptor !== null && {
        FileFormatDescriptor: serializeAws_restJson1FileFormatDescriptor(input.FileFormatDescriptor, context),
      }),
    ...(input.HistoricalDataPathList !== undefined &&
      input.HistoricalDataPathList !== null && {
        HistoricalDataPathList: serializeAws_restJson1HistoricalDataPathList(input.HistoricalDataPathList, context),
      }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.TemplatedPathList !== undefined &&
      input.TemplatedPathList !== null && {
        TemplatedPathList: serializeAws_restJson1TemplatedPathList(input.TemplatedPathList, context),
      }),
  };
};

const serializeAws_restJson1SecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SNSConfiguration = (input: SNSConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.SnsFormat !== undefined && input.SnsFormat !== null && { SnsFormat: input.SnsFormat }),
    ...(input.SnsTopicArn !== undefined && input.SnsTopicArn !== null && { SnsTopicArn: input.SnsTopicArn }),
  };
};

const serializeAws_restJson1SubnetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
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

const serializeAws_restJson1TemplatedPathList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1TimestampColumn = (input: TimestampColumn, context: __SerdeContext): any => {
  return {
    ...(input.ColumnFormat !== undefined && input.ColumnFormat !== null && { ColumnFormat: input.ColumnFormat }),
    ...(input.ColumnName !== undefined && input.ColumnName !== null && { ColumnName: input.ColumnName }),
  };
};

const serializeAws_restJson1VpcConfiguration = (input: VpcConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIdList !== undefined &&
      input.SecurityGroupIdList !== null && {
        SecurityGroupIdList: serializeAws_restJson1SecurityGroupIdList(input.SecurityGroupIdList, context),
      }),
    ...(input.SubnetIdList !== undefined &&
      input.SubnetIdList !== null && { SubnetIdList: serializeAws_restJson1SubnetIdList(input.SubnetIdList, context) }),
  };
};

const deserializeAws_restJson1Action = (output: any, context: __SerdeContext): Action => {
  return {
    LambdaConfiguration:
      output.LambdaConfiguration !== undefined && output.LambdaConfiguration !== null
        ? deserializeAws_restJson1LambdaConfiguration(output.LambdaConfiguration, context)
        : undefined,
    SNSConfiguration:
      output.SNSConfiguration !== undefined && output.SNSConfiguration !== null
        ? deserializeAws_restJson1SNSConfiguration(output.SNSConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Alert = (output: any, context: __SerdeContext): Alert => {
  return {
    Action:
      output.Action !== undefined && output.Action !== null
        ? deserializeAws_restJson1Action(output.Action, context)
        : undefined,
    AlertArn: __expectString(output.AlertArn),
    AlertDescription: __expectString(output.AlertDescription),
    AlertFilters:
      output.AlertFilters !== undefined && output.AlertFilters !== null
        ? deserializeAws_restJson1AlertFilters(output.AlertFilters, context)
        : undefined,
    AlertName: __expectString(output.AlertName),
    AlertSensitivityThreshold: __expectInt32(output.AlertSensitivityThreshold),
    AlertStatus: __expectString(output.AlertStatus),
    AlertType: __expectString(output.AlertType),
    AnomalyDetectorArn: __expectString(output.AnomalyDetectorArn),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastModificationTime:
      output.LastModificationTime !== undefined && output.LastModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1AlertFilters = (output: any, context: __SerdeContext): AlertFilters => {
  return {
    DimensionFilterList:
      output.DimensionFilterList !== undefined && output.DimensionFilterList !== null
        ? deserializeAws_restJson1DimensionFilterList(output.DimensionFilterList, context)
        : undefined,
    MetricList:
      output.MetricList !== undefined && output.MetricList !== null
        ? deserializeAws_restJson1MetricNameList(output.MetricList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AlertSummary = (output: any, context: __SerdeContext): AlertSummary => {
  return {
    AlertArn: __expectString(output.AlertArn),
    AlertName: __expectString(output.AlertName),
    AlertSensitivityThreshold: __expectInt32(output.AlertSensitivityThreshold),
    AlertStatus: __expectString(output.AlertStatus),
    AlertType: __expectString(output.AlertType),
    AnomalyDetectorArn: __expectString(output.AnomalyDetectorArn),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastModificationTime:
      output.LastModificationTime !== undefined && output.LastModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AlertSummaryList = (output: any, context: __SerdeContext): AlertSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AlertSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AnomalyDetectorConfigSummary = (
  output: any,
  context: __SerdeContext
): AnomalyDetectorConfigSummary => {
  return {
    AnomalyDetectorFrequency: __expectString(output.AnomalyDetectorFrequency),
  } as any;
};

const deserializeAws_restJson1AnomalyDetectorSummary = (
  output: any,
  context: __SerdeContext
): AnomalyDetectorSummary => {
  return {
    AnomalyDetectorArn: __expectString(output.AnomalyDetectorArn),
    AnomalyDetectorDescription: __expectString(output.AnomalyDetectorDescription),
    AnomalyDetectorName: __expectString(output.AnomalyDetectorName),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastModificationTime:
      output.LastModificationTime !== undefined && output.LastModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Status: __expectString(output.Status),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AnomalyDetectorSummaryList = (
  output: any,
  context: __SerdeContext
): AnomalyDetectorSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AnomalyDetectorSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AnomalyGroup = (output: any, context: __SerdeContext): AnomalyGroup => {
  return {
    AnomalyGroupId: __expectString(output.AnomalyGroupId),
    AnomalyGroupScore: __limitedParseDouble(output.AnomalyGroupScore),
    EndTime: __expectString(output.EndTime),
    MetricLevelImpactList:
      output.MetricLevelImpactList !== undefined && output.MetricLevelImpactList !== null
        ? deserializeAws_restJson1MetricLevelImpactList(output.MetricLevelImpactList, context)
        : undefined,
    PrimaryMetricName: __expectString(output.PrimaryMetricName),
    StartTime: __expectString(output.StartTime),
  } as any;
};

const deserializeAws_restJson1AnomalyGroupStatistics = (
  output: any,
  context: __SerdeContext
): AnomalyGroupStatistics => {
  return {
    EvaluationStartDate: __expectString(output.EvaluationStartDate),
    ItemizedMetricStatsList:
      output.ItemizedMetricStatsList !== undefined && output.ItemizedMetricStatsList !== null
        ? deserializeAws_restJson1ItemizedMetricStatsList(output.ItemizedMetricStatsList, context)
        : undefined,
    TotalCount: __expectInt32(output.TotalCount),
  } as any;
};

const deserializeAws_restJson1AnomalyGroupSummary = (output: any, context: __SerdeContext): AnomalyGroupSummary => {
  return {
    AnomalyGroupId: __expectString(output.AnomalyGroupId),
    AnomalyGroupScore: __limitedParseDouble(output.AnomalyGroupScore),
    EndTime: __expectString(output.EndTime),
    PrimaryMetricName: __expectString(output.PrimaryMetricName),
    StartTime: __expectString(output.StartTime),
  } as any;
};

const deserializeAws_restJson1AnomalyGroupSummaryList = (
  output: any,
  context: __SerdeContext
): AnomalyGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AnomalyGroupSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AppFlowConfig = (output: any, context: __SerdeContext): AppFlowConfig => {
  return {
    FlowName: __expectString(output.FlowName),
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

const deserializeAws_restJson1AthenaSourceConfig = (output: any, context: __SerdeContext): AthenaSourceConfig => {
  return {
    BackTestConfiguration:
      output.BackTestConfiguration !== undefined && output.BackTestConfiguration !== null
        ? deserializeAws_restJson1BackTestConfiguration(output.BackTestConfiguration, context)
        : undefined,
    DataCatalog: __expectString(output.DataCatalog),
    DatabaseName: __expectString(output.DatabaseName),
    RoleArn: __expectString(output.RoleArn),
    S3ResultsPath: __expectString(output.S3ResultsPath),
    TableName: __expectString(output.TableName),
    WorkGroupName: __expectString(output.WorkGroupName),
  } as any;
};

const deserializeAws_restJson1AttributeValue = (output: any, context: __SerdeContext): AttributeValue => {
  return {
    B: __expectString(output.B),
    BS:
      output.BS !== undefined && output.BS !== null
        ? deserializeAws_restJson1BinaryListAttributeValue(output.BS, context)
        : undefined,
    N: __expectString(output.N),
    NS:
      output.NS !== undefined && output.NS !== null
        ? deserializeAws_restJson1NumberListAttributeValue(output.NS, context)
        : undefined,
    S: __expectString(output.S),
    SS:
      output.SS !== undefined && output.SS !== null
        ? deserializeAws_restJson1StringListAttributeValue(output.SS, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BackTestConfiguration = (output: any, context: __SerdeContext): BackTestConfiguration => {
  return {
    RunBackTestMode: __expectBoolean(output.RunBackTestMode),
  } as any;
};

const deserializeAws_restJson1BinaryListAttributeValue = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1CloudWatchConfig = (output: any, context: __SerdeContext): CloudWatchConfig => {
  return {
    BackTestConfiguration:
      output.BackTestConfiguration !== undefined && output.BackTestConfiguration !== null
        ? deserializeAws_restJson1BackTestConfiguration(output.BackTestConfiguration, context)
        : undefined,
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

const deserializeAws_restJson1ContributionMatrix = (output: any, context: __SerdeContext): ContributionMatrix => {
  return {
    DimensionContributionList:
      output.DimensionContributionList !== undefined && output.DimensionContributionList !== null
        ? deserializeAws_restJson1DimensionContributionList(output.DimensionContributionList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CsvFormatDescriptor = (output: any, context: __SerdeContext): CsvFormatDescriptor => {
  return {
    Charset: __expectString(output.Charset),
    ContainsHeader: __expectBoolean(output.ContainsHeader),
    Delimiter: __expectString(output.Delimiter),
    FileCompression: __expectString(output.FileCompression),
    HeaderList:
      output.HeaderList !== undefined && output.HeaderList !== null
        ? deserializeAws_restJson1HeaderList(output.HeaderList, context)
        : undefined,
    QuoteSymbol: __expectString(output.QuoteSymbol),
  } as any;
};

const deserializeAws_restJson1DetectedCsvFormatDescriptor = (
  output: any,
  context: __SerdeContext
): DetectedCsvFormatDescriptor => {
  return {
    Charset:
      output.Charset !== undefined && output.Charset !== null
        ? deserializeAws_restJson1DetectedField(output.Charset, context)
        : undefined,
    ContainsHeader:
      output.ContainsHeader !== undefined && output.ContainsHeader !== null
        ? deserializeAws_restJson1DetectedField(output.ContainsHeader, context)
        : undefined,
    Delimiter:
      output.Delimiter !== undefined && output.Delimiter !== null
        ? deserializeAws_restJson1DetectedField(output.Delimiter, context)
        : undefined,
    FileCompression:
      output.FileCompression !== undefined && output.FileCompression !== null
        ? deserializeAws_restJson1DetectedField(output.FileCompression, context)
        : undefined,
    HeaderList:
      output.HeaderList !== undefined && output.HeaderList !== null
        ? deserializeAws_restJson1DetectedField(output.HeaderList, context)
        : undefined,
    QuoteSymbol:
      output.QuoteSymbol !== undefined && output.QuoteSymbol !== null
        ? deserializeAws_restJson1DetectedField(output.QuoteSymbol, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DetectedField = (output: any, context: __SerdeContext): DetectedField => {
  return {
    Confidence: __expectString(output.Confidence),
    Message: __expectString(output.Message),
    Value:
      output.Value !== undefined && output.Value !== null
        ? deserializeAws_restJson1AttributeValue(output.Value, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DetectedFileFormatDescriptor = (
  output: any,
  context: __SerdeContext
): DetectedFileFormatDescriptor => {
  return {
    CsvFormatDescriptor:
      output.CsvFormatDescriptor !== undefined && output.CsvFormatDescriptor !== null
        ? deserializeAws_restJson1DetectedCsvFormatDescriptor(output.CsvFormatDescriptor, context)
        : undefined,
    JsonFormatDescriptor:
      output.JsonFormatDescriptor !== undefined && output.JsonFormatDescriptor !== null
        ? deserializeAws_restJson1DetectedJsonFormatDescriptor(output.JsonFormatDescriptor, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DetectedJsonFormatDescriptor = (
  output: any,
  context: __SerdeContext
): DetectedJsonFormatDescriptor => {
  return {
    Charset:
      output.Charset !== undefined && output.Charset !== null
        ? deserializeAws_restJson1DetectedField(output.Charset, context)
        : undefined,
    FileCompression:
      output.FileCompression !== undefined && output.FileCompression !== null
        ? deserializeAws_restJson1DetectedField(output.FileCompression, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DetectedMetricSetConfig = (
  output: any,
  context: __SerdeContext
): DetectedMetricSetConfig => {
  return {
    MetricSetFrequency:
      output.MetricSetFrequency !== undefined && output.MetricSetFrequency !== null
        ? deserializeAws_restJson1DetectedField(output.MetricSetFrequency, context)
        : undefined,
    MetricSource:
      output.MetricSource !== undefined && output.MetricSource !== null
        ? deserializeAws_restJson1DetectedMetricSource(output.MetricSource, context)
        : undefined,
    Offset:
      output.Offset !== undefined && output.Offset !== null
        ? deserializeAws_restJson1DetectedField(output.Offset, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DetectedMetricSource = (output: any, context: __SerdeContext): DetectedMetricSource => {
  return {
    S3SourceConfig:
      output.S3SourceConfig !== undefined && output.S3SourceConfig !== null
        ? deserializeAws_restJson1DetectedS3SourceConfig(output.S3SourceConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DetectedS3SourceConfig = (
  output: any,
  context: __SerdeContext
): DetectedS3SourceConfig => {
  return {
    FileFormatDescriptor:
      output.FileFormatDescriptor !== undefined && output.FileFormatDescriptor !== null
        ? deserializeAws_restJson1DetectedFileFormatDescriptor(output.FileFormatDescriptor, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DimensionContribution = (output: any, context: __SerdeContext): DimensionContribution => {
  return {
    DimensionName: __expectString(output.DimensionName),
    DimensionValueContributionList:
      output.DimensionValueContributionList !== undefined && output.DimensionValueContributionList !== null
        ? deserializeAws_restJson1DimensionValueContributionList(output.DimensionValueContributionList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DimensionContributionList = (
  output: any,
  context: __SerdeContext
): DimensionContribution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DimensionContribution(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DimensionFilter = (output: any, context: __SerdeContext): DimensionFilter => {
  return {
    DimensionName: __expectString(output.DimensionName),
    DimensionValueList:
      output.DimensionValueList !== undefined && output.DimensionValueList !== null
        ? deserializeAws_restJson1DimensionValueList(output.DimensionValueList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DimensionFilterList = (output: any, context: __SerdeContext): DimensionFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DimensionFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DimensionList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1DimensionNameValue = (output: any, context: __SerdeContext): DimensionNameValue => {
  return {
    DimensionName: __expectString(output.DimensionName),
    DimensionValue: __expectString(output.DimensionValue),
  } as any;
};

const deserializeAws_restJson1DimensionNameValueList = (output: any, context: __SerdeContext): DimensionNameValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DimensionNameValue(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DimensionValueContribution = (
  output: any,
  context: __SerdeContext
): DimensionValueContribution => {
  return {
    ContributionScore: __limitedParseDouble(output.ContributionScore),
    DimensionValue: __expectString(output.DimensionValue),
  } as any;
};

const deserializeAws_restJson1DimensionValueContributionList = (
  output: any,
  context: __SerdeContext
): DimensionValueContribution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DimensionValueContribution(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DimensionValueList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ExecutionList = (output: any, context: __SerdeContext): ExecutionStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ExecutionStatus(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ExecutionStatus = (output: any, context: __SerdeContext): ExecutionStatus => {
  return {
    FailureReason: __expectString(output.FailureReason),
    Status: __expectString(output.Status),
    Timestamp: __expectString(output.Timestamp),
  } as any;
};

const deserializeAws_restJson1FileFormatDescriptor = (output: any, context: __SerdeContext): FileFormatDescriptor => {
  return {
    CsvFormatDescriptor:
      output.CsvFormatDescriptor !== undefined && output.CsvFormatDescriptor !== null
        ? deserializeAws_restJson1CsvFormatDescriptor(output.CsvFormatDescriptor, context)
        : undefined,
    JsonFormatDescriptor:
      output.JsonFormatDescriptor !== undefined && output.JsonFormatDescriptor !== null
        ? deserializeAws_restJson1JsonFormatDescriptor(output.JsonFormatDescriptor, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1HeaderList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1HeaderValueList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1HistoricalDataPathList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1InterMetricImpactDetails = (
  output: any,
  context: __SerdeContext
): InterMetricImpactDetails => {
  return {
    AnomalyGroupId: __expectString(output.AnomalyGroupId),
    ContributionPercentage: __limitedParseDouble(output.ContributionPercentage),
    MetricName: __expectString(output.MetricName),
    RelationshipType: __expectString(output.RelationshipType),
  } as any;
};

const deserializeAws_restJson1InterMetricImpactList = (
  output: any,
  context: __SerdeContext
): InterMetricImpactDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InterMetricImpactDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ItemizedMetricStats = (output: any, context: __SerdeContext): ItemizedMetricStats => {
  return {
    MetricName: __expectString(output.MetricName),
    OccurrenceCount: __expectInt32(output.OccurrenceCount),
  } as any;
};

const deserializeAws_restJson1ItemizedMetricStatsList = (
  output: any,
  context: __SerdeContext
): ItemizedMetricStats[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ItemizedMetricStats(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1JsonFormatDescriptor = (output: any, context: __SerdeContext): JsonFormatDescriptor => {
  return {
    Charset: __expectString(output.Charset),
    FileCompression: __expectString(output.FileCompression),
  } as any;
};

const deserializeAws_restJson1LambdaConfiguration = (output: any, context: __SerdeContext): LambdaConfiguration => {
  return {
    LambdaArn: __expectString(output.LambdaArn),
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

const deserializeAws_restJson1Metric = (output: any, context: __SerdeContext): Metric => {
  return {
    AggregationFunction: __expectString(output.AggregationFunction),
    MetricName: __expectString(output.MetricName),
    Namespace: __expectString(output.Namespace),
  } as any;
};

const deserializeAws_restJson1MetricLevelImpact = (output: any, context: __SerdeContext): MetricLevelImpact => {
  return {
    ContributionMatrix:
      output.ContributionMatrix !== undefined && output.ContributionMatrix !== null
        ? deserializeAws_restJson1ContributionMatrix(output.ContributionMatrix, context)
        : undefined,
    MetricName: __expectString(output.MetricName),
    NumTimeSeries: __expectInt32(output.NumTimeSeries),
  } as any;
};

const deserializeAws_restJson1MetricLevelImpactList = (output: any, context: __SerdeContext): MetricLevelImpact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MetricLevelImpact(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MetricList = (output: any, context: __SerdeContext): Metric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Metric(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MetricNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1MetricSetSummary = (output: any, context: __SerdeContext): MetricSetSummary => {
  return {
    AnomalyDetectorArn: __expectString(output.AnomalyDetectorArn),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastModificationTime:
      output.LastModificationTime !== undefined && output.LastModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    MetricSetArn: __expectString(output.MetricSetArn),
    MetricSetDescription: __expectString(output.MetricSetDescription),
    MetricSetName: __expectString(output.MetricSetName),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MetricSetSummaryList = (output: any, context: __SerdeContext): MetricSetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MetricSetSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MetricSource = (output: any, context: __SerdeContext): MetricSource => {
  return {
    AppFlowConfig:
      output.AppFlowConfig !== undefined && output.AppFlowConfig !== null
        ? deserializeAws_restJson1AppFlowConfig(output.AppFlowConfig, context)
        : undefined,
    AthenaSourceConfig:
      output.AthenaSourceConfig !== undefined && output.AthenaSourceConfig !== null
        ? deserializeAws_restJson1AthenaSourceConfig(output.AthenaSourceConfig, context)
        : undefined,
    CloudWatchConfig:
      output.CloudWatchConfig !== undefined && output.CloudWatchConfig !== null
        ? deserializeAws_restJson1CloudWatchConfig(output.CloudWatchConfig, context)
        : undefined,
    RDSSourceConfig:
      output.RDSSourceConfig !== undefined && output.RDSSourceConfig !== null
        ? deserializeAws_restJson1RDSSourceConfig(output.RDSSourceConfig, context)
        : undefined,
    RedshiftSourceConfig:
      output.RedshiftSourceConfig !== undefined && output.RedshiftSourceConfig !== null
        ? deserializeAws_restJson1RedshiftSourceConfig(output.RedshiftSourceConfig, context)
        : undefined,
    S3SourceConfig:
      output.S3SourceConfig !== undefined && output.S3SourceConfig !== null
        ? deserializeAws_restJson1S3SourceConfig(output.S3SourceConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MetricValueList = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1NumberListAttributeValue = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1RDSSourceConfig = (output: any, context: __SerdeContext): RDSSourceConfig => {
  return {
    DBInstanceIdentifier: __expectString(output.DBInstanceIdentifier),
    DatabaseHost: __expectString(output.DatabaseHost),
    DatabaseName: __expectString(output.DatabaseName),
    DatabasePort: __expectInt32(output.DatabasePort),
    RoleArn: __expectString(output.RoleArn),
    SecretManagerArn: __expectString(output.SecretManagerArn),
    TableName: __expectString(output.TableName),
    VpcConfiguration:
      output.VpcConfiguration !== undefined && output.VpcConfiguration !== null
        ? deserializeAws_restJson1VpcConfiguration(output.VpcConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RedshiftSourceConfig = (output: any, context: __SerdeContext): RedshiftSourceConfig => {
  return {
    ClusterIdentifier: __expectString(output.ClusterIdentifier),
    DatabaseHost: __expectString(output.DatabaseHost),
    DatabaseName: __expectString(output.DatabaseName),
    DatabasePort: __expectInt32(output.DatabasePort),
    RoleArn: __expectString(output.RoleArn),
    SecretManagerArn: __expectString(output.SecretManagerArn),
    TableName: __expectString(output.TableName),
    VpcConfiguration:
      output.VpcConfiguration !== undefined && output.VpcConfiguration !== null
        ? deserializeAws_restJson1VpcConfiguration(output.VpcConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1S3SourceConfig = (output: any, context: __SerdeContext): S3SourceConfig => {
  return {
    FileFormatDescriptor:
      output.FileFormatDescriptor !== undefined && output.FileFormatDescriptor !== null
        ? deserializeAws_restJson1FileFormatDescriptor(output.FileFormatDescriptor, context)
        : undefined,
    HistoricalDataPathList:
      output.HistoricalDataPathList !== undefined && output.HistoricalDataPathList !== null
        ? deserializeAws_restJson1HistoricalDataPathList(output.HistoricalDataPathList, context)
        : undefined,
    RoleArn: __expectString(output.RoleArn),
    TemplatedPathList:
      output.TemplatedPathList !== undefined && output.TemplatedPathList !== null
        ? deserializeAws_restJson1TemplatedPathList(output.TemplatedPathList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SampleRow = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SampleRows = (output: any, context: __SerdeContext): string[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SampleRow(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SNSConfiguration = (output: any, context: __SerdeContext): SNSConfiguration => {
  return {
    RoleArn: __expectString(output.RoleArn),
    SnsFormat: __expectString(output.SnsFormat),
    SnsTopicArn: __expectString(output.SnsTopicArn),
  } as any;
};

const deserializeAws_restJson1StringListAttributeValue = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SubnetIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1TemplatedPathList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1TimeSeries = (output: any, context: __SerdeContext): TimeSeries => {
  return {
    DimensionList:
      output.DimensionList !== undefined && output.DimensionList !== null
        ? deserializeAws_restJson1DimensionNameValueList(output.DimensionList, context)
        : undefined,
    MetricValueList:
      output.MetricValueList !== undefined && output.MetricValueList !== null
        ? deserializeAws_restJson1MetricValueList(output.MetricValueList, context)
        : undefined,
    TimeSeriesId: __expectString(output.TimeSeriesId),
  } as any;
};

const deserializeAws_restJson1TimeSeriesFeedback = (output: any, context: __SerdeContext): TimeSeriesFeedback => {
  return {
    IsAnomaly: __expectBoolean(output.IsAnomaly),
    TimeSeriesId: __expectString(output.TimeSeriesId),
  } as any;
};

const deserializeAws_restJson1TimeSeriesFeedbackList = (output: any, context: __SerdeContext): TimeSeriesFeedback[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TimeSeriesFeedback(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TimeSeriesList = (output: any, context: __SerdeContext): TimeSeries[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TimeSeries(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TimestampColumn = (output: any, context: __SerdeContext): TimestampColumn => {
  return {
    ColumnFormat: __expectString(output.ColumnFormat),
    ColumnName: __expectString(output.ColumnName),
  } as any;
};

const deserializeAws_restJson1TimestampList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
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

const deserializeAws_restJson1VpcConfiguration = (output: any, context: __SerdeContext): VpcConfiguration => {
  return {
    SecurityGroupIdList:
      output.SecurityGroupIdList !== undefined && output.SecurityGroupIdList !== null
        ? deserializeAws_restJson1SecurityGroupIdList(output.SecurityGroupIdList, context)
        : undefined,
    SubnetIdList:
      output.SubnetIdList !== undefined && output.SubnetIdList !== null
        ? deserializeAws_restJson1SubnetIdList(output.SubnetIdList, context)
        : undefined,
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
