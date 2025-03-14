// smithy-typescript generated code
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import {
  ActionSource,
  ActionStatus,
  AdditionalInferenceSpecificationDefinition,
  AlgorithmSpecification,
  AlgorithmStatus,
  AlgorithmStatusDetails,
  AlgorithmValidationSpecification,
  AnnotationConsolidationConfig,
  AppNetworkAccessType,
  AppSecurityGroupManagement,
  AppSpecification,
  AppStatus,
  AppType,
  ArtifactSource,
  AsyncInferenceConfig,
  AthenaDatasetDefinition,
  AuthMode,
  AutoMLCandidate,
  AutoMLChannel,
  AutoMLJobArtifacts,
  AutoMLJobCompletionCriteria,
  AutoMLJobConfig,
  AutoMLJobObjective,
  AutoMLJobSecondaryStatus,
  AutoMLJobStatus,
  AutoMLOutputDataConfig,
  AutoMLPartialFailureReason,
  BatchStrategy,
  Bias,
  CaptureStatus,
  CategoricalParameter,
  Channel,
  CheckpointConfig,
  CognitoConfig,
  CognitoMemberDefinition,
  CollectionConfiguration,
  CompilationJobStatus,
  ContainerDefinition,
  ContentClassifier,
  ContextSource,
  DataCaptureConfig,
  DataQualityAppSpecification,
  DataQualityBaselineConfig,
  DataQualityJobInput,
  DeploymentConfig,
  DomainSettings,
  EdgeOutputConfig,
  EdgePresetDeploymentType,
  EndpointInput,
  FeatureDefinition,
  FeatureType,
  FlowDefinitionOutputConfig,
  GitConfig,
  HumanLoopActivationConfig,
  HumanLoopConfig,
  HumanLoopRequestSource,
  HyperParameterTrainingJobDefinition,
  HyperParameterTuningJobConfig,
  HyperParameterTuningJobObjectiveType,
  HyperParameterTuningJobWarmStartConfig,
  InferenceSpecification,
  InputConfig,
  KernelGatewayImageConfig,
  MetadataProperties,
  MetricsSource,
  ModelApprovalStatus,
  ModelDeployConfig,
  MonitoringConstraintsResource,
  MonitoringNetworkConfig,
  MonitoringOutputConfig,
  MonitoringResources,
  MonitoringStatisticsResource,
  MonitoringStoppingCondition,
  NeoVpcConfig,
  ObjectiveStatus,
  OfflineStoreConfig,
  OnlineStoreConfig,
  OutputConfig,
  OutputDataConfig,
  ProblemType,
  ProcessingInstanceType,
  ProcessingS3DataDistributionType,
  ProcessingS3InputMode,
  ProcessingS3UploadMode,
  ProductionVariant,
  ProductionVariantAcceleratorType,
  ProductionVariantInstanceType,
  ProductionVariantServerlessConfig,
  PublicWorkforceTaskPrice,
  ResourceConfig,
  ResourceSpec,
  RetryStrategy,
  StoppingCondition,
  Tag,
  TrainingSpecification,
  TransformInput,
  TransformJobDefinition,
  TransformOutput,
  TransformResources,
  UserContext,
  UserSettings,
  VpcConfig,
} from "./models_0";

export interface CreateImageResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the image.</p>
   */
  ImageArn?: string;
}

export namespace CreateImageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateImageResponse): any => ({
    ...obj,
  });
}

export interface CreateImageVersionRequest {
  /**
   * <p>The registry path of the container image to use as the starting point for this
   *         version. The path is an Amazon Elastic Container Registry (ECR) URI in the following format:</p>
   *          <p>
   *             <code><acct-id>.dkr.ecr.<region>.amazonaws.com/<repo-name[:tag] or [@digest]></code>
   *          </p>
   */
  BaseImage: string | undefined;

  /**
   * <p>A unique ID. If not specified, the Amazon Web Services CLI and Amazon Web Services SDKs, such as the SDK for Python
   *         (Boto3), add a unique value to the call.</p>
   */
  ClientToken?: string;

  /**
   * <p>The <code>ImageName</code> of the <code>Image</code> to create a version of.</p>
   */
  ImageName: string | undefined;
}

export namespace CreateImageVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateImageVersionRequest): any => ({
    ...obj,
  });
}

export interface CreateImageVersionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the image version.</p>
   */
  ImageVersionArn?: string;
}

export namespace CreateImageVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateImageVersionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the range of environment parameters</p>
 */
export interface EnvironmentParameterRanges {
  /**
   * <p>Specified a list of parameters for each category.</p>
   */
  CategoricalParameterRanges?: CategoricalParameter[];
}

export namespace EnvironmentParameterRanges {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnvironmentParameterRanges): any => ({
    ...obj,
  });
}

/**
 * <p>The endpoint configuration for the load test.</p>
 */
export interface EndpointInputConfiguration {
  /**
   * <p>The instance types to use for the load test.</p>
   */
  InstanceType: ProductionVariantInstanceType | string | undefined;

  /**
   * <p>The inference specification name in the model package version.</p>
   */
  InferenceSpecificationName?: string;

  /**
   * <p> The parameter you want to benchmark against.</p>
   */
  EnvironmentParameterRanges?: EnvironmentParameterRanges;
}

export namespace EndpointInputConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointInputConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the maximum number of jobs that can run in parallel
 *     and the maximum number of jobs that can run.</p>
 */
export interface RecommendationJobResourceLimit {
  /**
   * <p>Defines the maximum number of load tests.</p>
   */
  MaxNumberOfTests?: number;

  /**
   * <p>Defines the maximum number of parallel load tests.</p>
   */
  MaxParallelOfTests?: number;
}

export namespace RecommendationJobResourceLimit {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecommendationJobResourceLimit): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the traffic pattern.</p>
 */
export interface Phase {
  /**
   * <p>Specifies how many concurrent users to start with.</p>
   */
  InitialNumberOfUsers?: number;

  /**
   * <p>Specified how many new users to spawn in a minute.</p>
   */
  SpawnRate?: number;

  /**
   * <p>Specifies how long traffic phase should be.</p>
   */
  DurationInSeconds?: number;
}

export namespace Phase {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Phase): any => ({
    ...obj,
  });
}

export enum TrafficType {
  PHASES = "PHASES",
}

/**
 * <p>Defines the traffic pattern of the load test.</p>
 */
export interface TrafficPattern {
  /**
   * <p>Defines the traffic patterns.</p>
   */
  TrafficType?: TrafficType | string;

  /**
   * <p>Defines the phases traffic specification.</p>
   */
  Phases?: Phase[];
}

export namespace TrafficPattern {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrafficPattern): any => ({
    ...obj,
  });
}

/**
 * <p>The input configuration of the recommendation job.</p>
 */
export interface RecommendationJobInputConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of a versioned model package.</p>
   */
  ModelPackageVersionArn: string | undefined;

  /**
   * <p>Specifies the maximum duration of the job, in seconds.></p>
   */
  JobDurationInSeconds?: number;

  /**
   * <p>Specifies the traffic pattern of the job.</p>
   */
  TrafficPattern?: TrafficPattern;

  /**
   * <p>Defines the resource limit of the job.</p>
   */
  ResourceLimit?: RecommendationJobResourceLimit;

  /**
   * <p>Specifies the endpoint configuration to use for a job.</p>
   */
  EndpointConfigurations?: EndpointInputConfiguration[];

  /**
   * <p>The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service (Amazon Web Services KMS) key
   *          that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.
   *          This key will be passed to SageMaker Hosting for endpoint creation. </p>
   *
   *          <p>The SageMaker execution role must have <code>kms:CreateGrant</code> permission in order to encrypt data on the storage
   *          volume of the endpoints created for inference recommendation. The inference recommendation job will fail
   *          asynchronously during endpoint configuration creation if the role passed does not have
   *          <code>kms:CreateGrant</code> permission.</p>
   *
   *          <p>The <code>KmsKeyId</code> can be any of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>// KMS Key ID</p>
   *                <p>
   *                   <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// Amazon Resource Name (ARN) of a KMS Key</p>
   *                <p>
   *                   <code>"arn:aws:kms:<region>:<account>:key/<key-id-12ab-34cd-56ef-1234567890ab>"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// KMS Key Alias</p>
   *                <p>
   *                   <code>"alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// Amazon Resource Name (ARN) of a KMS Key Alias</p>
   *                <p>
   *                   <code>"arn:aws:kms:<region>:<account>:alias/<ExampleAlias>"</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about key identifiers, see
   *          <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id">Key identifiers (KeyID)</a> in the
   *          Amazon Web Services Key Management Service (Amazon Web Services KMS) documentation.</p>
   */
  VolumeKmsKeyId?: string;
}

export namespace RecommendationJobInputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecommendationJobInputConfig): any => ({
    ...obj,
  });
}

export enum RecommendationJobType {
  ADVANCED = "Advanced",
  DEFAULT = "Default",
}

/**
 * <p>Provides information about the output configuration for the compiled
 *          model.</p>
 */
export interface RecommendationJobCompiledOutputConfig {
  /**
   * <p>Identifies the Amazon S3 bucket where you want SageMaker to store the
   *          compiled model artifacts.</p>
   */
  S3OutputUri?: string;
}

export namespace RecommendationJobCompiledOutputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecommendationJobCompiledOutputConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the output configuration for the compiled model.</p>
 */
export interface RecommendationJobOutputConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service (Amazon Web Services KMS) key
   *          that Amazon SageMaker uses to encrypt your output artifacts with Amazon S3 server-side encryption.
   *          The SageMaker execution role must have <code>kms:GenerateDataKey</code> permission.</p>
   *
   *          <p>The <code>KmsKeyId</code> can be any of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>// KMS Key ID</p>
   *                <p>
   *                   <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// Amazon Resource Name (ARN) of a KMS Key</p>
   *                <p>
   *                   <code>"arn:aws:kms:<region>:<account>:key/<key-id-12ab-34cd-56ef-1234567890ab>"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// KMS Key Alias</p>
   *                <p>
   *                   <code>"alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// Amazon Resource Name (ARN) of a KMS Key Alias</p>
   *                <p>
   *                   <code>"arn:aws:kms:<region>:<account>:alias/<ExampleAlias>"</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about key identifiers, see
   *          <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id">Key identifiers (KeyID)</a> in the
   *          Amazon Web Services Key Management Service (Amazon Web Services KMS) documentation.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Provides information about the output configuration for the compiled
   *          model.</p>
   */
  CompiledOutputConfig?: RecommendationJobCompiledOutputConfig;
}

export namespace RecommendationJobOutputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecommendationJobOutputConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The model latency threshold.</p>
 */
export interface ModelLatencyThreshold {
  /**
   * <p>The model latency percentile threshold.</p>
   */
  Percentile?: string;

  /**
   * <p>The model latency percentile value in milliseconds.</p>
   */
  ValueInMilliseconds?: number;
}

export namespace ModelLatencyThreshold {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelLatencyThreshold): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies conditions for stopping a job. When a job reaches a
 *            stopping condition limit, SageMaker ends the job.</p>
 */
export interface RecommendationJobStoppingConditions {
  /**
   * <p>The maximum number of requests per minute expected for the endpoint.</p>
   */
  MaxInvocations?: number;

  /**
   * <p>The interval of time taken by a model to respond as viewed from SageMaker.
   *           The interval includes the local communication time taken to send the request
   *           and to fetch the response from the container of a model and the time taken to
   *           complete the inference in the container.</p>
   */
  ModelLatencyThresholds?: ModelLatencyThreshold[];
}

export namespace RecommendationJobStoppingConditions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecommendationJobStoppingConditions): any => ({
    ...obj,
  });
}

export interface CreateInferenceRecommendationsJobRequest {
  /**
   * <p>A name for the recommendation job. The name must be unique within
   *            the Amazon Web Services Region and within your Amazon Web Services account.</p>
   */
  JobName: string | undefined;

  /**
   * <p>Defines the type of recommendation job. Specify <code>Default</code> to initiate an instance
   *            recommendation and <code>Advanced</code> to initiate a load test. If left unspecified,
   *            Amazon SageMaker Inference Recommender will run an instance recommendation (<code>DEFAULT</code>) job.</p>
   */
  JobType: RecommendationJobType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker
   *     to perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Provides information about the versioned model package Amazon Resource Name (ARN),
   *     the traffic pattern, and endpoint configurations.</p>
   */
  InputConfig: RecommendationJobInputConfig | undefined;

  /**
   * <p>Description of the recommendation job.</p>
   */
  JobDescription?: string;

  /**
   * <p>A set of conditions for stopping a recommendation job.  If any of
   *           the conditions are met, the job is automatically stopped.</p>
   */
  StoppingConditions?: RecommendationJobStoppingConditions;

  /**
   * <p>Provides information about the output artifacts and the KMS key
   *          to use for Amazon S3 server-side encryption.</p>
   */
  OutputConfig?: RecommendationJobOutputConfig;

  /**
   * <p>The metadata that you apply to Amazon Web Services resources to help you
   *            categorize and organize them. Each tag consists of a key and a value, both of
   *            which you define. For more information, see
   *            <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>
   *            in the Amazon Web Services General Reference.</p>
   */
  Tags?: Tag[];
}

export namespace CreateInferenceRecommendationsJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInferenceRecommendationsJobRequest): any => ({
    ...obj,
  });
}

export interface CreateInferenceRecommendationsJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommendation job.</p>
   */
  JobArn: string | undefined;
}

export namespace CreateInferenceRecommendationsJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInferenceRecommendationsJobResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Provided configuration information for the worker UI for a labeling job. Provide
 *             either <code>HumanTaskUiArn</code> or <code>UiTemplateS3Uri</code>.</p>
 *         <p>For named entity recognition, 3D point cloud and video frame labeling jobs, use
 *                 <code>HumanTaskUiArn</code>.</p>
 *         <p>For all other Ground Truth built-in task types and custom task types, use
 *                 <code>UiTemplateS3Uri</code> to specify the location of a worker task template in
 *             Amazon S3.</p>
 */
export interface UiConfig {
  /**
   * <p>The Amazon S3 bucket location of the UI template, or worker task template. This is the
   *             template used to render the worker UI and tools for labeling job tasks. For more
   *             information about the contents of a UI template, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-custom-templates-step2.html"> Creating Your Custom
   *                 Labeling Task Template</a>.</p>
   */
  UiTemplateS3Uri?: string;

  /**
   * <p>The ARN of the worker task template used to render the worker UI and tools for
   *             labeling job tasks.</p>
   *         <p>Use this parameter when you are creating a labeling job for named entity recognition,
   *             3D point cloud and video frame labeling jobs. Use your labeling job task type to select
   *             one of the following ARNs and use it with this parameter when you create a labeling job.
   *             Replace <code>aws-region</code> with the Amazon Web Services Region you are creating your labeling job
   *             in. For example, replace <code>aws-region</code> with <code>us-west-1</code> if you
   *             create a labeling job in US West (N. California).</p>
   *         <p>
   *             <b>Named Entity Recognition</b>
   *          </p>
   *         <p>Use the following <code>HumanTaskUiArn</code> for named entity recognition labeling
   *             jobs:</p>
   *         <p>
   *             <code>arn:aws:sagemaker:aws-region:394669845002:human-task-ui/NamedEntityRecognition</code>
   *          </p>
   *
   *         <p>
   *             <b>3D Point Cloud HumanTaskUiArns</b>
   *          </p>
   *
   *         <p>Use this <code>HumanTaskUiArn</code> for 3D point cloud object detection and 3D point
   *             cloud object detection adjustment labeling jobs. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:sagemaker:aws-region:394669845002:human-task-ui/PointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p> Use this <code>HumanTaskUiArn</code> for 3D point cloud object tracking and 3D point
   *             cloud object tracking adjustment labeling jobs. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:sagemaker:aws-region:394669845002:human-task-ui/PointCloudObjectTracking</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p> Use this <code>HumanTaskUiArn</code> for 3D point cloud semantic segmentation and 3D
   *             point cloud semantic segmentation adjustment labeling jobs.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:sagemaker:aws-region:394669845002:human-task-ui/PointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>Video Frame HumanTaskUiArns</b>
   *          </p>
   *
   *         <p>Use this <code>HumanTaskUiArn</code> for video frame object detection and video frame
   *             object detection adjustment labeling jobs. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:sagemaker:region:394669845002:human-task-ui/VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p> Use this <code>HumanTaskUiArn</code> for video frame object tracking and video frame
   *             object tracking adjustment labeling jobs. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:sagemaker:aws-region:394669845002:human-task-ui/VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  HumanTaskUiArn?: string;
}

export namespace UiConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UiConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Information required for human workers to complete a labeling task.</p>
 */
export interface HumanTaskConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the work team assigned to complete the tasks.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * <p>Information about the user interface that workers use to complete the labeling
   *             task.</p>
   */
  UiConfig: UiConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a Lambda function that is run before a data object
   *             is sent to a human worker. Use this function to provide input to a custom labeling
   *             job.</p>
   *         <p>For <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html">built-in
   *                 task types</a>, use one of the following Amazon SageMaker Ground Truth Lambda function ARNs for
   *                 <code>PreHumanTaskLambdaArn</code>. For custom labeling workflows, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-custom-templates-step3.html#sms-custom-templates-step3-prelambda">Pre-annotation Lambda</a>. </p>
   *
   *
   *
   *          <p>
   *             <b>Bounding box</b> - Finds the most similar boxes from
   *                     different workers based on the Jaccard index of the boxes.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *           <p>
   *             <b>Image classification</b> - Uses a variant of the Expectation
   *                     Maximization approach to estimate the true class of an image based on
   *                     annotations from individual workers.</p>
   *
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Multi-label image classification</b> - Uses a variant of the Expectation
   *                     Maximization approach to estimate the true classes of an image based on
   *                     annotations from individual workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Semantic segmentation</b> - Treats each pixel in an image as
   *                     a multi-class classification and treats pixel annotations from workers as
   *                     "votes" for the correct label.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Text classification</b> - Uses a variant of the Expectation
   *                     Maximization approach to estimate the true class of text based on annotations
   *                     from individual workers.</p>
   *             <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Multi-label text classification</b> - Uses a variant of the
   *                     Expectation Maximization approach to estimate the true classes of text based on
   *                     annotations from individual workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Named entity recognition</b> - Groups similar selections and
   *                     calculates aggregate boundaries, resolving to most-assigned label.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *
   *         <p>
   *             <b>Video Classification</b> - Use this task type when you need workers to classify videos using
   *             predefined labels that you specify. Workers are shown videos and are asked to choose one
   *             label for each video.</p>
   *
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>Video Frame Object Detection</b> - Use this task type to
   *             have workers identify and locate objects in a sequence of video frames (images extracted
   *             from a video) using bounding boxes. For example, you can use this task to ask workers to
   *             identify and localize various objects in a series of video frames, such as cars, bikes,
   *             and pedestrians.</p>
   *
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>Video Frame Object Tracking</b> - Use this task type to
   *             have workers track the movement of objects in a sequence of video frames (images
   *             extracted from a video) using bounding boxes. For example, you can use this task to ask
   *             workers to track the movement of objects, such as cars, bikes, and pedestrians. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *
   *         <p>
   *             <b>3D Point Cloud Modalities</b>
   *          </p>
   *         <p>Use the following pre-annotation lambdas for 3D point cloud labeling modality tasks.
   *             See <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-point-cloud-task-types.html">3D Point Cloud Task types
   *             </a> to learn more. </p>
   *
   *
   *         <p>
   *             <b>3D Point Cloud Object Detection</b> -
   *         Use this task type when you want workers to classify objects in a 3D point cloud by
   *         drawing 3D cuboids around objects. For example, you can use this task type to ask workers
   *         to identify different types of objects in a point cloud, such as cars, bikes, and pedestrians.</p>
   *                 <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>3D Point Cloud Object Tracking</b> -
   *         Use this task type when you want workers to draw 3D cuboids around objects
   *         that appear in a sequence of 3D point cloud frames.
   *         For example, you can use this task type to ask workers to track
   *         the movement of vehicles across multiple point cloud frames.
   *         </p>
   *                 <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-3DPointCloudObjectTracking</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *         <p>
   *             <b>3D Point Cloud Semantic Segmentation</b> -
   *             Use this task type when you want workers to create a point-level semantic segmentation masks by
   *             painting objects in a 3D point cloud using different colors where each color is assigned to one of
   *             the classes you specify.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>Use the following ARNs for Label Verification and Adjustment Jobs</b>
   *          </p>
   *         <p>Use label verification and adjustment jobs to review and adjust labels. To learn more,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-verification-data.html">Verify and Adjust Labels </a>.</p>
   *
   *             <p>
   *             <b>Bounding box verification</b> - Uses a variant of the
   *                 Expectation Maximization approach to estimate the true class of verification
   *                 judgement for bounding box labels based on annotations from individual
   *                 workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Bounding box adjustment</b> - Finds the most similar boxes
   *                     from different workers based on the Jaccard index of the adjusted
   *                     annotations.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Semantic segmentation verification</b> - Uses a variant of
   *                     the Expectation Maximization approach to estimate the true class of verification
   *                     judgment for semantic segmentation labels based on annotations from individual
   *                     workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Semantic segmentation adjustment</b> - Treats each pixel in
   *                     an image as a multi-class classification and treats pixel adjusted annotations
   *                     from workers as "votes" for the correct label.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *
   *         <p>
   *             <b>Video Frame Object Detection Adjustment</b> -
   *             Use this task type when you want workers to adjust bounding boxes that workers have added
   *             to video frames to classify and localize objects in a sequence of video frames.</p>
   *
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>Video Frame Object Tracking Adjustment</b> -
   *             Use this task type when you want workers to adjust bounding boxes that workers have added
   *             to video frames to track object movement across a sequence of video frames.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *
   *         <p>
   *             <b>3D point cloud object detection adjustment</b> - Adjust
   *             3D cuboids in a point cloud frame. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>3D point cloud object tracking adjustment</b> - Adjust 3D
   *             cuboids across a sequence of point cloud frames. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>3D point cloud semantic segmentation adjustment</b> -
   *             Adjust semantic segmentation masks in a 3D point cloud. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  PreHumanTaskLambdaArn: string | undefined;

  /**
   * <p>Keywords used to describe the task so that workers on Amazon Mechanical Turk can
   *             discover the task.</p>
   */
  TaskKeywords?: string[];

  /**
   * <p>A title for the task for your human workers.</p>
   */
  TaskTitle: string | undefined;

  /**
   * <p>A description of the task for your human workers.</p>
   */
  TaskDescription: string | undefined;

  /**
   * <p>The number of human workers that will label an object. </p>
   */
  NumberOfHumanWorkersPerDataObject: number | undefined;

  /**
   * <p>The amount of time that a worker has to complete a task. </p>
   *         <p>If you create a custom labeling job, the maximum value for this parameter is 8 hours
   *             (28,800 seconds).</p>
   *         <p>If you create a labeling job using a <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html">built-in task type</a> the maximum
   *             for this parameter depends on the task type you use:</p>
   *         <ul>
   *             <li>
   *                 <p>For <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-label-images.html">image</a> and
   *                     <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-label-text.html">text</a> labeling jobs,
   *                     the maximum is 8 hours (28,800 seconds).</p>
   *             </li>
   *             <li>
   *                 <p>For <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-point-cloud.html">3D point cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-video.html">video frame</a> labeling jobs, the maximum is 30 days (2952,000 seconds) for non-AL mode. For most users, the maximum is also 30 days.</p>
   *             </li>
   *          </ul>
   */
  TaskTimeLimitInSeconds: number | undefined;

  /**
   * <p>The length of time that a task remains available for labeling by human workers. The
   *             default and maximum values for this parameter depend on the type of workforce you
   *             use.</p>
   *         <ul>
   *             <li>
   *                 <p>If you choose the Amazon Mechanical Turk workforce, the maximum is 12 hours (43,200 seconds).
   *                     The default is 6 hours (21,600 seconds).</p>
   *             </li>
   *             <li>
   *                 <p>If you choose a private or vendor workforce, the default value is 30 days (2592,000 seconds) for non-AL mode. For most users, the maximum is also 30 days.</p>
   *             </li>
   *          </ul>
   */
  TaskAvailabilityLifetimeInSeconds?: number;

  /**
   * <p>Defines the maximum number of data objects that can be labeled by human workers at the
   *             same time. Also referred to as batch size. Each object may have more than one worker at one time.
   *             The default value is 1000 objects.</p>
   */
  MaxConcurrentTaskCount?: number;

  /**
   * <p>Configures how labels are consolidated across human workers.</p>
   */
  AnnotationConsolidationConfig: AnnotationConsolidationConfig | undefined;

  /**
   * <p>The price that you pay for each task performed by an Amazon Mechanical Turk worker.</p>
   */
  PublicWorkforceTaskPrice?: PublicWorkforceTaskPrice;
}

export namespace HumanTaskConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HumanTaskConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Attributes of the data specified by the customer. Use these to describe the data to be
 *             labeled.</p>
 */
export interface LabelingJobDataAttributes {
  /**
   * <p>Declares that your content is free of personally identifiable information or adult
   *             content. SageMaker may restrict the Amazon Mechanical Turk workers that can view your task
   *             based on this information.</p>
   */
  ContentClassifiers?: (ContentClassifier | string)[];
}

export namespace LabelingJobDataAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobDataAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon S3 location of the input data objects.</p>
 */
export interface LabelingJobS3DataSource {
  /**
   * <p>The Amazon S3 location of the manifest file that describes the input data objects. </p>
   *         <p>The input manifest file referenced in <code>ManifestS3Uri</code> must contain one of
   *             the following keys: <code>source-ref</code> or <code>source</code>. The value of the
   *             keys are interpreted as follows:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>source-ref</code>: The source of the object is the Amazon S3 object
   *                     specified in the value. Use this value when the object is a binary object, such
   *                     as an image.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>source</code>: The source of the object is the value. Use this
   *                     value when the object is a text value.</p>
   *             </li>
   *          </ul>
   *         <p>If you are a new user of Ground Truth, it is recommended you review <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-input-data-input-manifest.html">Use an Input Manifest File </a> in the Amazon SageMaker Developer Guide to learn how to
   *             create an input manifest file.</p>
   */
  ManifestS3Uri: string | undefined;
}

export namespace LabelingJobS3DataSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobS3DataSource): any => ({
    ...obj,
  });
}

/**
 * <p>An Amazon SNS data source used for streaming labeling jobs.</p>
 */
export interface LabelingJobSnsDataSource {
  /**
   * <p>The Amazon SNS input topic Amazon Resource Name (ARN). Specify the ARN of the input topic
   *       you will use to send new data objects to a streaming labeling job.</p>
   */
  SnsTopicArn: string | undefined;
}

export namespace LabelingJobSnsDataSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobSnsDataSource): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the location of input data.</p>
 *
 *          <p>You must specify at least one of the following: <code>S3DataSource</code> or <code>SnsDataSource</code>.</p>
 *          <p>Use <code>SnsDataSource</code> to specify an SNS input topic
 *     for a streaming labeling job. If you do not specify
 *     and SNS input topic ARN, Ground Truth will create a one-time labeling job.</p>
 *          <p>Use <code>S3DataSource</code> to specify an input
 *     manifest file for both streaming and one-time labeling jobs.
 *     Adding an <code>S3DataSource</code> is optional if you use <code>SnsDataSource</code> to create a streaming labeling job.</p>
 */
