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

import { GameSparksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameSparksClient";
import { UpdateGameConfigurationRequest, UpdateGameConfigurationResult } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateGameConfigurationCommand,
  serializeAws_restJson1UpdateGameConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateGameConfigurationCommandInput extends UpdateGameConfigurationRequest {}
export interface UpdateGameConfigurationCommandOutput extends UpdateGameConfigurationResult, __MetadataBearer {}

/**
 * <p>Updates one or more sections of the game configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameSparksClient, UpdateGameConfigurationCommand } from "@aws-sdk/client-gamesparks"; // ES Modules import
 * // const { GameSparksClient, UpdateGameConfigurationCommand } = require("@aws-sdk/client-gamesparks"); // CommonJS import
 * const client = new GameSparksClient(config);
 * const command = new UpdateGameConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGameConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateGameConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GameSparksClientResolvedConfig | config} for GameSparksClient's `config` shape.
 *
 */
export class UpdateGameConfigurationCommand extends $Command<
  UpdateGameConfigurationCommandInput,
  UpdateGameConfigurationCommandOutput,
  GameSparksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateGameConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameSparksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateGameConfigurationCommandInput, UpdateGameConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameSparksClient";
    const commandName = "UpdateGameConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateGameConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateGameConfigurationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateGameConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateGameConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGameConfigurationCommandOutput> {
    return deserializeAws_restJson1UpdateGameConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
