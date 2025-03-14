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
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import { UpdatePipelineRequest, UpdatePipelineResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdatePipelineCommand,
  serializeAws_restJson1UpdatePipelineCommand,
} from "../protocols/Aws_restJson1";

export interface UpdatePipelineCommandInput extends UpdatePipelineRequest {}
export interface UpdatePipelineCommandOutput extends UpdatePipelineResponse, __MetadataBearer {}

/**
 * <p> Use the <code>UpdatePipeline</code> operation to update settings for a pipeline.</p>
 *         <important>
 *             <p>When you change pipeline settings, your changes take effect immediately.
 *             Jobs that you have already submitted and that Elastic Transcoder has not started to process are
 *             affected in addition to jobs that you submit after you change settings. </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, UpdatePipelineCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, UpdatePipelineCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new UpdatePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePipelineCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for ElasticTranscoderClient's `config` shape.
 *
 */
export class UpdatePipelineCommand extends $Command<
  UpdatePipelineCommandInput,
  UpdatePipelineCommandOutput,
  ElasticTranscoderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePipelineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticTranscoderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePipelineCommandInput, UpdatePipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticTranscoderClient";
    const commandName = "UpdatePipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePipelineRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePipelineResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdatePipelineCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePipelineCommandOutput> {
    return deserializeAws_restJson1UpdatePipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