export interface LabelingJobDataSource {
  /**
   * <p>The Amazon S3 location of the input data objects.</p>
   */
  S3DataSource?: LabelingJobS3DataSource;

  /**
   * <p>An Amazon SNS data source used for streaming labeling jobs. To learn more, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-streaming-labeling-job.html#sms-streaming-how-it-works-send-data">Send Data to a Streaming Labeling Job</a>. </p>
   */
  SnsDataSource?: LabelingJobSnsDataSource;
}

export namespace LabelingJobDataSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobDataSource): any => ({
    ...obj,
  });
}

/**
 * <p>Input configuration information for a labeling job.</p>
 */
export interface LabelingJobInputConfig {
  /**
   * <p>The location of the input data.</p>
   */
  DataSource: LabelingJobDataSource | undefined;

  /**
   * <p>Attributes of the data specified by the customer.</p>
   */
  DataAttributes?: LabelingJobDataAttributes;
}

export namespace LabelingJobInputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobInputConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Configure encryption on the storage volume attached to the ML compute instance used to
 *             run automated data labeling model training and inference. </p>
 */
export interface LabelingJobResourceConfig {
  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data on the storage volume
   *             attached to the ML compute instance(s) that run the training and inference jobs used for
   *             automated data labeling. </p>
   *         <p>You can only specify a <code>VolumeKmsKeyId</code> when you create a labeling job with
   *             automated data labeling enabled using the API operation <code>CreateLabelingJob</code>.
   *             You cannot specify an Amazon Web Services KMS key to encrypt the storage volume used for
   *             automated data labeling model training and inference when you create a labeling job
   *             using the console. To learn more, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-security.html">Output Data and Storage Volume
   *                 Encryption</a>.</p>
   *         <p>The <code>VolumeKmsKeyId</code> can be any of the following formats:</p>
   *         <ul>
   *             <li>
   *                 <p>KMS Key ID</p>
   *                 <p>
   *                     <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>Amazon Resource Name (ARN) of a KMS Key</p>
   *                 <p>
   *                     <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Specifies a VPC that your training jobs and hosted models have access to. Control
   *             access to and from your training and model containers by configuring the VPC. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs
   *                 by Using an Amazon Virtual Private Cloud</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace LabelingJobResourceConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobResourceConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Provides configuration information for auto-labeling of your data objects. A
 *                 <code>LabelingJobAlgorithmsConfig</code> object must be supplied in order to use
 *             auto-labeling.</p>
 */
export interface LabelingJobAlgorithmsConfig {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the algorithm used for auto-labeling. You
   *             must select one of the following ARNs:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <i>Image classification</i>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/image-classification</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <i>Text classification</i>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/text-classification</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <i>Object detection</i>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/object-detection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <i>Semantic Segmentation</i>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/semantic-segmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  LabelingJobAlgorithmSpecificationArn: string | undefined;

  /**
   * <p>At the end of an auto-label job Ground Truth sends the Amazon Resource Name (ARN) of the final
   *             model used for auto-labeling. You can use this model as the starting point for
   *             subsequent similar jobs by providing the ARN of the model here. </p>
   */
  InitialActiveLearningModelArn?: string;

  /**
   * <p>Provides configuration information for a labeling job.</p>
   */
  LabelingJobResourceConfig?: LabelingJobResourceConfig;
}

export namespace LabelingJobAlgorithmsConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobAlgorithmsConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Output configuration information for a labeling job.</p>
 */
export interface LabelingJobOutputConfig {
  /**
   * <p>The Amazon S3 location to write output data.</p>
   */
  S3OutputPath: string | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service ID of the key used to encrypt the output data, if any.</p>
   *         <p>If you provide your own KMS key ID, you must add the required permissions to your KMS
   *             key described in <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-security-permission.html#sms-security-kms-permissions">Encrypt Output Data and Storage Volume with Amazon Web Services KMS</a>.</p>
   *         <p>If you don't provide a KMS key ID, Amazon SageMaker uses the default Amazon Web Services KMS key for Amazon S3 for your
   *             role's account to encrypt your output data.</p>
   *         <p>If you use a bucket policy with an <code>s3:PutObject</code> permission that only
   *             allows objects with server-side encryption, set the condition key of
   *                 <code>s3:x-amz-server-side-encryption</code> to <code>"aws:kms"</code>. For more
   *             information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html">KMS-Managed Encryption Keys</a> in the <i>Amazon Simple Storage Service Developer
   *                 Guide.</i>
   *          </p>
   */
  KmsKeyId?: string;

  /**
   * <p>An Amazon Simple Notification Service (Amazon SNS) output topic ARN. Provide a <code>SnsTopicArn</code> if you want to
   *             do real time chaining to another streaming job and receive an Amazon SNS notifications each
   *             time a data object is submitted by a worker.</p>
   *          <p>If you provide an <code>SnsTopicArn</code> in <code>OutputConfig</code>, when workers
   *             complete labeling tasks, Ground Truth will send labeling task output data to the SNS output
   *             topic you specify here. </p>
   *         <p>To learn more, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-streaming-labeling-job.html#sms-streaming-how-it-works-output-data">Receive Output Data from a Streaming Labeling
   *                 Job</a>. </p>
   */
  SnsTopicArn?: string;
}

export namespace LabelingJobOutputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobOutputConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the
 *             job is automatically stopped. You can use these conditions to control the cost of data
 *             labeling.</p>
 *         <note>
 *             <p>Labeling jobs fail after 30 days with an appropriate client error message.</p>
 *         </note>
 */
export interface LabelingJobStoppingConditions {
  /**
   * <p>The maximum number of objects that can be labeled by human workers.</p>
   */
  MaxHumanLabeledObjectCount?: number;

  /**
   * <p>The maximum number of input data objects that should be labeled.</p>
   */
  MaxPercentageOfInputDatasetLabeled?: number;
}

export namespace LabelingJobStoppingConditions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobStoppingConditions): any => ({
    ...obj,
  });
}

export interface CreateLabelingJobRequest {
  /**
   * <p>The name of the labeling job. This name is used to identify the job in a list of
   *             labeling jobs. Labeling job names must be unique within an Amazon Web Services account and region.
   *                 <code>LabelingJobName</code> is not case sensitive. For example, Example-job and
   *             example-job are considered the same labeling job name by Ground Truth.</p>
   */
  LabelingJobName: string | undefined;

  /**
   * <p>The attribute name to use for the label in the output manifest file. This is the key
   *             for the key/value pair formed with the label that a worker assigns to the object. The
   *                 <code>LabelAttributeName</code> must meet the following requirements.</p>
   *         <ul>
   *             <li>
   *                 <p>The name can't end with "-metadata". </p>
   *             </li>
   *             <li>
   *                 <p>If you are using one of the following <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html">built-in task types</a>,
   *                     the attribute name <i>must</i> end with "-ref". If the task type
   *                     you are using is not listed below, the attribute name <i>must
   *                         not</i> end with "-ref".</p>
   *                 <ul>
   *                   <li>
   *                         <p>Image semantic segmentation (<code>SemanticSegmentation)</code>, and
   *                             adjustment (<code>AdjustmentSemanticSegmentation</code>) and
   *                             verification (<code>VerificationSemanticSegmentation</code>) labeling
   *                             jobs for this task type.</p>
   *                     </li>
   *                   <li>
   *                         <p>Video frame object detection (<code>VideoObjectDetection</code>), and
   *                             adjustment and verification
   *                             (<code>AdjustmentVideoObjectDetection</code>) labeling jobs for this
   *                             task type.</p>
   *                     </li>
   *                   <li>
   *                         <p>Video frame object tracking (<code>VideoObjectTracking</code>), and
   *                             adjustment and verification (<code>AdjustmentVideoObjectTracking</code>)
   *                             labeling jobs for this task type.</p>
   *                     </li>
   *                   <li>
   *                         <p>3D point cloud semantic segmentation
   *                                 (<code>3DPointCloudSemanticSegmentation</code>), and adjustment and
   *                             verification (<code>Adjustment3DPointCloudSemanticSegmentation</code>)
   *                             labeling jobs for this task type. </p>
   *                     </li>
   *                   <li>
   *                         <p>3D point cloud object tracking
   *                                 (<code>3DPointCloudObjectTracking</code>), and adjustment and
   *                             verification (<code>Adjustment3DPointCloudObjectTracking</code>)
   *                             labeling jobs for this task type. </p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   *         <p></p>
   *         <important>
   *             <p>If you are creating an adjustment or verification labeling job, you must use a
   *                     <i>different</i>
   *                 <code>LabelAttributeName</code> than the one used in the original labeling job. The
   *                 original labeling job is the Ground Truth labeling job that produced the labels that you
   *                 want verified or adjusted. To learn more about adjustment and verification labeling
   *                 jobs, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-verification-data.html">Verify and Adjust
   *                     Labels</a>.</p>
   *         </important>
   */
  LabelAttributeName: string | undefined;

  /**
   * <p>Input data for the labeling job, such as the Amazon S3 location of the data objects and the
   *             location of the manifest file that describes the data objects.</p>
   *         <p>You must specify at least one of the following: <code>S3DataSource</code> or
   *                 <code>SnsDataSource</code>. </p>
   *         <ul>
   *             <li>
   *                 <p>Use <code>SnsDataSource</code> to specify an SNS input topic for a streaming
   *                     labeling job. If you do not specify and SNS input topic ARN, Ground Truth will
   *                     create a one-time labeling job that stops after all data objects in the input
   *                     manifest file have been labeled.</p>
   *             </li>
   *             <li>
   *                 <p>Use <code>S3DataSource</code> to specify an input manifest file for both
   *                     streaming and one-time labeling jobs. Adding an <code>S3DataSource</code> is
   *                     optional if you use <code>SnsDataSource</code> to create a streaming labeling
   *                     job.</p>
   *             </li>
   *          </ul>
   *         <p>If you use the Amazon Mechanical Turk workforce, your input data should not include
   *             confidential information, personal information or protected health information. Use
   *                 <code>ContentClassifiers</code> to specify that your data is free of personally
   *             identifiable information and adult content.</p>
   */
  InputConfig: LabelingJobInputConfig | undefined;

  /**
   * <p>The location of the output data and the Amazon Web Services Key Management Service key ID for the key used to encrypt
   *             the output data, if any.</p>
   */
  OutputConfig: LabelingJobOutputConfig | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) that Amazon SageMaker assumes to perform tasks on your behalf
   *             during data labeling. You must grant this role the necessary permissions so that Amazon SageMaker
   *             can successfully complete data labeling.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The S3 URI of the file, referred to as a <i>label category configuration
   *                 file</i>, that defines the categories used to label the data objects.</p>
   *         <p>For 3D point cloud and video frame task types, you can add label category attributes
   *             and frame attributes to your label category configuration file. To learn how, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-point-cloud-label-category-config.html">Create a
   *                 Labeling Category Configuration File for 3D Point Cloud Labeling Jobs</a>. </p>
   *         <p>For named entity recognition jobs, in addition to <code>"labels"</code>, you must
   *             provide worker instructions in the label category configuration file using the
   *                 <code>"instructions"</code> parameter: <code>"instructions":
   *                 {"shortInstruction":"<h1>Add header</h1><p>Add Instructions</p>",
   *                 "fullInstruction":"<p>Add additional instructions.</p>"}</code>. For details
   *             and an example, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-named-entity-recg.html#sms-creating-ner-api">Create a
   *                 Named Entity Recognition Labeling Job (API) </a>.</p>
   *         <p>For all other <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html">built-in task types</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-custom-templates.html">custom
   *                 tasks</a>, your label category configuration file must be a JSON file in the
   *             following format. Identify the labels you want to use by replacing <code>label_1</code>,
   *                 <code>label_2</code>,<code>...</code>,<code>label_n</code> with your label
   *             categories.</p>
   *         <p>
   *             <code>{ </code>
   *          </p>
   *         <p>
   *             <code>"document-version": "2018-11-28",</code>
   *          </p>
   *         <p>
   *             <code>"labels": [{"label": "label_1"},{"label": "label_2"},...{"label":
   *                 "label_n"}]</code>
   *          </p>
   *         <p>
   *             <code>}</code>
   *          </p>
   *         <p>Note the following about the label category configuration file:</p>
   *         <ul>
   *             <li>
   *                 <p>For image classification and text classification (single and multi-label) you
   *                     must specify at least two label categories. For all other task types, the
   *                     minimum number of label categories required is one. </p>
   *             </li>
   *             <li>
   *                 <p>Each label category must be unique, you cannot specify duplicate label
   *                     categories.</p>
   *             </li>
   *             <li>
   *                 <p>If you create a 3D point cloud or video frame adjustment or verification
   *                     labeling job, you must include <code>auditLabelAttributeName</code> in the label
   *                     category configuration. Use this parameter to enter the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateLabelingJob.html#sagemaker-CreateLabelingJob-request-LabelAttributeName">
   *                      <code>LabelAttributeName</code>
   *                   </a> of the labeling job you want to
   *                     adjust or verify annotations of.</p>
   *             </li>
   *          </ul>
   */
  LabelCategoryConfigS3Uri?: string;

  /**
   * <p>A set of conditions for stopping the labeling job. If any of the conditions are met,
   *             the job is automatically stopped. You can use these conditions to control the cost of
   *             data labeling.</p>
   */
  StoppingConditions?: LabelingJobStoppingConditions;

  /**
   * <p>Configures the information required to perform automated data labeling.</p>
   */
  LabelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;

  /**
   * <p>Configures the labeling task and how it is presented to workers; including, but not limited to price, keywords, and batch size (task count).</p>
   */
  HumanTaskConfig: HumanTaskConfig | undefined;

  /**
   * <p>An array of key/value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management
   *                 User Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateLabelingJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLabelingJobRequest): any => ({
    ...obj,
  });
}

export interface CreateLabelingJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the labeling job. You use this ARN to identify the
   *             labeling job.</p>
   */
  LabelingJobArn: string | undefined;
}

export namespace CreateLabelingJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLabelingJobResponse): any => ({
    ...obj,
  });
}

export enum InferenceExecutionMode {
  DIRECT = "Direct",
  SERIAL = "Serial",
}

/**
 * <p>Specifies details about how containers in a multi-container endpoint are run.</p>
 */
export interface InferenceExecutionConfig {
  /**
   * <p>How containers in a multi-container are run. The following values are valid.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SERIAL</code> - Containers run as a serial pipeline.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DIRECT</code> - Only the individual container that you specify is
   *                     run.</p>
   *             </li>
   *          </ul>
   */
  Mode: InferenceExecutionMode | string | undefined;
}

export namespace InferenceExecutionConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferenceExecutionConfig): any => ({
    ...obj,
  });
}

export interface CreateModelInput {
  /**
   * <p>The name of the new model.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The location of the primary docker image containing inference code, associated
   *             artifacts, and custom environment map that the inference code uses when the model is
   *             deployed for predictions. </p>
   */
  PrimaryContainer?: ContainerDefinition;

  /**
   * <p>Specifies the containers in the inference pipeline.</p>
   */
  Containers?: ContainerDefinition[];

  /**
   * <p>Specifies details of how containers in a multi-container endpoint are called.</p>
   */
  InferenceExecutionConfig?: InferenceExecutionConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that SageMaker can assume to access model
   *             artifacts and docker image for deployment on ML compute instances or for batch transform
   *             jobs. Deploying on ML compute instances is part of model hosting. For more information,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">SageMaker
   *                 Roles</a>. </p>
   *         <note>
   *             <p>To be able to pass this role to SageMaker, the caller of this API must have the
   *                     <code>iam:PassRole</code> permission.</p>
   *         </note>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in
   *             different ways, for example, by purpose, owner, or environment. For more information,
   *             see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 Resources</a>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that you want your model
   *             to connect to. Control access to and from your model container by configuring the VPC.
   *                 <code>VpcConfig</code> is used in hosting services and in batch transform. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-vpc.html">Protect Data in Batch
   *                 Transform Jobs by Using an Amazon Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Isolates the model container. No inbound or outbound network calls can be made to or
   *             from the model container.</p>
   */
  EnableNetworkIsolation?: boolean;
}

export namespace CreateModelInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateModelInput): any => ({
    ...obj,
  });
}

export interface CreateModelOutput {
  /**
   * <p>The ARN of the model created in SageMaker.</p>
   */
  ModelArn: string | undefined;
}

export namespace CreateModelOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateModelOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Docker container image configuration object for the model bias job.</p>
 */
export interface ModelBiasAppSpecification {
  /**
   * <p>The container image to be run by the model bias job.</p>
   */
  ImageUri: string | undefined;

  /**
   * <p>JSON formatted S3 file that defines bias parameters. For more information on this JSON
   *          configuration file, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-config-json-monitor-bias-parameters.html">Configure bias
   *          parameters</a>.</p>
   */
  ConfigUri: string | undefined;

  /**
   * <p>Sets the environment variables in the Docker container.</p>
   */
  Environment?: Record<string, string>;
}

export namespace ModelBiasAppSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelBiasAppSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for a baseline model bias job.</p>
 */
export interface ModelBiasBaselineConfig {
  /**
   * <p>The name of the baseline model bias job.</p>
   */
  BaseliningJobName?: string;

  /**
   * <p>The constraints resource for a monitoring job.</p>
   */
  ConstraintsResource?: MonitoringConstraintsResource;
}

export namespace ModelBiasBaselineConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelBiasBaselineConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The ground truth labels for the dataset used for the monitoring job.</p>
 */
export interface MonitoringGroundTruthS3Input {
  /**
   * <p>The address of the Amazon S3 location of the ground truth labels.</p>
   */
  S3Uri?: string;
}

export namespace MonitoringGroundTruthS3Input {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringGroundTruthS3Input): any => ({
    ...obj,
  });
}

/**
 * <p>Inputs for the model bias job.</p>
 */
export interface ModelBiasJobInput {
  /**
   * <p>Input object for the endpoint</p>
   */
  EndpointInput: EndpointInput | undefined;

  /**
   * <p>Location of ground truth labels to use in model bias job.</p>
   */
  GroundTruthS3Input: MonitoringGroundTruthS3Input | undefined;
}

export namespace ModelBiasJobInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelBiasJobInput): any => ({
    ...obj,
  });
}

export interface CreateModelBiasJobDefinitionRequest {
  /**
   * <p>The name of the bias job definition. The name must be unique within an Amazon Web Services Region in the
   *          Amazon Web Services account.</p>
   */
  JobDefinitionName: string | undefined;

  /**
   * <p>The baseline configuration for a model bias job.</p>
   */
  ModelBiasBaselineConfig?: ModelBiasBaselineConfig;

  /**
   * <p>Configures the model bias job to run a specified Docker container image.</p>
   */
  ModelBiasAppSpecification: ModelBiasAppSpecification | undefined;

  /**
   * <p>Inputs for the model bias job.</p>
   */
  ModelBiasJobInput: ModelBiasJobInput | undefined;

  /**
   * <p>The output configuration for monitoring jobs.</p>
   */
  ModelBiasJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   */
  JobResources: MonitoringResources | undefined;

  /**
   * <p>Networking options for a model bias job.</p>
   */
  NetworkConfig?: MonitoringNetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to
   *          perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;

  /**
   * <p>(Optional) An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management
   *             User Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateModelBiasJobDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateModelBiasJobDefinitionRequest): any => ({
    ...obj,
  });
}

export interface CreateModelBiasJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model bias job.</p>
   */
  JobDefinitionArn: string | undefined;
}

export namespace CreateModelBiasJobDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateModelBiasJobDefinitionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Docker container image configuration object for the model explainability job.</p>
 */
export interface ModelExplainabilityAppSpecification {
  /**
   * <p>The container image to be run by the model explainability job.</p>
   */
  ImageUri: string | undefined;

  /**
   * <p>JSON formatted S3 file that defines explainability parameters. For more information on
   *          this JSON configuration file, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-config-json-monitor-model-explainability-parameters.html">Configure model
   *             explainability parameters</a>.</p>
   */
  ConfigUri: string | undefined;

  /**
   * <p>Sets the environment variables in the Docker container.</p>
   */
  Environment?: Record<string, string>;
}

export namespace ModelExplainabilityAppSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelExplainabilityAppSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for a baseline model explainability job.</p>
 */
export interface ModelExplainabilityBaselineConfig {
  /**
   * <p>The name of the baseline model explainability job.</p>
   */
  BaseliningJobName?: string;

  /**
   * <p>The constraints resource for a monitoring job.</p>
   */
  ConstraintsResource?: MonitoringConstraintsResource;
}

export namespace ModelExplainabilityBaselineConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelExplainabilityBaselineConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Inputs for the model explainability job.</p>
 */
export interface ModelExplainabilityJobInput {
  /**
   * <p>Input object for the endpoint</p>
   */
  EndpointInput: EndpointInput | undefined;
}

export namespace ModelExplainabilityJobInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelExplainabilityJobInput): any => ({
    ...obj,
  });
}

export interface CreateModelExplainabilityJobDefinitionRequest {
  /**
   * <p> The name of the model explainability job definition. The name must be unique within an
   *          Amazon Web Services Region in the Amazon Web Services account.</p>
   */
  JobDefinitionName: string | undefined;

  /**
   * <p>The baseline configuration for a model explainability job.</p>
   */
  ModelExplainabilityBaselineConfig?: ModelExplainabilityBaselineConfig;

  /**
   * <p>Configures the model explainability job to run a specified Docker container
   *          image.</p>
   */
  ModelExplainabilityAppSpecification: ModelExplainabilityAppSpecification | undefined;

  /**
   * <p>Inputs for the model explainability job.</p>
   */
  ModelExplainabilityJobInput: ModelExplainabilityJobInput | undefined;

  /**
   * <p>The output configuration for monitoring jobs.</p>
   */
  ModelExplainabilityJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   */
  JobResources: MonitoringResources | undefined;

  /**
   * <p>Networking options for a model explainability job.</p>
   */
  NetworkConfig?: MonitoringNetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to
   *          perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;

  /**
   * <p>(Optional) An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management
   *             User Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateModelExplainabilityJobDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateModelExplainabilityJobDefinitionRequest): any => ({
    ...obj,
  });
}

export interface CreateModelExplainabilityJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model explainability job.</p>
   */
  JobDefinitionArn: string | undefined;
}

export namespace CreateModelExplainabilityJobDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateModelExplainabilityJobDefinitionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details regarding the file source.</p>
 */
export interface FileSource {
  /**
   * <p>The type of content stored in the file source.</p>
   */
  ContentType?: string;

  /**
   * <p>The digest of the file source.</p>
   */
  ContentDigest?: string;

  /**
   * <p>The Amazon S3 URI for the file source.</p>
   */
  S3Uri: string | undefined;
}

export namespace FileSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FileSource): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the drift check bias baselines that can be used when the model monitor is set using the
 *             model package.</p>
 */
export interface DriftCheckBias {
  /**
   * <p>The bias config file for a model.</p>
   */
  ConfigFile?: FileSource;

  /**
   * <p>The pre-training constraints.</p>
   */
  PreTrainingConstraints?: MetricsSource;

  /**
   * <p>The post-training constraints.</p>
   */
  PostTrainingConstraints?: MetricsSource;
}

export namespace DriftCheckBias {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DriftCheckBias): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the drift check explainability baselines that can be used when the model monitor is set
 *             using the model package. </p>
 */
export interface DriftCheckExplainability {
  /**
   * <p>The drift check explainability constraints.</p>
   */
  Constraints?: MetricsSource;

  /**
   * <p>The explainability config file for the model.</p>
   */
  ConfigFile?: FileSource;
}

export namespace DriftCheckExplainability {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DriftCheckExplainability): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the drift check data quality baselines that can be used when the model monitor is set using
 *             the model package. </p>
 */
export interface DriftCheckModelDataQuality {
  /**
   * <p>The drift check model data quality statistics.</p>
   */
  Statistics?: MetricsSource;

  /**
   * <p>The drift check model data quality constraints.</p>
   */
  Constraints?: MetricsSource;
}

export namespace DriftCheckModelDataQuality {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DriftCheckModelDataQuality): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the drift check model quality baselines that can be used when the model monitor is set using
 *             the model package. </p>
 */
export interface DriftCheckModelQuality {
  /**
   * <p>The drift check model quality statistics.</p>
   */
  Statistics?: MetricsSource;

  /**
   * <p>The drift check model quality constraints.</p>
   */
  Constraints?: MetricsSource;
}

export namespace DriftCheckModelQuality {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DriftCheckModelQuality): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the drift check baselines that can be used when the model monitor is set using the model
 *             package. </p>
 */
export interface DriftCheckBaselines {
  /**
   * <p>Represents the drift check bias baselines that can be used when the model monitor is set using the model
   *             package. </p>
   */
  Bias?: DriftCheckBias;

  /**
   * <p>Represents the drift check explainability baselines that can be used when the model monitor is set using
   *             the model package. </p>
   */
  Explainability?: DriftCheckExplainability;

  /**
   * <p>Represents the drift check model quality baselines that can be used when the model monitor is set using
   *             the model package.</p>
   */
  ModelQuality?: DriftCheckModelQuality;

  /**
   * <p>Represents the drift check model data quality baselines that can be used when the model monitor is set
   *             using the model package.</p>
   */
  ModelDataQuality?: DriftCheckModelDataQuality;
}

export namespace DriftCheckBaselines {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DriftCheckBaselines): any => ({
    ...obj,
  });
}

/**
 * <p>Contains explainability metrics for a model.</p>
 */
export interface Explainability {
  /**
   * <p>The explainability report for a model.</p>
   */
  Report?: MetricsSource;
}

export namespace Explainability {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Explainability): any => ({
    ...obj,
  });
}

/**
 * <p>Data quality constraints and statistics for a model.</p>
 */
export interface ModelDataQuality {
  /**
   * <p>Data quality statistics for a model.</p>
   */
  Statistics?: MetricsSource;

  /**
   * <p>Data quality constraints for a model.</p>
   */
  Constraints?: MetricsSource;
}

export namespace ModelDataQuality {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelDataQuality): any => ({
    ...obj,
  });
}

/**
 * <p>Model quality statistics and constraints.</p>
 */
export interface ModelQuality {
  /**
   * <p>Model quality statistics.</p>
   */
  Statistics?: MetricsSource;

  /**
   * <p>Model quality constraints.</p>
   */
  Constraints?: MetricsSource;
}

export namespace ModelQuality {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelQuality): any => ({
    ...obj,
  });
}

/**
 * <p>Contains metrics captured from a model.</p>
 */
export interface ModelMetrics {
  /**
   * <p>Metrics that measure the quality of a model.</p>
   */
  ModelQuality?: ModelQuality;

  /**
   * <p>Metrics that measure the quality of the input data for a model.</p>
   */
  ModelDataQuality?: ModelDataQuality;

  /**
   * <p>Metrics that measure bais in a model.</p>
   */
  Bias?: Bias;

  /**
   * <p>Metrics that help explain a model.</p>
   */
  Explainability?: Explainability;
}

