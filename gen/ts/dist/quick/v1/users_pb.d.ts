import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { IdentityKey } from "./crypto_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file quick/v1/users.proto.
 */
export declare const file_quick_v1_users: GenFile;
/**
 * @generated from message quick.v1.User
 */
export type User = Message<"quick.v1.User"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string handle = 2;
     */
    handle: string;
    /**
     * @generated from field: string display_name = 3;
     */
    displayName: string;
    /**
     * @generated from field: string avatar_color = 4;
     */
    avatarColor: string;
    /**
     * @generated from field: google.protobuf.Timestamp last_seen_at = 5;
     */
    lastSeenAt?: Timestamp | undefined;
    /**
     * @generated from field: string bio = 6;
     */
    bio: string;
};
/**
 * Describes the message quick.v1.User.
 * Use `create(UserSchema)` to create a new message.
 */
export declare const UserSchema: GenMessage<User>;
/**
 * @generated from message quick.v1.MeRequest
 */
export type MeRequest = Message<"quick.v1.MeRequest"> & {};
/**
 * Describes the message quick.v1.MeRequest.
 * Use `create(MeRequestSchema)` to create a new message.
 */
export declare const MeRequestSchema: GenMessage<MeRequest>;
/**
 * @generated from message quick.v1.MeResponse
 */
export type MeResponse = Message<"quick.v1.MeResponse"> & {
    /**
     * @generated from field: quick.v1.User user = 1;
     */
    user?: User | undefined;
};
/**
 * Describes the message quick.v1.MeResponse.
 * Use `create(MeResponseSchema)` to create a new message.
 */
export declare const MeResponseSchema: GenMessage<MeResponse>;
/**
 * @generated from message quick.v1.UpdateProfileRequest
 */
export type UpdateProfileRequest = Message<"quick.v1.UpdateProfileRequest"> & {
    /**
     * @generated from field: optional string display_name = 1;
     */
    displayName?: string | undefined;
    /**
     * @generated from field: optional string handle = 2;
     */
    handle?: string | undefined;
    /**
     * @generated from field: optional string bio = 3;
     */
    bio?: string | undefined;
};
/**
 * Describes the message quick.v1.UpdateProfileRequest.
 * Use `create(UpdateProfileRequestSchema)` to create a new message.
 */
export declare const UpdateProfileRequestSchema: GenMessage<UpdateProfileRequest>;
/**
 * @generated from message quick.v1.UpdateProfileResponse
 */
export type UpdateProfileResponse = Message<"quick.v1.UpdateProfileResponse"> & {
    /**
     * @generated from field: quick.v1.User user = 1;
     */
    user?: User | undefined;
};
/**
 * Describes the message quick.v1.UpdateProfileResponse.
 * Use `create(UpdateProfileResponseSchema)` to create a new message.
 */
export declare const UpdateProfileResponseSchema: GenMessage<UpdateProfileResponse>;
/**
 * @generated from message quick.v1.SearchRequest
 */
export type SearchRequest = Message<"quick.v1.SearchRequest"> & {
    /**
     * @generated from field: string handle_prefix = 1;
     */
    handlePrefix: string;
    /**
     * @generated from field: int32 limit = 2;
     */
    limit: number;
};
/**
 * Describes the message quick.v1.SearchRequest.
 * Use `create(SearchRequestSchema)` to create a new message.
 */
export declare const SearchRequestSchema: GenMessage<SearchRequest>;
/**
 * @generated from message quick.v1.SearchResponse
 */
export type SearchResponse = Message<"quick.v1.SearchResponse"> & {
    /**
     * @generated from field: repeated quick.v1.User users = 1;
     */
    users: User[];
};
/**
 * Describes the message quick.v1.SearchResponse.
 * Use `create(SearchResponseSchema)` to create a new message.
 */
export declare const SearchResponseSchema: GenMessage<SearchResponse>;
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
 * @generated from message quick.v1.ListBlockedRequest
 */
export type ListBlockedRequest = Message<"quick.v1.ListBlockedRequest"> & {};
/**
 * Describes the message quick.v1.ListBlockedRequest.
 * Use `create(ListBlockedRequestSchema)` to create a new message.
 */
export declare const ListBlockedRequestSchema: GenMessage<ListBlockedRequest>;
/**
 * @generated from message quick.v1.ListBlockedResponse
 */
export type ListBlockedResponse = Message<"quick.v1.ListBlockedResponse"> & {
    /**
     * @generated from field: repeated quick.v1.User users = 1;
     */
    users: User[];
};
/**
 * Describes the message quick.v1.ListBlockedResponse.
 * Use `create(ListBlockedResponseSchema)` to create a new message.
 */
export declare const ListBlockedResponseSchema: GenMessage<ListBlockedResponse>;
/**
 * @generated from message quick.v1.Presence
 */
export type Presence = Message<"quick.v1.Presence"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: bool online = 2;
     */
    online: boolean;
    /**
     * @generated from field: google.protobuf.Timestamp last_seen_at = 3;
     */
    lastSeenAt?: Timestamp | undefined;
};
/**
 * Describes the message quick.v1.Presence.
 * Use `create(PresenceSchema)` to create a new message.
 */
export declare const PresenceSchema: GenMessage<Presence>;
/**
 * @generated from message quick.v1.GetPresenceRequest
 */
export type GetPresenceRequest = Message<"quick.v1.GetPresenceRequest"> & {
    /**
     * @generated from field: repeated string user_ids = 1;
     */
    userIds: string[];
};
/**
 * Describes the message quick.v1.GetPresenceRequest.
 * Use `create(GetPresenceRequestSchema)` to create a new message.
 */
export declare const GetPresenceRequestSchema: GenMessage<GetPresenceRequest>;
/**
 * @generated from message quick.v1.GetPresenceResponse
 */
