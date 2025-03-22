import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { RpcError } from '@protobuf-ts/runtime-rpc';

import * as users from './gen/proto/users/v1/users';

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(React.createElement(App), document.getElementById("root"));
});

const App: React.FC = () => {
  const userService = new users.users.v1.UserServiceClient("localhost:8080");
  return <UserForm userService={userService} />;
};

type UserFormProps = {
  userService: users.users.v1.UserServiceClient;
};

const UserForm: React.FC<UserFormProps> = ({ userService }: UserFormProps) => {
  const [currentUser, setCurrentUser] = useState<users.users.v1.User | undefined>();
  const [userName, setUsername] = useState<string>("");
  const [error, setError] = useState<RpcError | undefined>();

  const createUser = (client: users.users.v1.UserServiceClient, request: users.users.v1.CreateUserRequest): Promise<users.users.v1.CreateUserResponse> => {
    return new Promise((resolve, reject) => {
        client.CreateUser(request, null, (error, response) => {
            if (error) {
                reject(error);
            } else {
                resolve(response);
            }
        });
    });
};

  if (error !== undefined) {
    return (
      <div>
        <h1>error: {error.message}</h1>
        <button onClick={() => setError(undefined)}>Clear error</button>
      </div>
    );
  }
  if (currentUser === undefined) {
    return (
      <form>
        <input
          value={userName}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Enter a username"
          type="text"
        ></input>
        <button
          onClick={async (event) => {
            event.preventDefault();
            try {
              const request = new users.users.v1.CreateUserRequest({ name: userName });

              // Await the response from CreateUser
              const response = await createUser(userService, request);

              await userService.CreateUser(request, null, () => response);

              const user = response.user;

              // Update the current user
              setCurrentUser(user);
            } catch (error) {
              setError(error as RpcError);
            }
          }}
        >
          Create User
        </button>
      </form>
    );
  }
  return (
    <div>
      <h1>Your name: {currentUser.name}</h1>
      <h2>Your ID: {currentUser.id}</h2>
      <button onClick={() => setCurrentUser(undefined)}>Clear user</button>
    </div>
  );
};
