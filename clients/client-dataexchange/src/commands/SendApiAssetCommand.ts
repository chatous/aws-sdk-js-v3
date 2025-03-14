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

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { SendApiAssetRequest, SendApiAssetResponse } from "../models/models_0";
import {
  deserializeAws_restJson1SendApiAssetCommand,
  serializeAws_restJson1SendApiAssetCommand,
} from "../protocols/Aws_restJson1";

export interface SendApiAssetCommandInput extends SendApiAssetRequest {}
export interface SendApiAssetCommandOutput extends SendApiAssetResponse, __MetadataBearer {}

/**
 * <p>This operation invokes an API Gateway API asset. The request is proxied to the provider’s API Gateway API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, SendApiAssetCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, SendApiAssetCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new SendApiAssetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendApiAssetCommandInput} for command's `input` shape.
 * @see {@link SendApiAssetCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 */
export class SendApiAssetCommand extends $Command<
  SendApiAssetCommandInput,
  SendApiAssetCommandOutput,
  DataExchangeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendApiAssetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataExchangeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendApiAssetCommandInput, SendApiAssetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataExchangeClient";
    const commandName = "SendApiAssetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendApiAssetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendApiAssetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendApiAssetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SendApiAssetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendApiAssetCommandOutput> {
    return deserializeAws_restJson1SendApiAssetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
