import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file quick/v1/crypto.proto.
 */
export declare const file_quick_v1_crypto: GenFile;
/**
 * IdentityKey is the per-user long-term X25519 public key. The matching
 * private key never leaves the device — it's stored client-side in OS
 * keyring (flutter_secure_storage on desktop, IndexedDB on web).
 *
 * Backend stores only the public key; it cannot read any message ciphertext.
 *
 * @generated from message quick.v1.IdentityKey
 */
export type IdentityKey = Message<"quick.v1.IdentityKey"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * 32-byte raw X25519 public key
     *
     * @generated from field: bytes public_key = 2;
     */
    publicKey: Uint8Array;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 3;
     */
    createdAt?: Timestamp | undefined;
};
/**
 * Describes the message quick.v1.IdentityKey.
 * Use `create(IdentityKeySchema)` to create a new message.
 */
export declare const IdentityKeySchema: GenMessage<IdentityKey>;
/**
 * EncryptedPayload is the wire shape for AES-256-GCM-sealed message bodies.
 * AAD binds the sender_id + conversation_id + created_at so a replay or
 * cross-conversation splice is rejected by the recipient's GCM verifier.
 *
 * nonce is 12 bytes (random per message). ciphertext includes the 16-byte
 * GCM tag at the tail.
 *
 * sender_key_id is a short opaque label identifying which key bundle slot
 * this payload was sealed against — clients keep a small LRU and rotate by
 * re-uploading a new bundle when needed.
 *
 * @generated from message quick.v1.EncryptedPayload
 */
export type EncryptedPayload = Message<"quick.v1.EncryptedPayload"> & {
    /**
     * @generated from field: bytes ciphertext = 1;
     */
    ciphertext: Uint8Array;
    /**
     * @generated from field: bytes nonce = 2;
     */
    nonce: Uint8Array;
    /**
     * @generated from field: string sender_key_id = 3;
     */
    senderKeyId: string;
};
/**
 * Describes the message quick.v1.EncryptedPayload.
 * Use `create(EncryptedPayloadSchema)` to create a new message.
 */
export declare const EncryptedPayloadSchema: GenMessage<EncryptedPayload>;
/**
 * GroupKeyBundle is the per-conversation symmetric key wrapped to every
 * member's identity public key. Each `ciphertext_per_member` value is the
 * AES-GCM ciphertext + GCM tag of the 32-byte group key, sealed under a
 * key derived via ECDH(uploader_priv, member_pub).
 *
 * nonce is shared across all per-member slots (each slot uses a fresh
 * derived key, so the same nonce reuse across slots is safe).
 *
 * The uploader must be a current member with a known identity key. The
 * bundle is replaced wholesale on membership changes — there's no
 * incremental update RPC in this iteration.
 *
 * @generated from message quick.v1.GroupKeyBundle
 */
export type GroupKeyBundle = Message<"quick.v1.GroupKeyBundle"> & {
    /**
     * @generated from field: string conversation_id = 1;
     */
    conversationId: string;
    /**
     * key=user_id, value=wrapped-32B-key
     *
     * @generated from field: map<string, bytes> ciphertext_per_member = 2;
     */
    ciphertextPerMember: {
        [key: string]: Uint8Array;
    };
    /**
     * @generated from field: bytes nonce = 3;
     */
    nonce: Uint8Array;
    /**
     * @generated from field: google.protobuf.Timestamp updated_at = 4;
     */
    updatedAt?: Timestamp | undefined;
};
/**
 * Describes the message quick.v1.GroupKeyBundle.
 * Use `create(GroupKeyBundleSchema)` to create a new message.
 */
export declare const GroupKeyBundleSchema: GenMessage<GroupKeyBundle>;
