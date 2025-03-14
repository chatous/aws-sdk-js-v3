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

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { ListVirtualMachinesInput, ListVirtualMachinesOutput } from "../models/models_0";
import {
  deserializeAws_json1_0ListVirtualMachinesCommand,
  serializeAws_json1_0ListVirtualMachinesCommand,
} from "../protocols/Aws_json1_0";

export interface ListVirtualMachinesCommandInput extends ListVirtualMachinesInput {}
export interface ListVirtualMachinesCommandOutput extends ListVirtualMachinesOutput, __MetadataBearer {}

/**
 * <p>Lists your virtual machines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, ListVirtualMachinesCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, ListVirtualMachinesCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const command = new ListVirtualMachinesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVirtualMachinesCommandInput} for command's `input` shape.
 * @see {@link ListVirtualMachinesCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 */
export class ListVirtualMachinesCommand extends $Command<
  ListVirtualMachinesCommandInput,
  ListVirtualMachinesCommandOutput,
  BackupGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListVirtualMachinesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVirtualMachinesCommandInput, ListVirtualMachinesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupGatewayClient";
    const commandName = "ListVirtualMachinesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVirtualMachinesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListVirtualMachinesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVirtualMachinesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListVirtualMachinesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVirtualMachinesCommandOutput> {
    return deserializeAws_json1_0ListVirtualMachinesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
