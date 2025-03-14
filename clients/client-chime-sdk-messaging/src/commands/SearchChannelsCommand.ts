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
  ChimeSDKMessagingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMessagingClient";
import { SearchChannelsRequest, SearchChannelsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1SearchChannelsCommand,
  serializeAws_restJson1SearchChannelsCommand,
} from "../protocols/Aws_restJson1";

export interface SearchChannelsCommandInput extends SearchChannelsRequest {}
export interface SearchChannelsCommandOutput extends SearchChannelsResponse, __MetadataBearer {}

/**
 * <p>Allows an <code>AppInstanceUser</code> to search the channels that they belong to. The <code>AppInstanceUser</code> can search by membership or external ID.
 *          An <code>AppInstanceAdmin</code> can search across all channels within the <code>AppInstance</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, SearchChannelsCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, SearchChannelsCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const command = new SearchChannelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchChannelsCommandInput} for command's `input` shape.
 * @see {@link SearchChannelsCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
 *
 */
export class SearchChannelsCommand extends $Command<
  SearchChannelsCommandInput,
  SearchChannelsCommandOutput,
  ChimeSDKMessagingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SearchChannelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKMessagingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchChannelsCommandInput, SearchChannelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMessagingClient";
    const commandName = "SearchChannelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchChannelsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchChannelsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchChannelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SearchChannelsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchChannelsCommandOutput> {
    return deserializeAws_restJson1SearchChannelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
