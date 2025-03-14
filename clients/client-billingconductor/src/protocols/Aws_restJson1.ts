// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  serializeFloat as __serializeFloat,
  strictParseInt32 as __strictParseInt32,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { AssociateAccountsCommandInput, AssociateAccountsCommandOutput } from "../commands/AssociateAccountsCommand";
import {
  AssociatePricingRulesCommandInput,
  AssociatePricingRulesCommandOutput,
} from "../commands/AssociatePricingRulesCommand";
import {
  BatchAssociateResourcesToCustomLineItemCommandInput,
  BatchAssociateResourcesToCustomLineItemCommandOutput,
} from "../commands/BatchAssociateResourcesToCustomLineItemCommand";
import {
  BatchDisassociateResourcesFromCustomLineItemCommandInput,
  BatchDisassociateResourcesFromCustomLineItemCommandOutput,
} from "../commands/BatchDisassociateResourcesFromCustomLineItemCommand";
import { CreateBillingGroupCommandInput, CreateBillingGroupCommandOutput } from "../commands/CreateBillingGroupCommand";
import {
  CreateCustomLineItemCommandInput,
  CreateCustomLineItemCommandOutput,
} from "../commands/CreateCustomLineItemCommand";
import { CreatePricingPlanCommandInput, CreatePricingPlanCommandOutput } from "../commands/CreatePricingPlanCommand";
import { CreatePricingRuleCommandInput, CreatePricingRuleCommandOutput } from "../commands/CreatePricingRuleCommand";
import { DeleteBillingGroupCommandInput, DeleteBillingGroupCommandOutput } from "../commands/DeleteBillingGroupCommand";
import {
  DeleteCustomLineItemCommandInput,
  DeleteCustomLineItemCommandOutput,
} from "../commands/DeleteCustomLineItemCommand";
import { DeletePricingPlanCommandInput, DeletePricingPlanCommandOutput } from "../commands/DeletePricingPlanCommand";
import { DeletePricingRuleCommandInput, DeletePricingRuleCommandOutput } from "../commands/DeletePricingRuleCommand";
import {
  DisassociateAccountsCommandInput,
  DisassociateAccountsCommandOutput,
} from "../commands/DisassociateAccountsCommand";
import {
  DisassociatePricingRulesCommandInput,
  DisassociatePricingRulesCommandOutput,
} from "../commands/DisassociatePricingRulesCommand";
import {
  ListAccountAssociationsCommandInput,
  ListAccountAssociationsCommandOutput,
} from "../commands/ListAccountAssociationsCommand";
import {
  ListBillingGroupCostReportsCommandInput,
  ListBillingGroupCostReportsCommandOutput,
} from "../commands/ListBillingGroupCostReportsCommand";
import { ListBillingGroupsCommandInput, ListBillingGroupsCommandOutput } from "../commands/ListBillingGroupsCommand";
import {
  ListCustomLineItemsCommandInput,
  ListCustomLineItemsCommandOutput,
} from "../commands/ListCustomLineItemsCommand";
import {
  ListPricingPlansAssociatedWithPricingRuleCommandInput,
  ListPricingPlansAssociatedWithPricingRuleCommandOutput,
} from "../commands/ListPricingPlansAssociatedWithPricingRuleCommand";
import { ListPricingPlansCommandInput, ListPricingPlansCommandOutput } from "../commands/ListPricingPlansCommand";
import {
  ListPricingRulesAssociatedToPricingPlanCommandInput,
  ListPricingRulesAssociatedToPricingPlanCommandOutput,
} from "../commands/ListPricingRulesAssociatedToPricingPlanCommand";
import { ListPricingRulesCommandInput, ListPricingRulesCommandOutput } from "../commands/ListPricingRulesCommand";
import {
  ListResourcesAssociatedToCustomLineItemCommandInput,
  ListResourcesAssociatedToCustomLineItemCommandOutput,
} from "../commands/ListResourcesAssociatedToCustomLineItemCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateBillingGroupCommandInput, UpdateBillingGroupCommandOutput } from "../commands/UpdateBillingGroupCommand";
import {
  UpdateCustomLineItemCommandInput,
  UpdateCustomLineItemCommandOutput,
} from "../commands/UpdateCustomLineItemCommand";
import { UpdatePricingPlanCommandInput, UpdatePricingPlanCommandOutput } from "../commands/UpdatePricingPlanCommand";
import { UpdatePricingRuleCommandInput, UpdatePricingRuleCommandOutput } from "../commands/UpdatePricingRuleCommand";
import { BillingconductorServiceException as __BaseException } from "../models/BillingconductorServiceException";
import {
  AccessDeniedException,
  AccountAssociationsListElement,
  AccountGrouping,
  AssociateResourceError,
  AssociateResourceResponseElement,
  BillingGroupCostReportElement,
  BillingGroupListElement,
  ComputationPreference,
  ConflictException,
  CustomLineItemBillingPeriodRange,
  CustomLineItemChargeDetails,
  CustomLineItemFlatChargeDetails,
  CustomLineItemListElement,
  CustomLineItemPercentageChargeDetails,
  DisassociateResourceResponseElement,
  InternalServerException,
  ListAccountAssociationsFilter,
  ListBillingGroupCostReportsFilter,
  ListBillingGroupsFilter,
  ListCustomLineItemChargeDetails,
  ListCustomLineItemFlatChargeDetails,
  ListCustomLineItemPercentageChargeDetails,
  ListCustomLineItemsFilter,
  ListPricingPlansFilter,
  ListPricingRulesFilter,
  ListResourcesAssociatedToCustomLineItemFilter,
  ListResourcesAssociatedToCustomLineItemResponseElement,
  PricingPlanListElement,
  PricingRuleListElement,
  ResourceNotFoundException,
  ServiceLimitExceededException,
  ThrottlingException,
  UpdateCustomLineItemChargeDetails,
  UpdateCustomLineItemFlatChargeDetails,
  UpdateCustomLineItemPercentageChargeDetails,
  ValidationException,
  ValidationExceptionField,
} from "../models/models_0";

