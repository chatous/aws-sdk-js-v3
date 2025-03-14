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

import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { UpdateMemberDetectorsRequest, UpdateMemberDetectorsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateMemberDetectorsCommand,
  serializeAws_restJson1UpdateMemberDetectorsCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateMemberDetectorsCommandInput extends UpdateMemberDetectorsRequest {}
export interface UpdateMemberDetectorsCommandOutput extends UpdateMemberDetectorsResponse, __MetadataBearer {}

/**
 * <p>Contains information on member accounts to be updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdateMemberDetectorsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdateMemberDetectorsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new UpdateMemberDetectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMemberDetectorsCommandInput} for command's `input` shape.
 * @see {@link UpdateMemberDetectorsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 */
export class UpdateMemberDetectorsCommand extends $Command<
  UpdateMemberDetectorsCommandInput,
  UpdateMemberDetectorsCommandOutput,
  GuardDutyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateMemberDetectorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateMemberDetectorsCommandInput, UpdateMemberDetectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "UpdateMemberDetectorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateMemberDetectorsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateMemberDetectorsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateMemberDetectorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateMemberDetectorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateMemberDetectorsCommandOutput> {
    return deserializeAws_restJson1UpdateMemberDetectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
