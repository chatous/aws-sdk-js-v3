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

import { RegisterRdsDbInstanceRequest } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import {
  deserializeAws_json1_1RegisterRdsDbInstanceCommand,
  serializeAws_json1_1RegisterRdsDbInstanceCommand,
} from "../protocols/Aws_json1_1";

export interface RegisterRdsDbInstanceCommandInput extends RegisterRdsDbInstanceRequest {}
export interface RegisterRdsDbInstanceCommandOutput extends __MetadataBearer {}

/**
 * <p>Registers an Amazon RDS instance with a stack.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, RegisterRdsDbInstanceCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, RegisterRdsDbInstanceCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new RegisterRdsDbInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterRdsDbInstanceCommandInput} for command's `input` shape.
 * @see {@link RegisterRdsDbInstanceCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 */
export class RegisterRdsDbInstanceCommand extends $Command<
  RegisterRdsDbInstanceCommandInput,
  RegisterRdsDbInstanceCommandOutput,
  OpsWorksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterRdsDbInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterRdsDbInstanceCommandInput, RegisterRdsDbInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "RegisterRdsDbInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterRdsDbInstanceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterRdsDbInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterRdsDbInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterRdsDbInstanceCommandOutput> {
    return deserializeAws_json1_1RegisterRdsDbInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