export namespace ModelMetrics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelMetrics): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies an algorithm that was used to create the model package. The algorithm must
 *             be either an algorithm resource in your SageMaker account or an algorithm in Amazon Web Services Marketplace that you
 *             are subscribed to.</p>
 */
export interface SourceAlgorithm {
  /**
   * <p>The Amazon S3 path where the model artifacts, which result from model training, are stored.
   *             This path must point to a single <code>gzip</code> compressed tar archive
   *                 (<code>.tar.gz</code> suffix).</p>
   *         <note>
   *             <p>The model artifacts must be in an S3 bucket that is in the same region as the
   *                 algorithm.</p>
   *         </note>
   */
  ModelDataUrl?: string;

  /**
   * <p>The name of an algorithm that was used to create the model package. The algorithm must
   *             be either an algorithm resource in your SageMaker account or an algorithm in Amazon Web Services Marketplace that you
   *             are subscribed to.</p>
   */
  AlgorithmName: string | undefined;
}

export namespace SourceAlgorithm {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceAlgorithm): any => ({
    ...obj,
  });
}

/**
 * <p>A list of algorithms that were used to create a model package.</p>
 */
export interface SourceAlgorithmSpecification {
  /**
   * <p>A list of the algorithms that were used to create a model package.</p>
   */
  SourceAlgorithms: SourceAlgorithm[] | undefined;
}

export namespace SourceAlgorithmSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceAlgorithmSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Contains data, such as the inputs and targeted instance types that are used in the
 *             process of validating the model package.</p>
 *         <p>The data provided in the validation profile is made available to your buyers on Amazon Web Services
 *             Marketplace.</p>
 */
export interface ModelPackageValidationProfile {
  /**
   * <p>The name of the profile for the model package.</p>
   */
  ProfileName: string | undefined;

  /**
   * <p>The <code>TransformJobDefinition</code> object that describes the transform job used
   *             for the validation of the model package.</p>
   */
  TransformJobDefinition: TransformJobDefinition | undefined;
}

export namespace ModelPackageValidationProfile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelPackageValidationProfile): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies batch transform jobs that SageMaker runs to validate your model package.</p>
 */
export interface ModelPackageValidationSpecification {
  /**
   * <p>The IAM roles to be used for the validation of the model package.</p>
   */
  ValidationRole: string | undefined;

  /**
   * <p>An array of <code>ModelPackageValidationProfile</code> objects, each of which
   *             specifies a batch transform job that SageMaker runs to validate your model package.</p>
   */
  ValidationProfiles: ModelPackageValidationProfile[] | undefined;
}

export namespace ModelPackageValidationSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelPackageValidationSpecification): any => ({
    ...obj,
  });
}

export interface CreateModelPackageInput {
  /**
   * <p>The name of the model package. The name must have 1 to 63 characters. Valid characters
   *             are a-z, A-Z, 0-9, and - (hyphen).</p>
   *         <p>This parameter is required for unversioned models. It is not applicable to versioned
   *             models.</p>
   */
  ModelPackageName?: string;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the model package group that this model version belongs to.</p>
   *         <p>This parameter is required for versioned models, and does not apply to unversioned
   *             models.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * <p>A description of the model package.</p>
   */
  ModelPackageDescription?: string;

  /**
   * <p>Specifies details about inference jobs that can be run with models based on this model
   *             package, including the following:</p>
   *         <ul>
   *             <li>
   *                 <p>The Amazon ECR paths of containers that contain the inference code and model
   *                     artifacts.</p>
   *             </li>
   *             <li>
   *                 <p>The instance types that the model package supports for transform jobs and
   *                     real-time endpoints used for inference.</p>
   *             </li>
   *             <li>
   *                 <p>The input and output content formats that the model package supports for
   *                     inference.</p>
   *             </li>
   *          </ul>
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * <p>Specifies configurations for one or more transform jobs that SageMaker runs to test the
   *             model package.</p>
   */
  ValidationSpecification?: ModelPackageValidationSpecification;

  /**
   * <p>Details about the algorithm that was used to create the model package.</p>
   */
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification;

  /**
   * <p>Whether to certify the model package for listing on Amazon Web Services Marketplace.</p>
   *         <p>This parameter is optional for unversioned models, and does not apply to versioned
   *             models.</p>
   */
  CertifyForMarketplace?: boolean;

  /**
   * <p>A list of key value pairs associated with the model. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *             resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Whether the model is approved for deployment.</p>
   *         <p>This parameter is optional for versioned models, and does not apply to unversioned
   *             models.</p>
   *         <p>For versioned models, the value of this parameter must be set to <code>Approved</code>
   *         to deploy the model.</p>
   */
  ModelApprovalStatus?: ModelApprovalStatus | string;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>A structure that contains model metrics reports.</p>
   */
  ModelMetrics?: ModelMetrics;

  /**
   * <p>A unique token that guarantees that the call to this API is idempotent.</p>
   */
  ClientToken?: string;

  /**
   * <p>The metadata properties associated with the model package versions.</p>
   */
  CustomerMetadataProperties?: Record<string, string>;

  /**
   * <p>Represents the drift check baselines that can be used when the model monitor is set using the model package.
   *             For more information, see the topic on <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines-quality-clarify-baseline-lifecycle.html#pipelines-quality-clarify-baseline-drift-detection">Drift Detection against Previous Baselines in SageMaker Pipelines</a> in the <i>Amazon SageMaker Developer Guide</i>.
   *         </p>
   */
  DriftCheckBaselines?: DriftCheckBaselines;

  /**
   * <p>The machine learning domain of your model package and its components. Common
   *     machine learning domains include computer vision and natural language processing.</p>
   */
  Domain?: string;

  /**
   * <p>The machine learning task your model package accomplishes. Common machine
   *     learning tasks include object detection and image classification. The following
   *     tasks are supported by Inference Recommender:
   *    <code>"IMAGE_CLASSIFICATION"</code> | <code>"OBJECT_DETECTION"</code> | <code>"TEXT_GENERATION"</code> |<code>"IMAGE_SEGMENTATION"</code> |
   *    <code>"FILL_MASK"</code> | <code>"CLASSIFICATION"</code> | <code>"REGRESSION"</code> | <code>"OTHER"</code>.</p>
   *          <p>Specify "OTHER" if none of the tasks listed fit your use case.</p>
   */
  Task?: string;

  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where the sample payload are stored. This path must point
   *     to a single gzip compressed tar archive (.tar.gz suffix).</p>
   */
  SamplePayloadUrl?: string;

  /**
   * <p>An array of additional Inference Specification objects. Each additional
   *     Inference Specification specifies artifacts based on this model package that can
   *     be used on inference endpoints. Generally used with SageMaker Neo to store the
   *     compiled artifacts. </p>
   */
  AdditionalInferenceSpecifications?: AdditionalInferenceSpecificationDefinition[];
}

export namespace CreateModelPackageInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateModelPackageInput): any => ({
    ...obj,
  });
}

export interface CreateModelPackageOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the new model package.</p>
   */
  ModelPackageArn: string | undefined;
}

export namespace CreateModelPackageOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateModelPackageOutput): any => ({
    ...obj,
  });
}

export interface CreateModelPackageGroupInput {
  /**
   * <p>The name of the model group.</p>
   */
  ModelPackageGroupName: string | undefined;

  /**
   * <p>A description for the model group.</p>
   */
  ModelPackageGroupDescription?: string;

  /**
   * <p>A list of key value pairs associated with the model group. For more information, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateModelPackageGroupInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateModelPackageGroupInput): any => ({
    ...obj,
  });
}

export interface CreateModelPackageGroupOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the model group.</p>
   */
  ModelPackageGroupArn: string | undefined;
}

export namespace CreateModelPackageGroupOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateModelPackageGroupOutput): any => ({
    ...obj,
  });
}

export enum MonitoringProblemType {
  BINARY_CLASSIFICATION = "BinaryClassification",
  MULTICLASS_CLASSIFICATION = "MulticlassClassification",
  REGRESSION = "Regression",
}

/**
 * <p>Container image configuration object for the monitoring job.</p>
 */
export interface ModelQualityAppSpecification {
  /**
   * <p>The address of the container image that the monitoring job runs.</p>
   */
  ImageUri: string | undefined;

  /**
   * <p>Specifies the entrypoint for a container that the monitoring job runs.</p>
   */
  ContainerEntrypoint?: string[];

  /**
   * <p>An array of arguments for the container used to run the monitoring job.</p>
   */
  ContainerArguments?: string[];

  /**
   * <p>An Amazon S3 URI to a script that is called per row prior to running analysis. It can
   *          base64 decode the payload and convert it into a flatted json so that the built-in container
   *          can use the converted data. Applicable only for the built-in (first party)
   *          containers.</p>
   */
  RecordPreprocessorSourceUri?: string;

  /**
   * <p>An Amazon S3 URI to a script that is called after analysis has been performed.
   *          Applicable only for the built-in (first party) containers.</p>
   */
  PostAnalyticsProcessorSourceUri?: string;

  /**
   * <p>The machine learning problem type of the model that the monitoring job monitors.</p>
   */
  ProblemType?: MonitoringProblemType | string;

  /**
   * <p>Sets the environment variables in the container that the monitoring job runs.</p>
   */
  Environment?: Record<string, string>;
}

export namespace ModelQualityAppSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelQualityAppSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration for monitoring constraints and monitoring statistics. These baseline
 *          resources are compared against the results of the current job from the series of jobs
 *          scheduled to collect data periodically.</p>
 */
export interface ModelQualityBaselineConfig {
  /**
   * <p>The name of the job that performs baselining for the monitoring job.</p>
   */
  BaseliningJobName?: string;

  /**
   * <p>The constraints resource for a monitoring job.</p>
   */
  ConstraintsResource?: MonitoringConstraintsResource;
}

export namespace ModelQualityBaselineConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelQualityBaselineConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the model quality monitoring job. Currently endponts are supported for
 *          input for model quality monitoring jobs.</p>
 */
export interface ModelQualityJobInput {
  /**
   * <p>Input object for the endpoint</p>
   */
  EndpointInput: EndpointInput | undefined;

  /**
   * <p>The ground truth label provided for the model.</p>
   */
  GroundTruthS3Input: MonitoringGroundTruthS3Input | undefined;
}

export namespace ModelQualityJobInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelQualityJobInput): any => ({
    ...obj,
  });
}

export interface CreateModelQualityJobDefinitionRequest {
  /**
   * <p>The name of the monitoring job definition.</p>
   */
  JobDefinitionName: string | undefined;

  /**
   * <p>Specifies the constraints and baselines for the monitoring job.</p>
   */
  ModelQualityBaselineConfig?: ModelQualityBaselineConfig;

  /**
   * <p>The container that runs the monitoring job.</p>
   */
  ModelQualityAppSpecification: ModelQualityAppSpecification | undefined;

  /**
   * <p>A list of the inputs that are monitored. Currently endpoints are supported.</p>
   */
  ModelQualityJobInput: ModelQualityJobInput | undefined;

  /**
   * <p>The output configuration for monitoring jobs.</p>
   */
  ModelQualityJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   */
  JobResources: MonitoringResources | undefined;

  /**
   * <p>Specifies the network configuration for the monitoring job.</p>
   */
  NetworkConfig?: MonitoringNetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to
   *          perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;

  /**
   * <p>(Optional) An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management
   *             User Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateModelQualityJobDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateModelQualityJobDefinitionRequest): any => ({
    ...obj,
  });
}

export interface CreateModelQualityJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model quality monitoring job.</p>
   */
  JobDefinitionArn: string | undefined;
}

export namespace CreateModelQualityJobDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateModelQualityJobDefinitionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration for monitoring constraints and monitoring statistics. These baseline
 *          resources are compared against the results of the current job from the series of jobs
 *          scheduled to collect data periodically.</p>
 */
export interface MonitoringBaselineConfig {
  /**
   * <p>The name of the job that performs baselining for the monitoring job.</p>
   */
  BaseliningJobName?: string;

  /**
   * <p>The baseline constraint file in Amazon S3 that the current monitoring job should
   *          validated against.</p>
   */
  ConstraintsResource?: MonitoringConstraintsResource;

  /**
   * <p>The baseline statistics file in Amazon S3 that the current monitoring job should be
   *          validated against.</p>
   */
  StatisticsResource?: MonitoringStatisticsResource;
}

export namespace MonitoringBaselineConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringBaselineConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Container image configuration object for the monitoring job.</p>
 */
export interface MonitoringAppSpecification {
  /**
   * <p>The container image to be run by the monitoring job.</p>
   */
  ImageUri: string | undefined;

  /**
   * <p>Specifies the entrypoint for a container used to run the monitoring job.</p>
   */
  ContainerEntrypoint?: string[];

  /**
   * <p>An array of arguments for the container used to run the monitoring job.</p>
   */
  ContainerArguments?: string[];

  /**
   * <p>An Amazon S3 URI to a script that is called per row prior to running analysis. It can
   *          base64 decode the payload and convert it into a flatted json so that the built-in container
   *          can use the converted data. Applicable only for the built-in (first party)
   *          containers.</p>
   */
  RecordPreprocessorSourceUri?: string;

  /**
   * <p>An Amazon S3 URI to a script that is called after analysis has been performed.
   *          Applicable only for the built-in (first party) containers.</p>
   */
  PostAnalyticsProcessorSourceUri?: string;
}

export namespace MonitoringAppSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringAppSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>The inputs for a monitoring job.</p>
 */
export interface MonitoringInput {
  /**
   * <p>The endpoint for a monitoring job.</p>
   */
  EndpointInput: EndpointInput | undefined;
}

export namespace MonitoringInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringInput): any => ({
    ...obj,
  });
}

/**
 * <p>Networking options for a job, such as network traffic encryption between containers,
 *          whether to allow inbound and outbound network calls to and from containers, and the VPC
 *          subnets and security groups to use for VPC-enabled jobs.</p>
 */
export interface NetworkConfig {
  /**
   * <p>Whether to encrypt all communications between distributed processing jobs. Choose
   *             <code>True</code> to encrypt communications. Encryption provides greater security for distributed
   *             processing jobs, but the processing might take longer.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>Whether to allow inbound and outbound network calls to and from the containers used for
   *          the processing job.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>Specifies a VPC that your training jobs and hosted models have access to. Control
   *             access to and from your training and model containers by configuring the VPC. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs
   *                 by Using an Amazon Virtual Private Cloud</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace NetworkConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the monitoring job.</p>
 */
export interface MonitoringJobDefinition {
  /**
   * <p>Baseline configuration used to validate that the data conforms to the specified
   *          constraints and statistics</p>
   */
  BaselineConfig?: MonitoringBaselineConfig;

  /**
   * <p>The array of inputs for the monitoring job. Currently we support monitoring an Amazon SageMaker
   *          Endpoint.</p>
   */
  MonitoringInputs: MonitoringInput[] | undefined;

  /**
   * <p>The array of outputs from the monitoring job to be uploaded to Amazon Simple Storage
   *          Service (Amazon S3).</p>
   */
  MonitoringOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
   *          monitoring job. In distributed processing, you specify more than one instance.</p>
   */
  MonitoringResources: MonitoringResources | undefined;

  /**
   * <p>Configures the monitoring job to run a specified Docker container image.</p>
   */
  MonitoringAppSpecification: MonitoringAppSpecification | undefined;

  /**
   * <p>Specifies a time limit for how long the monitoring job is allowed to run.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;

  /**
   * <p>Sets the environment variables in the Docker container.</p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>Specifies networking options for an monitoring job.</p>
   */
  NetworkConfig?: NetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on
   *          your behalf.</p>
   */
  RoleArn: string | undefined;
}

export namespace MonitoringJobDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringJobDefinition): any => ({
    ...obj,
  });
}

export enum MonitoringType {
  DATA_QUALITY = "DataQuality",
  MODEL_BIAS = "ModelBias",
  MODEL_EXPLAINABILITY = "ModelExplainability",
  MODEL_QUALITY = "ModelQuality",
}

/**
 * <p>Configuration details about the monitoring schedule.</p>
 */
export interface ScheduleConfig {
  /**
   * <p>A cron expression that describes details about the monitoring schedule.</p>
   *
   *          <p>Currently the only supported cron expressions are:</p>
   *          <ul>
   *             <li>
   *                <p>If you want to set the job to start every hour, please use the following:</p>
   *                <p>
   *                   <code>Hourly: cron(0 * ? * * *)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>If you want to start the job daily:</p>
   *                <p>
   *                   <code>cron(0 [00-23] ? * * *)</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For example, the following are valid cron expressions:</p>
   *          <ul>
   *             <li>
   *                <p>Daily at noon UTC: <code>cron(0 12 ? * * *)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Daily at midnight UTC: <code>cron(0 0 ? * * *)</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *          <p>To support running every 6, 12 hours, the following are also supported:</p>
   *          <p>
   *             <code>cron(0 [00-23]/[01-24] ? * * *)</code>
   *          </p>
   *          <p>For example, the following are valid cron expressions:</p>
   *          <ul>
   *             <li>
   *                <p>Every 12 hours, starting at 5pm UTC: <code>cron(0 17/12 ? * * *)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Every two hours starting at midnight: <code>cron(0 0/2 ? * * *)</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>Even though the cron expression is set to start at 5PM UTC, note that there
   *                   could be a delay of 0-20 minutes from the actual requested time to run the
   *                   execution. </p>
   *                </li>
   *                <li>
   *                   <p>We recommend that if you would like a daily schedule, you do not provide this
   *                   parameter. Amazon SageMaker will pick a time for running every day.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  ScheduleExpression: string | undefined;
}

export namespace ScheduleConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduleConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Configures the monitoring schedule and defines the monitoring job.</p>
 */
export interface MonitoringScheduleConfig {
  /**
   * <p>Configures the monitoring schedule.</p>
   */
  ScheduleConfig?: ScheduleConfig;

  /**
   * <p>Defines the monitoring job.</p>
   */
  MonitoringJobDefinition?: MonitoringJobDefinition;

  /**
   * <p>The name of the monitoring job definition to schedule.</p>
   */
  MonitoringJobDefinitionName?: string;

  /**
   * <p>The type of the monitoring job definition to schedule.</p>
   */
  MonitoringType?: MonitoringType | string;
}

export namespace MonitoringScheduleConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringScheduleConfig): any => ({
    ...obj,
  });
}

export interface CreateMonitoringScheduleRequest {
  /**
   * <p>The name of the monitoring schedule. The name must be unique within an Amazon Web Services Region within
   *          an Amazon Web Services account.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The configuration object that specifies the monitoring schedule and defines the
   *          monitoring job.</p>
   */
  MonitoringScheduleConfig: MonitoringScheduleConfig | undefined;

  /**
   * <p>(Optional) An array of key-value pairs. For more information, see <a href=" https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management
   *             User Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateMonitoringScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMonitoringScheduleRequest): any => ({
    ...obj,
  });
}

export interface CreateMonitoringScheduleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;
}

export namespace CreateMonitoringScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMonitoringScheduleResponse): any => ({
    ...obj,
  });
}

export enum NotebookInstanceAcceleratorType {
  ML_EIA1_LARGE = "ml.eia1.large",
  ML_EIA1_MEDIUM = "ml.eia1.medium",
  ML_EIA1_XLARGE = "ml.eia1.xlarge",
  ML_EIA2_LARGE = "ml.eia2.large",
  ML_EIA2_MEDIUM = "ml.eia2.medium",
  ML_EIA2_XLARGE = "ml.eia2.xlarge",
}

export enum DirectInternetAccess {
  DISABLED = "Disabled",
  ENABLED = "Enabled",
}

/**
 * <p>Information on the IMDS configuration of the notebook instance</p>
 */
export interface InstanceMetadataServiceConfiguration {
  /**
   * <p>Indicates the minimum IMDS version that the notebook instance supports. When passed as part of <code>CreateNotebookInstance</code>, if no value is selected, then it defaults to IMDSv1. This means that both IMDSv1 and IMDSv2 are supported. If passed as part of <code>UpdateNotebookInstance</code>, there is no default.</p>
   */
  MinimumInstanceMetadataServiceVersion: string | undefined;
}

export namespace InstanceMetadataServiceConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceMetadataServiceConfiguration): any => ({
    ...obj,
  });
}

export enum _InstanceType {
  ML_C4_2XLARGE = "ml.c4.2xlarge",
  ML_C4_4XLARGE = "ml.c4.4xlarge",
  ML_C4_8XLARGE = "ml.c4.8xlarge",
  ML_C4_XLARGE = "ml.c4.xlarge",
  ML_C5D_18XLARGE = "ml.c5d.18xlarge",
  ML_C5D_2XLARGE = "ml.c5d.2xlarge",
  ML_C5D_4XLARGE = "ml.c5d.4xlarge",
  ML_C5D_9XLARGE = "ml.c5d.9xlarge",
  ML_C5D_XLARGE = "ml.c5d.xlarge",
  ML_C5_18XLARGE = "ml.c5.18xlarge",
  ML_C5_2XLARGE = "ml.c5.2xlarge",
  ML_C5_4XLARGE = "ml.c5.4xlarge",
  ML_C5_9XLARGE = "ml.c5.9xlarge",
  ML_C5_XLARGE = "ml.c5.xlarge",
  ML_G4DN_12XLARGE = "ml.g4dn.12xlarge",
  ML_G4DN_16XLARGE = "ml.g4dn.16xlarge",
  ML_G4DN_2XLARGE = "ml.g4dn.2xlarge",
  ML_G4DN_4XLARGE = "ml.g4dn.4xlarge",
  ML_G4DN_8XLARGE = "ml.g4dn.8xlarge",
  ML_G4DN_XLARGE = "ml.g4dn.xlarge",
  ML_G5_12XLARGE = "ml.g5.12xlarge",
  ML_G5_16XLARGE = "ml.g5.16xlarge",
  ML_G5_24XLARGE = "ml.g5.24xlarge",
  ML_G5_2XLARGE = "ml.g5.2xlarge",
  ML_G5_48XLARGE = "ml.g5.48xlarge",
  ML_G5_4XLARGE = "ml.g5.4xlarge",
  ML_G5_8XLARGE = "ml.g5.8xlarge",
  ML_G5_XLARGE = "ml.g5.xlarge",
  ML_M4_10XLARGE = "ml.m4.10xlarge",
  ML_M4_16XLARGE = "ml.m4.16xlarge",
  ML_M4_2XLARGE = "ml.m4.2xlarge",
  ML_M4_4XLARGE = "ml.m4.4xlarge",
  ML_M4_XLARGE = "ml.m4.xlarge",
  ML_M5D_12XLARGE = "ml.m5d.12xlarge",
  ML_M5D_16XLARGE = "ml.m5d.16xlarge",
  ML_M5D_24XLARGE = "ml.m5d.24xlarge",
  ML_M5D_2XLARGE = "ml.m5d.2xlarge",
  ML_M5D_4XLARGE = "ml.m5d.4xlarge",
  ML_M5D_8XLARGE = "ml.m5d.8xlarge",
  ML_M5D_LARGE = "ml.m5d.large",
  ML_M5D_XLARGE = "ml.m5d.xlarge",
  ML_M5_12XLARGE = "ml.m5.12xlarge",
  ML_M5_24XLARGE = "ml.m5.24xlarge",
  ML_M5_2XLARGE = "ml.m5.2xlarge",
  ML_M5_4XLARGE = "ml.m5.4xlarge",
  ML_M5_XLARGE = "ml.m5.xlarge",
  ML_P2_16XLARGE = "ml.p2.16xlarge",
  ML_P2_8XLARGE = "ml.p2.8xlarge",
  ML_P2_XLARGE = "ml.p2.xlarge",
  ML_P3DN_24XLARGE = "ml.p3dn.24xlarge",
  ML_P3_16XLARGE = "ml.p3.16xlarge",
  ML_P3_2XLARGE = "ml.p3.2xlarge",
  ML_P3_8XLARGE = "ml.p3.8xlarge",
  ML_R5_12XLARGE = "ml.r5.12xlarge",
  ML_R5_16XLARGE = "ml.r5.16xlarge",
  ML_R5_24XLARGE = "ml.r5.24xlarge",
  ML_R5_2XLARGE = "ml.r5.2xlarge",
  ML_R5_4XLARGE = "ml.r5.4xlarge",
  ML_R5_8XLARGE = "ml.r5.8xlarge",
  ML_R5_LARGE = "ml.r5.large",
  ML_R5_XLARGE = "ml.r5.xlarge",
  ML_T2_2XLARGE = "ml.t2.2xlarge",
  ML_T2_LARGE = "ml.t2.large",
  ML_T2_MEDIUM = "ml.t2.medium",
  ML_T2_XLARGE = "ml.t2.xlarge",
  ML_T3_2XLARGE = "ml.t3.2xlarge",
  ML_T3_LARGE = "ml.t3.large",
  ML_T3_MEDIUM = "ml.t3.medium",
  ML_T3_XLARGE = "ml.t3.xlarge",
}

export enum RootAccess {
  DISABLED = "Disabled",
  ENABLED = "Enabled",
}

export interface CreateNotebookInstanceInput {
  /**
   * <p>The name of the new notebook instance.</p>
   */
  NotebookInstanceName: string | undefined;

  /**
   * <p>The type of ML compute instance to launch for the notebook instance.</p>
   */
  InstanceType: _InstanceType | string | undefined;

  /**
   * <p>The ID of the subnet in a VPC to which you would like to have a connectivity from
   *             your ML compute instance. </p>
   */
  SubnetId?: string;

