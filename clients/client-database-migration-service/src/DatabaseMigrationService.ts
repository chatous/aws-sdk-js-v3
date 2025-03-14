// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AddTagsToResourceCommand,
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput,
} from "./commands/AddTagsToResourceCommand";
import {
  ApplyPendingMaintenanceActionCommand,
  ApplyPendingMaintenanceActionCommandInput,
  ApplyPendingMaintenanceActionCommandOutput,
} from "./commands/ApplyPendingMaintenanceActionCommand";
import {
  CancelReplicationTaskAssessmentRunCommand,
  CancelReplicationTaskAssessmentRunCommandInput,
  CancelReplicationTaskAssessmentRunCommandOutput,
} from "./commands/CancelReplicationTaskAssessmentRunCommand";
import {
  CreateEndpointCommand,
  CreateEndpointCommandInput,
  CreateEndpointCommandOutput,
} from "./commands/CreateEndpointCommand";
import {
  CreateEventSubscriptionCommand,
  CreateEventSubscriptionCommandInput,
  CreateEventSubscriptionCommandOutput,
} from "./commands/CreateEventSubscriptionCommand";
import {
  CreateFleetAdvisorCollectorCommand,
  CreateFleetAdvisorCollectorCommandInput,
  CreateFleetAdvisorCollectorCommandOutput,
} from "./commands/CreateFleetAdvisorCollectorCommand";
import {
  CreateReplicationInstanceCommand,
  CreateReplicationInstanceCommandInput,
  CreateReplicationInstanceCommandOutput,
} from "./commands/CreateReplicationInstanceCommand";
import {
  CreateReplicationSubnetGroupCommand,
  CreateReplicationSubnetGroupCommandInput,
  CreateReplicationSubnetGroupCommandOutput,
} from "./commands/CreateReplicationSubnetGroupCommand";
import {
  CreateReplicationTaskCommand,
  CreateReplicationTaskCommandInput,
  CreateReplicationTaskCommandOutput,
} from "./commands/CreateReplicationTaskCommand";
import {
  DeleteCertificateCommand,
  DeleteCertificateCommandInput,
  DeleteCertificateCommandOutput,
} from "./commands/DeleteCertificateCommand";
import {
  DeleteConnectionCommand,
  DeleteConnectionCommandInput,
  DeleteConnectionCommandOutput,
} from "./commands/DeleteConnectionCommand";
import {
  DeleteEndpointCommand,
  DeleteEndpointCommandInput,
  DeleteEndpointCommandOutput,
} from "./commands/DeleteEndpointCommand";
import {
  DeleteEventSubscriptionCommand,
  DeleteEventSubscriptionCommandInput,
  DeleteEventSubscriptionCommandOutput,
} from "./commands/DeleteEventSubscriptionCommand";
import {
  DeleteFleetAdvisorCollectorCommand,
  DeleteFleetAdvisorCollectorCommandInput,
  DeleteFleetAdvisorCollectorCommandOutput,
} from "./commands/DeleteFleetAdvisorCollectorCommand";
import {
  DeleteFleetAdvisorDatabasesCommand,
  DeleteFleetAdvisorDatabasesCommandInput,
  DeleteFleetAdvisorDatabasesCommandOutput,
} from "./commands/DeleteFleetAdvisorDatabasesCommand";
import {
  DeleteReplicationInstanceCommand,
  DeleteReplicationInstanceCommandInput,
  DeleteReplicationInstanceCommandOutput,
} from "./commands/DeleteReplicationInstanceCommand";
import {
  DeleteReplicationSubnetGroupCommand,
  DeleteReplicationSubnetGroupCommandInput,
  DeleteReplicationSubnetGroupCommandOutput,
} from "./commands/DeleteReplicationSubnetGroupCommand";
import {
  DeleteReplicationTaskAssessmentRunCommand,
  DeleteReplicationTaskAssessmentRunCommandInput,
  DeleteReplicationTaskAssessmentRunCommandOutput,
} from "./commands/DeleteReplicationTaskAssessmentRunCommand";
import {
  DeleteReplicationTaskCommand,
  DeleteReplicationTaskCommandInput,
  DeleteReplicationTaskCommandOutput,
} from "./commands/DeleteReplicationTaskCommand";
import {
  DescribeAccountAttributesCommand,
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "./commands/DescribeAccountAttributesCommand";
import {
  DescribeApplicableIndividualAssessmentsCommand,
  DescribeApplicableIndividualAssessmentsCommandInput,
  DescribeApplicableIndividualAssessmentsCommandOutput,
} from "./commands/DescribeApplicableIndividualAssessmentsCommand";
import {
  DescribeCertificatesCommand,
  DescribeCertificatesCommandInput,
  DescribeCertificatesCommandOutput,
} from "./commands/DescribeCertificatesCommand";
import {
  DescribeConnectionsCommand,
  DescribeConnectionsCommandInput,
  DescribeConnectionsCommandOutput,
} from "./commands/DescribeConnectionsCommand";
import {
  DescribeEndpointsCommand,
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput,
} from "./commands/DescribeEndpointsCommand";
import {
  DescribeEndpointSettingsCommand,
  DescribeEndpointSettingsCommandInput,
  DescribeEndpointSettingsCommandOutput,
} from "./commands/DescribeEndpointSettingsCommand";
import {
  DescribeEndpointTypesCommand,
  DescribeEndpointTypesCommandInput,
  DescribeEndpointTypesCommandOutput,
} from "./commands/DescribeEndpointTypesCommand";
import {
  DescribeEventCategoriesCommand,
  DescribeEventCategoriesCommandInput,
  DescribeEventCategoriesCommandOutput,
} from "./commands/DescribeEventCategoriesCommand";
import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
} from "./commands/DescribeEventsCommand";
import {
  DescribeEventSubscriptionsCommand,
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
} from "./commands/DescribeEventSubscriptionsCommand";
import {
  DescribeFleetAdvisorCollectorsCommand,
  DescribeFleetAdvisorCollectorsCommandInput,
  DescribeFleetAdvisorCollectorsCommandOutput,
} from "./commands/DescribeFleetAdvisorCollectorsCommand";
import {
  DescribeFleetAdvisorDatabasesCommand,
  DescribeFleetAdvisorDatabasesCommandInput,
  DescribeFleetAdvisorDatabasesCommandOutput,
} from "./commands/DescribeFleetAdvisorDatabasesCommand";
import {
  DescribeFleetAdvisorLsaAnalysisCommand,
  DescribeFleetAdvisorLsaAnalysisCommandInput,
  DescribeFleetAdvisorLsaAnalysisCommandOutput,
} from "./commands/DescribeFleetAdvisorLsaAnalysisCommand";
import {
  DescribeFleetAdvisorSchemaObjectSummaryCommand,
  DescribeFleetAdvisorSchemaObjectSummaryCommandInput,
  DescribeFleetAdvisorSchemaObjectSummaryCommandOutput,
} from "./commands/DescribeFleetAdvisorSchemaObjectSummaryCommand";
import {
  DescribeFleetAdvisorSchemasCommand,
  DescribeFleetAdvisorSchemasCommandInput,
  DescribeFleetAdvisorSchemasCommandOutput,
} from "./commands/DescribeFleetAdvisorSchemasCommand";
import {
  DescribeOrderableReplicationInstancesCommand,
  DescribeOrderableReplicationInstancesCommandInput,
  DescribeOrderableReplicationInstancesCommandOutput,
} from "./commands/DescribeOrderableReplicationInstancesCommand";
import {
  DescribePendingMaintenanceActionsCommand,
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput,
} from "./commands/DescribePendingMaintenanceActionsCommand";
import {
  DescribeRefreshSchemasStatusCommand,
  DescribeRefreshSchemasStatusCommandInput,
  DescribeRefreshSchemasStatusCommandOutput,
} from "./commands/DescribeRefreshSchemasStatusCommand";
import {
  DescribeReplicationInstancesCommand,
  DescribeReplicationInstancesCommandInput,
  DescribeReplicationInstancesCommandOutput,
} from "./commands/DescribeReplicationInstancesCommand";
import {
  DescribeReplicationInstanceTaskLogsCommand,
  DescribeReplicationInstanceTaskLogsCommandInput,
  DescribeReplicationInstanceTaskLogsCommandOutput,
} from "./commands/DescribeReplicationInstanceTaskLogsCommand";
import {
  DescribeReplicationSubnetGroupsCommand,
  DescribeReplicationSubnetGroupsCommandInput,
  DescribeReplicationSubnetGroupsCommandOutput,
} from "./commands/DescribeReplicationSubnetGroupsCommand";
import {
  DescribeReplicationTaskAssessmentResultsCommand,
  DescribeReplicationTaskAssessmentResultsCommandInput,
  DescribeReplicationTaskAssessmentResultsCommandOutput,
} from "./commands/DescribeReplicationTaskAssessmentResultsCommand";
import {
  DescribeReplicationTaskAssessmentRunsCommand,
  DescribeReplicationTaskAssessmentRunsCommandInput,
  DescribeReplicationTaskAssessmentRunsCommandOutput,
} from "./commands/DescribeReplicationTaskAssessmentRunsCommand";
import {
  DescribeReplicationTaskIndividualAssessmentsCommand,
  DescribeReplicationTaskIndividualAssessmentsCommandInput,
  DescribeReplicationTaskIndividualAssessmentsCommandOutput,
} from "./commands/DescribeReplicationTaskIndividualAssessmentsCommand";
import {
  DescribeReplicationTasksCommand,
  DescribeReplicationTasksCommandInput,
  DescribeReplicationTasksCommandOutput,
} from "./commands/DescribeReplicationTasksCommand";
import {
  DescribeSchemasCommand,
  DescribeSchemasCommandInput,
  DescribeSchemasCommandOutput,
} from "./commands/DescribeSchemasCommand";
import {
  DescribeTableStatisticsCommand,
  DescribeTableStatisticsCommandInput,
  DescribeTableStatisticsCommandOutput,
} from "./commands/DescribeTableStatisticsCommand";
import {
  ImportCertificateCommand,
  ImportCertificateCommandInput,
  ImportCertificateCommandOutput,
} from "./commands/ImportCertificateCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ModifyEndpointCommand,
  ModifyEndpointCommandInput,
  ModifyEndpointCommandOutput,
} from "./commands/ModifyEndpointCommand";
import {
  ModifyEventSubscriptionCommand,
  ModifyEventSubscriptionCommandInput,
  ModifyEventSubscriptionCommandOutput,
} from "./commands/ModifyEventSubscriptionCommand";
import {
  ModifyReplicationInstanceCommand,
  ModifyReplicationInstanceCommandInput,
  ModifyReplicationInstanceCommandOutput,
} from "./commands/ModifyReplicationInstanceCommand";
import {
  ModifyReplicationSubnetGroupCommand,
  ModifyReplicationSubnetGroupCommandInput,
  ModifyReplicationSubnetGroupCommandOutput,
} from "./commands/ModifyReplicationSubnetGroupCommand";
import {
  ModifyReplicationTaskCommand,
  ModifyReplicationTaskCommandInput,
  ModifyReplicationTaskCommandOutput,
} from "./commands/ModifyReplicationTaskCommand";
import {
  MoveReplicationTaskCommand,
  MoveReplicationTaskCommandInput,
  MoveReplicationTaskCommandOutput,
} from "./commands/MoveReplicationTaskCommand";
import {
  RebootReplicationInstanceCommand,
  RebootReplicationInstanceCommandInput,
  RebootReplicationInstanceCommandOutput,
} from "./commands/RebootReplicationInstanceCommand";
import {
  RefreshSchemasCommand,
  RefreshSchemasCommandInput,
  RefreshSchemasCommandOutput,
} from "./commands/RefreshSchemasCommand";
import {
  ReloadTablesCommand,
  ReloadTablesCommandInput,
  ReloadTablesCommandOutput,
} from "./commands/ReloadTablesCommand";
import {
  RemoveTagsFromResourceCommand,
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand";
import {
  RunFleetAdvisorLsaAnalysisCommand,
  RunFleetAdvisorLsaAnalysisCommandInput,
  RunFleetAdvisorLsaAnalysisCommandOutput,
} from "./commands/RunFleetAdvisorLsaAnalysisCommand";
import {
  StartReplicationTaskAssessmentCommand,
  StartReplicationTaskAssessmentCommandInput,
  StartReplicationTaskAssessmentCommandOutput,
} from "./commands/StartReplicationTaskAssessmentCommand";
import {
  StartReplicationTaskAssessmentRunCommand,
  StartReplicationTaskAssessmentRunCommandInput,
  StartReplicationTaskAssessmentRunCommandOutput,
} from "./commands/StartReplicationTaskAssessmentRunCommand";
import {
  StartReplicationTaskCommand,
  StartReplicationTaskCommandInput,
  StartReplicationTaskCommandOutput,
} from "./commands/StartReplicationTaskCommand";
import {
  StopReplicationTaskCommand,
  StopReplicationTaskCommandInput,
  StopReplicationTaskCommandOutput,
} from "./commands/StopReplicationTaskCommand";
import {
  TestConnectionCommand,
  TestConnectionCommandInput,
  TestConnectionCommandOutput,
} from "./commands/TestConnectionCommand";
import { DatabaseMigrationServiceClient } from "./DatabaseMigrationServiceClient";

/**
 * <fullname>Database Migration Service</fullname>
 *          <p>Database Migration Service (DMS) can migrate your data to and from the most
 *          widely used commercial and open-source databases such as Oracle, PostgreSQL, Microsoft SQL
 *          Server, Amazon Redshift, MariaDB, Amazon Aurora, MySQL, and SAP Adaptive Server Enterprise
 *          (ASE). The service supports homogeneous migrations such as Oracle to Oracle, as well as
 *          heterogeneous migrations between different database platforms, such as Oracle to MySQL or
 *          SQL Server to PostgreSQL.</p>
 *          <p>For more information about DMS, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html">What Is Database Migration Service?</a>
 *          in the <i>Database Migration Service User Guide.</i>
 *          </p>
 */
export class DatabaseMigrationService extends DatabaseMigrationServiceClient {
  /**
   * <p>Adds metadata tags to an DMS resource, including replication instance, endpoint,
   *          security group, and migration task. These tags can also be used with cost allocation
   *          reporting to track cost associated with DMS resources, or used in a Condition statement in
   *          an IAM policy for DMS. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html">
   *                <code>Tag</code>
   *             </a> data type description.</p>
   */
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTagsToResourceCommandOutput>;
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddTagsToResourceCommandOutput) => void),
    cb?: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): Promise<AddTagsToResourceCommandOutput> | void {
    const command = new AddTagsToResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Applies a pending maintenance action to a resource (for example, to a replication instance).</p>
   */
  public applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ApplyPendingMaintenanceActionCommandOutput>;
  public applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void
  ): void;
  public applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void
  ): void;
  public applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void),
    cb?: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void
  ): Promise<ApplyPendingMaintenanceActionCommandOutput> | void {
    const command = new ApplyPendingMaintenanceActionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels a single premigration assessment run.</p>
   *          <p>This operation prevents any individual assessments from running if they haven't started
   *          running. It also attempts to cancel any individual assessments that are currently
   *          running.</p>
   */
  public cancelReplicationTaskAssessmentRun(
    args: CancelReplicationTaskAssessmentRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelReplicationTaskAssessmentRunCommandOutput>;
  public cancelReplicationTaskAssessmentRun(
    args: CancelReplicationTaskAssessmentRunCommandInput,
    cb: (err: any, data?: CancelReplicationTaskAssessmentRunCommandOutput) => void
  ): void;
  public cancelReplicationTaskAssessmentRun(
    args: CancelReplicationTaskAssessmentRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelReplicationTaskAssessmentRunCommandOutput) => void
  ): void;
  public cancelReplicationTaskAssessmentRun(
    args: CancelReplicationTaskAssessmentRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelReplicationTaskAssessmentRunCommandOutput) => void),
    cb?: (err: any, data?: CancelReplicationTaskAssessmentRunCommandOutput) => void
  ): Promise<CancelReplicationTaskAssessmentRunCommandOutput> | void {
    const command = new CancelReplicationTaskAssessmentRunCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an endpoint using the provided settings.</p>
   *          <note>
   *             <p>For a MySQL source or target endpoint, don't explicitly specify the database using
   *          the <code>DatabaseName</code> request parameter on the <code>CreateEndpoint</code> API call.
   *          Specifying <code>DatabaseName</code> when you create a MySQL endpoint replicates all the
   *          task tables to this single database. For MySQL endpoints, you specify the database only when
   *          you specify the schema in the table-mapping rules of the DMS task.</p>
   *          </note>
   */
  public createEndpoint(
    args: CreateEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEndpointCommandOutput>;
  public createEndpoint(
    args: CreateEndpointCommandInput,
    cb: (err: any, data?: CreateEndpointCommandOutput) => void
  ): void;
  public createEndpoint(
    args: CreateEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEndpointCommandOutput) => void
  ): void;
  public createEndpoint(
    args: CreateEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEndpointCommandOutput) => void),
    cb?: (err: any, data?: CreateEndpointCommandOutput) => void
  ): Promise<CreateEndpointCommandOutput> | void {
    const command = new CreateEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Creates an DMS event notification subscription. </p>
   *          <p>You can specify the type of source (<code>SourceType</code>) you want to be notified of,
   *          provide a list of DMS source IDs (<code>SourceIds</code>) that triggers the events, and
   *          provide a list of event categories (<code>EventCategories</code>) for events you want to be
   *          notified of. If you specify both the <code>SourceType</code> and <code>SourceIds</code>,
   *          such as <code>SourceType = replication-instance</code> and <code>SourceIdentifier =
   *             my-replinstance</code>, you will be notified of all the replication instance events for
   *          the specified source. If you specify a <code>SourceType</code> but don't specify a
   *             <code>SourceIdentifier</code>, you receive notice of the events for that source type for
   *          all your DMS sources. If you don't specify either <code>SourceType</code> nor
   *             <code>SourceIdentifier</code>, you will be notified of events generated from all DMS
   *          sources belonging to your customer account.</p>
   *          <p>For more information about DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and
   *             Notifications</a> in the <i>Database Migration Service User
   *             Guide.</i>
   *          </p>
   */
  public createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventSubscriptionCommandOutput>;
  public createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): void;
  public createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): void;
  public createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEventSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): Promise<CreateEventSubscriptionCommandOutput> | void {
    const command = new CreateEventSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a Fleet Advisor collector using the specified parameters.</p>
   */
  public createFleetAdvisorCollector(
    args: CreateFleetAdvisorCollectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFleetAdvisorCollectorCommandOutput>;
  public createFleetAdvisorCollector(
    args: CreateFleetAdvisorCollectorCommandInput,
    cb: (err: any, data?: CreateFleetAdvisorCollectorCommandOutput) => void
  ): void;
  public createFleetAdvisorCollector(
    args: CreateFleetAdvisorCollectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFleetAdvisorCollectorCommandOutput) => void
  ): void;
  public createFleetAdvisorCollector(
    args: CreateFleetAdvisorCollectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFleetAdvisorCollectorCommandOutput) => void),
    cb?: (err: any, data?: CreateFleetAdvisorCollectorCommandOutput) => void
  ): Promise<CreateFleetAdvisorCollectorCommandOutput> | void {
    const command = new CreateFleetAdvisorCollectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates the replication instance using the specified parameters.</p>
   *          <p>DMS requires that your account have certain roles with appropriate permissions
   *          before you can create a replication instance. For information on the required roles, see
   *       <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.APIRole">Creating the IAM Roles to Use With the CLI and DMS API</a>. For
   *          information on the required permissions, see
   *       <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.IAMPermissions">IAM Permissions Needed to Use DMS</a>.</p>
   */
  public createReplicationInstance(
    args: CreateReplicationInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReplicationInstanceCommandOutput>;
  public createReplicationInstance(
    args: CreateReplicationInstanceCommandInput,
    cb: (err: any, data?: CreateReplicationInstanceCommandOutput) => void
  ): void;
  public createReplicationInstance(
    args: CreateReplicationInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReplicationInstanceCommandOutput) => void
  ): void;
  public createReplicationInstance(
    args: CreateReplicationInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateReplicationInstanceCommandOutput) => void),
    cb?: (err: any, data?: CreateReplicationInstanceCommandOutput) => void
  ): Promise<CreateReplicationInstanceCommandOutput> | void {
    const command = new CreateReplicationInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a replication subnet group given a list of the subnet IDs in a VPC.</p>
   *          <p>The VPC needs to have at least one subnet in at least two availability zones in the Amazon Web Services Region, otherwise the
   *           service will throw a <code>ReplicationSubnetGroupDoesNotCoverEnoughAZs</code> exception.</p>
   */
  public createReplicationSubnetGroup(
    args: CreateReplicationSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReplicationSubnetGroupCommandOutput>;
  public createReplicationSubnetGroup(
    args: CreateReplicationSubnetGroupCommandInput,
    cb: (err: any, data?: CreateReplicationSubnetGroupCommandOutput) => void
  ): void;
  public createReplicationSubnetGroup(
    args: CreateReplicationSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReplicationSubnetGroupCommandOutput) => void
  ): void;
  public createReplicationSubnetGroup(
    args: CreateReplicationSubnetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateReplicationSubnetGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateReplicationSubnetGroupCommandOutput) => void
  ): Promise<CreateReplicationSubnetGroupCommandOutput> | void {
    const command = new CreateReplicationSubnetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a replication task using the specified parameters.</p>
   */
  public createReplicationTask(
    args: CreateReplicationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReplicationTaskCommandOutput>;
  public createReplicationTask(
    args: CreateReplicationTaskCommandInput,
    cb: (err: any, data?: CreateReplicationTaskCommandOutput) => void
  ): void;
  public createReplicationTask(
    args: CreateReplicationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReplicationTaskCommandOutput) => void
  ): void;
  public createReplicationTask(
    args: CreateReplicationTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateReplicationTaskCommandOutput) => void),
    cb?: (err: any, data?: CreateReplicationTaskCommandOutput) => void
  ): Promise<CreateReplicationTaskCommandOutput> | void {
    const command = new CreateReplicationTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified certificate. </p>
   */
  public deleteCertificate(
    args: DeleteCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCertificateCommandOutput>;
  public deleteCertificate(
    args: DeleteCertificateCommandInput,
    cb: (err: any, data?: DeleteCertificateCommandOutput) => void
  ): void;
  public deleteCertificate(
    args: DeleteCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCertificateCommandOutput) => void
  ): void;
  public deleteCertificate(
    args: DeleteCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCertificateCommandOutput) => void),
    cb?: (err: any, data?: DeleteCertificateCommandOutput) => void
  ): Promise<DeleteCertificateCommandOutput> | void {
    const command = new DeleteCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the connection between a replication instance and an endpoint.</p>
   */
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionCommandOutput>;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConnectionCommandOutput) => void),
    cb?: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): Promise<DeleteConnectionCommandOutput> | void {
    const command = new DeleteConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified endpoint.</p>
   *          <note>
   *             <p>All tasks associated with the endpoint must be deleted before you can delete the
   *             endpoint.</p>
   *          </note>
   *          <p></p>
   */
  public deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEndpointCommandOutput>;
  public deleteEndpoint(
    args: DeleteEndpointCommandInput,
    cb: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): void;
  public deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): void;
  public deleteEndpoint(
    args: DeleteEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEndpointCommandOutput) => void),
    cb?: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): Promise<DeleteEndpointCommandOutput> | void {
    const command = new DeleteEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Deletes an DMS event subscription. </p>
   */
  public deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventSubscriptionCommandOutput>;
  public deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): void;
  public deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): void;
  public deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEventSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): Promise<DeleteEventSubscriptionCommandOutput> | void {
    const command = new DeleteEventSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified Fleet Advisor collector.</p>
   */
  public deleteFleetAdvisorCollector(
    args: DeleteFleetAdvisorCollectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFleetAdvisorCollectorCommandOutput>;
  public deleteFleetAdvisorCollector(
    args: DeleteFleetAdvisorCollectorCommandInput,
    cb: (err: any, data?: DeleteFleetAdvisorCollectorCommandOutput) => void
  ): void;
  public deleteFleetAdvisorCollector(
    args: DeleteFleetAdvisorCollectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFleetAdvisorCollectorCommandOutput) => void
  ): void;
  public deleteFleetAdvisorCollector(
    args: DeleteFleetAdvisorCollectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFleetAdvisorCollectorCommandOutput) => void),
    cb?: (err: any, data?: DeleteFleetAdvisorCollectorCommandOutput) => void
  ): Promise<DeleteFleetAdvisorCollectorCommandOutput> | void {
    const command = new DeleteFleetAdvisorCollectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified Fleet Advisor collector databases.</p>
   */
  public deleteFleetAdvisorDatabases(
    args: DeleteFleetAdvisorDatabasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFleetAdvisorDatabasesCommandOutput>;
  public deleteFleetAdvisorDatabases(
    args: DeleteFleetAdvisorDatabasesCommandInput,
    cb: (err: any, data?: DeleteFleetAdvisorDatabasesCommandOutput) => void
  ): void;
  public deleteFleetAdvisorDatabases(
    args: DeleteFleetAdvisorDatabasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFleetAdvisorDatabasesCommandOutput) => void
  ): void;
  public deleteFleetAdvisorDatabases(
    args: DeleteFleetAdvisorDatabasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFleetAdvisorDatabasesCommandOutput) => void),
    cb?: (err: any, data?: DeleteFleetAdvisorDatabasesCommandOutput) => void
  ): Promise<DeleteFleetAdvisorDatabasesCommandOutput> | void {
    const command = new DeleteFleetAdvisorDatabasesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified replication instance.</p>
   *          <note>
   *             <p>You must delete any migration tasks that are associated with the replication instance
   *             before you can delete it.</p>
   *          </note>
   *          <p></p>
   */
  public deleteReplicationInstance(
    args: DeleteReplicationInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReplicationInstanceCommandOutput>;
  public deleteReplicationInstance(
    args: DeleteReplicationInstanceCommandInput,
    cb: (err: any, data?: DeleteReplicationInstanceCommandOutput) => void
  ): void;
  public deleteReplicationInstance(
    args: DeleteReplicationInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReplicationInstanceCommandOutput) => void
  ): void;
  public deleteReplicationInstance(
    args: DeleteReplicationInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteReplicationInstanceCommandOutput) => void),
    cb?: (err: any, data?: DeleteReplicationInstanceCommandOutput) => void
  ): Promise<DeleteReplicationInstanceCommandOutput> | void {
    const command = new DeleteReplicationInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a subnet group.</p>
   */
  public deleteReplicationSubnetGroup(
    args: DeleteReplicationSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReplicationSubnetGroupCommandOutput>;
  public deleteReplicationSubnetGroup(
    args: DeleteReplicationSubnetGroupCommandInput,
    cb: (err: any, data?: DeleteReplicationSubnetGroupCommandOutput) => void
  ): void;
  public deleteReplicationSubnetGroup(
    args: DeleteReplicationSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReplicationSubnetGroupCommandOutput) => void
  ): void;
  public deleteReplicationSubnetGroup(
    args: DeleteReplicationSubnetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteReplicationSubnetGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteReplicationSubnetGroupCommandOutput) => void
  ): Promise<DeleteReplicationSubnetGroupCommandOutput> | void {
    const command = new DeleteReplicationSubnetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified replication task.</p>
   */
  public deleteReplicationTask(
    args: DeleteReplicationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReplicationTaskCommandOutput>;
  public deleteReplicationTask(
    args: DeleteReplicationTaskCommandInput,
    cb: (err: any, data?: DeleteReplicationTaskCommandOutput) => void
  ): void;
  public deleteReplicationTask(
    args: DeleteReplicationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReplicationTaskCommandOutput) => void
  ): void;
  public deleteReplicationTask(
    args: DeleteReplicationTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteReplicationTaskCommandOutput) => void),
    cb?: (err: any, data?: DeleteReplicationTaskCommandOutput) => void
  ): Promise<DeleteReplicationTaskCommandOutput> | void {
    const command = new DeleteReplicationTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the record of a single premigration assessment run.</p>
   *          <p>This operation removes all metadata that DMS maintains about this assessment run.
   *          However, the operation leaves untouched all information about this assessment run that is
   *          stored in your Amazon S3 bucket.</p>
   */
  public deleteReplicationTaskAssessmentRun(
    args: DeleteReplicationTaskAssessmentRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReplicationTaskAssessmentRunCommandOutput>;
  public deleteReplicationTaskAssessmentRun(
    args: DeleteReplicationTaskAssessmentRunCommandInput,
    cb: (err: any, data?: DeleteReplicationTaskAssessmentRunCommandOutput) => void
  ): void;
  public deleteReplicationTaskAssessmentRun(
    args: DeleteReplicationTaskAssessmentRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReplicationTaskAssessmentRunCommandOutput) => void
  ): void;
  public deleteReplicationTaskAssessmentRun(
    args: DeleteReplicationTaskAssessmentRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteReplicationTaskAssessmentRunCommandOutput) => void),
    cb?: (err: any, data?: DeleteReplicationTaskAssessmentRunCommandOutput) => void
  ): Promise<DeleteReplicationTaskAssessmentRunCommandOutput> | void {
    const command = new DeleteReplicationTaskAssessmentRunCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all of the DMS attributes for a customer account. These attributes include DMS
   *          quotas for the account and a unique account identifier in a particular DMS region. DMS
   *          quotas include a list of resource quotas supported by the account, such as the number of
   *          replication instances allowed. The description for each resource quota, includes the quota
   *          name, current usage toward that quota, and the quota's maximum value. DMS uses the unique
   *          account identifier to name each artifact used by DMS in the given region.</p>
   *          <p>This command does not take any parameters.</p>
   */
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountAttributesCommandOutput>;
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAccountAttributesCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): Promise<DescribeAccountAttributesCommandOutput> | void {
    const command = new DescribeAccountAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides a list of individual assessments that you can specify for a new premigration
   *          assessment run, given one or more parameters.</p>
   *          <p>If you specify an existing migration task, this operation provides the default individual
   *          assessments you can specify for that task. Otherwise, the specified parameters model elements
   *          of a possible migration task on which to base a premigration assessment run.</p>
   *          <p>To use these migration task modeling parameters, you must specify an existing replication instance,
   *          a source database engine, a target database engine, and a migration type. This combination of
   *          parameters potentially limits the default individual assessments available for an assessment run
   *          created for a corresponding migration task.</p>
   *          <p>If you specify no parameters, this operation provides a list of all possible individual assessments
   *          that you can specify for an assessment run. If you specify any one of the task modeling parameters, you must
   *          specify all of them or the operation cannot provide a list of individual assessments.
   *          The only parameter that you can specify alone is for an existing migration task. The specified task
   *          definition then determines the default list of individual assessments that you can specify in an
   *          assessment run for the task.</p>
   */
  public describeApplicableIndividualAssessments(
    args: DescribeApplicableIndividualAssessmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicableIndividualAssessmentsCommandOutput>;
  public describeApplicableIndividualAssessments(
    args: DescribeApplicableIndividualAssessmentsCommandInput,
    cb: (err: any, data?: DescribeApplicableIndividualAssessmentsCommandOutput) => void
  ): void;
  public describeApplicableIndividualAssessments(
    args: DescribeApplicableIndividualAssessmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicableIndividualAssessmentsCommandOutput) => void
  ): void;
  public describeApplicableIndividualAssessments(
    args: DescribeApplicableIndividualAssessmentsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeApplicableIndividualAssessmentsCommandOutput) => void),
    cb?: (err: any, data?: DescribeApplicableIndividualAssessmentsCommandOutput) => void
  ): Promise<DescribeApplicableIndividualAssessmentsCommandOutput> | void {
    const command = new DescribeApplicableIndividualAssessmentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides a description of the certificate.</p>
   */
  public describeCertificates(
    args: DescribeCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCertificatesCommandOutput>;
  public describeCertificates(
    args: DescribeCertificatesCommandInput,
    cb: (err: any, data?: DescribeCertificatesCommandOutput) => void
  ): void;
  public describeCertificates(
    args: DescribeCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCertificatesCommandOutput) => void
  ): void;
  public describeCertificates(
    args: DescribeCertificatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCertificatesCommandOutput) => void),
    cb?: (err: any, data?: DescribeCertificatesCommandOutput) => void
  ): Promise<DescribeCertificatesCommandOutput> | void {
    const command = new DescribeCertificatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the status of the connections that have been made between the replication
   *          instance and an endpoint. Connections are created when you test an endpoint.</p>
   */
  public describeConnections(
    args: DescribeConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectionsCommandOutput>;
  public describeConnections(
    args: DescribeConnectionsCommandInput,
    cb: (err: any, data?: DescribeConnectionsCommandOutput) => void
  ): void;
  public describeConnections(
    args: DescribeConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectionsCommandOutput) => void
  ): void;
  public describeConnections(
    args: DescribeConnectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConnectionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeConnectionsCommandOutput) => void
  ): Promise<DescribeConnectionsCommandOutput> | void {
    const command = new DescribeConnectionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about the endpoints for your account in the current region.</p>
   */
  public describeEndpoints(
    args: DescribeEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointsCommandOutput>;
  public describeEndpoints(
    args: DescribeEndpointsCommandInput,
    cb: (err: any, data?: DescribeEndpointsCommandOutput) => void
  ): void;
  public describeEndpoints(
    args: DescribeEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointsCommandOutput) => void
  ): void;
  public describeEndpoints(
    args: DescribeEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEndpointsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEndpointsCommandOutput) => void
  ): Promise<DescribeEndpointsCommandOutput> | void {
    const command = new DescribeEndpointsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about the possible endpoint settings available
   *          when you create an endpoint for a specific database engine.</p>
   */
  public describeEndpointSettings(
    args: DescribeEndpointSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointSettingsCommandOutput>;
  public describeEndpointSettings(
    args: DescribeEndpointSettingsCommandInput,
    cb: (err: any, data?: DescribeEndpointSettingsCommandOutput) => void
  ): void;
  public describeEndpointSettings(
    args: DescribeEndpointSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointSettingsCommandOutput) => void
  ): void;
  public describeEndpointSettings(
    args: DescribeEndpointSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEndpointSettingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEndpointSettingsCommandOutput) => void
  ): Promise<DescribeEndpointSettingsCommandOutput> | void {
    const command = new DescribeEndpointSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about the type of endpoints available.</p>
   */
  public describeEndpointTypes(
    args: DescribeEndpointTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointTypesCommandOutput>;
  public describeEndpointTypes(
    args: DescribeEndpointTypesCommandInput,
    cb: (err: any, data?: DescribeEndpointTypesCommandOutput) => void
  ): void;
  public describeEndpointTypes(
    args: DescribeEndpointTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointTypesCommandOutput) => void
  ): void;
  public describeEndpointTypes(
    args: DescribeEndpointTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEndpointTypesCommandOutput) => void),
    cb?: (err: any, data?: DescribeEndpointTypesCommandOutput) => void
  ): Promise<DescribeEndpointTypesCommandOutput> | void {
    const command = new DescribeEndpointTypesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists categories for all event source types, or, if specified, for a specified source
   *          type. You can see a list of the event categories and source types in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events
   *             and Notifications</a> in the <i>Database Migration Service User
   *             Guide.</i>
   *          </p>
   */
  public describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventCategoriesCommandOutput>;
  public describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): void;
  public describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): void;
  public describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventCategoriesCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): Promise<DescribeEventCategoriesCommandOutput> | void {
    const command = new DescribeEventCategoriesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Lists events for a given source identifier and source type. You can also specify a
   *          start and end time. For more information on DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and
   *             Notifications</a> in the <i>Database Migration Service User
   *          Guide.</i>
   *          </p>
   */
  public describeEvents(
    args: DescribeEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventsCommandOutput>;
  public describeEvents(
    args: DescribeEventsCommandInput,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  public describeEvents(
    args: DescribeEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  public describeEvents(
    args: DescribeEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventsCommandOutput) => void
  ): Promise<DescribeEventsCommandOutput> | void {
    const command = new DescribeEventsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the event subscriptions for a customer account. The description of a
   *          subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>,
   *             <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>,
   *             <code>CreationTime</code>, and <code>Status</code>. </p>
   *          <p>If you specify <code>SubscriptionName</code>, this action lists the description for that
   *          subscription.</p>
   */
  public describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventSubscriptionsCommandOutput>;
  public describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): void;
  public describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): void;
  public describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventSubscriptionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): Promise<DescribeEventSubscriptionsCommandOutput> | void {
    const command = new DescribeEventSubscriptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of the Fleet Advisor collectors in your account.</p>
   */
  public describeFleetAdvisorCollectors(
    args: DescribeFleetAdvisorCollectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetAdvisorCollectorsCommandOutput>;
  public describeFleetAdvisorCollectors(
    args: DescribeFleetAdvisorCollectorsCommandInput,
    cb: (err: any, data?: DescribeFleetAdvisorCollectorsCommandOutput) => void
  ): void;
  public describeFleetAdvisorCollectors(
    args: DescribeFleetAdvisorCollectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetAdvisorCollectorsCommandOutput) => void
  ): void;
  public describeFleetAdvisorCollectors(
    args: DescribeFleetAdvisorCollectorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFleetAdvisorCollectorsCommandOutput) => void),
    cb?: (err: any, data?: DescribeFleetAdvisorCollectorsCommandOutput) => void
  ): Promise<DescribeFleetAdvisorCollectorsCommandOutput> | void {
    const command = new DescribeFleetAdvisorCollectorsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of Fleet Advisor databases in your account.</p>
   */
  public describeFleetAdvisorDatabases(
    args: DescribeFleetAdvisorDatabasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetAdvisorDatabasesCommandOutput>;
  public describeFleetAdvisorDatabases(
    args: DescribeFleetAdvisorDatabasesCommandInput,
    cb: (err: any, data?: DescribeFleetAdvisorDatabasesCommandOutput) => void
  ): void;
  public describeFleetAdvisorDatabases(
    args: DescribeFleetAdvisorDatabasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetAdvisorDatabasesCommandOutput) => void
  ): void;
  public describeFleetAdvisorDatabases(
    args: DescribeFleetAdvisorDatabasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFleetAdvisorDatabasesCommandOutput) => void),
    cb?: (err: any, data?: DescribeFleetAdvisorDatabasesCommandOutput) => void
  ): Promise<DescribeFleetAdvisorDatabasesCommandOutput> | void {
    const command = new DescribeFleetAdvisorDatabasesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides descriptions of large-scale assessment (LSA) analyses produced by your
   *             Fleet Advisor collectors.
   *         </p>
   */
  public describeFleetAdvisorLsaAnalysis(
    args: DescribeFleetAdvisorLsaAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetAdvisorLsaAnalysisCommandOutput>;
  public describeFleetAdvisorLsaAnalysis(
    args: DescribeFleetAdvisorLsaAnalysisCommandInput,
    cb: (err: any, data?: DescribeFleetAdvisorLsaAnalysisCommandOutput) => void
  ): void;
  public describeFleetAdvisorLsaAnalysis(
    args: DescribeFleetAdvisorLsaAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetAdvisorLsaAnalysisCommandOutput) => void
  ): void;
  public describeFleetAdvisorLsaAnalysis(
    args: DescribeFleetAdvisorLsaAnalysisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFleetAdvisorLsaAnalysisCommandOutput) => void),
    cb?: (err: any, data?: DescribeFleetAdvisorLsaAnalysisCommandOutput) => void
  ): Promise<DescribeFleetAdvisorLsaAnalysisCommandOutput> | void {
    const command = new DescribeFleetAdvisorLsaAnalysisCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides descriptions of the schemas discovered by your Fleet Advisor
   *             collectors.</p>
   */
  public describeFleetAdvisorSchemaObjectSummary(
    args: DescribeFleetAdvisorSchemaObjectSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetAdvisorSchemaObjectSummaryCommandOutput>;
  public describeFleetAdvisorSchemaObjectSummary(
    args: DescribeFleetAdvisorSchemaObjectSummaryCommandInput,
    cb: (err: any, data?: DescribeFleetAdvisorSchemaObjectSummaryCommandOutput) => void
  ): void;
  public describeFleetAdvisorSchemaObjectSummary(
    args: DescribeFleetAdvisorSchemaObjectSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetAdvisorSchemaObjectSummaryCommandOutput) => void
  ): void;
  public describeFleetAdvisorSchemaObjectSummary(
    args: DescribeFleetAdvisorSchemaObjectSummaryCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeFleetAdvisorSchemaObjectSummaryCommandOutput) => void),
    cb?: (err: any, data?: DescribeFleetAdvisorSchemaObjectSummaryCommandOutput) => void
  ): Promise<DescribeFleetAdvisorSchemaObjectSummaryCommandOutput> | void {
    const command = new DescribeFleetAdvisorSchemaObjectSummaryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of schemas detected by Fleet Advisor Collectors in your account.</p>
   */
  public describeFleetAdvisorSchemas(
    args: DescribeFleetAdvisorSchemasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetAdvisorSchemasCommandOutput>;
  public describeFleetAdvisorSchemas(
    args: DescribeFleetAdvisorSchemasCommandInput,
    cb: (err: any, data?: DescribeFleetAdvisorSchemasCommandOutput) => void
  ): void;
  public describeFleetAdvisorSchemas(
    args: DescribeFleetAdvisorSchemasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetAdvisorSchemasCommandOutput) => void
  ): void;
  public describeFleetAdvisorSchemas(
    args: DescribeFleetAdvisorSchemasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFleetAdvisorSchemasCommandOutput) => void),
    cb?: (err: any, data?: DescribeFleetAdvisorSchemasCommandOutput) => void
  ): Promise<DescribeFleetAdvisorSchemasCommandOutput> | void {
    const command = new DescribeFleetAdvisorSchemasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about the replication instance types that can be created in the
   *          specified region.</p>
   */
  public describeOrderableReplicationInstances(
    args: DescribeOrderableReplicationInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrderableReplicationInstancesCommandOutput>;
  public describeOrderableReplicationInstances(
    args: DescribeOrderableReplicationInstancesCommandInput,
    cb: (err: any, data?: DescribeOrderableReplicationInstancesCommandOutput) => void
  ): void;
  public describeOrderableReplicationInstances(
    args: DescribeOrderableReplicationInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrderableReplicationInstancesCommandOutput) => void
  ): void;
  public describeOrderableReplicationInstances(
    args: DescribeOrderableReplicationInstancesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeOrderableReplicationInstancesCommandOutput) => void),
    cb?: (err: any, data?: DescribeOrderableReplicationInstancesCommandOutput) => void
  ): Promise<DescribeOrderableReplicationInstancesCommandOutput> | void {
    const command = new DescribeOrderableReplicationInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>For internal use only</p>
   */
  public describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePendingMaintenanceActionsCommandOutput>;
  public describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void
  ): void;
  public describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void
  ): void;
  public describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void),
    cb?: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void
  ): Promise<DescribePendingMaintenanceActionsCommandOutput> | void {
    const command = new DescribePendingMaintenanceActionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the status of the RefreshSchemas operation.</p>
   */
  public describeRefreshSchemasStatus(
    args: DescribeRefreshSchemasStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRefreshSchemasStatusCommandOutput>;
  public describeRefreshSchemasStatus(
    args: DescribeRefreshSchemasStatusCommandInput,
    cb: (err: any, data?: DescribeRefreshSchemasStatusCommandOutput) => void
  ): void;
  public describeRefreshSchemasStatus(
    args: DescribeRefreshSchemasStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRefreshSchemasStatusCommandOutput) => void
  ): void;
  public describeRefreshSchemasStatus(
    args: DescribeRefreshSchemasStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRefreshSchemasStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribeRefreshSchemasStatusCommandOutput) => void
  ): Promise<DescribeRefreshSchemasStatusCommandOutput> | void {
    const command = new DescribeRefreshSchemasStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about replication instances for your account in the current
   *          region.</p>
   */
  public describeReplicationInstances(
    args: DescribeReplicationInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationInstancesCommandOutput>;
  public describeReplicationInstances(
    args: DescribeReplicationInstancesCommandInput,
    cb: (err: any, data?: DescribeReplicationInstancesCommandOutput) => void
  ): void;
  public describeReplicationInstances(
    args: DescribeReplicationInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationInstancesCommandOutput) => void
  ): void;
  public describeReplicationInstances(
    args: DescribeReplicationInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReplicationInstancesCommandOutput) => void),
    cb?: (err: any, data?: DescribeReplicationInstancesCommandOutput) => void
  ): Promise<DescribeReplicationInstancesCommandOutput> | void {
    const command = new DescribeReplicationInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about the task logs for the specified task.</p>
   */
  public describeReplicationInstanceTaskLogs(
    args: DescribeReplicationInstanceTaskLogsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationInstanceTaskLogsCommandOutput>;
  public describeReplicationInstanceTaskLogs(
    args: DescribeReplicationInstanceTaskLogsCommandInput,
    cb: (err: any, data?: DescribeReplicationInstanceTaskLogsCommandOutput) => void
  ): void;
  public describeReplicationInstanceTaskLogs(
    args: DescribeReplicationInstanceTaskLogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationInstanceTaskLogsCommandOutput) => void
  ): void;
  public describeReplicationInstanceTaskLogs(
    args: DescribeReplicationInstanceTaskLogsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReplicationInstanceTaskLogsCommandOutput) => void),
    cb?: (err: any, data?: DescribeReplicationInstanceTaskLogsCommandOutput) => void
  ): Promise<DescribeReplicationInstanceTaskLogsCommandOutput> | void {
    const command = new DescribeReplicationInstanceTaskLogsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about the replication subnet groups.</p>
   */
  public describeReplicationSubnetGroups(
    args: DescribeReplicationSubnetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationSubnetGroupsCommandOutput>;
  public describeReplicationSubnetGroups(
    args: DescribeReplicationSubnetGroupsCommandInput,
    cb: (err: any, data?: DescribeReplicationSubnetGroupsCommandOutput) => void
  ): void;
  public describeReplicationSubnetGroups(
    args: DescribeReplicationSubnetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationSubnetGroupsCommandOutput) => void
  ): void;
  public describeReplicationSubnetGroups(
    args: DescribeReplicationSubnetGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReplicationSubnetGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeReplicationSubnetGroupsCommandOutput) => void
  ): Promise<DescribeReplicationSubnetGroupsCommandOutput> | void {
    const command = new DescribeReplicationSubnetGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the task assessment results from the Amazon S3 bucket that DMS creates in your
   *           Amazon Web Services account.  This action always returns the
   *          latest results.</p>
   *          <p>For more information about DMS task assessments, see
   *            <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a>
   *            in the <i>Database Migration Service User Guide</i>.</p>
   */
  public describeReplicationTaskAssessmentResults(
    args: DescribeReplicationTaskAssessmentResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationTaskAssessmentResultsCommandOutput>;
  public describeReplicationTaskAssessmentResults(
    args: DescribeReplicationTaskAssessmentResultsCommandInput,
    cb: (err: any, data?: DescribeReplicationTaskAssessmentResultsCommandOutput) => void
  ): void;
  public describeReplicationTaskAssessmentResults(
    args: DescribeReplicationTaskAssessmentResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationTaskAssessmentResultsCommandOutput) => void
  ): void;
  public describeReplicationTaskAssessmentResults(
    args: DescribeReplicationTaskAssessmentResultsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeReplicationTaskAssessmentResultsCommandOutput) => void),
    cb?: (err: any, data?: DescribeReplicationTaskAssessmentResultsCommandOutput) => void
  ): Promise<DescribeReplicationTaskAssessmentResultsCommandOutput> | void {
    const command = new DescribeReplicationTaskAssessmentResultsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a paginated list of premigration assessment runs based on filter
   *          settings.</p>
   *          <p>These filter settings can specify a combination of premigration assessment runs,
   *          migration tasks, replication instances, and assessment run status values.</p>
   *          <note>
   *             <p>This operation doesn't return information about individual assessments. For this
   *             information, see the <code>DescribeReplicationTaskIndividualAssessments</code>
   *             operation. </p>
   *          </note>
   */
  public describeReplicationTaskAssessmentRuns(
    args: DescribeReplicationTaskAssessmentRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationTaskAssessmentRunsCommandOutput>;
  public describeReplicationTaskAssessmentRuns(
    args: DescribeReplicationTaskAssessmentRunsCommandInput,
    cb: (err: any, data?: DescribeReplicationTaskAssessmentRunsCommandOutput) => void
  ): void;
  public describeReplicationTaskAssessmentRuns(
    args: DescribeReplicationTaskAssessmentRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationTaskAssessmentRunsCommandOutput) => void
  ): void;
  public describeReplicationTaskAssessmentRuns(
    args: DescribeReplicationTaskAssessmentRunsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeReplicationTaskAssessmentRunsCommandOutput) => void),
    cb?: (err: any, data?: DescribeReplicationTaskAssessmentRunsCommandOutput) => void
  ): Promise<DescribeReplicationTaskAssessmentRunsCommandOutput> | void {
    const command = new DescribeReplicationTaskAssessmentRunsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a paginated list of individual assessments based on filter settings.</p>
   *          <p>These filter settings can specify a combination of premigration assessment runs,
   *          migration tasks, and assessment status values.</p>
   */
  public describeReplicationTaskIndividualAssessments(
    args: DescribeReplicationTaskIndividualAssessmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationTaskIndividualAssessmentsCommandOutput>;
  public describeReplicationTaskIndividualAssessments(
    args: DescribeReplicationTaskIndividualAssessmentsCommandInput,
    cb: (err: any, data?: DescribeReplicationTaskIndividualAssessmentsCommandOutput) => void
  ): void;
  public describeReplicationTaskIndividualAssessments(
    args: DescribeReplicationTaskIndividualAssessmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationTaskIndividualAssessmentsCommandOutput) => void
  ): void;
  public describeReplicationTaskIndividualAssessments(
    args: DescribeReplicationTaskIndividualAssessmentsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeReplicationTaskIndividualAssessmentsCommandOutput) => void),
    cb?: (err: any, data?: DescribeReplicationTaskIndividualAssessmentsCommandOutput) => void
  ): Promise<DescribeReplicationTaskIndividualAssessmentsCommandOutput> | void {
    const command = new DescribeReplicationTaskIndividualAssessmentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about replication tasks for your account in the current
   *          region.</p>
   */
  public describeReplicationTasks(
    args: DescribeReplicationTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationTasksCommandOutput>;
  public describeReplicationTasks(
    args: DescribeReplicationTasksCommandInput,
    cb: (err: any, data?: DescribeReplicationTasksCommandOutput) => void
  ): void;
  public describeReplicationTasks(
    args: DescribeReplicationTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationTasksCommandOutput) => void
  ): void;
  public describeReplicationTasks(
    args: DescribeReplicationTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReplicationTasksCommandOutput) => void),
    cb?: (err: any, data?: DescribeReplicationTasksCommandOutput) => void
  ): Promise<DescribeReplicationTasksCommandOutput> | void {
    const command = new DescribeReplicationTasksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about the schema for the specified endpoint.</p>
   *
   *          <p></p>
   */
  public describeSchemas(
    args: DescribeSchemasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSchemasCommandOutput>;
  public describeSchemas(
    args: DescribeSchemasCommandInput,
    cb: (err: any, data?: DescribeSchemasCommandOutput) => void
  ): void;
  public describeSchemas(
    args: DescribeSchemasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSchemasCommandOutput) => void
  ): void;
  public describeSchemas(
    args: DescribeSchemasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSchemasCommandOutput) => void),
    cb?: (err: any, data?: DescribeSchemasCommandOutput) => void
  ): Promise<DescribeSchemasCommandOutput> | void {
    const command = new DescribeSchemasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns table statistics on the database migration task, including table name, rows
   *          inserted, rows updated, and rows deleted.</p>
   *          <p>Note that the "last updated" column the DMS console only indicates the time that DMS
   *          last updated the table statistics record for a table. It does not indicate the time of the
   *          last update to the table.</p>
   */
  public describeTableStatistics(
    args: DescribeTableStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTableStatisticsCommandOutput>;
  public describeTableStatistics(
    args: DescribeTableStatisticsCommandInput,
    cb: (err: any, data?: DescribeTableStatisticsCommandOutput) => void
  ): void;
  public describeTableStatistics(
    args: DescribeTableStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTableStatisticsCommandOutput) => void
  ): void;
  public describeTableStatistics(
    args: DescribeTableStatisticsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTableStatisticsCommandOutput) => void),
    cb?: (err: any, data?: DescribeTableStatisticsCommandOutput) => void
  ): Promise<DescribeTableStatisticsCommandOutput> | void {
    const command = new DescribeTableStatisticsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Uploads the specified certificate.</p>
   */
  public importCertificate(
    args: ImportCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportCertificateCommandOutput>;
  public importCertificate(
    args: ImportCertificateCommandInput,
    cb: (err: any, data?: ImportCertificateCommandOutput) => void
  ): void;
  public importCertificate(
    args: ImportCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportCertificateCommandOutput) => void
  ): void;
  public importCertificate(
    args: ImportCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportCertificateCommandOutput) => void),
    cb?: (err: any, data?: ImportCertificateCommandOutput) => void
  ): Promise<ImportCertificateCommandOutput> | void {
    const command = new ImportCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all metadata tags attached to an DMS resource, including
   *          replication instance, endpoint, security group, and migration task.
   *          For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html">
   *                <code>Tag</code>
   *             </a> data type description.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the specified endpoint.</p>
   *          <note>
   *             <p>For a MySQL source or target endpoint, don't explicitly specify the database using
   *          the <code>DatabaseName</code> request parameter on the <code>ModifyEndpoint</code> API call.
   *          Specifying <code>DatabaseName</code> when you modify a MySQL endpoint replicates all the
   *          task tables to this single database. For MySQL endpoints, you specify the database only when
   *          you specify the schema in the table-mapping rules of the DMS task.</p>
   *          </note>
   */
  public modifyEndpoint(
    args: ModifyEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyEndpointCommandOutput>;
  public modifyEndpoint(
    args: ModifyEndpointCommandInput,
    cb: (err: any, data?: ModifyEndpointCommandOutput) => void
  ): void;
  public modifyEndpoint(
    args: ModifyEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyEndpointCommandOutput) => void
  ): void;
  public modifyEndpoint(
    args: ModifyEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyEndpointCommandOutput) => void),
    cb?: (err: any, data?: ModifyEndpointCommandOutput) => void
  ): Promise<ModifyEndpointCommandOutput> | void {
    const command = new ModifyEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies an existing DMS event notification subscription. </p>
   */
  public modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyEventSubscriptionCommandOutput>;
  public modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): void;
  public modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): void;
  public modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyEventSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): Promise<ModifyEventSubscriptionCommandOutput> | void {
    const command = new ModifyEventSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the replication instance to apply new settings. You can change one or more
   *          parameters by specifying these parameters and the new values in the request.</p>
   *          <p>Some settings are applied during the maintenance window.</p>
   *
   *          <p></p>
   */
  public modifyReplicationInstance(
    args: ModifyReplicationInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyReplicationInstanceCommandOutput>;
  public modifyReplicationInstance(
    args: ModifyReplicationInstanceCommandInput,
    cb: (err: any, data?: ModifyReplicationInstanceCommandOutput) => void
  ): void;
  public modifyReplicationInstance(
    args: ModifyReplicationInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyReplicationInstanceCommandOutput) => void
  ): void;
  public modifyReplicationInstance(
    args: ModifyReplicationInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyReplicationInstanceCommandOutput) => void),
    cb?: (err: any, data?: ModifyReplicationInstanceCommandOutput) => void
  ): Promise<ModifyReplicationInstanceCommandOutput> | void {
    const command = new ModifyReplicationInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the settings for the specified replication subnet group.</p>
   */
  public modifyReplicationSubnetGroup(
    args: ModifyReplicationSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyReplicationSubnetGroupCommandOutput>;
  public modifyReplicationSubnetGroup(
    args: ModifyReplicationSubnetGroupCommandInput,
    cb: (err: any, data?: ModifyReplicationSubnetGroupCommandOutput) => void
  ): void;
  public modifyReplicationSubnetGroup(
    args: ModifyReplicationSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyReplicationSubnetGroupCommandOutput) => void
  ): void;
  public modifyReplicationSubnetGroup(
    args: ModifyReplicationSubnetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyReplicationSubnetGroupCommandOutput) => void),
    cb?: (err: any, data?: ModifyReplicationSubnetGroupCommandOutput) => void
  ): Promise<ModifyReplicationSubnetGroupCommandOutput> | void {
    const command = new ModifyReplicationSubnetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the specified replication task.</p>
   *          <p>You can't modify the task endpoints. The task must be stopped before you can modify it. </p>
   *          <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks</a> in the
   *             <i>Database Migration Service User Guide</i>.</p>
   */
  public modifyReplicationTask(
    args: ModifyReplicationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyReplicationTaskCommandOutput>;
  public modifyReplicationTask(
    args: ModifyReplicationTaskCommandInput,
    cb: (err: any, data?: ModifyReplicationTaskCommandOutput) => void
  ): void;
  public modifyReplicationTask(
    args: ModifyReplicationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyReplicationTaskCommandOutput) => void
  ): void;
  public modifyReplicationTask(
    args: ModifyReplicationTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyReplicationTaskCommandOutput) => void),
    cb?: (err: any, data?: ModifyReplicationTaskCommandOutput) => void
  ): Promise<ModifyReplicationTaskCommandOutput> | void {
    const command = new ModifyReplicationTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Moves a replication task from its current replication instance to a different target
   *          replication instance using the specified parameters. The target replication instance must
   *          be created with the same or later DMS version as the current replication
   *          instance.</p>
   */
  public moveReplicationTask(
    args: MoveReplicationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MoveReplicationTaskCommandOutput>;
  public moveReplicationTask(
    args: MoveReplicationTaskCommandInput,
    cb: (err: any, data?: MoveReplicationTaskCommandOutput) => void
  ): void;
  public moveReplicationTask(
    args: MoveReplicationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MoveReplicationTaskCommandOutput) => void
  ): void;
  public moveReplicationTask(
    args: MoveReplicationTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MoveReplicationTaskCommandOutput) => void),
    cb?: (err: any, data?: MoveReplicationTaskCommandOutput) => void
  ): Promise<MoveReplicationTaskCommandOutput> | void {
    const command = new MoveReplicationTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Reboots a replication instance. Rebooting results in a momentary outage, until the
   *          replication instance becomes available again.</p>
   */
  public rebootReplicationInstance(
    args: RebootReplicationInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootReplicationInstanceCommandOutput>;
  public rebootReplicationInstance(
    args: RebootReplicationInstanceCommandInput,
    cb: (err: any, data?: RebootReplicationInstanceCommandOutput) => void
  ): void;
  public rebootReplicationInstance(
    args: RebootReplicationInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootReplicationInstanceCommandOutput) => void
  ): void;
  public rebootReplicationInstance(
    args: RebootReplicationInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RebootReplicationInstanceCommandOutput) => void),
    cb?: (err: any, data?: RebootReplicationInstanceCommandOutput) => void
  ): Promise<RebootReplicationInstanceCommandOutput> | void {
    const command = new RebootReplicationInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Populates the schema for the specified endpoint. This is an asynchronous operation and
   *          can take several minutes. You can check the status of this operation by calling the
   *          DescribeRefreshSchemasStatus operation.</p>
   */
  public refreshSchemas(
    args: RefreshSchemasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RefreshSchemasCommandOutput>;
  public refreshSchemas(
    args: RefreshSchemasCommandInput,
    cb: (err: any, data?: RefreshSchemasCommandOutput) => void
  ): void;
  public refreshSchemas(
    args: RefreshSchemasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RefreshSchemasCommandOutput) => void
  ): void;
  public refreshSchemas(
    args: RefreshSchemasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RefreshSchemasCommandOutput) => void),
    cb?: (err: any, data?: RefreshSchemasCommandOutput) => void
  ): Promise<RefreshSchemasCommandOutput> | void {
    const command = new RefreshSchemasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Reloads the target database table with the source data. </p>
   *          <p>You can only use this operation with a task in the <code>RUNNING</code> state, otherwise the service
   *            will throw an <code>InvalidResourceStateFault</code> exception.</p>
   */
  public reloadTables(
    args: ReloadTablesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReloadTablesCommandOutput>;
  public reloadTables(args: ReloadTablesCommandInput, cb: (err: any, data?: ReloadTablesCommandOutput) => void): void;
  public reloadTables(
    args: ReloadTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReloadTablesCommandOutput) => void
  ): void;
  public reloadTables(
    args: ReloadTablesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ReloadTablesCommandOutput) => void),
    cb?: (err: any, data?: ReloadTablesCommandOutput) => void
  ): Promise<ReloadTablesCommandOutput> | void {
    const command = new ReloadTablesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes metadata tags from an DMS resource, including replication instance,
   *          endpoint, security group, and migration task. For more information, see
   *          <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html">
   *                <code>Tag</code>
   *             </a>
   *          data type description.</p>
   */
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTagsFromResourceCommandOutput>;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveTagsFromResourceCommandOutput) => void),
    cb?: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): Promise<RemoveTagsFromResourceCommandOutput> | void {
    const command = new RemoveTagsFromResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Runs large-scale assessment (LSA) analysis on every Fleet Advisor collector in your account.</p>
   */
  public runFleetAdvisorLsaAnalysis(
    args: RunFleetAdvisorLsaAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RunFleetAdvisorLsaAnalysisCommandOutput>;
  public runFleetAdvisorLsaAnalysis(
    args: RunFleetAdvisorLsaAnalysisCommandInput,
    cb: (err: any, data?: RunFleetAdvisorLsaAnalysisCommandOutput) => void
  ): void;
  public runFleetAdvisorLsaAnalysis(
    args: RunFleetAdvisorLsaAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RunFleetAdvisorLsaAnalysisCommandOutput) => void
  ): void;
  public runFleetAdvisorLsaAnalysis(
    args: RunFleetAdvisorLsaAnalysisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RunFleetAdvisorLsaAnalysisCommandOutput) => void),
    cb?: (err: any, data?: RunFleetAdvisorLsaAnalysisCommandOutput) => void
  ): Promise<RunFleetAdvisorLsaAnalysisCommandOutput> | void {
    const command = new RunFleetAdvisorLsaAnalysisCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts the replication task.</p>
   *          <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks </a> in the
   *             <i>Database Migration Service User Guide.</i>
   *          </p>
   */
  public startReplicationTask(
    args: StartReplicationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReplicationTaskCommandOutput>;
  public startReplicationTask(
    args: StartReplicationTaskCommandInput,
    cb: (err: any, data?: StartReplicationTaskCommandOutput) => void
  ): void;
  public startReplicationTask(
    args: StartReplicationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReplicationTaskCommandOutput) => void
  ): void;
  public startReplicationTask(
    args: StartReplicationTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartReplicationTaskCommandOutput) => void),
    cb?: (err: any, data?: StartReplicationTaskCommandOutput) => void
  ): Promise<StartReplicationTaskCommandOutput> | void {
    const command = new StartReplicationTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Starts the replication task assessment for unsupported data types in the source
   *          database. </p>
   *          <p>You can only use this operation for a task if the following conditions are true:</p>
   *          <ul>
   *             <li>
   *                <p>The task must be in the <code>stopped</code> state.</p>
   *             </li>
   *             <li>
   *                <p>The task must have successful connections to the source and target.</p>
   *             </li>
   *          </ul>
   *          <p>If either of these conditions are not met, an <code>InvalidResourceStateFault</code> error will result. </p>
   *          <p>For information about DMS task assessments, see
   *           <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a>
   *           in the <i>Database Migration Service User Guide</i>.</p>
   */
  public startReplicationTaskAssessment(
    args: StartReplicationTaskAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReplicationTaskAssessmentCommandOutput>;
  public startReplicationTaskAssessment(
    args: StartReplicationTaskAssessmentCommandInput,
    cb: (err: any, data?: StartReplicationTaskAssessmentCommandOutput) => void
  ): void;
  public startReplicationTaskAssessment(
    args: StartReplicationTaskAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReplicationTaskAssessmentCommandOutput) => void
  ): void;
  public startReplicationTaskAssessment(
    args: StartReplicationTaskAssessmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartReplicationTaskAssessmentCommandOutput) => void),
    cb?: (err: any, data?: StartReplicationTaskAssessmentCommandOutput) => void
  ): Promise<StartReplicationTaskAssessmentCommandOutput> | void {
    const command = new StartReplicationTaskAssessmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a new premigration assessment run for one or more individual assessments
   *          of a migration task.</p>
   *          <p>The assessments that you can specify depend on the source and target database engine and
   *          the migration type defined for the given task. To run this operation, your migration task
   *          must already be created. After you run this operation, you can review the status of each
   *          individual assessment. You can also run the migration task manually after the assessment
   *          run and its individual assessments complete.</p>
   */
  public startReplicationTaskAssessmentRun(
    args: StartReplicationTaskAssessmentRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReplicationTaskAssessmentRunCommandOutput>;
  public startReplicationTaskAssessmentRun(
    args: StartReplicationTaskAssessmentRunCommandInput,
    cb: (err: any, data?: StartReplicationTaskAssessmentRunCommandOutput) => void
  ): void;
  public startReplicationTaskAssessmentRun(
    args: StartReplicationTaskAssessmentRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReplicationTaskAssessmentRunCommandOutput) => void
  ): void;
  public startReplicationTaskAssessmentRun(
    args: StartReplicationTaskAssessmentRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartReplicationTaskAssessmentRunCommandOutput) => void),
    cb?: (err: any, data?: StartReplicationTaskAssessmentRunCommandOutput) => void
  ): Promise<StartReplicationTaskAssessmentRunCommandOutput> | void {
    const command = new StartReplicationTaskAssessmentRunCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops the replication task.</p>
   */
  public stopReplicationTask(
    args: StopReplicationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopReplicationTaskCommandOutput>;
  public stopReplicationTask(
    args: StopReplicationTaskCommandInput,
    cb: (err: any, data?: StopReplicationTaskCommandOutput) => void
  ): void;
  public stopReplicationTask(
    args: StopReplicationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopReplicationTaskCommandOutput) => void
  ): void;
  public stopReplicationTask(
    args: StopReplicationTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopReplicationTaskCommandOutput) => void),
    cb?: (err: any, data?: StopReplicationTaskCommandOutput) => void
  ): Promise<StopReplicationTaskCommandOutput> | void {
    const command = new StopReplicationTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Tests the connection between the replication instance and the endpoint.</p>
   */
  public testConnection(
    args: TestConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestConnectionCommandOutput>;
  public testConnection(
    args: TestConnectionCommandInput,
    cb: (err: any, data?: TestConnectionCommandOutput) => void
  ): void;
  public testConnection(
    args: TestConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestConnectionCommandOutput) => void
  ): void;
  public testConnection(
    args: TestConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TestConnectionCommandOutput) => void),
    cb?: (err: any, data?: TestConnectionCommandOutput) => void
  ): Promise<TestConnectionCommandOutput> | void {
    const command = new TestConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
