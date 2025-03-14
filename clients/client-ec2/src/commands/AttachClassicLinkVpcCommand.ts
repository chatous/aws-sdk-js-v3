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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AttachClassicLinkVpcRequest, AttachClassicLinkVpcResult } from "../models/models_0";
import {
  deserializeAws_ec2AttachClassicLinkVpcCommand,
  serializeAws_ec2AttachClassicLinkVpcCommand,
} from "../protocols/Aws_ec2";

export interface AttachClassicLinkVpcCommandInput extends AttachClassicLinkVpcRequest {}
export interface AttachClassicLinkVpcCommandOutput extends AttachClassicLinkVpcResult, __MetadataBearer {}

/**
 * <p>Links an EC2-Classic instance to a ClassicLink-enabled VPC through one or more of the VPC's
 * 			security groups. You cannot link an EC2-Classic instance to more than one VPC at a time. You
 * 			can only link an instance that's in the <code>running</code> state. An instance is
 * 			automatically unlinked from a VPC when it's stopped - you can link it to the VPC again when
 * 			you restart it.</p>
 * 		       <p>After you've linked an instance, you cannot change the VPC security groups that are associated with it. To change the security groups, you must first unlink the instance, and then link it again.</p>
 * 		       <p>Linking your instance to a VPC is sometimes referred to as <i>attaching</i> your instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AttachClassicLinkVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AttachClassicLinkVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AttachClassicLinkVpcCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachClassicLinkVpcCommandInput} for command's `input` shape.
 * @see {@link AttachClassicLinkVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class AttachClassicLinkVpcCommand extends $Command<
  AttachClassicLinkVpcCommandInput,
  AttachClassicLinkVpcCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AttachClassicLinkVpcCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AttachClassicLinkVpcCommandInput, AttachClassicLinkVpcCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AttachClassicLinkVpcCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachClassicLinkVpcRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AttachClassicLinkVpcResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AttachClassicLinkVpcCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AttachClassicLinkVpcCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachClassicLinkVpcCommandOutput> {
    return deserializeAws_ec2AttachClassicLinkVpcCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
