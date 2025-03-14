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

import { DeleteRateBasedRuleRequest, DeleteRateBasedRuleResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteRateBasedRuleCommand,
  serializeAws_json1_1DeleteRateBasedRuleCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

export interface DeleteRateBasedRuleCommandInput extends DeleteRateBasedRuleRequest {}
export interface DeleteRateBasedRuleCommandOutput extends DeleteRateBasedRuleResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Permanently deletes a <a>RateBasedRule</a>. You can't delete a rule if
 *          it's still used in any <code>WebACL</code> objects or if it still includes any predicates,
 *          such as <code>ByteMatchSet</code> objects.</p>
 *          <p>If you just want to remove a rule from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p>
 *          <p>To permanently delete a <code>RateBasedRule</code> from AWS WAF, perform the following
 *          steps:</p>
 *          <ol>
 *             <li>
 *                <p>Update the <code>RateBasedRule</code> to remove predicates, if any. For more
 *                information, see <a>UpdateRateBasedRule</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide
 *                in the <code>ChangeToken</code> parameter of a <code>DeleteRateBasedRule</code>
 *                request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>DeleteRateBasedRule</code> request.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, DeleteRateBasedRuleCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, DeleteRateBasedRuleCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const command = new DeleteRateBasedRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRateBasedRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteRateBasedRuleCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 */
export class DeleteRateBasedRuleCommand extends $Command<
  DeleteRateBasedRuleCommandInput,
  DeleteRateBasedRuleCommandOutput,
  WAFRegionalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteRateBasedRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFRegionalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRateBasedRuleCommandInput, DeleteRateBasedRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFRegionalClient";
    const commandName = "DeleteRateBasedRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRateBasedRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteRateBasedRuleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteRateBasedRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteRateBasedRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteRateBasedRuleCommandOutput> {
    return deserializeAws_json1_1DeleteRateBasedRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
