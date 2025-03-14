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
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { DeleteFleetAdvisorDatabasesRequest, DeleteFleetAdvisorDatabasesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteFleetAdvisorDatabasesCommand,
  serializeAws_json1_1DeleteFleetAdvisorDatabasesCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteFleetAdvisorDatabasesCommandInput extends DeleteFleetAdvisorDatabasesRequest {}
export interface DeleteFleetAdvisorDatabasesCommandOutput
  extends DeleteFleetAdvisorDatabasesResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the specified Fleet Advisor collector databases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteFleetAdvisorDatabasesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteFleetAdvisorDatabasesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DeleteFleetAdvisorDatabasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFleetAdvisorDatabasesCommandInput} for command's `input` shape.
 * @see {@link DeleteFleetAdvisorDatabasesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 */
export class DeleteFleetAdvisorDatabasesCommand extends $Command<
  DeleteFleetAdvisorDatabasesCommandInput,
  DeleteFleetAdvisorDatabasesCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFleetAdvisorDatabasesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFleetAdvisorDatabasesCommandInput, DeleteFleetAdvisorDatabasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DeleteFleetAdvisorDatabasesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFleetAdvisorDatabasesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteFleetAdvisorDatabasesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFleetAdvisorDatabasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteFleetAdvisorDatabasesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteFleetAdvisorDatabasesCommandOutput> {
    return deserializeAws_json1_1DeleteFleetAdvisorDatabasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