  /**
   * <p>The VPC security group IDs, in the form sg-xxxxxxxx. The security groups must be
   *             for the same VPC as specified in the subnet. </p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p> When you send any requests to Amazon Web Services resources from the notebook instance, SageMaker
   *             assumes this role to perform tasks on your behalf. You must grant this role necessary
   *             permissions so SageMaker can perform these tasks. The policy must allow the SageMaker service
   *             principal (sagemaker.amazonaws.com) permissions to assume this role. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">SageMaker Roles</a>. </p>
   *         <note>
   *             <p>To be able to pass this role to SageMaker, the caller of this API must have the
   *                     <code>iam:PassRole</code> permission.</p>
   *         </note>
   */
  RoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service key that SageMaker uses to encrypt data on
   *             the storage volume attached to your notebook instance. The KMS key you provide must be
   *             enabled. For information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/enabling-keys.html">Enabling and Disabling
   *                 Keys</a> in the <i>Amazon Web Services Key Management Service Developer Guide</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in
   *             different ways, for example, by purpose, owner, or environment. For more information,
   *             see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 Resources</a>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The name of a lifecycle configuration to associate with the notebook instance. For
   *             information about lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional)
   *                 Customize a Notebook Instance</a>.</p>
   */
  LifecycleConfigName?: string;

  /**
   * <p>Sets whether SageMaker provides internet access to the notebook instance. If you set this
   *             to <code>Disabled</code> this notebook instance is able to access resources only in your
   *             VPC, and is not be able to connect to SageMaker training and endpoint services unless you
   *             configure a NAT Gateway in your VPC.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/appendix-additional-considerations.html#appendix-notebook-and-internet-access">Notebook Instances Are Internet-Enabled by Default</a>. You can set the value
   *             of this parameter to <code>Disabled</code> only if you set a value for the
   *                 <code>SubnetId</code> parameter.</p>
   */
  DirectInternetAccess?: DirectInternetAccess | string;

  /**
   * <p>The size, in GB, of the ML storage volume to attach to the notebook instance. The
   *             default value is 5 GB.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * <p>A list of Elastic Inference (EI) instance types to associate with this notebook
   *             instance. Currently, only one instance type can be associated with a notebook instance.
   *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic Inference in Amazon SageMaker</a>.</p>
   */
  AcceleratorTypes?: (NotebookInstanceAcceleratorType | string)[];

  /**
   * <p>A Git repository to associate with the notebook instance as its default code
   *             repository. This can be either the name of a Git repository stored as a resource in your
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a> or in any
   *             other Git repository. When you open a notebook instance, it opens in the directory that
   *             contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git Repositories with SageMaker
   *                 Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * <p>An array of up to three Git repositories to associate with the notebook instance.
   *             These can be either the names of Git repositories stored as resources in your account,
   *             or the URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a> or in any
   *             other Git repository. These repositories are cloned at the same level as the default
   *             repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   */
  AdditionalCodeRepositories?: string[];

  /**
   * <p>Whether root access is enabled or disabled for users of the notebook instance. The
   *             default value is <code>Enabled</code>.</p>
   *         <note>
   *             <p>Lifecycle configurations need root access to be able to set up a notebook
   *                 instance. Because of this, lifecycle configurations associated with a notebook
   *                 instance always run with root access even if you disable root access for
   *                 users.</p>
   *         </note>
   */
  RootAccess?: RootAccess | string;

  /**
   * <p>The platform identifier of the notebook instance runtime environment.</p>
   */
  PlatformIdentifier?: string;

  /**
   * <p>Information on the IMDS configuration of the notebook instance</p>
   */
  InstanceMetadataServiceConfiguration?: InstanceMetadataServiceConfiguration;
}

export namespace CreateNotebookInstanceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNotebookInstanceInput): any => ({
    ...obj,
  });
}

export interface CreateNotebookInstanceOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the notebook instance. </p>
   */
  NotebookInstanceArn?: string;
}

export namespace CreateNotebookInstanceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNotebookInstanceOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the notebook instance lifecycle configuration script.</p>
 *         <p>Each lifecycle configuration script has a limit of 16384 characters.</p>
 *         <p>The value of the <code>$PATH</code> environment variable that is available to both
 *             scripts is <code>/sbin:bin:/usr/sbin:/usr/bin</code>.</p>
 *         <p>View CloudWatch Logs for notebook instance lifecycle configurations in log group
 *                 <code>/aws/sagemaker/NotebookInstances</code> in log stream
 *                 <code>[notebook-instance-name]/[LifecycleConfigHook]</code>.</p>
 *         <p>Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs
 *             for longer than 5 minutes, it fails and the notebook instance is not created or
 *             started.</p>
 *         <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
 *                 2.1: (Optional) Customize a Notebook Instance</a>.</p>
 */
export interface NotebookInstanceLifecycleHook {
  /**
   * <p>A base64-encoded string that contains a shell script for a notebook instance lifecycle
   *             configuration.</p>
   */
  Content?: string;
}

export namespace NotebookInstanceLifecycleHook {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotebookInstanceLifecycleHook): any => ({
    ...obj,
  });
}

export interface CreateNotebookInstanceLifecycleConfigInput {
  /**
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;

  /**
   * <p>A shell script that runs only once, when you create a notebook instance. The shell
   *             script must be a base64-encoded string.</p>
   */
  OnCreate?: NotebookInstanceLifecycleHook[];

  /**
   * <p>A shell script that runs every time you start a notebook instance, including when you
   *             create the notebook instance. The shell script must be a base64-encoded string.</p>
   */
  OnStart?: NotebookInstanceLifecycleHook[];
}

export namespace CreateNotebookInstanceLifecycleConfigInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNotebookInstanceLifecycleConfigInput): any => ({
    ...obj,
  });
}

export interface CreateNotebookInstanceLifecycleConfigOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigArn?: string;
}

export namespace CreateNotebookInstanceLifecycleConfigOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNotebookInstanceLifecycleConfigOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration that controls the parallelism of the pipeline.
 *             By default, the parallelism configuration specified applies to all
 *             executions of the pipeline unless overridden.</p>
 */
export interface ParallelismConfiguration {
  /**
   * <p>The max number of steps that can be executed in parallel. </p>
   */
  MaxParallelExecutionSteps: number | undefined;
}

export namespace ParallelismConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParallelismConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The location of the pipeline definition stored in Amazon S3.</p>
 */
export interface PipelineDefinitionS3Location {
  /**
   * <p>Name of the S3 bucket.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The object key (or key name) uniquely identifies the
   *             object in an S3 bucket. </p>
   */
  ObjectKey: string | undefined;

  /**
   * <p>Version Id of the pipeline definition file. If not specified, Amazon SageMaker
   *             will retrieve the latest version.</p>
   */
  VersionId?: string;
}

export namespace PipelineDefinitionS3Location {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PipelineDefinitionS3Location): any => ({
    ...obj,
  });
}

export interface CreatePipelineRequest {
  /**
   * <p>The name of the pipeline.</p>
   */
  PipelineName: string | undefined;

  /**
   * <p>The display name of the pipeline.</p>
   */
  PipelineDisplayName?: string;

  /**
   * <p>The JSON pipeline definition of the pipeline.</p>
   */
  PipelineDefinition?: string;

  /**
   * <p>The location of the pipeline definition stored in Amazon S3. If specified,
   *             SageMaker will retrieve the pipeline definition from this location.</p>
   */
  PipelineDefinitionS3Location?: PipelineDefinitionS3Location;

  /**
   * <p>A description of the pipeline.</p>
   */
  PipelineDescription?: string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than one time.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role used by the pipeline to access and create resources.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A list of tags to apply to the created pipeline.</p>
   */
  Tags?: Tag[];

  /**
   * <p>This is the configuration that controls the parallelism of the pipeline.
   *             If specified, it applies to all runs of this pipeline by default.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;
}

export namespace CreatePipelineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePipelineRequest): any => ({
    ...obj,
  });
}

export interface CreatePipelineResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the created pipeline.</p>
   */
  PipelineArn?: string;
}

export namespace CreatePipelineResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePipelineResponse): any => ({
    ...obj,
  });
}

export interface CreatePresignedDomainUrlRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The name of the UserProfile to sign-in as.</p>
   */
  UserProfileName: string | undefined;

  /**
   * <p>The session expiration duration in seconds. This value defaults to 43200.</p>
   */
  SessionExpirationDurationInSeconds?: number;

  /**
   * <p>The number of seconds until the pre-signed URL expires. This value defaults to
   *          300.</p>
   */
  ExpiresInSeconds?: number;
}

export namespace CreatePresignedDomainUrlRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePresignedDomainUrlRequest): any => ({
    ...obj,
  });
}

export interface CreatePresignedDomainUrlResponse {
  /**
   * <p>The presigned URL.</p>
   */
  AuthorizedUrl?: string;
}

export namespace CreatePresignedDomainUrlResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePresignedDomainUrlResponse): any => ({
    ...obj,
  });
}

export interface CreatePresignedNotebookInstanceUrlInput {
  /**
   * <p>The name of the notebook instance.</p>
   */
  NotebookInstanceName: string | undefined;

  /**
   * <p>The duration of the session, in seconds. The default is 12 hours.</p>
   */
  SessionExpirationDurationInSeconds?: number;
}

export namespace CreatePresignedNotebookInstanceUrlInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePresignedNotebookInstanceUrlInput): any => ({
    ...obj,
  });
}

export interface CreatePresignedNotebookInstanceUrlOutput {
  /**
   * <p>A JSON object that contains the URL string. </p>
   */
  AuthorizedUrl?: string;
}

export namespace CreatePresignedNotebookInstanceUrlOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePresignedNotebookInstanceUrlOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when
 *       you call the following APIs:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateProcessingJob</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateTrainingJob</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateTransformJob</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface ExperimentConfig {
  /**
   * <p>The name of an existing experiment to associate the trial component with.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The name of an existing trial to associate the trial component with. If not specified, a
   *       new trial is created.</p>
   */
  TrialName?: string;

  /**
   * <p>The display name for the trial component. If this key isn't specified, the display name is
   *       the trial component name.</p>
   */
  TrialComponentDisplayName?: string;
}

export namespace ExperimentConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentConfig): any => ({
    ...obj,
  });
}

export enum DataDistributionType {
  FULLYREPLICATED = "FullyReplicated",
  SHARDEDBYS3KEY = "ShardedByS3Key",
}

export enum InputMode {
  FILE = "File",
  PIPE = "Pipe",
}

export enum RedshiftResultCompressionType {
  BZIP2 = "BZIP2",
  GZIP = "GZIP",
  NONE = "None",
  SNAPPY = "SNAPPY",
  ZSTD = "ZSTD",
}

export enum RedshiftResultFormat {
  CSV = "CSV",
  PARQUET = "PARQUET",
}

/**
 * <p>Configuration for Redshift Dataset Definition input.</p>
 */
export interface RedshiftDatasetDefinition {
  /**
   * <p>The Redshift cluster Identifier.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The name of the Redshift database used in Redshift query execution.</p>
   */
  Database: string | undefined;

  /**
   * <p>The database user name used in Redshift query execution.</p>
   */
  DbUser: string | undefined;

  /**
   * <p>The SQL query statements to be executed.</p>
   */
  QueryString: string | undefined;

  /**
   * <p>The IAM role attached to your Redshift cluster that Amazon SageMaker uses to generate datasets.</p>
   */
  ClusterRoleArn: string | undefined;

  /**
   * <p>The location in Amazon S3 where the Redshift query results are stored.</p>
   */
  OutputS3Uri: string | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data from a
   *             Redshift execution.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The data storage format for Redshift query results.</p>
   */
  OutputFormat: RedshiftResultFormat | string | undefined;

  /**
   * <p>The compression used for Redshift query results.</p>
   */
  OutputCompression?: RedshiftResultCompressionType | string;
}

export namespace RedshiftDatasetDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedshiftDatasetDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration for Dataset Definition inputs. The Dataset Definition input must specify
 *             exactly one of either <code>AthenaDatasetDefinition</code> or <code>RedshiftDatasetDefinition</code>
 *             types.</p>
 */
export interface DatasetDefinition {
  /**
   * <p>Configuration for Athena Dataset Definition input.</p>
   */
  AthenaDatasetDefinition?: AthenaDatasetDefinition;

  /**
   * <p>Configuration for Redshift Dataset Definition input.</p>
   */
  RedshiftDatasetDefinition?: RedshiftDatasetDefinition;

  /**
   * <p>The local path where you want Amazon SageMaker to download the Dataset Definition inputs to run a
   *             processing job. <code>LocalPath</code> is an absolute path to the input data. This is a required
   *             parameter when <code>AppManaged</code> is <code>False</code> (default).</p>
   */
  LocalPath?: string;

  /**
   * <p>Whether the generated dataset is <code>FullyReplicated</code> or
   *             <code>ShardedByS3Key</code> (default).</p>
   */
  DataDistributionType?: DataDistributionType | string;

  /**
   * <p>Whether to use <code>File</code> or <code>Pipe</code> input mode. In <code>File</code> (default) mode,
   *             Amazon SageMaker copies the data from the input source onto the local Amazon Elastic Block Store
   *             (Amazon EBS) volumes before starting your training algorithm. This is the most commonly used
   *             input mode. In <code>Pipe</code> mode, Amazon SageMaker streams input data from the source directly to your
   *             algorithm without using the EBS volume.</p>
   */
  InputMode?: InputMode | string;
}

export namespace DatasetDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetDefinition): any => ({
    ...obj,
  });
}

export enum ProcessingS3CompressionType {
  GZIP = "Gzip",
  NONE = "None",
}

export enum ProcessingS3DataType {
  MANIFEST_FILE = "ManifestFile",
  S3_PREFIX = "S3Prefix",
}

/**
 * <p>Configuration for downloading input data from Amazon S3 into the processing container.</p>
 */
export interface ProcessingS3Input {
  /**
   * <p>The URI of the Amazon S3 prefix Amazon SageMaker downloads data required to run a processing job.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>The local path in your container where you want Amazon SageMaker to write input data to.
   *             <code>LocalPath</code> is an absolute path to the input data and must begin with
   *             <code>/opt/ml/processing/</code>. <code>LocalPath</code> is a required
   *             parameter when <code>AppManaged</code> is <code>False</code> (default).</p>
   */
  LocalPath?: string;

  /**
   * <p>Whether you use an <code>S3Prefix</code> or a <code>ManifestFile</code> for
   *             the data type. If you choose <code>S3Prefix</code>, <code>S3Uri</code> identifies a key
   *             name prefix. Amazon SageMaker uses all objects with the specified key name prefix for the processing
   *             job. If you choose <code>ManifestFile</code>, <code>S3Uri</code> identifies an object
   *             that is a manifest file containing a list of object keys that you want Amazon SageMaker to use for
   *             the processing job.</p>
   */
  S3DataType: ProcessingS3DataType | string | undefined;

  /**
   * <p>Whether to use <code>File</code> or <code>Pipe</code> input mode. In File mode, Amazon SageMaker copies the data
   *             from the input source onto the local ML storage volume before starting your processing
   *             container. This is the most commonly used input mode. In <code>Pipe</code> mode, Amazon SageMaker
   *             streams input data from the source directly to your processing container into named
   *             pipes without using the ML storage volume.</p>
   */
  S3InputMode?: ProcessingS3InputMode | string;

  /**
   * <p>Whether to distribute the data from Amazon S3 to all processing instances with
   *             <code>FullyReplicated</code>, or whether the data from Amazon S3 is shared by Amazon S3 key,
   *             downloading one shard of data to each processing instance.</p>
   */
  S3DataDistributionType?: ProcessingS3DataDistributionType | string;

  /**
   * <p>Whether to GZIP-decompress the data in Amazon S3 as it is streamed into the processing
   *             container. <code>Gzip</code> can only be used when <code>Pipe</code> mode is
   *             specified as the <code>S3InputMode</code>. In <code>Pipe</code> mode, Amazon SageMaker streams input
   *             data from the source directly to your container without using the EBS volume.</p>
   */
  S3CompressionType?: ProcessingS3CompressionType | string;
}

export namespace ProcessingS3Input {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingS3Input): any => ({
    ...obj,
  });
}

/**
 * <p>The inputs for a processing job. The processing input must specify exactly one of either
 *             <code>S3Input</code> or <code>DatasetDefinition</code> types.</p>
 */
export interface ProcessingInput {
  /**
   * <p>The name for the processing job input.</p>
   */
  InputName: string | undefined;

  /**
   * <p>When <code>True</code>, input operations such as data download are managed natively by the
   *             processing job application. When <code>False</code> (default), input operations are managed by Amazon SageMaker.</p>
   */
  AppManaged?: boolean;

  /**
   * <p>Configuration for downloading input data from Amazon S3 into the processing container.</p>
   */
  S3Input?: ProcessingS3Input;

  /**
   * <p>Configuration for a Dataset Definition input. </p>
   */
  DatasetDefinition?: DatasetDefinition;
}

export namespace ProcessingInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingInput): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration for processing job outputs in Amazon SageMaker Feature Store.</p>
 */
export interface ProcessingFeatureStoreOutput {
  /**
   * <p>The name of the Amazon SageMaker FeatureGroup to use as the destination for processing job output. Note that your
   *             processing script is responsible for putting records into your Feature Store.</p>
   */
  FeatureGroupName: string | undefined;
}

export namespace ProcessingFeatureStoreOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingFeatureStoreOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration for uploading output data to Amazon S3 from the processing container.</p>
 */
export interface ProcessingS3Output {
  /**
   * <p>A URI that identifies the Amazon S3 bucket where you want Amazon SageMaker to save the results of
   *             a processing job.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>The local path of a directory where you want Amazon SageMaker to upload its contents to Amazon S3.
   *             <code>LocalPath</code> is an absolute path to a directory containing output files.
   *             This directory will be created by the platform and exist when your container's
   *             entrypoint is invoked.</p>
   */
  LocalPath: string | undefined;

  /**
   * <p>Whether to upload the results of the processing job continuously or after the job
   *             completes.</p>
   */
  S3UploadMode: ProcessingS3UploadMode | string | undefined;
}

export namespace ProcessingS3Output {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingS3Output): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the results of a processing job. The processing output must specify exactly one of
 *             either <code>S3Output</code> or <code>FeatureStoreOutput</code> types.</p>
 */
export interface ProcessingOutput {
  /**
   * <p>The name for the processing job output.</p>
   */
  OutputName: string | undefined;

  /**
   * <p>Configuration for processing job outputs in Amazon S3.</p>
   */
  S3Output?: ProcessingS3Output;

  /**
   * <p>Configuration for processing job outputs in Amazon SageMaker Feature Store. This processing output
   *             type is only supported when <code>AppManaged</code> is specified. </p>
   */
  FeatureStoreOutput?: ProcessingFeatureStoreOutput;

  /**
   * <p>When <code>True</code>, output operations such as data upload are managed natively by the
   *             processing job application. When <code>False</code> (default), output operations are managed by
   *             Amazon SageMaker.</p>
   */
  AppManaged?: boolean;
}

export namespace ProcessingOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration for uploading output from the processing container.</p>
 */
export interface ProcessingOutputConfig {
  /**
   * <p>An array of outputs configuring the data to upload from the processing container.</p>
   */
  Outputs: ProcessingOutput[] | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt the processing
   *             job output. <code>KmsKeyId</code> can be an ID of a KMS key, ARN of a KMS key, alias of
   *             a KMS key, or alias of a KMS key. The <code>KmsKeyId</code> is applied to all
   *             outputs.</p>
   */
  KmsKeyId?: string;
}

export namespace ProcessingOutputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingOutputConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration for the cluster used to run a processing job.</p>
 */
export interface ProcessingClusterConfig {
  /**
   * <p>The number of ML compute instances to use in the processing job. For distributed
   *             processing jobs, specify a value greater than 1. The default value is 1.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>The ML compute instance type for the processing job.</p>
   */
  InstanceType: ProcessingInstanceType | string | undefined;

  /**
   * <p>The size of the ML storage volume in gigabytes that you want to provision. You must
   *             specify sufficient ML storage for your scenario.</p>
   *         <note>
   *             <p>Certain Nitro-based instances include local storage with a fixed total size,
   *                 dependent on the instance type. When using these instances for processing, Amazon SageMaker mounts
   *                 the local instance storage instead of Amazon EBS gp2 storage. You can't request a
   *                 <code>VolumeSizeInGB</code> greater than the total size of the local instance
   *                 storage.</p>
   *             <p>For a list of instance types that support local instance storage, including the
   *                 total size per instance type, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes">Instance Store Volumes</a>.</p>
   *         </note>
   */
  VolumeSizeInGB: number | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data on the
   *             storage volume attached to the ML compute instance(s) that run the processing job.
   *         </p>
   *         <note>
   *             <p>Certain Nitro-based instances include local storage, dependent on the instance
   *                 type. Local storage volumes are encrypted using a hardware module on the instance.
   *                 You can't request a <code>VolumeKmsKeyId</code> when using an instance type with
   *                 local storage.</p>
   *             <p>For a list of instance types that support local instance storage, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes">Instance Store Volumes</a>.</p>
   *             <p>For more information about local instance storage encryption, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html">SSD
   *                 Instance Store Volumes</a>.</p>
   *         </note>
   */
  VolumeKmsKeyId?: string;
}

export namespace ProcessingClusterConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingClusterConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
 *             processing job. In distributed training, you specify more than one instance.</p>
 */
export interface ProcessingResources {
  /**
   * <p>The configuration for the resources in a cluster used to run the processing
   *             job.</p>
   */
  ClusterConfig: ProcessingClusterConfig | undefined;
}

export namespace ProcessingResources {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingResources): any => ({
    ...obj,
  });
}

/**
 * <p>Configures conditions under which the processing job should be stopped, such as how long
 *             the processing job has been running. After the condition is met, the processing job is stopped.</p>
 */
export interface ProcessingStoppingCondition {
  /**
   * <p>Specifies the maximum runtime in seconds.</p>
   */
  MaxRuntimeInSeconds: number | undefined;
}

export namespace ProcessingStoppingCondition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingStoppingCondition): any => ({
    ...obj,
  });
}

export interface CreateProcessingJobRequest {
  /**
   * <p>An array of inputs configuring the data to download into the
   *             processing container.</p>
   */
  ProcessingInputs?: ProcessingInput[];

  /**
   * <p>Output configuration for the processing job.</p>
   */
  ProcessingOutputConfig?: ProcessingOutputConfig;

  /**
   * <p> The name of the processing job. The name must be unique within an Amazon Web Services Region in the
   *             Amazon Web Services account.</p>
   */
  ProcessingJobName: string | undefined;

  /**
   * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
   *             processing job. In distributed training, you specify more than one instance.</p>
   */
  ProcessingResources: ProcessingResources | undefined;

  /**
   * <p>The time limit for how long the processing job is allowed to run.</p>
   */
  StoppingCondition?: ProcessingStoppingCondition;

  /**
   * <p>Configures the processing job to run a specified Docker container image.</p>
   */
  AppSpecification: AppSpecification | undefined;

  /**
   * <p>The environment variables to set in the Docker container. Up to
   *             100 key and values entries in the map are supported.</p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>Networking options for a processing job, such as whether to allow inbound and
   *             outbound network calls to and from processing containers, and the VPC subnets and
   *             security groups to use for VPC-enabled processing jobs.</p>
   */
  NetworkConfig?: NetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on
   *             your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>(Optional) An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management
   *                 User Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when
   *       you call the following APIs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>CreateProcessingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTrainingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTransformJob</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ExperimentConfig?: ExperimentConfig;
}

export namespace CreateProcessingJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProcessingJobRequest): any => ({
    ...obj,
  });
}

export interface CreateProcessingJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the processing job.</p>
   */
  ProcessingJobArn: string | undefined;
}

export namespace CreateProcessingJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProcessingJobResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A key value pair used when you provision a project as a service catalog product. For
 *             information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
 *                 Catalog</a>.</p>
 */
export interface ProvisioningParameter {
  /**
   * <p>The key that identifies a provisioning parameter.</p>
   */
  Key?: string;

  /**
   * <p>The value of the provisioning parameter.</p>
   */
  Value?: string;
}

export namespace ProvisioningParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProvisioningParameter): any => ({
    ...obj,
  });
}

/**
 * <p>Details that you specify to provision a service catalog product. For information about
 *             service catalog, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
 *                 Catalog</a>.</p>
 */
export interface ServiceCatalogProvisioningDetails {
  /**
   * <p>The ID of the product to provision.</p>
   */
  ProductId: string | undefined;

  /**
   * <p>The ID of the provisioning artifact.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * <p>The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. </p>
   */
  PathId?: string;

  /**
   * <p>A list of key value pairs that you specify when you provision a product.</p>
   */
  ProvisioningParameters?: ProvisioningParameter[];
}

export namespace ServiceCatalogProvisioningDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceCatalogProvisioningDetails): any => ({
    ...obj,
  });
}

export interface CreateProjectInput {
  /**
   * <p>The name of the project.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>A description for the project.</p>
   */
  ProjectDescription?: string;

  /**
   * <p>The product ID and provisioning artifact ID to provision a service catalog. The provisioning
   *             artifact ID will default to the latest provisioning artifact ID of the product, if you don't
   *             provide the provisioning artifact ID. For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
   *                 Catalog</a>.</p>
   */
  ServiceCatalogProvisioningDetails: ServiceCatalogProvisioningDetails | undefined;

  /**
   * <p>An array of key-value pairs that you want to use to organize and track your Amazon Web Services
   *             resource costs. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateProjectInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProjectInput): any => ({
    ...obj,
  });
}

export interface CreateProjectOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  ProjectArn: string | undefined;

  /**
   * <p>The ID of the new project.</p>
   */
  ProjectId: string | undefined;
}

export namespace CreateProjectOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProjectOutput): any => ({
    ...obj,
  });
}

export enum StudioLifecycleConfigAppType {
  JupyterServer = "JupyterServer",
  KernelGateway = "KernelGateway",
}

export interface CreateStudioLifecycleConfigRequest {
  /**
   * <p>The name of the Studio Lifecycle Configuration to create.</p>
   */
  StudioLifecycleConfigName: string | undefined;

  /**
   * <p>The content of your Studio Lifecycle Configuration script. This content must be base64 encoded.</p>
   */
  StudioLifecycleConfigContent: string | undefined;

  /**
   * <p>The App type that the Lifecycle Configuration is attached to.</p>
   */
  StudioLifecycleConfigAppType: StudioLifecycleConfigAppType | string | undefined;

  /**
   * <p>Tags to be associated with the Lifecycle Configuration. Each tag consists of a key and an optional value. Tag keys must be unique per resource. Tags are searchable using the Search API. </p>
   */
  Tags?: Tag[];
}

export namespace CreateStudioLifecycleConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStudioLifecycleConfigRequest): any => ({
    ...obj,
  });
}

export interface CreateStudioLifecycleConfigResponse {
  /**
   * <p>The ARN of your created Lifecycle Configuration.</p>
   */
  StudioLifecycleConfigArn?: string;
}

export namespace CreateStudioLifecycleConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStudioLifecycleConfigResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for the Debugger hook parameters, metric and tensor collections, and
 *             storage paths. To learn more about
 *             how to configure the <code>DebugHookConfig</code> parameter,
 *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.</p>
 */
export interface DebugHookConfig {
  /**
   * <p>Path to local storage location for metrics and tensors. Defaults to
   *                 <code>/opt/ml/output/tensors/</code>.</p>
   */
  LocalPath?: string;

  /**
   * <p>Path to Amazon S3 storage location for metrics and tensors.</p>
   */
  S3OutputPath: string | undefined;

  /**
   * <p>Configuration information for the Debugger hook parameters.</p>
   */
  HookParameters?: Record<string, string>;

  /**
   * <p>Configuration information for Debugger tensor collections. To learn more about
   *             how to configure the <code>CollectionConfiguration</code> parameter,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
   *         </p>
   */
  CollectionConfigurations?: CollectionConfiguration[];
}

export namespace DebugHookConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DebugHookConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for SageMaker Debugger rules for debugging. To learn more about
 *             how to configure the <code>DebugRuleConfiguration</code> parameter,
 *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.</p>
 */
export interface DebugRuleConfiguration {
  /**
   * <p>The name of the rule configuration. It must be unique relative to other rule
   *             configuration names.</p>
   */
  RuleConfigurationName: string | undefined;

  /**
   * <p>Path to local storage location for output of rules. Defaults to
   *                 <code>/opt/ml/processing/output/rule/</code>.</p>
   */
  LocalPath?: string;

  /**
   * <p>Path to Amazon S3 storage location for rules.</p>
   */
  S3OutputPath?: string;

  /**
   * <p>The Amazon Elastic Container (ECR) Image for the managed rule evaluation.</p>
   */
  RuleEvaluatorImage: string | undefined;

