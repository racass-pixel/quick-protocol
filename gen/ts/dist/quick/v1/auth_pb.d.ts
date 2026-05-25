import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { User } from "./users_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file quick/v1/auth.proto.
 */
export declare const file_quick_v1_auth: GenFile;
/**
 * @generated from message quick.v1.RequestCodeRequest
 */
export type RequestCodeRequest = Message<"quick.v1.RequestCodeRequest"> & {
    /**
     * @generated from field: string email = 1;
     */
    email: string;
};
/**
 * Describes the message quick.v1.RequestCodeRequest.
 * Use `create(RequestCodeRequestSchema)` to create a new message.
 */
export declare const RequestCodeRequestSchema: GenMessage<RequestCodeRequest>;
/**
 * @generated from message quick.v1.RequestCodeResponse
 */
export type RequestCodeResponse = Message<"quick.v1.RequestCodeResponse"> & {
    /**
     * @generated from field: google.protobuf.Timestamp expires_at = 1;
     */
    expiresAt?: Timestamp | undefined;
    /**
     * @generated from field: google.protobuf.Timestamp retry_after = 2;
     */
    retryAfter?: Timestamp | undefined;
};
/**
 * Describes the message quick.v1.RequestCodeResponse.
 * Use `create(RequestCodeResponseSchema)` to create a new message.
 */
export declare const RequestCodeResponseSchema: GenMessage<RequestCodeResponse>;
/**
 * @generated from message quick.v1.VerifyCodeRequest
 */
export type VerifyCodeRequest = Message<"quick.v1.VerifyCodeRequest"> & {
    /**
     * @generated from field: string email = 1;
     */
    email: string;
    /**
     * @generated from field: string code = 2;
     */
    code: string;
};
/**
 * Describes the message quick.v1.VerifyCodeRequest.
 * Use `create(VerifyCodeRequestSchema)` to create a new message.
 */
export declare const VerifyCodeRequestSchema: GenMessage<VerifyCodeRequest>;
/**
 * @generated from message quick.v1.VerifyCodeResponse
 */
export type VerifyCodeResponse = Message<"quick.v1.VerifyCodeResponse"> & {
    /**
     * @generated from field: string token = 1;
     */
    token: string;
    /**
     * @generated from field: quick.v1.User user = 2;
     */
    user?: User | undefined;
    /**
     * @generated from field: bool is_new_account = 3;
     */
    isNewAccount: boolean;
};
/**
 * Describes the message quick.v1.VerifyCodeResponse.
 * Use `create(VerifyCodeResponseSchema)` to create a new message.
 */
export declare const VerifyCodeResponseSchema: GenMessage<VerifyCodeResponse>;
/**
 * @generated from message quick.v1.LogoutRequest
 */
export type LogoutRequest = Message<"quick.v1.LogoutRequest"> & {};
/**
 * Describes the message quick.v1.LogoutRequest.
 * Use `create(LogoutRequestSchema)` to create a new message.
 */
export declare const LogoutRequestSchema: GenMessage<LogoutRequest>;
/**
 * @generated from message quick.v1.LogoutResponse
 */
export type LogoutResponse = Message<"quick.v1.LogoutResponse"> & {};
/**
 * Describes the message quick.v1.LogoutResponse.
 * Use `create(LogoutResponseSchema)` to create a new message.
 */
export declare const LogoutResponseSchema: GenMessage<LogoutResponse>;
/**
 * @generated from service quick.v1.Auth
 */
export declare const Auth: GenService<{
    /**
     * @generated from rpc quick.v1.Auth.RequestCode
     */
    requestCode: {
        methodKind: "unary";
        input: typeof RequestCodeRequestSchema;
        output: typeof RequestCodeResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Auth.VerifyCode
     */
    verifyCode: {
        methodKind: "unary";
        input: typeof VerifyCodeRequestSchema;
        output: typeof VerifyCodeResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Auth.Logout
     */
    logout: {
        methodKind: "unary";
        input: typeof LogoutRequestSchema;
        output: typeof LogoutResponseSchema;
    };
}>;
