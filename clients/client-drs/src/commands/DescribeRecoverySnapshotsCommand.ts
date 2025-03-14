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

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { DescribeRecoverySnapshotsRequest, DescribeRecoverySnapshotsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeRecoverySnapshotsCommand,
  serializeAws_restJson1DescribeRecoverySnapshotsCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeRecoverySnapshotsCommandInput extends DescribeRecoverySnapshotsRequest {}
export interface DescribeRecoverySnapshotsCommandOutput extends DescribeRecoverySnapshotsResponse, __MetadataBearer {}

/**
 * <p>Lists all Recovery Snapshots for a single Source Server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DescribeRecoverySnapshotsCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DescribeRecoverySnapshotsCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const command = new DescribeRecoverySnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRecoverySnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeRecoverySnapshotsCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 */
export class DescribeRecoverySnapshotsCommand extends $Command<
  DescribeRecoverySnapshotsCommandInput,
  DescribeRecoverySnapshotsCommandOutput,
  DrsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeRecoverySnapshotsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DrsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRecoverySnapshotsCommandInput, DescribeRecoverySnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "DescribeRecoverySnapshotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRecoverySnapshotsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRecoverySnapshotsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeRecoverySnapshotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeRecoverySnapshotsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeRecoverySnapshotsCommandOutput> {
    return deserializeAws_restJson1DescribeRecoverySnapshotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
