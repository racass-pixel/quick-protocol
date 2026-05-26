import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { User } from "./users_pb.js";
import type { Message as Message$1 } from "@bufbuild/protobuf";
/**
 * Describes the file quick/v1/messaging.proto.
 */
export declare const file_quick_v1_messaging: GenFile;
/**
 * @generated from message quick.v1.Conversation
 */
export type Conversation = Message$1<"quick.v1.Conversation"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string type = 2;
     */
    type: string;
    /**
     * @generated from field: string title = 3;
     */
    title: string;
    /**
     * @generated from field: quick.v1.User peer = 4;
     */
    peer?: User | undefined;
    /**
     * @generated from field: google.protobuf.Timestamp last_message_at = 5;
     */
    lastMessageAt?: Timestamp | undefined;
    /**
     * @generated from field: quick.v1.Message preview = 6;
     */
    preview?: Message | undefined;
    /**
     * @generated from field: int32 unread_count = 7;
     */
    unreadCount: number;
    /**
     * @generated from field: int32 member_count = 8;
     */
    memberCount: number;
    /**
     * @generated from field: string avatar_color = 9;
     */
    avatarColor: string;
    /**
     * @generated from field: string my_role = 10;
     */
    myRole: string;
};
/**
 * Describes the message quick.v1.Conversation.
 * Use `create(ConversationSchema)` to create a new message.
 */
export declare const ConversationSchema: GenMessage<Conversation>;
/**
 * @generated from message quick.v1.Message
 */
export type Message = Message$1<"quick.v1.Message"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string conversation_id = 2;
     */
    conversationId: string;
    /**
     * @generated from field: string sender_id = 3;
     */
    senderId: string;
    /**
     * @generated from field: string body = 4;
     */
    body: string;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 5;
     */
    createdAt?: Timestamp | undefined;
};
/**
 * Describes the message quick.v1.Message.
 * Use `create(MessageSchema)` to create a new message.
 */
export declare const MessageSchema: GenMessage<Message>;
/**
 * @generated from message quick.v1.OpenDMRequest
 */
export type OpenDMRequest = Message$1<"quick.v1.OpenDMRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
};
/**
 * Describes the message quick.v1.OpenDMRequest.
 * Use `create(OpenDMRequestSchema)` to create a new message.
 */
export declare const OpenDMRequestSchema: GenMessage<OpenDMRequest>;
/**
 * @generated from message quick.v1.OpenDMResponse
 */
export type OpenDMResponse = Message$1<"quick.v1.OpenDMResponse"> & {
    /**
     * @generated from field: quick.v1.Conversation conversation = 1;
     */
    conversation?: Conversation | undefined;
};
/**
 * Describes the message quick.v1.OpenDMResponse.
 * Use `create(OpenDMResponseSchema)` to create a new message.
 */
export declare const OpenDMResponseSchema: GenMessage<OpenDMResponse>;
/**
 * @generated from message quick.v1.ListConversationsRequest
 */
export type ListConversationsRequest = Message$1<"quick.v1.ListConversationsRequest"> & {};
/**
 * Describes the message quick.v1.ListConversationsRequest.
 * Use `create(ListConversationsRequestSchema)` to create a new message.
 */
export declare const ListConversationsRequestSchema: GenMessage<ListConversationsRequest>;
/**
 * @generated from message quick.v1.ListConversationsResponse
 */
export type ListConversationsResponse = Message$1<"quick.v1.ListConversationsResponse"> & {
    /**
     * @generated from field: repeated quick.v1.Conversation conversations = 1;
     */
    conversations: Conversation[];
};
/**
 * Describes the message quick.v1.ListConversationsResponse.
 * Use `create(ListConversationsResponseSchema)` to create a new message.
 */
export declare const ListConversationsResponseSchema: GenMessage<ListConversationsResponse>;
/**
 * before_id and after_id are mutually exclusive cursor controls.
 * before_id loads older messages (paging upward through history).
 * after_id loads newer messages (catching up on missed messages).
 * Both absent = newest page.
 *
 * @generated from message quick.v1.ListMessagesRequest
 */
