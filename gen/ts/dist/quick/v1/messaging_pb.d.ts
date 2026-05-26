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
    /**
     * Voice attachment, populated by backend when this is a voice message.
     * body is empty in that case. S11.
     *
     * @generated from field: quick.v1.Voice voice = 6;
     */
    voice?: Voice | undefined;
};
/**
 * Describes the message quick.v1.Message.
 * Use `create(MessageSchema)` to create a new message.
 */
export declare const MessageSchema: GenMessage<Message>;
/**
 * @generated from message quick.v1.Voice
 */
export type Voice = Message$1<"quick.v1.Voice"> & {
    /**
     * immutable id for the underlying media row
     *
     * @generated from field: string file_id = 1;
     */
    fileId: string;
    /**
     * signed/scoped URL the client fetches the blob from
     *
     * @generated from field: string url = 2;
     */
    url: string;
    /**
     * total length in milliseconds
     *
     * @generated from field: int32 duration_ms = 3;
     */
    durationMs: number;
    /**
     * 64 normalised amplitude values 0-255 for the waveform
     *
     * @generated from field: repeated int32 peaks = 4;
     */
    peaks: number[];
    /**
     * server view: true if THIS reader has already played it
     *
     * @generated from field: bool played = 5;
     */
    played: boolean;
};
/**
 * Describes the message quick.v1.Voice.
 * Use `create(VoiceSchema)` to create a new message.
 */
export declare const VoiceSchema: GenMessage<Voice>;
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
 * @generated from message quick.v1.DeleteConversationRequest
 */
export type DeleteConversationRequest = Message$1<"quick.v1.DeleteConversationRequest"> & {
    /**
     * @generated from field: string conversation_id = 1;
     */
    conversationId: string;
    /**
     * DM: also delete on peer's side; group/channel: owner-only full delete
     *
     * @generated from field: bool for_everyone = 2;
     */
    forEveryone: boolean;
};
/**
 * Describes the message quick.v1.DeleteConversationRequest.
 * Use `create(DeleteConversationRequestSchema)` to create a new message.
 */
export declare const DeleteConversationRequestSchema: GenMessage<DeleteConversationRequest>;
/**
 * @generated from message quick.v1.DeleteConversationResponse
 */
export type DeleteConversationResponse = Message$1<"quick.v1.DeleteConversationResponse"> & {};
/**
 * Describes the message quick.v1.DeleteConversationResponse.
 * Use `create(DeleteConversationResponseSchema)` to create a new message.
 */
export declare const DeleteConversationResponseSchema: GenMessage<DeleteConversationResponse>;
/**
 * @generated from message quick.v1.EditMessageRequest
 */
export type EditMessageRequest = Message$1<"quick.v1.EditMessageRequest"> & {
    /**
     * @generated from field: string message_id = 1;
     */
    messageId: string;
    /**
     * @generated from field: string body = 2;
     */
    body: string;
};
/**
 * Describes the message quick.v1.EditMessageRequest.
 * Use `create(EditMessageRequestSchema)` to create a new message.
 */
export declare const EditMessageRequestSchema: GenMessage<EditMessageRequest>;
/**
 * @generated from message quick.v1.EditMessageResponse
 */
export type EditMessageResponse = Message$1<"quick.v1.EditMessageResponse"> & {
    /**
     * @generated from field: quick.v1.Message message = 1;
     */
    message?: Message | undefined;
};
/**
 * Describes the message quick.v1.EditMessageResponse.
 * Use `create(EditMessageResponseSchema)` to create a new message.
 */
export declare const EditMessageResponseSchema: GenMessage<EditMessageResponse>;
/**
 * @generated from message quick.v1.DeleteMessageRequest
 */
export type DeleteMessageRequest = Message$1<"quick.v1.DeleteMessageRequest"> & {
    /**
     * @generated from field: string message_id = 1;
     */
    messageId: string;
    /**
     * @generated from field: bool for_everyone = 2;
     */
    forEveryone: boolean;
};
/**
 * Describes the message quick.v1.DeleteMessageRequest.
 * Use `create(DeleteMessageRequestSchema)` to create a new message.
 */
export declare const DeleteMessageRequestSchema: GenMessage<DeleteMessageRequest>;
/**
 * @generated from message quick.v1.DeleteMessageResponse
 */
export type DeleteMessageResponse = Message$1<"quick.v1.DeleteMessageResponse"> & {};
/**
 * Describes the message quick.v1.DeleteMessageResponse.
 * Use `create(DeleteMessageResponseSchema)` to create a new message.
 */
export declare const DeleteMessageResponseSchema: GenMessage<DeleteMessageResponse>;
/**
 * @generated from message quick.v1.PinMessageRequest
 */
export type PinMessageRequest = Message$1<"quick.v1.PinMessageRequest"> & {
    /**
     * @generated from field: string message_id = 1;
     */
    messageId: string;
};
/**
 * Describes the message quick.v1.PinMessageRequest.
 * Use `create(PinMessageRequestSchema)` to create a new message.
 */