  /**
   * <p>The instance type to deploy a Debugger custom rule for debugging a training job.</p>
   */
  InstanceType?: ProcessingInstanceType | string;

  /**
   * <p>The size, in GB, of the ML storage volume attached to the processing instance.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * <p>Runtime configuration for rule container.</p>
   */
  RuleParameters?: Record<string, string>;
}

export namespace DebugRuleConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DebugRuleConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for Debugger system monitoring, framework profiling, and
 *             storage paths.</p>
 */
export interface ProfilerConfig {
  /**
   * <p>Path to Amazon S3 storage location for system and framework metrics.</p>
   */
  S3OutputPath: string | undefined;

  /**
   * <p>A time interval for capturing system metrics in milliseconds. Available values are
   *             100, 200, 500, 1000 (1 second), 5000 (5 seconds), and 60000 (1 minute) milliseconds. The default value is 500 milliseconds.</p>
   */
  ProfilingIntervalInMilliseconds?: number;

  /**
   * <p>Configuration information for capturing framework metrics. Available key strings for different profiling options are
   *             <code>DetailedProfilingConfig</code>, <code>PythonProfilingConfig</code>, and <code>DataLoaderProfilingConfig</code>.
   *             The following codes are configuration structures for the <code>ProfilingParameters</code> parameter. To learn more about
   *             how to configure the <code>ProfilingParameters</code> parameter,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
   *         </p>
   */
  ProfilingParameters?: Record<string, string>;
}

export namespace ProfilerConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProfilerConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for profiling rules.</p>
 */
export interface ProfilerRuleConfiguration {
  /**
   * <p>The name of the rule configuration. It must be unique relative to other rule configuration names.</p>
   */
  RuleConfigurationName: string | undefined;

  /**
   * <p>Path to local storage location for output of rules. Defaults to <code>/opt/ml/processing/output/rule/</code>. </p>
   */
  LocalPath?: string;

  /**
   * <p>Path to Amazon S3 storage location for rules.</p>
   */
  S3OutputPath?: string;

  /**
   * <p>The Amazon Elastic Container (ECR) Image for the managed rule evaluation.</p>
   */
  RuleEvaluatorImage: string | undefined;

  /**
   * <p>The instance type to deploy a Debugger custom rule for profiling a training job.</p>
   */
  InstanceType?: ProcessingInstanceType | string;

  /**
   * <p>The size, in GB, of the ML storage volume attached to the processing instance.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * <p>Runtime configuration for rule container.</p>
   */
  RuleParameters?: Record<string, string>;
}

export namespace ProfilerRuleConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProfilerRuleConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration of storage locations for the Debugger TensorBoard output data.</p>
 */
export interface TensorBoardOutputConfig {
  /**
   * <p>Path to local storage location for tensorBoard output. Defaults to
   *                 <code>/opt/ml/output/tensorboard</code>.</p>
   */
  LocalPath?: string;

  /**
   * <p>Path to Amazon S3 storage location for TensorBoard output.</p>
   */
  S3OutputPath: string | undefined;
}

export namespace TensorBoardOutputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TensorBoardOutputConfig): any => ({
    ...obj,
  });
}

export interface CreateTrainingJobRequest {
  /**
   * <p>The name of the training job. The name must be unique within an Amazon Web Services Region in an
   *             Amazon Web Services account. </p>
   */
  TrainingJobName: string | undefined;

  /**
   * <p>Algorithm-specific parameters that influence the quality of the model. You set
   *             hyperparameters before you start the learning process. For a list of hyperparameters for
   *             each training algorithm provided by SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. </p>
   *         <p>You can specify a maximum of 100 hyperparameters. Each hyperparameter is a
   *             key-value pair. Each key and value is limited to 256 characters, as specified by the
   *                 <code>Length Constraint</code>. </p>
   */
  HyperParameters?: Record<string, string>;

  /**
   * <p>The registry path of the Docker image that contains the training algorithm and
   *             algorithm-specific metadata, including the input mode. For more information about
   *             algorithms provided by SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For information about
   *             providing your own algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon
   *                 SageMaker</a>. </p>
   */
  AlgorithmSpecification: AlgorithmSpecification | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that SageMaker can assume to perform
   *             tasks on your behalf. </p>
   *         <p>During model training, SageMaker needs your permission to read input data from an S3
   *             bucket, download a Docker image that contains training code, write model artifacts to an
   *             S3 bucket, write logs to Amazon CloudWatch Logs, and publish metrics to Amazon CloudWatch. You grant
   *             permissions for all of these tasks to an IAM role. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">SageMaker
   *                 Roles</a>. </p>
   *         <note>
   *             <p>To be able to pass this role to SageMaker, the caller of this API must have the
   *                     <code>iam:PassRole</code> permission.</p>
   *         </note>
   */
  RoleArn: string | undefined;

  /**
   * <p>An array of <code>Channel</code> objects. Each channel is a named input source.
   *                 <code>InputDataConfig</code> describes the input data and its location. </p>
   *         <p>Algorithms can accept input data from one or more channels. For example, an
   *             algorithm might have two channels of input data, <code>training_data</code> and
   *                 <code>validation_data</code>. The configuration for each channel provides the S3,
   *             EFS, or FSx location where the input data is stored. It also provides information about
   *             the stored data: the MIME type, compression method, and whether the data is wrapped in
   *             RecordIO format. </p>
   *         <p>Depending on the input mode that the algorithm supports, SageMaker either copies input
   *             data files from an S3 bucket to a local directory in the Docker container, or makes it
   *             available as input streams. For example, if you specify an EFS location, input data
   *             files are available as input streams. They do not need to be
   *             downloaded.</p>
   */
  InputDataConfig?: Channel[];

  /**
   * <p>Specifies the path to the S3 location where you want to store model artifacts. SageMaker
   *             creates subfolders for the artifacts. </p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The resources, including the ML compute instances and ML storage volumes, to use
   *             for model training. </p>
   *         <p>ML storage volumes store model artifacts and incremental states. Training
   *             algorithms might also use ML storage volumes for scratch space. If you want SageMaker to use
   *             the ML storage volume to store the training data, choose <code>File</code> as the
   *                 <code>TrainingInputMode</code> in the algorithm specification. For distributed
   *             training algorithms, specify an instance count greater than 1.</p>
   */
  ResourceConfig: ResourceConfig | undefined;

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that you want your
   *             training job to connect to. Control access to and from your training container by
   *             configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon
   *                 Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Specifies a limit to how long a model training job can run. It also specifies how long
   *             a managed Spot training job has to complete. When the job reaches the time limit, SageMaker
   *             ends the training job. Use this API to cap model training costs.</p>
   *         <p>To stop a job, SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays
   *             job termination for 120 seconds. Algorithms can use this 120-second window to save the
   *             model artifacts, so the results of training are not lost. </p>
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in
   *             different ways, for example, by purpose, owner, or environment. For more information,
   *             see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 Resources</a>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Isolates the training container. No inbound or outbound network calls can be made,
   *             except for calls between peers within a training cluster for distributed training. If
   *             you enable network isolation for training jobs that are configured to use a VPC, SageMaker
   *             downloads and uploads customer data and model artifacts through the specified VPC, but
   *             the training container does not have network access.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>To encrypt all communications between ML compute instances in distributed training,
   *             choose <code>True</code>. Encryption provides greater security for distributed training,
   *             but training might take longer. How long it takes depends on the amount of communication
   *             between compute instances, especially if you use a deep learning algorithm in
   *             distributed training. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-encrypt.html">Protect Communications Between ML
   *                 Compute Instances in a Distributed Training Job</a>.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>To train models using managed spot training, choose <code>True</code>. Managed spot
   *             training provides a fully managed and scalable infrastructure for training machine
   *             learning models. this option is useful when training jobs can be interrupted and when
   *             there is flexibility when the training job is run. </p>
   *         <p>The complete and intermediate results of jobs are stored in an Amazon S3 bucket, and can be
   *             used as a starting point to train models incrementally. Amazon SageMaker provides metrics and
   *             logs in CloudWatch. They can be used to see when managed spot training jobs are running,
   *             interrupted, resumed, or completed. </p>
   */
  EnableManagedSpotTraining?: boolean;

  /**
   * <p>Contains information about the output location for managed spot training checkpoint
   *             data.</p>
   */
  CheckpointConfig?: CheckpointConfig;

  /**
   * <p>Configuration information for the Debugger hook parameters, metric and tensor collections, and
   *             storage paths. To learn more about
   *             how to configure the <code>DebugHookConfig</code> parameter,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.</p>
   */
  DebugHookConfig?: DebugHookConfig;

  /**
   * <p>Configuration information for Debugger rules for debugging output tensors.</p>
   */
  DebugRuleConfigurations?: DebugRuleConfiguration[];

  /**
   * <p>Configuration of storage locations for the Debugger TensorBoard output data.</p>
   */
  TensorBoardOutputConfig?: TensorBoardOutputConfig;

  /**
   * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when
   *       you call the following APIs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>CreateProcessingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTrainingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTransformJob</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * <p>Configuration information for Debugger system monitoring, framework profiling, and
   *             storage paths.</p>
   */
  ProfilerConfig?: ProfilerConfig;

  /**
   * <p>Configuration information for Debugger rules for profiling system and framework
   *             metrics.</p>
   */
  ProfilerRuleConfigurations?: ProfilerRuleConfiguration[];

  /**
   * <p>The environment variables to set in the Docker container.</p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>The number of times to retry the job when the job fails due to an
   *                 <code>InternalServerError</code>.</p>
   */
  RetryStrategy?: RetryStrategy;
}

export namespace CreateTrainingJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrainingJobRequest): any => ({
    ...obj,
  });
}

export interface CreateTrainingJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;
}

export namespace CreateTrainingJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrainingJobResponse): any => ({
    ...obj,
  });
}

export enum JoinSource {
  INPUT = "Input",
  NONE = "None",
}

/**
 * <p>The data structure used to specify the data to be used for inference in a batch
 *             transform job and to associate the data that is relevant to the prediction results in
 *             the output. The input filter provided allows you to exclude input data that is not
 *             needed for inference in a batch transform job. The output filter provided allows you to
 *             include input data relevant to interpreting the predictions in the output from the job.
 *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html">Associate Prediction
 *                 Results with their Corresponding Input Records</a>.</p>
 */
export interface DataProcessing {
  /**
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html#data-processing-operators">JSONPath</a> expression used to select a portion of the input data to pass to
   *             the algorithm. Use the <code>InputFilter</code> parameter to exclude fields, such as an
   *             ID column, from the input. If you want SageMaker to pass the entire input dataset to the
   *             algorithm, accept the default value <code>$</code>.</p>
   *         <p>Examples: <code>"$"</code>, <code>"$[1:]"</code>, <code>"$.features"</code>
   *          </p>
   */
  InputFilter?: string;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html#data-processing-operators">JSONPath</a> expression used to select a portion of the joined dataset to save
   *             in the output file for a batch transform job. If you want SageMaker to store the entire input
   *             dataset in the output file, leave the default value, <code>$</code>. If you specify
   *             indexes that aren't within the dimension size of the joined dataset, you get an
   *             error.</p>
   *         <p>Examples: <code>"$"</code>, <code>"$[0,5:]"</code>,
   *                 <code>"$['id','SageMakerOutput']"</code>
   *          </p>
   */
  OutputFilter?: string;

  /**
   * <p>Specifies the source of the data to join with the transformed data. The valid values
   *             are <code>None</code> and <code>Input</code>. The default value is <code>None</code>,
   *             which specifies not to join the input with the transformed data. If you want the batch
   *             transform job to join the original input data with the transformed data, set
   *                 <code>JoinSource</code> to <code>Input</code>. You can specify
   *                 <code>OutputFilter</code> as an additional filter to select a portion of the joined
   *             dataset and store it in the output file.</p>
   *         <p>For JSON or JSONLines objects, such as a JSON array, SageMaker adds the transformed data to
   *             the input JSON object in an attribute called <code>SageMakerOutput</code>. The joined
   *             result for JSON must be a key-value pair object. If the input is not a key-value pair
   *             object, SageMaker creates a new JSON file. In the new JSON file, and the input data is stored
   *             under the <code>SageMakerInput</code> key and the results are stored in
   *                 <code>SageMakerOutput</code>.</p>
   *         <p>For CSV data, SageMaker takes each row as a JSON array and joins the transformed data with
   *             the input by appending each transformed row to the end of the input. The joined data has
   *             the original input data followed by the transformed data and the output is a CSV
   *             file.</p>
   *         <p>For information on how joining in applied, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html#batch-transform-data-processing-workflow">Workflow for Associating Inferences with Input Records</a>.</p>
   */
  JoinSource?: JoinSource | string;
}

export namespace DataProcessing {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataProcessing): any => ({
    ...obj,
  });
}

/**
 * <p>Configures the timeout and maximum number of retries for processing a transform job
 *             invocation.</p>
 */
export interface ModelClientConfig {
  /**
   * <p>The timeout value in seconds for an invocation request. The default value is 600.</p>
   */
  InvocationsTimeoutInSeconds?: number;

  /**
   * <p>The maximum number of retries when invocation requests are failing. The default value is 3.</p>
   */
  InvocationsMaxRetries?: number;
}

export namespace ModelClientConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelClientConfig): any => ({
    ...obj,
  });
}

export interface CreateTransformJobRequest {
  /**
   * <p>The name of the transform job. The name must be unique within an Amazon Web Services Region in an
   *             Amazon Web Services account. </p>
   */
  TransformJobName: string | undefined;

  /**
   * <p>The name of the model that you want to use for the transform job.
   *             <code>ModelName</code> must be the name of an existing Amazon SageMaker model within an Amazon Web Services
   *             Region in an Amazon Web Services account.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The maximum number of parallel requests that can be sent to each instance in a
   *             transform job. If <code>MaxConcurrentTransforms</code> is set to <code>0</code> or left
   *             unset, Amazon SageMaker checks the optional execution-parameters to determine the settings for your
   *             chosen algorithm. If the execution-parameters endpoint is not enabled, the default value
   *             is <code>1</code>. For more information on execution-parameters, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-batch-code.html#your-algorithms-batch-code-how-containe-serves-requests">How Containers Serve Requests</a>. For built-in algorithms, you don't need to
   *             set a value for <code>MaxConcurrentTransforms</code>.</p>
   */
  MaxConcurrentTransforms?: number;

  /**
   * <p>Configures the timeout and maximum number of retries for processing a transform job
   *             invocation.</p>
   */
  ModelClientConfig?: ModelClientConfig;

  /**
   * <p>The maximum allowed size of the payload, in MB. A <i>payload</i> is the
   *             data portion of a record (without metadata). The value in <code>MaxPayloadInMB</code>
   *             must be greater than, or equal to, the size of a single record. To estimate the size of
   *             a record in MB, divide the size of your dataset by the number of records. To ensure that
   *             the records fit within the maximum payload size, we recommend using a slightly larger
   *             value. The default value is <code>6</code> MB.
   *             </p>
   *         <p>The value of <code>MaxPayloadInMB</code> cannot be greater than 100 MB. If you specify
   *             the <code>MaxConcurrentTransforms</code> parameter, the value of
   *                 <code>(MaxConcurrentTransforms * MaxPayloadInMB)</code> also cannot exceed 100
   *             MB.</p>
   *         <p>For cases where the payload might be arbitrarily large and is transmitted using HTTP
   *             chunked encoding, set the value to <code>0</code>.
   *             This
   *             feature works only in supported algorithms. Currently, Amazon SageMaker built-in
   *             algorithms do not support HTTP chunked encoding.</p>
   */
  MaxPayloadInMB?: number;

  /**
   * <p>Specifies the number of records to include in a mini-batch for an HTTP inference
   *             request. A <i>record</i>
   *             <i></i> is a single unit of input data that
   *             inference can be made on. For example, a single line in a CSV file is a record. </p>
   *         <p>To enable the batch strategy, you must set the <code>SplitType</code> property to
   *                 <code>Line</code>, <code>RecordIO</code>, or <code>TFRecord</code>.</p>
   *         <p>To use only one record when making an HTTP invocation request to a container, set
   *                 <code>BatchStrategy</code> to <code>SingleRecord</code> and <code>SplitType</code>
   *             to <code>Line</code>.</p>
   *         <p>To fit as many records in a mini-batch as can fit within the
   *                 <code>MaxPayloadInMB</code> limit, set <code>BatchStrategy</code> to
   *                 <code>MultiRecord</code> and <code>SplitType</code> to <code>Line</code>.</p>
   */
  BatchStrategy?: BatchStrategy | string;

  /**
   * <p>The environment variables to set in the Docker container. We support up to 16 key and
   *             values entries in the map.</p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>Describes the input source and
   *             the
   *             way the transform job consumes it.</p>
   */
  TransformInput: TransformInput | undefined;

  /**
   * <p>Describes the results of the transform job.</p>
   */
  TransformOutput: TransformOutput | undefined;

  /**
   * <p>Describes the resources, including
   *             ML
   *             instance types and ML instance count, to use for the transform
   *             job.</p>
   */
  TransformResources: TransformResources | undefined;

  /**
   * <p>The data structure used to specify the data to be used for inference in a batch
   *             transform job and to associate the data that is relevant to the prediction results in
   *             the output. The input filter provided allows you to exclude input data that is not
   *             needed for inference in a batch transform job. The output filter provided allows you to
   *             include input data relevant to interpreting the predictions in the output from the job.
   *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html">Associate Prediction
   *                 Results with their Corresponding Input Records</a>.</p>
   */
  DataProcessing?: DataProcessing;

  /**
   * <p>(Optional)
   *             An
   *             array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                 Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User
   *                 Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when
   *       you call the following APIs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>CreateProcessingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTrainingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTransformJob</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ExperimentConfig?: ExperimentConfig;
}

export namespace CreateTransformJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransformJobRequest): any => ({
    ...obj,
  });
}

export interface CreateTransformJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   */
  TransformJobArn: string | undefined;
}

export namespace CreateTransformJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransformJobResponse): any => ({
    ...obj,
  });
}

export interface CreateTrialRequest {
  /**
   * <p>The name of the trial. The name must be unique in your Amazon Web Services account and is not
   *       case-sensitive.</p>
   */
  TrialName: string | undefined;

  /**
   * <p>The name of the trial as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>TrialName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The name of the experiment to associate the trial with.</p>
   */
  ExperimentName: string | undefined;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>A list of tags to associate with the trial. You can use <a>Search</a> API to
   *       search on the tags.</p>
   */
  Tags?: Tag[];
}

export namespace CreateTrialRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrialRequest): any => ({
    ...obj,
  });
}

export interface CreateTrialResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;
}

export namespace CreateTrialResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrialResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an input or output artifact of a trial component. You specify
 *         <code>TrialComponentArtifact</code> as part of the <code>InputArtifacts</code> and
 *         <code>OutputArtifacts</code> parameters in the <a>CreateTrialComponent</a>
 *       request.</p>
 *          <p>Examples of input artifacts are datasets, algorithms, hyperparameters, source code, and
 *       instance types. Examples of output artifacts are metrics, snapshots, logs, and images.</p>
 */
export interface TrialComponentArtifact {
  /**
   * <p>The media type of the artifact, which indicates the type of data in the artifact file. The
   *       media type consists of a <i>type</i> and a <i>subtype</i>
   *       concatenated with a slash (/) character, for example, text/csv, image/jpeg, and s3/uri. The
   *       type specifies the category of the media. The subtype specifies the kind of data.</p>
   */
  MediaType?: string;

  /**
   * <p>The location of the artifact.</p>
   */
  Value: string | undefined;
}

export namespace TrialComponentArtifact {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialComponentArtifact): any => ({
    ...obj,
  });
}

/**
 * <p>The value of a hyperparameter. Only one of <code>NumberValue</code> or
 *         <code>StringValue</code> can be specified.</p>
 *          <p>This object is specified in the <a>CreateTrialComponent</a> request.</p>
 */
export type TrialComponentParameterValue =
  | TrialComponentParameterValue.NumberValueMember
  | TrialComponentParameterValue.StringValueMember
  | TrialComponentParameterValue.$UnknownMember;

export namespace TrialComponentParameterValue {
  /**
   * <p>The string value of a categorical hyperparameter. If you specify a value for this
   *       parameter, you can't specify the <code>NumberValue</code> parameter.</p>
   */
  export interface StringValueMember {
    StringValue: string;
    NumberValue?: never;
    $unknown?: never;
  }

  /**
   * <p>The numeric value of a numeric hyperparameter. If you specify a value for this parameter,
   *       you can't specify the <code>StringValue</code> parameter.</p>
   */
  export interface NumberValueMember {
    StringValue?: never;
    NumberValue: number;
    $unknown?: never;
  }

  export interface $UnknownMember {
    StringValue?: never;
    NumberValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    StringValue: (value: string) => T;
    NumberValue: (value: number) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TrialComponentParameterValue, visitor: Visitor<T>): T => {
    if (value.StringValue !== undefined) return visitor.StringValue(value.StringValue);
    if (value.NumberValue !== undefined) return visitor.NumberValue(value.NumberValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialComponentParameterValue): any => {
    if (obj.StringValue !== undefined) return { StringValue: obj.StringValue };
    if (obj.NumberValue !== undefined) return { NumberValue: obj.NumberValue };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export enum TrialComponentPrimaryStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

/**
 * <p>The status of the trial component.</p>
 */
export interface TrialComponentStatus {
  /**
   * <p>The status of the trial component.</p>
   */
  PrimaryStatus?: TrialComponentPrimaryStatus | string;

  /**
   * <p>If the component failed, a message describing why.</p>
   */
  Message?: string;
}

export namespace TrialComponentStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialComponentStatus): any => ({
    ...obj,
  });
}

export interface CreateTrialComponentRequest {
  /**
   * <p>The name of the component. The name must be unique in your Amazon Web Services account and is not
   *       case-sensitive.</p>
   */
  TrialComponentName: string | undefined;

  /**
   * <p>The name of the component as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>TrialComponentName</code> is
   *       displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The status of the component. States include:</p>
   *          <ul>
   *             <li>
   *                <p>InProgress</p>
   *             </li>
   *             <li>
   *                <p>Completed</p>
   *             </li>
   *             <li>
   *                <p>Failed</p>
   *             </li>
   *          </ul>
   */
  Status?: TrialComponentStatus;

  /**
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>The hyperparameters for the component.</p>
   */
  Parameters?: Record<string, TrialComponentParameterValue>;

  /**
   * <p>The input artifacts for the component. Examples of input artifacts are datasets,
   *       algorithms, hyperparameters, source code, and instance types.</p>
   */
  InputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * <p>The output artifacts for the component. Examples of output artifacts are metrics,
   *       snapshots, logs, and images.</p>
   */
  OutputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>A list of tags to associate with the component. You can use <a>Search</a> API
   *       to search on the tags.</p>
   */
  Tags?: Tag[];
}

export namespace CreateTrialComponentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrialComponentRequest): any => ({
    ...obj,
    ...(obj.Parameters && {
      Parameters: Object.entries(obj.Parameters).reduce(
        (acc: any, [key, value]: [string, TrialComponentParameterValue]) => ({
          ...acc,
          [key]: TrialComponentParameterValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

export interface CreateTrialComponentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;
}

export namespace CreateTrialComponentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrialComponentResponse): any => ({
    ...obj,
  });
}

export interface CreateUserProfileRequest {
  /**
   * <p>The ID of the associated Domain.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>A name for the UserProfile. This value is not case sensitive.</p>
   */
  UserProfileName: string | undefined;

  /**
   * <p>A specifier for the type of value specified in SingleSignOnUserValue.  Currently, the only supported value is "UserName".
   *            If the Domain's AuthMode is SSO, this field is required.  If the Domain's AuthMode is not SSO, this field cannot be specified.
   *        </p>
   */
  SingleSignOnUserIdentifier?: string;

  /**
   * <p>The username of the associated Amazon Web Services Single Sign-On User for this UserProfile.  If the Domain's AuthMode is SSO, this field is
   *            required, and must match a valid username of a user in your directory.  If the Domain's AuthMode is not SSO, this field cannot be specified.
   *        </p>
   */
  SingleSignOnUserValue?: string;

  /**
   * <p>Each tag consists of a key and an optional value.
   *          Tag keys must be unique per resource.</p>
   *          <p>Tags that you specify for the User Profile are also added to all Apps that the
   *           User Profile launches.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A collection of settings.</p>
   */
  UserSettings?: UserSettings;
}

export namespace CreateUserProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUserProfileRequest): any => ({
    ...obj,
  });
}

export interface CreateUserProfileResponse {
  /**
   * <p>The user profile Amazon Resource Name (ARN).</p>
   */
  UserProfileArn?: string;
}

export namespace CreateUserProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUserProfileResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Use this parameter to configure your OIDC Identity Provider (IdP).</p>
 */
export interface OidcConfig {
  /**
   * <p>The OIDC IdP client ID used to configure your private workforce.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>The OIDC IdP client secret used to configure your private workforce.</p>
   */
  ClientSecret: string | undefined;

  /**
   * <p>The OIDC IdP issuer used to configure your private workforce.</p>
   */
  Issuer: string | undefined;

  /**
   * <p>The OIDC IdP authorization endpoint used to configure your private workforce.</p>
   */
  AuthorizationEndpoint: string | undefined;

  /**
   * <p>The OIDC IdP token endpoint used to configure your private workforce.</p>
   */
  TokenEndpoint: string | undefined;

  /**
   * <p>The OIDC IdP user information endpoint used to configure your private workforce.</p>
   */
  UserInfoEndpoint: string | undefined;

  /**
   * <p>The OIDC IdP logout endpoint used to configure your private workforce.</p>
   */
  LogoutEndpoint: string | undefined;

  /**
   * <p>The OIDC IdP JSON Web Key Set (Jwks) URI used to configure your private workforce.</p>
   */
  JwksUri: string | undefined;
}

export namespace OidcConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OidcConfig): any => ({
    ...obj,
    ...(obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }),
  });
}

/**
 * <p>A list of IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Used to create an allow
 *             list of IP addresses for a private workforce. Workers will only be able to login to their worker portal from an
 *             IP address within this range. By default, a workforce isn't restricted to specific IP addresses.</p>
 */
export interface SourceIpConfig {
  /**
   * <p>A list of one to ten <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">Classless Inter-Domain Routing</a> (CIDR) values.</p>
   *         <p>Maximum: Ten CIDR values</p>
   *         <note>
   *             <p>The following Length Constraints apply to individual CIDR values in
   *                 the CIDR value list.</p>
   *         </note>
   */
  Cidrs: string[] | undefined;
}

export namespace SourceIpConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceIpConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The VPC object you use to create or update a workforce.</p>
 */
export interface WorkforceVpcConfigRequest {
  /**
   * <p>The ID of the VPC that the workforce uses for communication.</p>
   */
  VpcId?: string;

  /**
   * <p>The VPC security group IDs, in the form sg-xxxxxxxx. The security groups must be for the same VPC as specified in the subnet.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The ID of the subnets in the VPC that you want to connect.</p>
   */
  Subnets?: string[];
}