export type ListMessagesRequest = Message$1<"quick.v1.ListMessagesRequest"> & {
    /**
     * @generated from field: string conversation_id = 1;
     */
    conversationId: string;
    /**
     * @generated from field: string before_id = 2;
     */
    beforeId: string;
    /**
     * @generated from field: int32 limit = 3;
     */
    limit: number;
    /**
     * @generated from field: string after_id = 4;
     */
    afterId: string;
};
/**
 * Describes the message quick.v1.ListMessagesRequest.
 * Use `create(ListMessagesRequestSchema)` to create a new message.
 */
export declare const ListMessagesRequestSchema: GenMessage<ListMessagesRequest>;
/**
 * @generated from message quick.v1.ListMessagesResponse
 */
export type ListMessagesResponse = Message$1<"quick.v1.ListMessagesResponse"> & {
    /**
     * @generated from field: repeated quick.v1.Message messages = 1;
     */
    messages: Message[];
    /**
     * @generated from field: bool has_more = 2;
     */
    hasMore: boolean;
};
/**
 * Describes the message quick.v1.ListMessagesResponse.
 * Use `create(ListMessagesResponseSchema)` to create a new message.
 */
export declare const ListMessagesResponseSchema: GenMessage<ListMessagesResponse>;
/**
 * @generated from message quick.v1.SendMessageRequest
 */
export type SendMessageRequest = Message$1<"quick.v1.SendMessageRequest"> & {
    /**
     * @generated from field: string conversation_id = 1;
     */
    conversationId: string;
    /**
     * @generated from field: string body = 2;
     */
    body: string;
};
/**
 * Describes the message quick.v1.SendMessageRequest.
 * Use `create(SendMessageRequestSchema)` to create a new message.
 */
export declare const SendMessageRequestSchema: GenMessage<SendMessageRequest>;
/**
 * @generated from message quick.v1.SendMessageResponse
 */
export type SendMessageResponse = Message$1<"quick.v1.SendMessageResponse"> & {
    /**
     * @generated from field: quick.v1.Message message = 1;
     */
    message?: Message | undefined;
};
/**
 * Describes the message quick.v1.SendMessageResponse.
 * Use `create(SendMessageResponseSchema)` to create a new message.
 */
export declare const SendMessageResponseSchema: GenMessage<SendMessageResponse>;
/**
 * @generated from message quick.v1.MarkReadRequest
 */
export type MarkReadRequest = Message$1<"quick.v1.MarkReadRequest"> & {
    /**
     * @generated from field: string conversation_id = 1;
     */
    conversationId: string;
    /**
     * @generated from field: string last_message_id = 2;
     */
    lastMessageId: string;
};
/**
 * Describes the message quick.v1.MarkReadRequest.
 * Use `create(MarkReadRequestSchema)` to create a new message.
 */
export declare const MarkReadRequestSchema: GenMessage<MarkReadRequest>;
/**
 * @generated from message quick.v1.MarkReadResponse
 */
export type MarkReadResponse = Message$1<"quick.v1.MarkReadResponse"> & {};
/**
 * Describes the message quick.v1.MarkReadResponse.
 * Use `create(MarkReadResponseSchema)` to create a new message.
 */
export declare const MarkReadResponseSchema: GenMessage<MarkReadResponse>;
/**
 * @generated from message quick.v1.CreateGroupRequest
 */
export type CreateGroupRequest = Message$1<"quick.v1.CreateGroupRequest"> & {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: repeated string member_user_ids = 2;
     */
    memberUserIds: string[];
};
/**
 * Describes the message quick.v1.CreateGroupRequest.
 * Use `create(CreateGroupRequestSchema)` to create a new message.
 */
export declare const CreateGroupRequestSchema: GenMessage<CreateGroupRequest>;
/**
 * @generated from message quick.v1.CreateGroupResponse
 */
