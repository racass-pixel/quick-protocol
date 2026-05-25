import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { User } from "./users_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file quick/v1/friends.proto.
 */
export declare const file_quick_v1_friends: GenFile;
/**
 * @generated from message quick.v1.Friendship
 */
export type Friendship = Message<"quick.v1.Friendship"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: quick.v1.User peer = 2;
     */
    peer?: User | undefined;
    /**
     * @generated from field: string status = 3;
     */
    status: string;
    /**
     * @generated from field: bool is_incoming = 4;
     */
    isIncoming: boolean;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 5;
     */
    createdAt?: Timestamp | undefined;
};
/**
 * Describes the message quick.v1.Friendship.
 * Use `create(FriendshipSchema)` to create a new message.
 */
export declare const FriendshipSchema: GenMessage<Friendship>;
/**
 * @generated from message quick.v1.ListFriendsRequest
 */
export type ListFriendsRequest = Message<"quick.v1.ListFriendsRequest"> & {};
/**
 * Describes the message quick.v1.ListFriendsRequest.
 * Use `create(ListFriendsRequestSchema)` to create a new message.
 */
export declare const ListFriendsRequestSchema: GenMessage<ListFriendsRequest>;
/**
 * @generated from message quick.v1.ListFriendsResponse
 */
export type ListFriendsResponse = Message<"quick.v1.ListFriendsResponse"> & {
    /**
     * @generated from field: repeated quick.v1.Friendship friends = 1;
     */
    friends: Friendship[];
};
/**
 * Describes the message quick.v1.ListFriendsResponse.
 * Use `create(ListFriendsResponseSchema)` to create a new message.
 */
export declare const ListFriendsResponseSchema: GenMessage<ListFriendsResponse>;
/**
 * @generated from message quick.v1.ListRequestsRequest
 */
export type ListRequestsRequest = Message<"quick.v1.ListRequestsRequest"> & {};
/**
 * Describes the message quick.v1.ListRequestsRequest.
 * Use `create(ListRequestsRequestSchema)` to create a new message.
 */
export declare const ListRequestsRequestSchema: GenMessage<ListRequestsRequest>;
/**
 * @generated from message quick.v1.ListRequestsResponse
 */
export type ListRequestsResponse = Message<"quick.v1.ListRequestsResponse"> & {
    /**
     * @generated from field: repeated quick.v1.Friendship requests = 1;
     */
    requests: Friendship[];
};
/**
 * Describes the message quick.v1.ListRequestsResponse.
 * Use `create(ListRequestsResponseSchema)` to create a new message.
 */
export declare const ListRequestsResponseSchema: GenMessage<ListRequestsResponse>;
/**
 * @generated from message quick.v1.SendRequestRequest
 */
export type SendRequestRequest = Message<"quick.v1.SendRequestRequest"> & {
    /**
     * @generated from field: string handle = 1;
     */
    handle: string;
};
/**
 * Describes the message quick.v1.SendRequestRequest.
 * Use `create(SendRequestRequestSchema)` to create a new message.
 */
export declare const SendRequestRequestSchema: GenMessage<SendRequestRequest>;
/**
 * @generated from message quick.v1.SendRequestResponse
 */
export type SendRequestResponse = Message<"quick.v1.SendRequestResponse"> & {
    /**
     * @generated from field: quick.v1.Friendship request = 1;
     */
    request?: Friendship | undefined;
};
/**
 * Describes the message quick.v1.SendRequestResponse.
 * Use `create(SendRequestResponseSchema)` to create a new message.
 */
export declare const SendRequestResponseSchema: GenMessage<SendRequestResponse>;
/**
 * @generated from message quick.v1.AcceptRequest
 */
export type AcceptRequest = Message<"quick.v1.AcceptRequest"> & {
    /**
     * @generated from field: string friendship_id = 1;
     */
    friendshipId: string;
};
/**
 * Describes the message quick.v1.AcceptRequest.
 * Use `create(AcceptRequestSchema)` to create a new message.
 */
export declare const AcceptRequestSchema: GenMessage<AcceptRequest>;
/**
 * @generated from message quick.v1.AcceptResponse
 */
export type AcceptResponse = Message<"quick.v1.AcceptResponse"> & {
    /**
     * @generated from field: quick.v1.Friendship friendship = 1;
     */
    friendship?: Friendship | undefined;
};
/**
 * Describes the message quick.v1.AcceptResponse.
 * Use `create(AcceptResponseSchema)` to create a new message.
 */
