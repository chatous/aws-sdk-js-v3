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

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { UnregisterConnectorRequest, UnregisterConnectorResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UnregisterConnectorCommand,
  serializeAws_restJson1UnregisterConnectorCommand,
} from "../protocols/Aws_restJson1";

export interface UnregisterConnectorCommandInput extends UnregisterConnectorRequest {}
export interface UnregisterConnectorCommandOutput extends UnregisterConnectorResponse, __MetadataBearer {}

/**
 * <p>Unregisters the custom connector registered in your account that matches the
 *       connectorLabel provided in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, UnregisterConnectorCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, UnregisterConnectorCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new UnregisterConnectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnregisterConnectorCommandInput} for command's `input` shape.
 * @see {@link UnregisterConnectorCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 */
export class UnregisterConnectorCommand extends $Command<
  UnregisterConnectorCommandInput,
  UnregisterConnectorCommandOutput,
  AppflowClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UnregisterConnectorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UnregisterConnectorCommandInput, UnregisterConnectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "UnregisterConnectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UnregisterConnectorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UnregisterConnectorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UnregisterConnectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UnregisterConnectorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnregisterConnectorCommandOutput> {
    return deserializeAws_restJson1UnregisterConnectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
