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

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { CreateScheduleRequest, CreateScheduleResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateScheduleCommand,
  serializeAws_restJson1CreateScheduleCommand,
} from "../protocols/Aws_restJson1";

export interface CreateScheduleCommandInput extends CreateScheduleRequest {}
export interface CreateScheduleCommandOutput extends CreateScheduleResponse, __MetadataBearer {}

/**
 * <p>Creates a new schedule for one or more DataBrew jobs. Jobs can be run at a specific
 *             date and time, or at regular intervals.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, CreateScheduleCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, CreateScheduleCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new CreateScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateScheduleCommandInput} for command's `input` shape.
 * @see {@link CreateScheduleCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 */
export class CreateScheduleCommand extends $Command<
  CreateScheduleCommandInput,
  CreateScheduleCommandOutput,
  DataBrewClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateScheduleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateScheduleCommandInput, CreateScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "CreateScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateScheduleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateScheduleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateScheduleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateScheduleCommandOutput> {
    return deserializeAws_restJson1CreateScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
