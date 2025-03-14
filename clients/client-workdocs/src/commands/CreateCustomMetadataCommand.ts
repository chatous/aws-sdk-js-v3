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

import { CreateCustomMetadataRequest, CreateCustomMetadataResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateCustomMetadataCommand,
  serializeAws_restJson1CreateCustomMetadataCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

export interface CreateCustomMetadataCommandInput extends CreateCustomMetadataRequest {}
export interface CreateCustomMetadataCommandOutput extends CreateCustomMetadataResponse, __MetadataBearer {}

/**
 * <p>Adds one or more custom properties to the specified resource (a folder, document,
 *             or version).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, CreateCustomMetadataCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, CreateCustomMetadataCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new CreateCustomMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomMetadataCommandInput} for command's `input` shape.
 * @see {@link CreateCustomMetadataCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 */
export class CreateCustomMetadataCommand extends $Command<
  CreateCustomMetadataCommandInput,
  CreateCustomMetadataCommandOutput,
  WorkDocsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCustomMetadataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkDocsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCustomMetadataCommandInput, CreateCustomMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "CreateCustomMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCustomMetadataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCustomMetadataResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCustomMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateCustomMetadataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCustomMetadataCommandOutput> {
    return deserializeAws_restJson1CreateCustomMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
