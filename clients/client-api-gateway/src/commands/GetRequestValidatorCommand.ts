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

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { GetRequestValidatorRequest, RequestValidator } from "../models/models_0";
import {
  deserializeAws_restJson1GetRequestValidatorCommand,
  serializeAws_restJson1GetRequestValidatorCommand,
} from "../protocols/Aws_restJson1";

export interface GetRequestValidatorCommandInput extends GetRequestValidatorRequest {}
export interface GetRequestValidatorCommandOutput extends RequestValidator, __MetadataBearer {}

/**
 * <p>Gets a RequestValidator of a given RestApi.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetRequestValidatorCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetRequestValidatorCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetRequestValidatorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRequestValidatorCommandInput} for command's `input` shape.
 * @see {@link GetRequestValidatorCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 */
export class GetRequestValidatorCommand extends $Command<
  GetRequestValidatorCommandInput,
  GetRequestValidatorCommandOutput,
  APIGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRequestValidatorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRequestValidatorCommandInput, GetRequestValidatorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "GetRequestValidatorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRequestValidatorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RequestValidator.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRequestValidatorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetRequestValidatorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRequestValidatorCommandOutput> {
    return deserializeAws_restJson1GetRequestValidatorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
