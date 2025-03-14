// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { SSOServiceException as __BaseException } from "./SSOServiceException";

/**
 * <p>Provides information about your AWS account.</p>
 */
export interface AccountInfo {
  /**
   * <p>The identifier of the AWS account that is assigned to the user.</p>
   */
  accountId?: string;

  /**
   * <p>The display name of the AWS account that is assigned to the user.</p>
   */
  accountName?: string;

  /**
   * <p>The email address of the AWS account that is assigned to the user.</p>
   */
  emailAddress?: string;
}

export namespace AccountInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountInfo): any => ({
    ...obj,
  });
}

export interface GetRoleCredentialsRequest {
  /**
   * <p>The friendly name of the role that is assigned to the user.</p>
   */
  roleName: string | undefined;

  /**
   * <p>The identifier for the AWS account that is assigned to the user.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The token issued by the <code>CreateToken</code> API call. For more information, see
   *         <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html">CreateToken</a> in the <i>AWS SSO OIDC API Reference Guide</i>.</p>
   */
  accessToken: string | undefined;
}

export namespace GetRoleCredentialsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRoleCredentialsRequest): any => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>Provides information about the role credentials that are assigned to the user.</p>
 */
export interface RoleCredentials {
  /**
   * <p>The identifier used for the temporary security credentials. For more information, see
   *         <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html">Using Temporary Security Credentials to Request Access to AWS Resources</a> in the
   *         <i>AWS IAM User Guide</i>.</p>
   */
  accessKeyId?: string;

  /**
   * <p>The key that is used to sign the request. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html">Using Temporary Security Credentials to Request Access to AWS Resources</a> in the
   *         <i>AWS IAM User Guide</i>.</p>
   */
  secretAccessKey?: string;

  /**
   * <p>The token used for temporary credentials. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html">Using Temporary Security Credentials to Request Access to AWS Resources</a> in the
   *         <i>AWS IAM User Guide</i>.</p>
   */
  sessionToken?: string;

  /**
   * <p>The date on which temporary security credentials expire.</p>
   */
  expiration?: number;
}

export namespace RoleCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RoleCredentials): any => ({
    ...obj,
    ...(obj.secretAccessKey && { secretAccessKey: SENSITIVE_STRING }),
    ...(obj.sessionToken && { sessionToken: SENSITIVE_STRING }),
  });
}

export interface GetRoleCredentialsResponse {
  /**
   * <p>The credentials for the role that is assigned to the user.</p>
   */
  roleCredentials?: RoleCredentials;
}

export namespace GetRoleCredentialsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRoleCredentialsResponse): any => ({
    ...obj,
    ...(obj.roleCredentials && { roleCredentials: RoleCredentials.filterSensitiveLog(obj.roleCredentials) }),
  });
}

/**
 * <p>Indicates that a problem occurred with the input to the request. For example, a required
 *       parameter might be missing or out of range.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
  }
}

/**
 * <p>The specified resource doesn't exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>Indicates that the request is being made too frequently and is more than what the server can handle.</p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
  }
}

/**
 * <p>Indicates that the request is not authorized. This can happen due to an invalid access token in the request.</p>
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}

export interface ListAccountRolesRequest {
  /**
   * <p>The page token from the previous response output when you request subsequent pages.</p>
   */
  nextToken?: string;

  /**
   * <p>The number of items that clients can request per page.</p>
   */
  maxResults?: number;

  /**
   * <p>The token issued by the <code>CreateToken</code> API call. For more information, see
   *         <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html">CreateToken</a> in the <i>AWS SSO OIDC API Reference Guide</i>.</p>
   */
  accessToken: string | undefined;

  /**
   * <p>The identifier for the AWS account that is assigned to the user.</p>
   */
  accountId: string | undefined;
}

export namespace ListAccountRolesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAccountRolesRequest): any => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>Provides information about the role that is assigned to the user.</p>
 */
export interface RoleInfo {
  /**
   * <p>The friendly name of the role that is assigned to the user.</p>
   */
  roleName?: string;

  /**
   * <p>The identifier of the AWS account assigned to the user.</p>
   */
  accountId?: string;
}

export namespace RoleInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RoleInfo): any => ({
    ...obj,
  });
}

export interface ListAccountRolesResponse {
  /**
   * <p>The page token client that is used to retrieve the list of accounts.</p>
   */
  nextToken?: string;

  /**
   * <p>A paginated response with the list of roles and the next token if more results are available.</p>
   */
  roleList?: RoleInfo[];
}

export namespace ListAccountRolesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAccountRolesResponse): any => ({
    ...obj,
  });
}

export interface ListAccountsRequest {
  /**
   * <p>(Optional) When requesting subsequent pages, this is the page token from the previous response output.</p>
   */
  nextToken?: string;

  /**
   * <p>This is the number of items clients can request per page.</p>
   */
  maxResults?: number;

  /**
   * <p>The token issued by the <code>CreateToken</code> API call. For more information, see
   *         <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html">CreateToken</a> in the <i>AWS SSO OIDC API Reference Guide</i>.</p>
   */
  accessToken: string | undefined;
}

export namespace ListAccountsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAccountsRequest): any => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
  });
}

export interface ListAccountsResponse {
  /**
   * <p>The page token client that is used to retrieve the list of accounts.</p>
   */
  nextToken?: string;

  /**
   * <p>A paginated response with the list of account information and the next token if more results are available.</p>
   */
  accountList?: AccountInfo[];
}

export namespace ListAccountsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAccountsResponse): any => ({
    ...obj,
  });
}

export interface LogoutRequest {
  /**
   * <p>The token issued by the <code>CreateToken</code> API call. For more information, see
   *         <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html">CreateToken</a> in the <i>AWS SSO OIDC API Reference Guide</i>.</p>
   */
  accessToken: string | undefined;
}

export namespace LogoutRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LogoutRequest): any => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
  });
}
