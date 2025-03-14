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

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DeleteMetricStreamInput, DeleteMetricStreamOutput } from "../models/models_0";
import {
  deserializeAws_queryDeleteMetricStreamCommand,
  serializeAws_queryDeleteMetricStreamCommand,
} from "../protocols/Aws_query";

export interface DeleteMetricStreamCommandInput extends DeleteMetricStreamInput {}
export interface DeleteMetricStreamCommandOutput extends DeleteMetricStreamOutput, __MetadataBearer {}

/**
 * <p>Permanently deletes the metric stream that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DeleteMetricStreamCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DeleteMetricStreamCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DeleteMetricStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMetricStreamCommandInput} for command's `input` shape.
 * @see {@link DeleteMetricStreamCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 */
export class DeleteMetricStreamCommand extends $Command<
  DeleteMetricStreamCommandInput,
  DeleteMetricStreamCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteMetricStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteMetricStreamCommandInput, DeleteMetricStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "DeleteMetricStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMetricStreamInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteMetricStreamOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteMetricStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteMetricStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMetricStreamCommandOutput> {
    return deserializeAws_queryDeleteMetricStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
