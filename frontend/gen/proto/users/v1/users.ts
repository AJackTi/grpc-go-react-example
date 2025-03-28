/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 0.0.0
 * source: proto/users/v1/users.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
import * as grpc_web_1 from "grpc-web";
export namespace users.v1 {
    export class User extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: string;
            name?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            id?: string;
            name?: string;
        }): User {
            const message = new User({});
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.name != null) {
                message.name = data.name;
            }
            return message;
        }
        toObject() {
            const data: {
                id?: string;
                name?: string;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.name != null) {
                data.name = this.name;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id.length)
                writer.writeString(1, this.id);
            if (this.name.length)
                writer.writeString(2, this.name);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): User {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new User();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    case 2:
                        message.name = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): User {
            return User.deserialize(bytes);
        }
    }
    export class GetUserRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            user_id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("user_id" in data && data.user_id != undefined) {
                    this.user_id = data.user_id;
                }
            }
        }
        get user_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set user_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            user_id?: string;
        }): GetUserRequest {
            const message = new GetUserRequest({});
            if (data.user_id != null) {
                message.user_id = data.user_id;
            }
            return message;
        }
        toObject() {
            const data: {
                user_id?: string;
            } = {};
            if (this.user_id != null) {
                data.user_id = this.user_id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.user_id.length)
                writer.writeString(1, this.user_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetUserRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetUserRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.user_id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GetUserRequest {
            return GetUserRequest.deserialize(bytes);
        }
    }
    export class GetUserResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            user?: User;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("user" in data && data.user != undefined) {
                    this.user = data.user;
                }
            }
        }
        get user() {
            return pb_1.Message.getWrapperField(this, User, 1) as User;
        }
        set user(value: User) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_user() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            user?: ReturnType<typeof User.prototype.toObject>;
        }): GetUserResponse {
            const message = new GetUserResponse({});
            if (data.user != null) {
                message.user = User.fromObject(data.user);
            }
            return message;
        }
        toObject() {
            const data: {
                user?: ReturnType<typeof User.prototype.toObject>;
            } = {};
            if (this.user != null) {
                data.user = this.user.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_user)
                writer.writeMessage(1, this.user, () => this.user.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetUserResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetUserResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.user, () => message.user = User.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GetUserResponse {
            return GetUserResponse.deserialize(bytes);
        }
    }
    export class CreateUserRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            name?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
            }
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            name?: string;
        }): CreateUserRequest {
            const message = new CreateUserRequest({});
            if (data.name != null) {
                message.name = data.name;
            }
            return message;
        }
        toObject() {
            const data: {
                name?: string;
            } = {};
            if (this.name != null) {
                data.name = this.name;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.name.length)
                writer.writeString(1, this.name);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CreateUserRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CreateUserRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.name = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): CreateUserRequest {
            return CreateUserRequest.deserialize(bytes);
        }
    }
    export class CreateUserResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            user?: User;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("user" in data && data.user != undefined) {
                    this.user = data.user;
                }
            }
        }
        get user() {
            return pb_1.Message.getWrapperField(this, User, 1) as User;
        }
        set user(value: User) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_user() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            user?: ReturnType<typeof User.prototype.toObject>;
        }): CreateUserResponse {
            const message = new CreateUserResponse({});
            if (data.user != null) {
                message.user = User.fromObject(data.user);
            }
            return message;
        }
        toObject() {
            const data: {
                user?: ReturnType<typeof User.prototype.toObject>;
            } = {};
            if (this.user != null) {
                data.user = this.user.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_user)
                writer.writeMessage(1, this.user, () => this.user.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CreateUserResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CreateUserResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.user, () => message.user = User.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): CreateUserResponse {
            return CreateUserResponse.deserialize(bytes);
        }
    }
    export abstract class UnimplementedUserServiceService {
        static definition = {
            GetUser: {
                path: "/users.v1.UserService/GetUser",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: GetUserRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => GetUserRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: GetUserResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => GetUserResponse.deserialize(new Uint8Array(bytes))
            },
            CreateUser: {
                path: "/users.v1.UserService/CreateUser",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: CreateUserRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => CreateUserRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: CreateUserResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => CreateUserResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract GetUser(call: grpc_1.ServerUnaryCall<GetUserRequest, GetUserResponse>, callback: grpc_1.sendUnaryData<GetUserResponse>): void;
        abstract CreateUser(call: grpc_1.ServerUnaryCall<CreateUserRequest, CreateUserResponse>, callback: grpc_1.sendUnaryData<CreateUserResponse>): void;
    }
    export class UserServiceClient {
        private _address: string;
        private _client: grpc_web_1.GrpcWebClientBase;
        constructor(address: string, credentials?: Object, options?: grpc_web_1.GrpcWebClientBaseOptions) {
            if (!options)
                options = {};
            options.format = options.format || "text";
            this._address = address;
            this._client = new grpc_web_1.GrpcWebClientBase(options);
        }
        private static GetUser = new grpc_web_1.MethodDescriptor<GetUserRequest, GetUserResponse>("/users.v1.UserService/GetUser", grpc_web_1.MethodType.UNARY, GetUserRequest, GetUserResponse, (message: GetUserRequest) => message.serialize(), GetUserResponse.deserialize);
        GetUser(message: GetUserRequest, metadata: grpc_web_1.Metadata | null, callback: (error: grpc_web_1.RpcError, response: GetUserResponse) => void) {
            return this._client.rpcCall<GetUserRequest, GetUserResponse>(this._address + "/users.v1.UserService/GetUser", message, metadata || {}, UserServiceClient.GetUser, callback);
        }
        private static CreateUser = new grpc_web_1.MethodDescriptor<CreateUserRequest, CreateUserResponse>("/users.v1.UserService/CreateUser", grpc_web_1.MethodType.UNARY, CreateUserRequest, CreateUserResponse, (message: CreateUserRequest) => message.serialize(), CreateUserResponse.deserialize);
        CreateUser(message: CreateUserRequest, metadata: grpc_web_1.Metadata | null, callback: (error: grpc_web_1.RpcError, response: CreateUserResponse) => void) {
            return this._client.rpcCall<CreateUserRequest, CreateUserResponse>(this._address + "/users.v1.UserService/CreateUser", message, metadata || {}, UserServiceClient.CreateUser, callback);
        }
    }
}