export namespace WorkforceVpcConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkforceVpcConfigRequest): any => ({
    ...obj,
  });
}

export interface CreateWorkforceRequest {
  /**
   * <p>Use this parameter to configure an Amazon Cognito private workforce.
   *       A single Cognito workforce is created using and corresponds to a single
   *       <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">
   *       Amazon Cognito user pool</a>.</p>
   *
   *          <p>Do not use <code>OidcConfig</code> if you specify values for
   *       <code>CognitoConfig</code>.</p>
   */
  CognitoConfig?: CognitoConfig;

  /**
   * <p>Use this parameter to configure a private workforce using your own OIDC Identity Provider.</p>
   *          <p>Do not use <code>CognitoConfig</code> if you specify values for
   *       <code>OidcConfig</code>.</p>
   */
  OidcConfig?: OidcConfig;

  /**
   * <p>A list of IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Used to create an allow
   *             list of IP addresses for a private workforce. Workers will only be able to login to their worker portal from an
   *             IP address within this range. By default, a workforce isn't restricted to specific IP addresses.</p>
   */
  SourceIpConfig?: SourceIpConfig;

  /**
   * <p>The name of the private workforce.</p>
   */
  WorkforceName: string | undefined;

  /**
   * <p>An array of key-value pairs that contain metadata to help you categorize and
   *       organize our workforce. Each tag consists of a key and a value,
   *       both of which you define.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Use this parameter to configure a workforce using VPC.</p>
   */
  WorkforceVpcConfig?: WorkforceVpcConfigRequest;
}

export namespace CreateWorkforceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorkforceRequest): any => ({
    ...obj,
    ...(obj.OidcConfig && { OidcConfig: OidcConfig.filterSensitiveLog(obj.OidcConfig) }),
  });
}

export interface CreateWorkforceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the workforce.</p>
   */
  WorkforceArn: string | undefined;
}

export namespace CreateWorkforceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorkforceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A list of user groups that exist in your OIDC Identity Provider (IdP).
 *             One to ten groups can be used to create a single private work team.
 *             When you add a user group to the list of <code>Groups</code>, you can add that user group to one or more
 *             private work teams. If you add a user group to a private work team, all workers in that user group
 *             are added to the work team.</p>
 */
export interface OidcMemberDefinition {
  /**
   * <p>A list of comma seperated strings that identifies
   *             user groups in your OIDC IdP. Each user group is
   *             made up of a group of private workers.</p>
   */
  Groups: string[] | undefined;
}

export namespace OidcMemberDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OidcMemberDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Defines an Amazon Cognito or your own OIDC IdP user group that is part of a work team.</p>
 */
export interface MemberDefinition {
  /**
   * <p>The Amazon Cognito user group that is part of the work team.</p>
   */
  CognitoMemberDefinition?: CognitoMemberDefinition;

  /**
   * <p>A list user groups that exist in your OIDC Identity Provider (IdP).
   *             One to ten groups can be used to create a single private work team.
   *             When you add a user group to the list of <code>Groups</code>, you can add that user group to one or more
   *             private work teams. If you add a user group to a private work team, all workers in that user group
   *             are added to the work team.</p>
   */
  OidcMemberDefinition?: OidcMemberDefinition;
}

export namespace MemberDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MemberDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Configures Amazon SNS notifications of available or expiring work items for work
 *             teams.</p>
 */
export interface NotificationConfiguration {
  /**
   * <p>The ARN for the Amazon SNS topic to which notifications should be published.</p>
   */
  NotificationTopicArn?: string;
}

export namespace NotificationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotificationConfiguration): any => ({
    ...obj,
  });
}

export interface CreateWorkteamRequest {
  /**
   * <p>The name of the work team. Use this name to identify the work team.</p>
   */
  WorkteamName: string | undefined;

  /**
   * <p>The name of the workforce.</p>
   */
  WorkforceName?: string;

  /**
   * <p>A list of <code>MemberDefinition</code> objects that contains objects that identify
   *             the workers that make up the work team. </p>
   *         <p>Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP). For
   *             private workforces created using Amazon Cognito use <code>CognitoMemberDefinition</code>. For
   *             workforces created using your own OIDC identity provider (IdP) use
   *                 <code>OidcMemberDefinition</code>. Do not provide input for both of these parameters
   *             in a single request.</p>
   *         <p>For workforces created using Amazon Cognito, private work teams correspond to Amazon Cognito
   *                 <i>user groups</i> within the user pool used to create a workforce. All of the
   *                 <code>CognitoMemberDefinition</code> objects that make up the member definition must
   *             have the same <code>ClientId</code> and <code>UserPool</code> values. To add a Amazon
   *             Cognito user group to an existing worker pool, see <a href="">Adding groups to a User
   *                 Pool</a>. For more information about user pools, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">Amazon Cognito User
   *                 Pools</a>.</p>
   *         <p>For workforces created using your own OIDC IdP, specify the user groups that you want to
   *         include in your private work team in <code>OidcMemberDefinition</code> by listing those groups
   *         in <code>Groups</code>.</p>
   */
  MemberDefinitions: MemberDefinition[] | undefined;

  /**
   * <p>A description of the work team.</p>
   */
  Description: string | undefined;

  /**
   * <p>Configures notification of workers regarding available or expiring work items.</p>
   */
  NotificationConfiguration?: NotificationConfiguration;

  /**
   * <p>An array of key-value pairs.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html">Resource
   *                 Tag</a> and <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                     Cost Allocation Tags</a> in the <i> Amazon Web Services Billing and Cost Management User
   *                 Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateWorkteamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorkteamRequest): any => ({
    ...obj,
  });
}

export interface CreateWorkteamResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the work team. You can use this ARN to identify the
   *             work team.</p>
   */
  WorkteamArn?: string;
}

export namespace CreateWorkteamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorkteamResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The currently active data capture configuration used by your Endpoint.</p>
 */
export interface DataCaptureConfigSummary {
  /**
   * <p>Whether data capture is enabled or disabled.</p>
   */
  EnableCapture: boolean | undefined;

  /**
   * <p>Whether data capture is currently functional.</p>
   */
  CaptureStatus: CaptureStatus | string | undefined;

  /**
   * <p>The percentage of requests being captured by your Endpoint.</p>
   */
  CurrentSamplingPercentage: number | undefined;

  /**
   * <p>The Amazon S3 location being used to capture the data.</p>
   */
  DestinationS3Uri: string | undefined;

  /**
   * <p>The KMS key being used to encrypt the data in Amazon S3.</p>
   */
  KmsKeyId: string | undefined;
}

export namespace DataCaptureConfigSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataCaptureConfigSummary): any => ({
    ...obj,
  });
}

export enum RuleEvaluationStatus {
  ERROR = "Error",
  IN_PROGRESS = "InProgress",
  ISSUES_FOUND = "IssuesFound",
  NO_ISSUES_FOUND = "NoIssuesFound",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

/**
 * <p>Information about the status of the rule evaluation.</p>
 */
export interface DebugRuleEvaluationStatus {
  /**
   * <p>The name of the rule configuration.</p>
   */
  RuleConfigurationName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule evaluation job.</p>
   */
  RuleEvaluationJobArn?: string;

  /**
   * <p>Status of the rule evaluation.</p>
   */
  RuleEvaluationStatus?: RuleEvaluationStatus | string;

  /**
   * <p>Details from the rule evaluation.</p>
   */
  StatusDetails?: string;

  /**
   * <p>Timestamp when the rule evaluation status was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export namespace DebugRuleEvaluationStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DebugRuleEvaluationStatus): any => ({
    ...obj,
  });
}

export interface DeleteActionRequest {
  /**
   * <p>The name of the action to delete.</p>
   */
  ActionName: string | undefined;
}

export namespace DeleteActionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteActionRequest): any => ({
    ...obj,
  });
}

export interface DeleteActionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   */
  ActionArn?: string;
}

export namespace DeleteActionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteActionResponse): any => ({
    ...obj,
  });
}

export interface DeleteAlgorithmInput {
  /**
   * <p>The name of the algorithm to delete.</p>
   */
  AlgorithmName: string | undefined;
}

export namespace DeleteAlgorithmInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAlgorithmInput): any => ({
    ...obj,
  });
}

export interface DeleteAppRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;

  /**
   * <p>The type of app.</p>
   */
  AppType: AppType | string | undefined;

  /**
   * <p>The name of the app.</p>
   */
  AppName: string | undefined;
}

export namespace DeleteAppRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAppRequest): any => ({
    ...obj,
  });
}

export interface DeleteAppImageConfigRequest {
  /**
   * <p>The name of the AppImageConfig to delete.</p>
   */
  AppImageConfigName: string | undefined;
}

export namespace DeleteAppImageConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAppImageConfigRequest): any => ({
    ...obj,
  });
}

export interface DeleteArtifactRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact to delete.</p>
   */
  ArtifactArn?: string;

  /**
   * <p>The URI of the source.</p>
   */
  Source?: ArtifactSource;
}

export namespace DeleteArtifactRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteArtifactRequest): any => ({
    ...obj,
  });
}

export interface DeleteArtifactResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact.</p>
   */
  ArtifactArn?: string;
}

export namespace DeleteArtifactResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteArtifactResponse): any => ({
    ...obj,
  });
}

export interface DeleteAssociationRequest {
  /**
   * <p>The ARN of the source.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   */
  DestinationArn: string | undefined;
}

export namespace DeleteAssociationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAssociationRequest): any => ({
    ...obj,
  });
}

export interface DeleteAssociationResponse {
  /**
   * <p>The ARN of the source.</p>
   */
  SourceArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   */
  DestinationArn?: string;
}

export namespace DeleteAssociationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAssociationResponse): any => ({
    ...obj,
  });
}

export interface DeleteCodeRepositoryInput {
  /**
   * <p>The name of the Git repository to delete.</p>
   */
  CodeRepositoryName: string | undefined;
}

export namespace DeleteCodeRepositoryInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCodeRepositoryInput): any => ({
    ...obj,
  });
}

export interface DeleteContextRequest {
  /**
   * <p>The name of the context to delete.</p>
   */
  ContextName: string | undefined;
}

export namespace DeleteContextRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteContextRequest): any => ({
    ...obj,
  });
}

export interface DeleteContextResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the context.</p>
   */
  ContextArn?: string;
}

export namespace DeleteContextResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteContextResponse): any => ({
    ...obj,
  });
}

export interface DeleteDataQualityJobDefinitionRequest {
  /**
   * <p>The name of the data quality monitoring job definition to delete.</p>
   */
  JobDefinitionName: string | undefined;
}

export namespace DeleteDataQualityJobDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDataQualityJobDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DeleteDeviceFleetRequest {
  /**
   * <p>The name of the fleet to delete.</p>
   */
  DeviceFleetName: string | undefined;
}

export namespace DeleteDeviceFleetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDeviceFleetRequest): any => ({
    ...obj,
  });
}

export enum RetentionType {
  Delete = "Delete",
  Retain = "Retain",
}

/**
 * <p>The retention policy for data stored on an Amazon Elastic File System (EFS) volume.</p>
 */
export interface RetentionPolicy {
  /**
   * <p>The default is <code>Retain</code>, which specifies to keep the data stored on the EFS volume.</p>
   *          <p>Specify <code>Delete</code> to delete the data stored on the EFS volume.</p>
   */
  HomeEfsFileSystem?: RetentionType | string;
}

export namespace RetentionPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RetentionPolicy): any => ({
    ...obj,
  });
}

export interface DeleteDomainRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The retention policy for this domain, which specifies whether resources will be retained after the Domain is deleted.
   *            By default, all resources are retained (not automatically deleted).
   *        </p>
   */
  RetentionPolicy?: RetentionPolicy;
}

export namespace DeleteDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDomainRequest): any => ({
    ...obj,
  });
}

export interface DeleteEndpointInput {
  /**
   * <p>The name of the endpoint that you want to delete.</p>
   */
  EndpointName: string | undefined;
}

export namespace DeleteEndpointInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEndpointInput): any => ({
    ...obj,
  });
}

export interface DeleteEndpointConfigInput {
  /**
   * <p>The name of the endpoint configuration that you want to delete.</p>
   */
  EndpointConfigName: string | undefined;
}

export namespace DeleteEndpointConfigInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEndpointConfigInput): any => ({
    ...obj,
  });
}

export interface DeleteExperimentRequest {
  /**
   * <p>The name of the experiment to delete.</p>
   */
  ExperimentName: string | undefined;
}

export namespace DeleteExperimentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteExperimentRequest): any => ({
    ...obj,
  });
}

export interface DeleteExperimentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the experiment that is being deleted.</p>
   */
  ExperimentArn?: string;
}

export namespace DeleteExperimentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteExperimentResponse): any => ({
    ...obj,
  });
}

export interface DeleteFeatureGroupRequest {
  /**
   * <p>The name of the <code>FeatureGroup</code> you want to delete. The name must be unique
   *          within an Amazon Web Services Region in an Amazon Web Services account. </p>
   */
  FeatureGroupName: string | undefined;
}

export namespace DeleteFeatureGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFeatureGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteFlowDefinitionRequest {
  /**
   * <p>The name of the flow definition you are deleting.</p>
   */
  FlowDefinitionName: string | undefined;
}

export namespace DeleteFlowDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFlowDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DeleteFlowDefinitionResponse {}

export namespace DeleteFlowDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFlowDefinitionResponse): any => ({
    ...obj,
  });
}

export interface DeleteHumanTaskUiRequest {
  /**
   * <p>The name of the human task user interface (work task template) you want to delete.</p>
   */
  HumanTaskUiName: string | undefined;
}

export namespace DeleteHumanTaskUiRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteHumanTaskUiRequest): any => ({
    ...obj,
  });
}

export interface DeleteHumanTaskUiResponse {}

export namespace DeleteHumanTaskUiResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteHumanTaskUiResponse): any => ({
    ...obj,
  });
}

export interface DeleteImageRequest {
  /**
   * <p>The name of the image to delete.</p>
   */
  ImageName: string | undefined;
}

export namespace DeleteImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteImageRequest): any => ({
    ...obj,
  });
}

export interface DeleteImageResponse {}

export namespace DeleteImageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteImageResponse): any => ({
    ...obj,
  });
}

export interface DeleteImageVersionRequest {
  /**
   * <p>The name of the image.</p>
   */
  ImageName: string | undefined;

  /**
   * <p>The version to delete.</p>
   */
  Version: number | undefined;
}

export namespace DeleteImageVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteImageVersionRequest): any => ({
    ...obj,
  });
}

export interface DeleteImageVersionResponse {}

export namespace DeleteImageVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteImageVersionResponse): any => ({
    ...obj,
  });
}

export interface DeleteModelInput {
  /**
   * <p>The name of the model to delete.</p>
   */
  ModelName: string | undefined;
}

export namespace DeleteModelInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteModelInput): any => ({
    ...obj,
  });
}

export interface DeleteModelBiasJobDefinitionRequest {
  /**
   * <p>The name of the model bias job definition to delete.</p>
   */
  JobDefinitionName: string | undefined;
}

export namespace DeleteModelBiasJobDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteModelBiasJobDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DeleteModelExplainabilityJobDefinitionRequest {
  /**
   * <p>The name of the model explainability job definition to delete.</p>
   */
  JobDefinitionName: string | undefined;
}

export namespace DeleteModelExplainabilityJobDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteModelExplainabilityJobDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DeleteModelPackageInput {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the model package to delete.</p>
   *         <p>When you specify a name, the name must have 1 to 63 characters. Valid
   *             characters are a-z, A-Z, 0-9, and - (hyphen).</p>
   */
  ModelPackageName: string | undefined;
}

export namespace DeleteModelPackageInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteModelPackageInput): any => ({
    ...obj,
  });
}

export interface DeleteModelPackageGroupInput {
  /**
   * <p>The name of the model group to delete.</p>
   */
  ModelPackageGroupName: string | undefined;
}

export namespace DeleteModelPackageGroupInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteModelPackageGroupInput): any => ({
    ...obj,
  });
}

export interface DeleteModelPackageGroupPolicyInput {
  /**
   * <p>The name of the model group for which to delete the policy.</p>
   */
  ModelPackageGroupName: string | undefined;
}

export namespace DeleteModelPackageGroupPolicyInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteModelPackageGroupPolicyInput): any => ({
    ...obj,
  });
}

export interface DeleteModelQualityJobDefinitionRequest {
  /**
   * <p>The name of the model quality monitoring job definition to delete.</p>
   */
  JobDefinitionName: string | undefined;
}

export namespace DeleteModelQualityJobDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteModelQualityJobDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DeleteMonitoringScheduleRequest {
  /**
   * <p>The name of the monitoring schedule to delete.</p>
   */
  MonitoringScheduleName: string | undefined;
}

export namespace DeleteMonitoringScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMonitoringScheduleRequest): any => ({
    ...obj,
  });
}

export interface DeleteNotebookInstanceInput {
  /**
   * <p>The name of the SageMaker notebook instance to delete.</p>
   */
  NotebookInstanceName: string | undefined;
}

export namespace DeleteNotebookInstanceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNotebookInstanceInput): any => ({
    ...obj,
  });
}

export interface DeleteNotebookInstanceLifecycleConfigInput {
  /**
   * <p>The name of the lifecycle configuration to delete.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;
}

export namespace DeleteNotebookInstanceLifecycleConfigInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNotebookInstanceLifecycleConfigInput): any => ({
    ...obj,
  });
}

export interface DeletePipelineRequest {
  /**
   * <p>The name of the pipeline to delete.</p>
   */
  PipelineName: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than one time.</p>
   */
  ClientRequestToken?: string;
}

export namespace DeletePipelineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePipelineRequest): any => ({
    ...obj,
  });
}

export interface DeletePipelineResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline to delete.</p>
   */
  PipelineArn?: string;
}

export namespace DeletePipelineResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePipelineResponse): any => ({
    ...obj,
  });
}

export interface DeleteProjectInput {
  /**
   * <p>The name of the project to delete.</p>
   */
  ProjectName: string | undefined;
}

export namespace DeleteProjectInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProjectInput): any => ({
    ...obj,
  });
}

export interface DeleteStudioLifecycleConfigRequest {
  /**
   * <p>The name of the Studio Lifecycle Configuration to delete.</p>
   */
  StudioLifecycleConfigName: string | undefined;
}

export namespace DeleteStudioLifecycleConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStudioLifecycleConfigRequest): any => ({
    ...obj,
  });
}

export interface DeleteTagsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags you want to
   *             delete.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>An array or one or more tag keys to delete.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace DeleteTagsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTagsInput): any => ({
    ...obj,
  });
}

export interface DeleteTagsOutput {}

export namespace DeleteTagsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTagsOutput): any => ({
    ...obj,
  });
}

export interface DeleteTrialRequest {
  /**
   * <p>The name of the trial to delete.</p>
   */
  TrialName: string | undefined;
}

export namespace DeleteTrialRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrialRequest): any => ({
    ...obj,
  });
}

export interface DeleteTrialResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial that is being deleted.</p>
   */
  TrialArn?: string;
}

export namespace DeleteTrialResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrialResponse): any => ({
    ...obj,
  });
}

export interface DeleteTrialComponentRequest {
  /**
   * <p>The name of the component to delete.</p>
   */
  TrialComponentName: string | undefined;
}

export namespace DeleteTrialComponentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrialComponentRequest): any => ({
    ...obj,
  });
}

export interface DeleteTrialComponentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the component is being deleted.</p>
   */
  TrialComponentArn?: string;
}

export namespace DeleteTrialComponentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrialComponentResponse): any => ({
    ...obj,
  });
}

export interface DeleteUserProfileRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;
}

export namespace DeleteUserProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUserProfileRequest): any => ({
    ...obj,
  });
}

export interface DeleteWorkforceRequest {
  /**
   * <p>The name of the workforce.</p>
   */
  WorkforceName: string | undefined;
}

export namespace DeleteWorkforceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWorkforceRequest): any => ({
    ...obj,
  });
}

export interface DeleteWorkforceResponse {}

export namespace DeleteWorkforceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWorkforceResponse): any => ({
    ...obj,
  });
}

export interface DeleteWorkteamRequest {
  /**
   * <p>The name of the work team to delete.</p>
   */
  WorkteamName: string | undefined;
}

export namespace DeleteWorkteamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWorkteamRequest): any => ({
    ...obj,
  });
}

export interface DeleteWorkteamResponse {
  /**
   * <p>Returns <code>true</code> if the work team was successfully deleted; otherwise,
   *             returns <code>false</code>.</p>
   */
  Success: boolean | undefined;
}

export namespace DeleteWorkteamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWorkteamResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Gets the Amazon EC2 Container Registry path of the docker image of the model that is hosted in this <a>ProductionVariant</a>.</p>
 *         <p>If you used the <code>registry/repository[:tag]</code> form to specify the image path
 *             of the primary container when you created the model hosted in this
 *                 <code>ProductionVariant</code>, the path resolves to a path of the form
 *                 <code>registry/repository[@digest]</code>. A digest is a hash value that identifies
 *             a specific version of an image. For information about Amazon ECR paths, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html">Pulling an Image</a> in the <i>Amazon ECR User Guide</i>.</p>
 */
export interface DeployedImage {
  /**
   * <p>The image path you specified when you created the model.</p>
   */
  SpecifiedImage?: string;

  /**
   * <p>The specific digest path of the image hosted in this
   *             <code>ProductionVariant</code>.</p>
   */
  ResolvedImage?: string;

  /**
   * <p>The date and time when the image path for the model resolved to the
   *                 <code>ResolvedImage</code>
   *          </p>
   */
  ResolutionTime?: Date;
}

export namespace DeployedImage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeployedImage): any => ({
    ...obj,
  });
}

export interface DeregisterDevicesRequest {
  /**
   * <p>The name of the fleet the devices belong to.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The unique IDs of the devices.</p>
   */
  DeviceNames: string[] | undefined;
}

export namespace DeregisterDevicesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterDevicesRequest): any => ({
    ...obj,
  });
}

export interface DescribeActionRequest {
  /**
   * <p>The name of the action to describe.</p>
   */
  ActionName: string | undefined;
}

export namespace DescribeActionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeActionRequest): any => ({
    ...obj,
  });
}

export interface DescribeActionResponse {
  /**
   * <p>The name of the action.</p>
   */
  ActionName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   */
  ActionArn?: string;

  /**
   * <p>The source of the action.</p>
   */
  Source?: ActionSource;

  /**
   * <p>The type of the action.</p>
   */
  ActionType?: string;

  /**
   * <p>The description of the action.</p>
   */
  Description?: string;

  /**
   * <p>The status of the action.</p>
   */
  Status?: ActionStatus | string;

  /**
   * <p>A list of the action's properties.</p>
   */
  Properties?: Record<string, string>;

  /**
   * <p>When the action was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the action was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupArn?: string;
}

export namespace DescribeActionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeActionResponse): any => ({
    ...obj,
  });
}

export interface DescribeAlgorithmInput {
  /**
   * <p>The name of the algorithm to describe.</p>
   */
  AlgorithmName: string | undefined;
}

export namespace DescribeAlgorithmInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAlgorithmInput): any => ({
    ...obj,
  });
}

export interface DescribeAlgorithmOutput {
  /**
   * <p>The name of the algorithm being described.</p>
   */
  AlgorithmName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm.</p>
   */
  AlgorithmArn: string | undefined;

  /**
   * <p>A brief summary about the algorithm.</p>
   */
  AlgorithmDescription?: string;

  /**
   * <p>A timestamp specifying when the algorithm was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Details about training jobs run by this algorithm.</p>
   */
  TrainingSpecification: TrainingSpecification | undefined;

  /**
   * <p>Details about inference jobs that the algorithm runs.</p>
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * <p>Details about configurations for one or more training jobs that SageMaker runs to test the
   *             algorithm.</p>
   */
  ValidationSpecification?: AlgorithmValidationSpecification;

  /**
   * <p>The current status of the algorithm.</p>
   */
  AlgorithmStatus: AlgorithmStatus | string | undefined;

  /**
   * <p>Details about the current status of the algorithm.</p>
   */
  AlgorithmStatusDetails: AlgorithmStatusDetails | undefined;

  /**
   * <p>The product identifier of the algorithm.</p>
   */
  ProductId?: string;

  /**
   * <p>Whether the algorithm is certified to be listed in Amazon Web Services Marketplace.</p>
   */
  CertifyForMarketplace?: boolean;
}

export namespace DescribeAlgorithmOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAlgorithmOutput): any => ({
    ...obj,
  });
}

export interface DescribeAppRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;

  /**
   * <p>The type of app.</p>
   */
  AppType: AppType | string | undefined;

  /**
   * <p>The name of the app.</p>
   */
  AppName: string | undefined;
}

export namespace DescribeAppRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAppRequest): any => ({
    ...obj,
  });
}

export interface DescribeAppResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the app.</p>
   */
  AppArn?: string;

  /**
   * <p>The type of app.</p>
   */
  AppType?: AppType | string;

  /**
   * <p>The name of the app.</p>
   */
  AppName?: string;

  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName?: string;

  /**
   * <p>The status.</p>
   */
  Status?: AppStatus | string;

  /**
   * <p>The timestamp of the last health check.</p>
   */
  LastHealthCheckTimestamp?: Date;

  /**
   * <p>The timestamp of the last user's activity. <code>LastUserActivityTimestamp</code> is also updated when SageMaker performs health checks without user activity. As a result, this value is set to the same value as <code>LastHealthCheckTimestamp</code>.</p>
   */
  LastUserActivityTimestamp?: Date;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The failure reason.</p>
   */
  FailureReason?: string;

  /**
   * <p>The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.</p>
   */
  ResourceSpec?: ResourceSpec;
}

export namespace DescribeAppResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAppResponse): any => ({
    ...obj,
  });
}

export interface DescribeAppImageConfigRequest {
  /**
   * <p>The name of the AppImageConfig to describe.</p>
   */
  AppImageConfigName: string | undefined;
}

export namespace DescribeAppImageConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAppImageConfigRequest): any => ({
    ...obj,
  });
}

export interface DescribeAppImageConfigResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the AppImageConfig.</p>
   */
  AppImageConfigArn?: string;

  /**
   * <p>The name of the AppImageConfig.</p>
   */
  AppImageConfigName?: string;

  /**
   * <p>When the AppImageConfig was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the AppImageConfig was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The configuration of a KernelGateway app.</p>
   */
  KernelGatewayImageConfig?: KernelGatewayImageConfig;
}

export namespace DescribeAppImageConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAppImageConfigResponse): any => ({
    ...obj,
  });
}

export interface DescribeArtifactRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact to describe.</p>
   */
  ArtifactArn: string | undefined;
}

export namespace DescribeArtifactRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeArtifactRequest): any => ({
    ...obj,
  });
}

export interface DescribeArtifactResponse {
  /**
   * <p>The name of the artifact.</p>
   */
  ArtifactName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the artifact.</p>
   */
  ArtifactArn?: string;

  /**
   * <p>The source of the artifact.</p>
   */
  Source?: ArtifactSource;

  /**
   * <p>The type of the artifact.</p>
   */
  ArtifactType?: string;

  /**
   * <p>A list of the artifact's properties.</p>
   */
  Properties?: Record<string, string>;

