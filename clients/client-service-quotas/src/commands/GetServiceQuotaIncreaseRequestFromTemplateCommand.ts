// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  GetServiceQuotaIncreaseRequestFromTemplateRequest,
  GetServiceQuotaIncreaseRequestFromTemplateResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand,
  serializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";

export interface GetServiceQuotaIncreaseRequestFromTemplateCommandInput
  extends GetServiceQuotaIncreaseRequestFromTemplateRequest {}
export interface GetServiceQuotaIncreaseRequestFromTemplateCommandOutput
  extends GetServiceQuotaIncreaseRequestFromTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves information about the specified quota increase request in your quota request
 *       template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, GetServiceQuotaIncreaseRequestFromTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, GetServiceQuotaIncreaseRequestFromTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new GetServiceQuotaIncreaseRequestFromTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServiceQuotaIncreaseRequestFromTemplateCommandInput} for command's `input` shape.
 * @see {@link GetServiceQuotaIncreaseRequestFromTemplateCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for ServiceQuotasClient's `config` shape.
 *
 */
export class GetServiceQuotaIncreaseRequestFromTemplateCommand extends $Command<
  GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
  GetServiceQuotaIncreaseRequestFromTemplateCommandOutput,
  ServiceQuotasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetServiceQuotaIncreaseRequestFromTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceQuotasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
    GetServiceQuotaIncreaseRequestFromTemplateCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceQuotasClient";
    const commandName = "GetServiceQuotaIncreaseRequestFromTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetServiceQuotaIncreaseRequestFromTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetServiceQuotaIncreaseRequestFromTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetServiceQuotaIncreaseRequestFromTemplateCommandOutput> {
    return deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