export type CreateGroupResponse = Message$1<"quick.v1.CreateGroupResponse"> & {
    /**
     * @generated from field: quick.v1.Conversation conversation = 1;
     */
    conversation?: Conversation | undefined;
};
/**
 * Describes the message quick.v1.CreateGroupResponse.
 * Use `create(CreateGroupResponseSchema)` to create a new message.
 */
export declare const CreateGroupResponseSchema: GenMessage<CreateGroupResponse>;
/**
 * @generated from message quick.v1.CreateChannelRequest
 */
export type CreateChannelRequest = Message$1<"quick.v1.CreateChannelRequest"> & {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: repeated string subscriber_user_ids = 2;
     */
    subscriberUserIds: string[];
};
/**
 * Describes the message quick.v1.CreateChannelRequest.
 * Use `create(CreateChannelRequestSchema)` to create a new message.
 */
export declare const CreateChannelRequestSchema: GenMessage<CreateChannelRequest>;
/**
 * @generated from message quick.v1.CreateChannelResponse
 */
export type CreateChannelResponse = Message$1<"quick.v1.CreateChannelResponse"> & {
    /**
     * @generated from field: quick.v1.Conversation conversation = 1;
     */
    conversation?: Conversation | undefined;
};
/**
 * Describes the message quick.v1.CreateChannelResponse.
 * Use `create(CreateChannelResponseSchema)` to create a new message.
 */
export declare const CreateChannelResponseSchema: GenMessage<CreateChannelResponse>;
/**
 * @generated from message quick.v1.AddMembersRequest
 */
export type AddMembersRequest = Message$1<"quick.v1.AddMembersRequest"> & {
    /**
     * @generated from field: string conversation_id = 1;
     */
    conversationId: string;
    /**
     * @generated from field: repeated string user_ids = 2;
     */
    userIds: string[];
};
/**
 * Describes the message quick.v1.AddMembersRequest.
 * Use `create(AddMembersRequestSchema)` to create a new message.
 */
export declare const AddMembersRequestSchema: GenMessage<AddMembersRequest>;
/**
 * @generated from message quick.v1.AddMembersResponse
 */
export type AddMembersResponse = Message$1<"quick.v1.AddMembersResponse"> & {};
/**
 * Describes the message quick.v1.AddMembersResponse.
 * Use `create(AddMembersResponseSchema)` to create a new message.
 */
export declare const AddMembersResponseSchema: GenMessage<AddMembersResponse>;
/**
 * @generated from message quick.v1.RemoveMemberRequest
 */
export type RemoveMemberRequest = Message$1<"quick.v1.RemoveMemberRequest"> & {
    /**
     * @generated from field: string conversation_id = 1;
     */
    conversationId: string;
    /**
     * @generated from field: string user_id = 2;
     */
    userId: string;
};
/**
 * Describes the message quick.v1.RemoveMemberRequest.
 * Use `create(RemoveMemberRequestSchema)` to create a new message.
 */
export declare const RemoveMemberRequestSchema: GenMessage<RemoveMemberRequest>;
/**
 * @generated from message quick.v1.RemoveMemberResponse
 */
export type RemoveMemberResponse = Message$1<"quick.v1.RemoveMemberResponse"> & {};
/**
 * Describes the message quick.v1.RemoveMemberResponse.
 * Use `create(RemoveMemberResponseSchema)` to create a new message.
 */
export declare const RemoveMemberResponseSchema: GenMessage<RemoveMemberResponse>;
/**
 * @generated from message quick.v1.LeaveConversationRequest
 */
export type LeaveConversationRequest = Message$1<"quick.v1.LeaveConversationRequest"> & {
    /**
     * @generated from field: string conversation_id = 1;
     */
    conversationId: string;
};
/**
 * Describes the message quick.v1.LeaveConversationRequest.
 * Use `create(LeaveConversationRequestSchema)` to create a new message.
 */
export declare const LeaveConversationRequestSchema: GenMessage<LeaveConversationRequest>;
/**
 * @generated from message quick.v1.LeaveConversationResponse
 */
