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

import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { ListCertificateAuthoritiesRequest, ListCertificateAuthoritiesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListCertificateAuthoritiesCommand,
  serializeAws_json1_1ListCertificateAuthoritiesCommand,
} from "../protocols/Aws_json1_1";

export interface ListCertificateAuthoritiesCommandInput extends ListCertificateAuthoritiesRequest {}
export interface ListCertificateAuthoritiesCommandOutput extends ListCertificateAuthoritiesResponse, __MetadataBearer {}

/**
 * <p>Lists the private certificate authorities that you created by using the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, ListCertificateAuthoritiesCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, ListCertificateAuthoritiesCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new ListCertificateAuthoritiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCertificateAuthoritiesCommandInput} for command's `input` shape.
 * @see {@link ListCertificateAuthoritiesCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 */
export class ListCertificateAuthoritiesCommand extends $Command<
  ListCertificateAuthoritiesCommandInput,
  ListCertificateAuthoritiesCommandOutput,
  ACMPCAClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCertificateAuthoritiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMPCAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCertificateAuthoritiesCommandInput, ListCertificateAuthoritiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "ListCertificateAuthoritiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCertificateAuthoritiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCertificateAuthoritiesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCertificateAuthoritiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCertificateAuthoritiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCertificateAuthoritiesCommandOutput> {
    return deserializeAws_json1_1ListCertificateAuthoritiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