export declare const AcceptResponseSchema: GenMessage<AcceptResponse>;
/**
 * @generated from message quick.v1.DeclineRequest
 */
export type DeclineRequest = Message<"quick.v1.DeclineRequest"> & {
    /**
     * @generated from field: string friendship_id = 1;
     */
    friendshipId: string;
};
/**
 * Describes the message quick.v1.DeclineRequest.
 * Use `create(DeclineRequestSchema)` to create a new message.
 */
export declare const DeclineRequestSchema: GenMessage<DeclineRequest>;
/**
 * @generated from message quick.v1.DeclineResponse
 */
export type DeclineResponse = Message<"quick.v1.DeclineResponse"> & {};
/**
 * Describes the message quick.v1.DeclineResponse.
 * Use `create(DeclineResponseSchema)` to create a new message.
 */
export declare const DeclineResponseSchema: GenMessage<DeclineResponse>;
/**
 * @generated from message quick.v1.RemoveRequest
 */
export type RemoveRequest = Message<"quick.v1.RemoveRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
};
/**
 * Describes the message quick.v1.RemoveRequest.
 * Use `create(RemoveRequestSchema)` to create a new message.
 */
export declare const RemoveRequestSchema: GenMessage<RemoveRequest>;
/**
 * @generated from message quick.v1.RemoveResponse
 */
export type RemoveResponse = Message<"quick.v1.RemoveResponse"> & {};
/**
 * Describes the message quick.v1.RemoveResponse.
 * Use `create(RemoveResponseSchema)` to create a new message.
 */
export declare const RemoveResponseSchema: GenMessage<RemoveResponse>;
/**
 * @generated from message quick.v1.BlockRequest
 */
export type BlockRequest = Message<"quick.v1.BlockRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
};
/**
 * Describes the message quick.v1.BlockRequest.
 * Use `create(BlockRequestSchema)` to create a new message.
 */
export declare const BlockRequestSchema: GenMessage<BlockRequest>;
/**
 * @generated from message quick.v1.BlockResponse
 */
export type BlockResponse = Message<"quick.v1.BlockResponse"> & {};
/**
 * Describes the message quick.v1.BlockResponse.
 * Use `create(BlockResponseSchema)` to create a new message.
 */
export declare const BlockResponseSchema: GenMessage<BlockResponse>;
/**
 * @generated from message quick.v1.UnblockRequest
 */
export type UnblockRequest = Message<"quick.v1.UnblockRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
};
/**
 * Describes the message quick.v1.UnblockRequest.
 * Use `create(UnblockRequestSchema)` to create a new message.
 */
export declare const UnblockRequestSchema: GenMessage<UnblockRequest>;
/**
 * @generated from message quick.v1.UnblockResponse
 */
export type UnblockResponse = Message<"quick.v1.UnblockResponse"> & {};
/**
 * Describes the message quick.v1.UnblockResponse.
 * Use `create(UnblockResponseSchema)` to create a new message.
 */
export declare const UnblockResponseSchema: GenMessage<UnblockResponse>;
/**
 * @generated from service quick.v1.Friends
 */
export declare const Friends: GenService<{
    /**
     * @generated from rpc quick.v1.Friends.ListFriends
     */
    listFriends: {
        methodKind: "unary";
        input: typeof ListFriendsRequestSchema;
        output: typeof ListFriendsResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Friends.ListRequests
     */
    listRequests: {
        methodKind: "unary";
        input: typeof ListRequestsRequestSchema;
        output: typeof ListRequestsResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Friends.SendRequest
     */
    sendRequest: {
        methodKind: "unary";
        input: typeof SendRequestRequestSchema;
        output: typeof SendRequestResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Friends.Accept
     */
    accept: {
        methodKind: "unary";
        input: typeof AcceptRequestSchema;
        output: typeof AcceptResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Friends.Decline
     */
    decline: {
        methodKind: "unary";
        input: typeof DeclineRequestSchema;
        output: typeof DeclineResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Friends.Remove
     */
    remove: {
        methodKind: "unary";
        input: typeof RemoveRequestSchema;
        output: typeof RemoveResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Friends.Block
     */
    block: {
        methodKind: "unary";
        input: typeof BlockRequestSchema;
        output: typeof BlockResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Friends.Unblock
     */
    unblock: {
        methodKind: "unary";
        input: typeof UnblockRequestSchema;
        output: typeof UnblockResponseSchema;
    };
}>;
