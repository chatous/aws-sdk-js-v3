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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetJobDocumentRequest, GetJobDocumentResponse } from "../models/models_1";
import {
  deserializeAws_restJson1GetJobDocumentCommand,
  serializeAws_restJson1GetJobDocumentCommand,
} from "../protocols/Aws_restJson1";

export interface GetJobDocumentCommandInput extends GetJobDocumentRequest {}
export interface GetJobDocumentCommandOutput extends GetJobDocumentResponse, __MetadataBearer {}

/**
 * <p>Gets a job document.</p>
 *         <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetJobDocument</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetJobDocumentCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetJobDocumentCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetJobDocumentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobDocumentCommandInput} for command's `input` shape.
 * @see {@link GetJobDocumentCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class GetJobDocumentCommand extends $Command<
  GetJobDocumentCommandInput,
  GetJobDocumentCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetJobDocumentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetJobDocumentCommandInput, GetJobDocumentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "GetJobDocumentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetJobDocumentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetJobDocumentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetJobDocumentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetJobDocumentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetJobDocumentCommandOutput> {
    return deserializeAws_restJson1GetJobDocumentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