export type GetPresenceResponse = Message<"quick.v1.GetPresenceResponse"> & {
    /**
     * @generated from field: repeated quick.v1.Presence presence = 1;
     */
    presence: Presence[];
};
/**
 * Describes the message quick.v1.GetPresenceResponse.
 * Use `create(GetPresenceResponseSchema)` to create a new message.
 */
export declare const GetPresenceResponseSchema: GenMessage<GetPresenceResponse>;
/**
 * @generated from message quick.v1.UploadIdentityKeyRequest
 */
export type UploadIdentityKeyRequest = Message<"quick.v1.UploadIdentityKeyRequest"> & {
    /**
     * @generated from field: bytes public_key = 1;
     */
    publicKey: Uint8Array;
};
/**
 * Describes the message quick.v1.UploadIdentityKeyRequest.
 * Use `create(UploadIdentityKeyRequestSchema)` to create a new message.
 */
export declare const UploadIdentityKeyRequestSchema: GenMessage<UploadIdentityKeyRequest>;
/**
 * @generated from message quick.v1.UploadIdentityKeyResponse
 */
export type UploadIdentityKeyResponse = Message<"quick.v1.UploadIdentityKeyResponse"> & {};
/**
 * Describes the message quick.v1.UploadIdentityKeyResponse.
 * Use `create(UploadIdentityKeyResponseSchema)` to create a new message.
 */
export declare const UploadIdentityKeyResponseSchema: GenMessage<UploadIdentityKeyResponse>;
/**
 * @generated from message quick.v1.GetIdentityKeyRequest
 */
export type GetIdentityKeyRequest = Message<"quick.v1.GetIdentityKeyRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
};
/**
 * Describes the message quick.v1.GetIdentityKeyRequest.
 * Use `create(GetIdentityKeyRequestSchema)` to create a new message.
 */
export declare const GetIdentityKeyRequestSchema: GenMessage<GetIdentityKeyRequest>;
/**
 * @generated from message quick.v1.GetIdentityKeyResponse
 */
export type GetIdentityKeyResponse = Message<"quick.v1.GetIdentityKeyResponse"> & {
    /**
     * @generated from field: quick.v1.IdentityKey identity_key = 1;
     */
    identityKey?: IdentityKey | undefined;
};
/**
 * Describes the message quick.v1.GetIdentityKeyResponse.
 * Use `create(GetIdentityKeyResponseSchema)` to create a new message.
 */
export declare const GetIdentityKeyResponseSchema: GenMessage<GetIdentityKeyResponse>;
/**
 * @generated from message quick.v1.GetIdentityKeysRequest
 */
export type GetIdentityKeysRequest = Message<"quick.v1.GetIdentityKeysRequest"> & {
    /**
     * @generated from field: repeated string user_ids = 1;
     */
    userIds: string[];
};
/**
 * Describes the message quick.v1.GetIdentityKeysRequest.
 * Use `create(GetIdentityKeysRequestSchema)` to create a new message.
 */
export declare const GetIdentityKeysRequestSchema: GenMessage<GetIdentityKeysRequest>;
/**
 * @generated from message quick.v1.GetIdentityKeysResponse
 */
export type GetIdentityKeysResponse = Message<"quick.v1.GetIdentityKeysResponse"> & {
    /**
     * @generated from field: repeated quick.v1.IdentityKey identity_keys = 1;
     */
    identityKeys: IdentityKey[];
};
/**
 * Describes the message quick.v1.GetIdentityKeysResponse.
 * Use `create(GetIdentityKeysResponseSchema)` to create a new message.
 */
export declare const GetIdentityKeysResponseSchema: GenMessage<GetIdentityKeysResponse>;
/**
 * @generated from service quick.v1.Users
 */
export declare const Users: GenService<{
    /**
     * @generated from rpc quick.v1.Users.Me
     */
    me: {
        methodKind: "unary";
        input: typeof MeRequestSchema;
        output: typeof MeResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Users.UpdateProfile
     */
    updateProfile: {
        methodKind: "unary";
        input: typeof UpdateProfileRequestSchema;
        output: typeof UpdateProfileResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Users.Search
     */
    search: {
        methodKind: "unary";
        input: typeof SearchRequestSchema;
        output: typeof SearchResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Users.Block
     */
    block: {
        methodKind: "unary";
        input: typeof BlockRequestSchema;
        output: typeof BlockResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Users.Unblock
     */
    unblock: {
        methodKind: "unary";
        input: typeof UnblockRequestSchema;
        output: typeof UnblockResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Users.ListBlocked
     */
    listBlocked: {
        methodKind: "unary";
        input: typeof ListBlockedRequestSchema;
        output: typeof ListBlockedResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Users.GetPresence
     */
    getPresence: {
        methodKind: "unary";
        input: typeof GetPresenceRequestSchema;
        output: typeof GetPresenceResponseSchema;
    };
    /**
     * End-to-end encryption: identity key publishing + lookup.
     * Clients call UploadIdentityKey once on first launch after key generation;
     * re-upload only when the user wipes local storage and re-onboards.
     *
     * @generated from rpc quick.v1.Users.UploadIdentityKey
     */
    uploadIdentityKey: {
        methodKind: "unary";
        input: typeof UploadIdentityKeyRequestSchema;
        output: typeof UploadIdentityKeyResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Users.GetIdentityKey
     */
    getIdentityKey: {
        methodKind: "unary";
        input: typeof GetIdentityKeyRequestSchema;
        output: typeof GetIdentityKeyResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Users.GetIdentityKeys
     */
    getIdentityKeys: {
        methodKind: "unary";
        input: typeof GetIdentityKeysRequestSchema;
        output: typeof GetIdentityKeysResponseSchema;
    };
}>;
