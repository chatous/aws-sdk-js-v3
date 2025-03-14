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

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import { ListAccountAssociationsInput, ListAccountAssociationsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListAccountAssociationsCommand,
  serializeAws_restJson1ListAccountAssociationsCommand,
} from "../protocols/Aws_restJson1";

export interface ListAccountAssociationsCommandInput extends ListAccountAssociationsInput {}
export interface ListAccountAssociationsCommandOutput extends ListAccountAssociationsOutput, __MetadataBearer {}

/**
 * <p>
 *             <i>
 *                <b>Amazon Web Services Billing Conductor is in beta release and is subject to change. Your use of Amazon Web Services Billing Conductor is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b>
 *             </i>
 *          </p>
 *          <p> This is a paginated call to list linked accounts that are linked to the payer account for
 *       the specified time period. If no information is provided, the current billing period is used.
 *       The response will optionally include the billing group associated with the linked
 *       account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, ListAccountAssociationsCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, ListAccountAssociationsCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const command = new ListAccountAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccountAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListAccountAssociationsCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 */
export class ListAccountAssociationsCommand extends $Command<
  ListAccountAssociationsCommandInput,
  ListAccountAssociationsCommandOutput,
  BillingconductorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAccountAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BillingconductorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAccountAssociationsCommandInput, ListAccountAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BillingconductorClient";
    const commandName = "ListAccountAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAccountAssociationsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListAccountAssociationsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAccountAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAccountAssociationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAccountAssociationsCommandOutput> {
    return deserializeAws_restJson1ListAccountAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