export declare const PinMessageRequestSchema: GenMessage<PinMessageRequest>;
/**
 * @generated from message quick.v1.PinMessageResponse
 */
export type PinMessageResponse = Message$1<"quick.v1.PinMessageResponse"> & {};
/**
 * Describes the message quick.v1.PinMessageResponse.
 * Use `create(PinMessageResponseSchema)` to create a new message.
 */
export declare const PinMessageResponseSchema: GenMessage<PinMessageResponse>;
/**
 * @generated from message quick.v1.UnpinMessageRequest
 */
export type UnpinMessageRequest = Message$1<"quick.v1.UnpinMessageRequest"> & {
    /**
     * @generated from field: string message_id = 1;
     */
    messageId: string;
};
/**
 * Describes the message quick.v1.UnpinMessageRequest.
 * Use `create(UnpinMessageRequestSchema)` to create a new message.
 */
export declare const UnpinMessageRequestSchema: GenMessage<UnpinMessageRequest>;
/**
 * @generated from message quick.v1.UnpinMessageResponse
 */
export type UnpinMessageResponse = Message$1<"quick.v1.UnpinMessageResponse"> & {};
/**
 * Describes the message quick.v1.UnpinMessageResponse.
 * Use `create(UnpinMessageResponseSchema)` to create a new message.
 */
export declare const UnpinMessageResponseSchema: GenMessage<UnpinMessageResponse>;
/**
 * @generated from message quick.v1.MessageReader
 */
export type MessageReader = Message$1<"quick.v1.MessageReader"> & {
    /**
     * @generated from field: quick.v1.User user = 1;
     */
    user?: User | undefined;
    /**
     * @generated from field: google.protobuf.Timestamp read_at = 2;
     */
    readAt?: Timestamp | undefined;
};
/**
 * Describes the message quick.v1.MessageReader.
 * Use `create(MessageReaderSchema)` to create a new message.
 */
export declare const MessageReaderSchema: GenMessage<MessageReader>;
/**
 * @generated from message quick.v1.GetMessageReadersRequest
 */
export type GetMessageReadersRequest = Message$1<"quick.v1.GetMessageReadersRequest"> & {
    /**
     * @generated from field: string message_id = 1;
     */
    messageId: string;
};
/**
 * Describes the message quick.v1.GetMessageReadersRequest.
 * Use `create(GetMessageReadersRequestSchema)` to create a new message.
 */
export declare const GetMessageReadersRequestSchema: GenMessage<GetMessageReadersRequest>;
/**
 * @generated from message quick.v1.GetMessageReadersResponse
 */
export type GetMessageReadersResponse = Message$1<"quick.v1.GetMessageReadersResponse"> & {
    /**
     * @generated from field: repeated quick.v1.MessageReader readers = 1;
     */
    readers: MessageReader[];
};
/**
 * Describes the message quick.v1.GetMessageReadersResponse.
 * Use `create(GetMessageReadersResponseSchema)` to create a new message.
 */
export declare const GetMessageReadersResponseSchema: GenMessage<GetMessageReadersResponse>;
/**
 * @generated from message quick.v1.PinConversationRequest
 */
export type PinConversationRequest = Message$1<"quick.v1.PinConversationRequest"> & {
    /**
     * @generated from field: string conversation_id = 1;
     */
    conversationId: string;
};
/**
 * Describes the message quick.v1.PinConversationRequest.
 * Use `create(PinConversationRequestSchema)` to create a new message.
 */
export declare const PinConversationRequestSchema: GenMessage<PinConversationRequest>;
/**
 * @generated from message quick.v1.PinConversationResponse
 */
export type PinConversationResponse = Message$1<"quick.v1.PinConversationResponse"> & {};
/**
 * Describes the message quick.v1.PinConversationResponse.
 * Use `create(PinConversationResponseSchema)` to create a new message.
 */
export declare const PinConversationResponseSchema: GenMessage<PinConversationResponse>;
/**
 * @generated from message quick.v1.UnpinConversationRequest
 */
export type UnpinConversationRequest = Message$1<"quick.v1.UnpinConversationRequest"> & {
    /**
     * @generated from field: string conversation_id = 1;
     */
    conversationId: string;
};
/**
 * Describes the message quick.v1.UnpinConversationRequest.
 * Use `create(UnpinConversationRequestSchema)` to create a new message.
 */
export declare const UnpinConversationRequestSchema: GenMessage<UnpinConversationRequest>;
/**
 * @generated from message quick.v1.UnpinConversationResponse
 */
export type UnpinConversationResponse = Message$1<"quick.v1.UnpinConversationResponse"> & {};
/**
 * Describes the message quick.v1.UnpinConversationResponse.
 * Use `create(UnpinConversationResponseSchema)` to create a new message.
 */
