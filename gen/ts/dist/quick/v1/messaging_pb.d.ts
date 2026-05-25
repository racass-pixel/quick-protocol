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
}>;
