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

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeAssessmentRunsRequest, DescribeAssessmentRunsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAssessmentRunsCommand,
  serializeAws_json1_1DescribeAssessmentRunsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeAssessmentRunsCommandInput extends DescribeAssessmentRunsRequest {}
export interface DescribeAssessmentRunsCommandOutput extends DescribeAssessmentRunsResponse, __MetadataBearer {}

/**
 * <p>Describes the assessment runs that are specified by the ARNs of the assessment
 *          runs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeAssessmentRunsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeAssessmentRunsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new DescribeAssessmentRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAssessmentRunsCommandInput} for command's `input` shape.
 * @see {@link DescribeAssessmentRunsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 */
export class DescribeAssessmentRunsCommand extends $Command<
  DescribeAssessmentRunsCommandInput,
  DescribeAssessmentRunsCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAssessmentRunsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAssessmentRunsCommandInput, DescribeAssessmentRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "DescribeAssessmentRunsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAssessmentRunsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAssessmentRunsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAssessmentRunsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAssessmentRunsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAssessmentRunsCommandOutput> {
    return deserializeAws_json1_1DescribeAssessmentRunsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
