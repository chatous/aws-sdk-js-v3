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

import { AssociateNetworkSettingsRequest, AssociateNetworkSettingsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AssociateNetworkSettingsCommand,
  serializeAws_restJson1AssociateNetworkSettingsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

export interface AssociateNetworkSettingsCommandInput extends AssociateNetworkSettingsRequest {}
export interface AssociateNetworkSettingsCommandOutput extends AssociateNetworkSettingsResponse, __MetadataBearer {}

/**
 * <p>Associates a network settings resource with a web portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, AssociateNetworkSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, AssociateNetworkSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const command = new AssociateNetworkSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateNetworkSettingsCommandInput} for command's `input` shape.
 * @see {@link AssociateNetworkSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 */
export class AssociateNetworkSettingsCommand extends $Command<
  AssociateNetworkSettingsCommandInput,
  AssociateNetworkSettingsCommandOutput,
  WorkSpacesWebClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateNetworkSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesWebClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateNetworkSettingsCommandInput, AssociateNetworkSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesWebClient";
    const commandName = "AssociateNetworkSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateNetworkSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateNetworkSettingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateNetworkSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateNetworkSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateNetworkSettingsCommandOutput> {
    return deserializeAws_restJson1AssociateNetworkSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