export type LeaveConversationResponse = Message$1<"quick.v1.LeaveConversationResponse"> & {};
/**
 * Describes the message quick.v1.LeaveConversationResponse.
 * Use `create(LeaveConversationResponseSchema)` to create a new message.
 */
export declare const LeaveConversationResponseSchema: GenMessage<LeaveConversationResponse>;
/**
 * @generated from message quick.v1.ListMembersRequest
 */
export type ListMembersRequest = Message$1<"quick.v1.ListMembersRequest"> & {
    /**
     * @generated from field: string conversation_id = 1;
     */
    conversationId: string;
};
/**
 * Describes the message quick.v1.ListMembersRequest.
 * Use `create(ListMembersRequestSchema)` to create a new message.
 */
export declare const ListMembersRequestSchema: GenMessage<ListMembersRequest>;
/**
 * @generated from message quick.v1.ListMembersResponse
 */
export type ListMembersResponse = Message$1<"quick.v1.ListMembersResponse"> & {
    /**
     * @generated from field: repeated quick.v1.Member members = 1;
     */
    members: Member[];
};
/**
 * Describes the message quick.v1.ListMembersResponse.
 * Use `create(ListMembersResponseSchema)` to create a new message.
 */
export declare const ListMembersResponseSchema: GenMessage<ListMembersResponse>;
/**
 * @generated from message quick.v1.Member
 */
export type Member = Message$1<"quick.v1.Member"> & {
    /**
     * @generated from field: quick.v1.User user = 1;
     */
    user?: User | undefined;
    /**
     * @generated from field: string role = 2;
     */
    role: string;
    /**
     * @generated from field: google.protobuf.Timestamp joined_at = 3;
     */
    joinedAt?: Timestamp | undefined;
};
/**
 * Describes the message quick.v1.Member.
 * Use `create(MemberSchema)` to create a new message.
 */
export declare const MemberSchema: GenMessage<Member>;
/**
 * @generated from service quick.v1.Messaging
 */
export declare const Messaging: GenService<{
    /**
     * @generated from rpc quick.v1.Messaging.ListConversations
     */
    listConversations: {
        methodKind: "unary";
        input: typeof ListConversationsRequestSchema;
        output: typeof ListConversationsResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Messaging.OpenDM
     */
    openDM: {
        methodKind: "unary";
        input: typeof OpenDMRequestSchema;
        output: typeof OpenDMResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Messaging.ListMessages
     */
    listMessages: {
        methodKind: "unary";
        input: typeof ListMessagesRequestSchema;
        output: typeof ListMessagesResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Messaging.SendMessage
     */
    sendMessage: {
        methodKind: "unary";
        input: typeof SendMessageRequestSchema;
        output: typeof SendMessageResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Messaging.MarkRead
     */
    markRead: {
        methodKind: "unary";
        input: typeof MarkReadRequestSchema;
        output: typeof MarkReadResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Messaging.CreateGroup
     */
    createGroup: {
        methodKind: "unary";
        input: typeof CreateGroupRequestSchema;
        output: typeof CreateGroupResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Messaging.CreateChannel
     */
    createChannel: {
        methodKind: "unary";
        input: typeof CreateChannelRequestSchema;
        output: typeof CreateChannelResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Messaging.AddMembers
     */
    addMembers: {
        methodKind: "unary";
        input: typeof AddMembersRequestSchema;
        output: typeof AddMembersResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Messaging.RemoveMember
     */
    removeMember: {
        methodKind: "unary";
        input: typeof RemoveMemberRequestSchema;
        output: typeof RemoveMemberResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Messaging.LeaveConversation
     */
    leaveConversation: {
        methodKind: "unary";
        input: typeof LeaveConversationRequestSchema;
        output: typeof LeaveConversationResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Messaging.ListMembers
     */
    listMembers: {
        methodKind: "unary";
        input: typeof ListMembersRequestSchema;
        output: typeof ListMembersResponseSchema;
    };
}>;
