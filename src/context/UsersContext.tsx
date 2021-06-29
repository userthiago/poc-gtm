import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface UsersContextData {
  users: Array<UserData>;
  handleGetUser: (UserId: number) => UserData | undefined;
}

export const UsersContext = createContext({} as UsersContextData);

export const UsersContextProvider: React.FC = ({ children, ...props }) => {
  const [users, setUsers] = useState<Array<UserData>>([]);

  useEffect(() => {
    axios
      .get<Array<UserData>>('https://jsonplaceholder.typicode.com/Users')
      .then(res => setUsers(res.data));
  }, []);

  function handleGetUser(UserId: number) {
    return users.find(user => user.id === UserId);
  }

  return (
    <UsersContext.Provider value={{ users, handleGetUser }} {...props}>
      {children}
    </UsersContext.Provider>
  );
};
