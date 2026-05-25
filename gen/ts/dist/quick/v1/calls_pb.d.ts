import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file quick/v1/calls.proto.
 */
export declare const file_quick_v1_calls: GenFile;
/**
 * @generated from message quick.v1.CallJoin
 */
export type CallJoin = Message<"quick.v1.CallJoin"> & {
    /**
     * @generated from field: string room_name = 1;
     */
    roomName: string;
    /**
     * @generated from field: string token = 2;
     */
    token: string;
    /**
     * @generated from field: string livekit_url = 3;
     */
    livekitUrl: string;
};
/**
 * Describes the message quick.v1.CallJoin.
 * Use `create(CallJoinSchema)` to create a new message.
 */
export declare const CallJoinSchema: GenMessage<CallJoin>;
/**
 * @generated from message quick.v1.StartCallRequest
 */
export type StartCallRequest = Message<"quick.v1.StartCallRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: bool video = 2;
     */
    video: boolean;
};
/**
 * Describes the message quick.v1.StartCallRequest.
 * Use `create(StartCallRequestSchema)` to create a new message.
 */
export declare const StartCallRequestSchema: GenMessage<StartCallRequest>;
/**
 * @generated from message quick.v1.StartCallResponse
 */
export type StartCallResponse = Message<"quick.v1.StartCallResponse"> & {
    /**
     * @generated from field: string call_id = 1;
     */
    callId: string;
    /**
     * @generated from field: quick.v1.CallJoin join = 2;
     */
    join?: CallJoin | undefined;
};
/**
 * Describes the message quick.v1.StartCallResponse.
 * Use `create(StartCallResponseSchema)` to create a new message.
 */
export declare const StartCallResponseSchema: GenMessage<StartCallResponse>;
/**
 * @generated from message quick.v1.AcceptCallRequest
 */
export type AcceptCallRequest = Message<"quick.v1.AcceptCallRequest"> & {
    /**
     * @generated from field: string call_id = 1;
     */
    callId: string;
};
/**
 * Describes the message quick.v1.AcceptCallRequest.
 * Use `create(AcceptCallRequestSchema)` to create a new message.
 */
export declare const AcceptCallRequestSchema: GenMessage<AcceptCallRequest>;
/**
 * @generated from message quick.v1.AcceptCallResponse
 */
export type AcceptCallResponse = Message<"quick.v1.AcceptCallResponse"> & {
    /**
     * @generated from field: quick.v1.CallJoin join = 1;
     */
    join?: CallJoin | undefined;
};
/**
 * Describes the message quick.v1.AcceptCallResponse.
 * Use `create(AcceptCallResponseSchema)` to create a new message.
 */
export declare const AcceptCallResponseSchema: GenMessage<AcceptCallResponse>;
/**
 * @generated from message quick.v1.DeclineCallRequest
 */
export type DeclineCallRequest = Message<"quick.v1.DeclineCallRequest"> & {
    /**
     * @generated from field: string call_id = 1;
     */
    callId: string;
};
/**
 * Describes the message quick.v1.DeclineCallRequest.
 * Use `create(DeclineCallRequestSchema)` to create a new message.
 */
export declare const DeclineCallRequestSchema: GenMessage<DeclineCallRequest>;
/**
 * @generated from message quick.v1.DeclineCallResponse
 */
export type DeclineCallResponse = Message<"quick.v1.DeclineCallResponse"> & {};
/**
 * Describes the message quick.v1.DeclineCallResponse.
 * Use `create(DeclineCallResponseSchema)` to create a new message.
 */
export declare const DeclineCallResponseSchema: GenMessage<DeclineCallResponse>;
/**
 * @generated from message quick.v1.EndCallRequest
 */
export type EndCallRequest = Message<"quick.v1.EndCallRequest"> & {
    /**
     * @generated from field: string call_id = 1;
     */
    callId: string;
};
/**
 * Describes the message quick.v1.EndCallRequest.
 * Use `create(EndCallRequestSchema)` to create a new message.
 */
export declare const EndCallRequestSchema: GenMessage<EndCallRequest>;
/**
 * @generated from message quick.v1.EndCallResponse
 */
export type EndCallResponse = Message<"quick.v1.EndCallResponse"> & {};
/**
 * Describes the message quick.v1.EndCallResponse.
 * Use `create(EndCallResponseSchema)` to create a new message.
 */
export declare const EndCallResponseSchema: GenMessage<EndCallResponse>;
/**
 * @generated from service quick.v1.Calls
 */
export declare const Calls: GenService<{
    /**
     * @generated from rpc quick.v1.Calls.StartCall
     */
    startCall: {
        methodKind: "unary";
        input: typeof StartCallRequestSchema;
        output: typeof StartCallResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Calls.AcceptCall
     */
    acceptCall: {
        methodKind: "unary";
        input: typeof AcceptCallRequestSchema;
        output: typeof AcceptCallResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Calls.DeclineCall
     */
    declineCall: {
        methodKind: "unary";
        input: typeof DeclineCallRequestSchema;
        output: typeof DeclineCallResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Calls.EndCall
     */
    endCall: {
        methodKind: "unary";
        input: typeof EndCallRequestSchema;
        output: typeof EndCallResponseSchema;
    };
}>;
