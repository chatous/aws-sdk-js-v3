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

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { DeleteDBClusterSnapshotMessage, DeleteDBClusterSnapshotResult } from "../models/models_0";
import {
  deserializeAws_queryDeleteDBClusterSnapshotCommand,
  serializeAws_queryDeleteDBClusterSnapshotCommand,
} from "../protocols/Aws_query";

export interface DeleteDBClusterSnapshotCommandInput extends DeleteDBClusterSnapshotMessage {}
export interface DeleteDBClusterSnapshotCommandOutput extends DeleteDBClusterSnapshotResult, __MetadataBearer {}

/**
 * <p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p>
 *         <note>
 *             <p>The cluster snapshot must be in the <code>available</code> state to be deleted.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DeleteDBClusterSnapshotCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DeleteDBClusterSnapshotCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new DeleteDBClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteDBClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 */
export class DeleteDBClusterSnapshotCommand extends $Command<
  DeleteDBClusterSnapshotCommandInput,
  DeleteDBClusterSnapshotCommandOutput,
  DocDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDBClusterSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDBClusterSnapshotCommandInput, DeleteDBClusterSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "DeleteDBClusterSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDBClusterSnapshotMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDBClusterSnapshotResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDBClusterSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteDBClusterSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDBClusterSnapshotCommandOutput> {
    return deserializeAws_queryDeleteDBClusterSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