  /**
   * <p>When the artifact was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the artifact was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupArn?: string;
}

export namespace DescribeArtifactResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeArtifactResponse): any => ({
    ...obj,
  });
}

export interface DescribeAutoMLJobRequest {
  /**
   * <p>Requests information about an AutoML job using its unique name.</p>
   */
  AutoMLJobName: string | undefined;
}

export namespace DescribeAutoMLJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAutoMLJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the endpoint of the model deployment.</p>
 */
export interface ModelDeployResult {
  /**
   * <p>The name of the endpoint to which the model has been deployed.</p>
   *          <note>
   *             <p>If model deployment fails, this field is omitted from the response.</p>
   *          </note>
   */
  EndpointName?: string;
}

export namespace ModelDeployResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelDeployResult): any => ({
    ...obj,
  });
}

/**
 * <p>The resolved attributes.</p>
 */
export interface ResolvedAttributes {
  /**
   * <p>Specifies a metric to minimize or maximize as the objective of a job.</p>
   */
  AutoMLJobObjective?: AutoMLJobObjective;

  /**
   * <p>The problem type.</p>
   */
  ProblemType?: ProblemType | string;

  /**
   * <p>How long a job is allowed to run, or how many candidates a job is allowed to
   *          generate.</p>
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria;
}

export namespace ResolvedAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResolvedAttributes): any => ({
    ...obj,
  });
}

export interface DescribeAutoMLJobResponse {
  /**
   * <p>Returns the name of the AutoML job.</p>
   */
  AutoMLJobName: string | undefined;

  /**
   * <p>Returns the ARN of the AutoML job.</p>
   */
  AutoMLJobArn: string | undefined;

  /**
   * <p>Returns the input data configuration for the AutoML job..</p>
   */
  InputDataConfig: AutoMLChannel[] | undefined;

  /**
   * <p>Returns the job's output data config.</p>
   */
  OutputDataConfig: AutoMLOutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) role that
   *          has read permission to the input data location and write permission to the output data
   *          location in Amazon S3.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Returns the job's objective.</p>
   */
  AutoMLJobObjective?: AutoMLJobObjective;

  /**
   * <p>Returns the job's problem type.</p>
   */
  ProblemType?: ProblemType | string;

  /**
   * <p>Returns the configuration for the AutoML job.</p>
   */
  AutoMLJobConfig?: AutoMLJobConfig;

  /**
   * <p>Returns the creation time of the AutoML job.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Returns the end time of the AutoML job.</p>
   */
  EndTime?: Date;

  /**
   * <p>Returns the job's last modified time.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Returns the failure reason for an AutoML job, when applicable.</p>
   */
  FailureReason?: string;

  /**
   * <p>Returns a list of reasons for partial failures within an AutoML job.</p>
   */
  PartialFailureReasons?: AutoMLPartialFailureReason[];

  /**
   * <p>Returns the job's best <code>AutoMLCandidate</code>.</p>
   */
  BestCandidate?: AutoMLCandidate;

  /**
   * <p>Returns the status of the AutoML job.</p>
   */
  AutoMLJobStatus: AutoMLJobStatus | string | undefined;

  /**
   * <p>Returns the secondary status of the AutoML job.</p>
   */
  AutoMLJobSecondaryStatus: AutoMLJobSecondaryStatus | string | undefined;

  /**
   * <p>Indicates whether the output for an AutoML job generates candidate definitions
   *          only.</p>
   */
  GenerateCandidateDefinitionsOnly?: boolean;

  /**
   * <p>Returns information on the job's artifacts found in
   *          <code>AutoMLJobArtifacts</code>.</p>
   */
  AutoMLJobArtifacts?: AutoMLJobArtifacts;

  /**
   * <p>This contains <code>ProblemType</code>, <code>AutoMLJobObjective</code>, and
   *             <code>CompletionCriteria</code>. If you do not provide these values, they are
   *          auto-inferred. If you do provide them, the values used are the ones you provide.</p>
   */
  ResolvedAttributes?: ResolvedAttributes;

  /**
   * <p>Indicates whether the model was deployed automatically to an endpoint and the name of
   *          that endpoint if deployed automatically.</p>
   */
  ModelDeployConfig?: ModelDeployConfig;

  /**
   * <p>Provides information about endpoint for the model deployment.</p>
   */
  ModelDeployResult?: ModelDeployResult;
}

export namespace DescribeAutoMLJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAutoMLJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeCodeRepositoryInput {
  /**
   * <p>The name of the Git repository to describe.</p>
   */
  CodeRepositoryName: string | undefined;
}

export namespace DescribeCodeRepositoryInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCodeRepositoryInput): any => ({
    ...obj,
  });
}

export interface DescribeCodeRepositoryOutput {
  /**
   * <p>The name of the Git repository.</p>
   */
  CodeRepositoryName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Git repository.</p>
   */
  CodeRepositoryArn: string | undefined;

  /**
   * <p>The date and time that the repository was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the repository was last changed.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Configuration details about the repository, including the URL where the repository is
   *             located, the default branch, and the Amazon Resource Name (ARN) of the Amazon Web Services Secrets
   *             Manager secret that contains the credentials used to access the repository.</p>
   */
  GitConfig?: GitConfig;
}

export namespace DescribeCodeRepositoryOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCodeRepositoryOutput): any => ({
    ...obj,
  });
}

export interface DescribeCompilationJobRequest {
  /**
   * <p>The name of the model compilation job that you want information about.</p>
   */
  CompilationJobName: string | undefined;
}

export namespace DescribeCompilationJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCompilationJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the location that is configured for storing model
 *             artifacts. </p>
 *         <p>Model artifacts are the output that results from training a model, and typically
 *             consist of trained parameters, a model definition that describes how to compute
 *             inferences, and other metadata.</p>
 */
export interface ModelArtifacts {
  /**
   * <p>The path of the S3 object that contains the model artifacts. For example,
   *                 <code>s3://bucket-name/keynameprefix/model.tar.gz</code>.</p>
   */
  S3ModelArtifacts: string | undefined;
}

export namespace ModelArtifacts {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelArtifacts): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information to verify the integrity of stored model artifacts. </p>
 */
export interface ModelDigests {
  /**
   * <p>Provides a hash value that uniquely identifies the stored model
   *             artifacts.</p>
   */
  ArtifactDigest?: string;
}

export namespace ModelDigests {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelDigests): any => ({
    ...obj,
  });
}

export interface DescribeCompilationJobResponse {
  /**
   * <p>The name of the model compilation job.</p>
   */
  CompilationJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model compilation job.</p>
   */
  CompilationJobArn: string | undefined;

  /**
   * <p>The status of the model compilation job.</p>
   */
  CompilationJobStatus: CompilationJobStatus | string | undefined;

  /**
   * <p>The time when the model compilation job started the <code>CompilationJob</code>
   *             instances. </p>
   *         <p>You are billed for the time between this timestamp and the timestamp in the <a>DescribeCompilationJobResponse$CompilationEndTime</a> field. In Amazon CloudWatch Logs,
   *             the start time might be later than this time. That's because it takes time to download
   *             the compilation job, which depends on the size of the compilation job container. </p>
   */
  CompilationStartTime?: Date;

  /**
   * <p>The time when the model compilation job on a compilation job instance ended. For a
   *             successful or stopped job, this is when the job's model artifacts have finished
   *             uploading. For a failed job, this is when Amazon SageMaker detected that the job failed. </p>
   */
  CompilationEndTime?: Date;

  /**
   * <p>Specifies a limit to how long a model compilation job can run. When the job reaches
   *             the time limit, Amazon SageMaker ends the compilation job. Use this API to cap model training
   *             costs.</p>
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>The inference image to use when compiling a model.
   *             Specify an image only if the target device is a cloud instance.</p>
   */
  InferenceImage?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the versioned model package that was
   *     provided to SageMaker Neo when you initiated a compilation job.</p>
   */
  ModelPackageVersionArn?: string;

  /**
   * <p>The time that the model compilation job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time that the status
   *             of
   *             the model compilation job was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>If a model compilation job failed, the reason it failed. </p>
   */
  FailureReason: string | undefined;

  /**
   * <p>Information about the location in Amazon S3 that has been configured for storing the model
   *             artifacts used in the compilation job.</p>
   */
  ModelArtifacts: ModelArtifacts | undefined;

  /**
   * <p>Provides a BLAKE2 hash value that identifies the compiled model artifacts in Amazon S3.</p>
   */
  ModelDigests?: ModelDigests;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker assumes to perform the model
   *             compilation job.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Information about the location in Amazon S3 of the input model artifacts, the name and
   *             shape of the expected data inputs, and the framework in which the model was
   *             trained.</p>
   */
  InputConfig: InputConfig | undefined;

  /**
   * <p>Information about the output location for the compiled model and the target device
   *             that the model runs on.</p>
   */
  OutputConfig: OutputConfig | undefined;

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that you want your
   *             compilation job to connect to. Control access to your models by
   *             configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/neo-vpc.html">Protect Compilation Jobs by Using an Amazon
   *                 Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: NeoVpcConfig;
}

export namespace DescribeCompilationJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCompilationJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeContextRequest {
  /**
   * <p>The name of the context to describe.</p>
   */
  ContextName: string | undefined;
}

export namespace DescribeContextRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeContextRequest): any => ({
    ...obj,
  });
}

export interface DescribeContextResponse {
  /**
   * <p>The name of the context.</p>
   */
  ContextName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the context.</p>
   */
  ContextArn?: string;

  /**
   * <p>The source of the context.</p>
   */
  Source?: ContextSource;

  /**
   * <p>The type of the context.</p>
   */
  ContextType?: string;

  /**
   * <p>The description of the context.</p>
   */
  Description?: string;

  /**
   * <p>A list of the context's properties.</p>
   */
  Properties?: Record<string, string>;

  /**
   * <p>When the context was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the context was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupArn?: string;
}

export namespace DescribeContextResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeContextResponse): any => ({
    ...obj,
  });
}

export interface DescribeDataQualityJobDefinitionRequest {
  /**
   * <p>The name of the data quality monitoring job definition to describe.</p>
   */
  JobDefinitionName: string | undefined;
}

export namespace DescribeDataQualityJobDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDataQualityJobDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DescribeDataQualityJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the data quality monitoring job definition.</p>
   */
  JobDefinitionArn: string | undefined;

  /**
   * <p>The name of the data quality monitoring job definition.</p>
   */
  JobDefinitionName: string | undefined;

  /**
   * <p>The time that the data quality monitoring job definition was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The constraints and baselines for the data quality monitoring job definition.</p>
   */
  DataQualityBaselineConfig?: DataQualityBaselineConfig;

  /**
   * <p>Information about the container that runs the data quality monitoring job.</p>
   */
  DataQualityAppSpecification: DataQualityAppSpecification | undefined;

  /**
   * <p>The list of inputs for the data quality monitoring job. Currently endpoints are
   *          supported.</p>
   */
  DataQualityJobInput: DataQualityJobInput | undefined;

  /**
   * <p>The output configuration for monitoring jobs.</p>
   */
  DataQualityJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   */
  JobResources: MonitoringResources | undefined;

  /**
   * <p>The networking configuration for the data quality monitoring job.</p>
   */
  NetworkConfig?: MonitoringNetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to
   *          perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;
}

export namespace DescribeDataQualityJobDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDataQualityJobDefinitionResponse): any => ({
    ...obj,
  });
}

export interface DescribeDeviceRequest {
  /**
   * <p>Next token of device description.</p>
   */
  NextToken?: string;

  /**
   * <p>The unique ID of the device.</p>
   */
  DeviceName: string | undefined;

  /**
   * <p>The name of the fleet the devices belong to.</p>
   */
  DeviceFleetName: string | undefined;
}

export namespace DescribeDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDeviceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The model on the edge device.</p>
 */
export interface EdgeModel {
  /**
   * <p>The name of the model.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The model version.</p>
   */
  ModelVersion: string | undefined;

  /**
   * <p>The timestamp of the last data sample taken.</p>
   */
  LatestSampleTime?: Date;

  /**
   * <p>The timestamp of the last inference that was made.</p>
   */
  LatestInference?: Date;
}

export namespace EdgeModel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EdgeModel): any => ({
    ...obj,
  });
}

export interface DescribeDeviceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   */
  DeviceArn?: string;

  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceName: string | undefined;

  /**
   * <p>A description of the device.</p>
   */
  Description?: string;

  /**
   * <p>The name of the fleet the device belongs to.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The Amazon Web Services Internet of Things (IoT) object thing name associated with the device.</p>
   */
  IotThingName?: string;

  /**
   * <p>The timestamp of the last registration or de-reregistration.</p>
   */
  RegistrationTime: Date | undefined;

  /**
   * <p>The last heartbeat received from the device.</p>
   */
  LatestHeartbeat?: Date;

  /**
   * <p>Models on the device.</p>
   */
  Models?: EdgeModel[];

  /**
   * <p>The maximum number of models.</p>
   */
  MaxModels?: number;

  /**
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;

  /**
   * <p>Edge Manager agent version.</p>
   */
  AgentVersion?: string;
}

export namespace DescribeDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDeviceResponse): any => ({
    ...obj,
  });
}

export interface DescribeDeviceFleetRequest {
  /**
   * <p>The name of the fleet.</p>
   */
  DeviceFleetName: string | undefined;
}

export namespace DescribeDeviceFleetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDeviceFleetRequest): any => ({
    ...obj,
  });
}

export interface DescribeDeviceFleetResponse {
  /**
   * <p>The name of the fleet.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The The Amazon Resource Name (ARN) of the fleet.</p>
   */
  DeviceFleetArn: string | undefined;

  /**
   * <p>The output configuration for storing sampled data.</p>
   */
  OutputConfig: EdgeOutputConfig | undefined;

  /**
   * <p>A description of the fleet.</p>
   */
  Description?: string;

  /**
   * <p>Timestamp of when the device fleet was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Timestamp of when the device fleet was last updated.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that has access to Amazon Web Services Internet of Things (IoT).</p>
   */
  RoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) alias created in Amazon Web Services Internet of Things (IoT).</p>
   */
  IotRoleAlias?: string;
}

export namespace DescribeDeviceFleetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDeviceFleetResponse): any => ({
    ...obj,
  });
}

export interface DescribeDomainRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;
}

export namespace DescribeDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDomainRequest): any => ({
    ...obj,
  });
}

export enum DomainStatus {
  Delete_Failed = "Delete_Failed",
  Deleting = "Deleting",
  Failed = "Failed",
  InService = "InService",
  Pending = "Pending",
  Update_Failed = "Update_Failed",
  Updating = "Updating",
}

export interface DescribeDomainResponse {
  /**
   * <p>The domain's Amazon Resource Name (ARN).</p>
   */
  DomainArn?: string;

  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * <p>The domain name.</p>
   */
  DomainName?: string;

  /**
   * <p>The ID of the Amazon Elastic File System (EFS) managed by this Domain.</p>
   */
  HomeEfsFileSystemId?: string;

  /**
   * <p>The SSO managed application instance ID.</p>
   */
  SingleSignOnManagedApplicationInstanceId?: string;

  /**
   * <p>The status.</p>
   */
  Status?: DomainStatus | string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The failure reason.</p>
   */
  FailureReason?: string;

  /**
   * <p>The domain's authentication mode.</p>
   */
  AuthMode?: AuthMode | string;

  /**
   * <p>Settings which are applied to UserProfiles in this domain if settings are not explicitly specified
   *            in a given UserProfile.
   *        </p>
   */
  DefaultUserSettings?: UserSettings;

  /**
   * <p>Specifies the VPC used for non-EFS traffic. The default value is
   *         <code>PublicInternetOnly</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PublicInternetOnly</code> - Non-EFS traffic is through a VPC managed by
   *             Amazon SageMaker, which allows direct internet access</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VpcOnly</code> - All Studio traffic is through the specified VPC and subnets</p>
   *             </li>
   *          </ul>
   */
  AppNetworkAccessType?: AppNetworkAccessType | string;

  /**
   * @deprecated
   *
   * <p>Use <code>KmsKeyId</code>.</p>
   */
  HomeEfsFileSystemKmsKeyId?: string;

  /**
   * <p>The VPC subnets that Studio uses for communication.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The domain's URL.</p>
   */
  Url?: string;

  /**
   * <p>The ID of the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.</p>
   */
  VpcId?: string;

  /**
   * <p>The Amazon Web Services KMS customer managed key used to encrypt
   *          the EFS volume attached to the domain.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A collection of <code>Domain</code> settings.</p>
   */
  DomainSettings?: DomainSettings;

  /**
   * <p>The entity that creates and manages the required security groups for inter-app communication in <code>VPCOnly</code> mode.
   *             Required when <code>CreateDomain.AppNetworkAccessType</code> is <code>VPCOnly</code> and <code>DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn</code> is provided.</p>
   */
  AppSecurityGroupManagement?: AppSecurityGroupManagement | string;

  /**
   * <p>The ID of the security group that authorizes traffic between the <code>RSessionGateway</code> apps and the <code>RStudioServerPro</code> app.</p>
   */
  SecurityGroupIdForDomainBoundary?: string;
}

export namespace DescribeDomainResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDomainResponse): any => ({
    ...obj,
  });
}

export interface DescribeEdgePackagingJobRequest {
  /**
   * <p>The name of the edge packaging job.</p>
   */
  EdgePackagingJobName: string | undefined;
}

export namespace DescribeEdgePackagingJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEdgePackagingJobRequest): any => ({
    ...obj,
  });
}

export enum EdgePackagingJobStatus {
  Completed = "COMPLETED",
  Failed = "FAILED",
  InProgress = "INPROGRESS",
  Starting = "STARTING",
  Stopped = "STOPPED",
  Stopping = "STOPPING",
}

export enum EdgePresetDeploymentStatus {
  Completed = "COMPLETED",
  Failed = "FAILED",
}

/**
 * <p>The output of a SageMaker Edge Manager deployable resource.</p>
 */
export interface EdgePresetDeploymentOutput {
  /**
   * <p>The deployment type created by SageMaker Edge Manager. Currently only
   *      supports Amazon Web Services IoT Greengrass Version 2 components.</p>
   */
  Type: EdgePresetDeploymentType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the generated deployable resource.</p>
   */
  Artifact?: string;

  /**
   * <p>The status of the deployable resource.</p>
   */
  Status?: EdgePresetDeploymentStatus | string;

  /**
   * <p>Returns a message describing the status of the deployed resource.</p>
   */
  StatusMessage?: string;
}

export namespace EdgePresetDeploymentOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EdgePresetDeploymentOutput): any => ({
    ...obj,
  });
}

export interface DescribeEdgePackagingJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the edge packaging job.</p>
   */
  EdgePackagingJobArn: string | undefined;

  /**
   * <p>The name of the edge packaging job.</p>
   */
  EdgePackagingJobName: string | undefined;

  /**
   * <p>The name of the SageMaker Neo compilation job that is used to locate model artifacts that are being packaged.</p>
   */
  CompilationJobName?: string;

  /**
   * <p>The name of the model.</p>
   */
  ModelName?: string;

  /**
   * <p>The version of the model.</p>
   */
  ModelVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to  download and upload the model, and to contact Neo.</p>
   */
  RoleArn?: string;

  /**
   * <p>The output configuration for the edge packaging job.</p>
   */
  OutputConfig?: EdgeOutputConfig;

  /**
   * <p>The Amazon Web Services KMS key to use when encrypting the EBS volume the job run on.</p>
   */
  ResourceKey?: string;

  /**
   * <p>The current status of the packaging job.</p>
   */
  EdgePackagingJobStatus: EdgePackagingJobStatus | string | undefined;

  /**
   * <p>Returns a message describing the job status and error messages.</p>
   */
  EdgePackagingJobStatusMessage?: string;

  /**
   * <p>The timestamp of when the packaging job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The timestamp of when the job was last updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Simple Storage (S3) URI where model artifacts ares stored.</p>
   */
  ModelArtifact?: string;

  /**
   * <p>The signature document of files in the model artifact.</p>
   */
  ModelSignature?: string;

  /**
   * <p>The output of a SageMaker Edge Manager deployable resource.</p>
   */
  PresetDeploymentOutput?: EdgePresetDeploymentOutput;
}

export namespace DescribeEdgePackagingJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEdgePackagingJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeEndpointInput {
  /**
   * <p>The name of the endpoint.</p>
   */
  EndpointName: string | undefined;
}

export namespace DescribeEndpointInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEndpointInput): any => ({
    ...obj,
  });
}

export enum EndpointStatus {
  CREATING = "Creating",
  DELETING = "Deleting",
  FAILED = "Failed",
  IN_SERVICE = "InService",
  OUT_OF_SERVICE = "OutOfService",
  ROLLING_BACK = "RollingBack",
  SYSTEM_UPDATING = "SystemUpdating",
  UPDATING = "Updating",
}

export enum VariantStatus {
  ACTIVATING_TRAFFIC = "ActivatingTraffic",
  BAKING = "Baking",
  CREATING = "Creating",
  DELETING = "Deleting",
  UPDATING = "Updating",
}

/**
 * <p>Describes the status of the production variant.</p>
 */
export interface ProductionVariantStatus {
  /**
   * <p>The endpoint variant status which describes the current deployment stage status or operational status.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Creating</code>: Creating inference resources for the production variant.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Deleting</code>: Terminating inference resources for the production variant.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Updating</code>: Updating capacity for the production variant.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ActivatingTraffic</code>: Turning on traffic for the production variant.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Baking</code>: Waiting period to monitor the CloudWatch alarms in the
   *                 automatic rollback configuration.</p>
   *             </li>
   *          </ul>
   */
  Status: VariantStatus | string | undefined;

  /**
   * <p>A message that describes the status of the production variant.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The start time of the current status change.</p>
   */
  StartTime?: Date;
}

export namespace ProductionVariantStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProductionVariantStatus): any => ({
    ...obj,
  });
}

/**
 * <p>The production variant summary for a deployment when an endpoint is
 *             creating or updating with the <code>
 *                <a>CreateEndpoint</a>
 *             </code>
 *             or <code>
 *                <a>UpdateEndpoint</a>
 *             </code> operations.
 *             Describes the <code>VariantStatus </code>, weight and capacity for a production
 *             variant associated with an endpoint.
 *            </p>
 */
export interface PendingProductionVariantSummary {
  /**
   * <p>The name of the variant.</p>
   */
  VariantName: string | undefined;

  /**
   * <p>An array of <code>DeployedImage</code> objects that specify the Amazon EC2
   *             Container Registry paths of the inference images deployed on instances of this
   *             <code>ProductionVariant</code>.</p>
   */
  DeployedImages?: DeployedImage[];

  /**
   * <p>The weight associated with the variant.</p>
   */
  CurrentWeight?: number;

  /**
   * <p>The requested weight for the variant in this deployment, as specified in the endpoint configuration
   *             for the endpoint. The value is taken from the request to the <code>
   *                <a>CreateEndpointConfig</a>
   *             </code> operation.</p>
   */
  DesiredWeight?: number;

  /**
   * <p>The number of instances associated with the variant.</p>
   */
  CurrentInstanceCount?: number;

  /**
   * <p>The number of instances requested in this deployment, as specified in the endpoint configuration
   *             for the endpoint. The value is taken from the request to the <code>
   *                <a>CreateEndpointConfig</a>
   *             </code> operation.</p>
   */
  DesiredInstanceCount?: number;

  /**
   * <p>The type of instances associated with the variant.</p>
   */
  InstanceType?: ProductionVariantInstanceType | string;

  /**
   * <p>The size of the Elastic Inference (EI) instance to use for the production variant. EI
   *             instances provide on-demand GPU computing for inference. For more information, see
   *             <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic
   *                 Inference in Amazon SageMaker</a>.</p>
   */
  AcceleratorType?: ProductionVariantAcceleratorType | string;

  /**
   * <p>The endpoint variant status which describes the current deployment stage status or operational status.</p>
   */
  VariantStatus?: ProductionVariantStatus[];

  /**
   * <p>The serverless configuration for the endpoint.</p>
   */
  CurrentServerlessConfig?: ProductionVariantServerlessConfig;

  /**
   * <p>The serverless configuration requested for this deployment, as specified in the endpoint configuration for the endpoint.</p>
   */
  DesiredServerlessConfig?: ProductionVariantServerlessConfig;
}

export namespace PendingProductionVariantSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PendingProductionVariantSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The summary of an in-progress deployment when an endpoint is creating or
 *             updating with a new endpoint configuration.</p>
 */
export interface PendingDeploymentSummary {
  /**
   * <p>The name of the endpoint configuration used in the deployment. </p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>List of <code>PendingProductionVariantSummary</code> objects.</p>
   */
  ProductionVariants?: PendingProductionVariantSummary[];

  /**
   * <p>The start time of the deployment.</p>
   */
  StartTime?: Date;
}

export namespace PendingDeploymentSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PendingDeploymentSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Describes weight and capacities for a production variant associated with an
 *             endpoint. If you sent a request to the <code>UpdateEndpointWeightsAndCapacities</code>
 *             API and the endpoint status is <code>Updating</code>, you get different desired and
 *             current values. </p>
 */
export interface ProductionVariantSummary {
  /**
   * <p>The name of the variant.</p>
   */
  VariantName: string | undefined;

  /**
   * <p>An array of <code>DeployedImage</code> objects that specify the Amazon EC2 Container Registry paths of the
   *             inference images deployed on instances of this <code>ProductionVariant</code>.</p>
   */
  DeployedImages?: DeployedImage[];

  /**
   * <p>The weight associated with the variant.</p>
   */
  CurrentWeight?: number;

  /**
   * <p>The requested weight, as specified in the
   *                 <code>UpdateEndpointWeightsAndCapacities</code> request. </p>
   */
  DesiredWeight?: number;

  /**
   * <p>The number of instances associated with the variant.</p>
   */
  CurrentInstanceCount?: number;

  /**
   * <p>The number of instances requested in the
   *                 <code>UpdateEndpointWeightsAndCapacities</code> request. </p>
   */
  DesiredInstanceCount?: number;

  /**
   * <p>The endpoint variant status which describes the current deployment stage status or operational status.</p>
   */
  VariantStatus?: ProductionVariantStatus[];

  /**
   * <p>The serverless configuration for the endpoint.</p>
   */
  CurrentServerlessConfig?: ProductionVariantServerlessConfig;

  /**
   * <p>The serverless configuration requested for the endpoint update.</p>
   */
  DesiredServerlessConfig?: ProductionVariantServerlessConfig;
}

export namespace ProductionVariantSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProductionVariantSummary): any => ({
    ...obj,
  });
}

export interface DescribeEndpointOutput {
  /**
   * <p>Name of the endpoint.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * <p>The name of the endpoint configuration associated with this endpoint.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p> An array of <a>ProductionVariantSummary</a> objects, one for each model
   *             hosted behind this endpoint. </p>
   */
  ProductionVariants?: ProductionVariantSummary[];

  /**
   * <p>The currently active data capture configuration used by your Endpoint.</p>
   */
  DataCaptureConfig?: DataCaptureConfigSummary;