export const serializeAws_restJson1AssociateAccountsCommand = async (
  input: AssociateAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/associate-accounts";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) }),
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
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

export const serializeAws_restJson1AssociatePricingRulesCommand = async (
  input: AssociatePricingRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/associate-pricing-rules";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.PricingRuleArns !== undefined &&
      input.PricingRuleArns !== null && {
        PricingRuleArns: serializeAws_restJson1PricingRuleArnsNonEmptyInput(input.PricingRuleArns, context),
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

export const serializeAws_restJson1BatchAssociateResourcesToCustomLineItemCommand = async (
  input: BatchAssociateResourcesToCustomLineItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/batch-associate-resources-to-custom-line-item";
  let body: any;
  body = JSON.stringify({
    ...(input.BillingPeriodRange !== undefined &&
      input.BillingPeriodRange !== null && {
        BillingPeriodRange: serializeAws_restJson1CustomLineItemBillingPeriodRange(input.BillingPeriodRange, context),
      }),
    ...(input.ResourceArns !== undefined &&
      input.ResourceArns !== null && {
        ResourceArns: serializeAws_restJson1CustomLineItemBatchAssociationsList(input.ResourceArns, context),
      }),
    ...(input.TargetArn !== undefined && input.TargetArn !== null && { TargetArn: input.TargetArn }),
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

export const serializeAws_restJson1BatchDisassociateResourcesFromCustomLineItemCommand = async (
  input: BatchDisassociateResourcesFromCustomLineItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/batch-disassociate-resources-from-custom-line-item";
  let body: any;
  body = JSON.stringify({
    ...(input.BillingPeriodRange !== undefined &&
      input.BillingPeriodRange !== null && {
        BillingPeriodRange: serializeAws_restJson1CustomLineItemBillingPeriodRange(input.BillingPeriodRange, context),
      }),
    ...(input.ResourceArns !== undefined &&
      input.ResourceArns !== null && {
        ResourceArns: serializeAws_restJson1CustomLineItemBatchDisassociationsList(input.ResourceArns, context),
      }),
    ...(input.TargetArn !== undefined && input.TargetArn !== null && { TargetArn: input.TargetArn }),
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

export const serializeAws_restJson1CreateBillingGroupCommand = async (
  input: CreateBillingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.ClientToken) && { "x-amzn-client-token": input.ClientToken! }),
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/create-billing-group";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountGrouping !== undefined &&
      input.AccountGrouping !== null && {
        AccountGrouping: serializeAws_restJson1AccountGrouping(input.AccountGrouping, context),
      }),
    ...(input.ComputationPreference !== undefined &&
      input.ComputationPreference !== null && {
        ComputationPreference: serializeAws_restJson1ComputationPreference(input.ComputationPreference, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.PrimaryAccountId !== undefined &&
      input.PrimaryAccountId !== null && { PrimaryAccountId: input.PrimaryAccountId }),
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

export const serializeAws_restJson1CreateCustomLineItemCommand = async (
  input: CreateCustomLineItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.ClientToken) && { "x-amzn-client-token": input.ClientToken! }),
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/create-custom-line-item";
  let body: any;
  body = JSON.stringify({
    ...(input.BillingGroupArn !== undefined &&
      input.BillingGroupArn !== null && { BillingGroupArn: input.BillingGroupArn }),
    ...(input.BillingPeriodRange !== undefined &&
      input.BillingPeriodRange !== null && {
        BillingPeriodRange: serializeAws_restJson1CustomLineItemBillingPeriodRange(input.BillingPeriodRange, context),
      }),
    ...(input.ChargeDetails !== undefined &&
      input.ChargeDetails !== null && {
        ChargeDetails: serializeAws_restJson1CustomLineItemChargeDetails(input.ChargeDetails, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
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

export const serializeAws_restJson1CreatePricingPlanCommand = async (
  input: CreatePricingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.ClientToken) && { "x-amzn-client-token": input.ClientToken! }),
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/create-pricing-plan";
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.PricingRuleArns !== undefined &&
      input.PricingRuleArns !== null && {
        PricingRuleArns: serializeAws_restJson1PricingRuleArnsInput(input.PricingRuleArns, context),
      }),
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

export const serializeAws_restJson1CreatePricingRuleCommand = async (
  input: CreatePricingRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.ClientToken) && { "x-amzn-client-token": input.ClientToken! }),
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/create-pricing-rule";
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.ModifierPercentage !== undefined &&
      input.ModifierPercentage !== null && { ModifierPercentage: __serializeFloat(input.ModifierPercentage) }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    ...(input.Service !== undefined && input.Service !== null && { Service: input.Service }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
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

export const serializeAws_restJson1DeleteBillingGroupCommand = async (
  input: DeleteBillingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/delete-billing-group";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
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

export const serializeAws_restJson1DeleteCustomLineItemCommand = async (
  input: DeleteCustomLineItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/delete-custom-line-item";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.BillingPeriodRange !== undefined &&
      input.BillingPeriodRange !== null && {
        BillingPeriodRange: serializeAws_restJson1CustomLineItemBillingPeriodRange(input.BillingPeriodRange, context),
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

export const serializeAws_restJson1DeletePricingPlanCommand = async (
  input: DeletePricingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/delete-pricing-plan";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
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

export const serializeAws_restJson1DeletePricingRuleCommand = async (
  input: DeletePricingRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/delete-pricing-rule";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
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

export const serializeAws_restJson1DisassociateAccountsCommand = async (
  input: DisassociateAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/disassociate-accounts";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) }),
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
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

export const serializeAws_restJson1DisassociatePricingRulesCommand = async (
  input: DisassociatePricingRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/disassociate-pricing-rules";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.PricingRuleArns !== undefined &&
      input.PricingRuleArns !== null && {
        PricingRuleArns: serializeAws_restJson1PricingRuleArnsNonEmptyInput(input.PricingRuleArns, context),
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

export const serializeAws_restJson1ListAccountAssociationsCommand = async (
  input: ListAccountAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-account-associations";
  let body: any;
  body = JSON.stringify({
    ...(input.BillingPeriod !== undefined && input.BillingPeriod !== null && { BillingPeriod: input.BillingPeriod }),
    ...(input.Filters !== undefined &&
      input.Filters !== null && {
        Filters: serializeAws_restJson1ListAccountAssociationsFilter(input.Filters, context),
      }),
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

export const serializeAws_restJson1ListBillingGroupCostReportsCommand = async (
  input: ListBillingGroupCostReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-billing-group-cost-reports";
  let body: any;
  body = JSON.stringify({
    ...(input.BillingPeriod !== undefined && input.BillingPeriod !== null && { BillingPeriod: input.BillingPeriod }),
    ...(input.Filters !== undefined &&
      input.Filters !== null && {
        Filters: serializeAws_restJson1ListBillingGroupCostReportsFilter(input.Filters, context),
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

export const serializeAws_restJson1ListBillingGroupsCommand = async (
  input: ListBillingGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-billing-groups";
  let body: any;
  body = JSON.stringify({
    ...(input.BillingPeriod !== undefined && input.BillingPeriod !== null && { BillingPeriod: input.BillingPeriod }),
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_restJson1ListBillingGroupsFilter(input.Filters, context) }),
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

export const serializeAws_restJson1ListCustomLineItemsCommand = async (
  input: ListCustomLineItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-custom-line-items";
  let body: any;
  body = JSON.stringify({
    ...(input.BillingPeriod !== undefined && input.BillingPeriod !== null && { BillingPeriod: input.BillingPeriod }),
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_restJson1ListCustomLineItemsFilter(input.Filters, context) }),
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

export const serializeAws_restJson1ListPricingPlansCommand = async (
  input: ListPricingPlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-pricing-plans";
  let body: any;
  body = JSON.stringify({
    ...(input.BillingPeriod !== undefined && input.BillingPeriod !== null && { BillingPeriod: input.BillingPeriod }),
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_restJson1ListPricingPlansFilter(input.Filters, context) }),
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

export const serializeAws_restJson1ListPricingPlansAssociatedWithPricingRuleCommand = async (
  input: ListPricingPlansAssociatedWithPricingRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/list-pricing-plans-associated-with-pricing-rule";
  let body: any;
  body = JSON.stringify({
    ...(input.BillingPeriod !== undefined && input.BillingPeriod !== null && { BillingPeriod: input.BillingPeriod }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.PricingRuleArn !== undefined &&
      input.PricingRuleArn !== null && { PricingRuleArn: input.PricingRuleArn }),
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

export const serializeAws_restJson1ListPricingRulesCommand = async (
  input: ListPricingRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-pricing-rules";
  let body: any;
  body = JSON.stringify({
    ...(input.BillingPeriod !== undefined && input.BillingPeriod !== null && { BillingPeriod: input.BillingPeriod }),
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_restJson1ListPricingRulesFilter(input.Filters, context) }),
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

export const serializeAws_restJson1ListPricingRulesAssociatedToPricingPlanCommand = async (
  input: ListPricingRulesAssociatedToPricingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/list-pricing-rules-associated-to-pricing-plan";
  let body: any;
  body = JSON.stringify({
    ...(input.BillingPeriod !== undefined && input.BillingPeriod !== null && { BillingPeriod: input.BillingPeriod }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.PricingPlanArn !== undefined &&
      input.PricingPlanArn !== null && { PricingPlanArn: input.PricingPlanArn }),
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

export const serializeAws_restJson1ListResourcesAssociatedToCustomLineItemCommand = async (
  input: ListResourcesAssociatedToCustomLineItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/list-resources-associated-to-custom-line-item";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.BillingPeriod !== undefined && input.BillingPeriod !== null && { BillingPeriod: input.BillingPeriod }),
    ...(input.Filters !== undefined &&
      input.Filters !== null && {
        Filters: serializeAws_restJson1ListResourcesAssociatedToCustomLineItemFilter(input.Filters, context),
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

export const serializeAws_restJson1UpdateBillingGroupCommand = async (
  input: UpdateBillingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/update-billing-group";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.ComputationPreference !== undefined &&
      input.ComputationPreference !== null && {
        ComputationPreference: serializeAws_restJson1ComputationPreference(input.ComputationPreference, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
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

export const serializeAws_restJson1UpdateCustomLineItemCommand = async (
  input: UpdateCustomLineItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/update-custom-line-item";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.BillingPeriodRange !== undefined &&
      input.BillingPeriodRange !== null && {
        BillingPeriodRange: serializeAws_restJson1CustomLineItemBillingPeriodRange(input.BillingPeriodRange, context),
      }),
    ...(input.ChargeDetails !== undefined &&
      input.ChargeDetails !== null && {
        ChargeDetails: serializeAws_restJson1UpdateCustomLineItemChargeDetails(input.ChargeDetails, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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

export const serializeAws_restJson1UpdatePricingPlanCommand = async (
  input: UpdatePricingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/update-pricing-plan";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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

export const serializeAws_restJson1UpdatePricingRuleCommand = async (
  input: UpdatePricingRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/update-pricing-rule";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.ModifierPercentage !== undefined &&
      input.ModifierPercentage !== null && { ModifierPercentage: __serializeFloat(input.ModifierPercentage) }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
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

export const deserializeAws_restJson1AssociateAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateAccountsCommandError(output, context);
  }
  const contents: AssociateAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AssociateAccountsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAccountsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.billingconductor#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.billingconductor#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.billingconductor#ServiceLimitExceededException":
      throw await deserializeAws_restJson1ServiceLimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1AssociatePricingRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePricingRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociatePricingRulesCommandError(output, context);
  }
  const contents: AssociatePricingRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AssociatePricingRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePricingRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.billingconductor#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.billingconductor#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.billingconductor#ServiceLimitExceededException":
      throw await deserializeAws_restJson1ServiceLimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1BatchAssociateResourcesToCustomLineItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateResourcesToCustomLineItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchAssociateResourcesToCustomLineItemCommandError(output, context);
  }
  const contents: BatchAssociateResourcesToCustomLineItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    FailedAssociatedResources: undefined,
    SuccessfullyAssociatedResources: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FailedAssociatedResources !== undefined && data.FailedAssociatedResources !== null) {
    contents.FailedAssociatedResources = deserializeAws_restJson1AssociateResourcesResponseList(
      data.FailedAssociatedResources,
      context
    );
  }
  if (data.SuccessfullyAssociatedResources !== undefined && data.SuccessfullyAssociatedResources !== null) {
    contents.SuccessfullyAssociatedResources = deserializeAws_restJson1AssociateResourcesResponseList(
      data.SuccessfullyAssociatedResources,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchAssociateResourcesToCustomLineItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateResourcesToCustomLineItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.billingconductor#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.billingconductor#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.billingconductor#ServiceLimitExceededException":
      throw await deserializeAws_restJson1ServiceLimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1BatchDisassociateResourcesFromCustomLineItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateResourcesFromCustomLineItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchDisassociateResourcesFromCustomLineItemCommandError(output, context);
  }
  const contents: BatchDisassociateResourcesFromCustomLineItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    FailedDisassociatedResources: undefined,
    SuccessfullyDisassociatedResources: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FailedDisassociatedResources !== undefined && data.FailedDisassociatedResources !== null) {
    contents.FailedDisassociatedResources = deserializeAws_restJson1DisassociateResourcesResponseList(
      data.FailedDisassociatedResources,
      context
    );
  }
  if (data.SuccessfullyDisassociatedResources !== undefined && data.SuccessfullyDisassociatedResources !== null) {
    contents.SuccessfullyDisassociatedResources = deserializeAws_restJson1DisassociateResourcesResponseList(
      data.SuccessfullyDisassociatedResources,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchDisassociateResourcesFromCustomLineItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateResourcesFromCustomLineItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.billingconductor#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.billingconductor#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1CreateBillingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBillingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBillingGroupCommandError(output, context);
  }
  const contents: CreateBillingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateBillingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBillingGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.billingconductor#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.billingconductor#ServiceLimitExceededException":
      throw await deserializeAws_restJson1ServiceLimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1CreateCustomLineItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomLineItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCustomLineItemCommandError(output, context);
  }
  const contents: CreateCustomLineItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateCustomLineItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomLineItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.billingconductor#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.billingconductor#ServiceLimitExceededException":
      throw await deserializeAws_restJson1ServiceLimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1CreatePricingPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePricingPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePricingPlanCommandError(output, context);
  }
  const contents: CreatePricingPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreatePricingPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePricingPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.billingconductor#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.billingconductor#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.billingconductor#ServiceLimitExceededException":
      throw await deserializeAws_restJson1ServiceLimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1CreatePricingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePricingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePricingRuleCommandError(output, context);
  }
  const contents: CreatePricingRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreatePricingRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePricingRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.billingconductor#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.billingconductor#ServiceLimitExceededException":
      throw await deserializeAws_restJson1ServiceLimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1DeleteBillingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBillingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBillingGroupCommandError(output, context);
  }
  const contents: DeleteBillingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteBillingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBillingGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1DeleteCustomLineItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomLineItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCustomLineItemCommandError(output, context);
  }
  const contents: DeleteCustomLineItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteCustomLineItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomLineItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.billingconductor#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1DeletePricingPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePricingPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePricingPlanCommandError(output, context);
  }
  const contents: DeletePricingPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeletePricingPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePricingPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.billingconductor#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1DeletePricingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePricingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePricingRuleCommandError(output, context);
  }
  const contents: DeletePricingRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeletePricingRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePricingRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.billingconductor#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1DisassociateAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateAccountsCommandError(output, context);
  }
  const contents: DisassociateAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateAccountsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAccountsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.billingconductor#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.billingconductor#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1DisassociatePricingRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePricingRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociatePricingRulesCommandError(output, context);
  }
  const contents: DisassociatePricingRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociatePricingRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePricingRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.billingconductor#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.billingconductor#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1ListAccountAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAccountAssociationsCommandError(output, context);
  }
  const contents: ListAccountAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    LinkedAccounts: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LinkedAccounts !== undefined && data.LinkedAccounts !== null) {
    contents.LinkedAccounts = deserializeAws_restJson1AccountAssociationsList(data.LinkedAccounts, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAccountAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.billingconductor#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1ListBillingGroupCostReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBillingGroupCostReportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBillingGroupCostReportsCommandError(output, context);
  }
  const contents: ListBillingGroupCostReportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    BillingGroupCostReports: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BillingGroupCostReports !== undefined && data.BillingGroupCostReports !== null) {
    contents.BillingGroupCostReports = deserializeAws_restJson1BillingGroupCostReportList(
      data.BillingGroupCostReports,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListBillingGroupCostReportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBillingGroupCostReportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.billingconductor#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1ListBillingGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBillingGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBillingGroupsCommandError(output, context);
  }
  const contents: ListBillingGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    BillingGroups: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BillingGroups !== undefined && data.BillingGroups !== null) {
    contents.BillingGroups = deserializeAws_restJson1BillingGroupList(data.BillingGroups, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListBillingGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBillingGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.billingconductor#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1ListCustomLineItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomLineItemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCustomLineItemsCommandError(output, context);
  }
  const contents: ListCustomLineItemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    CustomLineItems: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CustomLineItems !== undefined && data.CustomLineItems !== null) {
    contents.CustomLineItems = deserializeAws_restJson1CustomLineItemList(data.CustomLineItems, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListCustomLineItemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomLineItemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.billingconductor#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1ListPricingPlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPricingPlansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPricingPlansCommandError(output, context);
  }
  const contents: ListPricingPlansCommandOutput = {
    $metadata: deserializeMetadata(output),
    BillingPeriod: undefined,
    NextToken: undefined,
    PricingPlans: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BillingPeriod !== undefined && data.BillingPeriod !== null) {
    contents.BillingPeriod = __expectString(data.BillingPeriod);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PricingPlans !== undefined && data.PricingPlans !== null) {
    contents.PricingPlans = deserializeAws_restJson1PricingPlanList(data.PricingPlans, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPricingPlansCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPricingPlansCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1ListPricingPlansAssociatedWithPricingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPricingPlansAssociatedWithPricingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPricingPlansAssociatedWithPricingRuleCommandError(output, context);
  }
  const contents: ListPricingPlansAssociatedWithPricingRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    BillingPeriod: undefined,
    NextToken: undefined,
    PricingPlanArns: undefined,
    PricingRuleArn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BillingPeriod !== undefined && data.BillingPeriod !== null) {
    contents.BillingPeriod = __expectString(data.BillingPeriod);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PricingPlanArns !== undefined && data.PricingPlanArns !== null) {
    contents.PricingPlanArns = deserializeAws_restJson1PricingPlanArns(data.PricingPlanArns, context);
  }
  if (data.PricingRuleArn !== undefined && data.PricingRuleArn !== null) {
    contents.PricingRuleArn = __expectString(data.PricingRuleArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPricingPlansAssociatedWithPricingRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPricingPlansAssociatedWithPricingRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.billingconductor#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1ListPricingRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPricingRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPricingRulesCommandError(output, context);
  }
  const contents: ListPricingRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    BillingPeriod: undefined,
    NextToken: undefined,
    PricingRules: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BillingPeriod !== undefined && data.BillingPeriod !== null) {
    contents.BillingPeriod = __expectString(data.BillingPeriod);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PricingRules !== undefined && data.PricingRules !== null) {
    contents.PricingRules = deserializeAws_restJson1PricingRuleList(data.PricingRules, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPricingRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPricingRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1ListPricingRulesAssociatedToPricingPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPricingRulesAssociatedToPricingPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPricingRulesAssociatedToPricingPlanCommandError(output, context);
  }
  const contents: ListPricingRulesAssociatedToPricingPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    BillingPeriod: undefined,
    NextToken: undefined,
    PricingPlanArn: undefined,
    PricingRuleArns: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BillingPeriod !== undefined && data.BillingPeriod !== null) {
    contents.BillingPeriod = __expectString(data.BillingPeriod);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PricingPlanArn !== undefined && data.PricingPlanArn !== null) {
    contents.PricingPlanArn = __expectString(data.PricingPlanArn);
  }
  if (data.PricingRuleArns !== undefined && data.PricingRuleArns !== null) {
    contents.PricingRuleArns = deserializeAws_restJson1PricingRuleArns(data.PricingRuleArns, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPricingRulesAssociatedToPricingPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPricingRulesAssociatedToPricingPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.billingconductor#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1ListResourcesAssociatedToCustomLineItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesAssociatedToCustomLineItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListResourcesAssociatedToCustomLineItemCommandError(output, context);
  }
  const contents: ListResourcesAssociatedToCustomLineItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    AssociatedResources: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.AssociatedResources !== undefined && data.AssociatedResources !== null) {
    contents.AssociatedResources = deserializeAws_restJson1ListResourcesAssociatedToCustomLineItemResponseList(
      data.AssociatedResources,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListResourcesAssociatedToCustomLineItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesAssociatedToCustomLineItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.billingconductor#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.billingconductor#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.billingconductor#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.billingconductor#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1UpdateBillingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBillingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBillingGroupCommandError(output, context);
  }
  const contents: UpdateBillingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    Description: undefined,
    LastModifiedTime: undefined,
    Name: undefined,
    PricingPlanArn: undefined,
    PrimaryAccountId: undefined,
    Size: undefined,
    Status: undefined,
    StatusReason: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
    contents.LastModifiedTime = __expectLong(data.LastModifiedTime);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.PricingPlanArn !== undefined && data.PricingPlanArn !== null) {
    contents.PricingPlanArn = __expectString(data.PricingPlanArn);
  }
  if (data.PrimaryAccountId !== undefined && data.PrimaryAccountId !== null) {
    contents.PrimaryAccountId = __expectString(data.PrimaryAccountId);
  }
  if (data.Size !== undefined && data.Size !== null) {
    contents.Size = __expectLong(data.Size);
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.StatusReason !== undefined && data.StatusReason !== null) {
    contents.StatusReason = __expectString(data.StatusReason);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateBillingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBillingGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.billingconductor#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.billingconductor#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1UpdateCustomLineItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomLineItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateCustomLineItemCommandError(output, context);
  }
  const contents: UpdateCustomLineItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    AssociationSize: undefined,
    BillingGroupArn: undefined,
    ChargeDetails: undefined,
    Description: undefined,
    LastModifiedTime: undefined,
    Name: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.AssociationSize !== undefined && data.AssociationSize !== null) {
    contents.AssociationSize = __expectLong(data.AssociationSize);
  }
  if (data.BillingGroupArn !== undefined && data.BillingGroupArn !== null) {
    contents.BillingGroupArn = __expectString(data.BillingGroupArn);
  }
  if (data.ChargeDetails !== undefined && data.ChargeDetails !== null) {
    contents.ChargeDetails = deserializeAws_restJson1ListCustomLineItemChargeDetails(data.ChargeDetails, context);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
    contents.LastModifiedTime = __expectLong(data.LastModifiedTime);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateCustomLineItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomLineItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.billingconductor#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1UpdatePricingPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePricingPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePricingPlanCommandError(output, context);
  }
  const contents: UpdatePricingPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    Description: undefined,
    LastModifiedTime: undefined,
    Name: undefined,
    Size: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
    contents.LastModifiedTime = __expectLong(data.LastModifiedTime);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Size !== undefined && data.Size !== null) {
    contents.Size = __expectLong(data.Size);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdatePricingPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePricingPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.billingconductor#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.billingconductor#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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

export const deserializeAws_restJson1UpdatePricingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePricingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePricingRuleCommandError(output, context);
  }
  const contents: UpdatePricingRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    AssociatedPricingPlanCount: undefined,
    Description: undefined,
    LastModifiedTime: undefined,
    ModifierPercentage: undefined,
    Name: undefined,
    Scope: undefined,
    Service: undefined,
    Type: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.AssociatedPricingPlanCount !== undefined && data.AssociatedPricingPlanCount !== null) {
    contents.AssociatedPricingPlanCount = __expectLong(data.AssociatedPricingPlanCount);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
    contents.LastModifiedTime = __expectLong(data.LastModifiedTime);
  }
  if (data.ModifierPercentage !== undefined && data.ModifierPercentage !== null) {
    contents.ModifierPercentage = __limitedParseDouble(data.ModifierPercentage);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Scope !== undefined && data.Scope !== null) {
    contents.Scope = __expectString(data.Scope);
  }
  if (data.Service !== undefined && data.Service !== null) {
    contents.Service = __expectString(data.Service);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdatePricingRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePricingRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.billingconductor#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.billingconductor#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
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
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.RetryAfterSeconds = __strictParseInt32(parsedOutput.headers["retry-after"]);
  }
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

const deserializeAws_restJson1ServiceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLimitExceededException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.LimitCode !== undefined && data.LimitCode !== null) {
    contents.LimitCode = __expectString(data.LimitCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
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
  const exception = new ServiceLimitExceededException({
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
    contents.RetryAfterSeconds = __strictParseInt32(parsedOutput.headers["retry-after"]);
  }
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
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

const serializeAws_restJson1AccountGrouping = (input: AccountGrouping, context: __SerdeContext): any => {
  return {
    ...(input.LinkedAccountIds !== undefined &&
      input.LinkedAccountIds !== null && {
        LinkedAccountIds: serializeAws_restJson1AccountIdList(input.LinkedAccountIds, context),
      }),
  };
};

const serializeAws_restJson1AccountIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1BillingGroupArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ComputationPreference = (input: ComputationPreference, context: __SerdeContext): any => {
  return {
    ...(input.PricingPlanArn !== undefined &&
      input.PricingPlanArn !== null && { PricingPlanArn: input.PricingPlanArn }),
  };
};

const serializeAws_restJson1CustomLineItemArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1CustomLineItemAssociationsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1CustomLineItemBatchAssociationsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1CustomLineItemBatchDisassociationsList = (
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

const serializeAws_restJson1CustomLineItemBillingPeriodRange = (
  input: CustomLineItemBillingPeriodRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExclusiveEndBillingPeriod !== undefined &&
      input.ExclusiveEndBillingPeriod !== null && { ExclusiveEndBillingPeriod: input.ExclusiveEndBillingPeriod }),
    ...(input.InclusiveStartBillingPeriod !== undefined &&
      input.InclusiveStartBillingPeriod !== null && { InclusiveStartBillingPeriod: input.InclusiveStartBillingPeriod }),
  };
};

const serializeAws_restJson1CustomLineItemChargeDetails = (
  input: CustomLineItemChargeDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Flat !== undefined &&
      input.Flat !== null && { Flat: serializeAws_restJson1CustomLineItemFlatChargeDetails(input.Flat, context) }),
    ...(input.Percentage !== undefined &&
      input.Percentage !== null && {
        Percentage: serializeAws_restJson1CustomLineItemPercentageChargeDetails(input.Percentage, context),
      }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1CustomLineItemFlatChargeDetails = (
  input: CustomLineItemFlatChargeDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChargeValue !== undefined &&
      input.ChargeValue !== null && { ChargeValue: __serializeFloat(input.ChargeValue) }),
  };
};

const serializeAws_restJson1CustomLineItemNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1CustomLineItemPercentageChargeDetails = (
  input: CustomLineItemPercentageChargeDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssociatedValues !== undefined &&
      input.AssociatedValues !== null && {
        AssociatedValues: serializeAws_restJson1CustomLineItemAssociationsList(input.AssociatedValues, context),
      }),
    ...(input.PercentageValue !== undefined &&
      input.PercentageValue !== null && { PercentageValue: __serializeFloat(input.PercentageValue) }),
  };
};

const serializeAws_restJson1ListAccountAssociationsFilter = (
  input: ListAccountAssociationsFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.Association !== undefined && input.Association !== null && { Association: input.Association }),
  };
};

const serializeAws_restJson1ListBillingGroupCostReportsFilter = (
  input: ListBillingGroupCostReportsFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.BillingGroupArns !== undefined &&
      input.BillingGroupArns !== null && {
        BillingGroupArns: serializeAws_restJson1BillingGroupArnList(input.BillingGroupArns, context),
      }),
  };
};

const serializeAws_restJson1ListBillingGroupsFilter = (
  input: ListBillingGroupsFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arns !== undefined &&
      input.Arns !== null && { Arns: serializeAws_restJson1BillingGroupArnList(input.Arns, context) }),
    ...(input.PricingPlan !== undefined && input.PricingPlan !== null && { PricingPlan: input.PricingPlan }),
  };
};

const serializeAws_restJson1ListCustomLineItemsFilter = (
  input: ListCustomLineItemsFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arns !== undefined &&
      input.Arns !== null && { Arns: serializeAws_restJson1CustomLineItemArns(input.Arns, context) }),
    ...(input.BillingGroups !== undefined &&
      input.BillingGroups !== null && {
        BillingGroups: serializeAws_restJson1BillingGroupArnList(input.BillingGroups, context),
      }),
    ...(input.Names !== undefined &&
      input.Names !== null && { Names: serializeAws_restJson1CustomLineItemNameList(input.Names, context) }),
  };
};

const serializeAws_restJson1ListPricingPlansFilter = (input: ListPricingPlansFilter, context: __SerdeContext): any => {
  return {
    ...(input.Arns !== undefined &&
      input.Arns !== null && { Arns: serializeAws_restJson1PricingPlanArns(input.Arns, context) }),
  };
};

const serializeAws_restJson1ListPricingRulesFilter = (input: ListPricingRulesFilter, context: __SerdeContext): any => {
  return {
    ...(input.Arns !== undefined &&
      input.Arns !== null && { Arns: serializeAws_restJson1PricingRuleArns(input.Arns, context) }),
  };
};

const serializeAws_restJson1ListResourcesAssociatedToCustomLineItemFilter = (
  input: ListResourcesAssociatedToCustomLineItemFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Relationship !== undefined && input.Relationship !== null && { Relationship: input.Relationship }),
  };
};

const serializeAws_restJson1PricingPlanArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1PricingRuleArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1PricingRuleArnsInput = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1PricingRuleArnsNonEmptyInput = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_restJson1UpdateCustomLineItemChargeDetails = (
  input: UpdateCustomLineItemChargeDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Flat !== undefined &&
      input.Flat !== null && {
        Flat: serializeAws_restJson1UpdateCustomLineItemFlatChargeDetails(input.Flat, context),
      }),
    ...(input.Percentage !== undefined &&
      input.Percentage !== null && {
        Percentage: serializeAws_restJson1UpdateCustomLineItemPercentageChargeDetails(input.Percentage, context),
      }),
  };
};

const serializeAws_restJson1UpdateCustomLineItemFlatChargeDetails = (
  input: UpdateCustomLineItemFlatChargeDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChargeValue !== undefined &&
      input.ChargeValue !== null && { ChargeValue: __serializeFloat(input.ChargeValue) }),
  };
};

const serializeAws_restJson1UpdateCustomLineItemPercentageChargeDetails = (
  input: UpdateCustomLineItemPercentageChargeDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.PercentageValue !== undefined &&
      input.PercentageValue !== null && { PercentageValue: __serializeFloat(input.PercentageValue) }),
  };
};

const deserializeAws_restJson1AccountAssociationsList = (
  output: any,
  context: __SerdeContext
): AccountAssociationsListElement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AccountAssociationsListElement(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AccountAssociationsListElement = (
  output: any,
  context: __SerdeContext
): AccountAssociationsListElement => {
  return {
    AccountEmail: __expectString(output.AccountEmail),
    AccountId: __expectString(output.AccountId),
    AccountName: __expectString(output.AccountName),
    BillingGroupArn: __expectString(output.BillingGroupArn),
  } as any;
};

const deserializeAws_restJson1AssociateResourceError = (
  output: any,
  context: __SerdeContext
): AssociateResourceError => {
  return {
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
  } as any;
};

const deserializeAws_restJson1AssociateResourceResponseElement = (
  output: any,
  context: __SerdeContext
): AssociateResourceResponseElement => {
  return {
    Arn: __expectString(output.Arn),
    Error:
      output.Error !== undefined && output.Error !== null
        ? deserializeAws_restJson1AssociateResourceError(output.Error, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AssociateResourcesResponseList = (
  output: any,
  context: __SerdeContext
): AssociateResourceResponseElement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssociateResourceResponseElement(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BillingGroupCostReportElement = (
  output: any,
  context: __SerdeContext
): BillingGroupCostReportElement => {
  return {
    AWSCost: __expectString(output.AWSCost),
    Arn: __expectString(output.Arn),
    Currency: __expectString(output.Currency),
    Margin: __expectString(output.Margin),
    MarginPercentage: __expectString(output.MarginPercentage),
    ProformaCost: __expectString(output.ProformaCost),
  } as any;
};

const deserializeAws_restJson1BillingGroupCostReportList = (
  output: any,
  context: __SerdeContext
): BillingGroupCostReportElement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BillingGroupCostReportElement(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BillingGroupList = (output: any, context: __SerdeContext): BillingGroupListElement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BillingGroupListElement(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BillingGroupListElement = (
  output: any,
  context: __SerdeContext
): BillingGroupListElement => {
  return {
    Arn: __expectString(output.Arn),
    ComputationPreference:
      output.ComputationPreference !== undefined && output.ComputationPreference !== null
        ? deserializeAws_restJson1ComputationPreference(output.ComputationPreference, context)
        : undefined,
    CreationTime: __expectLong(output.CreationTime),
    Description: __expectString(output.Description),
    LastModifiedTime: __expectLong(output.LastModifiedTime),
    Name: __expectString(output.Name),
    PrimaryAccountId: __expectString(output.PrimaryAccountId),
    Size: __expectLong(output.Size),
    Status: __expectString(output.Status),
    StatusReason: __expectString(output.StatusReason),
  } as any;
};

const deserializeAws_restJson1ComputationPreference = (output: any, context: __SerdeContext): ComputationPreference => {
  return {
    PricingPlanArn: __expectString(output.PricingPlanArn),
  } as any;
};

const deserializeAws_restJson1CustomLineItemList = (
  output: any,
  context: __SerdeContext
): CustomLineItemListElement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CustomLineItemListElement(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CustomLineItemListElement = (
  output: any,
  context: __SerdeContext
): CustomLineItemListElement => {
  return {
    Arn: __expectString(output.Arn),
    AssociationSize: __expectLong(output.AssociationSize),
    BillingGroupArn: __expectString(output.BillingGroupArn),
    ChargeDetails:
      output.ChargeDetails !== undefined && output.ChargeDetails !== null
        ? deserializeAws_restJson1ListCustomLineItemChargeDetails(output.ChargeDetails, context)
        : undefined,
    CreationTime: __expectLong(output.CreationTime),
    CurrencyCode: __expectString(output.CurrencyCode),
    Description: __expectString(output.Description),
    LastModifiedTime: __expectLong(output.LastModifiedTime),
    Name: __expectString(output.Name),
    ProductCode: __expectString(output.ProductCode),
  } as any;
};

const deserializeAws_restJson1DisassociateResourceResponseElement = (
  output: any,
  context: __SerdeContext
): DisassociateResourceResponseElement => {
  return {
    Arn: __expectString(output.Arn),
    Error:
      output.Error !== undefined && output.Error !== null
        ? deserializeAws_restJson1AssociateResourceError(output.Error, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DisassociateResourcesResponseList = (
  output: any,
  context: __SerdeContext
): DisassociateResourceResponseElement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DisassociateResourceResponseElement(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListCustomLineItemChargeDetails = (
  output: any,
  context: __SerdeContext
): ListCustomLineItemChargeDetails => {
  return {
    Flat:
      output.Flat !== undefined && output.Flat !== null
        ? deserializeAws_restJson1ListCustomLineItemFlatChargeDetails(output.Flat, context)
        : undefined,
    Percentage:
      output.Percentage !== undefined && output.Percentage !== null
        ? deserializeAws_restJson1ListCustomLineItemPercentageChargeDetails(output.Percentage, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ListCustomLineItemFlatChargeDetails = (
  output: any,
  context: __SerdeContext
): ListCustomLineItemFlatChargeDetails => {
  return {
    ChargeValue: __limitedParseDouble(output.ChargeValue),
  } as any;
};

const deserializeAws_restJson1ListCustomLineItemPercentageChargeDetails = (
  output: any,
  context: __SerdeContext
): ListCustomLineItemPercentageChargeDetails => {
  return {
    PercentageValue: __limitedParseDouble(output.PercentageValue),
  } as any;
};

const deserializeAws_restJson1ListResourcesAssociatedToCustomLineItemResponseElement = (
  output: any,
  context: __SerdeContext
): ListResourcesAssociatedToCustomLineItemResponseElement => {
  return {
    Arn: __expectString(output.Arn),
    Relationship: __expectString(output.Relationship),
  } as any;
};

const deserializeAws_restJson1ListResourcesAssociatedToCustomLineItemResponseList = (
  output: any,
  context: __SerdeContext
): ListResourcesAssociatedToCustomLineItemResponseElement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListResourcesAssociatedToCustomLineItemResponseElement(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PricingPlanArns = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1PricingPlanList = (output: any, context: __SerdeContext): PricingPlanListElement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PricingPlanListElement(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PricingPlanListElement = (
  output: any,
  context: __SerdeContext
): PricingPlanListElement => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime: __expectLong(output.CreationTime),
    Description: __expectString(output.Description),
    LastModifiedTime: __expectLong(output.LastModifiedTime),
    Name: __expectString(output.Name),
    Size: __expectLong(output.Size),
  } as any;
};

const deserializeAws_restJson1PricingRuleArns = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1PricingRuleList = (output: any, context: __SerdeContext): PricingRuleListElement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PricingRuleListElement(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PricingRuleListElement = (
  output: any,
  context: __SerdeContext
): PricingRuleListElement => {
  return {
    Arn: __expectString(output.Arn),
    AssociatedPricingPlanCount: __expectLong(output.AssociatedPricingPlanCount),
    CreationTime: __expectLong(output.CreationTime),
    Description: __expectString(output.Description),
    LastModifiedTime: __expectLong(output.LastModifiedTime),
    ModifierPercentage: __limitedParseDouble(output.ModifierPercentage),
    Name: __expectString(output.Name),
    Scope: __expectString(output.Scope),
    Service: __expectString(output.Service),
    Type: __expectString(output.Type),
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
