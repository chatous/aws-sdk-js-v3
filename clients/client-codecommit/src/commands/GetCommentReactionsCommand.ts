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

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetCommentReactionsInput, GetCommentReactionsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetCommentReactionsCommand,
  serializeAws_json1_1GetCommentReactionsCommand,
} from "../protocols/Aws_json1_1";

export interface GetCommentReactionsCommandInput extends GetCommentReactionsInput {}
export interface GetCommentReactionsCommandOutput extends GetCommentReactionsOutput, __MetadataBearer {}

/**
 * <p>Returns information about reactions to a specified comment ID. Reactions from users who have been deleted will not be included in the count.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetCommentReactionsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetCommentReactionsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetCommentReactionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCommentReactionsCommandInput} for command's `input` shape.
 * @see {@link GetCommentReactionsCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 */
export class GetCommentReactionsCommand extends $Command<
  GetCommentReactionsCommandInput,
  GetCommentReactionsCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCommentReactionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCommentReactionsCommandInput, GetCommentReactionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "GetCommentReactionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCommentReactionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetCommentReactionsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCommentReactionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCommentReactionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCommentReactionsCommandOutput> {
    return deserializeAws_json1_1GetCommentReactionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