  /**
   * <p>The status of the endpoint.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>OutOfService</code>: Endpoint is not available to take incoming
   *                     requests.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Creating</code>: <a>CreateEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Updating</code>: <a>UpdateEndpoint</a> or <a>UpdateEndpointWeightsAndCapacities</a> is executing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SystemUpdating</code>: Endpoint is undergoing maintenance and cannot be
   *                     updated or deleted or re-scaled until it has completed. This maintenance
   *                     operation does not change any customer-specified values such as VPC config, KMS
   *                     encryption, model, instance type, or instance count.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>RollingBack</code>: Endpoint fails to scale up or down or change its
   *                     variant weight and is in the process of rolling back to its previous
   *                     configuration. Once the rollback completes, endpoint returns to an
   *                         <code>InService</code> status. This transitional status only applies to an
   *                     endpoint that has autoscaling enabled and is undergoing variant weight or
   *                     capacity changes as part of an <a>UpdateEndpointWeightsAndCapacities</a> call or when the <a>UpdateEndpointWeightsAndCapacities</a> operation is called
   *                     explicitly.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>InService</code>: Endpoint is available to process incoming
   *                     requests.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Deleting</code>: <a>DeleteEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Failed</code>: Endpoint could not be created, updated, or re-scaled. Use
   *                         <a>DescribeEndpointOutput$FailureReason</a> for information about
   *                     the failure. <a>DeleteEndpoint</a> is the only operation that can be
   *                     performed on a failed endpoint.</p>
   *             </li>
   *          </ul>
   */
  EndpointStatus: EndpointStatus | string | undefined;

  /**
   * <p>If the status of the endpoint is <code>Failed</code>, the reason why it failed.
   *         </p>
   */
  FailureReason?: string;

  /**
   * <p>A timestamp that shows when the endpoint was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the endpoint was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The most recent deployment configuration for the endpoint.</p>
   */
  LastDeploymentConfig?: DeploymentConfig;

  /**
   * <p>Returns the description of an endpoint configuration created
   *             using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">
   *                <code>CreateEndpointConfig</code>
   *             </a> API.</p>
   */
  AsyncInferenceConfig?: AsyncInferenceConfig;

  /**
   * <p>Returns the summary of an in-progress deployment. This field is only returned when the
   *             endpoint is creating or updating with a new endpoint configuration.</p>
   */
  PendingDeploymentSummary?: PendingDeploymentSummary;
}

export namespace DescribeEndpointOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEndpointOutput): any => ({
    ...obj,
  });
}

export interface DescribeEndpointConfigInput {
  /**
   * <p>The name of the endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;
}

export namespace DescribeEndpointConfigInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEndpointConfigInput): any => ({
    ...obj,
  });
}

export interface DescribeEndpointConfigOutput {
  /**
   * <p>Name of the SageMaker endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint configuration.</p>
   */
  EndpointConfigArn: string | undefined;

  /**
   * <p>An array of <code>ProductionVariant</code> objects, one for each model that you
   *             want to host at this endpoint.</p>
   */
  ProductionVariants: ProductionVariant[] | undefined;

  /**
   * <p>Configuration to control how SageMaker captures inference data.</p>
   */
  DataCaptureConfig?: DataCaptureConfig;

  /**
   * <p>Amazon Web Services KMS key ID Amazon SageMaker uses to encrypt data when storing it on the ML storage
   *             volume attached to the instance.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A timestamp that shows when the endpoint configuration was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Returns the description of an endpoint configuration created using the
   *             <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">
   *                <code>CreateEndpointConfig</code>
   *             </a> API.</p>
   */
  AsyncInferenceConfig?: AsyncInferenceConfig;
}

export namespace DescribeEndpointConfigOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEndpointConfigOutput): any => ({
    ...obj,
  });
}

export interface DescribeExperimentRequest {
  /**
   * <p>The name of the experiment to describe.</p>
   */
  ExperimentName: string | undefined;
}

export namespace DescribeExperimentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeExperimentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The source of the experiment.</p>
 */
export interface ExperimentSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>The source type.</p>
   */
  SourceType?: string;
}

export namespace ExperimentSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentSource): any => ({
    ...obj,
  });
}

export interface DescribeExperimentResponse {
  /**
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;

  /**
   * <p>The name of the experiment as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The ARN of the source and, optionally, the type.</p>
   */
  Source?: ExperimentSource;

  /**
   * <p>The description of the experiment.</p>
   */
  Description?: string;

  /**
   * <p>When the experiment was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Who created the experiment.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the experiment was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Who last modified the experiment.</p>
   */
  LastModifiedBy?: UserContext;
}

export namespace DescribeExperimentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeExperimentResponse): any => ({
    ...obj,
  });
}

export interface DescribeFeatureGroupRequest {
  /**
   * <p>The name of the <code>FeatureGroup</code> you want described. </p>
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>A token to resume pagination of the list of <code>Features</code>
   *             (<code>FeatureDefinitions</code>). 2,500 <code>Features</code> are returned by
   *          default.</p>
   */
  NextToken?: string;
}

export namespace DescribeFeatureGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFeatureGroupRequest): any => ({
    ...obj,
  });
}

export enum FeatureGroupStatus {
  CREATED = "Created",
  CREATE_FAILED = "CreateFailed",
  CREATING = "Creating",
  DELETE_FAILED = "DeleteFailed",
  DELETING = "Deleting",
}

export enum LastUpdateStatusValue {
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  SUCCESSFUL = "Successful",
}

/**
 * <p>A value that indicates whether the update was successful.</p>
 */
export interface LastUpdateStatus {
  /**
   * <p>A value that indicates whether the update was made successful.</p>
   */
  Status: LastUpdateStatusValue | string | undefined;

  /**
   * <p>If the update wasn't successful, indicates the reason why it failed.</p>
   */
  FailureReason?: string;
}

export namespace LastUpdateStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LastUpdateStatus): any => ({
    ...obj,
  });
}

export enum OfflineStoreStatusValue {
  ACTIVE = "Active",
  BLOCKED = "Blocked",
  DISABLED = "Disabled",
}

/**
 * <p>The status of <code>OfflineStore</code>.</p>
 */
export interface OfflineStoreStatus {
  /**
   * <p>An <code>OfflineStore</code> status.</p>
   */
  Status: OfflineStoreStatusValue | string | undefined;

  /**
   * <p>The justification for why the OfflineStoreStatus is Blocked (if applicable).</p>
   */
  BlockedReason?: string;
}

export namespace OfflineStoreStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OfflineStoreStatus): any => ({
    ...obj,
  });
}

export interface DescribeFeatureGroupResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the <code>FeatureGroup</code>.  </p>
   */
  FeatureGroupArn: string | undefined;

  /**
   * <p>he name of the <code>FeatureGroup</code>.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The name of the <code>Feature</code> used for <code>RecordIdentifier</code>, whose value
   *          uniquely identifies a record stored in the feature store.</p>
   */
  RecordIdentifierFeatureName: string | undefined;

  /**
   * <p>The name of the feature that stores the <code>EventTime</code> of a Record in a
   *          <code>FeatureGroup</code>.</p>
   *          <p> An <code>EventTime</code> is a point in time when a new event occurs that
   *          corresponds to the creation or update of a <code>Record</code> in a
   *             <code>FeatureGroup</code>. All <code>Records</code> in the <code>FeatureGroup</code>
   *          have a corresponding <code>EventTime</code>.</p>
   */
  EventTimeFeatureName: string | undefined;

  /**
   * <p>A list of the <code>Features</code> in the <code>FeatureGroup</code>.
   *          Each feature is defined by a <code>FeatureName</code> and <code>FeatureType</code>.</p>
   */
  FeatureDefinitions: FeatureDefinition[] | undefined;

  /**
   * <p>A timestamp indicating when SageMaker created the <code>FeatureGroup</code>.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp indicating when the feature group was last updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The configuration for the <code>OnlineStore</code>.</p>
   */
  OnlineStoreConfig?: OnlineStoreConfig;

  /**
   * <p>The configuration of the <code>OfflineStore</code>, inducing the S3 location of the
   *          <code>OfflineStore</code>, Amazon Web Services Glue or Amazon Web Services Hive data catalogue configurations, and the
   *          security configuration.</p>
   */
  OfflineStoreConfig?: OfflineStoreConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM execution role used to persist data into the
   *          <code>OfflineStore</code> if an <code>OfflineStoreConfig</code> is provided.</p>
   */
  RoleArn?: string;

  /**
   * <p>The status of the feature group.</p>
   */
  FeatureGroupStatus?: FeatureGroupStatus | string;

  /**
   * <p>The status of the <code>OfflineStore</code>. Notifies you if replicating data into the
   *             <code>OfflineStore</code> has failed. Returns either: <code>Active</code> or
   *             <code>Blocked</code>
   *          </p>
   */
  OfflineStoreStatus?: OfflineStoreStatus;

  /**
   * <p>A value indicating whether the update made to the feature group was successful.</p>
   */
  LastUpdateStatus?: LastUpdateStatus;

  /**
   * <p>The reason that the <code>FeatureGroup</code> failed to be replicated in the
   *             <code>OfflineStore</code>. This is failure can occur because:</p>
   *          <ul>
   *             <li>
   *                <p>The <code>FeatureGroup</code> could not be created in the
   *                   <code>OfflineStore</code>.</p>
   *             </li>
   *             <li>
   *                <p>The <code>FeatureGroup</code> could not be deleted from the
   *                   <code>OfflineStore</code>.</p>
   *             </li>
   *          </ul>
   */
  FailureReason?: string;

  /**
   * <p>A free form description of the feature group.</p>
   */
  Description?: string;

  /**
   * <p>A token to resume pagination of the list of <code>Features</code>
   *             (<code>FeatureDefinitions</code>).</p>
   */
  NextToken: string | undefined;

  /**
   * <p>The size of the <code>OnlineStore</code> in bytes.</p>
   */
  OnlineStoreTotalSizeBytes?: number;
}

export namespace DescribeFeatureGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFeatureGroupResponse): any => ({
    ...obj,
  });
}

export interface DescribeFeatureMetadataRequest {
  /**
   * <p>The name of the feature group containing the feature.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The name of the feature.</p>
   */
  FeatureName: string | undefined;
}

export namespace DescribeFeatureMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFeatureMetadataRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A key-value pair that you specify to describe the feature.</p>
 */
export interface FeatureParameter {
  /**
   * <p>A key that must contain a value to describe the feature.</p>
   */
  Key?: string;

  /**
   * <p>The value that belongs to a key.</p>
   */
  Value?: string;
}

export namespace FeatureParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FeatureParameter): any => ({
    ...obj,
  });
}

export interface DescribeFeatureMetadataResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the feature group that contains the feature.</p>
   */
  FeatureGroupArn: string | undefined;

  /**
   * <p>The name of the feature group that you've specified.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The name of the feature that you've specified.</p>
   */
  FeatureName: string | undefined;

  /**
   * <p>The data type of the feature.</p>
   */
  FeatureType: FeatureType | string | undefined;

  /**
   * <p>A timestamp indicating when the feature was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp indicating when the metadata for the feature group was modified. For example, if you add a parameter describing the feature, the timestamp changes to reflect the last time you </p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The description you added to describe the feature.</p>
   */
  Description?: string;

  /**
   * <p>The key-value pairs that you added to describe the feature.</p>
   */
  Parameters?: FeatureParameter[];
}

export namespace DescribeFeatureMetadataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFeatureMetadataResponse): any => ({
    ...obj,
  });
}

export interface DescribeFlowDefinitionRequest {
  /**
   * <p>The name of the flow definition.</p>
   */
  FlowDefinitionName: string | undefined;
}

export namespace DescribeFlowDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFlowDefinitionRequest): any => ({
    ...obj,
  });
}

export enum FlowDefinitionStatus {
  ACTIVE = "Active",
  DELETING = "Deleting",
  FAILED = "Failed",
  INITIALIZING = "Initializing",
}

export interface DescribeFlowDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the flow defintion.</p>
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   */
  FlowDefinitionName: string | undefined;

  /**
   * <p>The status of the flow definition. Valid values are listed below.</p>
   */
  FlowDefinitionStatus: FlowDefinitionStatus | string | undefined;

  /**
   * <p>The timestamp when the flow definition was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Container for configuring the source of human task requests. Used to specify if
   *       Amazon Rekognition or Amazon Textract is used as an integration source.</p>
   */
  HumanLoopRequestSource?: HumanLoopRequestSource;

  /**
   * <p>An object containing information about what triggers a human review workflow.</p>
   */
  HumanLoopActivationConfig?: HumanLoopActivationConfig;

  /**
   * <p>An object containing information about who works on the task, the workforce task price, and other task details.</p>
   */
  HumanLoopConfig: HumanLoopConfig | undefined;

  /**
   * <p>An object containing information about the output file.</p>
   */
  OutputConfig: FlowDefinitionOutputConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) execution role for the flow definition.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The reason your flow definition failed.</p>
   */
  FailureReason?: string;
}

export namespace DescribeFlowDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFlowDefinitionResponse): any => ({
    ...obj,
  });
}

export interface DescribeHumanTaskUiRequest {
  /**
   * <p>The name of the human task user interface
   *       (worker task template) you want information about.</p>
   */
  HumanTaskUiName: string | undefined;
}

export namespace DescribeHumanTaskUiRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeHumanTaskUiRequest): any => ({
    ...obj,
  });
}

export enum HumanTaskUiStatus {
  ACTIVE = "Active",
  DELETING = "Deleting",
}

/**
 * <p>Container for user interface template information.</p>
 */
export interface UiTemplateInfo {
  /**
   * <p>The URL for the user interface template.</p>
   */
  Url?: string;

  /**
   * <p>The SHA-256 digest of the contents of the template.</p>
   */
  ContentSha256?: string;
}

export namespace UiTemplateInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UiTemplateInfo): any => ({
    ...obj,
  });
}

export interface DescribeHumanTaskUiResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the human task user interface (worker task template).</p>
   */
  HumanTaskUiArn: string | undefined;

  /**
   * <p>The name of the human task user interface (worker task template).</p>
   */
  HumanTaskUiName: string | undefined;

  /**
   * <p>The status of the human task user interface (worker task template). Valid values are listed below.</p>
   */
  HumanTaskUiStatus?: HumanTaskUiStatus | string;

  /**
   * <p>The timestamp when the human task user interface was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Container for user interface template information.</p>
   */
  UiTemplate: UiTemplateInfo | undefined;
}

export namespace DescribeHumanTaskUiResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeHumanTaskUiResponse): any => ({
    ...obj,
  });
}

export interface DescribeHyperParameterTuningJobRequest {
  /**
   * <p>The name of the tuning job.</p>
   */
  HyperParameterTuningJobName: string | undefined;
}

export namespace DescribeHyperParameterTuningJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeHyperParameterTuningJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Shows the final value for the
 *             objective
 *             metric for a training job that was launched by a hyperparameter
 *             tuning job. You define the objective metric in the
 *                 <code>HyperParameterTuningJobObjective</code> parameter of <a>HyperParameterTuningJobConfig</a>.</p>
 */
export interface FinalHyperParameterTuningJobObjectiveMetric {
  /**
   * <p>Whether to
   *             minimize
   *             or maximize the objective metric. Valid values are Minimize and
   *             Maximize.</p>
   */
  Type?: HyperParameterTuningJobObjectiveType | string;

  /**
   * <p>The name of the
   *             objective
   *             metric.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>The value of the objective metric.</p>
   */
  Value: number | undefined;
}

export namespace FinalHyperParameterTuningJobObjectiveMetric {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FinalHyperParameterTuningJobObjectiveMetric): any => ({
    ...obj,
  });
}

export enum TrainingJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

/**
 * <p>The container for the summary information about a training job.</p>
 */
export interface HyperParameterTrainingJobSummary {
  /**
   * <p>The training job definition name.</p>
   */
  TrainingJobDefinitionName?: string;

  /**
   * <p>The name of the training job.</p>
   */
  TrainingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;

  /**
   * <p>The HyperParameter tuning job that launched the training job.</p>
   */
  TuningJobName?: string;

  /**
   * <p>The date and time that the training job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the training job started.</p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>Specifies the time when the training job ends on training instances. You are billed
   *             for the time interval between the value of <code>TrainingStartTime</code> and this time.
   *             For successful jobs and stopped jobs, this is the time after model artifacts are
   *             uploaded. For failed jobs, this is the time when SageMaker detects a job failure.</p>
   */
  TrainingEndTime?: Date;

  /**
   * <p>The
   *             status
   *             of the training job.</p>
   */
  TrainingJobStatus: TrainingJobStatus | string | undefined;

  /**
   * <p>A
   *             list of the hyperparameters for which you specified ranges to
   *             search.</p>
   */
  TunedHyperParameters: Record<string, string> | undefined;

  /**
   * <p>The
   *             reason that the training job failed.
   *         </p>
   */
  FailureReason?: string;

  /**
   * <p>The <a>FinalHyperParameterTuningJobObjectiveMetric</a> object that
   *             specifies the
   *             value
   *             of the
   *             objective
   *             metric of the tuning job that launched this training job.</p>
   */
  FinalHyperParameterTuningJobObjectiveMetric?: FinalHyperParameterTuningJobObjectiveMetric;

  /**
   * <p>The status of the objective metric for the training job:</p>
   *         <ul>
   *             <li>
   *                 <p>Succeeded: The
   *                     final
   *                     objective metric for the training job was evaluated by the
   *                     hyperparameter tuning job and
   *                     used
   *                     in the hyperparameter tuning process.</p>
   *             </li>
   *          </ul>
   *         <ul>
   *             <li>
   *                 <p>Pending: The training job is in progress and evaluation of its final objective
   *                     metric is pending.</p>
   *             </li>
   *          </ul>
   *         <ul>
   *             <li>
   *                 <p>Failed:
   *                     The final objective metric for the training job was not evaluated, and was not
   *                     used in the hyperparameter tuning process. This typically occurs when the
   *                     training job failed or did not emit an objective
   *                     metric.</p>
   *             </li>
   *          </ul>
   */
  ObjectiveStatus?: ObjectiveStatus | string;
}

export namespace HyperParameterTrainingJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HyperParameterTrainingJobSummary): any => ({
    ...obj,
  });
}

export enum HyperParameterTuningJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

/**
 * <p>Specifies the number of training jobs that this hyperparameter tuning job launched,
 *             categorized by the status of their objective metric. The objective metric status shows
 *             whether the
 *             final
 *             objective metric for the training job has been evaluated by the
 *             tuning job and used in the hyperparameter tuning process.</p>
 */
export interface ObjectiveStatusCounters {
  /**
   * <p>The number of training jobs whose final objective metric was evaluated by the
   *             hyperparameter tuning job and used in the hyperparameter tuning process.</p>
   */
  Succeeded?: number;

  /**
   * <p>The number of training jobs that are in progress and pending evaluation of their final
   *             objective metric.</p>
   */
  Pending?: number;

  /**
   * <p>The number of training jobs whose final objective metric was not evaluated and used in
   *             the hyperparameter tuning process. This typically occurs when the training job failed or
   *             did not emit an objective metric.</p>
   */
  Failed?: number;
}

export namespace ObjectiveStatusCounters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ObjectiveStatusCounters): any => ({
    ...obj,
  });
}

/**
 * <p>The numbers of training jobs launched by a hyperparameter tuning job, categorized by
 *             status.</p>
 */
export interface TrainingJobStatusCounters {
  /**
   * <p>The number of completed training jobs launched by the hyperparameter tuning
   *             job.</p>
   */
  Completed?: number;

  /**
   * <p>The number of in-progress training jobs launched by a hyperparameter tuning
   *             job.</p>
   */
  InProgress?: number;

  /**
   * <p>The number of training jobs that failed, but can be retried. A failed training job can
   *             be retried only if it failed because an internal service error occurred.</p>
   */
  RetryableError?: number;

  /**
   * <p>The number of training jobs that failed and can't be retried. A failed training job
   *             can't be retried if it failed because a client error occurred.</p>
   */
  NonRetryableError?: number;

  /**
   * <p>The number of training jobs launched by a hyperparameter tuning job that were
   *             manually
   *             stopped.</p>
   */
  Stopped?: number;
}

export namespace TrainingJobStatusCounters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrainingJobStatusCounters): any => ({
    ...obj,
  });
}

export interface DescribeHyperParameterTuningJobResponse {
  /**
   * <p>The name of the tuning job.</p>
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * <p>The
   *             Amazon Resource Name (ARN) of the tuning job.</p>
   */
  HyperParameterTuningJobArn: string | undefined;

  /**
   * <p>The <a>HyperParameterTuningJobConfig</a> object that specifies the
   *             configuration of the tuning job.</p>
   */
  HyperParameterTuningJobConfig: HyperParameterTuningJobConfig | undefined;

  /**
   * <p>The <a>HyperParameterTrainingJobDefinition</a> object that specifies the
   *             definition of the training jobs that this tuning job launches.</p>
   */
  TrainingJobDefinition?: HyperParameterTrainingJobDefinition;

  /**
   * <p>A list of the <a>HyperParameterTrainingJobDefinition</a> objects launched
   *             for this tuning job.</p>
   */
  TrainingJobDefinitions?: HyperParameterTrainingJobDefinition[];

  /**
   * <p>The status of the tuning job: InProgress, Completed, Failed, Stopping, or
   *             Stopped.</p>
   */
  HyperParameterTuningJobStatus: HyperParameterTuningJobStatus | string | undefined;

  /**
   * <p>The date and time that the tuning job started.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the tuning job ended.</p>
   */
  HyperParameterTuningEndTime?: Date;

  /**
   * <p>The date and time that the status of the tuning job was modified. </p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The <a>TrainingJobStatusCounters</a> object that specifies the number of
   *             training jobs, categorized by status, that this tuning job launched.</p>
   */
  TrainingJobStatusCounters: TrainingJobStatusCounters | undefined;

  /**
   * <p>The <a>ObjectiveStatusCounters</a> object that specifies the number of
   *             training jobs, categorized by the status of their final objective metric, that this
   *             tuning job launched.</p>
   */
  ObjectiveStatusCounters: ObjectiveStatusCounters | undefined;

  /**
   * <p>A <a>TrainingJobSummary</a> object that describes the training job that
   *             completed with the best current <a>HyperParameterTuningJobObjective</a>.</p>
   */
  BestTrainingJob?: HyperParameterTrainingJobSummary;

  /**
   * <p>If the hyperparameter tuning job is an warm start tuning job with a
   *                 <code>WarmStartType</code> of <code>IDENTICAL_DATA_AND_ALGORITHM</code>, this is the
   *                 <a>TrainingJobSummary</a> for the training job with the best objective
   *             metric value of all training jobs launched by this tuning job and all parent jobs
   *             specified for the warm start tuning job.</p>
   */
  OverallBestTrainingJob?: HyperParameterTrainingJobSummary;

  /**
   * <p>The configuration for starting the hyperparameter parameter tuning job using one or
   *             more previous tuning jobs as a starting point. The results of previous tuning jobs are
   *             used to inform which combinations of hyperparameters to search over in the new tuning
   *             job.</p>
   */
  WarmStartConfig?: HyperParameterTuningJobWarmStartConfig;

  /**
   * <p>If the tuning job failed, the reason it failed.</p>
   */
  FailureReason?: string;
}

export namespace DescribeHyperParameterTuningJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeHyperParameterTuningJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeImageRequest {
  /**
   * <p>The name of the image to describe.</p>
   */
  ImageName: string | undefined;
}

export namespace DescribeImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImageRequest): any => ({
    ...obj,
  });
}

export enum ImageStatus {
  CREATED = "CREATED",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETE_FAILED = "DELETE_FAILED",
  DELETING = "DELETING",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATING = "UPDATING",
}

export interface DescribeImageResponse {
  /**
   * <p>When the image was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The description of the image.</p>
   */
  Description?: string;

  /**
   * <p>The name of the image as displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>When a create, update, or delete operation fails, the reason for the failure.</p>
   */
  FailureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image.</p>
   */
  ImageArn?: string;

  /**
   * <p>The name of the image.</p>
   */
  ImageName?: string;

  /**
   * <p>The status of the image.</p>
   */
  ImageStatus?: ImageStatus | string;

  /**
   * <p>When the image was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that enables Amazon SageMaker to perform tasks on your behalf.</p>
   */
  RoleArn?: string;
}

export namespace DescribeImageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImageResponse): any => ({
    ...obj,
  });
}

export interface DescribeImageVersionRequest {
  /**
   * <p>The name of the image.</p>
   */
  ImageName: string | undefined;

  /**
   * <p>The version of the image. If not specified, the latest version is described.</p>
   */
  Version?: number;
}

export namespace DescribeImageVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImageVersionRequest): any => ({
    ...obj,
  });
}

export enum ImageVersionStatus {
  CREATED = "CREATED",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETE_FAILED = "DELETE_FAILED",
  DELETING = "DELETING",
}

export interface DescribeImageVersionResponse {
  /**
   * <p>The registry path of the container image on which this image version is based.</p>
   */
  BaseImage?: string;

  /**
   * <p>The registry path of the container image that contains this image version.</p>
   */
  ContainerImage?: string;

  /**
   * <p>When the version was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When a create or delete operation fails, the reason for the failure.</p>
   */
  FailureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image the version is based on.</p>
   */
  ImageArn?: string;

  /**
   * <p>The ARN of the version.</p>
   */
  ImageVersionArn?: string;

  /**
   * <p>The status of the version.</p>
   */
  ImageVersionStatus?: ImageVersionStatus | string;

  /**
   * <p>When the version was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The version number.</p>
   */
  Version?: number;
}

export namespace DescribeImageVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImageVersionResponse): any => ({
    ...obj,
  });
}

export interface DescribeInferenceRecommendationsJobRequest {
  /**
   * <p>The name of the job. The name must be unique within an
   *            Amazon Web Services Region in the Amazon Web Services account.</p>
   */
  JobName: string | undefined;
}

export namespace DescribeInferenceRecommendationsJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInferenceRecommendationsJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The endpoint configuration made by Inference Recommender during a recommendation job.</p>
 */
export interface EndpointOutputConfiguration {
  /**
   * <p>The name of the endpoint made during a recommendation job.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The name of the production variant (deployed model) made during a recommendation job.</p>
   */
  VariantName: string | undefined;

  /**
   * <p>The instance type recommended by Amazon SageMaker Inference Recommender.</p>
   */
  InstanceType: ProductionVariantInstanceType | string | undefined;

  /**
   * <p>The number of instances recommended to launch initially.</p>
   */
  InitialInstanceCount: number | undefined;
}

export namespace EndpointOutputConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointOutputConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The metrics of recommendations.</p>
 */
export interface RecommendationMetrics {
  /**
   * <p>Defines the cost per hour for the instance. </p>
   */
  CostPerHour: number | undefined;

  /**
   * <p>Defines the cost per inference for the instance .</p>
   */
  CostPerInference: number | undefined;

  /**
   * <p>The expected maximum number of requests per minute for the instance.</p>
   */
  MaxInvocations: number | undefined;

  /**
   * <p>The expected model latency at maximum invocation per minute for the instance.</p>
   */
  ModelLatency: number | undefined;
}

export namespace RecommendationMetrics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecommendationMetrics): any => ({
    ...obj,
  });
}
