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

import { IoTFleetHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetHubClient";
import { DeleteApplicationRequest, DeleteApplicationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteApplicationCommand,
  serializeAws_restJson1DeleteApplicationCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteApplicationCommandInput extends DeleteApplicationRequest {}
export interface DeleteApplicationCommandOutput extends DeleteApplicationResponse, __MetadataBearer {}

/**
 * <p>Deletes a Fleet Hub for AWS IoT Device Management web application.</p>
 *          <note>
 *             <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetHubClient, DeleteApplicationCommand } from "@aws-sdk/client-iotfleethub"; // ES Modules import
 * // const { IoTFleetHubClient, DeleteApplicationCommand } = require("@aws-sdk/client-iotfleethub"); // CommonJS import
 * const client = new IoTFleetHubClient(config);
 * const command = new DeleteApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetHubClientResolvedConfig | config} for IoTFleetHubClient's `config` shape.
 *
 */
export class DeleteApplicationCommand extends $Command<
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
  IoTFleetHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTFleetHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteApplicationCommandInput, DeleteApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetHubClient";
    const commandName = "DeleteApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteApplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteApplicationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteApplicationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteApplicationCommandOutput> {
    return deserializeAws_restJson1DeleteApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
