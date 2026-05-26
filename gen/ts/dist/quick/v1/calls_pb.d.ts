import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
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
 * @generated from message quick.v1.GroupCall
 */
export type GroupCall = Message<"quick.v1.GroupCall"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string conversation_id = 2;
     */
    conversationId: string;
    /**
     * @generated from field: string started_by = 3;
     */
    startedBy: string;
    /**
     * @generated from field: google.protobuf.Timestamp started_at = 4;
     */
    startedAt?: Timestamp | undefined;
    /**
     * @generated from field: string room_name = 5;
     */
    roomName: string;
    /**
     * @generated from field: int32 participant_count = 6;
     */
    participantCount: number;
};
/**
 * Describes the message quick.v1.GroupCall.
 * Use `create(GroupCallSchema)` to create a new message.
 */
export declare const GroupCallSchema: GenMessage<GroupCall>;
/**
 * @generated from message quick.v1.StartGroupCallRequest
 */
export type StartGroupCallRequest = Message<"quick.v1.StartGroupCallRequest"> & {
    /**
     * @generated from field: string conversation_id = 1;
     */
    conversationId: string;
};
/**
 * Describes the message quick.v1.StartGroupCallRequest.
 * Use `create(StartGroupCallRequestSchema)` to create a new message.
 */
export declare const StartGroupCallRequestSchema: GenMessage<StartGroupCallRequest>;
/**
 * @generated from message quick.v1.StartGroupCallResponse
 */
export type StartGroupCallResponse = Message<"quick.v1.StartGroupCallResponse"> & {
    /**
     * @generated from field: quick.v1.GroupCall call = 1;
     */
    call?: GroupCall | undefined;
    /**
     * caller is auto-joined
     *
     * @generated from field: quick.v1.CallJoin join = 2;
     */
    join?: CallJoin | undefined;
};
/**
 * Describes the message quick.v1.StartGroupCallResponse.
 * Use `create(StartGroupCallResponseSchema)` to create a new message.
 */
export declare const StartGroupCallResponseSchema: GenMessage<StartGroupCallResponse>;
/**
 * @generated from message quick.v1.JoinGroupCallRequest
 */
export type JoinGroupCallRequest = Message<"quick.v1.JoinGroupCallRequest"> & {
    /**
     * @generated from field: string call_id = 1;
     */
    callId: string;
};
/**
 * Describes the message quick.v1.JoinGroupCallRequest.
 * Use `create(JoinGroupCallRequestSchema)` to create a new message.
 */
export declare const JoinGroupCallRequestSchema: GenMessage<JoinGroupCallRequest>;
/**
 * @generated from message quick.v1.JoinGroupCallResponse
 */
export type JoinGroupCallResponse = Message<"quick.v1.JoinGroupCallResponse"> & {
    /**
     * @generated from field: quick.v1.CallJoin join = 1;
     */
    join?: CallJoin | undefined;
};
/**
 * Describes the message quick.v1.JoinGroupCallResponse.
 * Use `create(JoinGroupCallResponseSchema)` to create a new message.
 */
export declare const JoinGroupCallResponseSchema: GenMessage<JoinGroupCallResponse>;
/**
 * @generated from message quick.v1.LeaveGroupCallRequest
 */
export type LeaveGroupCallRequest = Message<"quick.v1.LeaveGroupCallRequest"> & {
    /**
     * @generated from field: string call_id = 1;
     */
    callId: string;
};
/**
 * Describes the message quick.v1.LeaveGroupCallRequest.
 * Use `create(LeaveGroupCallRequestSchema)` to create a new message.
 */
export declare const LeaveGroupCallRequestSchema: GenMessage<LeaveGroupCallRequest>;
/**
 * @generated from message quick.v1.LeaveGroupCallResponse
 */
