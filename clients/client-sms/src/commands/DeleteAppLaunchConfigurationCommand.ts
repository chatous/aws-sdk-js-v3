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

import { DeleteAppLaunchConfigurationRequest, DeleteAppLaunchConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteAppLaunchConfigurationCommand,
  serializeAws_json1_1DeleteAppLaunchConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

export interface DeleteAppLaunchConfigurationCommandInput extends DeleteAppLaunchConfigurationRequest {}
export interface DeleteAppLaunchConfigurationCommandOutput
  extends DeleteAppLaunchConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the launch configuration for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, DeleteAppLaunchConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, DeleteAppLaunchConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new DeleteAppLaunchConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAppLaunchConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteAppLaunchConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 */
export class DeleteAppLaunchConfigurationCommand extends $Command<
  DeleteAppLaunchConfigurationCommandInput,
  DeleteAppLaunchConfigurationCommandOutput,
  SMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAppLaunchConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAppLaunchConfigurationCommandInput, DeleteAppLaunchConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "DeleteAppLaunchConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAppLaunchConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteAppLaunchConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAppLaunchConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteAppLaunchConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteAppLaunchConfigurationCommandOutput> {
    return deserializeAws_json1_1DeleteAppLaunchConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
