import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file quick/v1/health.proto.
 */
export declare const file_quick_v1_health: GenFile;
/**
 * @generated from message quick.v1.CheckRequest
 */
export type CheckRequest = Message<"quick.v1.CheckRequest"> & {};
/**
 * Describes the message quick.v1.CheckRequest.
 * Use `create(CheckRequestSchema)` to create a new message.
 */
export declare const CheckRequestSchema: GenMessage<CheckRequest>;
/**
 * @generated from message quick.v1.CheckResponse
 */
export type CheckResponse = Message<"quick.v1.CheckResponse"> & {
    /**
     * Semver of the running server build (e.g. "0.1.0").
     *
     * @generated from field: string version = 1;
     */
    version: string;
    /**
     * Short git commit SHA of the running server build.
     *
     * @generated from field: string commit = 2;
     */
    commit: string;
    /**
     * Always set to SERVING when the server can answer. Other values reserved.
     *
     * @generated from field: quick.v1.ServingStatus status = 3;
     */
    status: ServingStatus;
};
/**
 * Describes the message quick.v1.CheckResponse.
 * Use `create(CheckResponseSchema)` to create a new message.
 */
export declare const CheckResponseSchema: GenMessage<CheckResponse>;
/**
 * @generated from enum quick.v1.ServingStatus
 */
export declare enum ServingStatus {
    /**
     * @generated from enum value: SERVING_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: SERVING_STATUS_SERVING = 1;
     */
    SERVING = 1,
    /**
     * @generated from enum value: SERVING_STATUS_NOT_SERVING = 2;
     */
    NOT_SERVING = 2
}
/**
 * Describes the enum quick.v1.ServingStatus.
 */
export declare const ServingStatusSchema: GenEnum<ServingStatus>;
/**
 * Health is a liveness probe served over Connect-RPC.
 * Clients call Check at startup and on focus to verify the server is reachable
 * and to read its version string.
 *
 * @generated from service quick.v1.Health
 */
export declare const Health: GenService<{
    /**
     * @generated from rpc quick.v1.Health.Check
     */
    check: {
        methodKind: "unary";
        input: typeof CheckRequestSchema;
        output: typeof CheckResponseSchema;
    };
}>;
