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
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import { DescribeApplicationRequest, DescribeApplicationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeApplicationCommand,
  serializeAws_json1_1DescribeApplicationCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeApplicationCommandInput extends DescribeApplicationRequest {}
export interface DescribeApplicationCommandOutput extends DescribeApplicationResponse, __MetadataBearer {}

/**
 * <p>Returns information about a specific Kinesis Data Analytics application.</p>
 *          <p>If you want to retrieve a list of all applications in your account,
 *       use the <a>ListApplications</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DescribeApplicationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DescribeApplicationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new DescribeApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeApplicationCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 */
export class DescribeApplicationCommand extends $Command<
  DescribeApplicationCommandInput,
  DescribeApplicationCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeApplicationCommandInput, DescribeApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "DescribeApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeApplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeApplicationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeApplicationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeApplicationCommandOutput> {
    return deserializeAws_json1_1DescribeApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
