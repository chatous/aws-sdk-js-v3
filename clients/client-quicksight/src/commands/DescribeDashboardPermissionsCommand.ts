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

import { DescribeDashboardPermissionsRequest, DescribeDashboardPermissionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeDashboardPermissionsCommand,
  serializeAws_restJson1DescribeDashboardPermissionsCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

export interface DescribeDashboardPermissionsCommandInput extends DescribeDashboardPermissionsRequest {}
export interface DescribeDashboardPermissionsCommandOutput
  extends DescribeDashboardPermissionsResponse,
    __MetadataBearer {}

/**
 * <p>Describes read and write permissions for a dashboard.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDashboardPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeDashboardPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeDashboardPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDashboardPermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeDashboardPermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 */
export class DescribeDashboardPermissionsCommand extends $Command<
  DescribeDashboardPermissionsCommandInput,
  DescribeDashboardPermissionsCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDashboardPermissionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDashboardPermissionsCommandInput, DescribeDashboardPermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DescribeDashboardPermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDashboardPermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDashboardPermissionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDashboardPermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeDashboardPermissionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDashboardPermissionsCommandOutput> {
    return deserializeAws_restJson1DescribeDashboardPermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
