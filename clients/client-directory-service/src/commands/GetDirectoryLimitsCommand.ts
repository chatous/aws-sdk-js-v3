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

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { GetDirectoryLimitsRequest, GetDirectoryLimitsResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetDirectoryLimitsCommand,
  serializeAws_json1_1GetDirectoryLimitsCommand,
} from "../protocols/Aws_json1_1";

export interface GetDirectoryLimitsCommandInput extends GetDirectoryLimitsRequest {}
export interface GetDirectoryLimitsCommandOutput extends GetDirectoryLimitsResult, __MetadataBearer {}

/**
 * <p>Obtains directory limit information for the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, GetDirectoryLimitsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, GetDirectoryLimitsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new GetDirectoryLimitsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDirectoryLimitsCommandInput} for command's `input` shape.
 * @see {@link GetDirectoryLimitsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 */
export class GetDirectoryLimitsCommand extends $Command<
  GetDirectoryLimitsCommandInput,
  GetDirectoryLimitsCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDirectoryLimitsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDirectoryLimitsCommandInput, GetDirectoryLimitsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "GetDirectoryLimitsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDirectoryLimitsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDirectoryLimitsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDirectoryLimitsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDirectoryLimitsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDirectoryLimitsCommandOutput> {
    return deserializeAws_json1_1GetDirectoryLimitsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