export declare const UnpinConversationResponseSchema: GenMessage<UnpinConversationResponse>;
/**
 * @generated from message quick.v1.SendVoiceMessageRequest
 */
export type SendVoiceMessageRequest = Message$1<"quick.v1.SendVoiceMessageRequest"> & {
    /**
     * @generated from field: string conversation_id = 1;
     */
    conversationId: string;
    /**
     * returned by POST /v1/media/voice
     *
     * @generated from field: string voice_file_id = 2;
     */
    voiceFileId: string;
};
/**
 * Describes the message quick.v1.SendVoiceMessageRequest.
 * Use `create(SendVoiceMessageRequestSchema)` to create a new message.
 */
export declare const SendVoiceMessageRequestSchema: GenMessage<SendVoiceMessageRequest>;
/**
 * @generated from message quick.v1.SendVoiceMessageResponse
 */
export type SendVoiceMessageResponse = Message$1<"quick.v1.SendVoiceMessageResponse"> & {
    /**
     * @generated from field: quick.v1.Message message = 1;
     */
    message?: Message | undefined;
};
/**
 * Describes the message quick.v1.SendVoiceMessageResponse.
 * Use `create(SendVoiceMessageResponseSchema)` to create a new message.
 */
export declare const SendVoiceMessageResponseSchema: GenMessage<SendVoiceMessageResponse>;
/**
 * @generated from message quick.v1.MarkVoicePlayedRequest
 */
export type MarkVoicePlayedRequest = Message$1<"quick.v1.MarkVoicePlayedRequest"> & {
    /**
     * @generated from field: string message_id = 1;
     */
    messageId: string;
};
/**
 * Describes the message quick.v1.MarkVoicePlayedRequest.
 * Use `create(MarkVoicePlayedRequestSchema)` to create a new message.
 */
export declare const MarkVoicePlayedRequestSchema: GenMessage<MarkVoicePlayedRequest>;
/**
 * @generated from message quick.v1.MarkVoicePlayedResponse
 */
export type MarkVoicePlayedResponse = Message$1<"quick.v1.MarkVoicePlayedResponse"> & {};
/**
 * Describes the message quick.v1.MarkVoicePlayedResponse.
 * Use `create(MarkVoicePlayedResponseSchema)` to create a new message.
 */
export declare const MarkVoicePlayedResponseSchema: GenMessage<MarkVoicePlayedResponse>;
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
    /**
     * S10 — TG parity additions.
     *
     * @generated from rpc quick.v1.Messaging.DeleteConversation
     */
    deleteConversation: {
        methodKind: "unary";
        input: typeof DeleteConversationRequestSchema;
        output: typeof DeleteConversationResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Messaging.EditMessage
     */
    editMessage: {
        methodKind: "unary";
        input: typeof EditMessageRequestSchema;
        output: typeof EditMessageResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Messaging.DeleteMessage
     */
    deleteMessage: {
        methodKind: "unary";
        input: typeof DeleteMessageRequestSchema;
        output: typeof DeleteMessageResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Messaging.PinMessage
     */
    pinMessage: {
        methodKind: "unary";
        input: typeof PinMessageRequestSchema;
        output: typeof PinMessageResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Messaging.UnpinMessage
     */
    unpinMessage: {
        methodKind: "unary";
        input: typeof UnpinMessageRequestSchema;
        output: typeof UnpinMessageResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Messaging.GetMessageReaders
     */
    getMessageReaders: {
        methodKind: "unary";
        input: typeof GetMessageReadersRequestSchema;
        output: typeof GetMessageReadersResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Messaging.PinConversation
     */
    pinConversation: {
        methodKind: "unary";
        input: typeof PinConversationRequestSchema;
        output: typeof PinConversationResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Messaging.UnpinConversation
     */
    unpinConversation: {
        methodKind: "unary";
        input: typeof UnpinConversationRequestSchema;
        output: typeof UnpinConversationResponseSchema;
    };
    /**
     * S11 — voice messages. Upload itself is a multipart HTTP POST to /v1/media/voice
     * (not RPC — Connect-RPC is awkward for binary streams). That endpoint returns
     * {file_id, url, duration_ms, peaks}. Then the client calls SendVoiceMessage
     * which writes a kind='voice' message into the thread referencing the file_id.
     *
     * @generated from rpc quick.v1.Messaging.SendVoiceMessage
     */
    sendVoiceMessage: {
        methodKind: "unary";
        input: typeof SendVoiceMessageRequestSchema;
        output: typeof SendVoiceMessageResponseSchema;
    };
    /**
     * @generated from rpc quick.v1.Messaging.MarkVoicePlayed
     */
    markVoicePlayed: {
        methodKind: "unary";
        input: typeof MarkVoicePlayedRequestSchema;
        output: typeof MarkVoicePlayedResponseSchema;
    };
}>;
