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

import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import {
  GetClassificationExportConfigurationRequest,
  GetClassificationExportConfigurationResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetClassificationExportConfigurationCommand,
  serializeAws_restJson1GetClassificationExportConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface GetClassificationExportConfigurationCommandInput extends GetClassificationExportConfigurationRequest {}
export interface GetClassificationExportConfigurationCommandOutput
  extends GetClassificationExportConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the configuration settings for storing data classification results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetClassificationExportConfigurationCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetClassificationExportConfigurationCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetClassificationExportConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetClassificationExportConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetClassificationExportConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 */
export class GetClassificationExportConfigurationCommand extends $Command<
  GetClassificationExportConfigurationCommandInput,
  GetClassificationExportConfigurationCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetClassificationExportConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetClassificationExportConfigurationCommandInput, GetClassificationExportConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "GetClassificationExportConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetClassificationExportConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetClassificationExportConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetClassificationExportConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetClassificationExportConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetClassificationExportConfigurationCommandOutput> {
    return deserializeAws_restJson1GetClassificationExportConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