export type LeaveGroupCallResponse = Message<"quick.v1.LeaveGroupCallResponse"> & {};
/**
 * Describes the message quick.v1.LeaveGroupCallResponse.
 * Use `create(LeaveGroupCallResponseSchema)` to create a new message.
 */
export declare const LeaveGroupCallResponseSchema: GenMessage<LeaveGroupCallResponse>;
/**
 * Owner/admin only — force-ends the group call for everyone (e.g. cleanup
 * stuck rooms). Regular participants use LeaveGroupCall.
 *
 * @generated from message quick.v1.EndGroupCallRequest
 */
export type EndGroupCallRequest = Message<"quick.v1.EndGroupCallRequest"> & {
    /**
     * @generated from field: string call_id = 1;
     */
    callId: string;
};
/**
 * Describes the message quick.v1.EndGroupCallRequest.
 * Use `create(EndGroupCallRequestSchema)` to create a new message.
 */
export declare const EndGroupCallRequestSchema: GenMessage<EndGroupCallRequest>;
/**
 * @generated from message quick.v1.EndGroupCallResponse
 */
export type EndGroupCallResponse = Message<"quick.v1.EndGroupCallResponse"> & {};
/**
 * Describes the message quick.v1.EndGroupCallResponse.
 * Use `create(EndGroupCallResponseSchema)` to create a new message.
 */
export declare const EndGroupCallResponseSchema: GenMessage<EndGroupCallResponse>;
/**
 * @generated from message quick.v1.ListActiveGroupCallsRequest
 */
export type ListActiveGroupCallsRequest = Message<"quick.v1.ListActiveGroupCallsRequest"> & {
    /**
     * @generated from field: repeated string conversation_ids = 1;
     */
    conversationIds: string[];
};
/**
 * Describes the message quick.v1.ListActiveGroupCallsRequest.
 * Use `create(ListActiveGroupCallsRequestSchema)` to create a new message.
 */
export declare const ListActiveGroupCallsRequestSchema: GenMessage<ListActiveGroupCallsRequest>;
/**
 * @generated from message quick.v1.ListActiveGroupCallsResponse
 */
export type ListActiveGroupCallsResponse = Message<"quick.v1.ListActiveGroupCallsResponse"> & {
    /**
     * @generated from field: repeated quick.v1.GroupCall calls = 1;
     */
    calls: GroupCall[];
};
/**
 * Describes the message quick.v1.ListActiveGroupCallsResponse.
 * Use `create(ListActiveGroupCallsResponseSchema)` to create a new message.
 */
export declare const ListActiveGroupCallsResponseSchema: GenMessage<ListActiveGroupCallsResponse>;
/**
 * @generated from service quick.v1.Calls
 */
export declare const Calls: GenService<{
    /**
     * 1:1 calls (S5-lite — caller rings callee, callee accepts/declines).
     *
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
    /**
     * Group calls (S9 — Telegram-style voice chat, no ring, free join).
     *
     * @generated from rpc quick.v1.Calls.StartGroupCall
     */
    startGroupCall: {
        methodKind: "unary";
        input: typeof StartGroupCallRequestSchema;
        output: typeof StartGroupCallResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Calls.JoinGroupCall
     */
    joinGroupCall: {
        methodKind: "unary";
        input: typeof JoinGroupCallRequestSchema;
        output: typeof JoinGroupCallResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Calls.LeaveGroupCall
     */
    leaveGroupCall: {
        methodKind: "unary";
        input: typeof LeaveGroupCallRequestSchema;
        output: typeof LeaveGroupCallResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Calls.EndGroupCall
     */
    endGroupCall: {
        methodKind: "unary";
        input: typeof EndGroupCallRequestSchema;
        output: typeof EndGroupCallResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Calls.ListActiveGroupCalls
     */
    listActiveGroupCalls: {
        methodKind: "unary";
        input: typeof ListActiveGroupCallsRequestSchema;
        output: typeof ListActiveGroupCallsResponseSchema;
    };
}>;
